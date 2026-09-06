# Home Assistant 附加组件：Claude Desktop

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![项目维护状态][maintenance-shield]

在 LinuxServer.io Selkies 附加组件中运行 Claude Desktop，默认集成了 Headroom 上下文压缩、RTK Bash 输出加速以及 TokenSave 语义代码智能。

## 安装

1. 将此仓库添加到 Home Assistant 附加组件商店。
2. 安装 **Claude Desktop**。
3. 启动附加组件并在侧边栏打开网页界面。
4. 使用桌面应用程序中的 Claude 账户登录。

Claude Desktop 登录需要支持桌面应用程序的 claude.ai 计划。桌面应用程序不接受 API 密钥。Anthropic 当前的 Linux 测试版暂时不提供计算机使用或指令朗读功能。

## 架构

所有功能都围绕 Claude Desktop 应用程序构建。Claude Code 安装在同一镜像中，但未作为独立服务暴露：Claude Desktop 的 cowork 和 dispatch 会话内部运行它，并读取共享的 Claude Code 配置（`~/.claude`）、钩子、MCP 服务器、权限以及 PATH 工具。

- **Claude Desktop** 通过其 MCP 工具使用 Headroom。
- **Desktop 内的 Claude Code 会话** 通过共享的 Claude Code 配置获得相同的 MCP 服务器、权限模式以及 RTK/TokenSave 钩子。
- 当启用 `headroom_wrap_claude_code` 时，基于 PATH 的 Claude Code 启动会路由到受监管的 Headroom 代理。如果桌面版本直接调用 `/usr/bin/claude`，会话仍可正常运行并保留共享权限模式和 Headroom MCP 工具，但无法注入透明代理压缩。
- 共享的 `abc` 桌面账户运行配置中的 `PUID`/`PGID`（默认为 `1000:1000`）。当选择 `permission_mode: bypass` 且 `PUID` 为 `0` 时，附加组件自动在 Selkies 和 Claude Desktop 启动前回退到 UID `1000`，因为 Claude Code 拒绝在有效为 root UID 的环境下使用绕过模式。
- **gnome-keyring** 提供密钥服务后端，使 Electron 能够跨重启持久化登录和分发权限授予。

## 优化层

捆绑的三种优化工具互为补充：

- **RTK** 重写受支持的 Bash 命令，使 Claude 接收紧凑的输出。
- **TokenSave** 为显式选定的代码仓库构建本地语义图，引导 Claude 避免重复的 Explore/Grep/Read 发散操作。
- **Headroom** 透明压缩代理的 Claude Code 流量，并向 Claude Desktop 暴露按需压缩/检索/统计 MCP 工具。

TokenSave 的完整 Claude 集成在启动时安装：MCP 服务器、权限、PreToolUse/UserPromptSubmit/Stop 钩子、全局提示规则以及 Git 同步钩子。仅当目录列在 `tokensave_project_paths` 中时才会对其进行索引，不会执行自动文件系统扫描。

## 功能特性

- 具有 Home Assistant 接口的单应用程序 Selkies 模式 Claude Desktop。
- 官方 Claude Code 稳定包为 Desktop cowork/dispatch 会话提供动力。
- 在配置的 `data_location`（默认 `/data/data`）处保持持续的 `$HOME`，确保桌面和 Claude Code 状态在重启后得以保留。
- 通过捆绑的自动解锁 gnome-keyring 实现持久的登录。
- 可配置 Claude Code 权限：严格提示、自动安全操作批准，或针对可信安装的显式完全绕过。
- 自动强制执行非 root 运行时（绕过模式），包括 root-console 包装器启动。
- 每次启动时尽力从 Anthropic 的 apt 仓库更新 Claude Desktop（离线时静默跳过）。
- 可选的额外 apt 和 pip 包安装（pip 安装使用 `uv`）。
- 内置 `git`、GitHub CLI (`gh`)、`ripgrep`、`jq`、`shellcheck`、`yamllint`、`hadolint` 和 `actionlint`。
- 通过仓库标准 `claude_desktop.sh` 支持自定义脚本。
- 捆绑优化工具：Headroom、RTK 和 TokenSave；Caveman 作为可选插件保留。
- 可选的 OpenAI Codex CLI，仅通过 ChatGPT 订阅进行身份验证，并通过原生的 Codex MCP 服务器从 Claude 可达。
- 可选的 Home Assistant MCP 桥接，使 Claude 能够查询和控制 Home Assistant。
- 针对 Headroom、RTK 和 TokenSave 的独立月度节省报告。
- `claude-tools-doctor.sh` 诊断工具，用于检查二进制文件、路由、钩子、MCP 注册、项目索引、代理健康状况、权限、运行时身份以及收益。
- GPU 映射、Selkies 帧率和易失缓存的低功耗默认设置。

