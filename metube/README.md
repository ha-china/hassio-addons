# Home assistant 附加组件：MeTube

一个带有播放列表支持的 youtube-dl Web GUI（使用 yt-dlp 分支）。允许从 YouTube 和数十个其他网站下载视频（https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md）。

_感谢所有为我仓库点赞的人！想要点赞请点击下方图片，它将会位于右上角。谢谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [docker 镜像](https://github.com/alexta69/metube)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. [将我 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 下载目录默认为 /share/metube，可以更改为 share 中的任何内容。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常运行。
1. 打开 WebUI 可以通过 ingress 或<your-ip>:port 访问。

## 配置

```
port : 8081 # 您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 处找到。

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
