#!/usr/bin/env bash
# OpenClaw 编译后重载脚本
# 停止 Gateway -> 重新构建 -> 启动 Gateway
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "========================================="
echo "  OpenClaw 编译重载"
echo "========================================="
echo ""

# 1. 停止 Gateway
echo "[1/3] 停止 Gateway..."
"$SCRIPT_DIR/stop.sh"

# 2. 重新构建
echo ""
echo "[2/3] 重新构建..."
"$SCRIPT_DIR/build.sh"

# 3. 启动 Gateway
echo ""
echo "[3/3] 启动 Gateway..."
"$SCRIPT_DIR/start.sh"

echo ""
echo "========================================="
echo "  编译重载完成"
echo "========================================="
