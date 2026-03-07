#!/usr/bin/env bash
# OpenClaw Gateway 启动脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/_common.sh"

OPEN_MODE="${1:-dashboard}"
if [[ "$OPEN_MODE" == "dashboard" || "$OPEN_MODE" == "tui" || "$OPEN_MODE" == "none" ]]; then
    shift || true
else
    OPEN_MODE="${OPENCLAW_OPEN_MODE:-dashboard}"
fi

open_after_start() {
    case "$OPEN_MODE" in
        dashboard)
            "$SCRIPT_DIR/open-dashboard.sh" "$@"
            ;;
        tui)
            "$SCRIPT_DIR/open-tui.sh" "$@"
            ;;
        none)
            ;;
        *)
            echo "[WARN] 未知打开模式: $OPEN_MODE"
            echo "[INFO] 支持的模式: dashboard | tui | none"
            return 1
            ;;
    esac
}

ops::ensure_runtime_path
ops::cd_project
ops::use_project_node

if ops::is_running "$OPS_PORT"; then
    PID="$(ops::first_listener_pid "$OPS_PORT")"
    echo "[INFO] Gateway 已在端口 $OPS_PORT 运行 (PID: ${PID:-unknown})"
    echo "[INFO] Web UI: $(ops::display_url)"
    open_after_start "$@"
    exit $?
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
    open_after_start "$@"
    exit $?
fi

echo ""
echo "[ERROR] Gateway 启动失败，请检查日志: $OPS_LOG_FILE"
if [[ -f "$OPS_LOG_FILE" ]]; then
    tail -20 "$OPS_LOG_FILE"
fi
exit 1
