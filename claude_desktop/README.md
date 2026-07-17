# Home Assistant 扩展：Claude Desktop

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![项目维护][maintenance-shield]

在 LinuxServer.io Selkies 扩展中运行 Claude Desktop，并默认启用 Headroom 上下文压缩、RTK Bash 输出加速和 TokenSave 语义代码智能。

## 安装

1. 将此仓库添加到 Home Assistant 扩展商店。
2. 安装 **Claude Desktop**。
3. 启动扩展并从侧边栏打开 Web UI。
4. 使用桌面应用程序通过 Claude 账户登录。

Claude Desktop 登录需要支持桌面应用程序的 claude.ai 计划。桌面应用程序不接受 API 密钥。Anthropic 的 Linux 测试版目前不包括计算机使用或语音输入。

## 架构

一切都是围绕 Claude Desktop 应用程序构建的。Claude Code 安装在同一镜像中，但不是作为独立服务公开：Claude Desktop 的协同和调度会话内部运行它，并且它们使用共享的 Claude Code 配置 (`~/.claude`)、钩子、MCP 服务器、权限和 PATH 工具。

- **Claude Desktop** 通过其 MCP 工具使用 Headroom。
- **Desktop 中的 Claude Code 会话** 通过共享的 Claude Code 配置获得相同的 MCP 服务器、权限模式和 RTK/TokenSave 钩子。
- 当 `headroom_wrap_claude_code` 启用时，基于 PATH 的 Claude Code 启动将通过受监督的 Headroom 代理路由。如果桌面版本直接调用 `/usr/bin/claude`，会话仍然有效，并且仍然具有共享的权限模式和 Headroom MCP 工具，但无法注入透明代理压缩。
- 共享的 `abc` 桌面账户在配置的 `PUID`/`PGID`（默认 `1000:1000`）下运行。当 `PUID` 为 `0` 时，选择 `permission_mode: bypass`，扩展在 Selkies 和 Claude Desktop 启动之前自动回退到 UID `1000`，因为 Claude Code 在有效的 root UID 下拒绝绕过模式。
- **gnome-keyring** 为 Electron 提供了 Secret Service 后端，以便在重启之间持久化登录和调度权限授权。

## 优化层

三个捆绑的优化工具是互补的：

- **RTK** 重新编写受支持的 Bash 命令，以便 Claude 接收紧凑的输出。
- **TokenSave** 为显式选定的代码仓库构建本地语义图，并将 Claude 引导远离重复的 Explore/Grep/Read 扩散。
- **Headroom** 透明地压缩代理的 Claude Code 流量，并还向 Claude Desktop 公开按需压缩/检索/统计 MCP 工具。

TokenSave 的完整 Claude 集成在启动时安装：MCP 服务器、权限、PreToolUse/UserPromptSubmit/Stop 钩子、全局提示规则和 Git 同步钩子。只有当仓库在 `tokensave_project_paths` 中列出时，才会对其进行索引；不会执行自动文件系统扫描。

## 功能

- 单应用程序 Selkies 模式下的 Claude Desktop，带有 Home Assistant 入口。
- 由官方 Claude Code 稳定版本提供动力，支持 Desktop 协同/调度会话。
- 在配置的 `data_location`（默认 `/data/data`）下持久 `$HOME`，在重启之间保留 Desktop 和 Claude Code 状态。
- 通过捆绑的、自动解锁的 gnome-keyring 持久登录。
- 可配置的 Claude Code 权限：严格的提示、自动安全操作批准或为受信任安装显式全绕过。
- 绕过模式的自动非 root 运行时强制执行，包括 root 控制台包装启动。
- 在每次启动时从 Anthropic 的 apt 仓库中尽力更新 Claude Desktop（离线时静默跳过）。
- 可选的 apt 和 pip 软件包安装（pip 安装使用 `uv`）。
- 预安装的 `git`、GitHub CLI (`gh`)、`ripgrep`、`jq`、`shellcheck`、`yamllint`、`hadolint` 和 `actionlint`。
- 通过存储库标准 `claude_desktop.sh` 支持自定义脚本。
- 捆绑的优化工具：Headroom、RTK 和 TokenSave；Caveman 仍然可以作为可选插件使用。
- 可选的 Home Assistant MCP 桥接，以便 Claude 可以查询和控制 Home Assistant。
- Headroom、RTK 和 TokenSave 的独立每小时节省报告。
- `claude-tools-doctor.sh` 诊断，用于二进制文件、路由、钩子、MCP 注册、项目索引、代理健康、权限、运行时身份和收益。
- GPU 映射、Selkies 帧率和易失性缓存的低功耗默认值。

