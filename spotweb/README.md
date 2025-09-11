# Home Assistant 插件：Spotweb

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有关注我的仓库的人！要关注，请点击下面的图像，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## 关于

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的去中心化 Usenet 社区。

Spotweb 是当前可用的功能最丰富的 Spotnet 客户端之一，具有以下特点：

- 快速。
- 可从系统内部自定义过滤器系统。
- 显示和过滤自上次查看以来的新热点。
- 关注列表。
- 作为 'newznab' 供应商与 Sick Gear、Sick Beard 和 CouchPotato 集成。
- 与 Sabnzbd 和 nzbget 集成。
- 多语言支持。
- 多用户准备。

此插件由 @woutercoppens 构建，并托管在此仓库上。

## 安装

注意：此插件需要 MySQL 数据库。确保您正在运行 MariaDB 插件或使用远程 MySQL 服务器。
如果检测到 MariaDB 插件，将自动创建数据库和用户。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 确保已安装 MariaDB 插件或使用远程 MySQL 服务器。
1. 安装 Spotweb 插件。
1. 单击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 根据您的偏好小心配置插件，具体请参见官方文档。

由于有入口支持，安全和身份验证由 Home Assistant 处理。因此，Spotweb 默认情况下禁用身份验证。通过 Ingress WebUI 安装后即可使用 Spotweb。

热点每小时由后台任务获取。
在输入凭据后重启插件以强制第一次同步热点。

要导入您自己的 ownsettings.php，请将文件放入 "/config/addons_config/spotweb/ownsettings.php"。

[repository]: https://github.com/alexbelgium/hassio-addons
[spotnet]: https://github.com/spotnet/spotnet/wiki
[spotweb]: https://github.com/spotweb/spotweb