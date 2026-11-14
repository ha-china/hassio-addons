# Home assistant add-on: IT-Tools

为开发人员和IT工作者提供的实用工具。

_感谢每一个给我的仓库点赞的人！要点赞，请点击下面的图像，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [docker 镜像](https://github.com/CorentinTh/it-tools)。

## 安装

安装这个插件相当简单，与安装任何其他Hass.io插件没有太大区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例中。
1. 安装这个插件。
1. 点击 `Save` 按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志，以确保一切正常。
1. 打开的WebUI应通过ingress或<your-ip>:port访问。

## 配置

```
port : 80 #你想要运行的端口。
```

Webui可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons