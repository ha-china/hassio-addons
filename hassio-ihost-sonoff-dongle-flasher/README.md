# SONOFF Dongle Flasher

![Supports armv7 Architecture](https://img.shields.io/badge/armv7-yes-green.svg) ![Supports aarch64 Architecture](https://img.shields.io/badge/aarch64-yes-green.svg) ![Supports amd64 Architecture](https://img.shields.io/badge/amd64-yes-green.svg)
 
## 关于

SONOFF Dongle Flasher 支持iHost MG21芯片和SONOFF Dongle系列（ZBDongle-P, ZBDongle-E, Dongle-M, Dongle-PMG24和Dongle-LMG21）的在线固件刷新。

除了SONOFF Dongle Flasher插件，我们还提供了一个[容器版本](https://hub.docker.com/r/ewelink/sonoff-dongle-flasher)。

## 前置条件

在使用插件之前，请确保串口未被占用（通常被Zigbee2MQTT或ZHA等服务占用）。
在固件刷新过程中，插件将尝试连接到设备并自动检查串口是否被占用。
如果被占用，插件将尝试为您停止冲突的服务。
[操作指南 >](https://github.com/iHost-Open-Source-Project/ha-operating-system?tab=readme-ov-file#readme)


## 安装
1. 进入插件商店 → 点击右上角的**更多**按钮（⋮）→ 选择**仓库**  
2. 粘贴以下URL：  
   [https://github.com/iHost-Open-Source-Project/hassio-ihost-addon](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon)  
3. 或者，直接点击下方按钮自动添加：

[![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FiHost-Open-Source-Project%2Fhassio-ihost-addon)

## 如何使用

有关如何使用SONOFF Dongle Flasher插件的详细信息，请参阅“文档”。
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
