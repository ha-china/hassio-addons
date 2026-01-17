# Home assistant add-on: changedetection.io

我利用业余时间维护这个及其他Home Assistant add-on：跟上上游变化、HA变化，并在真实硬件上测试都需要大量时间（和一些金钱）。我大约使用我超过110个add-on中的5-10个，因此我安装了一些我本人不使用的测试机器（和购买了一些测试服务，如VPN）来调试和改进这些add-on。

如果这个add-on节省了你的时间或使你的设置更简单，我将非常感谢你的支持！

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

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## About

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费的、开源的网页监控、通知和变化检测。

这个add-on基于linuxserver.io的[docker镜像](https://github.com/linuxserver/docker-changedetection.io)。

## Configuration

使用add-on的`env_vars`选项来传递额外的环境变量（大小写名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### Main app

Web UI 可以在 `<your-ip>:5000` 找到，也可以通过add-on页面或使用Ingress从侧边栏访问。

#### Sidebar shortcut

你可以通过以下步骤添加一个指向你的Changedetection.io实例的快捷方式：
1. 进入 <kbd>⚙ 设置</kbd> > <kbd>Dashboard</kbd>
2. 点击底部角落的 <kbd>➕ 添加Dashboard</kbd>
3. 选择 <kbd>Webpage</kbd> 选项，并粘贴你从add-on页面获得的Web UI URL。
4. 为侧边栏项目填写标题、图标（建议：`mdi:vector-difference`），并为该面板填写一个**相对URL**（例如 `change-detection`）。最后，确认它。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组ID |
| `PUID` | int | `0` | 文件权限的用户ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `BASE_URL` | str | | 当在反向代理后面运行时的完整URL |
| `PLAYWRIGHT_DRIVER_URL` | str | | Playwright驱动程序的WebSocket URL |
| `TIMEOUT` | int | `60000` | 请求超时（毫秒） |

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

安装并启动Browserless Chrome add-on，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。这个选项必须填写Browserless Chrome的URL："ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"

`db21ed7f-browserless-chrome` 主机名显示在UI中，在Browserless Chromium add-on页面上：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重启Changedetection.io add-on - 之后你就可以在Changedetection.io中使用浏览器选项。

## Installation

这个add-on的安装非常简单，与其他任何Hass.io add-on的安装方式没有不同。

1. [将我的Hass.io add-ons仓库][repository]添加到你的Hass.io实例。
1. 安装这个add-on。
1. 点击 `保存` 按钮来保存你的配置。
1. 启动add-on。
1. 检查add-on的日志，看看是否一切顺利。
1. 小心配置add-on以满足你的偏好，请参考官方文档进行配置。

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
