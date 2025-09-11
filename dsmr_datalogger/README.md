# Home Assistant 插件：DSMR 数据记录仪
[![打开您的 Home Assistant 实例，并显示添加插件库对话框，预填特定的库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons)
[![社区论坛][forum-shield]][forum]

DSMR 的数据记录仪仅选项 (https://dsmr-reader.readthedocs.io)。这将安装一个数据记录仪，该记录仪将通过 API 将电报转发到另一个完全安装的 DSMR-reader 实例。

[![GitHub 构建状态](https://github.com/sanderdw/hassio-addons/workflows/DSMR%20Datalogger/badge.svg?logo=github)](https://github.com/sanderdw/hassio-addons/actions) ![addon-shield] ![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]

[addon-shield]: https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fgithub.com%2Fsanderdw%2Fhassio-addons%2Fraw%2Frefs%2Fheads%2Fmaster%2Fdsmr_datalogger%2Fconfig.json&query=version&style=flat-square&label=Addon%20Version
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg?style=flat-square
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg?style=flat-square
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg?style=flat-square
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg?style=flat-square
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg?style=flat-square
[forum-shield]: https://img.shields.io/badge/community-forum-brightgreen.svg?style=for-the-badge
[forum]: https://community.home-assistant.io/t/dsmr-datalogger-add-on-for-home-assistant/181123

## 配置库

请参见此处的配置说明：https://github.com/sanderdw/hassio-addons

## 准备 API
确保在您要转发电报的 DSMR-reader 实例上准备 API。有关配置的更多信息，请参阅 API 设置 (https://dsmr-reader.readthedocs.io/en/v5/reference/api.html)。

## 配置插件

该插件需要知道您的 P1 读取器的位置，因此，
您需要配置插件以指向正确的设备。

如果您使用的是 Home Assistant，您可能会在
`Supervisor -> System -> Host system -> Hardware` 页面找到该正确值。

1. 更新后，请先将配置重置为默认值（在安装/更新后“重置为默认值”在配置选项卡上）。
2. 在插件配置中的 `DATALOGGER_SERIAL_PORT` 选项中替换 `/dev/ttyUSBX` 并指定
   设备名称。
3. 在插件配置中的 `DATALOGGER_API_HOSTS` 选项中指定正确的 `http(s)://<YOUR_DSMR_HOST>:<PORT>` URL。
4. 在 `DATALOGGER_API_KEYS` 选项中替换 `<YOUR_API_KEY>` 为您的 API 密钥（请参见 https://dsmr-reader.readthedocs.io/en/v4/api.html 获取帮助）。
5. 点击“保存”以保存插件配置。
6. 启动插件。

### DSMR v2/3 的注意事项，请尝试使用以下配置：
```
DATALOGGER_SERIAL_BAUDRATE: '9600'
DATALOGGER_SERIAL_BYTESIZE: '7'
DATALOGGER_SERIAL_PARITY: 'E'