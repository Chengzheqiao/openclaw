# OpenClaw 运维脚本

本目录包含 OpenClaw Gateway 的常用运维脚本，方便日常管理和开发调试。

## 目录结构

```
ops/
├── _common.sh    # 跨平台公共 helper
├── start.sh     # 启动 Gateway
├── stop.sh      # 停止 Gateway
├── restart.sh   # 重启 Gateway
├── build.sh     # 构建项目
├── reload.sh    # 编译后重载（停止→构建→启动）
├── status.sh    # 查看状态
├── logs.sh      # 查看日志
├── dev.sh       # 开发模式（热重载）
├── open-dashboard.sh      # 打开带 token 的 Control UI
├── open-tui.sh            # 打开终端 TUI
├── start-macos.sh
├── stop-macos.sh
├── status-macos.sh
├── restart-macos.sh
├── reload-macos.sh
├── build-macos.sh
├── logs-macos.sh
├── dev-macos.sh
├── open-dashboard-macos.sh
├── open-tui-macos.sh
└── README.md    # 本文档
```

## 快速开始

### 首次使用

```bash
# 1. 安装依赖
pnpm install

# 2. 构建项目
./ops/build.sh

# 3. 启动 Gateway
./ops/start.sh
```

### 日常使用

```bash
# 启动并打开 dashboard
./ops/start.sh

# 启动并进入 TUI
./ops/start.sh tui

# 只启动，不打开任何入口
./ops/start.sh none

# 停止
./ops/stop.sh

# 重启并打开 dashboard
./ops/restart.sh

# 重启并进入 TUI
./ops/restart.sh tui

# 查看状态
./ops/status.sh

# 查看日志
./ops/logs.sh
./ops/logs.sh -f        # 实时跟踪
./ops/logs.sh -n 100    # 最后 100 行

# 单独打开带 token 的 Control UI
./ops/open-dashboard.sh

# 单独打开终端 TUI
./ops/open-tui.sh
```

### macOS 入口

macOS 也可以直接使用通用脚本；它们现在会自动处理平台差异。

如果你希望显式使用 macOS 脚本入口，也可以运行：

```bash
./ops/start-macos.sh
./ops/start-macos.sh tui
./ops/start-macos.sh none
./ops/stop-macos.sh
./ops/status-macos.sh
./ops/restart-macos.sh
./ops/restart-macos.sh tui
./ops/reload-macos.sh
```

## 脚本详解

### start.sh - 启动 Gateway

启动 OpenClaw Gateway 服务，默认监听 `127.0.0.1:18789`。
现已同时兼容 Linux 和 macOS。

```bash
# 默认启动并打开 dashboard
./ops/start.sh

# 启动并进入 TUI
./ops/start.sh tui

# 只启动服务
./ops/start.sh none

# 自定义端口
OPENCLAW_PORT=19000 ./ops/start.sh

# 绑定所有接口（允许远程访问）
OPENCLAW_BIND=0.0.0.0 ./ops/start.sh
```

**环境变量：**

- `OPENCLAW_PORT`: Gateway 端口，默认 `18789`
- `OPENCLAW_BIND`: 绑定地址，默认 `127.0.0.1`

### stop.sh - 停止 Gateway

停止正在运行的 Gateway 服务。
现已同时兼容 Linux 和 macOS。

```bash
./ops/stop.sh
```

### restart.sh - 重启 Gateway

先停止再启动 Gateway。

```bash
# 重启并打开 dashboard
./ops/restart.sh

# 重启并进入 TUI
./ops/restart.sh tui

# 只重启服务
./ops/restart.sh none
```

### build.sh - 构建项目

编译 TypeScript 源码和 Web UI。

```bash
# 完整构建（含 UI）
./ops/build.sh

# 仅构建核心代码（不含 UI）
BUILD_UI=0 ./ops/build.sh
```

### reload.sh - 编译后重载

**开发时最常用的脚本**，一键完成：停止 Gateway → 重新构建 → 启动 Gateway。

```bash
# 重载并打开 dashboard
./ops/reload.sh

# 重载并进入 TUI
./ops/reload.sh tui

# 只重载服务
./ops/reload.sh none
```

适用场景：

- 修改源码后需要测试
- 更新配置后需要重启

### status.sh - 查看状态

显示 Gateway 运行状态、健康检查和通道状态。
现已同时兼容 Linux 和 macOS。

```bash
./ops/status.sh
```

### logs.sh - 查看日志

查看 Gateway 日志。

```bash
# 查看最近 50 行
./ops/logs.sh

# 实时跟踪日志
./ops/logs.sh -f

# 查看最近 200 行
./ops/logs.sh -n 200
```

### open-dashboard.sh - 单独打开 Dashboard

优先使用全局 `openclaw` CLI；如果当前 shell 没有全局命令，则回退到仓库当前
`.nvmrc` 指定的 Node 版本运行 `node openclaw.mjs dashboard`。
它会生成并打开带 `#token=...` 的 Control UI URL，避免浏览器因缺少 token 反复断开。

```bash
# 默认直接打开浏览器
./ops/open-dashboard.sh

# 仅输出 URL，不自动打开
./ops/open-dashboard.sh --no-open
```

### open-tui.sh - 单独打开终端 TUI

优先使用全局 `openclaw` CLI；如果当前 shell 没有全局命令，则回退到仓库当前
`.nvmrc` 指定的 Node 版本运行 `node openclaw.mjs tui`。
适合连接已经在本机运行的 Gateway，作为本地/远程调试入口。

```bash
# 默认连接本地 Gateway
./ops/open-tui.sh

# 指定 session 并允许 deliver
./ops/open-tui.sh --session main --deliver

# 显式指定 url/token
./ops/open-tui.sh --url ws://127.0.0.1:18789 --token <token>
```

### dev.sh - 开发模式

启动开发模式，支持热重载。修改源码后会自动重新编译并重启。

```bash
./ops/dev.sh
```

**注意：** 开发模式会占用终端，按 `Ctrl+C` 退出。

## 常见问题

### Q: 端口被占用怎么办？

```bash
# 方法 1：使用 stop.sh 停止
./ops/stop.sh

# 方法 2：强制启动（会自动杀死占用进程）
node openclaw.mjs gateway run --port 18789 --force

# 方法 3：使用其他端口
OPENCLAW_PORT=19000 ./ops/start.sh
```

### Q: 如何查看详细错误？

```bash
# 查看 Gateway 日志
./ops/logs.sh -f

# 或直接查看日志文件
tail -f /tmp/openclaw-gateway.log
```

### Q: 如何允许远程访问？

```bash
# 绑定到所有接口
OPENCLAW_BIND=0.0.0.0 ./ops/start.sh
```

**安全提示：** 生产环境建议配置防火墙或使用反向代理。

### Q: 修改代码后如何快速测试？

```bash
# 方法 1：使用 reload 脚本
./ops/reload.sh

# 方法 2：使用开发模式（热重载）
./ops/dev.sh
```

## 日志位置

- Gateway 日志: `/tmp/openclaw-gateway.log`
- 会话数据: `~/.openclaw/agents/main/sessions/`
- 配置文件: `~/.openclaw/openclaw.json`

## 相关命令

除了运维脚本，你也可以直接使用 `openclaw` CLI：

```bash
# 查看所有命令
openclaw --help

# 交互式配置
openclaw configure

# 健康检查
openclaw doctor

# 通道管理
openclaw channels status
```

## 更多信息

- 官方文档: https://docs.openclaw.ai/
- CLI 文档: https://docs.openclaw.ai/cli
