## &#9888; 开放请求 : [✨ [请求] [spotweb] 自定义 dbsettings.inc.php (于 2025-04-29 提出)](https://github.com/alexbelgium/hassio-addons/issues/1850) 由 [@wimb0](https://github.com/wimb0) 发起
# Home Assistant 插件：Spotweb

使用插件的 `env_vars` 选项来传递额外的环境变量（名称可以是小写或大写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

我在业余时间维护此插件及其他 Home Assistant 插件：跟踪上游更改、适配 Home Assistant 的更新以及对真实硬件进行测试需要大量时间（有些还需要花费金钱）。我大约使用了我 110+ 个插件中的 5-10 个，因此我经常搭建测试机器（并购买一些测试服务，如 VPN），即使我自己不用，也用于调试和改进插件。

如果这个插件能为您节省时间或简化您的设置，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![架构 (Arch)](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建 (Builder)](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标 (Star) 的人！点击下方图片即可星标，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## 简介

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的分布式 Usenet 社区。

Spotweb 是目前最受欢迎的 Spotnet 客户端之一，具有以下特色（包括但不限于）：

- 速度快。
- 系统内可自定义过滤系统。
- 显示和过滤上次视图之后的新站点 (Spots)。
- 收藏列表 (Watchlist)。
- 与 Sick Gear、Sick Beard 和 CouchPotato 集成，作为 'newznab' 提供商。
- 与 Sabnzbd 和 nzbget 集成。
- 多语言支持。
- 多用户就绪。

该插件由 @woutercoppens 开发，并托管于此仓库。

## 安装

注意：此插件需要 MySQL 数据库。请确保 MariaDB 插件已运行，或使用远程 MySQL 服务器。
如果检测到 MariaDB 插件，将自动创建数据库和用户。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置好我的 Home Assistant，则点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 确保已安装 MariaDB 插件或使用远程 MySQL 服务器。
1. 安装 Spotweb 插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志，以确认一切顺利进行。
1. 仔细按照您的偏好配置插件，官方文档提供相关指导。

得益于 Ingress 支持，安全性和认证由 Home Assistant 处理，因此默认情况下 Spotweb 的认证功能已禁用。安装后，可以通过 Ingress WebUI 直接使用 Spotweb。

站点 (Spots) 由后台任务每小时获取一次。
输入凭据后，请重启插件以强制执行第一次站点同步。

若要导入自定义的 `settings.php`，请将文件放置在 "/config/addons_config/spotweb/ownsettings.php" 路径下。

[仓库链接]: https://github.com/alexbelgium/hassio-addons
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
