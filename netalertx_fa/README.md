# Home Assistant 插件：NetAlertX 完整权限版

我利用闲暇时间维护此及其他 Home Assistant 插件：跟进上游更改、HA 更改更新，以及在真实硬件上进行测试需要耗费大量时间（并支付一些费用）。我使用的大约是 5-10 个我的 >110 个插件，所以我定期安装测试机器（并购买一些测试服务，如 vpn），这些机器我自己不使用，用来调试和改进插件。

如果此插件为您节省时间或让您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![Ingress] (https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢为我代码库点星的每一位！要点击下图中的图像来星标它，这样它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx_fa/stats.png)

## 关于

[NetAlertX](https://github.com/jokob-sk/NetAlertX) 是一个 WIFI/LAN 扫描器，入侵检测器和存在检测设备，可帮助您监控网络以检测新设备和潜在的安全威胁。

**这是完整版** 插件，相较于标准 NetAlertX 插件提供额外的权限和网络访问能力。

主要特性：
- 网络设备发现和监控
- 已知设备的位置检测
- 未知设备的入侵检测
- 基于 Web 的仪表板，用于网络可视化
- MQTT 集成以支持 Home Assistant
- 具备增强权限的网络扫描

## 配置

Webui 可访问于 `<your-ip>:20211`，或通过侧边栏使用 Ingress 访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
| :--- | :--- | :--- | :--- |
| `TZ` | str | `Europe/Berlin` | 时区（例如，`Europe/London`） |
| `APP_CONF_OVERRIDE` | str | | 额外的应用程序配置覆盖 |

### 配置示例

```yaml
TZ: "Europe/London"
APP_CONF_OVERRIDE: "SCAN_SUBNETS=['192.168.1.0/24']"
```

### MQTT 集成

此插件支持 MQTT 集成，如果可用将自动连接到您的 Home Assistant MQTT 代理。NetAlertX 可将设备存在信息发布到 MQTT 主题，以便集成 Home Assistant 自动化。

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。详情见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常直接，与安装任何其他 Hass.io 插件相比没有不同。

1. 将我的插件存储库添加到您的 home assistant 实例（在 supervisor 插件商店右上角，或如果已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有具体存储库 URL 预填充的添加插件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志，查看一切是否正常。
1. 打开 Webui 配置您的网络扫描偏好设置。

## 完整权限版与传统版

此 **完整权限版** 提供：
- `full_access: true` - 完整系统访问权限
- `host_network: true` - 直接主机网络访问
- 增强的权限（`SYS_ADMIN`, `NET_ADMIN`, `NET_RAW`）
- `udev: true` - 硬件设备访问

如果您的增强网络扫描能力需求需要此版本，或者标准 NetAlertX 插件无法为您的设置提供足够的网络访问，请使用此版本。

## 支持

在 Github 上创建问题，或前往 [home assistant 社区论坛](https://community.home-assistant.io/) 提问

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
