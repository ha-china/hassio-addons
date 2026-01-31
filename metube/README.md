# Home Assistant 插件：MeTube

用于 youtube-dl 的 Web 界面（使用 yt-dlp 分支）并支持播放列表。允许您从 YouTube 以及几十个其他网站下载视频 (https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)。

_感谢所有给我的仓库点星的人！要给它点星，请点击下面的图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [Docker 镜像](https://github.com/alexta69/metube) 构建。

## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装过程并无二致。

1. 将我的 Hass.io 插件仓库添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 下载目录默认为 `/share/metube`，可以更改为 share 中的任意路径。
1. 启动此插件。
1. 检查插件的日志，查看一切是否正常。
1. 打开 WebUI，应能通过 ingress 或 `<您的IP>:端口` 访问。

## 配置

```text
port : 8081 # 运行端口。
```

WebUI 可以通过 `<您的IP>:端口` 访问。

[repository]: https://github.com/jdeath/homeassistant-addons
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
