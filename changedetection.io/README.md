# Home assistant 扩展：changedetection.io

我在业余时间维护此及其他 Home Assistant 扩展：跟踪上游更改、适配 HA 的更新以及在真实硬件上进行测试花费了大量时间（以及一些金钱）。我每日使用的扩展数量约为 110 个中的 5-10 个，为了排查问题和改进扩展，我会安装一些测试机器（甚至购买一些我自己不使用的测试服务，如 vpn）。

如果这个扩展能为您节省时间或简化您的配置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我 repo 点赞的人！点击下方的图片来点赞，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## 简介

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费的开源网页监控、通知和变更检测功能。

此扩展基于来自 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-changedetection.io)。

## 配置

使用扩展的 `env_vars` 选项传递额外的环境变量（大小写不敏感）。详情请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 主应用

Web UI 位于 `<your-ip>:5000`，也可以通过扩展页面或侧边栏（使用 Ingress）访问。

#### 侧边栏快捷方式

您可以按照以下步骤添加指向您的 Changedetection.io 实例的快捷方式：
1. 进入 <kbd>⚙ 设置</kbd> > <kbd>仪表板</kbd>
2. 在底部角落点击 <kbd>➕ 添加仪表板</kbd>
3. 选择 <kbd>Webpage</kbd> 选项，并粘贴从扩展页面获取的 Web UI URL。
4. 填写侧边栏项目的标题、图标（建议：`mdi:vector-difference`），并为该面板填写一个 **相对 URL**（例如 `change-detection`）。最后，确认设置。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `BASE_URL` | str | | 运行在反向代理后的完整 URL |
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

### 连接到无头 Chrome (来自 @RhysMcW)

安装并启动 Browserless Chrome 扩展，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。该选项必须填写 Browserless Chrome 的 URL："ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"

在更改 Detection.io 扩展页面中的 Browserless Chromium 扩展页面上会显示 `db21ed7f-browserless-chrome` 主机名：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重启 Changedetection.io 扩展 - 之后您就可以在 Changedetection.io 中使用浏览器选项了。

## 安装

此扩展的安装非常直接，与其他安装任何 Hass.io 扩展的方式基本相同。

1. 将我的扩展库添加到您的 home assistant 实例（在 supervisor 扩展商店右上角，或如果您已配置了我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动该扩展。
1. 检查扩展日志以确认一切正常。
1. 仔细根据您的需求配置扩展，具体请参阅官方文档。

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
