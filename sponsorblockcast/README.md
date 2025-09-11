# Home Assistant 插件：CastSponsorSkip

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsponsorblockcast%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位给我的仓库点过赞的人！要给我点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![点星的用户名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/sponsorblockcast/stats.png)

## 关于

CastSponsorSkip 是一个 Go 程序，它使用 SponsorBlock API 跳过所有本地 Chromecast 上的赞助 YouTube 内容和可跳过的广告。它受到 CastBlock 的启发，但从头开始编写，以避免一些缺陷（请参见与 CastBlock 的区别）。

这个应用程序是由 @gabe565 开发的，地址在这里：https://github.com/gabe565/CastSponsorSkip

来自 @diamant-x 的反馈：
> 特别注意，它仅在将 YouTube 视频投射到 Chromecast 时有效。它主要减少手动操作，无法在强制观看时神奇地跳过广告。
> 此外，当通过原生 YouTube 应用在安卓电视上播放时似乎也不起作用，这将是一个很好的补充，或者在智能手机上也不行。

## 配置

请参见 https://github.com/gabe565/CastSponsorSkip

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository]添加到你的 Hass.io 实例中。
1. 安装这个插件。
1. 点击 `保存` 按钮以存储你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 仔细根据你的喜好配置插件，查看官方文档以获取帮助。

## 支持和问题

插件：这里
应用： https://github.com/gabe565/CastSponsorSkip

[repository]: https://github.com/alexbelgium/hassio-addons