## 选项

| 选项 | 默认值 | 描述 |
| ------ | ------- | ----------- |
| `PUID` / `PGID` | `1000` / `1000` | 共享 `abc` 桌面账户的数据位置和运行 Claude Desktop 的用户和组 ID。在绕过模式下，当 `PUID` 为 `0` 时，自动在 Selkies 和 Claude Desktop 启动之前将根 `PUID` 替换为 UID `1000`，同时保留配置的组。 |
| `TZ` | | 可选时区，例如 `Europe/Brussels`。 |
| `KEYBOARD` | | 可选的 Selkies 键盘布局。 |
| `PASSWORD` | | 可选的 Selkies 端口密码。 |
| `DRINODE` | | 可选的 Selkies GPU 设备覆盖。 |
| `DNS_server` | `8.8.8.8` | 标准 DNS 模块使用的 DNS 服务器。 |
| `permission_mode` | `auto` | Claude Code 权限策略：`strict`、`auto` 或 `bypass`。 |
| `install_headroom` | `true` | 注册 Headroom MCP 并运行受监督的本地代理。 |
| `headroom_wrap_claude_code` | `true` | 通过已运行的 Headroom 代理路由基于 PATH 的 Claude Code 启动。 |
| `headroom_auto_compress` | `true` | 在每个 Claude Code 会话中通过管理的 `PostToolUse` 钩子自动压缩大型工具输出。 |
| `expose_headroom_dashboard` | `false` | 绑定 Headroom 到所有接口。必须在扩展的 **网络** 部分手动映射端口 `8787/tcp`。 |
| `install_rtk` | `true` | 配置 RTK 的 Claude Code `PreToolUse` Bash 钩子。 |
| `install_tokensave` | `true` | 安装 TokenSave 的完整全局 Claude 集成。 |
| `tokensave_project_paths` | `[]` | 在启动时初始化或同步的显式绝对 Git 仓库路径。 |
| `install_caveman` | `false` | 在启动时安装第三方 Caveman Claude Code 插件。 |
| `enable_tools_health_report` | `true` | 每小时将 Headroom、RTK 和 TokenSave 的收益写入扩展日志。 |
| `install_github_cli` | `true` | 启用内置 `git` 和 `gh` 命令的设置检查。 |
| `github_token` | | 用于认证 `gh` 和 Git 操作的可选 GitHub 令牌。 |
| `github_username` | | 可选的全局 Git 作者名称。 |
| `github_email` | | 可选的全局 Git 作者电子邮件。 |
| `enable_ha_mcp` | `false` | 在 Claude 中注册 Home Assistant 的 MCP 服务器（需要 `ha_mcp_token`）。 |
| `ha_mcp_url` | `http://homeassistant:8123/api/mcp` | Home Assistant MCP 服务器集成可流的 HTTP 端点。 |
| `ha_mcp_token` | | 由 MCP 桥接使用的 Home Assistant 长期访问令牌。 |
| `enable_ha_api_helper` | `true` | 提供 `ha-cli` 核心API助手并添加指导，以便 Claude 可以配置 Home Assistant，而无需 `/config` 挂载。 |
| `additional_apps` | | 启动时安装的逗号分隔的 Debian apt 软件包。 |
| `additional_pip` | | 启动时安装的逗号分隔的 pip 软件包（通过 `uv`）。 |
| `data_location` | `/data/data` | Claude 和工具的持久家目录。 |
| `env_vars` | `[]` | 在容器内部导出的附加环境变量。 |

### 权限模式

```yaml
permission_mode: auto
```

- `strict` 保持 Claude Code 的正常交互式权限提示。
- `auto` 请求 Claude Code 的自动权限分类器批准安全操作，同时保留对危险操作的提示。这是默认值。
- `bypass` 通过在共享设置中使用 `bypassPermissions` 和为包装启动的会话使用 `--dangerously-skip-permissions` 禁用 Claude Code 权限检查。

Claude Code 不允许在其实效 UID 为 `0` 时使用绕过模式。如果扩展配置为 `PUID: 0`，则选择 `bypass` 以 UID `1000` 运行共享 `abc` 运行时账户，在存储所有权
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
