#!/usr/bin/env bash
# OpenClaw 状态检查脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

PORT="${OPENCLAW_PORT:-18789}"

echo "========================================="
echo "  OpenClaw 状态"
echo "========================================="
echo ""

# 检查端口
echo "[Gateway 进程]"
if ss -ltnp 2>/dev/null | grep -q ":$PORT"; then
    echo "  状态: 运行中"
    echo "  端口: $PORT"
    PID=$(ss -ltnp 2>/dev/null | grep ":$PORT" | grep -oP 'pid=\K\d+' | head -1)
    if [[ -n "$PID" ]]; then
        echo "  PID:  $PID"
    fi
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
