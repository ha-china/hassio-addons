# Home assistant 插件：Claude Desktop

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![项目维护中][maintenance-shield]

在 LinuxServer.io Selkies 插件中运行 Claude Desktop，默认启用 Headroom 上下文压缩、RTK Bash 输出加速，以及 TokenSave 语义代码智能。

## 安装

1. 将此仓库添加到 Home Assistant 插件商店。
2. 安装 **Claude Desktop**。
3. 启动插件并从侧边栏打开 Web 界面。
4. 使用桌面应用中的 Claude 账户登录。

使用 Claude Desktop 登录需要一个支持桌面应用的 claude.ai 计划。桌面应用程序不接受 API 密钥。Anthropic 当前的 Linux _beta_版本尚不包括Computer Use（电脑使用）或朗读功能。

## 架构

一切都是围绕 Claude Desktop 应用程序构建的。Claude Code 安装在同一个镜像中，但不会暴露为独立服务：Claude Desktop 的 cowork（协作）和 dispatch（分发）会话会在内部运行它，并利用共享的 Claude Code 配置文件（`~/.claude`）、hooks、MCP 服务器、权限和 PATH 工具。

- **Claude Desktop** 通过 MCP 工具使用 Headroom。
- **Desktop 内的 Claude Code 会话** 通过共享的 Claude Code 配置获得相同的 MCP 服务器、权限模式以及 RTK/TokenSave hooks。
- 当启用 `headroom_wrap_claude_code` 时，基于 PATH 的 Claude Code 启动将通过受监管的 Headroom 代理进行路由。如果桌面版本直接调用 `/usr/bin/claude`，会话仍正常工作，并保持共享权限模式和 Headroom MCP 工具，但透明代理压缩无法注入。
- 共享的 `abc` 桌面账户运行在配置的 `PUID`/`PGID` 下（默认 `1000:1000`）。当选择 `permission_mode: bypass` 且 `PUID` 为 `0` 时，插件在启动 Selkies 和 Claude Desktop 之前会自动回退到 UID `1000`，因为 Claude Code 拒绝在有效的 root UID 下使用 bypass 模式。
- **gnome-keyring** 为 Electron 提供 Secret Service 后端，用于持久化登录和分发权限授权，以跨越重启。

## 优化层级

这三个捆绑的优化工具相辅相成：

- **RTK** 重写受支持的 Bash 命令，以便 Claude 接收紧凑输出。
- **TokenSave** 为显式选择的代码仓库构建本地语义图，引导 Claude 避免重复的 Explore/Grep/Read 分支扩散。
- **Headroom** 透明压缩代理的 Claude Code 流量，并向 Claude Desktop 提供按需压缩/检索/统计 MCP 工具。

TokenSave 的完整 Claude 集成在启动时安装：MCP 服务器、权限、PreToolUse/UserPromptSubmit/Stop hooks、全局提示规则以及 Git 同步 hooks。只有当仓库在 `tokensave_project_paths` 中列出的时候才会被索引，不会执行自动文件系统扫描。

## 功能

- 带有 Home Assistant 接口的单应用 Selkies 模式下的 Claude Desktop。
- 使用官方 Claude Code 稳定版供您 Desktop 的 cowork/dispatch 会话。
- 配置在 `data_location`（默认 `/data/data`）处的持久化 `$HOME`，保存/Desktop 和 Claude Code 的状态跨越重启。
- 通过捆绑的、自动解锁的 gnome-keyring 进行持久化登录。
- 可配置的 Claude Code 权限：严格提示、自动批准安全操作或针对可信安装的明确完全绕过。
- 针对 bypass 模式的自动非 root 运行时 enforcement，包括 root-console 包装器启动。
- 每次启动时尽力从 Anthropic 的 apt 仓库更新 Claude Desktop（离线时静默跳过）。
- 可选的额外 apt 和 pip 包安装（pip 安装使用 `uv`）。
- 内置 `git`、GitHub CLI (`gh`)、`ripgrep`、`jq`、`shellcheck`、`yamllint`、`hadolint` 和 `actionlint`。
- 通过仓库标准的 `claude_desktop.sh` 支持自定义脚本。
- 捆绑优化工具：Headroom、RTK 和 TokenSave；Caveman 作为可选插件保留。
- 可选的 OpenAI Codex CLI，仅使用 ChatGPT 订阅进行身份验证，并可通过原生 Codex MCP 服务器从 Claude 访问。
- 可选的 Home Assistant MCP 桥接，使 Claude 能够查询和控制 Home Assistant。
- 为 Headroom、RTK 和 TokenSave 提供独立的小时节省报告。
- `claude-tools-doctor.sh` 诊断工具，用于检查二进制文件、路由、hooks、MCP 注册、项目索引、代理健康、权限、运行时身份和收益。
- 针对 GPU 映射、Selkies 帧率和易失缓存的低功耗默认设置。

