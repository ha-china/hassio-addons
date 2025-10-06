# Home assistant插件：5etools

一套基于浏览器的工具，适用于《龙与地下城5e》的玩家和地下城主。发布的图片来自5etools GitHub。没有图片或内容在jdeath的仓库中托管/发布。作为Home Assistant插件创建者不使用此插件，因此不提供支持。自托管图片可能落后于5etools网站。图片大小为4 GB，因此安装时间会很长，请耐心等待。

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是[docker镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

这个插件的安装非常简单，与其他Hass.io插件的安装方式相同。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。4 GB的镜像需要一段时间来下载
1. 点击“保存”按钮来保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. WebUI应该可以通过ingress或<your-ip>:port来访问。

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui可以在<your-ip>:port找到。

[repository]: https://github.com/jdeath/homeassistant-addons