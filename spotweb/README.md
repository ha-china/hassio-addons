## ✖ 开放请求 : [✨ [请求] [spotweb] 自定义 dbsettings.inc.php (创建于 2025-04-29)](https://github.com/alexbelgium/hassio-addons/issues/1850) 由 [@wimb0](https://github.com/wimb0)

# Home Assistant Add-ons: Spotweb

使用 `env_vars` 选项传递额外的环境变量（变量名可为大写或小写）。有关详细信息，请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

我利用业余时间维护和更新其他 Home Assistant add-ons：跟进上游更改、HA 更改更新以及在真实硬件上进行测试需要耗费大量时间（甚至一些金钱）。我使用约 5-10 个 add-ons 的 >110 个 add-ons，因此我定期安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来协助调试和改进 add-ons。

如果这个 add-ons 为您节省了时间或让您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人星了我的仓库！点击上方图片将其星号，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## About

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的去中心化 Usenet 社区。

Spotweb 是目前功能最丰富的 Spotnet 客户端之一，其中包括但不限于以下功能：

- 快速。
- 系统内置可定制的过滤器。
- 显示和筛选上次视图以来的新站点。
- 收藏夹。
- 与 Sick Gear、Sick Bearded 和 CouchPotato 集成，作为 'newznab' 提供者。
- Sabnzbd 和 nzbget 集成。
- 多语言支持。
- 支持多用户。

此 add-on 由 @woutercoppens 开发，托管在此仓库上。

## Installation

注意：此 add-on 需要 MySQL 数据库。请确保您的 MariaDB add-on 正在运行，或者使用远程 MySQL 服务器。
如果检测到 MariaDB add-on，则会自动创建数据库和用户。

1. 将我的 add-ons 仓库添加到您的 Home Assistant 实例 (在 supervisor addons store 右上角，或如果您已配置我的 HA，则点击下方的按钮)
   [![打开您的 Home Assistant 实例并显示弹出对话框以添加 add-on 仓库对话框，其中已预填特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 确保安装了 MariaDB add-on 或使用远程 MySQL 服务器。
1. 安装 Spotweb add-on。
1. 单击 `Save` 按钮以存储您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志以查看一切是否正常。
1. 请仔细根据您的偏好配置此 add-on，请参阅官方文档以获取详细信息。

得益于 Ingress 支持和安全性，身份验证由 Home Assistant 处理。因此，Spotweb 中的身份验证默认禁用。通过 Ingress WebUI 安装后，Spotweb 即可使用。

每小时的背景任务会检索新的站点。
在输入您的凭据后，请重新启动 add-on 以强制首次同步站点。

要导入您自己的 `settings.php`，请将文件放置在 `/config/addons_config/spotweb/ownsettings.php` 路径下。

[repository]: https://github.com/alexbelgium/hassio-addons
[spotnet]: https://github.com/spotnet/spotnet/wiki
[spotweb]: https://github.com/spotweb/spotweb

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
