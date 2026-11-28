# Home Assistant 社区应用：WireGuard

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

WireGuard：快速、现代、安全的 VPN 隧道。

## 关于本文档

[WireGuard®][wireguard] 是一款极度简洁、快速且现代的 VPN，采用当时最先进的加密技术。它旨在比 IPsec 更快、更简单、更轻量、更实用，同时避免复杂的配置问题。

它有意设计出比 OpenVPN 性能更出色的体验。WireGuard 专为通用用途而设计，可运行在嵌入式接口和超级计算机 alike（同类设备）上，适用于各种环境。

最初基于 Linux 内核发布，如今它已支持跨平台（Windows、macOS、BSD、iOS、Android），并可通过 Hass.io 应用程序广泛部署！

WireGuard 目前仍在积极开发中，但它已经被业界公认为安全最高、最易用、最简单的 VPN 解决方案之一。

## 本应用是 WireGuard 服务器，而非客户端

本应用在你 Home Assistant 实例上运行一个 WireGuard **服务器**。你的手机、笔记本和其他设备是“节点”（Peers）：它们连接 **到** Home Assistant。此应用为你生成其客户端配置和 QR 码，这些正是 `peers` 选项所对应的内容。

不支持反向方向。没有选项可以让 Home Assistant 作为一个客户端加入现有的 WireGuard 网络，例如托管在 VPS 上、运行在你路由器上，或由商业 VPN 提供商运行的网络。如果你需要的是这种功能，这不是一款适合你的应用。

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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
