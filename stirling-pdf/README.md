# Home assistant add-on: Stirling-pdf

这是一个基于 Docker 的 robust（健壮的）、本地托管的网络版 PDF 操作工具。它使您可以对 PDF 文件执行各种操作，包括拆分、合并、转换、重组、添加图像、旋转、压缩等。这个本地托管的 Web 应用程序已发展到涵盖一组全面的功能，满足您的所有 PDF 需求。

Stirling PDF 不会发起任何用于记录或跟踪的外部调用。

所有文件和 PDF 要么仅存在于客户端，要么仅在任务执行期间驻留于服务器内存中，要么仅在任务执行时临时驻留于文件中。用户可以下载的任何文件在此时都已被从服务器删除。

内存占用较高。

_谢谢每一位星标我的仓库！要星标它，请点击下方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https:reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于本插件

此插件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

本插件的安装过程非常直接，与其他任何 Hass.io 插件的安装方式并无不同。

1. 将我的 [Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。750 MB 的镜像下载需要一些时间。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志，确认一切是否正常运行。
1. Web UI 可以通过 `<your-ip>:port` 访问。
1. 设置文件位于 `/addon_configs/2effc9b9_stirling-pdf`。
1. 停止插件，编辑 `settings.yaml` 文件以更改任何需要的设置。

## 配置

```yaml
port : 8080 # 您想要运行此服务的端口。
```

Web UI 位于 `<your-ip>:port`。

[repository]: https://github.com/jdeath/homeassistant-addons
```

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
