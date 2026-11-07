<!-- markdownlint-disable MD043 -->

# Home assistant add-on: Kometa


我在闲暇时间维护此及其他 Home Assistant 扩展程序：跟踪上游更改，适配 Home Assistant 的新版本，并在真实硬件上进行测试耗费了大量时间（以及部分金钱）。我日常使用的约 5-10 个 ><110 个扩展程序，因为经常需要安装测试机器（甚至购买一些测试服务例如 vpn），以便在不亲自使用的情况下用于故障排查和改进这些扩展程序。

如果您使用此扩展程序节省了时间或让配置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展程序信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢您所有人给我的仓库加星！要加星，请点击下方图片，然后点击即可。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 关于

---

[Kometa](https://kometa.wiki/en/latest/) 是一个 Python 3 脚本，可以通过 YAML 配置文件连续运行，以定期更新您库中电影、电视剧和集合的元数据，以及根据wiki中详细说明的各种方法自动构建集合。

此扩展程序基于 docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

安装此扩展程序非常直接，与其他任何扩展程序的安装方式没有区别。

1. 将我的扩展程序仓库添加到您的 home assistant 实例（在 supervisor  addons 存储中点击右上角，或者如果您已配置了 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展程序。
1. 点击 `Save` 按钮以保存您的配置。
1. 将扩展程序选项设置为您的偏好设置。
1. 启动扩展程序。
1. 检查扩展程序的日志，查看一切是否顺利。
1. 打开 webUI 并调整软件选项。

## 配置

使用扩展程序的 `env_vars` 选项传递额外的环境变量（大写或小写名称均支持）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 获取详细信息。

有一个 [操作演示](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 可帮助您快速上手。
更多信息请查看 [官方 wiki](https://github.com/Kometa-Team/Kometa)。

您可以通过以下两种方式配置选项：

- 扩展程序选项

```yaml
PUID: 1000 #用于 UserID - 下方解释
PGID: 1000 #用于 GroupID - 下方解释
TZ: Europe/London #指定要使用时区，例如 Europe/London。
KOMETA_CONFIG: /config/addons_config/kometa/config/config.yml #指定要使用的自定义配置文件。
KOMETA_TIME: 03:00 #每天更新时间的逗号分隔列表。格式：HH:MM。
KOMETA_RUN: False #设置为 True 以不使用调度器运行。
KOMETA_TEST: False #设置为 True 以仅运行具有 test: true 的集合的调试模式。
KOMETA_NO_MISSING: False #设置为 True 以跳过所有缺失的电影/电视剧功能。
```

- Config.yaml (高级用法)

额外的变量可以通过在 config.yaml 中标注配置选项中定义的位置添加 `ENV` 变量来设置。请参阅此指南：<https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables>

完整的 `ENV` 变量列表可在此处查看：<https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 github 上创建问题

## 图示

---

![illustration](https://dausruddin.com/wp-content/uploads/2020/05/plex-meta-manager-v3-1024x515.png)

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
