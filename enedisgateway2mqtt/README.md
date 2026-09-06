# Home assistant add-on: MyElectricalData

我利用业余时间维护这个和其他Home Assistant add-on：跟上上游的变化、HA的变化，并在真实硬件上测试需要大量的时间（和一些钱）。我大约使用我的110多个add-on中的5-10个，因此我安装了一些我自己的测试机器（和一些我不用测试服务，如VPN），以调试和改进add-on

如果这个add-on为你节省了时间或使你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！点击下面的图片即可点赞，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/enedisgateway2mqtt/stats.png)

## About

MyElectricalData允许自动访问您的Enedis数据。有关所有信息，请参阅其github：https://github.com/m4dm4rtig4n/myelectricaldata

## Configuration

使用add-on的`env_vars`选项来传递额外的环境变量（大小写名称）。详情请参阅：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

Webui可以在<http://homeassistant:5000>或通过Ingress访问。
初始设置需要启动一次add-on以初始化配置模板。

### Setup Steps

1. 启动add-on以初始化配置文件
2. 在config.yaml文件中配置您的Enedis凭据
3. 设置MQTT连接详细信息
4. 通过Web界面监控数据检索

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `CONFIG_LOCATION` | str | `/config/myelectricaldata/config.yaml` | 配置文件路径 |
| `TZ` | str | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `mqtt_autodiscover` | bool | `true` | 启用MQTT自动发现 |
| `verbose` | bool | `true` | 启用详细日志 |

### Example Configuration

```yaml
CONFIG_LOCATION: "/config/myelectricaldata/config.yaml"
TZ: "Europe/London"
mqtt_autodiscover: true
verbose: false
```

### Configuration File

主要配置通过`/config/myelectricaldata/config.yaml`完成。此文件包含：
- Enedis API凭据
- MQTT代理设置
- 数据检索间隔
- 设备配置

有关完整的配置选项，请参阅：https://github.com/m4dm4rtig4n/myelectricaldata/wiki/03.-Configuration

## Installation

这个add-on的安装非常简单，与其他Hass.io add-on的安装没有区别。

1. 将我的Hass.io add-on仓库[repository]添加到您的Hass.io实例。
2. 安装此add-on。
3. 点击`Save`按钮以保存您的配置。
4. 启动add-on。
5. 检查add-on的日志以查看是否一切正常。
6. 仔细配置add-on以符合您的偏好，请参阅官方文档。

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
