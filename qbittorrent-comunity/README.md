# Home Assistant 社区应用：qBittorrent

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

快速、稳定且轻量级的 BitTorrent 客户端。

## 概述

[qBittorrent][qbittorrent] 是一个 BitTorrent 客户端，它不附加任何条件地完成任务。没有广告，没有捆绑插件，无需账户：它是人们在使用大型客户端时首选的开源替代方案，因为它提供功能齐全的特性，且无其他干扰。

该应用运行的是无头版本，因此您获得的是网页界面。它处理长期运行客户端所需的一切内容：带极限的队列、决定文件存储位置的区域分类及标签、能自动下载新剧集的 RSS feeds、让上传不争夺家中带宽剩余空间的调度功能，以及可用于其他目的的完整 API。

下载的 torrent 文件落入 `media` 文件夹，这样它们就置于 Home Assistant 媒体浏览器的可达范围内，以及将其映射的其他应用程序可访问的范围内。Home Assistant 还拥有 [qBittorrent 的集成模块][integration]，因此速度和 torrent 数量可以显示在您的仪表盘上，与其他数据并列。

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
