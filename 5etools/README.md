# Home assistant add-on: 5etools

一套基于浏览器的工具，适用于《龙与地下城5e》的玩家和地下城主。发布的图片来自5etools GitHub。没有图片或内容在jdeath的仓库中托管/发布。由于Home Assistant插件创建者不使用此工具，因此不提供支持。自托管图片可能落后于5etools网站。图片是4 GB，因此安装时间会很长，请耐心等待。

_感谢大家给我的仓库添加了星标！要添加星标，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是 [docker镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。4 GB的镜像会需要一段时间来下载
1. 点击`保存`按钮来存储你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. WebUI应该可以通过ingress或<your-ip>:port来访问。

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui可以在<your-ip>:port找到。

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
