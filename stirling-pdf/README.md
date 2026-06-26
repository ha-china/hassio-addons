# Home assistant 插件：Stirling-pdf

这是一个功能强大、本地托管的基于 Web 的 PDF 操作工具，使用 Docker 构建。它允许您对 PDF 文件执行各种操作，包括拆分、合并、转换、重新排列、添加图片、旋转、压缩等。这个本地托管的 Web 应用已经发展成为一个功能全面的应用程序，满足您所有的 PDF 需求。

Stirling PDF 不会出于记录或跟踪目的发起任何出站调用。

所有文件和 PDF 文件要么完全位于客户端，要么仅在任务执行期间存在于服务器内存中，或者仅临时存储在文件中以执行任务。任何用户下载的文件在此时将已被从服务器删除。

有点占用内存。

_感谢 everyone 为我的仓库 star！要 star 它，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

安装此插件非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。750 MB 镜像的下载可能需要一段时间。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，以查看是否一切顺利。
1. 通过 <your-ip>:port 打开 WebUI。
1. 设置位于 /addon_configs/2effc9b9_stirling-pdf。
1. 停止插件，编辑 settings.yaml 文件以更改所需的任何内容

## 配置

```
port : 8080 # 想要运行的端口号。
```

WebUI 可在 <your-ip>:port 找到。

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
