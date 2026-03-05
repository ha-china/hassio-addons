# 家居助手插件：Stirling-pdf

这是一个功能强大、本地托管的基于Web的PDF操作工具，使用Docker。它允许您对PDF文件执行各种操作，包括拆分、合并、转换、重新组织、添加图片、旋转、压缩等。这个本地托管的Web应用程序已经发展成为一个功能全面的集合，满足您所有的PDF需求。

Stirling PDF不会发起任何外部的调用，用于记录或追踪目的。

所有文件和PDF要么仅在客户端存在，要么仅在任务执行期间存在于服务器内存中，要么仅临时存储在文件中以便执行任务。用户下载的任何文件在此点之前都将被从服务器删除。

有点内存消耗大。

_感谢所有star我的repo的人！要star它，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用[docker镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. 将我的Hass.io插件仓库[repository]添加到您的Hass.io实例中。
1. 安装此插件。750 MB的镜像需要一些时间下载
1. 点击`保存`按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，看是否一切顺利。
1. 打开WebUI应通过<your-ip>:port工作。
1. 设置在/addon_configs/2effc9b9_stirling-pdf中。
1. 停止插件，编辑settings.yaml文件以更改所需的任何内容
## 配置

```
port : 8080 #您想要运行的端口号。
```

WebUI可以在<your-ip>:port找到。

[repository]: https://github.com/jdeath/homeassistant-addons
---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

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
