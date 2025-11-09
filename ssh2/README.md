# Home Assistant 社区插件：高级 SSH & Web 终端

[![发布][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护][maintenance-shield]

[![Discord][discord-shield]][discord] [![社区论坛][forum-shield]][forum]

[![通过 GitHub Sponsors 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

此插件允许您使用 SSH 或 Web 终端登录到您的 Home Assistant 实例。

## 关于

此插件允许您使用 SSH 或 Web 终端登录到您的 Home Assistant 实例，从而访问您的文件夹，并且还包含一个命令行工具，用于执行重启、更新和检查实例等操作。

这是 Home Assistant 提供的 [SSH 插件][hass-ssh] 的增强版本，重点在于安全性、易用性、灵活性，并且还提供了通过 Web 界面访问的功能。

![Home Assistant 前端中的 Web 终端][screenshot]

## 警告

高级 SSH & Web 终端插件非常强大，几乎可以访问您系统中的所有工具和几乎所有硬件。

虽然此插件是精心创建和维护的，并且考虑了安全性，但在错误或不熟悉的情况下，它可能会损坏您的系统。

## 功能

此插件当然提供了一个基于 [OpenSSH][openssh] 的 SSH 服务器，以及一个可以包含在您的 Home Assistant 前端中的基于 Web 的终端。此外，它还附带以下功能：

- 直接从 Home Assistant 前端访问命令行！
- SSH 的安全默认配置：
  - 仅允许通过配置的用户登录，即使创建了更多用户。
  - 仅使用已知安全的密码和算法。
  - 限制登录尝试次数，以更好地抵御暴力破解攻击。
- 带有 SSH 兼容模式选项，以允许旧客户端连接。
- 支持 Mosh，允许漫游和支持间歇性连接。
- 默认情况下禁用 SFTP 支持，但用户可以配置。
- 如果 Home Assistant 通过通用 Linux 安装程序安装，则兼容。
- 用户名是可配置的，因此不再强制要求使用 `root`。
- 在插件重启之间持久化自定义 SSH 客户端设置和密钥
- 日志级别，以便更容易地诊断问题。
- 对您的音频、uart/串行设备和 GPIO 引脚的硬件访问。
- 以更高的权限运行，允许您调试和测试更多情况。
- 可以访问主机系统的 dbus。
- 可以选择访问主机系统上运行的 Docker 实例。
- 在主机级别的网络上运行，允许您打开端口或运行小型守护进程。
- 在启动时安装自定义 Alpine 软件包。这允许您安装您喜欢的工具，这些工具每次登录时都可用。
- 在插件启动时执行自定义命令，以便您可以根据自己的喜好定制 shell。
- [ZSH][zsh] 作为其默认 shell。对初学者更易于使用，对有经验的用户更高级。它甚至预装了
  ["Oh My ZSH"][ohmyzsh]，并启用了一些插件。
- 包含一套合理的工具：curl、Wget、RSync、GIT、Nmap、Mosquitto 客户端、MariaDB/MySQL 客户端、Awake（“唤醒局域网”）、Nano、Vim、tmux，以及一些常用的网络工具。

[discord-shield]: https://img.shields.io/discord/478094546522079232.svg
[discord]: https://discord.me/hassioaddons
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg
[forum]: https://community.home-assistant.io/t/community-hass-io-add-on-ssh-web-terminal/33820?u=frenck
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[hass-ssh]: https://home-assistant.io/addons/ssh/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[ohmyzsh]: http://ohmy.sh/
[openssh]: https://www.openssh.com/
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v22.0.0-blue.svg
[release]: https://github.com/hassio-addons/addon-ssh/tree/v22.0.0
[screenshot]: https://github.com/hassio-addons/addon-ssh/raw/main/images/screenshot.png
[zsh]: https://en.wikipedia.org/wiki/Z_shell
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
