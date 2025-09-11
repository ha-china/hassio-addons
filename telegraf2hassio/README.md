# Telegraf2Hassio

此插件将允许您直接在 Home Assistant 控制面板上显示正在运行的实例的 Telegraf 统计信息，使用自发现的 MQTT 传感器。

与市面上大多数 Telegraf 集成方法不同，此插件不需要 InfluxDB 或 Grafana 仪表板来显示 Telegraf 的数据。
相反，它将 Telegraf 的原生 MQTT 消息转换为 Home Assistant 自发现的消息，从而可以轻松检测和呈现您的数据。

## 安装

要在您自己的 Home Assistant 设置中使用此存储库，请按照 [官方说明](https://www.home-assistant.io/common-tasks/supervised/#installing-third-party-add-ons) 配置它。

以下是此插件源代码在 GitHub 上的链接 [https://github.com/joaofl/hassio-addons](https://github.com/joaofl/hassio-addons)

## 配置

可用的配置选项如下所示。确保根据您的设置进行编辑：

```yaml
options:
  mqtt_broker: localhost
  mqtt_port: 1883
  mqtt_user: mqtt_user_here
  mqtt_pass: mqtt_pass_here
  telegraf_topic: telegraf/#
  calc_rate: host_sensor_measurement_1,host_sensor_measurement_2
  log_level: info
```

`calc_rate` 是一个可选参数，但它允许在 Telegraf 已提供的测量数据之上添加计算得出的速率测量。
例如，如果您想知道某个以太网端口的数据速率，则 `calc_rate` 设置应如下所示：

```yaml
myserver_net_enp2s0_12_bytes_recv,nuvem_net_enp2s0_12_bytes_sent
```
其中 `myserver` 是 Telegraf 客户端名称，`net` 是传感器名称，`enp2s0_12` 是设备名称，后跟其唯一 ID (`12`)，最后是测量名称 `bytes_sent`。
将上述设置添加到 `calc_rate`（根据您的设置名称进行适配）后，将通过 MQTT 报告另一个测量，其名称以 `_dt` 结尾，包含特定测量的变化速率。
可以添加多个速率测量，以逗号分隔。

如果您不确定要期待的名称，可以启动插件，并在接收第一批数据后检查日志。它将显示主机名以及发现的所有传感器和测量。

## 示例仪表板

以下是我快速创建的示例仪表板。我真的希望看到一些更酷的仪表板，一旦一些专注的人开始进行尝试。

![示例仪表板](https://github.com/joaofl/hassio-addons/blob/master/telegraf2hassio/resources/dashboard-example.png?raw=true)

在这里也可以找到它的源代码：[example_dashboard.yaml](https://github.com/joaofl/hassio-addons/blob/master/telegraf2hassio/resources/example_dashboard.yaml)

以及我服务器端对应的 Telegraf 配置：[telegraf.conf](https://github.com/joaofl/hassio-addons/blob/master/telegraf2hassio/resources/telegraf.conf)
请注意，这个配置文件经过简化，仅显示原始文件中未注释的行，使用命令 `cat /etc/telegraf/telegraf.conf | grep -v "#" | grep .`

其他插件和传感器可能与此插件无缝兼容，但我无法保证，因为这是我到目前为止测试的唯一配置。如果出现问题，请随时提交 PR 并为此插件做出贡献 :)