# OpenClaw 运维脚本

本目录包含 OpenClaw Gateway 的常用运维脚本，方便日常管理和开发调试。

## 目录结构

```
ops/
├── start.sh     # 启动 Gateway
├── stop.sh      # 停止 Gateway
├── restart.sh   # 重启 Gateway
├── build.sh     # 构建项目
├── reload.sh    # 编译后重载（停止→构建→启动）
├── status.sh    # 查看状态
├── logs.sh      # 查看日志
├── dev.sh       # 开发模式（热重载）
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
# 启动
./ops/start.sh

# 停止
./ops/stop.sh

# 重启
./ops/restart.sh

# 查看状态
./ops/status.sh

# 查看日志
./ops/logs.sh
./ops/logs.sh -f        # 实时跟踪
./ops/logs.sh -n 100    # 最后 100 行
```

## 脚本详解

### start.sh - 启动 Gateway

启动 OpenClaw Gateway 服务，默认监听 `127.0.0.1:18789`。

```bash
# 默认启动
./ops/start.sh

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

```bash
./ops/stop.sh
```

### restart.sh - 重启 Gateway

先停止再启动 Gateway。

```bash
./ops/restart.sh
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
./ops/reload.sh
```

适用场景：

- 修改源码后需要测试
- 更新配置后需要重启

### status.sh - 查看状态

显示 Gateway 运行状态、健康检查和通道状态。

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
