# Home assistant 附加组件：Stirling-pdf

这是一个基于 Docker 的 robust、本地托管的 Web 版 PDF 操作工具。它支持对 PDF 文件执行各种操作，包括拆分、合并、转换、重组、添加图像、旋转、压缩等。这个本地托管的 Web 应用程序已发展成为一大套功能齐全的集合，满足您所有的 PDF 需求。

Stirling PDF 不会发起任何出站调用用于记录或跟踪目的。

所有文件和对 PDF 的处理要么完全在客户端进行，要么仅在任务执行期间驻留在服务器内存中，要么仅临时存储在文件中以执行任务。用户下载的任何文件在这一点上已从服务器删除。

一大内存占用者。

_感谢大家在我的仓库中点击星标！要点击下方的图像进行星标，它就会显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [Docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

该附加组件的安装非常简单，与安装其他任何 Hass.io 附加组件没有区别。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例。
2. 安装此附加组件。750 MB 的图像下载速度较慢，请耐心等待。
3. 点击“保存”按钮以存储您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，查看一切是否正常。
6. 通过 `<your-ip>:port` 打开 WebUI 应该能正常工作。
7. 设置位于 `/addon_configs/2effc9b9_stirling-pdf`。
8. 停止附加组件，编辑 `settings.yaml` 文件以更改您需要的任何内容。

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
