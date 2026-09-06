<!-- markdownlint-disable MD043 -->

# Home Assistant 添加组件：Kometa

我在空闲时间维护这个及其他 Home Assistant 添加组件：跟踪上游更改、HA 更改，以及在真实硬件上进行测试需要大量时间（且需要一些金钱）。我使用的 5-10 个添加组件中，我的总数超过 110 个，所以我定期安装测试机器（并购买一些测试服务，如 VPN），这些机器我自己不用，以便排查和改进取加组件。

如果您这个添加组件帮您节省了时间或让设置更简单，您的支持对我至关重要！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacing Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢 everyone 给我的仓库点赞！点击下方的图片给它点赞，它就会出现在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 关于

---

[Kometa](https://kometa.wiki/en/latest/) 是一个可以基于 YAML 配置文件连续运行的 Python 3 脚本，用于定期更新图书馆中电影、剧集和集合的元数据，并根据Wiki 中详细介绍的多种方法自动构建集合。

此添加组件基于 docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

此添加组件的安装非常简单，与其他任何添加组件的安装没有不同。

1. 将我的添加组件仓库添加到您的 Home Assistant 实例中（在 Supervisor 添加组件商店的右上角，或者如果您已配置了 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加添加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此添加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将添加组件选项设置为您的偏好设置
1. 启动添加组件。
1. 检查添加组件的日志以查看是否一切顺利。
1. 打开 Web UI 并调整软件选项

## 配置

使用添加组件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

有一个 [walkthrough](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 帮助您快速上手。
更多信息请参阅 [官方 Wiki](https://github.com/Kometa-Team/Kometa)。

有两种方式可以配置选项：

- 添加组件选项

```yaml
PUID: 1000 #for UserID - see below for explanation
PGID: 1000 #for GroupID - see below for explanation
TZ: Europe/London #Specify a timezone to use EG Europe/London.
KOMETA_CONFIG: /config/addons_config/kometa/config/config.yml #Specify a custom config file to use.
KOMETA_TIME: 03:00 #Comma-separated list of times to update each day. Format: HH:MM.
KOMETA_RUN: False #Set to True to run without the scheduler.
KOMETA_TEST: False #Set to True to run in debug mode with only collections that have test: true.
KOMETA_NO_MISSING: False #Set to True to run without any of the missing movie/show functions.
```

- Config.yaml（高级用法）

Additional variables can be set as ENV variables by adding them in the config.yaml in the location defined in your addon options according to this guide : <https://github.com/alexbelgium/hassio-addons/wiki/Adds-feature:-add-env-variables>

The complete list of ENV variables can be seen here : <https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 GitHub 上创建问题

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
