# Valetudo RE Mapper（Home Assistant Supervisor 插件）

这是 [valetudo-mapper](https://github.com/rand256/valetudo-mapper) 的 Supervisor 插件适配版本。

[![Release][release-badge]][release]
![Addon Stage][stage-badge]

[![Donate][donation-badge]][donation-url]

## 配置

该插件的配置与 Valetudo Mapper README 中描述的 `mqtt` 部分相同。
`webserver` 部分固定为 `{ "enabled": true, "port": 3000 }`

如果您在 Home Assistant 中使用 Mosquitto 插件，可以像这样将 `core-mosquitto` 用作代理地址：`mqtt://<user>:<password>@core-mosquitto`。

## PNG 图片

生成的图像将通过 Supervisor Ingress 功能提供服务。因此，楼层平面图可以通过内置侧边栏或自动配置的 mqtt 摄像头访问。

[stage-badge]: https://img.shields.io/badge/Addon%20stage-stable-green.svg

[release-badge]: https://img.shields.io/badge/version-v1.12.0-blue.svg
[release]: https://github.com/Poeschl-HomeAssistant-Addons/valetudo-mapper/tree/v1.12.0

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=for-the-badge&logoColor=white
[donation-url]: https://www.buymeacoffee.com/Poeschl