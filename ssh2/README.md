# Home Assistant 社区应用：高级 SSH & Web 终端

[![发布][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护][maintenance-shield]

[![Discord][discord-shield]][discord] [![社区论坛][forum-shield]][forum]

[![通过 GitHub Sponsors 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

此应用允许您通过 SSH 或使用 Web 终端登录到您的 Home Assistant 实例。

## 关于

此应用允许您通过 SSH 或 Web 终端登录到您的 Home Assistant 实例，让您访问文件夹，还包括一个命令行工具，可用于重启、更新和检查您的实例。

这是 Home Assistant 提供的 [SSH 扩展][hass-ssh] 的增强版本，侧重于安全性、可用性、灵活性，同时也提供通过 Web 界面访问的功能。

![Home Assistant 前端中的 Web 终端][screenshot]

## 警告

高级 SSH & Web 终端应用非常强大，几乎可以访问系统中的所有工具和几乎所有硬件。

虽然此应用经过精心制作和维护，并注重安全性，但在不正确或不熟练的手中，可能会损坏您的系统。

## 特性

当然，此应用提供基于 [OpenSSH][openssh] 的 SSH 服务器，以及基于 Web 的终端（可以包含在您的 Home Assistant 前端中），此外，它还自带以下功能：

- 直接从 Home Assistant 前端访问命令行！
- SSH 的安全默认配置：
  - 只允许已配置的用户登录，即使创建了更多用户。
  - 只使用已知的安全密码和算法。
  - 限制登录尝试，以更好地防止暴力攻击。
- 提供SSH兼容模式选项，允许旧客户端连接。
- 支持 Mosh，允许漫游并支持间歇性连接。
- 默认禁用 SFTP 支持，但用户可自定义配置。
- 如果通过通用 Linux 安装程序安装了 Home Assistant，则兼容。
- 用户名可配置，因此不再强制使用 `root`。
- 在应用重启之间保留自定义 SSH 客户端设置和密钥。
- 日志级别，以便您更容易分类问题。
- 访问您的音频、uart/串行设备和 GPIO 引脚的硬件。
- 以更高权限运行，允许您调试和测试更多情况。
- 访问主机系统的 dbus。
- 有选项访问主机系统上运行的 Docker 实例。
- 在主机级别网络上运行，允许您打开端口或运行小守护程序。
- 在启动时安装自定义 Alpine 软件包。这允许您安装您最喜欢的工具，每次登录时都将可用。
- 在应用启动时执行自定义命令，以便您可以根据喜好自定义 shell。
- 默认 shell 为 [ZSH][zsh]。对于初学者来说更容易使用，对于经验更丰富的用户来说更具高级性。它甚至预装了 ["Oh My ZSH"][ohmyzsh]，并启用了某些插件。
- 包含一组合理的工具：curl、Wget、RSync、GIT、Nmap、Mosquitto 客户端、MariaDB/MySQL 客户端、Awake（"唤醒网络"）、Nano、Vim、tmux 以及大量常用网络工具。

[discord-shield]: https://img.shields.io/discord/478094546522079232.svg
[discord]: https://discord.me/hassioaddons
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg
[forum]: https://community.home-assistant.io/t/community-hass-io-add-on-ssh-web-terminal/33820?u=frenck
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[hass-ssh]: https://home-assistant.io/addons/ssh/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[ohmyzsh]: http://ohmyz.sh/
[openssh]: https://www.openssh.com/
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v23.0.3-blue.svg
[release]: https://github.com/hassio-addons/app-ssh/tree/v23.0.3
[screenshot]: https://github.com/hassio-addons/app-ssh/raw/main/images/screenshot.png
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
