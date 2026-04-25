# Home Assistant 社区应用：高级 SSH & 网页终端

[![发布][发布盾牌]][发布] ![项目阶段][项目阶段盾牌] ![项目维护][维护盾牌]

[![Discord][Discord盾牌]][Discord] [![社区论坛][论坛盾牌]][论坛]

[![通过 GitHub Sponsors 支持Frenck][GitHub Sponsors盾牌]][GitHub Sponsors]

[![在 Patreon 上支持 Frenck][Patreon盾牌]][Patreon]

此应用允许您通过 SSH 或网页终端登录到您的 Home Assistant 实例，访问您的文件夹，并提供命令行工具以执行重启、更新和检查实例等操作。

这是提供的 [Home Assistant 的 SSH 扩展][hass-ssh] 的增强版本，专注于安全性、易用性、灵活性，并提供了通过网页界面访问的功能。

![Home Assistant 前端中的网页终端][截图]

## 警告

高级 SSH & 网页终端应用非常强大，几乎可以访问您系统中的所有工具和硬件。

虽然此应用在创建和维护时都考虑了安全因素，但在不正确或不经验的手中，可能会损坏您的系统。

## 功能

当然，此应用提供基于 [OpenSSH][openssh] 的 SSH 服务器，以及网页终端（可以集成到您的 Home Assistant 前端）。此外，它自带以下功能：

- 直接从 Home Assistant 前端访问命令行！
- 安全的默认 SSH 配置：
  - 仅允许配置的用户登录，即使创建了更多用户。
  - 仅使用已知的安全密钥和算法。
  - 限制登录尝试，以更好地抵御暴力破解攻击。
- 提供了 SSH 兼容模式选项，允许旧客户端连接。
- 支持 Mosh，允许漫游并支持间歇性连接。
- 默认禁用 SFTP 支持，但用户可自定义配置。
- 与通过通用 Linux 安装程序安装的 Home Assistant 兼容。
- 用户名可配置，因此 `root` 不再是必需的。
- 在应用重启之间保持自定义 SSH 客户端设置和密钥。
- 提供日志级别，以便您更容易地处理问题。
- 提供对音频、uart/串行设备和 GPIO 引脚的硬件访问。
- 以更高权限运行，允许您调试和测试更多情况。
- 有权访问主机系统的 dbus。
- 有权访问主机系统上运行的 Docker 实例。
- 在主机级别网络上运行，允许您打开端口或运行小守护进程。
- 在启动时安装自定义 Alpine 软件包。这允许您安装您喜欢的工具，每次登录时都可用。
- 应用启动时执行自定义命令，以便您可以根据喜好自定义 shell。
- 默认 shell 为 [ZSH][zsh]。对于初学者来说更容易使用，对于经验更丰富的用户来说则更加高级。它甚至还预装了 ["Oh My ZSH"][ohmyzsh]，并启用了某些插件。
- 默认包含一套合理的工具：curl、Wget、RSync、GIT、Nmap、Mosquitto 客户端、MariaDB/MySQL 客户端、Awake ("唤醒局域网")、Nano、Vim、tmux，以及大量常用的网络工具。

[Discord盾牌]: https://img.shields.io/discord/478094546522079232.svg
[Discord]: https://discord.me/hassioaddons
[论坛盾牌]: https://img.shields.io/badge/community-forum-brightgreen.svg
[论坛]: https://community.home-assistant.io/t/community-hass-io-add-on-ssh-web-terminal/33820?u=frenck
[GitHub Sponsors盾牌]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[GitHub Sponsors]: https://github.com/sponsors/frenck
[hass-ssh]: https://home-assistant.io/addons/ssh/
[维护盾牌]: https://img.shields.io/maintenance/yes/2026.svg
[ohmyzsh]: http://ohmyz.sh/
[openssh]: https://www.openssh.com/
[Patreon盾牌]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[Patreon]: https://www.patreon.com/frenck
[项目阶段盾牌]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[发布盾牌]: https://img.shields.io/badge/version-v23.0.8-blue.svg
[发布]: https://github.com/hassio-addons/app-ssh/tree/v23.0.8
[截图]: https://github.com/hassio-addons/app-ssh/raw/main/images/screenshot.png
[zsh]: https://en.wikipedia.org/wiki/Z_shell
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
