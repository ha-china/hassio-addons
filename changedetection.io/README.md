# Home assistant add-on: changedetection.io

我利用业余时间维护这个Home Assistant插件和其他插件：跟进上游变化、Home Assistant的变化，以及在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个插件中的5到10个，因此我安装了一些我本人不使用的测试机器（和购买了一些测试服务，如VPN），以用来调试和改进插件。

如果这个插件能帮到你节省时间或简化你的设置，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchangedetection.io%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星的人！要加星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://reporoster.com/stars/alexbelgium/hassio-addons)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/changedetection.io/stats.png)

## 关于

[Changedetection.io](https://github.com/dgtlmoon/changedetection.io) 提供免费的、开源的网页监控、通知和变化检测服务。

这个插件基于 linuxserver.io 的 [Docker 镜像](https://github.com/linuxserver/docker-changedetection.io)。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大小写名称都可以）。详情请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 主应用程序

Web 界面可以在 `<你的IP>:5000` 访问，也可以从插件页面或通过 Ingress 访问。

#### 侧边栏快捷方式

你可以通过以下步骤添加一个指向你的 Changedetection.io 实例的快捷方式：
1. 转到 <kbd>⚙ 设置</kbd> > <kbd>仪表板</kbd>
2. 点击右下角的 <kbd>➕ 添加仪表板</kbd>
3. 选择 <kbd>网页</kbd> 选项，并粘贴从插件页面获取的 Web UI URL。
4. 为侧边栏项目填写标题、图标（建议：`mdi:vector-difference`），并为该面板填写**相对 URL**（例如 `change-detection`）。最后，确认它。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | 整数 | `0` | 文件权限的组ID |
| `PUID` | 整数 | `0` | 文件权限的用户ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `BASE_URL` | 字符串 | | 当在反向代理后面运行时的完整URL |
| `PLAYWRIGHT_DRIVER_URL` | 字符串 | | Playwright 驱动 WebSocket URL |
| `TIMEOUT` | 整数 | `60000` | 毫秒内的请求超时 |

### 示例配置

```yaml
PGID: 0
PUID: 0
TZ: "Europe/London"
BASE_URL: "https://changedetection.mydomain.com"
PLAYWRIGHT_DRIVER_URL: "ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"
TIMEOUT: 60000
```

### 连接到 Browserless Chrome（来自 @RhysMcW）

安装并启动 Browserless Chrome 插件，然后使用 `PLAYWRIGHT_DRIVER_URL` 选项连接到它。这个选项必须填写 Browserless Chrome URL： "ws://db21ed7f-browserless-chrome:3000/chromium?headless=true&stealth=true&blockAds=true"

`db21ed7f-browserless-chrome` 主机名显示在 UI 中，在 Browserless Chromium 插件页面：
![image](https://github.com/user-attachments/assets/a63514f6-027a-4361-a33f-0d8f87461279)

然后重启 Changedetection.io 插件 - 之后你就可以在 Changedetection.io 中使用浏览器选项了。

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到你的 Hass.io 实例。
2. 安装这个插件。
3. 点击 `保存` 按钮来保存你的配置。
4. 启动插件。
5. 检查插件的日志，看看是否一切正常。
6. 仔细配置插件以满足你的偏好，请参考官方文档。

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
