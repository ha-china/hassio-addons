# Home Assistant 社区应用：高级 SSH 和 Web 终端

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护][maintenance-shield]

[![赞助 Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![在 Patreon 支持 Frenck][patreon-shield]][patreon]

该应用允许您通过 SSH 或 Web 终端登录您的 Home Assistant 实例。

## 关于

该应用允许您通过 SSH 或 Web 终端登录您的 Home Assistant 实例，为您提供文件夹访问权限，并包含一个命令行工具，可用于执行重启、更新和检查实例等操作。

这是 Home Assistant 提供的 [SSH 附加组件][hass-ssh] 的增强版本，侧重于安全性、可用性、灵活性，并提供通过 Web 界面访问的功能。

![Home Assistant 前端中的 Web 终端][screenshot]

## 警告

高级 SSH 和 Web 终端应用功能非常强大，可为您提供接近系统所有工具和硬件的访问权限。

虽然此应用经过精心创建和维护，并始终优先考虑安全性，但如果被不当或不具备经验的人员使用，可能会损坏您的系统。

## 功能特性

该应用当然提供基于 [OpenSSH][openssh] 的 SSH 服务器，并提供基于 Web 的终端（可包含在您的 Home Assistant 前端中）。此外，它开箱即配以下功能：

- 直接从 Home Assistant 前端访问命令行！
- 安全的 SSH 默认配置：
  - 即使创建了更多用户，也只允许配置的用户登录。
  - 仅使用已知的安全加密算法和协议。
  - 限制登录尝试次数，以更好地防御暴力破解攻击。
- 提供 SSH 兼容性模式选项，允许旧版客户端连接。
- 支持 [Mosh][mosh-docs]，支持漫游功能并支持间歇性连接。
- SFTP 支持默认禁用，但可由用户自定义配置。
- 若 Home Assistant 是通过通用 Linux 安装程序安装的，则兼容。
- 用户名可配置，因此不再强制要求使用 `root`。
- 持久化自定义 SSH 客户端设置及键，即使在应用重启后也保持有效。
- 持久化 ZSH 和 Bash 的 shell 历史，即使在应用重启、更新和重启后也保持有效。
- 提供日志级别，以便更容易排查问题。
- 提供对系统的音频设备、UART/串口设备及 GPIO 引脚的硬件访问权限。
- 以更高的权限运行，允许您调试和测试更多情况。
- 可对主机系统的 dbus 进行访问。
- 可选择访问在主机上运行的 Docker 实例。
- 在主机级别的网络上运行，允许您开放端口或运行小型守护进程。
- 启动时可安装自定义 Alpine 软件包。这允许您安装最喜欢的工具，每次登录时均可使用。
- 可在应用启动时执行自定义命令，以便按自己的喜好定制 Shell。
- [ZSH][zsh] 作为默认 Shell 用于，对初学者来说更易使用，对经验丰富的用户而言功能更强大。甚至预装了 ["Oh My ZSH"][ohmyzsh] ，并启用了一些插件。
- 开箱即配一套合理的工具集：curl、Wget、RSync、GIT、Nmap、Mosquitto 客户端、MariaDB/MySQL 客户端、Awake（“网络唤醒”）、Nano、Neovim、tmux 以及一批常用的网络工具。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[hass-ssh]: https://home-assistant.io/addons/ssh/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[mosh-docs]: https://github.com/hassio-addons/app-ssh/blob/main/ssh/DOCS.md#connecting-with-mosh
[ohmyzsh]: http://ohmyz.sh/
[openssh]: https://www.openssh.com/
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v24.2.1-blue.svg
[release]: https://github.com/hassio-addons/app-ssh/tree/v24.2.1
[screenshot]: https://github.com/hassio-addons/app-ssh/raw/main/images/screenshot.png
[zsh]: https://en.wikipedia.org/wiki/Z_shell

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
