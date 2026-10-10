# Home Assistant 社区应用：高级 SSH 与 Web 终端

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

此应用允许您通过 SSH 或使用 Web 终端登录到 Home Assistant 实例。

## 简介

此应用允许您通过 SSH 或 Web 终端登录到 Home Assistant 实例，从而访问您的文件夹，并提供命令行工具来执行诸如重启、更新和检查实例等任务。

这是 Home Assistant 提供的 [SSH Add-on][hass-ssh] 的增强版本，侧重于安全性、可用性和灵活性，并提供 Web 界面访问权限。

![Web Terminal in the Home Assistant Frontend][screenshot]

## 警告

高级 SSH & Web 终端 app 功能强大，为您提供系统几乎所有工具和硬件的访问权限。

虽然此应用是精心创建和维护的，并始终将安全性放在首位，但如果被不当使用或缺乏经验，可能会损坏您的系统。

## 功能特性

此应用当然提供了一个基于 [OpenSSH][openssh] 的 SSH 服务器，并且还支持基于 Web 的终端（可包含在您的 Home Assistant 前端中）。此外，开箱即用的功能包括：

-   直接从 Home Assistant 前端访问命令行！
-   安全的 SSH 默认配置：
    -   即使创建了更多用户，也仅允许使用配置的用户登录。
    -   仅使用经过验证的加密算法和协议。
    -   限制登录尝试次数，以更好地抵御暴力破解攻击。
-   提供 SSH 兼容性模式选项，允许较旧的客户端连接。
-   支持 [Mosh][mosh-docs]，支持漫游及间歇性连接。
-   SFTP 支持默认禁用，但可由用户自定义配置。
-   如果 Home Assistant 是通过通用 Linux 安装程序安装的，则兼容该配置。
-   用户名可配置，因此不再强制要求使用 `root`。
-   在应用重启之间保留自定义 SSH 客户端设置及密钥。
-   在应用重启、更新和重启之间同时保留 ZSH 和 Bash 的 Shell 历史。
-   提供日志级别，以便更轻松地排查问题。
-   可访问您的音频、UART/串行设备及 GPIO 引脚硬件。
-   以更高的权限运行，允许您调试和测试更多场景。
-   可访问主机系统的 dbus。
-   可选择访问运行在主机系统上的 Docker 实例。
-   在主机级别网络运行，允许您打开端口或运行小守护进程。
-   在启动时安装自定义 Alpine 软件包。这将允许您安装您最喜欢的工具，这些工具将每次登录时都可用。
-   在应用启动时执行自定义命令，以便您自定义 shell 以满足您的喜好。
-   默认使用 `[ZSH][zsh]` as its 默认 Shell。对于初学者更易使用，对于经验丰富的用户则更加高级。它甚至预装了 ["Oh My ZSH"][ohmyzsh]，并启用了一些插件。
-   开箱即用，包含了一套合理的工具：curl, Wget, RSync, GIT, Nmap, Mosquitto 客户端，MariaDB/MySQL 客户端，Awake（"唤醒功能”），Nano, Neovim, tmux，以及一堆常用的网络工具。

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
[release-shield]: https://img.shields.io/badge/version-v24.1.7-blue.svg
[release]: https://github.com/hassio-addons/app-ssh/tree/v24.1.7
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
