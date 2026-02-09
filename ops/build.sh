#!/usr/bin/env bash
# OpenClaw 构建脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "[INFO] 开始构建 OpenClaw..."

# 构建主项目
echo "[INFO] 构建核心代码..."
pnpm build

# 构建 UI（可选）
if [[ "${BUILD_UI:-1}" == "1" ]]; then
    echo "[INFO] 构建 Web UI..."
    pnpm ui:build
fi

echo "[OK] 构建完成"
echo ""
echo "提示: 如需重新加载运行中的 Gateway，请执行: ./ops/reload.sh"
