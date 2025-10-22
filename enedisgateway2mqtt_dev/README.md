# Home assistant add-on: MyElectricalData

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fenedisgateway2mqtt%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要给仓库加星，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/enedisgateway2mqtt_dev/stats.png)

## 关于

MyElectricalData 允许自动访问您的 Enedis 数据。有关所有信息，请查看其 GitHub：https://github.com/m4dm4rtig4n/myelectricaldata

## 配置

Webui 可以在 <http://homeassistant:5000> 或通过 Ingress 访问。
初始设置需要启动一次插件以初始化配置模板。

### 设置步骤

1. 启动插件以初始化配置文件
2. 在 config.yaml 文件中配置您的 Enedis 凭据
3. 设置 MQTT 连接详细信息
4. 访问 Web 界面以监控数据检索

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CONFIG_LOCATION` | 字符串 | `/config/myelectricaldata/config.yaml` | 配置文件路径 |
| `TZ` | 字符串 | `Europe/Paris` | 时区（例如，`Europe/London`） |
| `mqtt_autodiscover` | 布尔值 | `true` | 启用 MQTT 自动发现 |
| `verbose` | 布尔值 | `true` | 启用详细日志 |

### 示例配置

```yaml
CONFIG_LOCATION: "/config/myelectricaldata/config.yaml"
TZ: "Europe/London"
mqtt_autodiscover: true
verbose: false
```

### 配置文件

主要配置通过 `/config/myelectricaldata/config.yaml` 完成。此文件包含：
- Enedis API 凭据
- MQTT 代理设置
- 数据检索间隔
- 设备配置

有关完整的配置选项，请参阅：https://github.com/m4dm4rtig4n/myelectricaldata/wiki/03.-Configuration

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository]添加到您的 Hass.io 实例。
2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件的日志以查看是否一切正常。
6. 仔细配置插件以满足您的偏好，请参阅官方文档。

[repository]: https://github.com/alexbelgium/hassio-addons