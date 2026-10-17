# Home Assistant 插件：changedetection.io

我在空闲时间维护此插件及其他 Home Assistant 插件：跟进上游更改、Home Assistant 的更新以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用大约 5-10 个 >110 个插件，因此我经常安装测试机器（并购买一些测试服务，如 vpn），以用于调试和改进这些插件。

如果您使用了这个插件节省了时间或让您的设置更简单，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家关注我的仓库！要关注它，点击下面的图片，它就会出现在右上角。感谢！_

[![@alexbelgium/hassio-addons 仓库的星标用户名单](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## 概述

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费的、开源的网页监控、通知和变化检测功能。

此插件基于 linuxserver.io 上的 [docker 镜像](https://github.com/linuxserver/docker-changedetection.io)。

## 配置

使用插件 `env_vars` 选项来传递额外的环境变量（大小写均支持）。请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 查看详情。

### 主应用

Web UI 可在 `<your-ip>:5000` 访问，也可通过 Ingress 在插件页面或侧边栏中访问。

#### 侧边栏快捷方式

您可以通过以下步骤添加指向您的 Changedetection.io 实例的快捷方式：
1. 进入 <kbd>⚙ 设置</kbd> > <kbd>Dashboards</kbd>
2. 在左下角点击 <kbd>➕ 添加仪表板</kbd>
3. 选择 <kbd>Webpage</kbd> 选项，并粘贴从插件页面获取的 Web UI URL。
4. 填写侧边栏项的标题、图标（建议：`mdi:vector-difference`），以及该面板的 **相对 URL**（例如 `change-detection`）。最后，确认即可。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|---|---|---|---|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `BASE_URL` | str | | 运行在反向代理后的完整 URL |
| `PLAYWRIGHT_DRIVER_URL` | str | | Playwright driver WebSocket URL |
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

### 连接浏览无码 Chrome (来自 @RhysMcW)

安装并启动 Browserless Chrome 插件，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接它。此选项必须填写 Browserless Chrome URL：`"ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"`

`db21ed7f-browserless-chrome` 主机名将在 UI 中显示，在 Browserless Chromium 插件页上：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重新启动 Changedetection.io 插件——之后您就可以在 Changedetection.io 中使用浏览器选项了。

## 安装

安装此插件非常简单，与其他 Hass.io 插件的安装方式没有不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor addons store 右上角，或者如果您已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示预填充特定仓库 URL 的“添加插件仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮保存您的配置。
1. 启动插件。
1. 检查插件日志，查看一切是否正常。
1. 根据偏好仔细配置插件，请访问官方文档以获取相关说明。

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
