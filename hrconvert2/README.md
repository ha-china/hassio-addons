# Home Assistant 附加组件：HRConvert2

- 可将 445 种不同的文件格式进行转换。
- 自托管。可安装在家用服务器上！
- 所有转换均在您的服务器本地完成。
- 对 PDF 和图像执行光学字符识别（OCR）。
- 可后台使用 ClamAV 自动扫描文件以查找病毒。
- 允许用户按需使用 ClamAV 或 [zelon88/scanCore](https://github.com/zelon88/scanCore) 扫描文件以查找病毒。
- 允许用户为文件共享生成临时链接。
- 功能极简的拖放接口。
- 每个用户都拥有独立的临时临时工作区！
- 用户可以通过在 URL 末尾附加语言代码，在 13 种语言之间切换，例如：`?language=en`
- 只要实现得当，足以用于对外公开的环境。
- 无需数据库。无需 Cookie。无需缓存文件。
- 可与其他热门软件（如 WordPress）干净地共存。
- 不进行外部连接。
- 所有 JavaScript 均本地安装。没有庞大的框架。没有分析工具。没有 Google 字体。
- 没有任何追踪功能。
- 预装了 config.php 中设置的 4 种配色方案。
- 代码库安全、高性能且紧凑，已开源多年。

图片大小为 2 GB，因此安装需要很长时间，请耐心等待。

_感谢所有为我仓库点星的人！请点击下方图片为该项目点星，它将从右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

该附加组件的安装过程相当简单，与其他任何 Hass.io 附加组件的安装相比并无不同。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此附加组件。2 GB 的镜像下载时间较长。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动附加组件。
5. 检查附加组件的日志，确认一切是否正常。
6. 通过 `<您的 IP 地址>:端口` 打开 Web UI 即可。

## 配置

```
port : 8080 #您想要运行的端口。
```

Web UI 的地址为 `<您的 IP 地址>:端口`。

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
