# Home Assistant 附加组件：changedetection.io

我在业余时间维护此附加组件及其他 Home Assistant 附加组件：跟进上游更改、HA 更改，以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我使用约 5-10 个超过 110 个附加组件中的一部分，因此我经常安装测试机器（并购买一些我不自己使用的测试服务，例如 VPN），以便排查问题和改进附加组件。

如果这个附加组件为您节省时间或使您的设置更容易，我会非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![入站 IP] (https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我仓库点赞！要点赞，请点击下方图片，然后将它移到右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## 概述

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费、开源的网页监控、通知和变更检测功能。

此附加组件基于位于 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-changedetection.io)。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 主要应用程序

Web UI 位于 `<your-ip>:5000`，也可通过附加组件页面或通过侧边栏的入站 IP 功能访问。

#### 侧边栏快捷方式

您可以通过以下步骤添加指向您的 Changedetection.io 实例的快捷方式：
1. 进入到 <kbd>⚙ 设置</kbd> > <kbd>仪表盘</kbd>
2. 点击左下角的 <kbd>➕ 添加仪表板</kbd>
3. 选择 <kbd>网页</kbd> 选项，并粘贴从附加组件页面获取的 Web UI 网址。
4. 输入侧边栏项的标题、图标（建议：`mdi:vector-difference`），并为该面板填充 **相对 URL**（例如 `change-detection`）。最后，确认它。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `BASE_URL` | str | | 在反向代理后运行时的完整 URL |
| `PLAYWRIGHT_DRIVER_URL` | str | | Playwright 驱动 WebSocket 网址 |
| `TIMEOUT` | int | `60000` | 请求超时时间，单位为毫秒 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
BASE_URL: "https://changedetection.mydomain.com"
PLAYWRIGHT_DRIVER_URL: "ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"
TIMEOUT: 60000
```

### 连接到 Browserless Chrome (来自 @RhysMcW)

安装并启动 Browserless Chrome 附加组件，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。此选项必须填写 Browserless Chrome 的网址："ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"

`db21ed7f-browserless-chrome` 主机名显示在 UI 中，在 Browserless Chromium 附加组件页面：
![图像](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重启 Changedetection.io 附加组件 - 之后您就可以在 Changedetection.io 中使用浏览器选项了。

## 安装

此附加组件的安装非常直接，与其他 Hass.io 附加组件的安装没有区别。

1. 将我提供的附加组件库添加到您的 home assistant 实例中 (在 supervisor 附加组件存储右上角，或如果您已配置我的 HA，则点击下方按钮)
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 仔细根据您的需求配置附加组件，请参考官方文档了解更多相关细节。

[repository]: https://github.com/alexbelgium/hassio-addons

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
