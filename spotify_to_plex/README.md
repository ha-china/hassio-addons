# Home Assistant 插件：Spotify 到 Plex

我在业余时间维护此工具及其他 Home Assistant 插件：跟踪上游变更、Home Assistant 的更新以及在实际硬件上测试需要大量时间（以及一些金钱）。我日常使用大约 5-10 个超过 110 个插件中的插件，因此我会安装测试机（并自行购买一些测试服务，如 vpn），即便不自行使用，也用于检查和改进这些插件。

如果您节省了一些时间或者让您的配置更加简便，您的支持将令我非常感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=lint%20代码基础)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢大家为我的仓库星标！点击下方图片星标它，它将显示在右上角。谢谢！_

[![Starred repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

## 简介

该插件基于 [jjdenhertog/spotify-to-plex](https://github.com/jjdenhertog/spotify-to-plex) 的 [Docker 镜像](https://hub.docker.com/r/jjdenhertog/spotify-to-plex) 构建。

它会自动根据您的 Spotify 歌单与 Plex 保持同步：同步任何 Spotify 歌单（包括您拥有的歌单），支持多个 Spotify 用户，支持定时自动同步，智能缓存，并通过 Lidarr、SLSKD 或 Tidal 可选项下载缺失的曲目。

## 配置

在启动插件之前，您需要一个 Spotify 开发者应用程序（https://developer.spotify.com/dashboard）：

1. 创建应用并记录其 `Client ID` 和 `Client Secret`。
1. 在应用程序设置中，添加重定向 URI `https://jjdenhertog.github.io/spotify-to-plex/callback.html`（这是默认的 `SPOTIFY_API_REDIRECT_URI`；只有在您自行托管回调页面时才更改它）。

填写插件选项：

| 选项 | 描述 |
|--------|-------------|
| `SPOTIFY_API_CLIENT_ID` | 您的 Spotify 开发者应用程序的客户端 ID |
| `SPOTIFY_API_CLIENT_SECRET` | 您的 Spotify 开发者应用程序的客户端密钥 |
| `SPOTIFY_API_REDIRECT_URI` | OAuth 重定向 URI（必须与您在 Spotify 应用程序中配置的 URI 匹配） |
| `ENCRYPTION_KEY` | 用于加密存储密钥的密钥。**留空**表示让插件在首次启动时生成随机密钥并将其持久化在插件配置文件夹中。只有当您想复用现有配置时，才提供自己的密钥。 |

使用插件的 `env_vars` 选项来传递任何额外的上游环境变量（例如 Tidal、SLSKD、Lidarr 或 Plex 设置）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

配置和缓存存储在插件配置文件夹中（`/app_configs/<slug>`），因此它们能够经受重新启动和更新。

Web 界面可在 `<your-ip>:9030` 访问。

## 安装

此插件的安装非常简单，与安装任何 Hass.io 插件没有不同。

1. 将我的插件存储库添加到您的 Home Assistant 实例（在 supervisor 插件商店右上角，或在您配置了我的 HA 时点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加插件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 设置所需的选项（Spotify 客户端 ID 和密钥）。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志以确认一切是否正常。
1. 打开 Web 界面，在那里您将继续设置并连接您的 Spotify 和 Plex 帐户。

## 支持

对于与插件包装相关的问题，请在 [alexbelgium/hassio-addons](https://github.com/alexbelgium/hassio-addons/issues) 上创建一个 issue。
对于应用程序本身相关的问题，请参阅 [上游项目](https://github.com/jjdenhertog/spotify-to-plex)。

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
