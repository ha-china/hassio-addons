## ⚠️ 开源请求：[✨ [REQUEST] [spotweb] 自定义 dbsettings.inc.php (发布于 2025-04-29)](https://github.com/alexbelgium/hassio-addons/issues/1850) 由 [@wimb0](https://github.com/wimb0) 发起
# Home Assistant 插件：Spotweb

使用插件的 `env_vars` 选项传递额外的环境变量（名称可以大写或小写）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

我利用业余时间维护此及其他 Home Assistant 插件：跟踪上游变更、适应 HA 修改以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我大约使用 5-10 个我拥有的 >110 个插件中的一部分，所以我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来调试和改进这些插件

如果这个插件为您节省了时间或让您的设置变得更加简单，我将不胜感激您的支持！

[![为我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![入口网关](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)

[![Codacy 徽标](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Check%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人 Star 了我的仓库！要 Star 它，点击下方图片，它将被移至右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库 Star 者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## 关于

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的去中心化 Usenet 社区。

Spotweb 是目前功能最丰富的 Spotnet 客户端之一，自带以下特性：

- 运行速度快。
- 系统内提供可自定义过滤器。
- 显示并过滤上一次的视图之后出现的新 Spot。
- 收藏列表 (Watchlist)。
- 与 Sick Gear、Sick beard 和 CouchPotato 集成作为 'newznab' 提供者。
- 支持与 Sabnzbd 和 nzbget 集成。
- 多语言支持。
- 支持多用户。

此插件由 @woutercoppens 开发，并托管于此仓库。

## 安装

注意：此插件需要一个 MySQL 数据库。请确保 MariDB 插件正在运行，或者使用远程 MySQL 服务器。
如果检测到 MariDB 插件，系统将自动创建数据库和用户。

1. 将我插件仓库添加到你的 Home Assistant 实例（在 supervisor 插件商店右上角，或如果已配置我的 HA，请点击下方按钮）
   [![打开你的 Home Assistant 实例并显示添加插件仓库对话框，预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 确保安装 MariDB 插件或使用远程 MySQL 服务器。
1. 安装 Spotweb 插件。
1. 点击 `保存` 按钮以存储配置。
1. 启动插件。
1. 查看插件日志，确认一切是否正常。
1. 仔细根据你的偏好配置插件，请参考官方文档进行配置。

得益于 Ingress 支持，安全和身份验证由 Home Assistant 处理。因此，Spotweb 中的身份验证默认已禁用。通过 Ingress Web UI 安装后，Spotweb 即可直接使用。

Spot 每小时间续由后台任务获取。
输入凭据后，请重启插件以强制首次同步 Spot。

若要导入自定义 settings.php，请将文件置于"/config/addons_config/spotweb/ownsettings.php"。

[仓库]: https://github.com/alexbelgium/hassio-addons
[spotnet]: https://github.com/spotnet/spotnet/wiki
[spotweb]: https://github.com/spotweb/spotweb

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
