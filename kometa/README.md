<!-- markdownlint-disable MD043 -->

# Home Assistant 附加组件：Kometa

我在业余时间维护此及其他 Home Assistant 附加组件：紧跟上游更改、HA 更改，并在真实硬件上进行测试需要大量时间（和一笔费用）。我有超过 110 个附加组件，只稳定使用了其中的 5-10 个，所以我定期安装测试机（并购买一些我自己不使用的服务，如 vpn）来调试和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置更容易，您的支持将使我深感感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![入口点 (Ingress)](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![架构 (Arch)](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者 (Builder)](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_Thanks to everyone having starred my repo! To star it click on the image below, then it will be on top right. Thanks!_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 关于

---

[Kometa](https://kometa.wiki/en/latest/) 是一个 Python 3 脚本，可以使用 YAML 配置文件连续运行，以定期更新图书馆中电影、剧集和收藏的元数据，并自动根据维基中详细说明的各种方法构建收藏。

此附加组件基于 Docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装没有区别。

1. 将我的附加组件仓库添加到 Home Assistant 实例（在 Supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示预填充特定仓库 URL 的“添加附加组件仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志以查看是否正常。
1. 打开 Web UI 并根据需要调整软件选项

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可以是大写或小写）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

有一个 [教程](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 可以帮助您快速上手。
更多信息参见 [官方维基](https://github.com/Kometa-Team/Kometa)。

选项可以通过以下两种方式配置：

- 附加组件选项

```yaml
PUID: 1000 #用于 UserID - 见下文说明
PGID: 1000 #用于 GroupID - 见下文说明
TZ: Europe/London #指定要使用的时区，例如 Europe/London。
KOMETA_CONFIG: /config/addons_config/kometa/config/config.yml #指定要使用的自定义配置文件。
KOMETA_TIME: 03:00 #每日更新的时间列表。格式：HH:MM。
KOMETA_RUN: False #设置为 True 可以不调度器直接运行。
KOMETA_TEST: False #设置为 True 可以仅以调试模式运行，只检查带有 test: true 的收藏。
KOMETA_NO_MISSING: False #设置为 True 可以运行而不执行任何缺失的电影/剧集功能。
```

- Config.yaml（高级用法）

可以为添加到 config.yaml 中定义位置的附加组件选项以 ENV 变量的形式设置附加变量，具体请参考以下指南：<https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables>

完整的 ENV 变量列表见：<https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 GitHub 上创建问题

## 插图

---

![插图](https://dausruddin.com/wp-content/uploads/2020/05/plex-meta-manager-v3-1024x515.png)

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
