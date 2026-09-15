# 家庭助手插件: Pairdrop

PairDrop 是一个优秀的 AirDrop 替代方案，可在所有平台上运行。

_感谢每一个给我的仓库点星的人！要点星，请点击下面的图片，然后它会在右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [docker 镜像](https://github.com/schlagmichdoch/PairDrop)。

PairDrop 是一个优秀的 AirDrop 替代方案，可在所有平台上运行。

通过点对点连接，将图像、文档或文本发送到同一局域网/Wi-Fi 中的设备或已配对的设备。由于它是基于网页的，因此可以在所有设备上运行。

您想快速将文件从手机发送到笔记本电脑吗？
您想与使用 Android 和 iOS 混合的朋友分享原始质量的照片吗？
您想在 Linux 系统之间点对点分享私密文件吗？
AirDrop 又不可靠了吗？
用 PairDrop 发送吧！

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 打开 WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。

## 配置

```
port : 3000 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons