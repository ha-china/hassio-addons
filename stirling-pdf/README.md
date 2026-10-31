# Home Assistant 附加组件：Stirling-pdf

这是一个基于 Docker 的本地托管的 Web 式 PDF 操作工具。它 enables 您执行对各种 PDF 文件的各种操作，包括拆分、合并、转换、重组、添加图像、旋转、压缩等。这个本地托管的 Web 应用程序已发展出涵盖广泛特性的功能集，满足您所有的 PDF 需求。

Stirling PDF 不会发起任何用于记录或跟踪的出站调用。

所有文件存在于客户端，或仅在任务执行期间存在服务器内存中，或临时存在于文件中仅用于执行任务。用户下载的任何文件在当点已从服务器删除。

一个有点吃内存的家伙。

_感谢所有为我仓库星标的人！要星标它，请点击下面的图像，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/Stirling-Tools/Stirling-PDF)。

## 安装

此附加组件的安装非常 straightforward，与安装任何其他 Hass.io 附加组件没有不同。

1. [将我添加我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此附加组件。750 MB 图像需要花费一些时间来下载。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件日志，看看一切是否顺利。
1. 通过 `<your-ip>`:<port> 打开 WebUI 应该可以工作。
1. 设置位于 /addon_configs/2effc9b9_stirling-pdf。
1. 停止附加组件，编辑 settings.yaml 文件以更改您需要的任何内容。

## 配置

```
port : 8080 # 您想要运行的端口。
```

Web UI 可以位于 `<your-ip>:port`。

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
