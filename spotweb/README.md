## &#9888; Open Request : [✨ [请求] [spotweb] 自有的 dbsettings.inc.php (于 2025-04-29 开启)](https://github.com/alexbelgium/hassio-addons/issues/1850) 由 [@wimb0](https://github.com/wimb0) 提出
# Home Assistant 附加组件：Spotweb

使用附加组件的 `env_vars` 选项来传递额外的环境变量（支持大写或小的名称名称）。详细说明请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

我在空闲时间维护此 Home Assistant 附加组件以及其他附加组件：跟踪上游更改、HA 更改以及在真实硬件上进行测试耗费了大量时间（以及一些金钱）。我使用其中 5-10 个附加组件 (>110 个附加组件)，并经常安装测试机（并购买一些我自己不使用的测试服务，如 vpn）来调试和改进附加组件

如果此附加组件为您节省了时间或使您的设置更简单，我会非常感谢您提供的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库星标！点击右上角的星星图片，它的星标就会显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库星标者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## 关于

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的分布式 Usenet 社区。

Spotweb 是可用性最高的 Spotnet 客户端之一，具有以下功能：

- 速度快。
- 可在系统内进行可自定义的过滤系统。
- 显示并过滤上上次视图以来新增的站点。
- 待办列表。
- 与 Sick Gear、Sick beard 和 CouchPotato 集成作为 'newznab' 提供者。
- 与 Sabnzbd 和 nzbget 集成。
- 多语言支持。
- 支持多用户。

此附加组件由 @woutercoppens 构建并发布于此仓库。

## 安装

注意：此附加组件需要 mysql 数据库。请确保已运行 MariaDB 附加组件或在使用远程 MySQL 服务器。
如果检测到 MariaDB 附加组件，将自动创建数据库和用户。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您配置了我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的空附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 确保已安装 MariaDB 附加组件或使用远程 MySQL 服务器。
1. 安装 Spotweb 附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 查看附加组件的日志，以查看一切是否正常。
1. 仔细根据您的偏好配置附加组件，详见官方文档以进行配置。

得益于 Ingress 支持，安全和身份验证由 Home Assistant 处理。因此 Spotweb 默认禁用身份验证。通过 Ingress WebUI 安装后，Spotweb 即可使用。

站点每小时由后台任务获取。
输入凭据后请重启附加组件，以强制首次同步站点。

要导入您的 ownsettings.php，请将文件放在 "/config/addons_config/spotweb/ownsettings.php" 中。

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
