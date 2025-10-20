# Home assistant插件：tasmocompiler
TasmoCompiler是一个简单的网页GUI，允许您使用自己的设置编译出色的Tasmota固件

_感谢大家给我的仓库加星！要加星，请点击下面的图片，它就会出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons仓库的Starred贡献者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于[docker镜像](https://hub.docker.com/r/benzino77/tasmocompiler) 

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. 将我的Hass.io插件仓库[repository]添加到您的Hass.io实例中。
1. 安装这个插件。
1. 点击`保存`按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 前往本地IP:端口。出于某种原因，Ingress不起作用
1. 咨询官方文档以获取设置支持：https://github.com/benzino77/tasmocompiler
## 配置

```
port: 3000 # 您希望在前端上运行的端口
```

Webui可以在`<your-ip>:port`找到。

[repository]: https://github.com/jdeath/homeassistant-addons