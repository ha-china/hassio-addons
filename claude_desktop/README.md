# Home assistant 附加组件：Claude Desktop

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![项目维护][maintenance-shield]

在带有 Headroom 上下文压缩、RTK Bash 输出加速以及默认可连接的 TokenSave 语义代码智能的 LinuxServer.io Selkies 附加组件中运行 Claude Desktop。

## 安装

1. 将此仓库添加到 Home Assistant 附加组件商店。
2. 安装 **Claude Desktop**。
3. 启动附加组件并从中侧栏打开 Web 界面。
4. 使用桌面应用程序中的你的 Claude 账户登录。

Claude Desktop 登录需要一个支持桌面应用程序的 claude.ai 计划。桌面应用程序不接受 API 密钥。Anthropic 当前的 Linux 预览版尚未包含“计算机使用”或“语音转文字”功能。

## 架构

Everything (一切) 都是围绕 Claude Desktop 应用程序构建的。Claude Code 安装在同一镜像中，但不以独立服务的形式暴露：Claude Desktop 的 cowork（协作）和 dispatch（调度）会话会在内部运行它，并拾取共享的 Claude Code 配置（`~/.claude`），包括钩子（hooks）、MCP 服务器、权限和 PATH 工具。

- **Claude Desktop** 通过其 MCP 工具使用 Headroom。
- **Desktop 内部的 Claude Code 会话** 通过共享的 Claude Code 配置获得相同的 MCP 服务器、权限模式和 RTK/TokenSave 钩子。
- 当启用 `headroom_wrap_claude_code` 时，基于 PATH 的 Claude Code 启动会通过受监管的 Headroom 代理进行路由。如果桌面发行版直接调用 `/usr/bin/claude`，会话仍然功能正常，并且仍然拥有共享的权限模式和 Headroom MCP 工具，但无法注入透明的代理压缩。
- 共享的 `abc` 桌面账户运行在配置的 `PUID`/`PGID`（默认为 `1000:1000`）下。当选择 `permission_mode: bypass` 而 `PUID` 为 `0` 时，附加组件会自动回退到 UID `1000` 开始在 Selkies 和 Claude Desktop 之前运行，因为 Claude Code 拒绝在有效 root UID 下运行绕过模式。
- **gnome-keyring** 为 Electron 提供 Secret Service 后端，用于在重启后持久化登录和调度权限授权。

## 优化层级

这三种捆绑的优化工具是互补的：

- **RTK** 重写支持的 Bash 命令，使 Claude 接收更紧凑的输出。
- **TokenSave** 为显式选定的代码仓库构建本地语义图，并引导 Claude 避开重复的 Explore/Read/Grep 发散操作。
- **Headroom** 透明地压缩代理的 Claude Code 流量，并向 Claude Desktop 提供按需压缩/检索/统计 MCP 工具。

TokenSave 默认是关闭的。设置 `install_tokensave: true` 会在启动时安装其完整的 Claude 集成：MCP 服务器、权限、PreToolUse/UserPromptSubmit/Stop 钩子、全局提示规则以及 Git 同步钩子。只有当仓库列在 `tokensave_project_paths` 中时才会对其进行索引；不会执行自动的文件系统扫描。

## 功能

- 带有 Home Assistant 入口的单应用 Selkies 模式下的 Claude Desktop。
- 由官方 Claude Code 稳定版驱动的 Desktop cowork/dispatch 会话。
- 在配置的 `data_location`（默认为 `/data/data`）处保持持久的 `$HOME`，在重启后保留 Desktop 和 Claude Code 状态。
- 通过捆绑的自动解锁的 gnome-keyring 保持持久登录。
- 可配置的 Claude Code 权限：严格提示、自动安全操作批准，或针对可信安装的明确完全绕过。
- 针对绕过模式自动执行非 root 运行时策略，包括 root-console 包装器启动。
- 每次启动时从 Anthropic 的 apt 仓库尝试尽力更新 Claude Desktop（离线时静默跳过）。
- 可选的额外 apt 和 pip 包安装（pip 安装使用 `uv`）。
- 内置 `git`、GitHub CLI (`gh`)、`ripgrep`、`jq`、`shellcheck`、`yamllint`、`hadolint` 和 `actionlint`。
- 通过仓库标准脚本 `claude_desktop.sh` 支持自定义脚本。
- 内置优化工具：Headroom 和 RTK；TokenSave 和 Caveman 为可选配置。
- 可选的 OpenAI Codex CLI，仅通过 ChatGPT 订阅进行认证，并通过原生 Codex MCP 服务器可从 Claude 访问。
- 可选的 Home Assistant MCP 桥接，使 Claude 能够查询和控制 Home Assistant。
- 针对 Headroom、RTK 和 TokenSave 的独立每小时节省报告。
- `claude-tools-doctor.sh` 诊断工具，检查二进制文件、路由、钩子、MCP 注册、项目索引、代理状态、权限、运行时身份以及增益。
- GPU 映射、Selkies 帧率和易失缓存的低功耗默认设置。

