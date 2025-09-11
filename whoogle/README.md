# Home assistant 插件：whoogle-search

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwhoogle%2Fconfig.json)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/whoogle/stats.png)

## 关于

[whoogle-search](https://github.com/benbusby/whoogle-search) 是一个自托管、无广告、尊重隐私的元搜索引擎。
此插件基于 Docker 镜像 https://hub.docker.com/r/benbusby/whoogle-search/tags

## 配置

Webui 可以在 <http://homeassistant:PORT> 找到。
配置可以通过应用的 WebUI 进行，除了以下选项

选项可以通过两种方式进行配置：

- 插件选项

```yaml
"CONFIG_LOCATION": config.yaml 的位置（见下文）
```

- Config.yaml

自定义环境变量可以添加到插件选项中引用的 config.yaml 文件。完整的环境变量可以在这里找到：https://github.com/benbusby/whoogle-search#environment-variables。必须以有效的 yaml 格式输入，在插件启动时会进行验证。

## 安装

此插件的安装相当简单，与安装其他任何插件没有区别。

1. 将我的插件库添加到您的 home assistant 实例中（在 Supervisor 插件商店顶部右侧，或点击下面的按钮，如果您已配置我的 HA）
   [![打开你的 Home Assistant 实例并显示添加插件库对话框，特定插件库 URL 已预填。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 根据您的偏好设置插件选项。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项。

## 支持

在 GitHub 上创建一个问题。

## 插图

![插图](https://github.com/benbusby/whoogle-search/raw/main/docs/screenshot_desktop.jpg)

[repository]: https://github.com/alexbelgium/hassio-addons