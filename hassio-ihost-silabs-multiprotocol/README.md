# Home Assistant 扩展：SiliconLabs Zigbee/OpenThread 多协议扩展

适用于基于 Silicon Labs 无线电的 Zigbee/OpenThread 多协议容器，例如 SONOFF ZBDongle-E。

![支持 armv7 架构][armv7-shield]
![支持 aarch64 架构][aarch64-shield]
![支持 amd64 架构][amd64-shield]

## 关于

此扩展允许您在单个基于 Silicon Labs 无线电上同时使用 Zigbee 和 OpenThread 协议。无线电需要安装 RCP Multi-PAN 固件以支持多个 IEEE 802.15.4 个人区域网络 (PAN)。此扩展基于 Silicon Labs 多协议扩展修改，并在 SONOFF [ZBDongle-E](https://sonoff.tech/products/sonoff-zigbee-3-0-usb-dongle-plus-zbdongle-e) 和 [iHost MG21 芯片](https://sonoff.tech/products/sonoff-ihost-smart-home-hub) 上进行了成功测试。

[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg

### 注意事项

1. 由于 ZHA 集成当前仅支持 EZSP v14，而 Multi-PAN 固件基于 EZSP v16，因此只能与 Zigbee2MQTT (Z2M) 一起使用。
2. 在使用此扩展之前，您必须首先通过 [SONOFF Dongle Flasher][sonoff-dongle-flasher] 或 [SONOFF Dongle Flasher 扩展](https://github.com/iHost-Open-Source-Project/hassio-ihost-addon/tree/master/hassio-ihost-sonoff-dongle-flasher)刷写 Multi-PAN 固件。

[sonoff-dongle-flasher]: https://dongle.sonoff.tech/sonoff-dongle-flasher
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
