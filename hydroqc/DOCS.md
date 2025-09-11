# Home Assistant 插件 : HydroQC

这个插件将使用您的门户凭据从您的 Hydro-Quebec 账户获取可用数据，并通过 MQTT 将结果数据提供给 Home-Assistant。\
您可以在这里找到插件的源代码：[https://gitlab.com/hydroqc/hydroqc-hass-addons](https://gitlab.com/hydroqc/hydroqc-hass-addons) \
有关提供的传感器的更多详细信息和信息，请查看 [项目文档](https://hydroqc.ca)

## 捐赠

我们在这个项目中投入了大量的心血和努力，任何贡献我们都非常感激！

[![捐赠](https://img.shields.io/badge/Donate-Hydroqc-green)](https://hydroqc.ca/en/donations)

## 冬季信用和 Flex D 的蓝图

我们还提供用于冬季信用选项和 Flex D 的蓝图。

https://github.com/hydroqc/hass-blueprint-hydroqc

安装：

**冬季信用** : [![打开您的 Home Assistant 实例并显示预填充特定蓝图的蓝图导入对话框。](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fhydroqc%2Fhass-blueprint-hydroqc%2Fmain%2Fhydroqc-winter-credits.yaml)

**Flex D** : [![打开您的 Home Assistant 实例并显示预填充特定蓝图的蓝图导入对话框。](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fhydroqc%2Fhass-blueprint-hydroqc%2Fmain%2Fhydroqc-flex-d.yaml)

请确保参考 [文档](https://hydroqc.ca/en/docs) 以获取有关如何使用蓝图的更多信息。

## 配置值

基本配置只需提供名称、费率和费率选项（如适用）。这将从 Hydro-Québec 开放数据门户获取冬季峰值数据。

您还可以提供您的 Hydro-Québec 账户信息，并获取特定于您账户的信息，例如您的余额和每小时消耗。

如果需要，还提供更高级的配置。

#### hq_name

合同的名称（maison, chalet, duplex 等）
```maison```

#### hq_rate
合同的费率。可能的值可以在此找到 https://hydroqc.ca/fr/docs/overview/supported-accounts/

```D```
```DPC```
```DT```

#### hq_rate_option
合同的费率选项。可能的值可以在此找到 https://hydroqc.ca/fr/docs/overview/supported-accounts/. \
在冬季信用之前大多数情况下将保持为空。
```CPC```


#### hq_username

```email@domain.tld```

#### hq_password

```YourPortalPassword```

#### hq_customer

客户号码（Numéro de client）来自您的发票。\
10 位数字，您可能需要为该值添加前导 0!!!\
例如：'987 654 321' 将变为 '0987654321'

```'0987654321'```

#### hq_account

账户号码（Numéro de compte）来自您的发票

```'654321987654'```

#### hq_contract
合同号码（Numéro de contrat）来自您的发票\
10 位数字，您可能需要为该值添加前导 0!!!\
例如：'123 456 789' 将变为 '0123456789'

```'0123456789'```

#### sync_hourly_consumption
一个布尔值，用于启用或禁用每小时消耗特性\
该特性可用于 HASS 能源仪表板。

```true```

#### preheat_duration_minutes
定义预热在峰值事件之前应该提前开始的时间（分钟）

```180```

### mqtt

MQTT 配置将自动完成，以便在 Home-Assistant OS 中使用您的 MQTT 插件。 \
您只需在有外部 MQTT 服务器的情况下更改此部分。

```
mqtt:
  mqtt_discovery_data_topic: "homeassistant"
  mqtt_data_root_topic: "hydroqc"
  mqtt_username: 'login'
  mqtt_password: 'password'
  mqtt_server: '192.168.0.23'
  mqtt_port: '1883'

```

#### mqtt_discovery_data_topic

homeassistant 的 mqtt 发现主题。请自行承担风险进行更改。

```"homeassistant"```

#### mqtt_data_root_topic

生成的 hydroqc 值将发布到的根 mqtt 主题。

```"hydroqc"```

### 高级

除非您知道自己在做什么，否则不应更改高级设置。

#### ha_url

HASS 核心的 websocket 地址。

#### ha_token

访问 HASS websocket 核心 API 的主管令牌。

#### timezone

您的时区，对于大多数 Hydro-Quebec 的客户，默认的 "America/Toronto" 是可以的，但我们也为 Blanc Sablon 的朋友提供了选项。

#### log_level

输出的日志级别。可以是 DEBUG、INFO、WARNING、ERROR 或 CRITICAL。

#### hydroqc_config_file

我们使用一个默认文件。如果您知道自己在做什么并想提供自己的文件，您应该在这里设置其路径。

## 能源仪表板配置

要使用 Hydro-Quebec 电力消耗数据配置 HASS 能源仪表板，请按照 [这里](https://hydroqc.ca/en/docs/configuration/home-assistant-specific/) 中描述的步骤进行。