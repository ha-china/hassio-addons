# Home Assistant 插件：Spotify to Plex

我在空闲时间维护此插件及其他 Home Assistant 插件：跟进上游更改、HA 更改以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用大约 5-10 个我的 >110 个插件中的一部分，因此我定期安装测试机器（并购买一些测试服务，如 vpn），即使我不自己使用它们，也用于调试和改进插件。

如果该插件为您节省时间或使您的设置更易于操作，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢所有为我的仓库点赞的人！要点赞，请点击下方的图片，它将会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

## 概述

此插件基于 [jjdenhertog/spotify-to-plex](https://github.com/jjdenhertog/spotify-to-plex) 提供的 [docker 镜像](https://hub.docker.com/r/jjdenhertog/spotify-to-plex)。

它自动将您的 Spotify 播放列表同步到 Plex：同步任何 Spotify 播放列表（包括属于 Spotify 的播放列表），支持多个 Spotify 用户，支持定时自动同步，支持智能缓存，并且可选择通过 Lidarr、SLSKD 或 Tidal 下载缺失的曲目。

## 配置

在启动插件之前，您需要一个 Spotify 开发者应用程序（https://developer.spotify.com/dashboard）：

1. 创建一个应用程序并记下其 `Client ID` 和 `Client Secret`。
1. 在应用程序设置中，添加重定向 URI `https://jjdenhertog.github.io/spotify-to-plex/callback.html`（这是默认的 `SPOTIFY_API_REDIRECT_URI`；仅当您自行托管回调页面时才更改它）。

填写插件选项：

| 选项 | 描述 |
|--------|-------------|
| `SPOTIFY_API_CLIENT_ID` | 您的 Spotify 开发者应用程序的 Client ID |
| `SPOTIFY_API_CLIENT_SECRET` | 您的 Spotify 开发者应用程序的 Client secret |
| `SPOTIFY_API_REDIRECT_URI` | OAuth 重定向 URI（必须与您在 Spotify 应用程序中配置的地址匹配） |
| `ENCRYPTION_KEY` | 用于加密已存储 secrets 的密钥。**留空**让插件在首次启动时生成随机密钥并将其保存在插件配置文件夹中。仅当您想重用现有配置时才提供自定义密钥。 |

使用插件的 `env_vars` 选项来传递任何其他上游环境变量（例如 Tidal、SLSKD、Lidarr 或 Plex 设置）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

配置和缓存存储在插件配置文件夹中 (`/app_configs/<slug>`)，因此它们可以跨越重启和更新。

Webui 位于 `<your-ip>:9030`。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装相比没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店中点击右上角，或者如果您已配置了 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 设置所需选项（Spotify Client ID 和 Secret）。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 查看插件日志，查看一切是否顺利进行。
1. 打开 webui，在那里您将完成设置并连接您的 Spotify 和 Plex 账户。

## 支持

针对插件包相关的issue，请在 [alexbelgium/hassio-addons](https://github.com/alexbelgium/hassio-addons/issues) 上打开 issue。
针对应用程序本身的issue，请参考 [upstream 项目](https://github.com/jjdenhertog/spotify-to-plex)。

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
