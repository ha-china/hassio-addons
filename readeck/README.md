# Home Assistant 插件：Readeck

Readeck 是一个简单的网络应用程序，允许您保存您喜欢的网页中宝贵的可读内容，并希望永远保存。将其视为书签管理器和阅读稍后工具。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它将显示在右上角。谢谢！_

![为 @jdeath/homeassistant-addons 仓库点赞的星标列表](https://reporoster.com/stars/jdeath/homeassistant-addons)(https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://codeberg.org/readeck/readeck)。

## 功能

### 🔖 书签

喜欢正在阅读的页面？将链接粘贴到 Readeck 中，就完成了！

### 📸 文章、图片和视频

Readeck 为您保存网页的可读内容，以便您稍后阅读。它还会检测页面是否为图片或视频，并相应地调整其处理过程。

### ⭐ 标签、收藏、存档

将书签移动到存档或收藏中，并添加尽可能多的标签。

### 🖍️ 高亮

突出显示您书签中的重要内容，以便稍后轻松找到。

### 🗃️ 收藏夹

如果您需要一个专门的区域，其中包含过去两周内带有“猫”标签的所有书签，Readeck 允许您将此搜索查询保存到收藏夹中，以便稍后访问。

### 🧩 浏览器扩展

在浏览时想要保存一些稍后阅读的内容？无需复制粘贴链接。安装浏览器扩展，一键保存书签！

- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/readeck/)
- [Google Chrome](https://chromewebstore.google.com/detail/readeck/jnmcpmfimecibicbojhopfkcbmkafhee)
- [更多信息及源代码](https://codeberg.org/readeck/browser-extension)

### 📖 电子书导出

在电子阅读器上阅读您收集的文章不是最好吗？您可以将任何文章导出为电子书文件（EPUB）。您甚至可以将整个收藏夹导出为单本书！

除此之外，如果您的电子阅读器支持 OPDS，您可以直接从电子阅读器访问 Readeck 的目录和收藏夹。

### 🔎 全文搜索

无论您需要从文章中找到模糊的文本片段，还是找到具有特定标签或来自特定网站的所有文章，我们都为您提供了解决方案！

### 🚀 快速！

Readeck 是对所谓的无聊但经过验证的技术的一种现代诠释。它保证了非常快速的反应时间和流畅的用户体验。

### 🔒 为您的隐私和长期存档而构建

您喜欢的这篇文章明年还会在线吗？10年后呢？可能不会；可能一切都会消失，文本和图片。出于这个原因，以及为了您的隐私，文本和图片在您保存链接的那一刻就会存储在您的 Readeck 实例中。

除了视频之外，您的浏览器不会向任何外部网站发送请求。

## 安装

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
2. 点击 `保存` 按钮以存储您的配置。
3. 启动插件。
4. 停止插件并再次启动（这是第一次启动时必须进行的两次启动！）
5. 检查插件的日志以查看是否一切顺利。
6. 打开 WebUI 应该可以通过入口或 <your-ip>:port 访问。

## 更新

由于源代码不在 github 上托管，因此很难自动更新。如果您想要最新版本，请提交一个问题。

## 配置

```
port : 8000 #您想要运行的端口号。
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
