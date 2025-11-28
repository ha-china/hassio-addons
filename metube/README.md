# Home assistant add-on: MeTube

一个用于youtube-dl（使用yt-dlp分支）的Web界面，支持播放列表。它允许您从YouTube和其他几十个网站（https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md）下载视频。

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于[docker镜像](https://github.com/alexta69/metube)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有什么不同。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例中。
1. 安装这个插件。
1. 点击`保存`按钮以保存您的配置。
1. 下载目录默认为/share/metube，可以在share中更改为任何内容。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开WebUI应该可以通过ingress或<your-ip>:port来访问。

## 配置

```
port : 8081 #您想要运行的端口。
```

Webui可以在`<your-ip>:port`找到。

[repository]: https://github.com/jdeath/homeassistant-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