## 选项

| 选项 | 默认值 | 描述 |
| ------ | ------- | ----------- |
| `PUID` / `PGID` | `1000` / `1000` | 共享 `abc` 桌面账户的用户和组（所有者数据目录并运行 Claude Desktop）。在 bypass 模式下，如果 `PUID` 是 root，则在运行时自动替换为 UID `1000`，同时保留配置的组。 |
| `TZ` | | 可选时区，例如 `Europe/Brussels`。 |
| `KEYBOARD` | | 可选 Selkies 键盘布局。 |
| `PASSWORD` | | 可选用于直接 Selkies 端口的密码。 |
| `DRINODE` | | 可选 Selkies 的 GPU 设备覆盖。 |
| `MAX_RES` | _(unset)_ | 可选虚拟屏幕上限，格式为 `WIDTHxHEIGHT`（每轴 100-9999）。未设置则使用基础镜像默认值 15360x8640 — Selkies 动态缩小到不超过该限制的任何尺寸，因此这仅设置上限。命名为 `MAX_RES` 是因为那是基础镜像的 Xvfb 服务读取的环境变量。设置它降低了 Xvfb 和 Selkies 捕获循环跟踪损坏的区域；帧缓冲区本身是懒加载的，因此这是 CPU 节省，而不是内存节省。 |
| `DNS_server` | `8.8.8.8` | 标准 DNS 模块使用的 DNS 服务器。 |
| `permission_mode` | `auto` | Claude Code 权限策略：`strict`、`auto` 或 `bypass`。 |
| `install_headroom` | `true` | 注册 Headroom MCP 并运行受监管的本地代理。 |
| `headroom_wrap_claude_code` | `true` | 将基于 PATH 的 Claude Code 启动路由到已经运行的 Headroom 代理。 |
| `headroom_auto_compress` | `true` | 通过管理的 `PostToolUse` hook 在每个 Claude Code 会话中自动压缩大型工具输出。 |
| `expose_headroom_dashboard` | `false` | 将所有接口绑定到 Headroom。端口 `8787/tcp` 还必须手动映射。 |
| `install_rtk` | `true` | 配置 RTK 的 Claude Code `PreToolUse` Bash hook。 |
| `install_tokensave` | `true` | 安装 TokenSave 的完整全局 Claude 集成。 |
| `tokensave_project_paths` | `[]` | 在启动时初始化或同步的显式绝对 Git 仓库路径。 |
| `mcp_servers_desktop` | all | Claude Desktop 注册的受管理 MCP 服务器 (`headroom`, `tokensave`, `homeassistant`, `codex`)。 |
| `mcp_servers_code` | all | Claude Code 注册的受管理 MCP 服务器。每个 stdio 服务器都是单独进程，Desktop 为其托管的每个 Claude Code 会话启动另一套进程，因此修剪这里是削减内存的最便宜方式。 |
| `install_caveman` | `false` | 在启动时安装第三方 Caveman Claude Code 插件。 |
| `install_codex_cli` | `false` | 在启动时安装最新的稳定版 OpenAI Codex CLI 并将其原生 MCP 服务器注册，以便 Claude 可以将工作委托给 ChatGPT Codex。 |
| `codex_sandbox_mode` | `workspace-write` | Codex 运行的文件系统范围：`read-only`、`workspace-write` 或 `danger-full-access`。 |
| `enable_tools_health_report` | `true` | 每小时将独立的 Headroom、RTK 和 TokenSave 收益写入插件日志。 |
| `install_github_cli` | `true` | 启用对内置 `git` 和 `gh` 命令的设置检查。 |
| `github_token` | | 用于认证 `gh` 和 Git 操作的可选 GitHub 令牌。 |
| `github_username` | | 可选全局 Git 作者名。 |
| `github_email` | | 可选全局 Git 作者邮箱。 |
| `enable_ha_mcp` | `false` | 在 Claude 中注册 Home Assistant 的 MCP 服务器（需要 `ha_mcp_token`）。 |
| `ha_mcp_url` | `http://homeassistant:8123/api/mcp` | Home Assistant MCP 系统集成(Streamable HTTP) 端点。 |
| `ha_mcp_token` | | 供 MCP 桥接使用的 Home Assistant 长期有效访问令牌。 |
| `enable_ha_api_helper` | `true` | 提供 `ha-cli` Core-API 助手并添加指南，使 Claude 可以通过 Home Assistant **Core API** 配置 Home Assistant，而无需 `/config` 挂载。 |
| `additional_apps` | | 在启动时安装的用逗号分隔的 Debian apt 包。 |
| `additional_pip` | | 在启动时安装的用逗号分隔的 pip 包（通过 `uv`）。 |
| `data_location` | `/data/data` | Claude 和工具的持久化主目录。 |
| `env_vars` | `[]` | 在内容器中转发的附加环境变量。 |

