# rtl_433 Home Assistant 插件

## 简介

此插件是围绕优秀的 [rtl_433](https://github.com/merbanan/rtl_433) 项目的一个简单封装，它可以通过 [支持的 SDR 拖尾](https://triq.org/rtl_433/HARDWARE.html) 接收无线传感器数据，解码并以多种格式输出，包括 JSON 和 MQTT。rtl_433 能够理解的无线传感器传输数据主要在 433.92 MHz、868 MHz、315 MHz、345 MHz 和 915 MHz ISM 频段。

[查看 rtl_433 文档](https://triq.org/rtl_433)

## 工作原理

此插件所做的唯一事情是在 Home Assistant OS 管理员下运行 rtl_433。您需要做的就是提供一个配置文件。

默认情况下，rtl_433 将接收到的数据打印到终端 - 您需要配置它将数据发布到 MQTT，以便 Home Assistant 可以访问，这可以在配置文件中用一行命令完成。

一旦您将 rtl_433 传感器数据放入 MQTT，您就需要帮助 Home Assistant 发现并理解它。您可以通过以下几种方式完成：

  * 在 HA 中手动配置 `sensors` 和 `binary_sensors` 并将它们链接到从 rtl_433 出来的适当 MQTT 主题（[链接 MQTT 主题](https://www.home-assistant.io/integrations/sensor.mqtt/)），
  * 手动运行 [rtl_433_mqtt_hass.py](https://github.com/merbanan/rtl_433/tree/master/examples/rtl_433_mqtt_hass.py) 脚本或按计划运行以自动完成大部分配置，或
  * 安装 [rtl_433 MQTT 自动发现 Home Assistant 插件](https://github.com/pbkhrv/rtl_433-hass-addons/tree/main/rtl_433_mqtt_autodiscovery)，它会为您运行 rtl_433_mqtt_hass.py。

## 先决条件

要使用此插件，您需要以下内容：

 1. [一个由 rtl_433 支持的 SDR 拖尾](https://triq.org/rtl_433/HARDWARE.html)。

 2. 在连接有 SDR 拖尾的机器上运行的 Home Assistant OS。

 3. 一些由 rtl_433 支持的无线传感器。支持的协议和设备的完整列表可以在 [rtl_433 的 README](https://github.com/merbanan/rtl_433/blob/master/README.md) 中的 "支持的设备协议" 部分找到。

## 安装

 1. 创建一个满足您需求的 rtl_433 配置文件。您可能需要在除运行 Home Assistant OS 的计算机以外的计算机上这样做，这样您可以自由地实验并迭代，直到找到一个工作良好的配置。下面将提供更多详细信息。

 2. 使用您喜欢的任何方法（通过 Samba 插件、ssh/scp、文件编辑器插件等）将配置文件上传到 Home Assistant 的 "/config" 目录。

 3. 安装插件。

 5. 将您的 SDR 拖尾连接到运行插件的机器。

 5. 启动插件。将在 `/config/rtl_433/` 中创建一个默认配置。要添加或编辑其他配置，在该目录中创建多个 `.conf.template` 文件。

 6. 启动插件并检查日志。

## 配置

对于“零配置”设置，安装 [Mosquitto 代理](https://github.com/home-assistant/addons/blob/master/mosquitto/DOCS.md) 插件。虽然其他代理可能也可以工作，但它们尚未经过测试，将需要手动设置。一旦插件安装完毕，启动或重新启动 rtl_433 和 rtl_433_mqtt_autodiscovery 插件以开始捕获已知的 433 MHz 协议。

对于更高级的配置，请查看 rtl_433 源代码中包含的示例配置文件：[rtl_433.example.conf](https://github.com/merbanan/rtl_433/blob/master/conf/rtl_433.example.conf)

请注意，由于配置文件中包含 bash 变量，**美元符号和其他特殊 shell 字符需要转义**。例如，要在配置文件中使用字面字符串 `$GPRMC`，请使用 `\$GPRMC`。

`retain` 选项控制 MQTT 的 `retain` 标志默认启用或禁用。可以在每个无线电的基础上通过在 `output` 设置中将 `retain` 设置为 `true` 或 `false` 来覆盖它。

在手动配置时，假设您打算将 rtl_433 数据放入 Home Assistant，您在配置文件中需要指定的绝对最小信息是 [MQTT 连接和身份验证信息](https://triq.org/rtl_433/OPERATION.html#mqtt-output)：

```
output      mqtt://HOST:PORT,user=XXXX,pass=YYYYYYY
```

rtl_433 默认监听 433.92MHz，但即使您需要这样做，明确指定频率也可能是一个好主意，以避免混淆：

```
frequency   433.92M
```

您可能还希望缩小 rtl_433 应尝试解码的协议列表。完整列表可以在 [README](https://github.com/merbanan/rtl_433/blob/master/README.md) 中的 "支持的设备协议" 部分找到。假设您只想监听 Acurite 592TXR 温湿度传感器：

```
protocol    40
```

最后但并非最不重要的是，如果您决定使用 MQTT 自动发现脚本或插件，其文档建议将所有来自 rtl_433 的数据中的单位转换为 SI：

```
convert     si
```

假设您只有一个 USB 拖尾连接，并且 rtl_433 能够自动找到它，我们得到的最小 rtl_433 配置文件如下所示：

```
output      mqtt://HOST:PORT,user=XXXX,pass=YYYYYYY

frequency   433.92M
protocol    40

convert     si
```

请查看 [官方 rtl_433 文档](https://triq.org/rtl_433) 和 [配置文件示例](https://github.com/merbanan/rtl_433/tree/master/conf) 以获取更多信息。

## 致谢

此插件基于 James Fry 的 [rtl4332mqtt Hass.IO 插件](https://github.com/james-fry/hassio-addons/tree/master/rtl4332mqtt)，该插件又基于 Chris Kacerguis 的项目：[https://github.com/chriskacerguis/honeywell2mqtt](https://github.com/chriskacerguis/honeywell2mqtt)，该项目又基于 Marco Verleun 的 rtl2mqtt 映像：[https://github.com/roflmao/rtl2mqtt](https://github.com/roflmao/rtl2mqtt).
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