## 选项

| 选项 | 默认值 | 描述 |
| :--- | :--- | :--- |
| `PUID` / `PGID` | `1000` / `1000` | 共享 `abc` 桌面账户的数值用户和组，该账户拥有数据位置并运行 Claude Desktop。在绕过模式下，如果配置为 root `PUID`，运行时会自动替换为 UID `1000`，同时保留配置的组。 |
| `TZ` | | 可选时区，例如 `Europe/Brussels`。 |
| `KEYBOARD` | | 可选 Selkies 键盘布局。 |
| `PASSWORD` | | Selkies 端口的可选密码。 |
| `DRINODE` | | Selkies 的可选 GPU 设备覆盖。 |
| `MAX_RES` | _(未设置)_ | 虚拟屏幕的可选限制，格式为 `WIDTHxHEIGHT`（每轴 100-9999）。未设置则使用基础镜像默认值 15360x8640 —— Selkies 会动态缩放到该限制以下，因此这仅设置上限。命名为 `MAX_RES` 是因为基础镜像的 Xvfb 服务读取的环境变量是此名称。设置它会降低 Xvfb 面积和 Selkies 捕获循环跟踪的损坏区域；帧缓冲区是惰性填充的，因此这是 CPU 节省，而非内存节省。 |
| `DNS_server` | `8.8.8.8` | 标准 DNS 模块使用的 DNS 服务器。 |
| `permission_mode` | `auto` | Claude Code 权限策略：`strict`、`auto` 或 `bypass`。 |
| `install_headroom` | `true` | 注册 Headroom MCP 并运行受监管的本地代理。 |
| `headroom_wrap_claude_code` | `true` | 将通过 PATH 的 Claude Code 启动路由到已运行的 Headroom 代理。 |
| `headroom_auto_compress` | `true` | 通过管理的 `PostToolUse` 钩子在每次 Claude Code 会话中自动压缩大工具输出。 |
| `expose_headroom_dashboard` | `false` | 将 Headroom 绑定到所有接口。还必须在附加组件的**网络**部分手动映射端口 `8787/tcp`。 |
| `install_rtk` | `true` | 配置 RTK 的 Claude Code `PreToolUse` Bash 钩子。 |
| `install_tokensave` | `true` | 安装 TokenSave 的完整全局 Claude 集成。 |
| `tokensave_project_paths` | `[]` | 启动时初始化或同步的显式绝对 Git 仓库路径。 |
| `mcp_servers_desktop` | all | 用于注册的受管理 MCP 服务器列表（`headroom`、`tokensave`、`homeassistant`、`codex`）。 |
| `mcp_servers_code` | all | 用于注册的受管理 MCP 服务器列表。每个 stdio 服务器是每个客户端的 separate 进程，且桌面为每场宿主机 Claude Code 会话启动另一组服务器，因此修剪此列表是减少内存的最便宜方式。 |
| `install_caveman` | `false` | 启动时安装第三方 Caveman Claude Code 插件。 |
| `install_codex_cli` | `false` | 启动时安装最新的稳定 OpenAI Codex CLI 并注册其原生 MCP 服务器，以便 Claude 可委托工作给 ChatGPT Codex。 |
| `codex_sandbox_mode` | `workspace-write` | Codex 运行的文件系统范围：`read-only`、`workspace-write` 或 `danger-full-access`。 |
| `enable_tools_health_report` | `true` | 将独立的 Headroom、RTK 和 TokenSave 收益写入附加组件日志每小时一次。 |
| `install_github_cli` | `true` | 启用对内置 `git` 和 `gh` 命令的设置检查。 |
| `github_token` | | 用于身份验证 `gh` 和 Git 操作的可选 GitHub 令牌。 |
| `github_username` | | 可选的全局 Git 作者名称。 |
| `github_email` | | 可选的全局 Git 作者邮箱。 |
| `enable_ha_mcp` | `false` | 在 Claude 中注册 Home Assistant 的 MCP 服务器（需要 `ha_mcp_token`）。 |
| `ha_mcp_url` | `http://homeassistant:8123/api/mcp` | Home Assistant MCP 服务器集成的 Streamable HTTP 端点。 |
| `ha_mcp_token` | | MCP 桥接使用的 Home Assistant 长生命期访问令牌。 |
| `enable_ha_api_helper` | `true` | 提供 `ha-cli` 核心 API 辅助工具，并添加指导，使 Claude 能够通过 Home Assistant **核心 API**而非文件系统挂载配置 Home Assistant。 |
| `additional_apps` | | 启动时安装的逗号分隔 Debian apt 包。 |
| `additional_pip` | | 启动时通过 `uv` 安装的逗号分隔 pip 包。 |
| `data_location` | `/data/data` | Claude 和工具类的持久化主目录。 |
| `env_vars` | `[]` | 在容器中额外导出的环境变量。 |

