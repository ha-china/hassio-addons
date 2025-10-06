# 使用 Puppeteer 截图 Home Assistant

使用 Puppeteer 轻松为你的 Home Assistant 仪表盘创建截图。你可以将这些截图用于墨水屏或任何可以显示图片的屏幕。

**这是一个经过轻微修改的版本，支持中文字符。**

[![打开你的 Home Assistant 实例并显示此插件的仪表盘。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=0f1cc410_puppet&repository_url=https%3A%2F%2Fgithub.com%2Fballoob%2Fhome-assistant-addons)

你需要创建一个长期有效的访问令牌，并将其作为插件选项添加。

_这是一个原型版本，没有任何安全措施。任何人都可以访问服务器并对任意 Home Assistant 页面进行截图。_

[![ESPHome 设备显示 Home Assistant 仪表盘截图](https://raw.githubusercontent.com/balloob/home-assistant-addons/main/puppet/example/screenshot.jpg)](./example/)

## 使用方法

启动插件后，会在 10000 端口启动一个新服务器。你请求的任何路径都会返回该页面的截图。你需要指定你想要的视口（viewport）大小。

例如，要获取默认仪表盘 1000px x 1000px 的截图，可以请求：

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000
```

### 电子墨水屏（e-ink）显示

为了减少电子墨水屏的色彩数量，可以添加 `eink` 参数。该参数的值表示要使用的颜色数量（包括黑色）。例如，对于双色电子墨水屏，可以这样设置：

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2
```

如果你使用 `eink=2`，还可以通过添加 `invert` 参数来反转颜色：

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&eink=2&invert
```

建议使用类似 [Graphite](https://github.com/TilmanGriesel/graphite?tab=readme-ov-file#e-ink-themes) 这样的电子墨水主题，以优化可读性。

### 设置主题

你可以通过添加 `theme` 查询参数来设置截图时 Home Assistant 界面的主题。该参数的值应为 Home Assistant 支持的主题名称（例如 `default`、`my-custom-theme`）。

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&theme=my-custom-theme
```

### 完成加载检测

默认情况下，在冷启动时，服务器会在页面加载完成后额外等待 2.5 秒，以便让那些加载指示器无法追踪的内容（如图标、图片等）也能加载完成。当浏览器处于活跃状态时，等待时间为 750 毫秒。你可以通过添加 `wait` 查询参数来控制这个等待时间。例如，等待 10 秒：

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&wait=10000
```

你可以通过添加 `zoom` 查询参数来控制页面的缩放级别。默认缩放级别为 1。例如，要放大到 1.3 倍：

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&zoom=1.3
```

### 输出格式

默认情况下，输出格式为 PNG。你可以通过添加 `format=jpeg`、`format=webp` 或 `format=bmp` 查询参数，来请求 JPEG、WebP 或 BMP 格式的图片：

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&format=jpeg
```

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&format=webp
```

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&format=bmp
```

**注意：** 如果指定了 `eink` 参数，输出格式仅支持 BMP 和 PNG。

### 旋转截图

你可以通过添加 `rotate` 查询参数来旋转截图。有效的取值为 90、180 和 270。

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&rotate=90
```

### 设置语言

你可以通过添加 `lang` 查询参数来设置截图时 Home Assistant 界面的语言。该参数的值应为 Home Assistant 支持的语言代码（例如 `en`、`nl`、`de`、`zh-cn`）。

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&lang=nl
```

### 设置深色模式

你可以通过添加 `dark` 查询参数来为截图启用深色模式。该参数无需指定值。

```
http://homeassistant.local:10000/lovelace/0?viewport=1000x1000&dark
```

### 预加载请求

为了提升后续请求的性能，你可以通过添加 `next` 参数，提前让浏览器预先导航到目标页面。`next` 参数的值为你预计*下次*截图请求发生的秒数。插件会尝试在该时间点前 10 秒，将浏览器导航到指定路径，以便提前做好准备。

```
# 示例：浏览器将预热，以便在 300 秒后可以立即截图。
http://homeassistant.local:10000/lovelace/0?next=300
```

提供 `next` 参数不会影响当前的请求。它只会用于下一次请求。

## 速度（或缺乏速度）

该插件的速度较慢。在 Home Assistant Green 上，冷启动时大约需要 10 秒。浏览器会保持存活最多 30 秒。

如果请求的是同一个页面，截图会尽可能快地返回（在 HA Green 上约为 0.6 秒）。如果请求的是不同的页面，由于需要导航，耗时约为 1.5 秒。
