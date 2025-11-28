# Matter Bridge for iHost

![Supports armv7 Architecture](https://img.shields.io/badge/armv7-yes-green.svg)

## About

Matter Bridge for iHost add-on 暴露 Home Assistant 设备的实体为 Matter 设备，使其能够与 Matter 平台集成，例如 Apple Home、Google Home 和 Amazon Alexa。  
此 add-on 基于 iHost Matter Bridge，并已通过 Matter 认证，以确保协议兼容性和长期可用性。

同时，它兼容 Web 和移动终端。

## Prerequisites

- Matter Bridge add-on 仅适用于 HA over iHost 项目，允许用户将 Home Assistant 设备暴露为 Matter 设备，并将其同步到受支持的 Matter 平台进行控制。
- Home Assistant OS 版本必须为 15.2.1 或更高。

## Installation
1. 前往 Add-on Store → 点击右上角的 **More** 按钮 (⋮) → 选择 **Repositories**  
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下面的按钮自动添加：

[![Add Repository](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## How to use
See “[Documentation](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon/blob/master/hassio-ihost-matter-bridge-addon/DOCS.md)” for details on how to use the SONOFF Dongle Flasher For iHost add-on..


## Supported entities
-   开关
-   二进制传感器
-   灯光
-   事件 
-   百叶窗 
-   气候控制

### ⚠️ Note

由于不同智能家居平台在实现 Matter 标准时存在差异，**相同的 Matter 设备在不同生态系统中可能表现不同**。这包括但不限于：

1. **可调白炽灯 - 色温未同步。**
   当可调白炽灯的色温发生变化时，更新后的值未正确反映在 Apple Home 应用中。

2. **RGB 灯 - 颜色变化未同步。**
   更改 RGB 灯的颜色后，更新后的颜色未正确同步到 Apple Home 和 Google Home 应用。

3. **设备状态未实时更新。**
   在 Alexa 和 Google Home 应用中，当设备从其他平台进行控制时，设备状态不会自动更新。您需要手动刷新设备列表或打开设备详细信息页面以查看当前状态。

4. **灯光亮度百分比偏差。**
   在 SmartThings 应用中，显示的灯光设备亮度百分比始终比实际亮度高约 1%。

5. **窗帘位置百分比跨平台反转。**
   窗帘开百分比在不同平台上的解释不同。例如，在 Alexa 中显示为 30% 开的窗帘，在 Apple Home、SmartThings 和 Google Home 中会显示为 70% 开。

6. **设备在 SmartThings 应用中重新同步后未显示。**
   如果已同步的设备被移除并重新同步，它可能不会立即在 SmartThings 应用中显示。需要重启 SmartThings Hub 才能解决此问题。

![image](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/refs/heads/master/hassio-ihost-matter-bridge-addon/images/support-devices.png)
![image](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/refs/heads/master/hassio-ihost-matter-bridge-addon/images/readme-1.png)
![image](https://raw.githubusercontent.com/iHost-Open-Source-Project/hassio-ihost-addon/refs/heads/master/hassio-ihost-matter-bridge-addon/images/readme-1.png)
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
