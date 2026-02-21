# Home assistant add-on: changedetection.io

我利用业余时间维护这个和其他 Home Assistant add-ons：跟上上游的变化、HA 的变化，并在真实硬件上测试需要大量时间（和一些钱）。我大约使用我超过 110 个 add-ons 中的 5-10 个，因此我安装了一些我自己的测试机器（和购买了一些测试服务，如 VPN），以便进行故障排除和改进 add-ons。

如果这个 add-on 为您节省了时间或使您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## About

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费、开源的网页监控、通知和变化检测。

这个 add-on 基于 linuxserver.io 的 [docker image](https://github.com/linuxserver/docker-changedetection.io)。

## Configuration

使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。详情请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### Main app

Web UI 可以在 `<你的IP>:5000` 找到，也可以通过 add-on 页面或使用 Ingress 从侧边栏访问。

#### Sidebar shortcut

您可以通过以下步骤添加一个指向您的 Changedetection.io 实例的快捷方式：
1. 转到 <kbd>⚙ 设置</kbd> > <kbd>仪表板</kbd>
2. 点击底角处的 <kbd>➕ 添加仪表板</kbd>
3. 选择 <kbd>Webpage</kbd> 选项，并粘贴从 add-on 页面获取的 Web UI URL。
4. 为侧边栏项填写标题、图标（建议：`mdi:vector-difference`），并为该面板填写一个**相对 URL**（例如 `change-detection`）。最后，确认它。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `BASE_URL` | str | | 在反向代理后面运行时的完整 URL |
| `PLAYWRIGHT_DRIVER_URL` | str | | Playwright 驱动 WebSocket URL |
| `TIMEOUT` | int | `60000` | 以毫秒为单位的请求超时 |

### Example Configuration

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
BASE_URL: "https://changedetection.mydomain.com"
PLAYWRIGHT_DRIVER_URL: "ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"
TIMEOUT: 60000
```

### Connect to browserless Chrome (from @RhysMcW)

安装并启动 Browserless Chrome add-on，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。此选项必须填写 Browserless Chrome URL："ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"

`db21ed7f-browserless-chrome` 主机名显示在 UI 中，在 Browserless Chromium add-on 页面上：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重新启动 Changedetection.io add-on - 之后您就可以在 Changedetection.io 中使用浏览器选项。

## Installation

这个 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. 将我的 Hass.io add-ons 仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装这个 add-on。
1. 点击 `保存` 按钮来保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看是否一切正常。
1. 仔细配置 add-on 以满足您的偏好，请参阅官方文档进行配置。

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
