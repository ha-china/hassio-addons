# Home assistant add-on: gazpar2mqtt

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgazpar2mqtt%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gazpar2mqtt/stats.png)

## 关于

一个Python脚本，用于获取GRDF数据并将其发布到MQTT代理。
有关所有信息，请查看其GitHub：https://github.com/yukulehe/gazpar2mqtt

## 配置

此插件从GRDF（法国燃气公司）获取燃气消耗数据，并将其发布到MQTT以与Home Assistant集成。

### 设置步骤

1. 在 https://monespace.grdf.fr/ 创建一个GRDF帐户
2. 在config.yaml文件中配置您的GRDF凭证
3. 设置MQTT连接详细信息
4. 在插件日志中监控数据检索

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `CONFIG_LOCATION` | str | `/config/gazpar2mqtt/config.yaml` | 配置文件路径 |
| `TZ` | str | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `mqtt_autodiscover` | bool | `true` | 启用MQTT自动发现 |
| `verbose` | bool | `true` | 启用详细日志 |

### 示例配置

```yaml
CONFIG_LOCATION: "/config/gazpar2mqtt/config.yaml"
TZ: "Europe/Paris"
mqtt_autodiscover: true
verbose: false
```

### 配置文件

主要配置通过 `/config/gazpar2mqtt/config.yaml` 完成。此文件包含：
- GRDF帐户凭证
- MQTT代理设置
- 数据检索间隔
- 设备配置

### config.yaml中的必要配置

```yaml
# GRDF凭证
grdf:
  username: "your-grdf-username"
  password: "your-grdf-password"

# MQTT设置
mqtt:
  host: "homeassistant.local"
  port: 1883
  username: "mqtt-user"
  password: "mqtt-password"
  topic_prefix: "gazpar"

# 可选：更新频率
update_frequency: 3600  # 秒
```

有关完整的配置选项，请参阅：https://github.com/yukulehe/gazpar2mqtt

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
2. 安装此插件。
3. 点击“保存”按钮以保存您的配置。
4. 启动插件。
5. 检查插件日志以查看是否一切正常。
6. 仔细配置插件以符合您的偏好，请参阅官方文档进行配置。

[repository]: https://github.com/alexbelgium/hassio-addons