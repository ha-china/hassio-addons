# pigpio

将C控制库 [pigpio](https://github.com/joan2937/pigpio) 封装在一个Home Assistant插件中，以便轻松安装。

[![Release][release-badge]][release]
![插件阶段][stage-badge]

[![赞助][donation-badge]][donation-url]

## 使用方法

该插件运行pigpio守护进程，该守护进程监听HTTP命令并相应地控制Raspberry Pi上的GPIO（目前仅支持PI 4）。
运行此插件并在Home Assistant配置中使用 [remote_rpi_pgio集成](https://www.home-assistant.io/integrations/remote_rpi_gpio/) 指向 `localhost`，将连接这两个世界。

要为守护进程使用附加选项，请使用可选插件设置 `additional_options`。
选项 `-g -f` 将始终设置！

## 安全性

它访问主机的 `/dev/mem` 并完全访问原始IO数据。


[stage-badge]: https://img.shields.io/badge/插件阶段-stable-green.svg

[release-badge]: https://img.shields.io/badge/版本-v2.0.0-blue.svg
[release]: https://github.com/Poeschl-HomeAssistant-Addons/pigpio/tree/v2.0.0

[donation-badge]: https://img.shields.io/badge/给我买杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=for-the-badge&logoColor=white
[donation-url]: https://www.buymeacoffee.com/Poeschl