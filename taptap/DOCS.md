# Li Tin O`ve Weedle Assistant 插件: TapTap - Tigo CCA 到 MQTT

这个插件基于[Tigo TAP和CCA组件之间的反向工程协议](https://github.com/litinoveweedle/taptap)项目。我能够创建[mqtt桥接](https://github.com/litinoveweedle/taptap-mqtt)并将其打包为Home Assistant插件TapTap。此插件允许完全在本地获取来自Tigo光伏优化器模块的详细信息 - 不需要Tigo云，同时刷新时间为10秒。该插件使用Home Assistant的MQTT自动发现功能，因此它将在HA中自动设置所有提供的传感器。:wink:


## 安装先决条件

  - MQTT代理，例如[Mosquitto插件](https://www.home-assistant.io/integrations/mqtt/#setting-up-a-broker)
  - Home Assistant的[MQTT集成](https://www.home-assistant.io/integrations/mqtt/)
  - Modbus RS485至串行/以太网转换器，例如[WaveShare模型](https://www.waveshare.com/product/iot-communication/wired-comm-converter/ethernet-to-uart-rs232-rs485.htm)


## Modbus到以太网/串行连接Tigo CCA

### Modbus到以太网/串行转换器必须连接到[Tigo CCA网关](https://cs.tigoenergy.com/product/cloud-connect-advanced):
  1. 将转换器连接到Tigo CCA网关上标记为Gateway的连接器
  2. 在此连接器中会有从屋顶连接的Tigo TAP的电线
  3. 将转换器的电线与Tigo TAP现有电线一起连接（并联）
  4. 使用3根线 - `A`、`B`和`-`/`⏚`：连接`A`到`A`，`B`到`B`，`-`/`⏚`到`-`/`⏚`
  5. 电线应尽可能短 - 将转换器安装靠近Tigo CCA网关

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
### Modbus到以太网转换器需要一些额外配置：
  1. 将转换器连接到您的LAN网络，以便可以从Home Assistant访问
  2. 为转换器分配IP地址（自动使用DHCP或手动静态）
  3. 将Modbus通信设置为38400b，数据位8，停止位1，流控制无
  4. 将转换器工作模式设置为Modbus TCP服务器
  5. 将协议设置为Modbus TCP（而不是Modbus TCP到RTU），对于Waveshare转换器，此设置位于网页配置页面的“多主机设置”下，协议设置为“无”
  6. 记住转换器的IP地址和TCP端口，以便稍后在插件配置中设置

每个Modbus到以太网转换器都有不同的设置，您如果没有看到从您的安装中收集到的任何数据，几乎可以肯定是您在转换器连接或配置上有问题！请参见[此处的注意事项](#warning)!

## 插件安装

在Home Assistant中安装TapTap插件

1. 点击下面的Home Assistant我的按钮，以在您的Home Assistant实例中打开该插件。

   [![在您的Home Assistant实例中打开此插件。][addon-badge]][addon]

2. 点击“安装”按钮以安装插件。
3. 启动“示例”插件。
4. 检查“示例”插件的日志以查看其运行情况。


## 配置

TapTap插件示例配置：

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

### 选项: `log_level`

`log_level`选项控制插件的日志输出级别，可以更改为更详细或更少详细，这可能在您处理未知问题时会有所帮助。可能的值有：

- `trace`: 显示每个细节，如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 正常（通常）有趣的事件。
- `warning`: 非错误的异常事件。
- `error`: 运行时错误，不需要立即采取行动。
- `fatal`: 发生了严重错误。插件变得不可用。

请注意，每个级别自动包含来自更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐设置，除非您在排除故障。

### 选项: `mqtt_server`

MQTT代理的IP地址或完全合格域名（FQDN）。如果您运行Mosquitto插件，则将是您的HomeAssistant的IP地址。

### 选项: `mqtt_port`

MQTT代理TCP端口，默认是`1883`。

### 选项: `mqtt_qos`

MQTT QoS配置 - 请参考Home Assistant MQTT文档，默认`1`。

### 选项: `mqtt_timeout`

MQTT代理连接超时 - 请参考Home Assistant MQTT文档，默认`5`。

### 选项: `mqtt_user`

连接到服务器的MQTT代理用户名。

### 选项: `mqtt_pass`

连接到服务器的MQTT代理密码。

### 选项: `taptap_serial`

如果您使用Modbus到USB/串行转换器连接到Home Assistant服务器，那么这将是其设备文件（可能是/dev/ttyUSB0或/dev/ttyACM0）。如果您使用Modbus到以太网转换器，则此项不能填写！

### 选项: `taptap_address`

如果您使用Modbus到以太网转换器连接到Home Assistant服务器，那么这将是其IP地址。如果您使用Modbus到串行/USB转换器，则此项不能填写！

### 选项: `taptap_port`

如果您使用Modbus到以太网转换器连接到Home Assistant服务器，那么这将是其TCP端口，默认是`502`。

### 选项: `taptap_module_ids`

以逗号分隔的Tigo模块ID列表，因为这些将通过Modbus进行通信。此ID通常是从2开始的数字，每个下一个模块ID加1。如果您用另一个新模块替换一个Tigo模块，则将获得新的ID。插件会记录任何来自未知ID（不在此列出）的消息。

### 选项: `taptap_module_names`

以逗号分隔的Tigo模块名称列表，您希望以相应的实体名称在Home Assistant中看到这些名称。以与ID相同的顺序输入。

### 选项: `taptap_topic_prefix`

MQTT主题前缀，用于在MQTT上发布消息，以便Home Assistant可以读取这些消息，默认是`taptap`。通常不需要更改此设置。

### 选项: `taptap_topic_name`

MQTT主题名称，用于在MQTT上发布消息，以便Home Assistant可以读取这些消息，默认是`tigo`。此名称也将用于Home Assistant taptap设备和实体的名称。

### 选项: `taptap_update`

Home Assistant实体更新时间（以秒为单位），默认是`10`。

### 选项: `taptap_timeout`

如果在最近给定的秒数内没有收到来自节点的消息，并且“节点离线时实体不可用”设置为true，则相应的实体将设置为不可用状态。

### 选项: `ha_entity_availability`

如果设置为true，则如果在“可用性超时”指定的时间内未收到来自任何给定模块的消息，则相应的实体将设置为不可用状态。

### 选项: `ha_discovery_prefix`

MQTT前缀，Home Assistant订阅用于自动发现新设备和实体。请参阅HA MQTT文档，默认是：`homeassistant`。通常不需要更改此设置。

### 选项: `ha_birth_topic`

MQTT前缀，Home Assistant上线时宣布。请参阅HA MQTT文档，默认是：`homeassistant/status`。通常不需要更改此设置。


## 更新日志与发布

发布基于[语义版本控制][semver]，并使用格式`MAJOR.MINOR.PATCH`。简而言之，版本将基于以下内容增加：

- `MAJOR`: 不兼容或重大更改。
- `MINOR`: 向后兼容的新功能和增强。
- `PATCH`: 向后兼容的bug修复和包更新。


## 支持

### 有问题吗？

您有几个选项可以解决这些问题：

- Home Assistant[社区论坛][forum]。
- 您还可以在这里[打开一个问题][issue] GitHub。

### 警告：
如果您在`debug`日志级别模式下没有看到任何接收的消息（如下面的消息），**请勿打开问题** - 问题100%在您这边。如果您仍然打开问题，将立即被关闭为无效！您可以在下面的论坛链接中向社区寻求帮助。

```
DEBUG: Received taptap data
DEBUG: b'{"gateway":{"id":4609},"node":{"id":14},"timestamp":"2025-04-14T15:26:06.494986044+02:00","voltage_in":39.15,"voltage_out":38.8,"current":3.38,"dc_dc_duty_cycle":1.0,"temperature":42.0,"rssi":195}\n'

```

## 作者与贡献者

本仓库的原始设置由[Li Tin O`ve Weedle][litin]提供。


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