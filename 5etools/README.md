# Home assistant add-on: 5etools

一套基于浏览器的工具，供D&D 5e的玩家和地下城主使用。从5etools GitHub下载图像。没有图像或内容在jdeath的仓库中托管/发布。不提供支持，因为Home Assistant Addon创建者不使用这个。自托管图像可能比5etools网站晚一个版本。图像是4 GB，所以安装需要很长时间，请耐心等待。

_感谢所有给我仓库点赞的人！要点赞，请点击下面的图像，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是 [docker镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. 将我的Hass.io插件仓库[repository]添加到你的Hass.io实例中。
1. 安装这个插件。4 GB的图像需要一段时间来下载
1. 点击`保存`按钮来保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看一切是否正常。
1. WebUI应该可以通过ingress或<your-ip>:port访问。

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
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