## 选项

| 选项 | 默认值 | 描述 |
| ------ | ------- | ----------- |
| `PUID` / `PGID` | `1000` / `1000` | 共享 `abc` 桌面账户的数值用户和组，该账户拥有数据目录并运行 Claude Desktop。在绕过模式下，root `PUID` 会在运行时被 UID `1000` 自动替换，同时保留配置的组ID。 |
| `TZ` | | 可选时区，例如 `Europe/Brussels`。 |
| `KEYBOARD` | | 可选 Selkies 键盘布局。 |
| `PASSWORD` | | 可选 Selkies 直接端口的密码。 |
| `DRINODE` | | 可选 Selkies 的 GPU 设备覆盖。 |
| `MAX_RES` | _(未设置)_ | 可选的虚拟屏幕限制，格式为 `WIDTHxHEIGHT`（每轴 100-9999）。未设置意味着基础图像默认值 15360x8640 — Selkies 会根据此限制及以下动态调整分辨率，因此这只设置上限。命名为 `MAX_RES` 是因为这是基础图像 Xvfb 服务读取的环境变量。设置它会降低 Xvfb 的面积和 Selkies 捕获循环跟踪的损坏阈值；帧缓冲区本身是按需填充的，因此这是 CPU 节省而非内存节省。 |
| `DNS_server` | `8.8.8.8` | 标准 DNS 模块使用的 DNS 服务器。 |
| `permission_mode` | `auto` | Claude Code 权限策略：`strict`、`auto` 或 `bypass`。 |
| `install_headroom` | `true` | 注册 Headroom MCP 并运行受监管的本地代理。 |
| `headroom_wrap_claude_code` | `true` | 将基于 PATH 的 Claude Code 启动路由到已运行的 Headroom 代理。 |
| `headroom_auto_compress` | `true` | 通过在 `PostToolUse` 钩子中管理的 `PostToolUse` 钩子，在每种 Claude Code 会话中自动压缩大型工具输出。 |
| `expose_headroom_dashboard` | `false` | 将 Headroom 绑定到所有接口，使用生成的 Bearer 令牌。还必须在附加组件中手动映射 `8787/tcp`。 |
| `install_rtk` | `true` | 配置 RTK 的 Claude Code `PreToolUse` Bash 钩子。 |
| `install_tokensave` | `false` | 安装 TokenSave 的完整全局 Claude 集成。 |
| `tokensave_project_paths` | `[]` | 在启动时初始化或同步的显式绝对 Git 仓库路径。 |
| `mcp_servers_desktop` | all | Claude Desktop 注册的托管 MCP 服务器 (`headroom`, `tokensave`, `homeassistant`, `codex`)。 |
| `mcp_servers_code` | all | Claude Code 注册的托管 MCP 服务器。每个 stdio 服务器是客户端单独的进程，且 Desktop 为其托管的每个 Claude Code 会话启动另一组服务器，因此修剪此列表是降低内存使用成本最低的方法。 |
| `install_caveman` | `false` | 在启动时安装第三方 Caveman Claude Code 插件。 |
| `install_codex_cli` | `false` | 在启动时安装最新稳定版 OpenAI Codex CLI 并注册其原生 MCP 服务器，使 Claude 可以将任务委托给 ChatGPT Codex。 |
| `codex_sandbox_mode` | `workspace-write` | Codex 运行的文件系统范围：`read-only`、`workspace-write` 或 `danger-full-access`。 |
| `enable_tools_health_report` | `true` | 每小时将独立的 Headroom、RTK 和 TokenSave 增益写入附加组件日志。 |
| `install_github_cli` | `true` | 启用内置 `git` 和 `gh` 命令的设置检查。 |
| `github_token` | | 用于认证 `gh` 和 Git 操作的可选 GitHub 令牌。 |
| `github_username` | | 可选全局 Git 作者名称。 |
| `github_email` | | 可选全局 Git 作者邮件。 |
| `localdisks` | | 按名称或标签挂载的本地驱动器（例如 `sda1,MYNAS`）。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要附加组件在 2026-09-19 之后发布的版本。 |
| `enable_ha_mcp` | `false` | 在 Claude 中注册 Home Assistant 的 MCP 服务器（需要 `ha_mcp_token`）。 |
| `ha_mcp_url` | `http://homeassistant:8123/api/mcp` | Home Assistant MCP Server 集成的可流式 HTTP 端点。 |
| `ha_mcp_token` | | Home Assistant 的长-lived 访问令牌，用于 MCP 桥接。 |
| `enable_ha_api_helper` | `true` | 提供 `ha-cli` Core-API 辅助工具并添加说明，使 Claude 可以通过 Home Assistant **Core API** 配置 Home Assistant，而不需要 `/config` 挂载。 |
| `additional_apps` | | 在启动时安装的逗号分隔的 Debian apt 包。 |
| `additional_pip` | | 在启动时安装的逗号分隔的 pip 包（通过 `uv`）。 |
| `data_location` | `/data/data` | Claude 和工具的持久化主目录。 |
| `env_vars` | `[]` | 在容器内导出的附加环境变量。 |

