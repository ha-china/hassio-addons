# Home Assistant 插件：Arpspoof

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Farpspoof%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Farpspoof%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Farpspoof%2Fconfig.json)

[![Codacy 勋章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub 超级 Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Stargazers 仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/arpspoof/stats.png)

## 关于

[arpspoof](https://github.com/t0mer/Arpspoof-Docker) 添加了阻止本地网络设备的互联网连接的功能。
此插件基于 docker 镜像 https://hub.docker.com/r/techblog/arpspoof-docker

在这里查看所有信息 : https://en.techblog.co.il/2021/03/15/home-assistant-cut-internet-connection-using-arpspoof/，或者在上游镜像文档中查看 : https://github.com/t0mer/Arpspoof-Docker

## 安装

此插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在主管插件商店的右上角，或者如果您已配置我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，预填特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 根据您的偏好设置插件选项。
1. 启动插件。
1. 检查插件的日志，以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项。

## 配置

Webui 可以在 <http://homeassistant:PORT> 找到。

```yaml
ROUTER_IP: 127.0.0.1 #必需的路由器 IP
INTERFACE_NAME: name #必需的接口名称。如果为空则自动填充。
```

## Home Assistant 配置

描述 : [techblog](https://en.techblog.co.il/2021/03/15/home-assistant-cut-internet-connection-using-arpspoof/)

您可以使用 `command_line` 开关临时禁用网络中的互联网设备。

```yaml
- platform: command_line
  switches:
    iphone_internet:
      friendly_name: "iPhone 互联网"
      command_off: "/usr/bin/curl -f -X GET http://{HA-IP}:7022/disconnect?ip={iPhoneIP}"
      command_on: "/usr/bin/curl -f -X GET http://{HA-IP}:7022/reconnect?ip={iPhoneIP}"
      command_state: "/usr/bin/curl -f -X GET http://{HA-IP}:7022/status?ip={iPhoneIP}"
      value_template: >
        {{ value != "1" }}
```

## 支持

在 GitHub 上创建一个问题

## 插图

无插图