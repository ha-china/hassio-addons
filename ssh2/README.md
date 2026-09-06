# Home Assistant 社区应用：高级 SSH 与 Web 终端

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护状态][maintenance-shield]

[![通过 GitHub 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 支持 Frenck][patreon-shield]][patreon]

该应用允许您通过 SSH 或使用 Web 终端登录到您的 Home Assistant 实例。

## 关于

该应用允许您通过 SSH 或 Web 终端登录到您的 Home Assistant 实例，为您提供文件夹访问权限，并内置命令行工具，可用于重启、更新及检查实例状态。

这是官方提供的 `[Hass SSH 附加组件][hass-ssh]` 的增强版本，重点关注安全性、易用性、灵活性，并提供通过 Web 界面访问的功能。

![Home Assistant 前端的 Web 终端截图][screenshot]

## 警告

高级 SSH & Web 终端应用功能强大，可为您提供系统几乎所有工具和硬件的访问权限。

尽管该应用经过精心设计与维护，并始终将安全性放在首位，但在错误的或不具备经验的手中使用，仍可能损坏您的系统。

## 功能特性

当然，该应用提供基于 [OpenSSH][openssh] 的 SSH 服务器，以及基于 Web 的终端（可包含在您的 Home Assistant 前端中）。此外，开箱即配有以下功能：

- 直接从 Home Assistant 前端访问命令行！
- 安全的默认 SSH 配置：
  - 即使创建了多个用户，也仅允许配置的特定用户登录。
  - 仅使用已知的安全加密算法和密钥交换协议。
  - 限制登录尝试次数，以更好地抵御暴力破解攻击。
- 提供匹配模式选项，允许旧版客户端连接。
- 支持 [Mosh][mosh-docs]，支持漫游及间歇性连接。
- SFTP 支持默认禁用，但可由用户自行配置。
- 兼容通过通用 Linux 安装器安装 Home Assistant 的场景。
- 用户名可自定义，不再强制要求使用 `root`。
- 在应用重启之间保留自定义 SSH 客户端设置及密钥。
- 在应用重启、更新和重启之间保留 ZSH 和 Bash 的 shell 历史记录。
- 提供日志级别选项，便于您排查问题。
- 可访问音频、UART/串行设备及 GPIO 引脚的硬件资源。
- 以更高权限运行，允许调试和测试更多情况。
- 可访问主机系统的 dbus。
- 可选择访问在主机上运行的 Docker 实例。
- 在主机级别网络运行，允许您开启端口或运行小型守护进程。
- 启动时可预装自定义 Alpine 包包，这样您每次登录都能访问这些常用工具。
- 可在应用启动时执行自定义命令，以便根据您的喜好定制 shell。
- 默认使用 [ZSH][zsh] 作为 shell。对于初学者更易上手，对经验丰富的用户功能更强大。甚至预装了 ["Oh My ZSH"][ohmyzsh]，并启用了一些插件。
- 开箱即配有合理的一套常用工具：curl、Wget、RSync、GIT、
  Nmap、Mosquitto 客户端、MariaDB/MySQL 客户端、Awake（“局域网唤醒”）、Nano、
  Neovim、tmux 以及一堆常用的网络工具。

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
[release-shield]: https://img.shields.io/badge/version-v24.1.3-blue.svg
[release]: https://github.com/hassio-addons/app-ssh/tree/v24.1.3
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
