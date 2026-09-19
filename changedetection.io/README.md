# Home assistant 附加组件：changedetection.io

我通常在业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改以及在真实硬件上进行测试需要大量时间（和一些金钱）。我约用 5-10 个在我拥有的 >110 个附加组件中，因此我安装了测试机器（并购买一些测试服务，如 vpn），我自己并不使用，以排查问题和改进附加组件。

如果这个附加组件为您节省了时间，或者让您的设置更容易，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_ Thanks to everyone having starred my repo! To star it click on the image below, then it will be on top right. Thanks!_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## 关于

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费的、开源的网络页面监控、通知和更改检测功能。

此附加组件基于 [docker 镜像](https://github.com/linuxserver/docker-changedetection.io)（来自 linuxserver.io）。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 主应用程序

Web UI 可在 `<your-ip>:5000` 访问，也可通过附加组件页面或通过侧边栏的 Ingress 访问。

#### 侧边栏快捷方式

您可以通过以下步骤添加指向您的 Changedetection.io 实例的快捷方式：
1. 进入 <kbd>⚙ Settings</kbd> > <kbd>Dashboards</kbd>
2. 在右下角点击 <kbd>➕ Add Dashboard</kbd>
3. 选择 <kbd>Webpage</kbd> 选项，并粘贴从附加组件页面获取的 Web UI URL。
4. 填写侧边栏项目的标题、图标（建议：`mdi:vector-difference`），以及该面板的**相对 URL**（例如 `change-detection`）。最后，确认它。

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限的组 ID |
| `PUID` | int | `0` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `BASE_URL` | str | | 运行在反向代理之后的完整 URL |
| `PLAYWRIGHT_DRIVER_URL` | str | | Playwright 驱动 WebSocket 地址 |
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

### 连接 Browserless Chrome (来自 @RhysMcW)

安装并启动 Browserless Chrome 附加组件，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。此选项必须填入 Browserless Chrome 的 URL："ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"

`db21ed7f-browserless-chrome` 主机名显示在 UI 中，在 Browserless Chromium 附加组件页面上：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重启 Changedetection.io 附加组件——之后您就可以在 Changedetection.io 中使用浏览器选项了。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件存储顶部点击，或者如果您已配置了我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 查看附加组件的日志，以确认一切正常。
1. 根据您的偏好仔细配置附加组件，有关详细信息，请查看官方文档。

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
