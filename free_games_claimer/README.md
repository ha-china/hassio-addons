## &#9888; VNC在多台机器上无法工作。请使用config.env来执行脚本

# Home Assistant插件：免费游戏领取器

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.json)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码%20检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/给我买杯咖啡%20(没有%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/用%20Paypal%20给我买杯咖啡-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星请点击下面的图片，然后它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons的星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/free_games_claimer/stats.png)

## 关于

[免费游戏领取器](https://github.com/vogler/free-games-claimer) ：定期在以下平台申请免费游戏

- Epic Games Store
- Amazon Prime Gaming
- GOG
- Live Games with Gold - 规划中

此插件基于docker镜像 https://github.com/vogler/free-games-claimer

## 配置

Web界面可以在 <http://homeassistant:PORT> 找到。

没有附加选项。所有配置必须根据此处文档手动添加到 /config/addons_config/free_games_claimer/config.env（https://github.com/vogler/free-games-claimer#configuration--options）

如果此文件不存在，它将会在第一次启动时创建。

## 安装

此插件的安装非常简单，与安装其他任何插件没有区别。

1. 将我的插件库添加到你的Home Assistant实例中（在右上角的管理员插件商店中，或如果你已配置我的HA，请点击下方按钮）
   [![打开你的Home Assistant实例并显示添加插件库对话框，带有预填的特定库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击`保存`按钮以保存你的配置。
4. 将插件选项设置为你的偏好。
5. 启动插件。
6. 检查插件的日志以查看一切是否正常。
7. 打开webUI并调整软件选项。

## 支持

在github上创建一个问题

[仓库]: https://github.com/alexbelgium/hassio-addons