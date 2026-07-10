# 使用Puppeteer截图Home Assistant

轻松创建Home Assistant仪表板的截图。让您可以将它们放在电子墨水屏幕或任何其他可以显示图像的屏幕上。

![打开您的Home Assistant实例并显示一个插件的仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)(https://my.home-assistant.io/redirect/supervisor_addon/?addon=0f1cc410_puppet&repository_url=https%3A%2F%2Fgithub.com%2Fballoob%2Fhome-assistant-addons)

![UI截图](example/ui.png)

![UI截图](example/device.jpg)

您需要创建一个长期有效的访问令牌并将其添加为插件选项。

启用看门狗选项，以便在浏览器无法启动时（有时会发生，仍在调查中）重新启动插件。

_这是一个原型，没有任何安全性。任何人都可以访问服务器并截图任何Home Assistant页面。_

![ESPHome设备显示Home Assistant仪表板的截图](https://raw.githubusercontent.com/balloob/home-assistant-addons/main/puppet/example/screenshot.jpg)(./example/)

## 配置

- access_token: 用于对Home Assistant进行身份验证的长期有效访问令牌。

## 高级配置

- home_assistant_url: 插件浏览器在截图时打开的Home Assistant实例的基础URL。默认为`http://homeassistant:8123`，这是插件可以到达Home Assistant的内部URL。如果您的实例在Home Assistant内部配置了SSL证书并需要通过不同的主机名或端口访问（例如，http://my-ha.local:8123或https://example.duckdns.org），则可以覆盖它。
- keep_browser_open: 如果为true，则在请求之间保持Chromium浏览器运行。

## 网页UI

该插件现在包括一个基于网页的用户界面，以帮助您轻松配置和预览截图。您可以通过以下方式访问它：

1. 从Home Assistant Supervisor界面打开插件的Web UI
2. 或者直接导航到`http://homeassistant.local:10000/`

Web UI提供：
- 交互式表单以配置截图参数（路径、视口大小、格式、主题等）
- 截图的实时预览
- 自动生成的URL，您可以将它复制并用于您的自动化或外部应用程序

这对于测试不同的设置并在使用自动化中的URL之前找到完美的配置非常有用。

## 使用方法

启动插件将在端口10000上启动一个新的服务器。您请求的任何路径都将返回该页面的截图。您需要指定所需的视口大小。

例如，要获取默认仪表板的1000px x 1000px截图，请获取：

```
http://homeassistant.local:10000/home?viewport=1000x1000
```

### 电子墨水显示屏

为了减少电子墨水显示屏的颜色调色板，您可以添加`colors`参数。值是逗号分隔的十六进制颜色列表，用于使用。例如，对于2色电子墨水显示屏（黑色和白色）：

```
http://homeassistant.local:10000/home?viewport=1000x1000&colors=000000,FFFFFF
```

您还可以通过添加`invert`参数来反转颜色：

```
http://homeassistant.local:10000/home?viewport=1000x1000&colors=000000,FFFFFF&invert
```

建议使用类似[Graphite](https://github.com/TilmanGriesel/graphite?tab=readme-ov-file#e-ink-themes)的电子墨水主题来优化可读性。

### 设置主题

您可以通过添加`theme`查询参数来设置截图的Home Assistant界面主题。值应该是Home Assistant支持的主题名称（例如，`Graphite E-ink Light`）。

```
http://homeassistant.local:10000/home?viewport=1000x1000&theme=Graphite%20E-ink%20Light
```

**注意：**主题更改适用于使用该令牌的所有用户的会话。为了避免截图主题（例如，电子墨水主题）影响您的正常浏览会话，请创建一个专门用于Puppet的用户帐户，并在插件配置中使用该用户的长生命访问令牌。

### 完成加载检测

默认情况下，在冷启动时，服务器将在认为加载完成后等待2.5秒，以给未由加载旋转器跟踪的内容加载时间（例如图标、图片）。当浏览器处于活动状态时，它等待750ms。您可以通过添加`wait`查询参数来控制此等待时间。例如，要等待10秒：

```
http://homeassistant.local:10000/home?viewport=1000x1000&wait=10000
```

您可以通过添加`zoom`查询参数来控制页面的缩放级别。默认缩放级别为1。例如，要放大1.3倍：

```
http://homeassistant.local:10000/home?viewport=1000x1000&zoom=1.3
```

### 全页

默认情况下，截图裁剪到视口高度。将`viewport`参数中的高度设置为`auto`以捕获整个可滚动页面，因此可以一次捕获延伸到页面底部的仪表板。宽度仍然适用；高度会增长以适应内容，最大为4000px，因此非常长的页面不会产生无限大的图像。

```
http://homeassistant.local:10000/home?viewport=1000xauto
```

### 输出格式

默认输出格式为PNG。您可以通过添加`format=jpeg`、`format=webp`、`format=bmp`查询参数来请求JPEG、WebP或BMP图像：

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

您可以通过添加`rotate`查询参数来旋转截图。有效值为90、180和270。

```
http://homeassistant.local:10000/home?viewport=1000x1000&rotate=90
```

### 设置语言

您可以通过添加`lang`查询参数来设置截图的Home Assistant界面语言。值应该是Home Assistant支持的语言代码（例如，`en`、`nl`、`de`、`ko`、`ja`、`zh-Hans`、`zh-Hant`）。

```
http://homeassistant.local:10000/home?viewport=1000x1000&lang=nl
```

### 设置深色模式

您可以通过添加`dark`查询参数来为截图启用深色模式。此参数不需要值。

```
http://homeassistant.local:10000/home?viewport=1000x1000&dark
```

### 预加载请求

为了提高后续请求的性能，您可以使用`next`参数来安排浏览器在预期下一次截图请求发生之前提前导航到所需页面。提供您期望*下一次*截图请求发生的秒数。插件将尝试在指定时间戳10秒*之前*将浏览器导航到指定的路径。

```
# 示例如何让浏览器在300秒后预热，以便准备截图
# 在300秒后获取截图。
http://homeassistant.local:10000/home?next=300
```

提供`next`参数不会影响当前请求。它只会用于下一次请求。

## 在Home Assistant中使用图像

您可以使用模板图像实体将Puppet的输出拉入Home Assistant，使其能够将其发送到通知或用于其他目的。

```
template:
  - image:
      name: 我的仪表板
      url: "http://homeassistant.local:10000/home?viewport=1000x1000"
```

## Proxmox

如果您在Proxmox虚拟机下运行Home Assistant OS，请确保您的虚拟机的宿主类型设置为`host`。

## 速度（或缺乏速度）

此插件速度较慢。在Home Assistant Green上，在冷启动时需要大约10秒。浏览器可以保持活跃长达30秒。

如果请求相同的页面，则截图会尽可能快地返回（在HA Green上为0.6秒）。如果请求不同的页面，则需要大约1.5秒，因为需要导航。
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
