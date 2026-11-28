# Home Assistant 社区应用：FTP

[![Release][release-shield]][release] ![项目阶段][project-stage-shield] ![项目维护状态][maintenance-shield]

[![通过 GitHub Sponsors 支持 Frenck][github-sponsors-shield]][github-sponsors]

[![在 Patreon 上支持 Frenck][patreon-shield]][patreon]

一个安全快捷的 Home Assistant FTP 服务器

## 概述

FTP 协议有时可能派上用场。虽然它较为老旧，但仍有其用途。例如，大多数 IP 摄像头仍然支持通过 FTP 上传图像或视频。

此应用程序为 Hass.io 提供了一个较为安全的 FTP 服务器。虽然 FTP 本身并非完全安全（因其未加密的性质），但此应用程序支持 FTP  over SSL (FTPS)，并将虚拟用户限制在其家庭目录中运行（chroot）。

当然，如果您真的愿意，也可以使用此应用程序通过 FTP 重新访问您的 Home Assistant 配置。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-v7.0.0-blue.svg
[release]: https://github.com/hassio-addons/app-ftp/tree/v7.0.0

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
