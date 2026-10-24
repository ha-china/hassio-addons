# ICantBelieveItsNotValetudo 插件

这是 [ICantBelieveItsNotValetudo](https://github.com/Hypfer/ICantBelieveItsNotValetudo) 作为 Supervisor 插件的适配版本。
截至目前，ICantBelieveItsNotValetudo 已被归档，但该插件将尽量保持运行最新版本。

[![Release][release-badge]][release]
![Addon Stage][stage-badge]

[![Donate][donation-badge]][donation-url]

## 配置

配置键与 [ICantBelieveItsNotValetudo 的配置](https://github.com/Hypfer/ICantBelieveItsNotValetudo/blob/main/README.md) 一致。
请从那里获取它们的含义。
插件的结构与官方配置文件略有不同是正常的，这因为 Supervisor 插件的配置结构是必要的。

如果您在 Home Assistant 中使用 Mosquitto 插件，可以将 `core-mosquitto` 用作代理地址，如下所示：`mqtt://<user>:<password>@core-mosquitto`。请记得设置适当的 `mapDataTopic` 值。从 Valetudo 2021.04.0 开始，它为 `${topicPrefix}/${identifier}/MapData/map-data`，使用默认值时等于 `valetudo/rockrobo/MapData/map-data`。

## PNG 图像

生成的图像将通过 Supervisor Ingress 功能提供服务。因此，楼层平面图可以通过内置侧边栏和自动配置的 mqtt 摄像头访问。

[stage-badge]: https://img.shields.io/badge/Addon%20stage-stable-green.svg

[release-badge]: https://img.shields.io/badge/version-v4.1.0-blue.svg
[release]: https://github.com/Poeschl-HomeAssistant-Addons/icantbelieveitsnotvaletudo/tree/v4.1.0

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=for-the-badge&logoColor=white
[donation-url]: https://www.buymeacoffee.com/Poeschl