# Home assistant 添加组件：Stirling-pdf

这是一个基于 Docker 的本地托管 PDF 操作工具。它使您能够在 PDF 文件上执行各种操作，包括拆分、合并、转换、重新组织、添加图像、旋转、压缩等。这个本地托管的 Web 应用程序已经发展成为包含全面功能集，满足您所有 PDF 需求。

Stirling PDF 不会进行任何用于记录或跟踪目的的外出调用。

所有文件和 PDF 要么完全存在于客户端，要么仅在任务执行期间驻留在服务器内存中，或者仅在任务执行期间临时驻留在文件中。用户下载的任何文件在该点之前都将从服务器中删除。

有点耗内存。

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，它就会出现在右上角。谢谢！_

[![@jdeath/homeassistant-addons 的 Stirling-PDF 仓库 Star 列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此添加组件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

此添加组件的安装非常简单，与安装任何其他 Hass.io 添加组件没有区别。

1. 将我的 Hass.io 添加组件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此添加组件。750 MB 的镜像需要一些时间来下载
1. 点击 `保存` 按钮以保存您的配置。
1. 启动添加组件。
1. 检查添加组件的日志，以查看是否一切顺利。
1. 应该可以通过 <your-ip>:port 打开 WebUI。
1. 设置将在 /addon_configs/2effc9b9_stirling-pdf 中。
1. 停止添加组件，编辑 settings.yaml 文件以更改任何您需要的内容
## 配置

```
port : 8080 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

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
