# Home Assistant 社区应用：qBittorrent

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

快速、稳定且轻量级的 BitTorrent 客户端。

## 简介

[qBittorrent][qbittorrent] 是一个不需要额外回报就能完成工作的 BitTorrent 客户端。没有广告，没有捆绑软件，没有账户：它就是人们想要大型客户端的功能又不需要其他客户端功能时转向的免费开源客户端。

此应用运行无头版（headless build），因此您获得的是网络界面。它处理长期运行客户端所需的各种功能：带有限额的队列、决定文件存放位置的分类和标签标签、能够自动下载新剧集的 RSS 订阅源、为避免与家里其他设备的上传流量争抢而进行的调度，以及用于其他任何功能的完整 API。

下载的媒体文件会放置在 `media` 文件夹中，从而使其能够被 Home Assistant 的媒体浏览器访问，同时也能够被其他映射该文件夹的应用访问。Home Assistant 还有一个 [用于 qBittorrent 的集成][integration]，因此下载速度和索引导数量可以显示在仪表板上，与其他内容并列。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[integration]: https://www.home-assistant.io/integrations/qbittorrent/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[qbittorrent]: https://www.qbittorrent.org/
[release-shield]: https://img.shields.io/badge/version-v0.1.1-blue.svg
[release]: https://github.com/hassio-addons/app-qbittorrent/tree/v0.1.1

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
