# Home Assistant 社区应用：NZBGet

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

C++ 编写的高效 Usenet 下载器。

## 关于

[NZBGet][nzbget] 是一个围绕核心任务进行精简设计的 Usenet 下载器。它专为硬件资源有限的设备编写，旨在用尽可能少的资源完成工作。对于更大配置的硬件，它将把硬盘填满，而让其他机器继续正常运行。

只需给它一个 nzb 文件就能完成所有工作：它获取文章，将其与附带的 par2 文件进行比对并修复损坏的部分，解压缩存档，并将结果传递给您希望执行的后续程序。类别决定存储位置，RSS 源自动抓取新项目，而 JSON-RPC API 用于其他所有功能。

下载的文件会存储在 `media` 文件夹中，使其可以被 Home Assistant 的媒体浏览器及其他将两者映射的应用程序访问。Home Assistant 还提供了 [NZBGet 的集成][integration]，因此您可以在仪表板上查看队列的速度和大小，并通过自动化服务的辅助来暂停、恢复下载或限制下载速度。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[integration]: https://www.home-assistant.io/integrations/nzbget/
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[nzbget]: https://nzbget.com/
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.1.0-blue.svg
[release]: https://github.com/hassio-addons/app-nzbget/tree/v0.1.0

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
