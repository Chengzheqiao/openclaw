<p align="right">
  <a href="README.md">English</a> | <a href="README.zh-CN.md">中文</a>
</p>

# 🦞 OpenClaw — 个人 AI 助手

<p align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text-dark.png">
        <img src="https://raw.githubusercontent.com/openclaw/openclaw/main/docs/assets/openclaw-logo-text.png" alt="OpenClaw" width="500">
    </picture>
</p>

<p align="center">
  <a href="https://github.com/openclaw/openclaw/actions/workflows/ci.yml?branch=main"><img src="https://img.shields.io/github/actions/workflow/status/openclaw/openclaw/ci.yml?branch=main&style=for-the-badge" alt="CI status"></a>
  <a href="https://github.com/openclaw/openclaw/releases"><img src="https://img.shields.io/github/v/release/openclaw/openclaw?include_prereleases&style=for-the-badge" alt="GitHub release"></a>
  <a href="https://discord.gg/clawd"><img src="https://img.shields.io/discord/1456350064065904867?label=Discord&logo=discord&logoColor=white&color=5865F2&style=for-the-badge" alt="Discord"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
</p>

**OpenClaw** 是一个运行在您自己设备上的 _个人 AI 助手_。它可以通过您常用的消息渠道（WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、Microsoft Teams、WebChat 等）回复您。支持 macOS/iOS/Android 上的语音交互，并可渲染实时 Canvas。

[官网](https://openclaw.ai) · [文档](https://docs.openclaw.ai) · [快速开始](https://docs.openclaw.ai/start/getting-started) · [Discord](https://discord.gg/clawd)

## 快速安装

运行环境：**Node ≥22**

```bash
npm install -g openclaw@latest
# 或: pnpm add -g openclaw@latest

openclaw onboard --install-daemon
```

## 核心特性

- **本地优先 Gateway** — 统一的控制面板，管理会话、渠道、工具和事件
- **多渠道收件箱** — WhatsApp、Telegram、Slack、Discord、Google Chat、Signal、iMessage、Microsoft Teams、Matrix 等
- **语音唤醒 + 对话模式** — macOS/iOS/Android 上的持续语音交互，支持 ElevenLabs
- **实时 Canvas** — AI 驱动的可视化工作区
- **丰富的工具集** — 浏览器控制、画布、节点、定时任务、会话管理等
- **配套应用** — macOS 菜单栏应用 + iOS/Android 节点

## 架构概览

```
WhatsApp / Telegram / Slack / Discord / Signal / iMessage / Microsoft Teams / WebChat
               │
               ▼
┌───────────────────────────────┐
│            Gateway            │
│         (控制面板)             │
│     ws://127.0.0.1:18789      │
└──────────────┬────────────────┘
               │
               ├─ Pi 智能体 (RPC)
               ├─ CLI (openclaw …)
               ├─ WebChat UI
               ├─ macOS 应用
               └─ iOS / Android 节点
```

## 安全说明

OpenClaw 连接真实的消息平台，请将收到的私信视为**不可信输入**。

默认行为：

- **私信配对** (`dmPolicy="pairing"`)：未知发送者会收到一个配对码，机器人不会处理他们的消息
- 使用 `openclaw pairing approve <channel> <code>` 批准发送者

完整安全指南：[Security](https://docs.openclaw.ai/gateway/security)

## 从源码开发

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw

pnpm install
pnpm ui:build
pnpm build

pnpm openclaw onboard --install-daemon
```

---

## 最新更新 (Release Notes)

### 2026.2.8

**新增功能**

- Web UI：Control UI 全量国际化支持（中文/英文）
  - 自动检测浏览器语言，支持 URL 参数切换 (`?lang=zh` / `?lang=en`)
  - 导航栏、配置、概览、会话、渠道、实例、日志、调试等页面完整中文化
  - 语言偏好持久化存储

### 2026.2.6-4

**新增功能**

- Gateway：新增 `agents.create`、`agents.update`、`agents.delete` RPC 方法，支持 Web UI 智能体管理

**修复**

- Discord：支持论坛/媒体线程创建消息
- Web UI：聊天刷新时平滑滚动到最新消息
- Cron：改进定时任务调度可靠性，增加指数退避重试
- Telegram：支持 Markdown 剧透标签渲染
- 内存系统：改进 Voyage 嵌入检索效果

### 2026.2.6

**变更**

- 模型：支持 Anthropic Opus 4.6 和 OpenAI Codex gpt-5.3-codex
- 提供商：新增 xAI (Grok) 和百度千帆支持
- Web UI：新增 Token 使用量仪表盘
- 内存：原生 Voyage AI 支持

**修复**

- Cron：调度器可靠性改进（计时器漂移、重启追赶、锁竞争）
- 安全：Gateway Canvas 主机和 A2UI 资源需要认证
- Telegram：自动注入私信话题 threadId

### 2026.2.3

**变更**

- Telegram：完全移除 `@ts-nocheck`，使用原生 Grammy 类型
- 入门向导：新增 Cloudflare AI Gateway 和 Moonshot (.cn) 支持
- Cron：为隔离任务新增 announce 传递模式

**修复**

- 心跳：支持多账户渠道的显式 accountId 路由
- Shell 补全：优化动态补全模式，加快终端启动速度
- 安全：多项安全加固

---

## 许可证

[MIT License](LICENSE)

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=openclaw/openclaw&type=date&legend=top-left)](https://www.star-history.com/#openclaw/openclaw&type=date&legend=top-left)
