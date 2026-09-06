# Home assistant 插件：Convos

Convos 是一个在浏览器中运行的 IRC 客户端，将 IRC 体验带入 21 世纪。

_感谢所有给我的代码库加星的人！要加星，请点击下面的图片，然后它会在右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://github.com/convos-chat/convos/)。

## 安装

该插件的安装非常简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件代码库][repository]添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 打开的 WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。
1. 设置将存储在 /addons-config/2effc9b9_convos。

## 配置

```
port : 3000 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons