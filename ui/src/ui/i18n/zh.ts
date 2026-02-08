/**
 * Chinese (Simplified) translations for OpenClaw Control UI
 */
import type { I18nStrings } from "./en.ts";

export const zh: I18nStrings = {
  // ===========================================
  // Navigation & Tabs
  // ===========================================
  tabGroupChat: "聊天",
  tabGroupControl: "控制",
  tabGroupAgent: "智能体",
  tabGroupSettings: "设置",

  tabAgents: "智能体",
  tabOverview: "概览",
  tabChannels: "渠道",
  tabInstances: "实例",
  tabSessions: "会话",
  tabUsage: "用量",
  tabCron: "定时任务",
  tabSkills: "技能",
  tabNodes: "节点",
  tabChat: "聊天",
  tabConfig: "配置",
  tabDebug: "调试",
  tabLogs: "日志",

  tabAgentsDesc: "管理智能体工作区、工具和身份。",
  tabOverviewDesc: "Gateway 状态、入口点和快速健康检查。",
  tabChannelsDesc: "管理渠道和设置。",
  tabInstancesDesc: "已连接客户端和节点的状态信标。",
  tabSessionsDesc: "检查活动会话并调整每个会话的默认值。",
  tabUsageDesc: "",
  tabCronDesc: "安排唤醒和定期智能体运行。",
  tabSkillsDesc: "管理技能可用性和 API 密钥注入。",
  tabNodesDesc: "已配对设备、功能和命令暴露。",
  tabChatDesc: "直接 Gateway 聊天会话，用于快速干预。",
  tabConfigDesc: "安全编辑 ~/.openclaw/openclaw.json。",
  tabDebugDesc: "Gateway 快照、事件和手动 RPC 调用。",
  tabLogsDesc: "实时跟踪 Gateway 文件日志。",

  // ===========================================
  // Common
  // ===========================================
  loading: "加载中…",
  save: "保存",
  saving: "保存中…",
  cancel: "取消",
  delete: "删除",
  edit: "编辑",
  add: "添加",
  remove: "移除",
  close: "关闭",
  confirm: "确认",
  reset: "重置",
  refresh: "刷新",
  search: "搜索",
  filter: "筛选",
  clear: "清除",
  copy: "复制",
  copied: "已复制！",
  enabled: "已启用",
  disabled: "已禁用",
  yes: "是",
  no: "否",
  none: "无",
  all: "全部",
  unknown: "未知",
  error: "错误",
  success: "成功",
  warning: "警告",
  info: "信息",
  status: "状态",
  name: "名称",
  type: "类型",
  value: "值",
  actions: "操作",
  details: "详情",
  description: "描述",
  created: "创建时间",
  updated: "更新时间",
  version: "版本",
  id: "ID",
  connected: "已连接",
  disconnected: "已断开",
  online: "在线",
  offline: "离线",
  active: "活动",
  inactive: "非活动",
  pending: "等待中",
  running: "运行中",
  stopped: "已停止",
  failed: "失败",
  completed: "已完成",

  // ===========================================
  // Config Page (Settings)
  // ===========================================
  settings: "设置",
  searchSettings: "搜索设置...",
  allSettings: "全部设置",

  // Sections
  sectionEnv: "环境变量",
  sectionUpdate: "更新",
  sectionAgents: "智能体",
  sectionAuth: "身份验证",
  sectionChannels: "消息渠道",
  sectionMessages: "消息",
  sectionCommands: "命令",
  sectionHooks: "钩子",
  sectionSkills: "技能",
  sectionTools: "工具",
  sectionGateway: "Gateway 网关",
  sectionWizard: "设置向导",

  // Section descriptions
  sectionEnvDesc: "传递给 Gateway 网关进程的环境变量",
  sectionUpdateDesc: "自动更新设置和发布渠道",
  sectionAgentsDesc: "智能体配置、模型和身份",
  sectionAuthDesc: "API 密钥和身份验证配置",
  sectionChannelsDesc: "消息渠道（Telegram、Discord、Slack 等）",
  sectionMessagesDesc: "消息处理和路由设置",
  sectionCommandsDesc: "自定义斜杠命令",
  sectionHooksDesc: "Webhooks 和事件钩子",
  sectionSkillsDesc: "技能包和功能",
  sectionToolsDesc: "工具配置（浏览器、搜索等）",
  sectionGatewayDesc: "Gateway 网关服务器设置（端口、认证、绑定）",
  sectionWizardDesc: "设置向导状态和历史记录",

  // Additional sections
  sectionMeta: "元数据",
  sectionMetaDesc: "Gateway 网关元数据和版本信息",
  sectionLogging: "日志",
  sectionLoggingDesc: "日志级别和输出配置",
  sectionBrowser: "浏览器",
  sectionBrowserDesc: "浏览器自动化设置",
  sectionUi: "用户界面",
  sectionUiDesc: "用户界面偏好设置",
  sectionModels: "模型",
  sectionModelsDesc: "AI 模型配置和提供商",
  sectionBindings: "绑定",
  sectionBindingsDesc: "快捷键绑定",
  sectionBroadcast: "广播",
  sectionBroadcastDesc: "广播和通知设置",
  sectionAudio: "音频",
  sectionAudioDesc: "音频输入/输出设置",
  sectionSession: "会话",
  sectionSessionDesc: "会话管理和持久化",
  sectionCron: "定时任务",
  sectionCronDesc: "计划任务和自动化",
  sectionWeb: "Web",
  sectionWebDesc: "Web 服务器和 API 设置",
  sectionDiscovery: "服务发现",
  sectionDiscoveryDesc: "服务发现和网络配置",
  sectionCanvasHost: "Canvas 主机",
  sectionCanvasHostDesc: "Canvas 渲染和显示",
  sectionTalk: "语音",
  sectionTalkDesc: "语音和语音设置",
  sectionPlugins: "插件",
  sectionPluginsDesc: "插件管理和扩展",

  // Mode toggle
  form: "表单",
  raw: "原始",

  // Action buttons
  reload: "重新加载",
  apply: "应用",
  applying: "应用中…",
  update: "更新",
  updating: "更新中…",

  // Status
  noChanges: "无更改",
  unsavedChanges: "未保存的更改",
  unsavedChangesCount: (count: number) => `${count} 项未保存的更改`,
  viewPendingChanges: (count: number) => `查看 ${count} 项待处理更改`,

  // Validity
  valid: "有效",
  invalid: "无效",

  // Form
  loadingSchema: "加载配置架构中…",
  schemaUnavailable: "配置架构不可用。",
  unsupportedSchema: "不支持的配置架构，请使用原始模式。",
  formUnsafeWarning: "表单视图无法安全编辑某些字段，请使用原始模式以避免丢失配置项。",
  rawJson5: "原始 JSON5",
  noSettingsMatch: (query: string) => `没有匹配"${query}"的设置`,
  noSettingsInSection: "此分区中没有设置",

  // Config form node
  unsupportedSchemaNode: "不支持的架构节点，请使用原始模式。",
  unsupportedType: (type: string) => `不支持的类型：${type}，请使用原始模式。`,
  unsupportedArraySchema: "不支持的数组架构，请使用原始模式。",
  select: "请选择...",
  resetToDefault: "重置为默认值",
  items: (count: number) => `${count} 项`,
  noItemsYet: '暂无项目，点击"添加"创建一个。',
  removeItem: "删除项目",
  customEntries: "自定义条目",
  addEntry: "添加条目",
  noCustomEntries: "没有自定义条目。",
  key: "键名",
  jsonValue: "JSON 值",
  removeEntry: "移除条目",

  // Language
  language: "语言",
  languageEn: "English",
  languageZh: "中文",

  // ===========================================
  // Overview Page
  // ===========================================
  gatewayStatus: "Gateway 状态",
  gatewayRunning: "Gateway 正在运行",
  gatewayStopped: "Gateway 已停止",
  uptime: "运行时间",
  entryPoints: "入口点",
  healthCheck: "健康检查",
  quickActions: "快捷操作",
  restartGateway: "重启 Gateway",
  viewLogs: "查看日志",
  openConfig: "打开配置",
  gatewayAccess: "Gateway 访问",
  gatewayAccessDesc: "仪表板连接位置和身份验证方式。",
  websocketUrl: "WebSocket URL",
  gatewayToken: "Gateway Token",
  passwordNotStored: "密码（不存储）",
  defaultSessionKey: "默认会话密钥",
  connect: "连接",
  clickConnectHint: "点击连接以应用连接更改。",
  snapshot: "快照",
  snapshotDesc: "最新的 Gateway 握手信息。",
  tickInterval: "心跳间隔",
  lastChannelsRefresh: "渠道最后刷新",
  authRequiredHint: "此 Gateway 需要身份验证。添加 Token 或密码，然后点击连接。",
  authFailedHint: "身份验证失败。在控制面板设置中更新 Token 或密码，然后点击连接。",
  insecureContextHint:
    "此页面是 HTTP，浏览器会阻止设备身份验证。请使用 HTTPS（Tailscale Serve）或在 Gateway 主机上打开",
  onGatewayHost: "。",
  insecureHttpHint: "如果必须使用 HTTP，请设置",
  tokenOnlyHint: "（仅 Token）。",
  useChannelsHint: "使用渠道连接 WhatsApp、Telegram、Discord、Signal 或 iMessage。",
  presenceBeaconsHint: "最近 5 分钟内的在线状态信标。",
  recentSessionsHint: "Gateway 跟踪的最近会话密钥。",
  nextWake: "下次唤醒",
  notes: "备注",
  notesDesc: "远程控制设置的快速提醒。",
  tailscaleServe: "Tailscale Serve",
  tailscaleServeHint: "建议使用 Serve 模式，通过 Tailnet 认证保持 Gateway 在本地回环。",
  sessionHygiene: "会话清理",
  sessionHygieneHint: "使用 /new 或 sessions.patch 重置上下文。",
  cronReminders: "定时任务提醒",
  cronRemindersHint: "对定期运行使用隔离会话。",

  // ===========================================
  // Chat Page
  // ===========================================
  typeMessage: "输入消息...",
  send: "发送",
  sending: "发送中...",
  newChat: "新建聊天",
  clearChat: "清空聊天",
  chatHistory: "聊天记录",
  noMessages: "暂无消息",
  messageFrom: (name: string) => `来自 ${name} 的消息`,
  you: "你",
  assistant: "助手",
  thinking: "思考中...",
  thinkingMode: "思考模式",
  thinkingLow: "低",
  thinkingMedium: "中",
  thinkingHigh: "高",
  attachFile: "附加文件",
  voiceInput: "语音输入",

  // ===========================================
  // Channels Page
  // ===========================================
  channelStatus: "渠道状态",
  channelConfig: "渠道配置",
  connectChannel: "连接渠道",
  disconnectChannel: "断开渠道",
  reconnectChannel: "重新连接渠道",
  channelConnected: "已连接",
  channelDisconnected: "已断开",
  channelConnecting: "连接中...",
  channelError: "连接错误",
  noChannels: "未配置渠道",
  addChannel: "添加渠道",
  channelSettings: "渠道设置",
  dmPolicy: "私信策略",
  allowFrom: "允许来源",
  pairing: "配对",
  pairingCode: "配对码",
  approvedSenders: "已批准的发送者",

  // Channel names
  channelWhatsApp: "WhatsApp",
  channelTelegram: "Telegram",
  channelDiscord: "Discord",
  channelSlack: "Slack",
  channelSignal: "Signal",
  channelIMessage: "iMessage",
  channelMatrix: "Matrix",
  channelTeams: "Microsoft Teams",
  channelGoogleChat: "Google Chat",
  channelWebChat: "WebChat",

  // ===========================================
  // Sessions Page
  // ===========================================
  activeSessions: "活动会话",
  sessionId: "会话 ID",
  sessionType: "类型",
  sessionCreated: "创建时间",
  sessionLastActive: "最后活动",
  sessionMessages: "消息数",
  sessionTokens: "Token 数",
  endSession: "结束会话",
  viewSession: "查看会话",
  noActiveSessions: "无活动会话",
  sessionDetails: "会话详情",
  sessionHistory: "会话历史",
  compactSession: "压缩会话",
  clearSession: "清空会话",

  // ===========================================
  // Agents Page
  // ===========================================
  agentsList: "智能体",
  createAgent: "创建智能体",
  editAgent: "编辑智能体",
  deleteAgent: "删除智能体",
  agentName: "智能体名称",
  agentModel: "模型",
  agentWorkspace: "工作区",
  agentTools: "工具",
  agentIdentity: "身份",
  agentSystemPrompt: "系统提示词",
  defaultAgent: "默认智能体",
  setAsDefault: "设为默认",
  noAgents: "未配置智能体",
  agentSettings: "智能体设置",
  agentCapabilities: "能力",

  // ===========================================
  // Cron Page
  // ===========================================
  cronJobs: "定时任务",
  createJob: "创建任务",
  editJob: "编辑任务",
  deleteJob: "删除任务",
  runNow: "立即运行",
  jobName: "任务名称",
  schedule: "调度",
  nextRun: "下次运行",
  lastRun: "上次运行",
  jobStatus: "状态",
  jobEnabled: "已启用",
  jobDisabled: "已禁用",
  noCronJobs: "未配置定时任务",
  cronExpression: "Cron 表达式",
  jobHistory: "任务历史",
  jobLogs: "任务日志",

  // ===========================================
  // Skills Page
  // ===========================================
  installedSkills: "已安装技能",
  availableSkills: "可用技能",
  installSkill: "安装",
  uninstallSkill: "卸载",
  enableSkill: "启用",
  disableSkill: "禁用",
  skillName: "技能名称",
  skillVersion: "版本",
  skillAuthor: "作者",
  skillDescription: "描述",
  noSkills: "未安装技能",
  skillSettings: "技能设置",
  skillApiKeys: "API 密钥",

  // ===========================================
  // Nodes Page
  // ===========================================
  pairedNodes: "已配对节点",
  pairNode: "配对节点",
  unpairNode: "取消配对",
  nodeName: "节点名称",
  nodeType: "类型",
  nodeStatus: "状态",
  nodeCapabilities: "能力",
  nodeLastSeen: "最后在线",
  noNodes: "未配对节点",
  nodeSettings: "节点设置",
  nodeCommands: "命令",

  // ===========================================
  // Instances Page
  // ===========================================
  connectedInstances: "已连接实例",
  instanceId: "实例 ID",
  instanceType: "类型",
  instanceStatus: "状态",
  instanceConnected: "已连接",
  instanceLastPing: "最后心跳",
  noInstances: "无已连接实例",

  // ===========================================
  // Usage Page
  // ===========================================
  usageOverview: "用量概览",
  tokenUsage: "Token 用量",
  apiCalls: "API 调用",
  costEstimate: "费用估算",
  usageByModel: "按模型统计",
  usageByDay: "每日用量",
  usageByAgent: "按智能体统计",
  totalTokens: "总 Token 数",
  inputTokens: "输入 Token",
  outputTokens: "输出 Token",
  dateRange: "日期范围",
  today: "今天",
  thisWeek: "本周",
  thisMonth: "本月",
  lastDays: (days: number) => `最近 ${days} 天`,

  // ===========================================
  // Debug Page
  // ===========================================
  gatewaySnapshot: "Gateway 快照",
  eventLog: "事件日志",
  manualRpc: "手动 RPC",
  rpcMethod: "方法",
  rpcParams: "参数",
  executeRpc: "执行",
  rpcResponse: "响应",
  clearEventLog: "清空事件日志",
  noEvents: "无事件记录",
  eventTime: "时间",
  eventType: "类型",
  eventData: "数据",

  // ===========================================
  // Logs Page
  // ===========================================
  liveLogs: "实时日志",
  logLevel: "日志级别",
  logLevelAll: "全部",
  logLevelDebug: "调试",
  logLevelInfo: "信息",
  logLevelWarn: "警告",
  logLevelError: "错误",
  pauseLogs: "暂停",
  resumeLogs: "继续",
  clearLogs: "清空",
  downloadLogs: "下载",
  noLogs: "无可用日志",
  autoScroll: "自动滚动",

  // ===========================================
  // Error Messages
  // ===========================================
  errorLoadingData: "加载数据出错",
  errorSavingData: "保存数据出错",
  errorConnection: "连接错误",
  errorTimeout: "请求超时",
  errorUnauthorized: "未授权",
  errorNotFound: "未找到",
  errorServerError: "服务器错误",
  tryAgain: "重试",
  goBack: "返回",
} as const;
