# Home Assistant 社区应用：高级 SSH 及 Web 终端

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护][maintenance-shield]

[![通过 GitHub 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

该应用允许您通过 **SSH** 或 **Web 终端** 登录 Home Assistant 实例。

## 简介

该应用允许您通过 **SSH** 或 **Web 终端** 登录 Home Assistant 实例，从而访问您的文件夹，并提供命令行工具来执行重启、更新以及检查实例等功能。

这是 Home Assistant 提供的 [SSH 附加组件][hass-ssh] 的增强版，专注于安全性、易用性、灵活性，并提供基于 Web 的界面访问。

![Home Assistant 前端中的 Web 终端][screenshot]

## 警告

高级 SSH 及 Web 终端应用功能非常强大，可让您访问系统近乎所有的工具和硬件。

虽然该应用经过精心创作和维护并充分考虑到安全性，但在错误或经验不足的使用下，可能会损坏您的系统。

## 特性

当然，该应用提供基于 [OpenSSH][openssh] 的 **SSH 服务器**，以及基于 Web 的 **终端**（可包含在您的 Home Assistant 前端中）。此外，开箱即用以下功能：

- 直接从 Home Assistant 前端访问命令行！
- 安全的 SSH 默认配置：
  - 即使创建更多用户，也仅允许配置用户登录。
  - 仅使用已知的安全加密算法。
  - 限制登录尝试次数以更好地防范暴力攻击。
- 提供 SSH 兼容性模式选项，以便允许旧客户端的连接。
- 支持 [Mosh][mosh-docs]，支持漫游和间歇性连接。
- SFTP 支持默认禁用，但可由用户自定义配置。
- 如果 Home Assistant 是通过通用 Linux 安装程序安装的，则兼容。
- 用户名可配置，`root` 不再是强制要求的。
- 在应用重启之间持久化自定义 SSH 客户端设置及密钥。
- 在应用重启、更新和重启之间持久化 ZSH 和 Bash 的 Shell 历史记录。
- 提供日志级别，便于更轻松地排查问题。
- 可访问您的音频、uart/串口设备和 GPIO 引脚的硬件。
- 拥有更高的权限，允许您调试和测试更多场景。
- 可访问宿主系统的 dbus。
- 可选访问运行在主机系统上的 Docker 实例。
- 在主机级别网络运行，允许您开放端口或运行小型守护进程。
- 启动时安装自定义的 Alpine 软件包。这允许您安装最喜欢的工具，每次登录时均可使用。
- 应用启动时可执行自定义命令，以便您可以按喜好自定义 Shell。
- 默认 Shell 为 [ZSH][zsh]。对新手更易于使用，对经验更丰富的用户更高级。它甚至预装了 ["Oh My ZSH"][ohmyzsh]，并启用了一些插件。
- 内置一套合理且实用的开箱即用工具：curl, Wget, RSync, GIT, Nmap, Mosquitto 客户端，MariaDB/MySQL 客户端，Awake ("远程唤醒"), Nano, Neovim, tmux，以及一大堆常用的网络工具。

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
[release-shield]: https://img.shields.io/badge/version-v24.2.0-blue.svg
[release]: https://github.com/hassio-addons/app-ssh/tree/v24.2.0
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
