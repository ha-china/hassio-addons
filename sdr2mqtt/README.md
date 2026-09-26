# Home Assistant 插件：SDR2mqtt

一个用于软件定义无线电的 Home Assistant 插件，调谐监听来自 SDR/RTL 传感器的 RF 传输，并通过 MQTT 重新发布数据。

## 安装

在 **Supervisor → 插件商店 → ⋮ → 管理插件存储库** 中添加存储库 URL：

    https://github.com/thejeffreystone/hassio-addons

然后搜索 `SDR to home Assistant` 并安装它。

## 配置

示例插件配置：

```yaml
mqtt_host: 192.168.7.100
mqtt_user: mqtt_user
mqtt_password: mqtt_pass
mqtt_topic: rtl_433
mqtt_retain: 'true'
frequency: '-f 433.92M'
protocol: ''
units: 'si'
discovery_prefix: homeassistant
discovery_interval: 600
debug: false
```

### 选项： `mqtt_host`

`mqtt_host` 选项是您的 MQTT 服务器的 IP 地址。如果您使用的是 Home Assistant 内嵌服务器，只需使用您的实例 IP 地址。

### 选项： `mqtt_user`

这是访问您的 MQTT 服务器所需的用户名。

### 选项： `mqtt_password`

MQTT 用户账户的密码。

### 选项： `mqtt_topic`

这是您的设备将使用的主题。

### 选项： `mqtt_retain`

将其设置为 `true` 意味着 MQTT 服务器将保留您的最后一个值，直到它被更改。将其设置为 `false` 意味着服务器将在一段时间后忘记值，因此您将只看到最近发送的值。

### 选项： `frequency`

这设置了您的 SDR 将监听的频率。默认值为 '-f 433.92M'，但您可以使用 '-f 915M' 或 '-f 868M'，或者像 '-f 433.92M f 915M' 这样使用多个频率。

### 选项： `protocol`

这决定了软件监听哪些设备。`-R 11 -R 40 -R 41 -R 55 -R 74` 是 Accurite 传感器。如果协议为空，它将监听所有设备，这可能会很嘈杂。默认情况下，此插件的协议为空。请咨询以下说明文件以了解协议。

有关所有可能的协议，请访问 <https://github.com/thejeffreystone/hassio_addons/blob/main/acurite2mqtt/PROTOCOLS.md>

### 选项： `expire_after`

这是一 个 `integer` 值，如果在指定的秒数内没有接收到有效载荷，则会将单个传感器实体设置为 `unknown`。默认值为 0，禁用此功能。

### 选项： `units`

设置测量单位。 
- `si` = 公制
- `customary` = 英制 / 习惯单位  

### 选项： `discovery_prefix`

自动发现的 MQTT 前缀。 `homeassistant` 应该可以工作。如果您使用其他前缀，自动发现可能无法正常工作。

### 选项： `discovery_interval`

`600` 意味着 Home Assistant 每 600 秒检查一次新设备。

### 选项： `debug`

如果您想查看额外的日志，请将调试设置为 `true`。不过，这会产生很多噪声，因此我只会在积极排查问题时运行。其他时候保持为 false。

## 已知问题和限制

- 此插件仍处于测试阶段。

## 更新日志与发布

此存储库使用 [GitHub 的 releases][releases] 功能来维护更新日志。日志格式基于 [保持更新日志][keepchangelog]。

发布基于 [语义版本控制][semver]，使用的格式为 ``MAJOR.MINOR.PATCH``。简而言之，版本将根据以下内容进行递增：

- ``MAJOR``：不兼容或重大更改。
- ``MINOR``：向后兼容的新功能和增强功能。
- ``PATCH``：向后兼容的错误修复和软件包更新。