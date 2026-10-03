# Home assistant 附加组件：Stirling-pdf

这是一个使用 Docker 托管的、功能稳健的本地 Web 基于 PDF 操作工具。它 enables 用户对 PDF 文件执行各种操作，包括拆分、合并、转换、重组、添加图片、旋转、压缩等。这款本地托管的 Web 应用程序已演变为一套功能全面的功能集，满足您对 PDF 的所有需求。

Stirling PDF 不会出于记录或跟踪目的发起任何出站呼叫。

所有文件（PDF）要么仅存在于客户端，要么在任务执行期间仅驻留在服务器内存中，要么仅为执行任务而暂时驻留于一个文件中。任何用户下载的文件在当时已经被从服务器删除。

有点占用内存。

_感谢 everyone 给我的仓库点了星标！想要给它点个星的话，点击下面的图片，然后它就会被放在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

该附加组件的安装非常直接，与其他 Hass.io 附加组件的安装没有不同。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 安装此附加组件。750 MB 的镜像下载会比较慢。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利。
1. 通过 `<your-ip>:port` 打开 WebUI。
1. 设置位于 `/addon_configs/2effc9b9_stirling-pdf`。
1. 停止附加组件，编辑 `settings.yaml` 文件以更改您需要的任何内容。
## 配置

```
port : 8080 # 您想运行的端口。
```

WebUI 位于 `<your-ip>:port`。

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
