# Home Assistant 插件: Requestrr

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Frequestrr%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Frequestrr%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Frequestrr%2Fconfig.json)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一个给我的 repo 点赞的人！要点赞，请点击下方的图片，然后在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Star 用户列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/requestrr/stats.png)

## 关于

---

[Requestrr](https://github.com/darkalfx/requestrr) 是一个聊天机器人，旨在通过聊天简化使用 Sonarr/Radarr/Ombi 等服务。当前平台仅限于 Discord，但该机器人是基于快速适应新功能以及新平台的理念构建的。
该插件基于 Docker 镜像 https://github.com/linuxserver/docker-requestrr

## 安装

---

安装此插件非常简单，与安装任何其他插件没有区别。

1. 将我的插件库添加到您的 Home Assistant 实例中（在超级管理员插件商店右上角，或点击下方按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示添加插件库对话框，预填特定库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以存储您的配置。
4. 根据您的偏好设置插件选项
5. 启动插件。
6. 检查插件的日志以查看一切是否顺利进行。
7. 打开 webUI 并调整软件选项

## 配置

---

Webui 可以在 <http://homeassistant:PORT> 找到。
默认用户名/密码：在启动日志中描述。
请首次运行该插件，然后使用我的文件浏览器插件自定义在 /addon_configs/db21ed7f_requestrr 中创建的配置文件。

```yaml
PGID: user
GPID: user
TZ: timezone
```

## 支持

在 GitHub 上创建问题

## 插图

![插图](https://nashosted.com/wp-content/uploads/2020/04/requestrr-discord-nashosted.com_-1024x680.jpg)

---

[仓库]: https://github.com/alexbelgium/hassio-addons