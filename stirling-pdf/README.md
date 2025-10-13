# Home assistant插件：Stirling-pdf

这是一个基于Docker的本地托管PDF操作工具，功能强大。它允许你对PDF文件进行各种操作，包括拆分、合并、转换、重新组织、添加图片、旋转、压缩等。这个本地托管的Web应用程序已经发展成为一个功能全面的工具集，满足你所有的PDF需求。

Stirling PDF不会进行任何用于记录或跟踪目的的外出调用。

所有文件和PDF要么完全存在于客户端，要么仅在执行任务时驻留在服务器内存中，或者仅为了执行任务而临时驻留在文件中。用户下载的任何文件在那个时间点都将已被从服务器中删除。

有点消耗内存。

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用了[docker镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。750 MB的镜像需要一段时间来下载
1. 点击`保存`按钮来保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. WebUI应该可以通过<你的IP>:端口访问。
1. 设置将在 /addon_configs/2effc9b9_stirling-pdf 中。
1. 停止插件，编辑settings.yaml文件来更改任何你需要的内容
## 配置

```
port : 8080 #你想运行的端口。
```

Webui可以在 `<你的IP>:端口` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons