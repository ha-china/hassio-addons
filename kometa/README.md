<!-- markdownlint-disable MD043 -->

# Home assistant add-on: Kometa

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星标的人！要加星标，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 关于

---

[Kometa](https://kometa.wiki/en/latest/) 是一个可以用 YAML 配置文件持续运行的 Python 3 脚本，用于按计划更新您图书馆中电影、节目和收藏的元数据，并自动根据各种方法构建收藏，所有这些方法都在维基中详细说明。

这个插件基于 Docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

这个插件的安装非常简单，与安装任何其他插件没有什么不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您已经配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 配置

有一个 [使用指南](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 可帮助您快速上手。
更多信息请参阅 [官方维基](https://github.com/Kometa-Team/Kometa)。

选项可以通过两种方式配置：

- 插件选项

```yaml
PUID: 1000 #用于用户 ID - 下方有解释
PGID: 1000 #用于组 ID - 下方有解释
TZ: Europe/London #指定要使用的时区，例如 Europe/London。
KOMETA_CONFIG: /config/addons_config/kometa/config/config.yml #指定要使用的自定义配置文件。
KOMETA_TIME: 03:00 #每天更新的时间列表，格式：HH:MM。
KOMETA_RUN: False #设置为 True 以在没有调度器的情况下运行。
KOMETA_TEST: False #设置为 True 以在仅测试：true 的收藏中调试模式下运行。
KOMETA_NO_MISSING: False #设置为 True 以在没有缺失电影/节目功能的情况下运行。
```

- Config.yaml（高级用法）

可以通过在 config.yaml 中添加它们来设置附加变量作为 ENV 变量，根据此指南添加它们： <https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables>

完整的 ENV 变量列表可以在这里查看： <https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 github 上创建问题

## 插图

---

![插图](https://dausruddin.com/wp-content/uploads/2020/05/plex-meta-manager-v3-1024x515.png)