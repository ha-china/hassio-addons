# Home assistant 附加组件：Stirling-pdf

这是一个基于 Docker 的本地托管 Web 版 PDF 操作工具。它支持对 PDF 文件执行多种操作，包括分割、合并、转换、重新排序、添加图片、旋转、压缩等。这个本地托管的 Web 应用程序已经发展出一套全面的功能特性，满足您对 PDF 的所有需求。

Stirling PDF 不会发起任何出站调用用于记录或追踪目的。

所有文件和处理中的 PDF 均以以下三种方式之一存在：完全位于客户端、仅在任务执行期间驻留在服务器内存中，或仅临时驻留于一个文件中以确保任务执行。用户下载的任何文件在该点之前已从服务器上删除。

占用相当大内存。

_感谢大家给我的仓库星标！要星标它，请点击下方的图片，它就会被置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

此附加组件的安装相当简单，与其他任何 Hass.io 附加组件相比几乎没有区别。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例中。
1. 安装此附加组件。750 MB 的镜像下载需要一些时间。
1. 点击`保存`按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，确认一切运行顺利。
1. 通过 <your-ip>:port 打开 WebUI 即可工作。
1. 设置文件位于 /addon_configs/2effc9b9_stirling-pdf。
1. 停止附加组件，编辑 settings.yaml 文件以更改任何您需要的内容。
## 配置

```yaml
port : 8080 # 您希望运行的端口号。
```

WebUI 可在此处找到：<your-ip>:port。

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