### 权限模式

```yaml
permission_mode: auto
```

- `strict` 保留 Claude Code 的正常交互式权限提示。
- `auto` 询问 Claude Code 的自动权限分类器批准安全操作，同时保留对高风险操作的提示。这是默认选项。
- `bypass` 通过使用共享设置中的 `bypassPermissions` 和包装器启动会话的 `--dangerously-skip-permissions` 禁用 Claude Code 权限检查。

当有效 UID 为 `0` 时，Claude Code 不允许绕过模式。如果附加组件配置为 `PUID: 0`，选择 `bypass` 会在存储所有权和桌面启动之前将共享 `abc` 运行时账户运行为 UID `1000`。其配置的主 GID 保持不变，因此对挂载的 Home Assistant 路径的基于组的访问仍然可用。严格和自动模式保留配置的标识不变。

以 root shell 在工作模式下调用 `/usr/local/bin/claude` 也会被回退到重映射的 `abc` 账户。直接以 root 调用 `/usr/bin/claude` 仍会绕过附加组件包装器并被拒绝。

`bypass` 赋予 Claude 对所有挂载的可写数据以及附加组件内每个命令或凭证的广泛权限。仅在不信任的安装中，配合可信仓库和挂载时启用它。挂载路径必须对有效非 root UID 或其保留的组保持可访问。

### TokenSave 项目示例

仅此处列出的仓库会被索引。路径必须是绝对路径，附加挂载，并解析为 Git 工作树：

```yaml
tokensave_project_paths:
  - /share/projects/hassio-addons
  - /share/projects/birdnet-go
```

启动时，未初始化的仓库会接收 `tokensave init`；现有索引将接收增量 `tokensave sync`。从选项中移除路径会停止自动同步，但不会删除其 `.tokensave` 数据库。配置中的所有仓库会在 TokenSave 执行仓库发现之前添加到 Git 的 `safe.directory` 列表中。

## Headroom 行为

当启用 `install_headroom` 时，附加组件会在 Claude Desktop 和 Claude Code 中注册 `headroom mcp serve`，使用明确的本地代理 URL，然后启动一个运行在 `127.0.0.1:8787` 的受监管 Headroom 后端。

Claude Desktop 覆盖 `ANTHROPIC_BASE_URL`，因此桌面聊天有意使用 MCP 集成。`/usr/local/bin/claude` 包装器将通过 `headroom wrap claude --no-proxy` 路由基于 PATH 的 Claude Code 会话，复用受监管后端而无需启动第二个代理。

启用 `headroom_auto_compress`（默认）时，管理的 Claude Code `PostToolUse` 钩子还将在每次会话类型（终端、Desktop cowork、dispatch、cron）中压缩超过 ~4000 字符的大 `Bash`/`Grep`/`Glob`/`WebFetch` 输出，无需模型记得调用 MCP 工具。原始输出保留在 Headroom 的本地存储中一小时，始终可以使用 `mcp__headroom__headroom_retrieve` 使用压缩标记中打印的 hash 恢复。错误文本（`stderr`）从不被压缩，纯文本文本保持不变；节省来自结构化输出，如 JSON 转储、搜索结果和日志。

