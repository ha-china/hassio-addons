# Home Assistant 社区应用：高级 SSH 与 Web 终端

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护状态][maintenance-shield]

[![通过 GitHub 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 支持 Frenck][patreon-shield]][patreon]

此应用允许您通过 SSH 或使用 Web 终端登录 Home Assistant 实例。

## 简介

此应用允许您通过 SSH 或 Web 终端登录 Home Assistant 实例，为您提供对目录的访问，并包含一个命令行工具来执行重启、更新和检查实例等操作。

这是由 Home Assistant 提供的 [SSH 附加组件][hass-ssh] 的增强版本，侧重于安全性、可用性、灵活性，并且还提供了使用 Web 界面进行访问的功能。

![Home Assistant 前端中的 Web 终端][screenshot]

## 警告

高级 SSH 与 Web 终端应用非常强大，能让您访问几乎您系统的所有工具和硬件。

虽然此应用是经过谨慎创建和维护，并始终将安全放在首位，但在错误或缺乏经验的情况下操作，可能会损坏您的系统。

## 功能

此应用当然提供了基于 [OpenSSH][openssh] 的 SSH 服务器，以及基于 Web 的终端（可以包含在您的 Home Assistant 前端中）。此外，开箱即用的功能包括：

- 直接从 Home Assistant 前端访问命令行！
- 安全默认的 SSH 配置：
  - 即使创建了更多用户，也只允许配置的用户登录。
  - 仅使用已知的安全加密算法。
  - 限制登录尝试次数以更好地对抗暴力破解攻击。
- 包含 SSH 兼容模式选项，允许旧版客户端连接。
- 支持 [Mosh][mosh-docs]，支持漫游并支持间歇性连接。
- SFTP 支持默认已禁用，但可由用户配置。
- 如果 Home Assistant 是通过通用 Linux 安装程序安装的，则兼容。
- 用户名可配置，因此不再需要 `root` 用户。
- 在应用重启之间保留自定义 SSH 客户端设置和密钥。
- 在应用重启、更新和重启之间保留 ZSH 和 Bash 的 Shell 历史记录。
- 提供日志级别，使您更容易排查问题。
- 硬件访问以您的音频、UART/串行设备和 GPIO 引脚。
- 拥有更高的权限，允许您调试和测试更多情况。
- 可访问宿主系统的 dbus。
- 有选项访问在宿主系统上运行的 Docker 实例。
- 在宿主级别网络运行，允许您开放端口或运行小守护进程。
- 启动时安装自定义 Alpine 包。这允许您安装喜欢的工具，每次登录时均可使用。
- 在应用启动时执行自定义命令，以便您可以按照喜好定制 Shell。
- 默认 Shell 为 [ZSH][zsh]。对此初学者更易使用，对经验丰富的用户更高级。甚至还预加载了 ["Oh My ZSH"][ohmyzsh]，并启用了一些插件。
- 开箱即用包含了一组合理的工具：curl、Wget、RSync、GIT、Nmap、Mosquitto 客户端、MariaDB/MySQL 客户端、Awake（“唤醒基于局域网的设备”）、Nano、Neovim、tmux，以及许多常用的网络工具。

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
[release-shield]: https://img.shields.io/badge/version-v24.1.4-blue.svg
[release]: https://github.com/hassio-addons/app-ssh/tree/v24.1.4
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