### 权限模式

```yaml
permission_mode: auto
```

- `strict` 保留 Claude Code 的正常交互式权限提示。
- `auto` 询问 Claude Code 的自动权限分类器批准安全操作，同时保留对高风险操作的提示。这是默认设置。
- `bypass` 通过共享设置中的 `bypassPermissions` 和包装器启动会话的 `--dangerously-skip-permissions` 禁用 Claude Code 权限检查。

当有效 UID 为 `0` 时，Claude Code 不允许绕过模式。如果附加组件配置为 `PUID: 0`，选择 `bypass` 会存储所有权和 Desktop 启动前将共享的 `abc` 运行时账户运行为 UID `1000`。保留其配置的次要 GID，因此基于组的访问到挂载的 Home Assistant 路径仍可用。Strict 和 auto 模式保留配置的标识符不变。

调用 `/usr/local/bin/claude` 的 root shell 在绕过模式下也会回退到重映射的 `abc` 账户。直接以 root 身份调用 `/usr/bin/claude` 仍会绕过附加组件包装器并被 Claude Code 拒绝。

`bypass` 赋予 Claude 对所有挂载的可写数据和每个可用命令或凭据的广泛权限。仅在使用可信仓库和挂载的可信安装中启用它。挂载的路径必须对有效的非 root UID 或其保留的组保持可访问。

### TokenSave 项目示例

只有这里列出仓库会被索引。路径必须是绝对的，挂载在附加组件上，并解耦一个 Git 工作树：

```yaml
tokensave_project_paths:
  - /share/projects/hassio-addons
  - /share/projects/birdnet-go
```

在启动时，未初始化的仓库会接收 `tokensave init`；现有索引会接收增量 `tokensave sync`。从选项中移除路径会停止自动同步，但不会删除其 `.tokensave` 数据库。配置的仓库在 TokenSave 执行仓库发现之前会添加到 Git 的 `safe.directory` 列表中。

## Headroom 行为

当启用 `install_headroom` 时，附加组件会在 Claude Desktop 和 Claude Code 中注册 `headroom mcp serve` 并明确指定本地代理 URL，然后在 `127.0.0.1:8787` 启动一个受监管的 Headroom 后端。

Claude Desktop 覆盖了 `ANTHROPIC_BASE_URL`，因此桌面聊天故意使用 MCP 集成。`/usr/local/bin/claude` 包装器将通过 `headroom wrap claude --no-proxy` 路由基于 PATH 的 Claude Code 会话，重用受监管的后端而无需启动第二个代理。

启用 `headroom_auto_compress`（默认）时，托管的 Claude Code `PostToolUse` 钩子还将额外压缩每种会话类型（终端、Desktop cowork、dispatch 和 cron）中大于 ~4000 字符的大型 `Bash`/`Grep`/`Glob`/`WebFetch` 输出——无需模型记得调用 MCP 工具。原始输出保存在 Headroom 的本地存储中一小时，始终可以使用 `mcp__headroom__headroom_retrieve` 恢复，该命令使用压缩标记中打印的哈希。错误文本（`stderr`）从不压缩，纯文本将原样通过；节省来自于结构化输出，如 JSON 转储、搜索结果和日志。

面板默认外部禁用。要暴露它：

1. 设置 `expose_headroom_dashboard: true`。
2. 在附加组件的 **Network** 部分映射 `8787/tcp`。
3. 发送请求到 `http://<home-assistant-host>:8787`，并添加头 `X-Headroom-Proxy-Token: <token>`（或 `Authorization: Bearer <token>`）。

