# Home assistant 插件：Organizr

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Forganizr%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一个给我的仓库点赞的朋友！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/organizr/stats.png)

## 关于

一个用PHP编写的HTPC/Homelab服务组织器。
这个插件基于来自linuxserver.io的[docker镜像](https://hub.docker.com/r/organizr/organizr)。

## 安装

这个插件的安装相当简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件库][repository]添加到你的Hass.io实例中。
1. 安装这个插件。
1. 点击`保存`按钮以存储你的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 小心根据你的偏好配置插件，请查看官方文档以获取详细信息。

## 配置

Webui可以在<http://homeassistant:80>找到。
在/data/...中创建数据库。

```yaml
PGID: user, 不能为0
GPID: user, 不能为0
```

## 支持

在github上创建一个问题

## 插图

![bjaSt3fTfdXhw5vyl-7Lqz1EOjJIyh8lrdqxA53qO6E](https://user-images.githubusercontent.com/44178713/123061812-43601b00-d40c-11eb-993c-2aed31072775.jpg)

[repository]: https://github.com/alexbelgium/hassio-addons