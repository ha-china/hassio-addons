# Home assistant 插件：速度测试

一个自托管的、轻量级的速度测试，采用 JavaScript 实现，基于 Web Workers 和 XMLHttpRequest。

_感谢所有关注我库的人！要关注它，请点击下面的图片，然后它会在右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [docker 镜像](https://hub.docker.com/r/e7db/speedtest)。一个自托管的、轻量级的速度测试，采用 JavaScript 实现。

## 安装

该插件的安装非常简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以存储配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 如果使用反向代理，打开 WebUI 将无法使用，请访问本地 homeassistant 的 IP:port 管理端口。
1. 请参考官方文档以获取设置支持：https://hub.docker.com/r/e7db/speedtest

## 配置

```
port: 89 # 你想要运行前端的端口
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons