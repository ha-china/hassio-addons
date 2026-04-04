<!-- markdownlint-disable MD043 -->

# Home Assistant 插件：Kometa

我在业余时间维护这个以及其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在真实硬件上进行测试需要花费很多时间（还有一些钱）。我经常使用我超过 110 个插件中的 5-10 个，所以我安装了测试机器（并购买了一些我自身不使用的测试服务，如 vpn），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更加简单，我将非常感激您的支持！

[![买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fplex_meta_manager%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点星的人！要星标它，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/kometa/stats.png)

## 关于

---

[Kometa](https://kometa.wiki/en/latest/) 是一个 Python 3 脚本，可以使用 YAML 配置文件持续运行，以计划的时间更新您库中电影、电视剧和收藏的元数据，以及根据维基中详细说明的多种方法自动构建收藏。

此插件基于 Docker 镜像 <https://github.com/linuxserver/docker-kometa>

## 安装

---

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在监督器插件商店的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 打开 WebUI 并调整软件选项

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

有一个 [教程](https://github.com/Kometa-Team/Kometa#setting-up-the-initial-config-file) 可用于帮助您开始运行。
更多信息请参阅 [官方维基](https://github.com/Kometa-Team/Kometa)。

选项可以通过两种方式配置：

- 插件选项

```yaml
PUID: 1000 #用于 UserID - 以下解释
PGID: 1000 #用于 GroupID - 以下解释
TZ: Europe/London #指定要使用的时间区域 EG Europe/London。
KOMETA_CONFIG: /config/addons_config/kometa/config/config.yml #指定要使用的自定义配置文件。
KOMETA_TIME: 03:00 #每天更新的时间列表。格式：HH:MM。
KOMETA_RUN: False #设置为 True 以在不使用调度程序的情况下运行。
KOMETA_TEST: False #设置为 True 以在调试模式下运行，仅针对具有 test: true 的收藏。
KOMETA_NO_MISSING: False #设置为 True 以在不执行任何缺失电影/电视剧功能的情况下运行。
```

- Config.yaml（高级用法）

可以通过在配置.yaml 中添加它们来设置作为 ENV 变量的附加变量，该配置.yaml 在您的插件选项中根据此指南定义：<https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables>

ENV 变量的完整列表可以在此处查看：<https://kometa.wiki/en/latest/kometa/environmental/>

## 支持

在 github 上创建一个问题

## 图解

---

![图解](https://dausruddin.com/wp-content/uploads/2020/05/plex-meta-manager-v3-1024x515.png)
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
