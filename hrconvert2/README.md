# Home Assistant 添加组件：HRConvert2

- 支持转换 445 种文件格式。
- 自托管。安装到家庭服务器上！
- 所有转换操作均在您的服务器上本地完成。
- 对 PDF 和图像执行光学字符识别 (OCR)。
- 可与 ClamAV 在后台自动扫描文件中的病毒。
- 允许用户使用 ClamAV 或 [zelon88/scanCore](https://github.com/zelon88/scanCore) 按需扫描文件病毒。
- 允许用户为文件共享生成临时链接。
- 极简的拖放界面。
- 每个用户拥有独立的临时临时存储空间！
- 用户可以通过在 URL 后附加语言参数来切换 13 种语言，例如：`?language=en`。
- 在正确实施的情况下，足够安全以用于面向公众的环境。
- 无数据库。无 Cookie。无缓存文件。

- 可与其他流行软件（如 WordPress）干净地共存安装。
- 不建立外部连接。
- 所有 JavaScript 均本地安装。无臃肿框架。无分析工具。无 Google Fonts。
- 没有任何追踪能力。
- 内置了 `config.php` 中的 4 种配色方案。
- 安全、高效且紧凑的代码库，多年来已开源。

图像大小为 2 GB，因此安装需要很长时间，请耐心等待。

_感谢所有为我仓库星标的朋友们！若要星标，请点击下方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此添加组件使用 [docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

该添加组件的安装非常简单，与安装任何其他 Hass.io 添加组件没有不同之处。

1. [将我的 Hass.io 添加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此添加组件。2 GB 镜像需要较长时间下载。
3. 点击 `保存` 按钮以保存配置。
4. 启动添加组件。
5. 检查添加组件的日志以确认一切是否正常。
6. 打开 WebUI，可以通过 `<您的 ip>:端口` 访问。

## 配置

```
port : 8080 #您希望运行的端口。
```

WebUI 地址为 `<您的 ip>:端口`。

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
