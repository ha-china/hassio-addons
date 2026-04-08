# SONOFF Dongle Flasher

![支持 armv7 架构](https://img.shields.io/badge/armv7-yes-green.svg) ![支持 aarch64 架构](https://img.shields.io/badge/aarch64-yes-green.svg) ![支持 amd64 架构](https://img.shields.io/badge/amd64-yes-green.svg)
 
## 关于

SONOFF Dongle Flasher 支持对 iHost MG21 芯片和 SONOFF Dongle 系列设备（ZBDongle-P、ZBDongle-E、Dongle-M、Dongle-PMG24、Dongle-LMG21 和 Dongle-PZG23）进行在线固件更新。

除了 SONOFF Dongle Flasher 扩展插件外，我们还提供了 [容器版本](https://hub.docker.com/r/ewelink/sonoff-dongle-flasher)。

## 先决条件

在使用此插件之前，请确保串行端口未被占用（它通常被 Zigbee2MQTT 或 ZHA 等服务占用）。
在固件更新过程中，插件将尝试连接到设备并自动检查串行端口是否被占用。
如果被占用，插件将尝试为您停止冲突的服务。
[操作指南 >](https://github.com/iHost-Open-Source-Project/ha-operating-system?tab=readme-ov-file#readme)


## 安装
1. 打开插件商店 → 点击右上角的 **更多** 按钮 (⋮) → 选择 **仓库**  
2. 粘贴以下 URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下面的按钮自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 使用方法

请参阅“文档”部分以获取有关如何使用 SONOFF Dongle Flasher 插件的详细信息。
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
