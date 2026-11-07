# Telegraf2Hassio

此插件允许您在Home Assistant仪表板上直接显示运行实例的Telegraf统计信息，使用可自发现的MQTT传感器。

与大多数Telegraf集成方法不同，此插件无需InfluxDB或Grafana仪表板即可显示Telegraf的数据。
相反，它将Telegraf的本地MQTT消息转换为Home Assistant可自发现的格式，这样它就可以轻松检测并呈现您的数据。

## 安装

要使用此存储库与您自己的Home Assistant设置一起使用，请按照[官方说明](https://www.home-assistant.io/common-tasks/supervised/#installing-third-party-add-ons)配置它。

以下此插件源代码的链接 @github [https://github.com/joaofl/hassio-addons](https://github.com/joaofl/hassio-addons)

## 配置

以下列出了可用的配置选项。请确保根据您的设置进行编辑：

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

`calc_rate` 是一个可选参数，但它允许在Telegraf已提供的测量值之上添加计算速率测量值。
例如，如果您想了解特定以太网端口的速率，则 `calc_rate` 设置应如下所示：

```yaml
myserver_net_enp2s0_12_bytes_recv,nuvem_net_enp2s0_12_bytes_sent
```
其中 `myserver` 是Telegraf客户端名称，`net` 是传感器名称，`enp2s0_12` 是设备名称，后跟其唯一ID（`12`），最后是测量名称 `bytes_sent`。
将上述设置添加到 `calc_rate`（根据您的设置名称进行调整），将通过MQTT宣布另一个测量值，名称以 `_dt` 结尾，包含该特定测量的计算速率变化。
可以添加多个速率测量值，用逗号分隔。

如果您不确定预期的名称，请启动插件，并在接收到第一批数据后检查日志。它将显示主机名称以及所有发现的所有传感器和测量值。

## 示例仪表板

以下是一个我快速创建的示例仪表板。我真的希望看到一些更酷的仪表板，一旦有专门的开始尝试使用它。

![示例仪表板](https://github.com/joaofl/hassio-addons/blob/master/telegraf2hassio/resources/dashboard-example.png?raw=true)

您也可以在这里找到其源代码：[example_dashboard.yaml](https://github.com/joaofl/hassio-addons/blob/master/telegraf2hassio/resources/example_dashboard.yaml)

以及服务器端相应的Telegraf配置：[telegraf.conf](https://github.com/joaofl/hassio-addons/blob/master/telegraf2hassio/resources/telegraf.conf)
请注意，这是一个简化后的配置文件，仅显示原始文件中取消注释的行，通过 `cat /etc/telegraf/telegraf.conf | grep -v "#" | grep .`

很可能其他插件和传感器将直接与这个插件一起工作，但我不能保证，因为这是我迄今为止测试的唯一配置。如果出现问题，请随时创建PR并为此插件做出贡献：）：）
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
