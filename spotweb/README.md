## &#9888; 开放请求 : [✨ [请求] [SpotWeb] 自定 dbsettings.inc.php (发布于 2025-04-29)](https://github.com/alexbelgium/hassio-addons/issues/1850) 由 [@wimb0](https://github.com/wimb0) 发起
# Home Assistant 附加组件：SpotWeb

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

我利用空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更新、Home Assistant 变更以及在真实硬件上进行测试花费了大量时间（以及部分资金）。我使用的附加组件中约有 5-10 个是我的 >110 个附加组件的一部分，因此我会定期安装测试机器（并购买一些我自己不使用的测试服务，例如 VPN）来排查问题和改进附加组件。

如果这个附加组件节省您的时间或使您的配置更加容易，我将不胜感激您的支持！

[![帮我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

*感谢所有人星标了我的仓库！如果您也想星标它，请点击下方的图片，它将显示在右上角。谢谢！*

[![@alexbelgium/hassio-addons 的星标仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## 关于

[SpotWeb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的分布式 Usenet 社区。

SpotWeb 是目前功能最丰富的 Spotnet 客户端之一，其中包括以下内容：

- 快速。
- 系统内的自定义过滤器功能。
- 显示和筛选上次查看以来的新站点。
- 收藏夹。
- 与 SickGear、SickBeard 和 CouchPotato 集成，作为 'newznab' 提供者。
- Sabnzbd 和 nzbget 集成。
- 多语言支持。
- 支持多用户。

此附加组件由 @woutercoppens 构建，并托管在此仓库中。

## 安装

注意：此附加组件需要 MySQL 数据库。请确保 MariaDB 附加组件已运行或使用远程 MySQL 服务器。如果检测到 MariaDB 附加组件，将自动创建数据库和用户。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店中点击右上角，或直接点击下方的按钮，如果您已配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示附加组件仓库对话框，预先填满特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 确保已安装 MariaDB 附加组件或使用远程 MySQL 服务器。
3. 安装 SpotWeb 附加组件。
4. 点击 `保存` 按钮以存储您的配置。
5. 启动附加组件。
6. 检查附加组件的日志以确认一切正常。
7. 仔细根据您的偏好配置附加组件，有关官方文档请参阅官方说明。

得益于 Ingress 支持，安全性和认证由 Home Assistant 处理。因此，SpotWeb 中默认禁用认证。通过 Ingress WebUI 安装后，SpotWeb 即可直接使用。

站点每小时的背景任务会获取。
输入凭据后，请重启附加组件以强制首次同步站点。

要导入您自己的 settings.php，请将文件放置在 "/config/addons_config/spotweb/ownsettings.php" 中。

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
