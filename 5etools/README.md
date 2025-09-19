# Home assistant add-on: 5etools

一套基于浏览器的工具，适用于D&D 5e的玩家和DM。从5etools GitHub上发布的图片。没有图片或内容在jdeath的仓库中托管/发布。不提供支持，因为Home Assistant Addon创建者不使用这个。自托管图片可能比5etools网站上的版本落后一个修订版。图片是4 GB，所以安装会花费很长时间，请耐心等待。

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是[docker镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

这个插件的安装非常简单，与其他任何Hass.io插件的安装方式相同。

1. 将我的Hass.io插件仓库[repository]添加到你的Hass.io实例中。
1. 安装这个插件。4 GB的镜像下载会花费一些时间
1. 点击`保存`按钮来保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 应该可以通过ingress或<你的IP>:端口打开WebUI。

## 配置

```
port : 8080 #你想运行的端口。
```

Webui可以在<你的IP>:端口找到。

[repository]: https://github.com/jdeath/homeassistant-addons