该令牌在首次启动时生成于
`/addon_configs/<repository_id>_claude_desktop/headroom-proxy-token`；删除文件并重启以轮换它。Headroom 需要每个非回环调用者（包括 `/dashboard` 页面）提供它，因此普通浏览器接收 `401`，除非它添加了该头（例如使用带头注入扩展的工具）。只有 `/health`、`/livez` 和 `/readyz` 保持开放。即使有了令牌，默认情况下面板的设置页面和实时转换 fed 对 LAN 客户端也不可用。令牌通过普通 HTTP 发送，因此仅在内网可信环境中暴露此端口，或使用 HTTPS 或 SSH 隧道保护连接。不要将此端口公开到公共互联网。

## Codex CLI

设置 `install_codex_cli: true` 会在 Claude 旁边添加 OpenAI 的 Codex CLI，并在 Claude Code 和 Claude Desktop 中注册一个 `codex` MCP 服务器。因此，Claude 会话可以将任务委托给 ChatGPT Codex 并通过 MCP 读取结果。该服务器是附加组件自身的 `codex-mcp` 脚本，由于 Codex 在 0.154.0 版本中移除了内置的 `mcp-server` 命令，所以通过 `codex exec` 运行每个任务。

Codex 未捆绑在镜像中，因为其 Linux 发行版很大，且该功能默认关闭。每次启动时，附加组件解析最新的稳定上游发布版本。仅在安装版本缺失、不完整或过时，在下载前验证 GitHub 发布的 SHA-256 哈希值后，才会将针对特定架构的包下载到持久存储的 `/data/codex` 中。提取或执行后，并使用 `--version` 验证分阶段的包，然后再替换已安装的包。安装完整的上游包，而不仅仅是 `codex` 可执行文件：Codex 将每个 shell 和文件读取工具调用委托给一个名为 `codex-code-mode-host` 的附加二进制文件，它会在自身旁边查找，因此仅在自身上安装了可执行文件可以回答问题，但永远无法运行其他任何东西。如果发布元数据或下载无法获取，启动将继续，并保留之前工作的安装。

`/data/codex` 属于附加组件：其下方的所有内容——`bin/`、`codex-package.json`、`codex-resources/` 和 `codex-path/`——每次安装新版本时作为一个单元被替换，因此不适合手动保存文件。Codex 的状态（`auth.json`, `config.toml`）位于 `~/.codex`，安装永远不会触碰它。已安装的包大小约为 300 MB，升级时短暂需要为归档和两个版本同时保存空间。

### 使用 ChatGPT 订阅登录

附加组件没有浏览器，因此使用捆绑的设备代码辅助工具：

```bash
codex-login
```

从桌面的 xterm、Claude Code 会话或容器控制台运行它。它会打印验证 URL 和一次性代码，以便您在另一台设备上批准。凭据存储在使用户在运行时持久化的 `~/.codex/auth.json` 中，因此登录后能抵抗重启和附加组件更新。

此集成是专有的 ***订阅专用***。管理的启动器会移除任何继承的 `OPENAI_API_KEY`，并在每次 Codex 命令（包括 `codex-mcp` 背后的 `codex exec` 运行）开始时使用：

```toml
forced_login_method = "chatgpt"
cli_auth_credentials_store = "file"
```

启动器还会在刚开始 Codex 之前移除调用者提供的那些键的任何覆盖。相同的值保存在 `~/.codex/config.toml` 中。因此，MCP 服务器使用 ChatGPT Codex 权益，不会无声地回退到基于使用量的 OpenAI API 密钥计费。

### 从 Claude 使用 Codex

Claude 接收两个原生 MCP 工具：

- `mcp__codex__codex` 启动任务。传递一个自包含的 `prompt` 并设置 `cwd` 为 Codex 应检查的仓库。结果包含一个 `threadId`。
- `mcp__codex__codex-reply` 使用其 `threadId` 继续相同的 Codex 线程。

附加组件还安装了托管的 Claude 指导，建议对独立审查、二次诊断或竞争实现使用 Codex，而不是常规查找。Codex 消耗量将计入已登录的 ChatGPT 计划中的 Codex 额度。

### 沙盒范围

`codex_sandbox_mode` 默认为 `workspace-write`，允许在提供的仓库内实现，而不赋予对所有挂载路径的无限制访问。选择 `read-only` 用于仅审查委托。仅在 Codex 的嵌套 Linux 沙盒在 Home Assistant 附加组件容器中不可用且挂载路径可信的情况下，使用 `danger-full-access` 作为明确的回退。

`approval_policy` 总是 `never`，因为 MCP 驱动的 Codex 进程没有交互的操作员可以回答提示。除非 `permission_mode` 是 `bypass`，否则 Claude Code 自己的权限仍然会门控 `mcp__codex__*` 调用。

