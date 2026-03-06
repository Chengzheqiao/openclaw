#!/usr/bin/env bash
# OpenClaw Gateway 停止脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/_common.sh"

ops::ensure_runtime_path
ops::cd_project

echo "[INFO] 停止 OpenClaw Gateway..."

# 使用 openclaw 命令停止
node openclaw.mjs gateway stop 2>/dev/null || true

pkill -f "openclaw.mjs gateway run" 2>/dev/null || true
pkill -f "dist/entry.js gateway" 2>/dev/null || true

ops::kill_listener_pids "$OPS_PORT" TERM

if ! ops::wait_for_exit "$OPS_PORT" 10; then
    echo "[WARN] 端口 $OPS_PORT 仍被占用，尝试强制终止..."
    ops::kill_listener_pids "$OPS_PORT" KILL
    sleep 1
fi

echo "[OK] Gateway 已停止"