### 权限模式

```yaml
permission_mode: auto
```

- `strict` 保留 Claude Code 的正常交互式权限提示。
- `auto` 询问 Claude Code 的自动权限分类器以批准安全操作，同时保留对风险操作的提示。这是默认值。
- `bypass` 通过使用共享设置中的 `bypassPermissions` 和为包装器启动的会话使用 `--dangerously-skip-permissions` 来禁用 Claude Code 的权限检查。

当 Claude Code 的无效 UID 为 `0` 时，不允许 bypass 模式。如果插件配置为 `PUID: 0`，选择 `bypass` 会将共享的 `abc` 运行时账户在存储所有权和桌面启动之前运行为 UID `1000`。保留其配置的主要 GID，因此可以访问挂载的 Home Assistant 路径的基于组权限。Strict 和 auto 模式保留配置的标识符不变。

调用 `/usr/local/bin/claude` 的 root shell 在 bypass 模式下也会被降级到重映射的 `abc` 账户。直接以 root 身份调用 `/usr/bin/claude` 仍然绕过插件包装器并将被 Claude Code 拒绝。

`bypass` 赋予 Claude 对所有挂载的可写数据、插件内所有命令或凭据的广泛权限。仅在具有可信仓库和挂载的可信安装中启用它。挂载的路径必须保持对有效的非 root UID 或其保留组可访问。

### TokenSave 项目示例

仅在此处列出的仓库会被索引。路径必须是绝对路径，挂载在插件中，并解析到 Git 工作树：

```yaml
tokensave_project_paths:
  - /share/projects/hassio-addons
  - /share/projects/birdnet-go
```

在启动时，未初始化的仓库会接收 `tokensave init`；现有索引会接收增量 `tokensave sync`。从选项中删除路径会停止自动同步，但不会删除其 `.tokensave` 数据库。配置的仓库会被添加到 shared runtime user 的 Git `safe.directory` 列表中，以便 TokenSave 执行仓库发现。

## Headroom 行为

当启用 `install_headroom` 时，插件会在 Claude Desktop 和 Claude Code 中注册 `headroom mcp serve`，并带有显式的本地代理 URL，然后在 `127.0.0.1:8787` 上启动受监管的 Headroom 后端。

Claude Desktop 覆盖了 `ANTHROPIC_BASE_URL`，因此桌面聊天特意使用 MCP 集成。`/usr/local/bin/claude` 包装器将基于 PATH 的 Claude Code 会话路由到 `headroom wrap claude --no-proxy`，重用受监管后端而无需启动第二个代理。

启用 `headroom_auto_compress`（默认）时，管理的 Claude Code `PostToolUse` hook 还会在每个会话类型（终端、Desktop cowork、dispatch 和 cron）中压缩大型 `Bash`/`Grep`/`Glob`/`WebFetch` 输出（超过 ~4000 字符），无需模型记得调用 MCP 工具。原始输出保存在 Headroom 的本地存储中一小时，始终可以通过 `mcp__headroom__headroom_retrieve` 使用压缩标记中打印的 hash 恢复。错误文本（`stderr`）从不压缩，纯文本原样通过；节省来自于结构化输出，如 JSON 转储、搜索结果和日志。

