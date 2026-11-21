# Home assistant 插件：HRConvert2

- 支持转换 445 种文件格式。
- 自行托管。可在家庭服务器上安装！
- 所有转换都在您的服务器本地执行。
- 对 PDF 和图片执行光学字符识别（OCR）。
- 可使用 ClamAV 在后台自动扫描文件病毒。
- 允许用户使用 ClamAV 或 [zelon88/scanCore](https://github.com/zelon88/scanCore) 按需扫描文件病毒。
- 允许用户生成临时链接以共享文件。
- 极简主义的拖放界面。
- 每个用户拥有独立的临时临时空间！
- 用户可通过在 URL 中追加语言代码切换到 13 种语言，例如：`?language=en`。
- 若实施得当，即可在面向公众的环境中安全使用。
- 无数据库。无 Cookie。无缓存文件。
- 可与其他流行软件（如 WordPress）干净共存。
- 不建立外部连接。
- 所有 JavaScript 均在本地安装。无臃肿框架。无分析功能。无 Google 字体。
- 无任何跟踪功能。
- 包含 `config.php` 中配置的 4 种色调方案。
- 代码库安全、高性能且紧凑，且已开源多年。

图片大小高达 2 GB，因此安装时间较长，请耐心等待。

_感谢所有在我仓库上星标的朋友们！如需星标，请点击下方图片，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [Docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

该插件的安装非常简单，与其他任何 Hass.io 插件的安装方式基本一致。

1. [将我添加的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。2 GB 的镜像需要较长时间下载。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志以确认一切是否成功。
1. 通过 `<your-ip>:port` 访问 Web 界面，应能正常工作。

## 配置

```
port : 8080 # 您希望运行的端口。
```

Web 界面位于 `<your-ip>:port`。

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
