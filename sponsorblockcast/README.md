# Home assistant add-on: CastSponsorSkip

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/sponsorblockcast/stats.png)

## 关于

CastSponsorSkip 是一个 Go 程序，用于跳过所有本地 Chromecast 上的赞助 YouTube 内容和可跳过广告，使用 SponsorBlock API。它受到 CastBlock 的启发，但完全从头开始编写，以避免其一些问题（参见与 CastBlock 的区别）。

此应用程序由 @gabe565 开发，可在 [CastSponsorSkip 仓库](https://github.com/gabe565/CastSponsorSkip) 中找到。

来自 @diamant-x 的反馈：
> 特别注意，它只在将 YouTube 视频投射到 Chromecast 时才有效。它几乎消除了手动交互，但无法在被迫观看广告时神奇地跳过广告。
> 此外，它似乎在通过原生 YouTube 应用在安卓电视上播放时无法工作，这将是一个很大的补充，或者是在智能手机上。

## 配置

此插件没有 Web 界面——所有配置都是通过插件选项完成的。
插件会自动发现本地 Chromecast 设备并监控 YouTube 播放以跳过赞助内容。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `CSS_CATEGORIES` | 字符串 | `sponsor, intro, outro, selfpromo` | 要跳过的 SponsorBlock 类别（用逗号分隔） |
| `CSS_DISCOVER_INTERVAL` | 字符串 | `5m` | 重启 DNS 发现客户端的时间间隔 |
| `CSS_DEVICES` | 字符串 | `[]` | 设备地址的逗号分隔列表；禁用发现 |
| `CSS_MUTE_ADS` | 布尔值 | `true` | 在播放广告时静音设备 |
| `CSS_PAUSED_INTERVAL` | 字符串 | `1m` | Cast 设备暂停时的轮询间隔 |
| `CSS_PLAYING_INTERVAL` | 字符串 | `500ms` | Cast 设备播放时的轮询间隔 |
| `CSS_SKIP_SPONSORS` | 布尔值 | `true` | 切换 SponsorBlock 段跳过；如果禁用，则仅跳过 YouTube 广告 |
| `CSS_YOUTUBE_API_KEY` | 字符串 | `` | 用于回退视频识别的 YouTube API 密钥 |

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

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

### 其他资源

有关详细的配置选项，请参阅 [CastSponsorSkip](https://github.com/gabe565/CastSponsorSkip)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 仔细配置插件以满足您的需求，请参阅官方文档进行配置。

## 支持和问题

插件：这里
应用程序：[CastSponsorSkip](https://github.com/gabe565/CastSponsorSkip)

[repository]: https://github.com/alexbelgium/hassio-addons