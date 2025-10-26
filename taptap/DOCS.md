# Li Tin O`ve Weedle Assistant Add-on: TapTap - Tigo CCA to MQTT

此插件基于 [taptap](https://github.com/litinoveweedle/taptap) 项目，该项目的逆向工程了 Tigo TAP 和 CCA 组件之间的协议。我能够创建一个 [MQTT 桥接器](https://github.com/litinoveweedle/taptap-mqtt)，并将其作为一个名为 TapTap 的 Home Assistant 插件进行打包。该插件允许您完全本地化地从 Tigo 光伏优化模块获取详细信息——无需 Tigo 云，并且刷新时间为 10 秒。该插件使用 Home Assistant MQTT 自动发现功能，因此它将自动在 HA 中设置所有提供的传感器。:wink:


## 安装前提条件

  - MQTT 中继，例如 [Mosquitto 插件](https://www.home-assistant.io/integrations/mqtt/#setting-up-a-broker)
  - Home Assistant [MQTT 集成](https://www.home-assistant.io/integrations/mqtt/)
  - Modbus RS485 到串行/以太网转换器，例如 [WaveShare 型号](https://www.waveshare.com/product/iot-communication/wired-comm-converter/ethernet-to-uart-rs232-rs485.htm)


## Modbus 到以太网/串行连接到 Tigo CCA

### Modbus 到以太网/串行转换器必须连接到 [Tigo CCA 网关](https://cs.tigoenergy.com/product/cloud-connect-advanced):
  1. 将转换器连接到 Tigo CCA 网关上名为 Gateway 的连接器
  2. 在此连接器中已经有了从您屋顶连接的 Tigo TAP 的电线
  3. 将转换器的电线与 Tigo TAP 的现有电线一起并联连接
  4. 使用 3 根电线 - `A`、`B` 和 `-`/`⏚`：将 `A` 连接到 `A`，`B` 连接到 `B`，`-`/`⏚` 连接到 `-`/`⏚`
  5. 电线应尽可能短 - 将您的转换器安装在靠近 Tigo CCA 网关的位置

```text
  ┌─────────────────────────────────────┐      ┌────────────────────────────┐
  │              Tigo CCA               │      │         Tigo TAP           │
  │                                     │      │                            │
  │ AUX  RS485-1  GATEWAY  RS485-2 POWER│      │                    ┌~┐     │
  │┌─┬─┐ ┌─┬─┬─┐ ┌─┬─┬─┬─┐ ┌─┬─┬─┐ ┌─┬─┐│      │   ┌─┬─┬─┬─┐   ┌─┬─┬│┬│┐    │
  ││/│_│ │-│B│A│ │-│+│B│A│ │-│B│A│ │-│+││      │   │-│+│B│A│   │-│+│B│A│    │
  │└─┴─┘ └─┴─┴─┘ └┃┴│┴┃┴┃┘ └─┴─┴─┘ └─┴─┘│      │   └│┴│┴│┴│┘   └─┴─┴─┴─┘    │
  └───────────────┃─│─┃─┃───────────────┘      └────│─│─│─│─────────────────┘
                  ┃ │ ┃ ┃                           │ │ │ │
                  ┃ │ ┃ ┃───────────────────────────│─│─│─┘
                  ┃ │ ┃─┃───────────────────────────│─│─┘
                  ┃ └─┃─┃───────────────────────────│─┘
                  ┃───┃─┃───────────────────────────┘
                  ┗━┓ ┃ ┃
                ┌───┃─┃─┃───┐
                │  ┌┃┬┃┬┃┐  │
                │  │-│B│A│  │
                │  └─┴─┴─┘  │
                │ Converter │
                └───────────┘
```
### Modbus 到以太网转换器需要一些额外的配置：
  1. 将转换器连接到您的局域网，以便 Home Assistant 可以访问它
  2. 为转换器分配 IP 地址（自动使用 DHCP 或手动静态地址）
  3. 设置 Modbus 通信为 38400b，数据位 8，停止位 1，流控制无
  4. 设置转换器工作模式为 Modbus TCP 服务器
  5. 设置协议为 Modbus TCP（不是 Modbus TCP 到 RTU），对于 WaveShare 转换器，这位于 Web 配置页面下的“多主机设置”中的“协议”设置为“无”
  6. 记下转换器的 IP 地址和 TCP 端口，稍后在插件配置中使用

每个 Modbus 到以太网转换器都有不同的设置，如果您看不到从您的安装中收集到的任何数据，那么您在转换器连接或配置中很有可能存在问题！请参考 [此处](#warning) 的说明！

## 插件安装

在您的 Home Assistant 中安装 TapTap 插件

1. 点击下面的 Home Assistant My 按钮，在您的 Home Assistant 实例中打开插件。

   [![在您的 Home Assistant 实例中打开此插件。][addon-badge]][addon]

2. 点击“安装”按钮以安装插件。
3. 启动“示例”插件。
4. 检查“示例”插件的日志，查看其运行情况。

## 配置

TapTap 插件示例配置：

```yaml
log_level: warning
mqtt_server: 192.168.1.2
mqtt_port: 1883
mqtt_qos: 1
mqtt_timeout: 5
mqtt_user: mqttuser
mqtt_pass: mqttpass
taptap_port: 502
taptap_module_ids: 2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18
taptap_module_names: A01,A02,A03,A04,A05,A06,A07,A08,A09,A10,A11,A12,A13,A14,A15,A16
taptap_topic_prefix: taptap
taptap_topic_name: tigo
taptap_update: 10
taptap_timeout: 60
ha_entity_availability: true
ha_discovery_prefix: homeassistant
ha_birth_topic: homeassistant/status
taptap_address: 192.168.1.50

```

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示每个详细信息，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：异常情况，但不是错误。
- `error`：运行时错误，不需要立即采取行动。
- `fatal`：发生了严重错误。插件变得无法使用。

请注意，每个级别会自动包含更严重级别的日志消息，例如 `debug` 也会显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在解决问题。

### 选项：`mqtt_server`

MQTT 中继的 IP 地址或 FQDN。如果您正在运行 Mosquitto 插件，它将是您的 HomeAssistant 的 IP 地址。

### 选项：`mqtt_port`

MQTT 中继的 TCP 端口，默认为 `1883`。

### 选项：`mqtt_qos`

MQTT QoS 配置 - 参考 Home Assistant MQTT 文档，默认 `1`。

### 选项：`mqtt_timeout`

MQTT 中继的连接超时 - 参考 Home Assistant MQTT 文档，默认 `5`

### 选项：`mqtt_user`

连接到服务器的 MQTT 中继用户名。

### 选项：`mqtt_pass`

连接到服务器的 MQTT 中继密码。

### 选项：`taptap_serial`

如果您将 Modbus 到 USB/串行转换器连接到 Home Assistant 服务器，这将 是它的设备文件（可能是 `/dev/ttyUSB0` 或 `/dev/ttyACM0`）。如果您使用 Modbus 到以太网转换器，则必须不填写此项！

### 选项：`taptap_address`

如果您使用 Modbus 到以太网转换器连接到 Home Assistant 服务器，这将 是它的 IP 地址。如果您使用 Modbus 到串行/USB 转换器，则必须不填写此项！

### 选项：`taptap_port`

如果您使用 Modbus 到以太网转换器连接到 Home assistant 服务器，这将 是它的 TCP 端口，默认是 `502`。

### 选项：`taptap_module_ids`

Modbus 上通信的 Tigo 模块 ID 的逗号分隔列表。这些 ID 是从 2 开始的数字，每个下一个模块的 ID 增加 1。如果您用一个 Tigo 模块替换另一个新模块，新的模块将获得新的 ID。插件会在收到未知 ID（未列在此处）的消息时记录。

### 选项：`taptap_module_names`

您希望在 Home Assistant 中以相应实体名称显示的 Tigo 模块名称的逗号分隔列表。按与 ID 相同的顺序输入。

### 选项：`taptap_topic_prefix`

用于在 MQTT 中发布消息以供 Home Assistant 读取的 MQTT 主题前缀，默认是 `taptap`。通常不需要更改此设置。

### 选项：`taptap_topic_name`

用于在 MQTT 中发布消息以供 Home Assistant 读取的 MQTT 主题名称，默认是 `tigo`。此名称也将用于 Home Assistant TapTap 设备和实体的名称。

### 选项：`taptap_update`

Home Assistant 实体更新的频率（秒），默认是 `10`。

### 选项：`taptap_timeout`

如果在给定的秒数内未从节点收到任何消息，并且“如果节点离线则实体不可用”设置为 true，则相应的实体将设置为不可用状态。

### 选项：`ha_entity_availability`

如果设置为 true，则如果在“可用性超时”指定的时间内未从任何给定模块收到消息，相应的实体将设置为不可用状态。

### 选项：`ha_discovery_prefix`

Home Assistant 订阅以自动发现新设备和实体的 MQTT 前缀。请参考 HA MQTT 文档，默认是：`homeassistant`。通常不需要更改此设置。

### 选项：`ha_birth_topic`

Home Assistant 在上线时宣布的 MQTT 前缀。请参考 HA MQTT 文档，默认是：`homeassistant/status`。通常不需要更改此设置。

## 更新日志与发布

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 格式。简而言之，版本将根据以下内容增加：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和包更新。

## 支持

### 有问题？

您有几个选项可以回答这些问题：

- Home Assistant [社区论坛][forum]。
- 您也可以 [打开一个 GitHub 问题][issue]。

### 警告：
如果您在 `debug` 日志级别模式下看不到任何接收到的消息（如下面的消息），**不要打开问题**——问题 100% 在您这边。如果您无论如何都打开了问题，它将被立即关闭为无效！您可以在下面的论坛链接中向社区寻求帮助。

```
DEBUG: Received taptap data
DEBUG: b'{"gateway":{"id":4609},"node":{"id":14},"timestamp":"2025-04-14T15:26:06.494986044+02:00","voltage_in":39.15,"voltage_out":38.8,"current":3.38,"dc_dc_duty_cycle":1.0,"temperature":42.0,"rssi":195}\n'

```

## 作者与贡献者

此存储库的原始设置由 [Li Tin O`ve Weedle][litin] 完成。

## 许可证

Apache 2.0

版权所有 (c) 2025 Dominik Strnad

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=taptap&repository_url=https%3A%2F%2Fgithub.com%2Flitinoveweedle%2Fhassio-addons
[contributors]: https://github.com/litinoveweedle/hassio-addons/graphs/contributors
[forum]: https://community.home-assistant.io/t/tigo-optimizer-local-monitoring-without-cloud-now-possible/869754
[litin]: https://github.com/litinoveweedle
[issue]: https://github.com/litinoveweedle/hassio-addons-dev/issues
[semver]: http://semver.org/spec/v2.0.0.html