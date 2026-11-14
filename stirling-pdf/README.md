# Home assistant add-on: Stirling-pdf

这是一个基于 Docker 的本地托管 Web 版 PDF 处理工具。它让您可以对 PDF 文件执行各种操作，包括拆分、合并、转换、重组、添加图像、旋转、压缩等。这个本地托管 Web 应用程序已经发展到包含一套全面的特性，满足您所有的 PDF 需求。

Stirling PDF 不会为记录或追踪目的发起任何出站呼叫。

所有文件和 PDF 文件要么完全存在于客户端，要么仅在任务执行期间存在于服务器内存中，要么仅在任务执行时临时存在于一个文件中。任何由用户下载的文件到了那时已经从服务器删除。

有点占用内存。

_感谢所有人星标我的仓库！要星标它，请点击下面的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

此 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 的操作基本相同。

1. [添加我的 Hass.io add-ons 仓库][repository] 到您的 Hass.io 实例中。
1. 安装此 add-on。750 MB 的镜像需要较长时间才能下载。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动 add-on。
1. 查看 add-on 的日志以确认一切正常。
1. 打开 WebUI 应通过 `<your-ip>:port` 访问。
1. 设置位于 `/addon_configs/2effc9b9_stirling-pdf`。
1. 停止 add-on，编辑 `settings.yaml` 文件以更改任何需要的设置。
## 配置

```
port : 8080 #您希望运行的端口。
```

WebUI 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
