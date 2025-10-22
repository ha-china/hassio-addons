## ⚠️ 开启请求 : [✨ [请求] [spotweb] 自己的 dbsettings.inc.php (开启于 2025-04-29)](https://github.com/alexbelgium/hassio-addons/issues/1850) 由 [@wimb0](https://github.com/wimb0)
# Home Assistant 插件：Spotweb

![捐赠](https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white) ![捐赠](https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)

![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e) ![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base) ![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库点赞！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

![@alexbelgium/hassio-addons 的星标者仓库](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg) ![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## 关于

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的去中心化 usenet 社区。

Spotweb 是目前最功能丰富的 Spotnet 客户端之一，具有以下功能：

- 快速。
- 可以在系统内部自定义过滤器。
- 自上次查看后显示和过滤新帖子。
- 观察列表。
- 与 Sick Gear、Sick beard 和 CouchPotato 作为 'newznab' 提供商集成。
- Sabnzbd 和 nzbget 集成。
- 多语言。
- 多用户准备。

这个插件由 @woutercoppens 构建，并托管在这个仓库中。

## 安装

注意：这个插件需要一个 mysql 数据库。确保你运行了 MariaDB 插件，或者使用远程 MySQL 服务器。
如果检测到 MariaDB 插件，将自动创建数据库和用户。

1. 将我的 Hass.io 插件仓库 [repository] 添加到你的 Hass.io 实例。
1. 确保安装了 MariaDB 插件，或者使用远程 MySQL 服务器。
1. 安装 Spotweb 插件。
1. 点击 `保存` 按钮来存储你的配置。
1. 启动插件。
1. 检查插件的日志，看看一切是否正常。
1. 仔细配置插件以符合你的偏好，请参阅官方文档。

由于 Ingress 支持和安全认证由 Home Assistant 处理，因此 Spotweb 的认证默认禁用。安装后通过 Ingress WebUI 即可使用 Spotweb。

每小时通过后台任务检索帖子。
输入你的凭证后重启插件，以强制执行帖子的第一次同步。

要导入你自己的 settings.php，将文件放在 "/config/addons_config/spotweb/ownsettings.php"。

[repository]: https://github.com/alexbelgium/hassio-addons
[spotnet]: https://github.com/spotnet/spotnet/wiki
[spotweb]: https://github.com/spotweb/spotweb