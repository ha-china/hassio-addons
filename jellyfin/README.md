# Home Assistant 社区应用：Jellyfin

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

免费软件媒体系统，用于您的电影、剧集和音乐。

## 关于

[Jellyfin][jellyfin] 是一个媒体服务器。将其指向存放您电影、剧集和音乐的文件夹，它会自动识别所有内容，收集艺术品和描述，并将所有信息提供给您想要在以下设备中观看的内容：浏览器、手机、平板电脑、游戏机或电视。

它不会将信息发送到外部。不需要创建账号，没有订阅，没有付费功能层级受限限制；您自己机器上的服务器就是整个产品。该应用在 Home Assistant 旁边运行此服务器，其库位于与您的其他应用使用相同的 `media` 文件夹中。

为了防止设备无法直接播放文件，转码（Transcoding）可以交给带有补丁的 FFmpeg 的 Intel 或 AMD 显卡芯片处理，这些补丁是由 Jellyfin 项目提供的。Home Assistant 自身的 [Jellyfin 集成][integration] 将库引入媒体浏览器，并将从中播放的每一个设备添加为媒体播放器。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[integration]: https://www.home-assistant.io/integrations/jellyfin/
[jellyfin]: https://jellyfin.org
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.3.0-blue.svg
[release]: https://github.com/hassio-addons/app-jellyfin/tree/v0.3.0

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