仪表盘默认外部禁用。要暴露它：

1. 设置 `expose_headroom_dashboard: true`。
2. 在附加组件的**网络**部分映射 `8787/tcp`。
3. 打开 `http://<home-assistant-host>:8787/dashboard`。

该仪表盘无需身份验证。请勿将此端口发布到公共互联网。

## Codex CLI

设置 `install_codex_cli: true` 将添加 OpenAI 的 Codex CLI（与 Claude 一起），并在 Claude Code 和 Claude Desktop 中注册 `codex mcp-server`。因此，Claude 会话可以将任务委托给 ChatGPT Codex 并通过 MCP 读取结果。

由于 Linux 发行版较大且默认关闭此功能，Codex 未预置在镜像中。每次启动时，附加组件解析最新的稳定上游版本。仅当已安装的版本缺失、不完整或过时，或需要在新版本中验证 GitHub 发布的 SHA-256 摘要时，它会下载特定架构的包到持久化 `/data/codex`。在提取或执行前会验证摘要，并用 `--version` 验证阶段后的包是否会替换已安装的包。安装的是完整的上游包，而不仅是 `codex` 可执行文件：Codex 将所有 shell 和文件读取工具调用委托给 companion `codex-code-mode-host` 二进制文件，该文件就在它附近，因此单独安装的可执行文件可以回答，但永远无法运行任何事情。如果发布元数据或下载不可用，启动将继续进行，且会保留先前工作的安装。

`/data/codex` 属于附加组件：在此之下的所有内容——`bin/`、`codex-package.json`、`codex-resources/` 和 `codex-path/`——每次安装新版本时都会作为单元替换，因此不适合手动存放文件。Codex 自己的状态（`auth.json`、`config.toml`）位于 `~/.codex`，并且安装时从不触碰。安装的包大约为 300 MB，升级时需要空间存放归档和两个释放版本。

### 使用 ChatGPT 订阅登录

该附加组件没有浏览器，因此请使用捆绑的 device-code 辅助工具：

```bash
codex-login
```

在桌面的 xterm、Claude Code 会话或容器控制台运行它。它会打印一个验证 URL 和一次代码，您需要在另一台设备上批准。凭据存储在运行时用户的持久化 `~/.codex/auth.json` 中，因此登录在重启和附加组件更新时能够保留。

此集成是专供 **订阅** 的。管理的启动器会清除任何继承的 `OPENAI_API_KEY`，并以以下方式启动每个 Codex 命令（包括 `codex mcp-server`）：

```toml
forced_login_method = "chatgpt"
cli_auth_credentials_store = "file"
```

启动器还会在启动 Codex 前移除调用者提供的这两个键的重置。相同的值维护在 `~/.codex/config.toml` 中。因此，MCP 服务器使用 ChatGPT Codex 授权，而不会无声回退到基于使用的 OpenAI API 密钥计费。

### 从 Claude 使用 Codex

Claude 接收两个原生 MCP 工具：

- `mcp__codex__codex` 启动任务。传递自包含的 `prompt`，并将 `cwd` 设置为 Codex 应检查的仓库。结果包括 `threadId`。
- `mcp__codex__codex-reply` 使用 `threadId` 继续相同的 Codex 线程。

该附加组件还安装了管理的 Claude 指导，推荐使用 Codex 进行独立审查、第二次诊断或替代实现，而不是常规查找。Codex 消耗量会计入已登录 ChatGPT 计划的 Codex 限额。

### 沙箱范围

`codex_sandbox_mode` 默认为 `workspace-write`，允许在不授予对每个挂载路径不受限制访问的情况下，在提供的仓库中进行实现。选择 `read-only` 仅用于仅审查委托。仅在 Codex 的嵌套 Linux 沙箱在 Home Assistant 附加组件容器中不可用，且挂载路径可信时，才作为明确回退使用 `danger-full-access`。

`approval_policy` 始终为 `never`，因为 MCP 驱动的 Codex 进程没有交互操作员来回答提示。除非 `permission_mode` 为 `bypass`，否则 Claude Code 自己的权限仍会对 `mcp__codex__*` 调用进行门控。

## 诊断

请在附加组件中通过自定义脚本或容器控制台运行以下命令：

