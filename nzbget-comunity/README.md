# Home Assistant 社区应用：NZBGet

[![ Release ][release-shield]][release] ![项目阶段][project-stage-shield] ![维护状态][maintenance-shield]

[![赞助 Frenck (via GitHub Sponsors) ][github-sponsors-shield]][github-sponsors]

[![在 Patreon 支持 Frenck][patreon-shield]][patreon]

用 C++ 编写的高效能 Usenet 下载器。

## 关于

[NZBGet][nzbget] 是一个围绕“能用最少的资源完成工作”这一理念构建的 Usenet 下载工具。它旨在处理硬件资源非常有限的机器上的任务，然后在任何更强大的机器上运行时，让下载充满线路，同时让其余部分（如 CPU）继续照常工作，仿佛没有发生什么下载操作。

只需给它一个 nzb 文件即可完成所有工作：它获取文章、检查随附的 par2 文件并修复损坏的部分、解压归档，并将结果传递给您希望后续执行的操作。分类决定文件的存放位置，RSS  feed 会主动获取新项目，其余一切通过 JSON-RPC API 实现。

下载的文件会存储在 `media` 文件夹中，使其可被 Home Assistant 的媒体浏览器以及其他映射该文件夹的应用所访问。Home Assistant 还提供了 [NZBGet 的集成][integration]，因此您可以在仪表盘上查看队列的速度和大小，并可通过自动化暂停、恢复并限制下载速度。

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
