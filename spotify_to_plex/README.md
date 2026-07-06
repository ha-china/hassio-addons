# Home assistant 插件：Spotify 到 Plex

我在业余时间维护这个以及其他 Home Assistant 插件：跟进上游更改、Home Assistant 更改以及在真实硬件上测试都需要花费很多时间（以及一些金钱）。我经常使用我超过 110 个插件中的 5-10 个，因此我会安装测试机器（以及购买一些我自身不使用的测试服务，例如 vpn）来调试和改进插件。

如果这个插件能为您节省时间或使您的设置变得更简单，我将非常感激您的支持！

[![给我买杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码 lint%20基础)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢所有为我的存储库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers 存储库星级排名 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

## 关于

此插件基于 [docker 镜像](https://hub.docker.com/r/jjdenhertog/spotify-to-plex) 来自 [jjdenhertog/spotify-to-plex](https://github.com/jjdenhertog/spotify-to-plex)。

它自动将您的 Spotify 播单同步到 Plex：同步任何 Spotify 播单（包括 Spotify 所有播单），支持多个 Spotify 用户，计划自动同步，智能缓存，并可选项下载缺失的曲目通过 Lidarr、SLSKD 或 Tidal。

## 配置

在开始插件之前，您需要一个 Spotify 开发者应用程序（https://developer.spotify.com/dashboard）：

1. 创建一个应用程序，并记下其 `Client ID` 和 `Client Secret`。
1. 在应用程序设置中，添加重定向 URI `https://jjdenhertog.github.io/spotify-to-plex/callback.html`（这是默认的 `SPOTIFY_API_REDIRECT_URI`；只有当您自己托管回调页面时才更改它）。

填写插件选项：

| 选项 | 描述 |
|--------|-------------|
| `SPOTIFY_API_CLIENT_ID` | 您 Spotify 开发者应用程序的 Client ID |
| `SPOTIFY_API_CLIENT_SECRET` | 您 Spotify 开发者应用程序的 Client Secret |
| `SPOTIFY_API_REDIRECT_URI` | OAuth 重定向 URI（必须与您 Spotify 应用程序中配置的 URI 相匹配） |
| `ENCRYPTION_KEY` | 用于加密存储的秘密的关键。**留空** 以使插件在首次启动时生成一个随机密钥并持久化到插件配置文件夹。只有当您想重用现有配置时才提供自己的密钥。 |

使用插件的 `env_vars` 选项来传递任何额外的上游环境变量（例如 Tidal、SLSKD、Lidarr 或 Plex 设置）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

配置和缓存存储在插件的配置文件夹中（`/addon_configs/<slug>`），因此它们在重启和更新后仍然存在。

Webui 可以在 `<your-ip>:9030` 中找到。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件存储库添加到您的 Home Assistant 实例中（在监督器插件存储库的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定存储库 URL 预填充的添加插件存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 设置所需的选项（Spotify 客户端 ID 和密钥）。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 webui，您将在这里完成设置并连接您的 Spotify 和 Plex 账户。

## 支持

有关插件打包相关的问题，请在此处打开一个问题 [alexbelgium/hassio-addons](https://github.com/alexbelgium/hassio-addons/issues)。
有关应用程序本身的问题，请参阅 [upstream 项目](https://github.com/jjdenhertog/spotify-to-plex)。

[存储库]: https://github.com/alexbelgium/hassio-addons
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
