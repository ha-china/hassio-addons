# Home assistant add-on: NetAlertX Full Access

我利用业余时间维护这个和其他 Home Assistant add-ons：跟上上游的变化、HA 的变化，并在真实硬件上测试需要大量时间（和一些钱）。我大约使用我超过 110 个 add-ons 中的 5-10 个，所以我会安装一些我不自己使用的测试机器（和一些测试服务，如 VPN）来调试和改进 add-ons。

如果这个 add-on 为您节省了时间或使您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx_fa%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片即可点赞，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx_fa/stats.png)

## About

[NetAlertX](https://github.com/jokob-sk/NetAlertX) 是一个 WIFI / LAN 扫描器、入侵者和存在检测器，帮助您监控网络中的新设备和潜在的安全威胁。

**这是全访问版本**，与标准 NetAlertX add-on 相比，它提供了额外的权限和网络访问功能。

主要功能：
- 网络设备发现和监控
- 已知设备的存在检测
- 未知设备的入侵检测
- 基于网络的仪表板，用于网络可视化
- 与 Home Assistant 的 MQTT 集成
- 增强权限的网络扫描

## Configuration

Webui 可以在 `<your-ip>:20211` 或通过 Ingress 在侧边栏中找到。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `TZ` | str | `Europe/Berlin` | 时区（例如，`Europe/London`） |
| `APP_CONF_OVERRIDE` | str | | 额外的应用配置覆盖 |

### Example Configuration

```yaml
TZ: "Europe/London"
APP_CONF_OVERRIDE: "SCAN_SUBNETS=['192.168.1.0/24']"
```

### MQTT Integration

这个 add-on 支持 MQTT 集成，如果可用，将自动连接到您的 Home Assistant MQTT 中继。NetAlertX 可以将设备存在信息发布到 MQTT 主题，以便与 Home Assistant 自动化集成。

### Custom Scripts and Environment Variables

这个 add-on 通过 `addon_config` 映射支持自定义脚本和环境变量：

- **Custom scripts**: 查看 [在 Addons 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option**: 使用 add-on 的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

## Installation

这个 add-on 的安装非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. [将我的 Hass.io add-ons 仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装这个 add-on。
1. 点击 `Save` 按钮保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志，看看一切是否正常。
1. 打开 webUI 以配置您的网络扫描偏好设置。

## Full Access vs Standard Version

这个 **全访问** 版本提供：
- `full_access: true` - 完整的系统访问
- `host_network: true` - 直接主机网络访问
- 增强权限 (`SYS_ADMIN`, `NET_ADMIN`, `NET_RAW`)
- `udev: true` - 硬件设备访问

如果您需要增强的网络扫描功能，或者标准的 NetAlertX add-on 不能为您的设置提供足够的网络访问，请使用此版本。

## Support

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问

[repository]: https://github.com/alexbelgium/hassio-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
