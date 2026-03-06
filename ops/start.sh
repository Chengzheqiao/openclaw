#!/usr/bin/env bash
# OpenClaw Gateway 启动脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/_common.sh"

ops::ensure_runtime_path
ops::cd_project

if ops::is_running "$OPS_PORT"; then
    PID="$(ops::first_listener_pid "$OPS_PORT")"
    echo "[INFO] Gateway 已在端口 $OPS_PORT 运行 (PID: ${PID:-unknown})"
    echo "[INFO] Web UI: $(ops::display_url)"
    exit 0
fi

echo "[INFO] 启动 OpenClaw Gateway..."
echo "[INFO] 端口: $OPS_PORT"
echo "[INFO] 绑定: $OPS_BIND"
echo "[INFO] 日志: $OPS_LOG_FILE"

START_PID="$(ops::start_gateway)"

if ops::wait_for_start "$OPS_PORT" 30; then
    PID="$(ops::first_listener_pid "$OPS_PORT")"
    echo ""
    echo "[OK] Gateway 启动成功 (PID: ${PID:-$START_PID})"
    echo "[INFO] Web UI: $(ops::display_url)"
    exit 0
fi

echo ""
echo "[ERROR] Gateway 启动失败，请检查日志: $OPS_LOG_FILE"
if [[ -f "$OPS_LOG_FILE" ]]; then
    tail -20 "$OPS_LOG_FILE"
fi
exit 1
