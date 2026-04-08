# Home assistant 插件：Readeck

Readeck 是一个简单的 Web 应用程序，让您能够保存喜欢的网页中宝贵的可读内容，并永久保存。把它看作是一个书签管理和稍后阅读的工具。

_感谢每一位为我仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

![Stargazers 仓库名单 @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons))(https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://codeberg.org/readeck/readeck)。

## 特性

### 🔖 书签

喜欢正在阅读的页面？将链接粘贴到 Readeck 中，就完成了！

### 📸 文章、图片和视频

Readeck 为您保存网页的可读内容，以便您稍后阅读。它还可以检测页面是否为图片或视频，并相应地调整其处理过程。

### ⭐ 标签、收藏和存档

将书签移动到存档或收藏，并添加您想要的任意数量的标签。

### 🖍️ 高亮

突出显示书签中的重要内容，以便稍后轻松找到。

### 🗃️ 收藏集

如果您需要一个新的专用部分，包含过去两周所有标记为“猫”的书签，Readeck 允许您将此搜索查询保存到收藏集中，以便稍后访问。

### 🧩 浏览器扩展

想在浏览时保存一些稍后阅读的内容？无需复制粘贴链接。安装浏览器扩展，一键保存书签！

- [Mozilla Firefox 版本](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [Google Chrome 版本](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息及源代码](https://codeberg.org/readeck/browser-extension)

### 📖 电子书导出

什么比在电子阅读器上阅读收集的文章更好？您可以将任何文章导出为电子书文件（EPUB）。您甚至可以将整个收藏导出为单本书！

除此之外，如果您使用的电子阅读器支持 OPDS，您可以直接从电子阅读器访问 Readeck 的目录和收藏。

### 🔎 全文搜索

无论您需要从文章中查找模糊的文本片段，还是查找具有特定标签或来自特定网站的所有文章，我们都为您准备好了！

### 🚀 快速！

Readeck 是对所谓无聊但经过验证的技术部件的现代诠释。它保证了非常快的响应时间和流畅的用户体验。

### 🔒 为您的隐私和长期存档而构建

您喜欢的这篇文章明年还在线吗？10年后呢？可能不会；可能所有内容都消失了，文本和图像。出于这个原因，以及为了您的隐私，文本和图像在您保存链接的瞬间就被存储在您的 Readeck 实例中。

除了视频外，您的浏览器不会向任何外部网站发送请求。

## 安装

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
2. 点击 `保存` 按钮以存储您的配置。
3. 启动插件。
4. 停止插件并重新启动（这是首次启动时必要的！）
5. 检查插件的日志以查看是否一切顺利。
6. 通过 ingress 或 <your-ip>:port 打开 WebUI 应该可以工作。

## 更新

由于源代码未托管在 github 上，自动更新非常困难。如果您想要最新版本，请提交一个问题。

## 配置

```
port : 8000 #您想要运行在的端口。
```

WebUI 可以在 `<your-ip>:port` 中找到。

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
