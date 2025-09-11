# Home assistant插件：5etools

一套基于浏览器的工具，适用于《龙与地下城5e》的玩家和地下城主。从5etools GitHub下载图像。没有图像或内容在jdeath的仓库中托管/发布。不提供支持，因为Home Assistant插件创建者不使用这个。自托管图像可能落后于5etools网站。图像是4 GB，所以安装时间会很长，请耐心等待。

_感谢大家给我的仓库加星！要加星，请点击下面的图像，它将出现在右上角。谢谢！_

[![jdeath/homeassistant-addons仓库的Star贡献者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是[docker镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

这个插件的安装非常简单，与其他任何Hass.io插件的安装方式相同。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例中。
1. 安装这个插件。4 GB的图像需要一段时间来下载
1. 点击`保存`按钮来保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. WebUI应该可以通过ingress或<your-ip>:port来访问。

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui可以在<your-ip>:port找到。

[repository]: https://github.com/jdeath/homeassistant-addons