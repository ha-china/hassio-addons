# Docker 容器状态

它包含 [Docker 容器状态](https://github.com/virtualzone/docker-container-stats)，用于监控所有运行的容器/插件。

[![发布][release-badge]][release]
![插件阶段][stage-badge]

[![捐赠][donation-badge]][donation-url]

## 🧪 实验性插件

在长期使用过程中，我注意到当获取一周的数据时，插件会占满所有可用内存。
特别是在使用 Home Assistant 的 Raspberry Pi 上，这意味着几分钟内就会崩溃。
__使用此插件需自担风险！__

## 安全

由于插件访问 Docker API，因此安全评级较低。
不幸的是，不禁用插件的 *保护模式*就无法访问 Docker API。
从技术上讲，禁用后，插件可以访问和控制其他插件以及 HA 监督系统上的核心。
但没有它，我们无法检索运行容器的统计信息，也就无法正常使用此插件。

[stage-badge]: https://img.shields.io/badge/Addon%20stage-deprecated-lightgrey.svg

[release-badge]: https://img.shields.io/badge/version-v1.5.0-blue.svg
[release]: https://github.com/Poeschl-HomeAssistant-Addons/container-stats/tree/v1.5.0

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=for-the-badge&logoColor=white
[donation-url]: https://www.buymeacoffee.com/Poeschl