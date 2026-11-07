# Home Assistant 插件：CastSponsorSkip

我在业余时间维护这个和其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我经常使用我超过 110 个插件中的 5-10 个，所以我安装了测试机器（并购买了一些我本人不使用的测试服务，如 vpn），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更容易，我将非常感谢您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库加星的人！要加星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/sponsorblockcast/stats.png)

## 关于

CastSponsorSkip 是一个 Go 程序，它使用 SponsorBlock API 在所有本地 Chromecasts 上跳过赞助的 YouTube 内容和可跳过的广告。它受到了 CastBlock 的启发，但从头开始编写以避免其一些缺陷（见与 CastBlock 的区别）。

此应用程序由 @gabe565 在 [CastSponsorSkip 仓库](https://github.com/gabe565/CastSponsorSkip) 中开发。

来自 @diamant-x 的反馈：
> 特别注意，它仅在将 YouTube 视频投放到 Chromecast 时才起作用。它主要消除了手动交互，不能神奇地跳过必须观看的广告。
> 此外，它似乎在通过原生 YouTube 应用在 Android TV 上播放时不起作用，这将是一个很好的补充，或者在智能手机上。

## 配置

此插件没有网页界面 - 所有配置都是通过插件选项完成的。
插件自动发现本地 Chromecast 设备并监控 YouTube 播放以跳过赞助内容。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CSS_CATEGORIES` | str | `sponsor, intro, outro, selfpromo` | 跳过的 SponsorBlock 类别（逗号分隔） |
| `CSS_DISCOVER_INTERVAL` | str | `5m` | 重启 DNS 发现客户端的间隔 |
| `CSS_DEVICES` | str | `[]` | 设备地址的逗号分隔列表；禁用发现 |
| `CSS_MUTE_ADS` | bool | `true` | 在播放广告时静音设备 |
| `CSS_PAUSED_INTERVAL` | str | `1m` | Cast 设备暂停时的轮询间隔 |
| `CSS_PLAYING_INTERVAL` | str | `500ms` | Cast 设备播放时的轮询间隔 |
| `CSS_SKIP_SPONSORS` | bool | `true` | 切换 SponsorBlock 段落跳过；如果禁用，则仅跳过 YouTube 广告 |
| `CSS_YOUTUBE_API_KEY` | str | `` | 用于回退视频识别的 YouTube API 密钥 |

### 示例配置

```yaml
CSS_CATEGORIES: "sponsor, intro, outro, selfpromo, interaction"
CSS_MUTE_ADS: false
CSS_PAUSED_INTERVAL: "30s"
CSS_PLAYING_INTERVAL: "500ms"
CSS_SKIP_SPONSORS: false
CSS_DEVICES: "192.168.1.100,192.168.1.101"
```

### 自定义脚本和环境变量

此插件支持自定义脚本执行和环境变量注入：

- **自定义脚本**：请参阅[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（使用大写或小写名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

### 其他资源

有关详细的配置选项，请参阅 [CastSponsorSkip](https://github.com/gabe565/CastSponsorSkip)。

## 安装

此插件的安装相当简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在监督器插件存储的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 仔细配置插件以满足您的偏好，请参阅官方文档。

## 支持和问题

插件：此处
应用程序：[CastSponsorSkip](https://github.com/gabe565/CastSponsorSkip)

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
