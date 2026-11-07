# Home Assistant 社区应用：WireGuard

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

WireGuard：快速、现代、安全的 VPN 隧道。

## 关于

[WireGuard®][wireguard] 是一个极其简洁、快速且现代的 VPN，采用最先进的加密技术。它旨在比 IPsec 更快、更简单、更轻量且更实用，同时避免繁文缛节。

它打算比 OpenVPN 表现更出色。WireGuard 被设计为一种通用 VPN，既可用于嵌入式设备接口，也可用于超级计算机，适用于各种不同场景。

最初为 Linux 内核发布，现已支持跨平台（Windows、macOS、BSD、iOS、Android）且部署广泛，包括通过 Hass.io 应用！

WireGuard 目前正处于积极开发中，但目前已可被视为业界中安全最高、最易使用且最简单的 VPN 解决方案。

## 本应用是一个 WireGuard 服务器，而非客户端

此应用在您 Home Assistant 实例上运行一个 WireGuard **服务器**。您的手机、笔记本电脑及其他设备充当对等点（peers）：它们连接到 Home Assistant。该应用为您生成它们的客户端配置和二维码，这就是 `peers` 选项的用途。

反向操作不支持。没有选项可以让 Home Assistant 加入现有的 WireGuard 网络作为客户端，例如托管在 VPS 上、运行在您的路由器上或由商业 VPN 提供商运行的网络。如果您需要这样的功能，此应用不是您需要的那个。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.14.0-blue.svg
[release]: https://github.com/hassio-addons/app-wireguard/tree/v0.14.0
[wireguard]: https://www.wireguard.com

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
