#!/usr/bin/env bash
# OpenClaw Gateway 停止脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "[INFO] 停止 OpenClaw Gateway..."

# 使用 openclaw 命令停止
node openclaw.mjs gateway stop 2>/dev/null || true

# 确保进程被终止
pkill -9 -f "openclaw-gateway" 2>/dev/null || true
pkill -9 -f "openclaw.mjs gateway" 2>/dev/null || true

sleep 1

PORT="${OPENCLAW_PORT:-18789}"
if ss -ltnp 2>/dev/null | grep -q ":$PORT"; then
    echo "[WARN] 端口 $PORT 仍被占用，尝试强制终止..."
    fuser -k "$PORT/tcp" 2>/dev/null || true
fi

echo "[OK] Gateway 已停止"
