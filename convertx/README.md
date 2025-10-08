# Home assistant插件：ConvertX

一个自托管的在线文件转换器。支持831种不同的格式。使用TypeScript、Bun和Elysia编写

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons仓库的Star列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用了[docker镜像](https://github.com/C4illin/ConvertX)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. 将我的Hass.io插件仓库[repository]添加到你的Hass.io实例。
1. 安装这个插件。2 GB的镜像需要一段时间来下载
1. 点击`保存`按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 应该可以通过ingress或<your-ip>:port打开WebUI。
1. 数据将在 /addon_configs/2effc9b9_convertx

## 配置

```
port : 3000 #你想要运行的端口。
```

Webui可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons