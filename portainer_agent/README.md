# 家庭助理插件：Portainer_agent

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.json)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub超级检查器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点赞的人！要点赞请点击下面的图像，然后它会在右上角。谢谢！_

[![@alexbelgium/hassio-addons的星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_agent/stats.png)

## 关于

---

Portainer Agent 是在使用 Docker API 进行 Docker 环境管理时，针对 Docker API 限制的一种解决方法。用户与特定资源（容器、网络、卷和镜像）的交互仅限于通过 Docker API 请求所针对的节点上可用的资源。

该容器基于官方 Docker 镜像 (https://github.com/portainer/agent) 并采用 @homecentr 逻辑 (https://github.com/homecentr/docker-portainer-agent) 进行了修改，以便在 Home Assistant 基础镜像中使用。

## 警告

portainer_agent 插件非常强大，几乎可以访问您的整个系统。虽然该插件是在谨慎和考虑安全的前提下创建和维护的，但在错误或没有经验的手中，它可能会损坏您的系统。

## 安装

---

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的家庭助理实例中（在监督员插件商店右上角，或者如果您已配置了我的 HA，请点击下面的按钮）
   [![打开您的家庭助理实例并显示添加插件仓库对话框，预填特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 根据您的偏好设置插件选项。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 webUI 并调整软件选项。

说明（感谢 @Mincka）：
禁用保护模式，然后从其他 Portainer 集群中添加类型为“Agent”的新环境，填入 HA 的 IP 地址和端口 9001。

![图片](https://github.com/alexbelgium/hassio-addons/assets/6184289/f5c5f264-69d0-4d3c-b900-476e21aef05a)

## 配置

---

主要选项：
```yaml
    "PORTAINER_AGENT_ARGS": 端口代理可执行文件的命令行参数
```

其他选项：请参见 https://github.com/portainer/agent#deployment-options

## 支持

在 GitHub 上创建一个问题。