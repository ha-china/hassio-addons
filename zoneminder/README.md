# Home Assistant 插件：Zoneminder

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fzoneminder%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有关注我的仓库的人！要给我加星，请点击下面的图片，然后会出现在右上角。谢谢！_

[![为 @alexbelgium/hassio-addons 的星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/zoneminder/stats.png)

## 关于

["Zoneminder"](https://zoneminder.com/) 是一款功能齐全、开源、先进的视频监控软件系统。

此插件基于 docker 镜像 [https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh](https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh)

## 配置

请阅读官方文档以了解如何设置： [https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh](https://github.com/ZoneMinder/zmdockerfiles/blob/master/utils/entrypoint.sh)

## 安装

此插件的安装相当简单，与安装任何其他插件没有什么不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在超级用户插件商店的右上角，或者如果您已配置我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，预填特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 单击 `保存` 按钮以存储您的配置。
4. 根据您的喜好设置插件选项。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 打开 WebUI 并调整软件选项。

## 在 Home Assistant 中的集成

https://www.home-assistant.io/integrations/zoneminder/

## 支持

在 GitHub 上创建一个问题

## 插图

![监视器流](https://user-images.githubusercontent.com/44178713/157933856-33ed3d44-6b91-4ce2-8a9b-daf9b618176c.png)

[repository]: https://github.com/alexbelgium/hassio-addons