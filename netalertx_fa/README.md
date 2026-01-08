# Home assistant add-on: NetAlertX Full Access


我利用业余时间维护这个和其他Home Assistant add-ons：跟上上游的变更、HA的变更，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个add-ons中的5-10个，所以我安装了一些测试机器（和一些我自身不使用的测试服务，比如VPN）来调试和改进这些add-ons。

如果这个add-on节省了你的时间或使你的设置更容易，我将非常感谢你的支持！

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

_感谢所有给我仓库点赞的人！点击下面的图片点赞，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx_fa/stats.png)

## About

[NetAlertX](https://github.com/jokob-sk/NetAlertX) 是一个WIFI / LAN扫描器、入侵者和存在检测器，帮助你监控你的网络中的新设备和潜在的安全威胁。

**这是Full Access版本**，与标准的NetAlertX add-on相比，它提供了额外的权限和网络访问功能。

主要功能：
- 网络设备发现和监控
- 已知设备的存在检测
- 未知设备的入侵检测
- 基于网络的仪表板，用于网络可视化
- 与Home Assistant的MQTT集成
- 增强权限的网络扫描

## Configuration

Webui可以在`<your-ip>:20211`或通过Ingress在侧边栏中找到。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `TZ` | str | `Europe/Berlin` | 时区（例如，`Europe/London`） |
| `APP_CONF_OVERRIDE` | str | | 额外的app配置覆盖 |

### Example Configuration

```yaml
TZ: "Europe/London"
APP_CONF_OVERRIDE: "SCAN_SUBNETS=['192.168.1.0/24']"
```

### MQTT Integration

这个add-on支持MQTT集成，如果可用，将自动连接到你的Home Assistant MQTT代理。NetAlertX可以发布设备存在信息到MQTT主题，以与Home Assistant自动化集成。

### Custom Scripts and Environment Variables

这个add-on通过`addon_config`映射支持自定义脚本和环境变量：

- **Custom scripts**：参见[在Addons中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用add-on的`env_vars`选项传递额外的环境变量（大小写名称）。参见https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2了解详情。

## Installation

这个add-on的安装非常简单，与其他Hass.io add-on的安装方式相同。

1. [将我的Hass.io add-ons仓库][repository]添加到你的Hass.io实例。
1. 安装这个add-on。
1. 点击`Save`按钮保存你的配置。
1. 启动add-on。
1. 检查add-on的日志以查看是否一切正常。
1. 打开webUI以配置你的网络扫描偏好设置。

## Full Access vs Standard Version

这个**Full Access**版本提供：
- `full_access: true` - 完整的系统访问
- `host_network: true` - 直接主机网络访问
- 增强的权限（`SYS_ADMIN`, `NET_ADMIN`, `NET_RAW`）
- `udev: true` - 硬件设备访问

如果你需要增强的网络扫描功能，或者标准的NetAlertX add-on不能为你的设置提供足够的网络访问权限，请使用这个版本。

## Support

在github上创建一个问题，或在[home assistant社区论坛](https://community.home-assistant.io/)上提问

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
