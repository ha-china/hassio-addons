# 家居助手插件：Arpspoof

[![赞助][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![赞助][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Farpspoof%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Farpspoof%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Farpspoof%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

_感谢所有给我的仓库点赞的人！点击下面的图片点赞，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/arpspoof/stats.png)

## 关于

[arpspoof](https://github.com/t0mer/Arpspoof-Docker) 添加了阻止本地网络设备互联网连接的功能
这个插件基于这个docker镜像 https://hub.docker.com/r/techblog/arpspoof-docker

查看所有信息：https://en.techblog.co.il/home-assistant-cut-internet-connection-using-arpspoof/ ，或者在上游镜像文档：https://github.com/t0mer/Arpspoof-Docker

## 安装

这个插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到你的家居助手实例中（在supervisor插件商店的右上角，或者如果你已经配置了我的HA，点击下面的按钮）
   [![打开你的家居助手实例并显示添加插件仓库对话框，预填充特定的仓库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮来保存你的配置。
1. 设置插件的选项到你的偏好设置
1. 启动插件。
1. 检查插件的日志来查看是否一切正常。
1. 打开WebUI并调整软件选项

## 配置

Webui可以在 <http://homeassistant:PORT> 找到。

```yaml
ROUTER_IP: 127.0.0.1 #必须的Router IP
INTERFACE_NAME: name #必须的接口名。如果为空则自动填充。
```

## 家居助手配置

描述：[techblog](https://en.techblog.co.il/2021/03/15/home-assistant-cut-internet-connection-using-arpspoof/)

你可以使用一个 `command_line` 开关来暂时禁用你网络中的某个设备。

```yaml
- platform: command_line
  switches:
    iphone_internet:
      friendly_name: "iPhone互联网"
      command_off: "/usr/bin/curl -f -X GET http://{HA-IP}:7022/disconnect?ip={iPhoneIP}"
      command_on: "/usr/bin/curl -f -X GET http://{HA-IP}:7022/reconnect?ip={iPhoneIP}"
      command_state: "/usr/bin/curl -f -X GET http://{HA-IP}:7022/status?ip={iPhoneIP}"
      value_template: >
        {{ value != "1" }}
```

## 支持

在github上创建一个问题

## 插图

无插图