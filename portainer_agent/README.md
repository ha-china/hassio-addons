# Home assistant add-on: Portainer_agent


我利用业余时间维护这个和其他Home Assistant add-ons：跟上上游的更改、HA的更改，并在真实硬件上测试需要大量时间（和一些钱）。我大约使用我超过110个add-ons中的5-10个，因此我安装了测试机器（和一些我自己的测试服务，例如VPN），以便我不用来调试和改进add-ons。

如果这个add-on节省了你的时间或使你的设置更简单，我将非常感谢你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片来点赞它，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_agent/stats.png)

## About

---

Portainer Agent是一个针对使用Docker API管理Docker环境的Docker API限制的解决方案。用户与特定资源（容器、网络、卷和镜像）的交互仅限于Docker API请求的目标节点上可用的资源。

这个容器基于官方的docker镜像（https://github.com/portainer/agent），并使用@homecentr逻辑（https://github.com/homecentr/docker-portainer-agent）进行修改，以便在homeassistant基础镜像中使用。

## WARNING

portainer_agent add-on非常强大，几乎可以让你访问整个系统。虽然这个add-on是精心创建和维护的，并且考虑了安全性，但在错误或不熟悉的人手中，
它可能会损坏你的系统。

## Installation

---

这个add-on的安装非常简单，与安装任何其他add-on没有区别。

1. 将我的add-ons仓库添加到你的home assistant实例中（在supervisor add-ons商店的右上角，或者如果你已经配置了我的HA，点击下面的按钮）
   [![打开你的Home Assistant实例并显示带有特定仓库URL预填的添加add-on仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个add-on。
1. 点击`Save`按钮以保存你的配置。
1. 根据你的偏好设置add-on选项
1. 启动add-on。
1. 检查add-on的日志以查看是否一切正常。
1. 打开webUI并调整软件选项

说明（感谢@Mincka）：
禁用保护模式，然后从其他Portainer集群中，添加一个新的环境，类型为"Agent"，IP地址为HA，端口为9001

![image](https://github.com/alexbelgium/hassio-addons/assets/6184289/f5c5f264-69d0-4d3c-b900-476e21aef05a)

## Configuration

使用add-on的`env_vars`选项传递额外的环境变量（大小写名称）。详细信息请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

---

主要选项：
```yaml
    "PORTAINER_AGENT_ARGS": 传递给portainer-agent可执行文件的命令行参数
```

其他选项：请参阅 https://github.com/portainer/agent#deployment-options

## Support

在github上创建问题



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
