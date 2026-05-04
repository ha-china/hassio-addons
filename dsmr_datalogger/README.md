# Home Assistant App: DSMR 数据记录器
[![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![GitHub Build Status](https://github.com/sanderdw/hassio-addons/workflows/DSMR%20Datalogger/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![addon-shield] ![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]

[addon-shield]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmain%2Fdsmr_datalogger%2Fconfig.json&query=version&style=flat-square&label=插件版本
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg?style=flat-square
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg?style=flat-square
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg?style=flat-square
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/dsmr-datalogger-add-on-for-home-assistant/181123

## 配置仓库

有关配置说明，请参阅此处：https://github.com/sanderdw/hassio-addons

## 准备 API
确保在您将转发电报的 DSMR-reader 实例上准备 API。有关配置它的更多信息，请参阅 API 设置（https://dsmr-reader.readthedocs.io/en/v5/reference/api.html）。

## 配置应用

该应用需要知道您的 P1 读取器的位置，因此，您需要配置应用以指向正确的设备。

如果您使用的是 Home Assistant，您可以在 `Supervisor -> System -> Host system -> Hardware` 页面上找到此值的正确值。

1. 更新后，请首先将配置重置为默认设置（在安装/更新后配置选项卡上的“重置为默认设置”）。
2. 在应用配置中的 `DATALOGGER_SERIAL_PORT` 选项中替换 `/dev/ttyUSBX` 并指定设备名称。
3. 在应用配置中的 `DATALOGGER_API_HOSTS` 选项中指定正确的 `http(s)://<YOUR_DSMR_HOST>:<PORT>` URL。
4. 在 `DATALOGGER_API_KEYS` 选项中替换 `<YOUR_API_KEY>` 为您的 API 密钥（有关帮助，请参阅 https://dsmr-reader.readthedocs.io/en/v4/api.html）。
5. 点击“保存”以保存应用配置。
6. 启动应用。

### 注意：对于 DSMR v2/3，请尝试使用以下配置：
```
DATALOGGER_SERIAL_BAUDRATE: '9600'
DATALOGGER_SERIAL_BYTESIZE: '7'
DATALOGGER_SERIAL_PARITY: 'E'
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
