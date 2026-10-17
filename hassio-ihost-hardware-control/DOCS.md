# iHost 硬件控制插件

## 简介

iHost 硬件控制插件在 iHost 上注册按钮和指示器作为 Home Assistant 中的实体，允许用户直接在 Home Assistant 中为按钮和指示器实体配置自动化规则，以实现更灵活的硬件交互控制。

## 前提条件

需要在预刷写的 microSD 卡上启动并运行 iHost 以使用 **iHost 硬件控制**插件，因为它启用了 iHost 的按钮和指示器功能。有关更多详细信息，请参阅 [操作指南](https://github.com/iHost-Open-Source-Project/ha-operating-system?tab=readme-ov-file#readme)。

## 安装 iHost 硬件控制插件

#### 安装 **iHost 硬件控制**插件

1. 在插件商店中搜索 **iHost 硬件控制**；
2. 点击 **安装**；

![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/install.png)

3. 等待安装完成。

#### 启动 **iHost 硬件控制**插件

安装完成后点击“启动”按钮，并等待启动完成。

由于 iHost 硬件控制插件依赖于 MQTT，因此当您启动 iHost 硬件控制插件时，Mosquitto 前端插件会自动为您安装并启动，您需要等待几分钟才能在插件列表中看到 Mosquitto 前端插件。

![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/start.png)

![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/addons.png)



### 安装 MQTT 集成

请进入设置 -> 设备与服务 -> 点击 MQTT 集成的添加按钮，并等待添加完成。

![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/mqtt.png)

![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/config_mqtt.png)

### 在 MQTT 集成中检查 iHost 按钮和指示器

按照上述说明成功安装并启动 **iHost 硬件控制**插件后，您可以在 **MQTT** 集成中看到 iHost 上的按钮和指示器。
![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/mqtt_devices.png)

#### iHost 按钮及其实体

iHost 顶部有 4 个按钮：电源、配对、静音和安全。iHost 侧面的小孔中有一个重置按钮，这 5 个按钮都作为一个名为 **iHost 按钮**的设备存在，具有 5 个 **事件**实体，如下所示：

注意：iHost 电源按钮按住 10 秒将硬件关机。

![image-20250411154900741](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/ihost_buttons.png)

![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/buttons_device.png)

#### iHost 指示器及其实体

iHost 顶部的每个按钮都有一个蓝色 LED 指示器。iHost 侧面有一个 LED 灯带。这 5 个指示器都作为一个名为 **iHost 指示器**的设备存在，具有 5 个 **选择**实体，如下所示：

![image-20250411155046569](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/v113.png)

![img](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/master/hassio-ihost-hardware-control/images/indicators_device.png)

## 维基
[如何使用？](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon/wiki/hassio-ihost-hardware-control)