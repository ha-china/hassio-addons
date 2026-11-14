# 使用 Puppeteer 为 Home Assistant 截图

轻松创建 Home Assistant 仪表板截图，并将其显示在电子墨水屏或其他任何可显示图像的屏幕上。

[![打开您的 Home Assistant 实例并显示附加组件的仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=0f1cc410_puppet&repository_url=https%3A%2F%2Fgithub.com%2Fballoob%2Fhome-assistant-addons)

![UI 截图](example/ui.png)

![UI 截图](example/device.jpg)

您需要创建一个长有效期访问令牌，并将其添加为附加组件选项。

启用看门狗选项，以便在浏览器启动失败时重启附加组件（这有时会 occurrence，目前仍在调查中）。

_这是一个原型，**不存在任何安全性**。任何人都可以访问服务器并截取任何 Home Assistant 页面的截图。_

[![显示 Home Assistant 仪表板截图的 ESPHome 设备](https://raw.githubusercontent.com/balloob/home-assistant-addons/main/puppet/example/screenshot.jpg)](./example/)

## 配置

- **access_token**: 用于与 Home Assistant 认证的有效令牌。

## 高级配置

- **home_assistant_url**: 附加组件浏览器需要截图时打开的 Home Assistant 实例的基 URL。默认为 `http://homeassistant:8123`，这是附加组件访问 Home Assistant 的内部 URL。如果您的实例已在 Home Assistant 内配置了 SSL 证书，并且需要通过不同的主机名或端口访问（例如，`http://my-ha.local:8123` 或 `https://example.duckdns.org`），则可以覆盖它。
- **keep_browser_open**: 如果为 true，则在请求之间保持 Chromium 浏览器存活。

## Web 界面

该附加组件现在包含一个基于 Web 的用户界面，可帮助您轻松配置和预览截图。您可以通过以下方式访问它：

1. 从 Home Assistant Supervisor 界面打开附加组件的 Web 界面
2. 或直接导航到 `http://homeassistant.local:10000/`

Web 界面提供：
- 交互式表单，用于配置截图参数（路径、视口大小、格式、主题等）
- 截图实时预览
- 自动生成 URL，您可以复制并在自动化或外部应用程序中使用

这特别适用于测试不同设置，并在自动化中使用 URL 之前找到最佳配置。

## 使用方法

启动附加组件将在 10000 端口上启动一个新服务器。任何请求的路径都将返回该页面的截图。您需要指定所需的视口大小。

例如，要获取默认仪表板的 1000px x 1000px 截图，请获取：

```
http://homeassistant.local:10000/home?viewport=1000x1000
```

### 电子墨水显示屏

为了减少电子墨水显示屏的颜色调色板，您可以添加 `colors` 参数。值是要使用的逗号分隔的十六进制颜色列表。例如，对于两色电子墨水显示屏（黑白）：

```
http://homeassistant.local:10000/home?viewport=1000x1000&colors=000000,FFFFFF
```

您也可以通过添加 `invert` 参数来反转颜色：

```
http://homeassistant.local:10000/home?viewport=1000x1000&colors=000000,FFFFFF&invert
```

建议使用电子墨水主题（例如 [Graphite](https://github.com/TilmanGriesel/graphite?tab=readme-ov-file#e-ink-themes)）来优化可读性。

### 设置主题

您可以通过添加 `theme` 查询参数来设置 Home Assistant 界面的主题。值应该是 Home Assistant 支持的主题名称（例如，`Graphite E-ink Light`）。

```
http://homeassistant.local:10000/home?viewport=1000x1000&theme=Graphite%20E-ink%20Light
```

**注意：** 主题更改会应用至使用该令牌的所有会话，以避免影响您的正常浏览会话（例如，电子墨水主题），请专门创建一个用于 Puppet 的独立用户帐户，并在附加组件配置中使用该用户的长有效期访问令牌。

### 完成加载检测

默认情况下，在冷启动时，服务器会在认为加载完成后额外等待 2.5 秒，以确保那些未由加载加载器跟踪的项目（如图标、图片）也能加载完毕。当浏览器激活时，它等待 750ms。您可以通过添加 `wait` 查询参数控制此等待时间。例如，等待 10 秒：

```
http://homeassistant.local:10000/home?viewport=1000x1000&wait=10000
```

您可以通过 `zoom` 查询参数控制页面的缩放级别。默认缩放级别为 1。例如，放大 1.3 倍：

```
http://homeassistant.local:10000/home?viewport=1000x1000&zoom=1.3
```

### 全屏截图

默认情况下，截图会被裁剪至视口高度。在 `viewport` 参数中将高度设置为 `auto`，可以捕获整个可滚动页面，这样即使仪表板延伸到折叠之下也能在一次性截图中完成。宽度仍然适用；高度会增长以适配内容，上限为 4000px，以防极长的页面产生失控大小的图像。

```
http://homeassistant.local:10000/home?viewport=1000xauto
```

### 输出格式

默认情况下，输出格式为 PNG。您可以通过添加 `format=jpeg`、`format=webp` 或 `format=bmp` 查询参数请求 JPEG、WebP 或 BMP 图像：

```
http://homeassistant.local:10000/home?viewport=1000x1000&format=jpeg
```

```
http://homeassistant.local:10000/home?viewport=1000x1000&format=webp
```

```
http://homeassistant.local:10000/home?viewport=1000x1000&format=bmp
```

### 旋转截图

您可以通过添加 `rotate` 查询参数来旋转截图。有效值为 90、180 和 270。

```
http://homeassistant.local:10000/home?viewport=1000x1000&rotate=90
```

### 设置语言

您可以通过添加 `lang` 查询参数来设置 Home Assistant 界面的语言。值应该是 Home Assistant 支持的语言代码（例如，`en`、`nl`、`de`、`ko`、`ja`、`zh-Hans`、`zh-Hant`）。

```
http://homeassistant.local:10000/home?viewport=1000x1000&lang=nl
```

### 设置深色模式

您可以通过添加 `dark` 查询参数来为截图启用深色模式。此参数不需要值。

```
http://homeassistant.local:10000/home?viewport=1000x1000&dark
```

### 预加载请求

为了改善后续请求的性能，您可以使用 `next` 参数提前安排浏览器导航到目标页面。提供预期的**下一个**截图请求发生的秒数。附加组件将尝试在指定的时间戳前 10 秒导航浏览器到指定路径。

```
# 示例：浏览器预热 300 秒，以便准备好截图
http://homeassistant.local:10000/home?next=300
```

提供 `next` 参数不会影响当前请求。它仅用于下一个请求。

## 在 Home Assistant 中使用图像

您可以使用模板图像实体将 Puppet 输出拉入 Home Assistant，从而使其能够出现在通知中或用于其他目的。

```
template:
  - image:
      name: 我的仪表板
      url: "http://homeassistant.local:10000/home?viewport=1000x1000"
```

## Proxmox

如果您在 Proxmox 虚拟机中运行 Home Assistant OS，请确保虚拟机的主机类型已设置为 `host`。

## 速度（或速度之慢）

该附加组件速度较慢。在 Home Assistant Green 上，冷启动时约需 10 秒。浏览器会在长达 30 秒的时间内保持激活状态。

如果请求相同页面，将尽可能快地返回截图（在 HA Green 上为 0.6s）。如果请求不同的页面，则约需 1.5 秒，因为它需要导航。

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
