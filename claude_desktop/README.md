# Home Assistant 插件：Claude Desktop

![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]
![项目维护][maintenance-shield]

在 LinuxServer.io Selkies 容器中运行 Claude Desktop Linux 应用，并通过 Home Assistant 入口进行流式传输。

## 安装

1. 将此存储库添加到 Home Assistant 插件商店。
2. 安装 **Claude Desktop**。
3. 启动插件并从侧边栏打开 Web UI。
4. 使用桌面应用程序中的 Claude 账户登录。

Claude Desktop 登录需要支持桌面应用程序的 claude.ai 计划。桌面应用程序不接受 API 密钥。Anthropic 的 Linux 测试版不包括计算机使用或语音输入。

## 功能

- Claude Desktop 单应用程序 Selkies 模式。
- 支持 Home Assistant 入口。
- 在 `/config/data` 下的 `$HOME` 持久化，跨重启保留 Claude Desktop 和 Claude Code 登录状态。
- 可选从 Anthropic 的 apt 仓库进行 Claude Desktop 的运行时更新。
- 可选安装额外的 apt 和 pip 软件包。
- 通过存储库标准的 `claude_desktop.sh` 脚本支持自定义脚本。
- 可选捆绑 Claude Code 优化工具：headroom、rtk 和 caveman。
- 低功耗默认设置：GPU 设备映射、`AUTO_GPU=1`、`SELKIES_FRAMERATE=30`、`/tmp` tmpfs，以及 `$HOME/.cache` 重定向到 `/tmp/cache`。

## 选项

| 选项 | 默认值 | 描述 |
| ---- | ------ | ---- |
| `PUID` / `PGID` | `0` / `0` | 用于持久化数据所有权的用户和组。 |
| `TZ` | | 可选时区，例如 `America/New_York`。 |
| `KEYBOARD` | | 可选 Selkies 键盘布局。 |
| `PASSWORD` | | 可选 Selkies 端口的密码。在暴露端口 `3000` 或 `3001` 之前设置此密码。 |
| `DRINODE` | | 可选 GPU 设备覆盖 Selkies。 |
| `DNS_server` | `8.8.8.8` | 标准 DNS 模块使用的 DNS 服务器。 |
| `auto_update` | `true` | 在插件启动时检查 Anthropic 的 apt 仓库并升级 `claude-desktop`。 |
| `install_headroom` | `true` | 使内置的 `headroom` 命令可用并记录使用提示。 |
| `install_rtk` | `true` | 在持久化的 Claude Code 设置中配置 rtk Claude Code `PreToolUse` 插件。 |
| `install_caveman` | `true` | 将 caveman Claude Code 插件安装到持久化的 Claude Code 主目录中。 |
| `additional_apps` | | 启动时安装的逗号分隔的 Debian apt 软件包，例如 `htop,git`。 |
| `additional_pip` | | 启动时安装的逗号分隔的 pip 软件包。安装使用 `--break-system-packages`。 |
| `data_location` | `/config/data` | 持久化主目录位置。保持此持久化以便 Claude 登录在重启后仍然存在。 |
| `networkdisks`, `cifsusername`, `cifspassword`, `cifsdomain` | | 标准的 SMB 挂载选项。 |
| `localdisks` | | 标准的本地磁盘挂载选项。 |
| `env_vars` | `[]` | 导入容器的额外环境变量。这可以覆盖 `SELKIES_*` 默认值。 |

## 自定义脚本

插件包括存储库标准的自定义脚本执行器。在首次启动时，它从共享模板中在插件配置目录中生成一个 `claude_desktop.sh` 文件。该脚本中的命令在启动时运行，允许在不重建镜像的情况下进行本地自定义。

## 数据和缓存位置

持久化状态存储在配置的 `data_location` 中。Claude Desktop 将登录数据存储在 `~/.config/Claude` 以下，Claude Code/工具配置存储在 `~/.claude` 以下。易失性缓存数据通过 `$XDG_CACHE_HOME` 和 `$HOME/.cache` 重定向到 `/tmp/cache`。

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
