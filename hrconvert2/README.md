# Home Assistant 扩展：HRConvert2

- 转换 445 种不同的文件格式。
- 自托管。安装在家庭服务器上！
- 所有转换都在您的服务器上本地执行。
- 对 PDF 和图像执行光学字符识别 (OCR)。
- 可以使用 ClamAV 在后台自动扫描文件病毒。
- 允许用户使用 ClamAV 或 [zelon88/scanCore](https://github.com/zelon88/scanCore) 按需扫描文件病毒。
- 允许用户生成临时链接以共享文件。
- 极简主义拖放界面。
- 每个用户都有自己的临时临时空间！
- 最终用户可以通过将语言代码添加到 URL 中切换 13 种语言，例如：`?language=en`
- 足够安全，适用于公共环境（当正确实施时）。
- 没有数据库。没有 cookies。没有缓存文件。
- 清洁地与其他流行软件（如 WordPress）安装在一起。
- 不建立外部连接。
- 所有 JS 都本地安装。没有庞大的框架。没有分析。没有 Google 字体。
- 完全没有跟踪功能。
- 配置.php 中预设了 4 种颜色方案。
- 安全、性能强大且紧凑的代码库，已开源多年。

图像大小为 2 GB，因此安装需要很长时间，请耐心等待。

_感谢所有为我仓库加星的人！要加星，请点击下面的图像，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展使用 [docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

此扩展的安装非常简单，与安装其他 Hass.io 扩展没有区别。

1. 将我的 Hass.io 扩展仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此扩展。2 GB 的镜像下载需要一段时间。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看是否一切顺利。
1. 通过 <your-ip>:port 打开 WebUI。

## 配置

```
port : 8080 #您想要运行的端口。
```

WebUI 可以在 `<your-ip>:port` 找到。

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