## 诊断

通过自定义脚本或容器控制台在附加组件中运行以下命令：

```bash
claude-tools-doctor.sh
```

该报告检查工具二进制文件、配置开关、配置和有效的运行时身份、擦除 MCP 注册、Claude 钩子、权限模式、Headroom 状态、TokenSave 索引、路由和记录的节省。它永远不会打印 MCP 环境变量或原始 Codex 认证状态，因为其中可能包含凭据或掩码凭据片段。

也可以手动调用每小时报告：

```bash
claude-gains-report.sh
```

## Home Assistant MCP 桥接

让 Claude 查询和控制 Home Assistant：

1. 在 Home Assistant 中，添加 **Model Context Protocol Server** 集成（设置 → 设备和服务 → 添加集成）。
2. 创建长寿命访问令牌（资料 → 安全）。
3. 设置 `enable_ha_mcp: true` 并将令牌粘贴到附加组件配置中的 `ha_mcp_token`，然后重启附加组件。

附加组件通过 `mcp-proxy` 将 Claude 桥接到集成的无状态可流式 HTTP 端点 (`/api/mcp`)。如果您的 Home Assistant 实例无法作为 `homeassistant:8123` 从附加组件访问，则仅覆盖 `ha_mcp_url`。

## 配置 Home Assistant (API 辅助工具)

当 `enable_ha_api_helper` 开启（默认）时，附加组件提供 `ha-cli` 命令，并通过 `~/.claude/CLAUDE.md` 中托管的区块告诉 Claude——它可以通过 Home Assistant **Core API** 配置 Home Assistant，而不是文件系统挂载。这明显比映射 `/config` 更受限制：API 无法读取 `configuration.yaml`、`secrets.yaml` 或其他附加组件存储的任何凭据。

`ha-cli` 通过 Supervisor Core-API 代理自动认证使用附加组件的 `SUPERVISOR_TOKEN`（附加组件已经设置了 `homeassistant_api: true`），因此无需配置。它可以创建和编辑自动化脚本和场景；调用任何服务；读取实体状态；并且通过 WebSocket 管理辅助工具、仪表板和区域/标签/楼层/实体注册表。在附加组件中运行 `ha-cli --help` 以获取完整的命令参考。

```bash
ha-cli config                                   # 连接性检查
ha-cli get config/automation/config/<id>        # 读取一个自动化
ha-cli post config/automation/config/<id> @new.json   # 创建/更新它
ha-cli call automation.reload                   # 应用 YAML 模式更改
ha-cli ws '{"type":"config/area_registry/list"}'
```

安全注意事项：

- Supervisor 代理令牌授予 **等效管理员** 的 Core API 访问权限（它可以调用任何服务并编辑任何 UI 管理的配置），但无法访问原始 YAML 文件或其他附加组件的数据。为了更严格的范围，设置 `HA_BASE_URL`/`HA_TOKEN`（或 `ha_mcp_token` 选项）为受限 Home Assistant 用户的长寿命令牌——当存在时 `ha-cli` 优先使用它。
- 指导指示 Claude 读取每个对象并显示预期的更改，但在写入之前，但 Claude Code 自己的工具权限提示仍然是真正的门控：每个 `ha-cli` 调用仍然需要您的批准，除非 `permission_mode` 设置为 `bypass`。
- 如果不希望 Claude 配置 Home Assistant，请设置 `enable_ha_api_helper: false` 以移除指导区块和辅助工具的注册。

## 自定义脚本

附加组件包括标准自定义脚本执行器。首次启动时，它会在附加组件配置目录中播种 `claude_desktop.sh`。该脚本中的命令在启动期间运行，允许进行本地自定义而不重建镜像。

## 数据和缓存位置

持久化状态存储在配置的 `data_location`（默认为 `/data/data`）中：

- Claude Desktop 登录：`~/.config/Claude`（通过 gnome-keyring 加密令牌；keyring DB 位于 `~/.local/share/keyrings`）
- Claude Code 设置、钩子、会话、插件和权限模式：`~/.claude`
- Headroom、RTK 和 TokenSave 用户状态：共享 home 下方的标准路径
- TokenSave 仓库索引：每个显式配置的项目内的 `.tokensave/`
- Codex 认证和配置：`~/.codex`；已验证的可执行文件和订阅专用启动器生活在持久存储的 `/data/codex/bin`

易失缓存数据通过 `$XDG_CACHE_HOME` 和 `$HOME/.cache` 重定向到 `/tmp/cache`。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
