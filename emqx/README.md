# Home Assistant 社区应用：EMQX

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

适用于物联网 (IoT)、工业物联网 (IIoT) 和联网车辆的最高扩展性 MQTT 代理。

## 简介

[EMQX] [emqx] 是一款高性能实时消息处理引擎的 MQTT 代理，为大规模物联网设备的事件流提供动力。作为最高扩展性的 MQTT 代理，EMQX 可帮助您连接任何设备，无论规模如何（包括您的家庭）。

[EMQX MQTT 代理][emqx] 是通常用于 Home Assistant 的 Mosquitto MQTT 代理/应用的先进替代方案。它提供了一个用户界面来配置、管理并调试您的 MQTT 代理、客户端和流量。

虽然 EMQX 主要在其网站上将其产品作为托管在云端的销售产品，但本应用可在完全本地、自托管的环境中运行 EMQX。

自 5.9.0 版本起，EMQX 已不再开源；它采用了 [Business Source License 1.1][emqx-license] 许可。在此发布的构建包含了 EMQX 社区许可，该许可免费、不临期，且覆盖单个节点最多 1000 万并发会话。集群功能是商业许可的范围，而本应用从未进行过集群。

![EMQX in the Home Assistant Frontend][screenshot]

[emqx-license]: https://github.com/emqx/emqx/blob/main/LICENSE
[emqx]: https://www.emqx.io/
[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.10.1-blue.svg
[release]: https://github.com/hassio-addons/app-emqx/tree/v0.10.1
[screenshot]: https://github.com/hassio-addons/app-emqx/raw/main/images/screenshot.png

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
