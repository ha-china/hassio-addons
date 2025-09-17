# Home assistant插件：Memos

一个注重隐私的轻量级笔记服务。轻松捕捉和分享你的精彩想法。

从 Docker 镜像运行：https://github.com/usememos/memos


_感谢大家给我的仓库加星！要加星请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons的仓库加星者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

这个插件的安装非常直接，与其他任何 Hass.io 插件的安装方式相同。

1. [将我的 Hass.io 插件仓库][repository]添加到你的 Hass.io 实例。
1. 安装这个插件。
1. 点击“保存”按钮以存储你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。
1. 设置将存储在 /addons-config/2effc9b9_memos

## 配置

```
port : 5230 #你想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons