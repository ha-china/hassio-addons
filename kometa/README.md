<!-- markdownlint-disable MD043 -->

# Home Assistant 插件：Kometa

我在业余时间维护其他 Home Assistant 插件：追踪上游变化、跟随 HA 更改以及在实际硬件上进行测试耗费了大量时间（以及一些金钱）。我使用大约 5-10 个我拥有的 100 多个插件，因此我安装测试机（并购买一些测试服务，如 VPN），以便不亲自使用它们来排查和改进插件

如果此插件能为您节省时间或让您的设置更简单，我将不胜感激，非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人！点击下方的图片来星标我的仓库，这样它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 关于

---

[Kometa](https://kometa.wiki/en/latest/) 是一个 Python 3 脚本，可以通过 YAML 配置文件连续运行，按时间表更新您图书馆中电影、系列剧集和收藏的元数据，以及根据维基中详细说明的多种方法自动创建收藏。

此插件基于 docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

此插件的安装非常简单，与其他插件的安装方式没有区别。

1. 将我的插件库添加到您的 Home Assistant 实例中（在 Supervisor 插件存储库顶部右侧，或如果您已配置了我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 查看插件日志以查看是否一切正常。
1. 打开 Web UI 并根据需要调整软件选项。

## 配置

使用插件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

有一个 [walkthrough](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 可供选择，帮助您快速启动。有关更多信息，请参阅 [官方 Wiki](https://github.com/Kometa-Team/Kometa)。

有两种方式可配置选项：

- 插件选项

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

可以通过在您的插件选项位置定义的 `config.yaml` 中添加它们作为 ENV 变量来设置额外变量：<https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables>

完整的 ENV 变量列表如下：<https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 GitHub 上创建问题。

## 插图

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
