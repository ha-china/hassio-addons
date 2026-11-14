# Home Assistant 社区应用：NZBGet

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

以 C++ 编写的高效 Usenet 下载器。

## 简介

[NZBGet][nzbget] 是一个围绕“节省尽可能多的资源来完成任务”理念构建的 Usenet 下载器。它是为硬件资源极其有限的情况而编写的 C++ 程序，旨在即使在中大型设备上运行，也能在完成任务的同时，让主机保持几乎不受影响的状态。

提交一个 `.nzb` 文件即完成所有工作：它下载文章，用附带的 `.par2` 校验文件检查数据完整性并修复损坏部分，解压归档，并将结果传递给您指定的后续程序。分类决定了文件的存放位置，RSS 馈会自动拉取新内容，而 JSON-RPC API 则提供了除此之外一切所需的功能。

下载的文件会存储在 `media` 文件夹中，使其能够被 Home Assistant 的媒体浏览器及其他对应的应用程序访问。Home Assistant 也提供了 [NZBGet 的集成][integration]，因此您可以在仪表板上查看队列的速度和大小，并通过自动化服务来控制暂停、恢复或限制下载速率。

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
```

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
