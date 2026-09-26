# Home assistant 插件: Earthwalker

Earthwalker 是一款与 [GeoGuessr](https://geoguessr.com) 概念相似的游戏。
你会被放置在Google街景中的某个地方，目标是找出你在哪里，并比你的朋友们更精确地猜测你的定位。你可以与时间赛跑，将游戏限制在某个区域，以及更多功能。

_感谢所有为我的仓库点赞的朋友们！要为它点赞，请点击下面的图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://gitlab.com/glatteis/earthwalker)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 WebUI 应该可以通过 `<your-ip>:port` 访问。

## 非 AMD
我发布了一个版本，如果你没有 AMD64，可以在本地编译。请查看这里: https://github.com/jdeath/homeassistant-addons/issues/37

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons