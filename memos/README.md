# Home assistant插件：Memos

一个注重隐私、轻量级的笔记服务。轻松捕捉和分享你的精彩想法。

运行Docker镜像来源：https://github.com/usememos/memos


_感谢大家给我的仓库加星！要加星，请点击下面的图片，它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons仓库的Star贡献者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件的方式相同。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例中。
1. 安装这个插件。
1. 点击`保存`按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. WebUI应该可以通过ingress或<your-ip>:port访问。
1. 设置将保存在 /addons-config/2effc9b9_memos

## 配置

```
port : 5230 #你想要运行的端口。
```

Webui可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons