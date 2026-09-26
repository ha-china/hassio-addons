# Home Assistant 社区应用：Jellyfin

[![Release][release-shield]][release] ![Project Stage][project-stage-shield] ![Project Maintenance][maintenance-shield]

[![Sponsor Frenck via GitHub Sponsors][github-sponsors-shield]][github-sponsors]

[![Support Frenck on Patreon][patreon-shield]][patreon]

专为电影、剧集和音乐设计的免费媒体系统软件。

## 关于

[Jellyfin][jellyfin] 是一个媒体服务器。只需指向包含电影、剧集和音乐的文件夹，它就能识别所有内容，收集封套、图片及描述信息，并将它们传输到您想要播放的地方：浏览器、手机、平板电脑、游戏主机或电视机。

该服务不会直接向外部“上报”信息。无需创建账户，也没有订阅或付费限制；您机器上的服务器就是全部功能。此应用将服务器部署在 Home Assistant 旁边，其库文件位于与您的其他应用共享的 `media` 文件夹中。

当设备无法直接播放文件时，可以调用 Intel 或 AMD 显卡进行转码，使用 Jellyfin 项目提供的相同补丁版本 FFmpeg。Home Assistant 自身的 [Jellyfin 集成][integration] 会将库引入媒体浏览器，并使其成为每一个从该库播放内容的媒体播放设备。

[github-sponsors-shield]: https://frenck.dev/wp-content/uploads/2019/12/github_sponsor.png
[github-sponsors]: https://github.com/sponsors/frenck
[integration]: https://www.home-assistant.io/integrations/jellyfin/
[jellyfin]: https://jellyfin.org
[maintenance-shield]: https://img.shields.io/maintenance/yes/2026.svg
[patreon-shield]: https://frenck.dev/wp-content/uploads/2019/12/patreon.png
[patreon]: https://www.patreon.com/frenck
[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[release-shield]: https://img.shields.io/badge/version-v0.2.1-blue.svg
[release]: https://github.com/hassio-addons/app-jellyfin/tree/v0.2.1

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
