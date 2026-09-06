# Home assistant 插件：changedetection.io

我在业余时间维护这些及其他 Home Assistant 插件：跟踪上游变更、适配 HA 变更以及在实际硬件上进行测试需要大量时间（甚至有些成本）。我正常使用约 5-10 个 110 多个插件中的插件，因此我经常使用我自己不直接使用的测试机器（以及购买一些测试服务，如 vpn）来调试和改进插件。

如果这个插件为您节省时间或使您的设置更方便，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢我为此仓库点赞的所有人！点击上方图片点赞，它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## 关于

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费的、开源的网页监控、通知和变更检测功能。

此插件基于 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-changedetection.io)。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详情请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 主应用程序

Web UI 位于 `<your-ip>:5000`，也可以通过插件页面或在侧边栏使用 Ingress 访问。

#### 侧边栏快捷方式

您可以通过以下步骤添加指向您的 Changedetection.io 实例的快捷方式：
1. 进入 <kbd>⚙ 设置</kbd> > <kbd>仪表盘</kbd>
2. 点击右下角的 <kbd>➕ 添加仪表盘</kbd>
3. 选择 <kbd>Webpage</kbd> 选项，并将从插件页面获取的 Web UI URL 粘贴进去。
4. 填写侧边栏项的标题、图标（建议：`mdi:vector-difference`）以及该面板的 **相对 URL**（例如 `change-detection`）。最后确认它。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如 `Europe/London`） |
| `BASE_URL` | str | | 运行在反向代理后的完整 URL |
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

### 连接 Browserless Chrome (由 @RhysMcW 提供)

安装并启动 Browserless Chrome 插件，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。该选项必须填写 Browserless Chrome 的 URL："ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"

`db21ed7f-browserless-chrome` 主机名将显示在 UI 的 Browserless Chromium 插件页面上：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重启 Changedetection.io 插件 - 之后您就可以在 Changedetection.io 中使用浏览器选项。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装没有不同。

1. 将我的插件库添加到您的 home assistant 实例中（在 supervisor 插件库右上角，或如果您已配置了我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志以确认一切正常。
1. 仔细根据您的喜好配置插件，请参阅官方文档以获取详细信息。

[repository]: https://github.com/alexbelgium/hassio-addons

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
