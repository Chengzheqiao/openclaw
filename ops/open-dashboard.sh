#!/usr/bin/env bash
# Open the tokenized OpenClaw dashboard URL using the repo's Node version.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/_common.sh"

ops::ensure_runtime_path
ops::cd_project
ops::use_project_node

echo "[INFO] Opening OpenClaw dashboard..."
echo "[INFO] Node: $(node -v)"

if ops::has_global_openclaw; then
  echo "[INFO] CLI: $(command -v openclaw)"
else
  echo "[INFO] CLI: repo-local openclaw.mjs"
fi

ops::run_openclaw dashboard "$@"
