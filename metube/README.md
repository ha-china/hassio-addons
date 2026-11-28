# Home assistant 插件：MeTube

为 youtube-dl（使用 yt-dlp 分支）提供的 Web GUI，支持播放列表功能。允许您从 YouTube 和数十个其他网站（https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md）下载视频。

_感谢 everyone 为我项目星标！要星标它，点击下方图片，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件基于 [docker 镜像](https://github.com/alexta69/metube)。

## 安装

此插件的安装非常简单，与安装其他 Hass.io 插件并无不同。

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 下载目录默认为 /share/metube，可以更改为 share 中的任何位置。
1. 启动插件。
1. 检查插件日志以确认一切是否正常运行。
1. 打开 WebUI 应可通过 ingress 或 <your-ip>:port 访问。

## 配置

```
port : 8081 # 您想要运行的端口。
```

Webui 可在 `<your-ip>:port` 处访问。

[repository]: https://github.com/jdeath/homeassistant-addons

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
