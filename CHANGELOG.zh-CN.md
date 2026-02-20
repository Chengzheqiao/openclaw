# 更新日志

[English](./CHANGELOG.md) | 中文

文档：https://docs.openclaw.ai

## Fork 同步发布 — 2026.2.20（上游合并）

与上游 `openclaw/openclaw` 完成同步 — 合并了 **3,688 个 commit**，涵盖版本 **v2026.2.9** 至 **v2026.2.19**（以及未发布的 v2026.2.20 HEAD）。

### 上游更新亮点

#### 新功能

**模型与提供商**

- **Grok (xAI) 网页搜索**：新增 xAI Grok 作为第三方搜索后端，与 Brave、Perplexity 并列。
- **Anthropic 1M 上下文**：支持 Anthropic 扩展上下文窗口（通过 beta header）。
- **Anthropic Sonnet 4.6**：新增 `claude-sonnet-4-6` 模型支持。
- **Ollama 原生提供商**：新增 `/api/chat` 提供商，支持流式输出与工具调用。
- **LiteLLM 提供商**：一等公民集成。
- **Together AI 提供商**：新增支持。
- **Hugging Face Inference 提供商**：一等公民支持，含直接注入重构。
- **Z.AI / GLM 支持**：自动检测端点、GLM-4.6V 图像理解、GLM-5 模型支持。

**消息渠道**

- **Telegram 增强**：论坛话题创建、channel_post 支持、剧透标签、引用块渲染、视频笔记支持、消息表情回应、原生菜单 /compact 命令。
- **Slack 改进**：原生文本流式输出、线程所有权、recipient_team_id 传递、草稿流式输出。
- **Discord 更新**：可配置在线状态、语音消息支持、静默消息支持、网关 4014 处理。
- **IRC 频道**：新增一等公民频道支持。
- **LinQ 频道**：交互式引导适配器，支持已读回执和输入指示器。
- **Matrix**：多账号支持和线程会话隔离。
- **Mattermost**：表情回应支持。
- **飞书**：流式卡片支持（Card Kit API）、多维表格工具。

**移动端与桌面端**

- **iOS/Watch**：Apple Watch 伴侣应用 MVP，含收件箱 UI、通知中继和网关命令界面。
- **iOS/Gateway**：APNs 推送注册、后台唤醒重连、推送测试管线。

**智能体与技能**

- **Agent 流式输出**：思考事件、tool_stream 实时工具调用流式传输。
- **上下文管理**：压缩后工作区上下文注入、可配置工具循环检测。
- **自动回复**：模型回退生命周期可见性（状态、详细日志、WebUI）。
- **记忆系统**：混合搜索的时间衰减（可选）、MMR 重排序提升搜索多样性。
- **技能系统**：压缩技能路径、改进路由描述、`.agents/skills/` 跨智能体技能发现。

**网关与基础设施**

- **网关**：频道健康监控与自动重启、配对设备管理流程。
- **安全审计**：网关 HTTP 无认证暴露检测、沙箱环境清理、ACP 提示大小护栏、插件/钩子路径限制、认证速率限制与暴力破解防护。
- **定时任务**：调度任务默认错峰控制。

**用户界面与 CLI**

- **UI**：希伯来语/阿拉伯语 RTL 支持、更新警告横幅、使用量时间线双滑块范围图表、国际化基础设施（en/zh-CN/zh-TW/pt-BR）。
- **CLI**：日志 `--localTime` 选项、`/export-session` 命令、`/subagents spawn` 命令。

#### 安全修复

- 升级 hono 以支持时序安全认证比对（`GHSA-gq3j-xvxp-8hrf`）。
- Docker 基础镜像固定为 SHA256 摘要，防止可变标签漂移。
- 跨域重定向时剥离敏感 Header（Authorization、Cookie 等）。
- 强制 2MB 提示大小限制，防止 ACP 拒绝服务攻击。
- 强化 Canvas 认证与会话能力验证。
- 校验插件和钩子的路径限制。

#### 问题修复

- **网关/配对**：兼容旧版配对设备在 WebSocket 升级检查中缺少元数据的情况。
- **提供商/HTTP**：将 HTTP 503 视为可故障转移的 LLM 提供商错误。
- **iOS**：稳定后台唤醒/重连、聊天会话密钥隔离、重连间隙后自动重新同步。
- **自动回复**：恢复提示缓存稳定性，延迟 onAgentRunStart 直到真正活动开始。
- **Slack**：recipient_team_id 流式传递、block streaming 开关。
- **Discord**：网关 4014 关闭码处理。
- **CLI/引导**：Anthropic 兼容的自定义提供商 URL 规范化。
- **守护进程**：加固 Windows schtasks 引号处理、服务刷新后重启。

#### 基础设施

- **905 个修复**、**846 次重构**、**541 项测试新增**、**333 项性能优化**。
- 安全审计模块拆分（同步/异步）。
- 代码体积 CI 门禁、actionlint 加固。
- Vitest 覆盖率阈值强制执行（70%）。

### Fork 特有变更（已保留）

- **Serper (Google 搜索) 作为默认搜索提供商**：已集成至上游最新的 web-search 架构中（现与 brave、perplexity、grok 并列）。默认搜索提供商从 brave 切换为 serper。
- **技能**：`insurance-qa`（保险考试学习辅助）、`paper-reader`（学术论文分析）。
- **运维脚本**：build、dev、logs、reload、restart、start、status、stop 脚本。
- **UI 国际化**：中英文翻译基础设施（i18n 文件已保留；UI 模板中的绑定需要在新的上游代码上重新应用）。
- **UI CSS**：配置表单子分区图标修复。

### 冲突解决说明

- **UI 视图文件**（13 个文件）：采用上游版本。Fork 的 i18n `t()` 函数绑定需要在更新后的上游模板上重新应用。i18n 基础设施文件（`ui/src/ui/i18n/`）已保留。
- **web-search.ts**：采用上游版本（新增了 Grok 提供商），随后重新集成 Serper 提供商支持（类型定义、配置解析、API 调用、缓存、工具描述）。
- **配置文件**（schema.help.ts、types.tools.ts、zod-schema.agent-runtime.ts）：采用上游版本后添加 Serper 提供商选项和配置 Schema。
- **audit-extra.sync.ts**：在安全审计中添加 Serper API Key 检测。
- **web-tools.enabled-defaults.test.ts**：接受上游删除（测试已合并到其他文件中）。
