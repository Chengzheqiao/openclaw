/**
 * English translations for OpenClaw Control UI
 */
export const en = {
  // ===========================================
  // Navigation & Tabs
  // ===========================================
  tabGroupChat: "Chat",
  tabGroupControl: "Control",
  tabGroupAgent: "Agent",
  tabGroupSettings: "Settings",

  tabAgents: "Agents",
  tabOverview: "Overview",
  tabChannels: "Channels",
  tabInstances: "Instances",
  tabSessions: "Sessions",
  tabUsage: "Usage",
  tabCron: "Cron Jobs",
  tabSkills: "Skills",
  tabNodes: "Nodes",
  tabChat: "Chat",
  tabConfig: "Config",
  tabDebug: "Debug",
  tabLogs: "Logs",

  tabAgentsDesc: "Manage agent workspaces, tools, and identities.",
  tabOverviewDesc: "Gateway status, entry points, and a fast health read.",
  tabChannelsDesc: "Manage channels and settings.",
  tabInstancesDesc: "Presence beacons from connected clients and nodes.",
  tabSessionsDesc: "Inspect active sessions and adjust per-session defaults.",
  tabUsageDesc: "",
  tabCronDesc: "Schedule wakeups and recurring agent runs.",
  tabSkillsDesc: "Manage skill availability and API key injection.",
  tabNodesDesc: "Paired devices, capabilities, and command exposure.",
  tabChatDesc: "Direct gateway chat session for quick interventions.",
  tabConfigDesc: "Edit ~/.openclaw/openclaw.json safely.",
  tabDebugDesc: "Gateway snapshots, events, and manual RPC calls.",
  tabLogsDesc: "Live tail of the gateway file logs.",

  // ===========================================
  // Common
  // ===========================================
  loading: "Loading…",
  save: "Save",
  saving: "Saving…",
  cancel: "Cancel",
  delete: "Delete",
  edit: "Edit",
  add: "Add",
  remove: "Remove",
  close: "Close",
  confirm: "Confirm",
  reset: "Reset",
  refresh: "Refresh",
  search: "Search",
  filter: "Filter",
  clear: "Clear",
  copy: "Copy",
  copied: "Copied!",
  enabled: "Enabled",
  disabled: "Disabled",
  yes: "Yes",
  no: "No",
  none: "None",
  all: "All",
  unknown: "unknown",
  error: "Error",
  success: "Success",
  warning: "Warning",
  info: "Info",
  status: "Status",
  name: "Name",
  type: "Type",
  value: "Value",
  actions: "Actions",
  details: "Details",
  description: "Description",
  created: "Created",
  updated: "Updated",
  version: "Version",
  id: "ID",
  connected: "Connected",
  disconnected: "Disconnected",
  online: "Online",
  offline: "Offline",
  active: "Active",
  inactive: "Inactive",
  pending: "Pending",
  running: "Running",
  stopped: "Stopped",
  failed: "Failed",
  completed: "Completed",

  // ===========================================
  // Config Page (Settings)
  // ===========================================
  settings: "Settings",
  searchSettings: "Search settings...",
  allSettings: "All Settings",

  // Sections
  sectionEnv: "Environment",
  sectionUpdate: "Updates",
  sectionAgents: "Agents",
  sectionAuth: "Authentication",
  sectionChannels: "Channels",
  sectionMessages: "Messages",
  sectionCommands: "Commands",
  sectionHooks: "Hooks",
  sectionSkills: "Skills",
  sectionTools: "Tools",
  sectionGateway: "Gateway",
  sectionWizard: "Setup Wizard",

  // Section descriptions
  sectionEnvDesc: "Environment variables passed to the gateway process",
  sectionUpdateDesc: "Auto-update settings and release channel",
  sectionAgentsDesc: "Agent configurations, models, and identities",
  sectionAuthDesc: "API keys and authentication profiles",
  sectionChannelsDesc: "Messaging channels (Telegram, Discord, Slack, etc.)",
  sectionMessagesDesc: "Message handling and routing settings",
  sectionCommandsDesc: "Custom slash commands",
  sectionHooksDesc: "Webhooks and event hooks",
  sectionSkillsDesc: "Skill packs and capabilities",
  sectionToolsDesc: "Tool configurations (browser, search, etc.)",
  sectionGatewayDesc: "Gateway server settings (port, auth, binding)",
  sectionWizardDesc: "Setup wizard state and history",

  // Additional sections
  sectionMeta: "Metadata",
  sectionMetaDesc: "Gateway metadata and version information",
  sectionLogging: "Logging",
  sectionLoggingDesc: "Log levels and output configuration",
  sectionBrowser: "Browser",
  sectionBrowserDesc: "Browser automation settings",
  sectionUi: "UI",
  sectionUiDesc: "User interface preferences",
  sectionModels: "Models",
  sectionModelsDesc: "AI model configurations and providers",
  sectionBindings: "Bindings",
  sectionBindingsDesc: "Key bindings and shortcuts",
  sectionBroadcast: "Broadcast",
  sectionBroadcastDesc: "Broadcast and notification settings",
  sectionAudio: "Audio",
  sectionAudioDesc: "Audio input/output settings",
  sectionSession: "Session",
  sectionSessionDesc: "Session management and persistence",
  sectionCron: "Cron",
  sectionCronDesc: "Scheduled tasks and automation",
  sectionWeb: "Web",
  sectionWebDesc: "Web server and API settings",
  sectionDiscovery: "Discovery",
  sectionDiscoveryDesc: "Service discovery and networking",
  sectionCanvasHost: "Canvas Host",
  sectionCanvasHostDesc: "Canvas rendering and display",
  sectionTalk: "Talk",
  sectionTalkDesc: "Voice and speech settings",
  sectionPlugins: "Plugins",
  sectionPluginsDesc: "Plugin management and extensions",

  // Mode toggle
  form: "Form",
  raw: "Raw",

  // Action buttons
  reload: "Reload",
  apply: "Apply",
  applying: "Applying…",
  update: "Update",
  updating: "Updating…",

  // Status
  noChanges: "No changes",
  unsavedChanges: "Unsaved changes",
  unsavedChangesCount: (count: number) => `${count} unsaved change${count !== 1 ? "s" : ""}`,
  viewPendingChanges: (count: number) => `View ${count} pending change${count !== 1 ? "s" : ""}`,

  // Validity
  valid: "valid",
  invalid: "invalid",

  // Form
  loadingSchema: "Loading schema…",
  schemaUnavailable: "Schema unavailable.",
  unsupportedSchema: "Unsupported schema. Use Raw.",
  formUnsafeWarning:
    "Form view can't safely edit some fields. Use Raw to avoid losing config entries.",
  rawJson5: "Raw JSON5",
  noSettingsMatch: (query: string) => `No settings match "${query}"`,
  noSettingsInSection: "No settings in this section",

  // Config form node
  unsupportedSchemaNode: "Unsupported schema node. Use Raw mode.",
  unsupportedType: (type: string) => `Unsupported type: ${type}. Use Raw mode.`,
  unsupportedArraySchema: "Unsupported array schema. Use Raw mode.",
  select: "Select...",
  resetToDefault: "Reset to default",
  items: (count: number) => `${count} item${count !== 1 ? "s" : ""}`,
  noItemsYet: 'No items yet. Click "Add" to create one.',
  removeItem: "Remove item",
  customEntries: "Custom entries",
  addEntry: "Add Entry",
  noCustomEntries: "No custom entries.",
  key: "Key",
  jsonValue: "JSON value",
  removeEntry: "Remove entry",

  // Language
  language: "Language",
  languageEn: "English",
  languageZh: "中文",

  // ===========================================
  // Overview Page
  // ===========================================
  gatewayStatus: "Gateway Status",
  gatewayRunning: "Gateway is running",
  gatewayStopped: "Gateway is stopped",
  uptime: "Uptime",
  entryPoints: "Entry Points",
  healthCheck: "Health Check",
  quickActions: "Quick Actions",
  restartGateway: "Restart Gateway",
  viewLogs: "View Logs",
  openConfig: "Open Config",
  gatewayAccess: "Gateway Access",
  gatewayAccessDesc: "Where the dashboard connects and how it authenticates.",
  websocketUrl: "WebSocket URL",
  gatewayToken: "Gateway Token",
  passwordNotStored: "Password (not stored)",
  defaultSessionKey: "Default Session Key",
  connect: "Connect",
  clickConnectHint: "Click Connect to apply connection changes.",
  snapshot: "Snapshot",
  snapshotDesc: "Latest gateway handshake information.",
  tickInterval: "Tick Interval",
  lastChannelsRefresh: "Last Channels Refresh",
  authRequiredHint: "This gateway requires auth. Add a token or password, then click Connect.",
  authFailedHint:
    "Auth failed. Update the token or password in Control UI settings, then click Connect.",
  insecureContextHint:
    "This page is HTTP, so the browser blocks device identity. Use HTTPS (Tailscale Serve) or open",
  onGatewayHost: "on the gateway host.",
  insecureHttpHint: "If you must stay on HTTP, set",
  tokenOnlyHint: "(token-only).",
  useChannelsHint: "Use Channels to link WhatsApp, Telegram, Discord, Signal, or iMessage.",
  presenceBeaconsHint: "Presence beacons in the last 5 minutes.",
  recentSessionsHint: "Recent session keys tracked by the gateway.",
  nextWake: "Next wake",
  notes: "Notes",
  notesDesc: "Quick reminders for remote control setups.",
  tailscaleServe: "Tailscale serve",
  tailscaleServeHint: "Prefer serve mode to keep the gateway on loopback with tailnet auth.",
  sessionHygiene: "Session hygiene",
  sessionHygieneHint: "Use /new or sessions.patch to reset context.",
  cronReminders: "Cron reminders",
  cronRemindersHint: "Use isolated sessions for recurring runs.",

  // ===========================================
  // Chat Page
  // ===========================================
  typeMessage: "Type a message...",
  send: "Send",
  sending: "Sending...",
  newChat: "New Chat",
  clearChat: "Clear Chat",
  chatHistory: "Chat History",
  noMessages: "No messages yet",
  messageFrom: (name: string) => `Message from ${name}`,
  you: "You",
  assistant: "Assistant",
  thinking: "Thinking...",
  thinkingMode: "Thinking Mode",
  thinkingLow: "Low",
  thinkingMedium: "Medium",
  thinkingHigh: "High",
  attachFile: "Attach file",
  voiceInput: "Voice input",

  // ===========================================
  // Channels Page
  // ===========================================
  channelStatus: "Channel Status",
  channelConfig: "Channel Configuration",
  connectChannel: "Connect Channel",
  disconnectChannel: "Disconnect Channel",
  reconnectChannel: "Reconnect Channel",
  channelConnected: "Connected",
  channelDisconnected: "Disconnected",
  channelConnecting: "Connecting...",
  channelError: "Connection Error",
  noChannels: "No channels configured",
  addChannel: "Add Channel",
  channelSettings: "Channel Settings",
  dmPolicy: "DM Policy",
  allowFrom: "Allow From",
  pairing: "Pairing",
  pairingCode: "Pairing Code",
  approvedSenders: "Approved Senders",

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
  activeSessions: "Active Sessions",
  sessionId: "Session ID",
  sessionType: "Type",
  sessionCreated: "Created",
  sessionLastActive: "Last Active",
  sessionMessages: "Messages",
  sessionTokens: "Tokens",
  endSession: "End Session",
  viewSession: "View Session",
  noActiveSessions: "No active sessions",
  sessionDetails: "Session Details",
  sessionHistory: "Session History",
  compactSession: "Compact Session",
  clearSession: "Clear Session",

  // ===========================================
  // Agents Page
  // ===========================================
  agentsList: "Agents",
  createAgent: "Create Agent",
  editAgent: "Edit Agent",
  deleteAgent: "Delete Agent",
  agentName: "Agent Name",
  agentModel: "Model",
  agentWorkspace: "Workspace",
  agentTools: "Tools",
  agentIdentity: "Identity",
  agentSystemPrompt: "System Prompt",
  defaultAgent: "Default Agent",
  setAsDefault: "Set as Default",
  noAgents: "No agents configured",
  agentSettings: "Agent Settings",
  agentCapabilities: "Capabilities",

  // ===========================================
  // Cron Page
  // ===========================================
  cronJobs: "Cron Jobs",
  createJob: "Create Job",
  editJob: "Edit Job",
  deleteJob: "Delete Job",
  runNow: "Run Now",
  jobName: "Job Name",
  schedule: "Schedule",
  nextRun: "Next Run",
  lastRun: "Last Run",
  jobStatus: "Status",
  jobEnabled: "Enabled",
  jobDisabled: "Disabled",
  noCronJobs: "No cron jobs configured",
  cronExpression: "Cron Expression",
  jobHistory: "Job History",
  jobLogs: "Job Logs",

  // ===========================================
  // Skills Page
  // ===========================================
  installedSkills: "Installed Skills",
  availableSkills: "Available Skills",
  installSkill: "Install",
  uninstallSkill: "Uninstall",
  enableSkill: "Enable",
  disableSkill: "Disable",
  skillName: "Skill Name",
  skillVersion: "Version",
  skillAuthor: "Author",
  skillDescription: "Description",
  noSkills: "No skills installed",
  skillSettings: "Skill Settings",
  skillApiKeys: "API Keys",

  // ===========================================
  // Nodes Page
  // ===========================================
  pairedNodes: "Paired Nodes",
  pairNode: "Pair Node",
  unpairNode: "Unpair Node",
  nodeName: "Node Name",
  nodeType: "Type",
  nodeStatus: "Status",
  nodeCapabilities: "Capabilities",
  nodeLastSeen: "Last Seen",
  noNodes: "No nodes paired",
  nodeSettings: "Node Settings",
  nodeCommands: "Commands",

  // ===========================================
  // Instances Page
  // ===========================================
  connectedInstances: "Connected Instances",
  instanceId: "Instance ID",
  instanceType: "Type",
  instanceStatus: "Status",
  instanceConnected: "Connected",
  instanceLastPing: "Last Ping",
  noInstances: "No instances connected",

  // ===========================================
  // Usage Page
  // ===========================================
  usageOverview: "Usage Overview",
  tokenUsage: "Token Usage",
  apiCalls: "API Calls",
  costEstimate: "Cost Estimate",
  usageByModel: "Usage by Model",
  usageByDay: "Daily Usage",
  usageByAgent: "Usage by Agent",
  totalTokens: "Total Tokens",
  inputTokens: "Input Tokens",
  outputTokens: "Output Tokens",
  dateRange: "Date Range",
  today: "Today",
  thisWeek: "This Week",
  thisMonth: "This Month",
  lastDays: (days: number) => `Last ${days} days`,

  // ===========================================
  // Debug Page
  // ===========================================
  gatewaySnapshot: "Gateway Snapshot",
  eventLog: "Event Log",
  manualRpc: "Manual RPC",
  rpcMethod: "Method",
  rpcParams: "Parameters",
  executeRpc: "Execute",
  rpcResponse: "Response",
  clearEventLog: "Clear Event Log",
  noEvents: "No events recorded",
  eventTime: "Time",
  eventType: "Type",
  eventData: "Data",

  // ===========================================
  // Logs Page
  // ===========================================
  liveLogs: "Live Logs",
  logLevel: "Log Level",
  logLevelAll: "All",
  logLevelDebug: "Debug",
  logLevelInfo: "Info",
  logLevelWarn: "Warn",
  logLevelError: "Error",
  pauseLogs: "Pause",
  resumeLogs: "Resume",
  clearLogs: "Clear",
  downloadLogs: "Download",
  noLogs: "No logs available",
  autoScroll: "Auto-scroll",

  // ===========================================
  // Error Messages
  // ===========================================
  errorLoadingData: "Error loading data",
  errorSavingData: "Error saving data",
  errorConnection: "Connection error",
  errorTimeout: "Request timed out",
  errorUnauthorized: "Unauthorized",
  errorNotFound: "Not found",
  errorServerError: "Server error",
  tryAgain: "Try again",
  goBack: "Go back",
} as const;

export type I18nStrings = typeof en;
