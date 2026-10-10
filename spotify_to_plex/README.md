# Home Assistant 附加组件：Spotify 到 Plex

我利用空闲时间维护此及其他 Home Assistant 附加组件：跟踪上游变化、HA 更新以及在实际硬件上测试需要大量时间（有时还需要一些金钱支出）。我使用了超过 110 个附加组件中的 5-10 个，因此我经常安装测试机（并购买一些测试服务，如 VPN），用于我自己不使用但为了调试和改进附加组件而进行的测试。

如果您使用此附加组件节省了时间或让配置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fspotify_to_plex%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=徽章等级)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库%20检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/给我买杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/给我买杯咖啡%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢大家给我这个仓库星标！点击下方图片星标它，它将显示在右上角。谢谢！_

[![Stargazers 仓库成员列表 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

## 关于

此附加组件基于 [jjdenhertog/spotify-to-plex](https://github.com/jjdenhertog/spotify-to-plex) 的 [docker 镜像](https://hub.docker.com/r/jjdenhertog/spotify-to-plex)。

它会自动将您的 Spotify 播放列表同步到 Plex：同步任何 Spotify 播放列表（包括 Spotify 拥有的播放列表），支持多个 Spotify 用户，计划自动同步，智能缓存以及可选的通过 Lidarr、SLSKD 或 Tidal 下载缺失曲目。

## 配置

在启动附加组件之前，您需要一个 Spotify 开发者应用程序（https://developer.spotify.com/dashboard）：

1. 创建一个应用程序，记下其 `Client ID` 和 `Client Secret`。
1. 在应用程序设置中，添加重定向 URI `https://jjdenhertog.github.io/spotify-to-plex/callback.html`（这是默认的 `SPOTIFY_API_REDIRECT_URI`；仅在您自行托管回调页面时才更改它）。

填写附加组件选项：

| 选项 | 描述 |
|--------|-------------|
| `SPOTIFY_API_CLIENT_ID` | 您的 Spotify 开发者应用程序的客户端 ID |
| `SPOTIFY_API_CLIENT_SECRET` | 您的 Spotify 开发者应用程序的客户端密钥 |
| `SPOTIFY_API_REDIRECT_URI` | OAuth 重定向 URI（必须与 Spotify 应用程序中配置的一致） |
| `ENCRYPTION_KEY` | 用于加密存储密钥的密钥。**留空**可以让附加组件在首次启动时生成随机密钥并将其持久化在附加组件配置目录中。仅当您希望重用现有配置时才提供自己的密钥。 |

使用附加组件的 `env_vars` 选项传递任何额外的上游环境变量（例如 Tidal、SLSKD、Lidarr 或 Plex 设置）。详见 https://github.com/alexbelgium/hassio-addons/wiki/添加-环境变量到您的-Addon-2。

配置和缓存存储在附加组件配置目录中（`/app_configs/<slug>`），因此它们可以 survives 重启和更新。

Web 界面位于 `<your-ip>:9030`。

## 安装

安装此附加组件非常简单，与其他任何 Hass.io 附加组件的安装相比并无不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带特定仓库 URL 预填充的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 设置必需的选项（Spotify 客户端 ID 和密钥）。
1. 点击 `Save` 按钮以存储配置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否顺利。
1. 打开 Web 界面，在那里您将完成设置并连接您的 Spotify 和 Plex 账户。

## 支持

有关附加组件打包的问题，请在 [alexbelgium/hassio-addons](https://github.com/alexbelgium/hassio-addons/issues) 上提出issue。
有关应用程序本身的问题，请参阅 [上游项目](https://github.com/jjdenhertog/spotify-to-plex)。

[repository]: https://github.com/alexbelgium/hassio-addons

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
