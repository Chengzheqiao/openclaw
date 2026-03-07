#!/usr/bin/env bash
# Shared helpers for OpenClaw ops scripts across macOS and Linux.
set -euo pipefail

OPS_SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OPS_PROJECT_DIR="$(dirname "$OPS_SCRIPT_DIR")"
OPS_LOG_FILE="${OPENCLAW_LOG_FILE:-/tmp/openclaw-gateway.log}"
OPS_PORT="${OPENCLAW_PORT:-18789}"
OPS_BIND="${OPENCLAW_BIND:-loopback}"

ops::ensure_runtime_path() {
  local candidate
  for candidate in /opt/homebrew/bin /usr/local/bin "$HOME/.local/bin"; do
    if [[ -d "$candidate" && ":$PATH:" != *":$candidate:"* ]]; then
      PATH="$candidate:$PATH"
    fi
  done
  export PATH
}

ops::cd_project() {
  cd "$OPS_PROJECT_DIR"
}

ops::load_nvm() {
  local nvm_dir="${NVM_DIR:-$HOME/.nvm}"
  if [[ ! -s "$nvm_dir/nvm.sh" ]]; then
    return 1
  fi
  export NVM_DIR="$nvm_dir"
  # shellcheck disable=SC1090
  . "$NVM_DIR/nvm.sh"
}

ops::use_project_node() {
  local nvmrc_path="$OPS_PROJECT_DIR/.nvmrc"
  if [[ ! -f "$nvmrc_path" ]]; then
    return 0
  fi
  if ! ops::load_nvm; then
    return 0
  fi
  if ! nvm use >/dev/null 2>&1; then
    echo "[INFO] Installing Node version from .nvmrc..."
    nvm install >/dev/null
    nvm use >/dev/null
  fi
}

ops::has_global_openclaw() {
  command -v openclaw >/dev/null 2>&1
}

ops::run_openclaw() {
  if ops::has_global_openclaw; then
    openclaw "$@"
    return
  fi

  node openclaw.mjs "$@"
}

ops::port_listener_pids() {
  local port="${1:?port required}"

  if command -v lsof >/dev/null 2>&1; then
    lsof -nP -tiTCP:"$port" -sTCP:LISTEN 2>/dev/null | awk '!seen[$0]++'
    return 0
  fi

  if command -v ss >/dev/null 2>&1; then
    ss -ltnp 2>/dev/null |
      awk -v port=":${port}" '
        $0 ~ port {
          if (match($0, /pid=[0-9]+/)) {
            pid = substr($0, RSTART + 4, RLENGTH - 4);
            if (!seen[pid]++) {
              print pid;
            }
          }
        }
      '
    return 0
  fi

  return 1
}

ops::is_running() {
  local port="${1:?port required}"
  local pids
  pids="$(ops::port_listener_pids "$port" || true)"
  [[ -n "$pids" ]]
}

ops::first_listener_pid() {
  local port="${1:?port required}"
  ops::port_listener_pids "$port" | head -1
}

ops::kill_listener_pids() {
  local port="${1:?port required}"
  local signal="${2:-TERM}"
  local pids
  pids="$(ops::port_listener_pids "$port" || true)"
  [[ -z "$pids" ]] && return 0
  while IFS= read -r pid; do
    [[ -z "$pid" ]] && continue
    kill "-$signal" "$pid" 2>/dev/null || true
  done <<<"$pids"
}

ops::wait_for_exit() {
  local port="${1:?port required}"
  local attempts="${2:-10}"
  local i
  for ((i = 0; i < attempts; i++)); do
    if ! ops::is_running "$port"; then
      return 0
    fi
    sleep 1
  done
  return 1
}

ops::wait_for_start() {
  local port="${1:?port required}"
  local attempts="${2:-30}"
  local i
  for ((i = 0; i < attempts; i++)); do
    if ops::is_running "$port"; then
      return 0
    fi
    sleep 1
    printf "."
  done
  return 1
}

ops::start_gateway() {
  nohup node openclaw.mjs gateway run --bind "$OPS_BIND" --port "$OPS_PORT" --force </dev/null >"$OPS_LOG_FILE" 2>&1 &
  echo $!
}

ops::display_url() {
  case "$OPS_BIND" in
    loopback)
      echo "http://127.0.0.1:$OPS_PORT/"
      ;;
    lan)
      echo "http://0.0.0.0:$OPS_PORT/"
      ;;
    custom)
      echo "http://127.0.0.1:$OPS_PORT/"
      ;;
    *)
      echo "http://127.0.0.1:$OPS_PORT/"
      ;;
  esac
}
