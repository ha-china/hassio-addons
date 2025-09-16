# Home assistant插件：Livebook

Livebook是一个用于编写交互式和协作代码笔记本的Web应用程序

_感谢大家给我的仓库点赞！点击下面的图片点赞，它将出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons的Star图谱](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用的是 [docker镜像](https://github.com/livebook-dev/livebook)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例中。
1. 点击`保存`按钮来存储你的配置。
1. 启动插件。
1. 检查插件的日志来查看是否一切顺利。
1. 应该可以通过 <你的IP>:端口 在WebUI中打开。
1. 数据将位于 /addon_configs/2effc9b9_livebook
## 配置

```
port : 8080 #你想要运行的端口。
```

WebUI可以在 <你的IP>:端口 找到。

[repository]: https://github.com/jdeath/homeassistant-addons