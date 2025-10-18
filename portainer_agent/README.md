# Home assistant add-on: Portainer_agent

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_agent/stats.png)

## 关于

---

Portainer Agent 是一个针对 Docker API 限制的解决方案，当使用 Docker API 管理 Docker 环境时。用户与特定资源（容器、网络、卷和镜像）的交互仅限于 Docker API 请求目标节点上可用的资源。

此容器基于官方的 docker 镜像（https://github.com/portainer/agent），并使用 @homecentr 逻辑（https://github.com/homecentr/docker-portainer-agent）进行修改，以便在 homeassistant 基础镜像中使用。

## 警告

Portainer_agent 添加组件非常强大，几乎可以访问您的整个系统。虽然这个添加组件是经过精心创建和维护的，并且考虑了安全性，但在错误或不熟悉的人手中，它可能会损坏您的系统。

## 安装

---

此添加组件的安装非常简单，与安装任何其他添加组件没有什么不同。

1. 将我的添加组件仓库添加到您的 home assistant 实例中（在 supervisor 添加组件商店的右上角，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示添加添加组件仓库对话框，预填充特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此添加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 设置添加组件选项以符合您的偏好。
1. 启动添加组件。
1. 检查添加组件的日志，看看是否一切正常。
1. 打开 WebUI 并调整软件选项。

说明（感谢 @Mincka）：
禁用保护模式，然后从其他 Portainer 集群中添加一个新的环境，类型为 "Agent"，IP 地址为 HA，端口为 9001。

![image](https://github.com/alexbelgium/hassio-addons/assets/6184289/f5c5f264-69d0-4d3c-b900-476e21aef05a)

## 配置

---

主要选项：
```yaml
    "PORTAINER_AGENT_ARGS": 传递给 portainer-agent 可执行文件的命令行参数
```

其他选项：请参阅 https://github.com/portainer/agent#deployment-options

## 支持

在 github 上创建问题