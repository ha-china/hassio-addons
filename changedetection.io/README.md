# Home Assistant 扩展：changedetection.io

我在业余时间维护这个和其他 Home Assistant 扩展：跟进上游变更、Home Assistant 变更以及在实际硬件上的测试都需要花费很多时间（以及一些金钱）。我经常使用我超过 110 个扩展中的 5-10 个，所以我安装了测试机器（并购买了一些我自己不使用的测试服务，例如 vpn）来调试和改进扩展。

如果这个扩展为您节省了时间或使您的设置更加简单，我会非常感激您的支持！

[![买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![入站](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位给我仓库点星的人！要点星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers 仓库名单 @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## 关于

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费、开源的网页监控、通知和变更检测。

此扩展基于 [docker 镜像](https://github.com/linuxserver/docker-changedetection.io) 来自 linuxserver.io。

## 配置

使用扩展的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 主要应用

Web UI 可以在 `<your-ip>:5000` 找到，也可以通过扩展页面或使用入站从侧边栏访问。

#### 侧边栏快捷方式

您可以通过以下步骤添加指向您的 Changedetection.io 实例的快捷方式：
1. 前往 <kbd>⚙ 设置</kbd> > <kbd>仪表板</kbd>
2. 在右下角点击 <kbd>➕ 添加仪表板</kbd>
3. 选择 <kbd>Webpage</kbd> 选项，并将从扩展页面获得的 Web UI URL 粘贴进去。
4. 填写侧边栏项目的标题，一个图标（建议：`mdi:vector-difference`），以及该面板的 **相对 URL**（例如 `change-detection`）。最后确认。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `BASE_URL` | str | | 运行在反向代理后面的完整 URL |
| `PLAYWRIGHT_DRIVER_URL` | str | | Playwright 驱动 WebSocket URL |
| `TIMEOUT` | int | `60000` | 请求超时时间（毫秒） |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
BASE_URL: "https://changedetection.mydomain.com"
PLAYWRIGHT_DRIVER_URL: "ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"
TIMEOUT: 60000
```

### 连接到 browserless Chrome（由 @RhysMcW 提供）

安装并启动 Browserless Chrome 扩展，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。此选项必须填写为 Browserless Chrome URL：`"ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"`

`db21ed7f-browserless-chrome` 主机名在 UI 中显示，在 Browserless Chromium 扩展页面：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重新启动 Changedetection.io 扩展 - 之后您就可以使用 Changedetection.io 中的浏览器选项了。

## 安装

此扩展的安装相当简单，与安装任何其他 Hass.io 扩展没有区别。

1. 将我的扩展存储库添加到您的 Home Assistant 实例中（在 supervisor 扩展存储库的右上角，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加扩展存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
2. 点击 `保存` 按钮以存储您的配置。
3. 启动扩展。
4. 检查扩展的日志以查看是否一切顺利。
5. 仔细配置扩展以满足您的偏好，有关详细信息，请参阅官方文档。
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
