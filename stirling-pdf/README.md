# Home assistant add-on: Stirling-pdf

这是一个基于Docker的本地托管PDF操作工具，功能强大。它允许您对PDF文件执行各种操作，包括拆分、合并、转换、重新组织、添加图片、旋转、压缩等。这个本地托管的Web应用程序已经发展成为一个功能全面的工具集，满足您所有的PDF需求。

Stirling PDF不会为了记录或跟踪目的发起任何出站调用。

所有文件和PDF要么完全存储在客户端，要么仅在执行任务时存储在服务器内存中，或者仅为了执行任务而临时存储在一个文件中。用户下载的任何文件在该点之前都将已被从服务器中删除。

有点消耗内存。

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

这个add-on使用的是 [docker镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## Installation

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. [将我的Hass.io add-ons仓库][repository]添加到您的Hass.io实例。
1. 安装这个add-on。750 MB的镜像需要一段时间来下载
1. 点击`保存`按钮来存储您的配置。
1. 启动add-on。
1. 检查add-on的日志，看看是否一切顺利。
1. WebUI应该可以通过<your-ip>:port访问。
1. 设置将在 /addon_configs/2effc9b9_stirling-pdf 中。
1. 停止add-on，编辑settings.yaml文件来更改任何您需要的内容
## Configuration

```
port : 8080 #您想要运行的端口。
```

Webui可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons