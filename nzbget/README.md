# Home Assistant 社区应用：NZBGet

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护状态][maintenance-shield]

[![通过 GitHub Sponsors 赞助 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

用 C++ 编写的高效 Usenet 下载器。

## 关于

[NZBGet][nzbget] 是一个围绕“尽可能做最少的工作”而构建的 Usenet 下载器。它是用 C++ 编写的，因为早期的硬件资源有限；而在任何更强大的机器上，它能将下载任务与系统的其他工作隔离开来，互不干扰。

你只需要给它一个 `nzb` 文件，整件事情就都办好了：它会获取文章，校验随附的 par2 文件，修复任何损坏的部分，解压压缩包，并将结果传递给你希望其执行的程序。分类决定了文件的存放位置，RSS 源会自动拉取新条目，其他所有功能都通过 JSON-RPC API 提供。

下载的文件会保存在 `media` 文件夹中，这使家用辅助系统（Home Assistant）的媒体浏览器以及其他映射该文件夹的应用程序能够访问它们。家用辅助系统（Home Assistant）还集成了 [NZBGet][integration]，因此你可以在仪表板上查看队列的速度和大小，并通过自动化服务来暂停、恢复或限制下载速率。

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
