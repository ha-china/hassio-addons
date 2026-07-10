# Home Assistant 扩展：Claude Desktop

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![项目维护][maintenance-shield]

在 LinuxServer.io Selkies 容器中运行 Claude Desktop Linux 应用，并通过 Home Assistant 入口进行流式传输。

## 安装

1. 将此仓库添加到 Home Assistant 扩展存储库。
2. 安装 **Claude Desktop**。
3. 启动扩展并从侧边栏打开 Web UI。
4. 使用桌面应用程序中的 Claude 账户登录。

Claude Desktop 登录需要支持桌面应用程序的 claude.ai 计划。桌面应用程序不接受 API 密钥。Anthropic 的 Linux 测试版不包括计算机使用或语音输入。

## 功能

- 单应用程序 Selkies 模式下的 Claude Desktop。
- 支持 Home Assistant 入口。
- 在 `/data/data` 下保持 `$HOME` 的持久性，跨重启保留 Claude Desktop 和 Claude Code 登录状态。
- 可选的从 Anthropic 的 apt 仓库更新 Claude Desktop。
- 可选的额外 apt 和 pip 软件包安装。
- 内置 `git` 和 GitHub CLI (`gh`)，可选启动凭据配置。
- 通过存储库标准的 `claude_desktop.sh` 脚本支持自定义脚本。
- 可选捆绑的 Claude Code 优化工具：headroom、rtk 和 caveman。
- 当启用 `install_headroom` 时，Headroom 仪表板在映射端口 `8787` 上暴露。
- 低功耗默认值：GPU 设备映射，`AUTO_GPU=1`，`SELKIES_FRAMERATE=30`，`/tmp` tmpfs，以及 `$HOME/.cache` 重定向到 `/tmp/cache`。

## 选项

| 选项 | 默认值 | 描述 |
| ------ | ------- | ----------- |
| `PUID` / `PGID` | `0` / `0` | 用于持久数据所有权的用户和组。 |
| `TZ` | | 可选时区，例如 `America/New_York`。 |
| `KEYBOARD` | | 可选 Selkies 键盘布局。 |
| `PASSWORD` | | 可选的 Selkies 端口直接密码。在暴露端口 `3000` 或 `3001` 之前设置此密码。 |
| `DRINODE` | | 可选的 Selkies GPU 设备覆盖。 |
| `DNS_server` | `8.8.8.8` | 标准 DNS 模块使用的 DNS 服务器。 |
| `auto_update` | `true` | 在扩展启动时检查 Anthropic 的 apt 仓库并升级 `claude-desktop`。 |
| `install_headroom` | `true` | 在 Claude Desktop 中注册内置的 `headroom` MCP 服务器，启动 Headroom 代理后端，并在端口 `8787` 上暴露 Headroom 仪表板（当该端口开放时），在 `/dashboard` 上。这暴露了应用内部的 `headroom_compress`/`headroom_retrieve`/`headroom_stats` 上下文压缩工具。（Claude Desktop 覆盖 `ANTHROPIC_BASE_URL`，因此透明代理压缩不可用 — MCP 是支持的路径；参见 [headroom #869](https://github.com/headroomlabs-ai/headroom/issues/869)。禁用将删除 MCP 条目并停止后端/仪表板服务。） |
| `install_rtk` | `true` | 在持久 Claude Code 设置中配置 rtk Claude Code `PreToolUse` 钩子。 |
| `install_caveman` | `true` | 将 caveman Claude Code 插件安装到持久 Claude Code 主目录中。 |
| `install_github_cli` | `true` | 启用首次启动检查和 `git` 和 `gh` 命令的设置。 |
| `github_token` | | 可选的 GitHub 个人访问令牌，用于 `gh` 身份验证和配置 GitHub 的 Git 凭据。 |
| `github_username` | | 可选的全局 Git 作者名称。 |
| `github_email` | | 可选的全局 Git 作者电子邮件。 |
| `ha_smart_context` | `true` | 启用 Home Assistant 智能上下文对 Claude 工具的支持。 |
| `enable_ha_mcp` | `true` | 启用 Home Assistant MCP 对 Claude 工具的支持。 |
| `dangerously_skip_permissions` | `false` | 暴露 Claude Code 的危险权限跳过模式选项。仅在您理解风险的情况下启用。 |
| `additional_apps` | | 启动时安装的逗号分隔的 Debian apt 软件包，例如 `htop,git`。 |
| `additional_pip` | | 启动时安装的逗号分隔的 pip 软件包。安装使用 `--break-system-packages`。 |
| `data_location` | `/data/data` | 持久主目录位置。保持此持久性，以便 Claude 登录在重启后继续有效。 |
| `networkdisks`, `cifsusername`, `cifspassword`, `cifsdomain` | | 标准的 SMB 挂载选项。 |
| `localdisks` | | 标准的本地磁盘挂载选项。 |
| `env_vars` | `[]` | 导出到容器中的额外环境变量。这可以覆盖 `SELKIES_*` 默认值。 |

## 自定义脚本

扩展包括存储库标准的自定义脚本执行器。在首次启动时，它从共享模板中在扩展配置目录中初始化 `claude_desktop.sh` 文件。该脚本中的命令在启动时运行，允许本地自定义而无需重新构建镜像。

## 数据和缓存位置

持久状态存储在配置的 `data_location`。Claude Desktop 在 `~/.config/Claude` 以下存储登录数据，Claude Code/工具配置存储在 `~/.claude` 以下。易失性缓存数据通过 `$XDG_CACHE_HOME` 和 `$HOME/.cache` 重定向到 `/tmp/cache`。

## Headroom 仪表板

当启用 `install_headroom` 时，扩展启动本地 Headroom 代理后端并默认映射端口 `8787`。通过 `http://<home-assistant-host>:8787/dashboard` 打开以查看 Headroom 实时节省仪表板。如果您禁用 `8787/tcp` 端口映射，后端仅绑定到本地主机以用于 MCP，并且仪表板不会对外暴露。

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
