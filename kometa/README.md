<!-- markdownlint-disable MD043 -->

# Home Assistant 附加组件：Kometa

我利用业余时间维护此及其他 Home Assistant 附加组件：跟进上游变更、HA 变更以及在真实硬件上进行测试需要大量时间（和一些金钱）。我大约使用我的 >110 个附加组件中的 5-10 个，因此我经常安装测试机器（并购买一些测试服务，如 vpn），这些机器我自己不使用，用于故障排除和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置变得更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

*感谢所有人对我仓库给予星标！要将其设为星标，请点击下方的图片，然后将其置顶。谢谢！*

[![Star 仓库名单 @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 概述

---

[Kometa](https://kometa.wiki/en/latest/) 是一个可以使用 YAML 配置文件连续运行的 Python 3 脚本，它可以按预定时间表更新日期收藏库中电影、剧集和集合的元数据，并基于各种方法自动创建集合，这些方法在维基百科中详细说明。

该附加组件基于 docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

此附加组件的安装非常简单，与其他任何附加组件的安装相比没有不同之处。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置我的 HA，则点击下方的按钮）。
   [![打开您的 Home Assistant 实例并显示带有预填写特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否正常。
1. 打开 Web UI 并调整软件选项。

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

有一个 [逐步教程](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 有助于帮助您快速上手。详细信息请参阅 [官方维基百科](https://github.com/Kometa-Team/Kometa)。

可以通过两种方式配置选项：

- 附加组件选项

```yaml
PUID: 1000 # 用于 UserID - 详见下文解释
PGID: 1000 # 用于 GroupID - 详见下文解释
TZ: Europe/London # 指定要使用的时区，例如 Europe/London。
KOMETA_CONFIG: /config/addons_config/kometa/config/config.yml # 指定要使用的自定义配置文件。
KOMETA_TIME: 03:00 # 每日更新时间的逗号分隔列表。格式：HH:MM。
KOMETA_RUN: False # 设置为 True 以不带调度程序运行。
KOMETA_TEST: False # 设置为 True 以仅在测试模式（仅包含测试：true 的集合）下运行。
KOMETA_NO_MISSING: False # 设置为 True 以不运行任何缺失的电影/剧集函数。
```

- Config.yaml（高级用法）

可以在 config.yaml 中定义的附加组件选项位置中添加它们作为 ENV 变量。请参阅此指南：<https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables>

完整的 ENV 变量列表可以在这里查看：<https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 github 上创建问题。

## 插图

---

![illustration](https://dausruddin.com/wp-content/uploads/2020/05/plex-meta-manager-v3-1024x515.png)

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
