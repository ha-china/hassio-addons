# Home Assistant 社区应用：高级 SSH 和网络终端

[![释放][发布图标]][发布] ![项目阶段][项目阶段图标] ![项目维护][维护图标]

[![通过 GitHub 赞助 Frenck][GitHub 赞助图标]][GitHub 赞助]

[![在 Patreon 上支持 Frenck][Patreon 图标]][Patreon]

此应用允许您通过 SSH 或使用网络终端登录 Home Assistant 实例。

## 关于

此应用允许您通过 SSH 或网络终端登录 Home Assistant 实例，为您提供文件夹访问权限，并包含一个命令行工具，可用于重启、更新和检查实例等操作。

这是 Home Assistant 提供的 [SSH 插件][Hass-SSH] 的增强版本，专注于安全性、可用性、灵活性，并提供通过网络接口访问的功能。

![Home Assistant 前端中的网络终端][截图]

## 警告

高级 SSH 和网络终端应用非常强大，为您提供几乎访问系统所有工具和硬件的权限。

虽然此应用是由开发者精心打造并维护的，且始终将安全放在首位，但在不正确或不熟悉使用的情况下，可能会导致您的系统受损。

## 特性

此应用当然提供一个基于 [OpenSSH][OpenSSH] 的 SSH 服务器，并提供基于 Web 的终端（可包含在您的 Home Assistant 前端中）。此外，它还默认包含以下内容：

- 直接从 Home Assistant 前端访问您的命令行！
- 安全的 SSH 默认配置：
  - 即使创建更多用户，也仅允许配置指定的用户登录。
  - 仅使用已知的安全加密算法和协议。
  - 限制登录尝试次数，以更好地抵御暴力破解攻击。
- 提供 SSH 兼容模式选项，以允许较旧的客户端连接。
- 支持 [Mosh][Mosh 文档]，允许漫游并支持间歇性连接。
- SFTP 功能默认禁用，但可用户自定义配置。
- 如果 Home Assistant 通过通用 Linux 安装程序安装，则兼容。
- 用户名可配置，因此不再强制需要 `root` 用户。
- 在应用重启之间保留自定义 SSH 客户端设置和密钥。
- 在应用重启、更新和重启之间保留 ZSH 和 Bash 的 shell 历史记录。
- 提供日志级别选项，以便更轻松地排查问题。
- 可访问您的音频设备、UART/串行设备以及 GPIO 引脚的硬件权限。
- 拥有更高的运行权限，允许您调试和测试更多情况。
- 可访问主机系统的 dbus。
- 可选择访问在主机系统上运行的 Docker 实例。
- 在主机级别网络上运行，允许您打开端口或运行小守护进程。
- 启动时安装自定义 Alpine 软件包。这使得您能够安装常用工具，每次登录时均可使用。
- 在应用启动时执行自定义命令，以便您根据自己的喜好自定义 shell。
- [`ZSH`][Zsh] 作为默认 shell。对于初学者更易于使用，对于经验丰富的用户功能更强大。它还预置了 [`Oh My ZSH`][Oh My Zsh]，并启用了一些插件。
- 开箱即用地包含了一组合理的工具：curl, Wget, RSync, GIT, Nmap, Mosquitto 客户端, MariaDB/MySQL 客户端, Awake ("局域网唤醒"), Nano, Neovim, tmux 以及一堆常用的网络工具。

[GitHub 赞助图标]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[GitHub 赞助]: https://github.com/sponsors/frenck
[Hass-SSH]: https://home-assistant.io/addons/ssh/
[维护图标]: https://img.shields.io/maintenance/yes/2026.svg
[Mosh 文档]: https://github.com/hassio-addons/app-ssh/blob/main/ssh/DOCS.md#connecting-with-mosh
[Oh My Zsh]: http://ohmyz.sh/
[OpenSSH]: https://www.openssh.com/
[Patreon 图标]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[Patreon]: https://www.patreon.com/frenck
[项目阶段图标]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[发布图标]: https://img.shields.io/badge/version-v24.2.1-blue.svg
[发布]: https://github.com/hassio-addons/app-ssh/tree/v24.2.1
[截图]: https://github.com/hassio-addons/app-ssh/raw/main/images/screenshot.png
[Zsh]: https://en.wikipedia.org/wiki/Z_shell

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
