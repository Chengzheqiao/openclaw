#!/usr/bin/env bash
# OpenClaw 状态检查脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/_common.sh"

ops::ensure_runtime_path
ops::cd_project

echo "========================================="
echo "  OpenClaw 状态"
echo "========================================="
echo ""

# 检查端口
echo "[Gateway 进程]"
if ops::is_running "$OPS_PORT"; then
    echo "  状态: 运行中"
    echo "  端口: $OPS_PORT"
    PID="$(ops::first_listener_pid "$OPS_PORT")"
    if [[ -n "$PID" ]]; then
        echo "  PID:  $PID"
    fi
    echo "  地址: $(ops::display_url)"
else
    echo "  状态: 未运行"
fi

echo ""

# 调用 openclaw health
echo "[健康检查]"
node openclaw.mjs health 2>&1 | grep -v "Config warnings" | grep -v "plugin feishu" | head -20

echo ""

# 调用 openclaw status
echo "[通道状态]"
node openclaw.mjs status --all 2>&1 | grep -v "Config warnings" | grep -v "plugin feishu" | head -30
