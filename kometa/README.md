<!-- markdownlint-disable MD043 -->

# Home assistant 插件：Kometa

我在业余时间维护这个以及其他 Home Assistant 插件：跟踪上游更改、HA 更改，并在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用大约 5-10 个我的 >110 个插件，所以我定期安装我本人不使用测试机（并购买一些测试服务如 vpn），用于调试和改进插件

如果这个插件为你节省了时间或让你的设置更简单，我将非常感激你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我 repo 星标的人！要星标它，点击下方图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 关于

---

[Kometa](https://kometa.wiki/en/latest/) 是一个 Python 3 脚本，可以使用 YAML 配置文件持续运行，以按时间表更新您图书馆中电影、剧集和集合的元数据，并根据维基中详细说明的各种方法自动构建集合。

此插件基于 docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

此插件的安装非常直接，与其他插件的安装没有不同。

1. 将我的插件仓库添加到您的 home assistant 实例（在 supervisor addons store 右上角，或如果您已配置我的 HA，请单击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加工具包仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 单击 `保存` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 检查插件日志以查看一切是否正常。
1. 打开 WebUI 并调整软件选项

## 配置

使用插件 `env_vars` 选项传递额外的环境变量（大写或小写名称）。有关详细信息，请查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

有一个 [入门指南](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 可以帮助您开始使用。
更多信息请查阅 [官方 wiki](https://github.com/Kometa-Team/Kometa)。

有两个方法可以配置选项：

- 插件选项

```yaml
PUID: 1000 #用于 UserID - 见下方解释
PGID: 1000 #用于 GroupID - 见下方解释
TZ: Europe/London #指定要使用的时区，例如 Europe/London。
KOMETA_CONFIG: /config/addons_config/kometa/config/config.yml #指定要使用的自定义配置文件。
KOMETA_TIME: 03:00 #按每天更新的时间逗号分隔列表。格式：HH:MM。
KOMETA_RUN: False #设置为 True 以在不使用调度器的情况下运行。
KOMETA_TEST: False #设置为 True 以仅包含 test: true 的集合的调试模式下运行。
KOMETA_NO_MISSING: False #设置为 True 以在不运行任何缺少电影/剧集功能的情况下运行。
```

- Config.yaml（高级用法）

可以通过在 config.yaml 中添加它们来将额外变量设置为 ENV 变量，位置在您插件选项中定义的位于此指南定义的位置：<https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables>

完整的 ENV 变量列表可在此处找到：<https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 github 上创建一个问题

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