默认情况下，外部禁用仪表板。要启用它：

1. 设置 `expose_headroom_dashboard: true`。
2. 在插件的 **Network** 部分映射 `8787/tcp`。
3. 打开 `http://<home-assistant-host>:8787/dashboard`。

仪表板是无认证的。不要将此端口发布到公共互联网。

## Codex CLI

设置 `install_codex_cli: true` 会添加 OpenAI 的 Codex CLI 与 Claude 一起使用，并在 Claude Code 和 Claude Desktop 中注册 `codex mcp-server`。因此，Claude 会话可以将任务委托给 ChatGPT Codex 并通过 MCP 读取其结果。

由于 Linux 发行版较大且该功能默认关闭，Codex 没有嵌入到镜像中。每次启动时，插件解析最新的稳定版上游发布。只有在已安装的版本缺失、不完整或过时的时候，才会将特定架构的包下载到持久化 `/data/codex`，并在提取或执行之前验证 GitHub 发布的 SHA-256 摘要，并使用 `--version` 验证包装阶段，然后替换已安装的版本。完整的上游包被安装，而不仅仅是 `codex` 可执行文件：Codex 将每个 shell 和文件读取工具调用委托给一个配套 binary `codex-code-mode-host`，它会查找自身附近，因此单独安装的可执行文件可以回答但运行时运行任何东西。如果发布元数据或下载不可用，启动将继续，并保留先前工作的安装。

`/data/codex` 属于插件：其下的所有内容——`bin/`、`codex-package.json`、`codex-resources/` 和 `codex-path/`——每当安装新发布时会作为整体替换，因此不是手动存放文件的地方。Codex 自己的状态（`auth.json`、`config.toml`）位于 `~/.codex` 中，安装永远不触动它。已安装包大约 300 MB，升级时需要同时容纳归档和两个发布的短暂空间。

### 使用 ChatGPT 订阅登录

插件没有浏览器，因此使用捆绑的设备代码助手运行以下命令：

```bash
codex-login
```

在桌面的 xterm、Claude Code 会话或容器控制台中运行它。它会打印验证 URL 和一两次性代码，您可以在其他设备上批准。凭据存储在运行时用户的持久化 `~/.codex/auth.json` 中，因此登录会跨越重启和插件更新生存。

此集成 deliberately **subscription-only** (仅限订阅)。管理的启动器移除任何继承的 `OPENAI_API_KEY`，并以以下方式启动每个 Codex 命令（包括 `codex mcp-server`）：

```toml
forced_login_method = "chatgpt"
cli_auth_credentials_store = "file"
```

启动器还会在启动 Codex 之前移除调用者提供的这些两个键的覆盖。相同的值保存于 `~/.codex/config.toml` 中。因此，MCP 服务器使用 ChatGPT Codex 权益，无法静默回落到基于使用量的 OpenAI API 密钥计费。

### 从 Claude 使用 Codex

Claude 收到两个原生 MCP 工具：

- `mcp__codex__codex` 启动一个任务。传递一个自包含的 `prompt` 并将 `cwd` 设置为 Codex 应检查的仓库。结果包含一个 `threadId`。
- `mcp__codex__codex-reply` 使用其 `threadId` 继续相同的 Codex 线程。

插件还安装了管理的 Claude 指南，推荐 Codex 用于独立审查、第二次诊断或不同于常规查询的竞争性实现。Codex 消耗计入已登录的 ChatGPT 计划的 Codex 额度。

### 沙箱范围

`codex_sandbox_mode` 默认为 `workspace-write`，允许在提供的仓库内部实现，而无需授予对所有挂载路径的无限制访问。选择 `read-only` 进行仅限审查的委托。仅在 Codex 嵌套 Linux 沙箱在 Home Assistant 插件容器中不可用且挂载的路径可信任时，才在使用 `danger-full-access` 作为明确的回退。

`approval_policy` 总是 `never`,因为由 MCP 驱动的 Codex 进程没有交互式操作员可以回答提示。Claude Code 自己的权限仍然闸控 `mcp__codex__*` 调用，除非 `permission_mode` 是 `bypass`。

## 诊断

请在插件中通过自定义脚本或容器控制台运行以下命令：

```bash
claude-tools-doctor.sh
```

