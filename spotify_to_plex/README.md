# Home Assistant 插件：Spotify 到 Plex

我利用空闲时间维护这个及其他 Home Assistant 插件：跟进上游变更、HA 变更以及在真实硬件上进行测试耗费了大量时间（和某些费用）。我使用的插件数量约有 5-10 个，远少于我的 100 多个插件，因此我经常安装测试机器（并购买一些我自己不用的测试服务，例如 vpn）来 Troubleshoot 和改进插件。

如果这个插件为您节省了时间或使您的设置更简便，将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢大家给我 repo 点星！点击下方图片即可星标，它将显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

## 关于

此插件基于 [jjdenhertog/spotify-to-plex](https://github.com/jjdenhertog/spotify-to-plex) 的 [docker 镜像](https://hub.docker.com/r/jjdenhertog/spotify-to-plex)。

它会自动将您的 Spotify 播放列表同步到 Plex：同步任何 Spotify 播放列表（包括 Spotify 拥有的播放列表），支持多个 Spotify 用户，支持定时自动同步，支持智能缓存以及通过 Lidarr, SLSKD 或 Tidal 选择性地下载缺失的曲目。

## 配置

在启动插件之前，您需要一个 Spotify 开发者应用 (https://developer.spotify.com/dashboard)：

1. 创建一个应用并记下其 `Client ID` 和 `Client Secret`。
1. 在应用程序设置中，添加重定向 URI `https://jjdenhertog.github.io/spotify-to-plex/callback.html`（这就是默认的 `SPOTIFY_API_REDIRECT_URI`；仅当您自己托管回调页面时才更改它）。

填写插件选项：

| 选项 | 描述 |
|------|------|
| `SPOTIFY_API_CLIENT_ID` | 您的 Spotify 开发者应用的客户端 ID |
| `SPOTIFY_API_CLIENT_SECRET` | 您的 Spotify 开发者应用的客户端密钥 |
| `SPOTIFY_API_REDIRECT_URI` | OAuth 重定向 URI（必须与您在 Spotify 应用中配置的.URI 匹配） |
| `ENCRYPTION_KEY` | 用于加密保存密钥的密钥。**留空**让插件在首次启动时生成随机密钥，并在插件配置文件夹中持久保存。仅当您想要重用现有配置时才用自己的密钥。 |

使用插件 `env_vars` 选项传递任何额外的上游环境变量（例如 Tidal, SLSKD, Lidarr 或 Plex 设置）。有关详细信息，请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

配置和缓存存储在插件配置文件夹中 (`/addon_configs/<slug>`)，因此它们可以抵御重启和更新。

Web UI 可访问 `<your-ip>:9030`。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装没有区别。

1. 将我的插件库添加到您的 home assistant 实例中（在 supervisor addons store 顶部右侧，或如果您已配置了我的 HA，请点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示带有预填特定库 URL 的添加插件库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 设置所需选项（Spotify 客户端 ID 和密钥）。
1. 点击 `Save` 按钮以保存配置。
1. 启动插件。
1. 查看插件日志以查看是否一切正常。
1. 打开 web UI，在那里您将完成设置并连接您的 Spotify 和 Plex 账户。

## 支持

针对插件封装问题的问题，请在 [alexbelgium/hassio-addons](https://github.com/alexbelgium/hassio-addons/issues) 上打开一个 Issue。
针对应用程序本身的问题，请参考 [upstream 项目](https://github.com/jjdenhertog/spotify-to-plex)。

[repository]: https://github.com/alexbelgium/hassio-addons

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
