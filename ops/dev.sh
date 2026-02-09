#!/usr/bin/env bash
# OpenClaw 开发模式脚本（热重载）
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "========================================="
echo "  OpenClaw 开发模式 (热重载)"
echo "========================================="
echo ""
echo "按 Ctrl+C 退出"
echo ""

# 使用 watch 模式运行
pnpm gateway:watch