该报告检查工具二进制文件、配置开关、已配置和有效的运行时标识、抹音 MCP 注册、Claude hooks、权限模式、Headroom 健康、TokenSave 索引、路由和记录的收益。它从不打印 MCP 环境值或原始 Codex 认证状态，因为这二者可能包含凭据或掩盖的凭据片段。

小时报告也可以手动调用：

```bash
claude-gains-report.sh
```

## Home Assistant MCP 桥接

让 Claude 查询和控制 Home Assistant：

1. 在 Home Assistant 中，添加 **Model Context Protocol Server** 集成（设置 → 设备和服务 → 添加集成）。
2. 创建一个长期有效的访问令牌（个人资料 → 安全）。
3. 设置 `enable_ha_mcp: true` 并将令牌粘贴到插件配置中的 `ha_mcp_token`，然后重启插件。

插件通过 `mcp-proxy` 使用其无状态的 Streamable HTTP 端点（`/api/mcp`）桥接 Claude 和集成。如果 Home Assistant 实例不是从插件中通过 `homeassistant:8123` 可访问，则仅覆盖 `ha_mcp_url` 即可。

## 配置 Home Assistant (API 助手)

当 `enable_ha_api_helper` 启用时（默认），插件提供 `ha-cli` 命令并告诉 Claude（通过 `~/.claude/CLAUDE.md` 中的managed block），它可以  通过 Home Assistant **Core API** 配置 Home Assistant，而不是通过文件系统挂载。这与映射 `/config` 相比是有意识的更受限的：API 无法读取 `configuration.yaml`、`secrets.yaml` 或其他插件存储的凭据。

`ha-cli` 通过 Supervisor Core-API 代理（插件已设置 `homeassistant_api: true`）自动使用插件的 `SUPERVISOR_TOKEN` 进行身份验证，因此无需任何配置。它可以创建和编辑自动化、脚本和场景；调用任何服务；读取实体状态；并通过 WebSocket 管理助手、仪表板以及区域/标签/楼层/实体注册表。在插件内运行 `ha-cli --help` 查看完整命令参考。

```bash
ha-cli config                                 # 连接性检查
ha-cli get config/automation/config/<id>            # 读取一个自动化
ha-cli post config/automation/config/<id> @new.json   # 创建/更新它
ha-cli call automation.reload                   # 应用 YAML 模式更改
ha-cli ws '{"type":"config/area_registry/list"}'
```

安全注意事项：

- Supervisor 代理令牌授予 **admin-equivalent** (等效管理员) 核心 API 访问权限（可以调用任何服务并编辑任何通过 UI 管理的配置），但它无法访问原始 YAML 文件或任何其他插件的数据。为了更窄的范围，设置 `HA_BASE_URL`/`HA_TOKEN`（或 `ha_mcp_token` 选项）为有限的 Home Assistant 用户的长期有效令牌 — `ha-cli` 在存在时优先使用这些。
- 指南指示 Claude 读取每个对象并在写入前向您显示预期的更改，但 Claude Code 自己的工具权限提示仍然是真正的闸门：每个 `ha-cli` 调用仍然需要您的批准，除非 `permission_mode` 设置为 `bypass`。
- 设置 `enable_ha_api_helper: false` 以移除指南块和助手的注册，如果您不希望 Claude 配置 Home Assistant。

## 自定义脚本

插件包括仓库标准的自定义脚本执行器。首次启动时，它会的种子 `claude_desktop.sh` 到插件配置目录。该脚本中的命令在启动期间运行，允许本地自定义而无需重建图像。

## 数据和缓存位置

持久化状态存储在配置的 `data_location`（默认 `/data/data`）中：

- Claude Desktop 登录：`~/.config/Claude`（通过 gnome-keyring 加密令牌；keyring DB 在 `~/.local/share/keyrings`）
- Claude Code 设置、hooks、会话、插件和权限模式：`~/.claude`
- Headroom、RTK 和 TokenSave 用户状态：共享主目录下的其标准路径
- TokenSave 仓库索引：每个明确配置的_PROJECT_中的 `.tokensave/`
- Codex 身份验证和配置：`~/.codex`；已通过验证的可执行文件和仅限订阅的启动器生活于持久化 `/data/codex/bin`

易失缓存数据传输到 `/tmp/cache` 通过 `$XDG_CACHE_HOME` 和 `$HOME/.cache`。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
