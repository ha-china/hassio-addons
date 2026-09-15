# Home Assistant 社区应用：NZBGet

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

用 C++ 编写的高效 NZB（Usenet）下载器。

## 简介

[NZBGet][nzbget] 是一款围绕“只做所需工作”理念构建的 Usenet 下载器。它专为硬件资源匮乏的机器设计，使用 C++ 编写；即便在更强大的机器上运行，它的下载速度也会保持在队列中，而系统的其余部分可继续正常运作，仿佛未发生任何中断。

只需提供一个 nzb 文件，它便完成了全部工作：获取文章，验证附带的 par2 文件并修复损坏的内容，解压归档，并将结果传递到您希望后续执行的程序。分类决定文件的存放位置，RSS 订阅会自动拉取新项，其他一切则通过 JSON-RPC API 处理。

下载的文件将存放在 `media` 文件夹中，以便 Home Assistant 的媒体浏览器及其他映射应用访问。Home Assistant 还提供了 [NZBGet 的集成][integration]，您可以在仪表板上查看队列速度和大小，并通过自动化服务来暂停、恢复或限制下载速度。

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

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