```bash
claude-tools-doctor.sh
```

该报告检查工具二进制文件、配置开关、配置和有效运行时身份、脱敏的 MCP 注册表、Claude 钩子、权限模式、Headroom 健康状况、TokenSave 索引、路由和记录下的节省。它永远不会打印 MCP 环境值或原始 Codex 身份验证状态，因为两者都可能包含凭据或掩码凭据片段。

也可以手动调用每小时报告：

```bash
claude-gains-report.sh
```

## Home Assistant MCP 桥接

让 Claude 查询和控制 Home Assistant：

1. 在 Home Assistant 中添加 **Model Context Protocol Server** 集成（设置 → 设备和服务 → 添加集成）。
2. 创建长生命期访问令牌（您的资料 → 安全）。
3. 设置 `enable_ha_mcp: true`，并将令牌粘贴到附加组件配置中的 `ha_mcp_token`，然后重启附加组件。

该附加组件使用 `mcp-proxy` 将 Claude 桥接到集成的无状态 Streamable HTTP 端点（`/api/mcp`）。除非您的 Home Assistant 实例无法从附加组件作为 `homeassistant:8123` 访问，否则否则覆盖 `ha_mcp_url`。

## 配置 Home Assistant（API 辅助工具）

当 `enable_ha_api_helper` 开启（默认）时，附加组件提供 `ha-cli` 命令，并通过 `~/.claude/CLAUDE.md` 中的管理块告知 Claude，它可以通过 Home Assistant **核心 API**而非文件系统挂载配置 Home Assistant。这是故意比挂载 `/config` 更受限制的方法：API 无法读取 `configuration.yaml`、`secrets.yaml` 或任何其他附加组件存储的凭据。

`ha-cli` 自动通过 Supervisor Core-API 代理使用附加组件的 `SUPERVISOR_TOKEN` 进行身份验证（附加组件已设置 `homeassistant_api: true`），因此无需配置。它可以创建和编辑自动化脚本和场景；调用任何服务；读取实体状态；并通过 Web 串行器管理辅助功能、仪表板、区域/标签/楼层/实体注册表。在附加组件中运行 `ha-cli --help` 以获取完整命令参考。

```bash
ha-cli config                                   # 连接性检查
ha-cli get config/automation/config/<id>        # 读取一个自动化脚本
ha-cli post config/automation/config/<id> @new.json   # 创建/更新
ha-cli call automation.reload                   # 应用 YAML 模式更改
ha-cli ws '{"type":"config/area_registry/list"}'
```

安全注意事项：

- Supervisor 代理令牌授予 **等效管理员** 权限访问核心 API（可以调用任何服务并编辑任何 UI 管理的配置），但它无法访问原始 YAML 文件或任何其他附加组件的数据。为了更窄的范围，将 `HA_BASE_URL`/`HA_TOKEN`（或 `ha_mcp_token` 选项）设置为用户的长生命期令牌——`ha-cli` 优先使用这些。
- 指导指示 Claude 读取每个对象并在写入前显示预期更改，但 Claude Code 自己的工具权限提示是真正的门控：每个 `ha-cli` 调用仍然需要您的批准，除非 `permission_mode` 设置为 `bypass`。
- 如果您不希望 Claude 配置 Home Assistant，请设置 `enable_ha_api_helper: false` 以移除了该指导和辅助工具的注册。

## 自定义脚本

该附加组件包含标准自定义脚本执行器。首次启动时，它会在附加组件配置目录中播种 `claude_desktop.sh`。该脚本中的命令在启动时运行，允许在不重新构建镜像的情况下进行本地自定义。

## 数据和缓存位置

持久化状态存储在配置的 `data_location`（默认 `/data/data`）中：

- Claude Desktop 登录：`~/.config/Claude`（通过 gnome-keyring 加密令牌；密钥环 DB 位于 `~/.local/share/keyrings`）
- Claude Code 设置、钩子、会话、插件和权限模式：`~/.claude`
- Headroom、RTK 和 TokenSave 用户状态：共享主目录下的标准路径
- TokenSave 仓库索引：每个显式配置的项目中的 `.tokensave/`
- Codex 身份验证和配置：`~/.codex`；验证过的可执行文件及订阅专属启动器位于持久化 `/data/codex/bin`

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

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
