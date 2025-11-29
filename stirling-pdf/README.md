# Home assistant插件：Stirling-pdf

这是一个基于Docker的本地托管PDF操作工具。它使您能够在PDF文件上执行各种操作，包括拆分、合并、转换、重新组织、添加图像、旋转、压缩等。这个本地托管的Web应用程序已经发展成为一个功能全面的集合，满足您所有的PDF需求。

Stirling PDF不会进行任何用于记录或跟踪目的的外出调用。

所有文件和PDF要么完全存在于客户端，要么仅在任务执行期间驻留在服务器内存中，或者暂时驻留在仅用于执行任务的文件中。用户下载的任何文件在该点之前都将从服务器中删除。

有点耗内存。

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![@jdeath/homeassistant-addons的Stargazers仓库名册](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用[docker镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
1. 安装此插件。750 MB的镜像将需要一段时间来下载
1. 点击`保存`按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 应该可以通过<your-ip>:port打开WebUI。
1. 设置将在 /addon_configs/2effc9b9_stirling-pdf 中。
1. 停止插件，编辑settings.yaml文件以更改您需要的任何内容

## 配置

```
port : 8080 #您想要运行的端口。
```

Webui可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
