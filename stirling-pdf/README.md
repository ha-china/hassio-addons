# Home assistant 插件：Stirling-pdf

这是一个基于 Docker 的健壮、本地托管的基于 Web 的 PDF 处理工具。它允许您对 PDF 文件执行各种操作，包括拆分、合并、转换、重组、添加图片、旋转、压缩等。这个本地托管的 Web 应用程序已经发展成为一个功能齐全的套件，涵盖了您所有的 PDF 需求。

Stirling PDF 不会发起任何用于记录或追踪目的的外接调用。

所有文件和 PDF 要么完全在客户端上存在，要么仅在任务执行期间驻留在服务器内存中，要么仅用于任务执行临时驻留在文件中。用户下载的任何文件到那时都已经从服务器中删除。

有点占用内存。

_谢谢所有给我 repo 点赞的人！要点赞请点击下面的图片，它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装方式没有不同。

1.  [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例。
1. 安装此插件。750 MB 的镜像将花费一些时间来下载
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 WebUI 可以通过 <your-ip>:port 访问。
1. 设置位于 /addon_configs/2effc9b9_stirling-pdf
1. 停止插件，编辑 settings.yaml 文件以更改任何您需要的内容
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

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
