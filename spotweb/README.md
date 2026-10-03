## &#9888; 开请求：[✨ [请求] [spotweb] 自定义 dbsettings.inc.php (于 2025-04-29 开启)](https://github.com/alexbelgium/hassio-addons/issues/1850) 由 [@wimb0](https://github.com/wimb0)

# Home Assistant 附加组件：Spotweb

使用附加组件的 `env_vars` 选项传递额外的环境变量（支持大写或小写名称）。详情请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

我在业余时间维护此 Home Assistant 附加组件及其他附加组件：跟踪上游更改、Home Assistant (HA) 更改以及在真实硬件上测试需要大量时间（和一些金钱）。我使用的附加组件大约是我的 110 个中的 5-10 个，为了经常测试和改进这些附加组件，我会安装测试机器（并购买一些我自己不使用的测试服务，例如 vpn）。

如果这个附加组件为您节省时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotweb%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有人给我的仓库点星！想点星请点击下图，它就会被移到右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/spotweb/stats.png)

## 关于

[Spotweb][spotweb] 是一个基于 [Spotnet][spotnet] 协议的分布式 Usenet 社区。

Spotweb 是目前功能最丰富的 Spotnet 客户端之一，其中包括其他功能：

- 速度快。
- 系统内可定制过滤系统。
- 显示和过滤自上次查看以来的新热点 (spots)。
- 收藏列表。
- 与 Sick Gear、Sick beard 和 CouchPotato 集成，作为 'newznab' 提供者。
- 与 Sabnzbd 和 nzbget 集成。
- 多语言支持。
- 为多用户就绪。

此附加组件由 @woutercoppens 构建并托管在此仓库。

## 安装

注意：此附加组件需要 MySQL 数据库。请确保 MariaDB 附加组件正在运行，或使用远程 MySQL 服务器。
如果检测到 MariaDB 附加组件，会自动创建数据库和用户。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 存储库顶部右侧的“附加组件”商店中，或如果在 configured my HA 的情况下点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 确保已安装 MariaDB 附加组件，或使用远程 MySQL 服务器。
1. 安装 Spotweb 附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否正常。
1. 仔细配置附加组件符合您的偏好，请参阅官方文档获取。

由于 Ingress 支持的支持，安全和认证由 Home Assistant 处理。因此，Spotweb 中默认禁用认证。通过 Ingress WebUI 安装后，Spotweb 即可使用。

热点每小时由后台任务检索。
输入凭据后，请重启附加组件以强制同步第一个热点。

要导入自定义 settings.php，请将文件放置在 "/config/addons_config/spotweb/ownsettings.php"。

[repository]: https://github.com/alexbelgium/hassio-addons
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
