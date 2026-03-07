#!/usr/bin/env bash
# Open the OpenClaw terminal UI using global CLI when available, else repo-local CLI.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/_common.sh"

ops::ensure_runtime_path
ops::cd_project
ops::use_project_node

echo "[INFO] Opening OpenClaw TUI..."
echo "[INFO] Node: $(node -v)"

if ops::has_global_openclaw; then
  echo "[INFO] CLI: $(command -v openclaw)"
else
  echo "[INFO] CLI: repo-local openclaw.mjs"
fi

ops::run_openclaw tui "$@"
