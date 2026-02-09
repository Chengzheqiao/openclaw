#!/usr/bin/env bash
# OpenClaw 日志查看脚本
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_FILE="/tmp/openclaw-gateway.log"

# 参数处理
FOLLOW=false
LINES=50

while [[ $# -gt 0 ]]; do
    case $1 in
        -f|--follow)
            FOLLOW=true
            shift
            ;;
        -n|--lines)
            LINES="$2"
            shift 2
            ;;
        -h|--help)
            echo "用法: $0 [选项]"
            echo ""
            echo "选项:"
            echo "  -f, --follow    实时跟踪日志"
            echo "  -n, --lines N   显示最后 N 行 (默认 50)"
            echo "  -h, --help      显示帮助"
            exit 0
            ;;
        *)
            echo "未知选项: $1"
            exit 1
            ;;
    esac
done

if [[ ! -f "$LOG_FILE" ]]; then
    echo "[WARN] 日志文件不存在: $LOG_FILE"
    echo "[INFO] Gateway 可能还未启动过"
    exit 0
fi

echo "[INFO] 日志文件: $LOG_FILE"
echo "========================================="

if $FOLLOW; then
    tail -f "$LOG_FILE"
else
    tail -n "$LINES" "$LOG_FILE"
fi
