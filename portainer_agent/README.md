# Home assistant 附加组件：Portainer_agent

我利用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、适配 HA 更改以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我约使用了 5-10 个我拥有超 110 个附加组件，所以我定期安装测试机器（并购买一些我没有自己使用的测试服务，如 VPN）来调试和改进附加组件。

如果这个附加组件为您节省了时间或让配置更简单，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_agent%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢大家给我的仓库点个星！请点击上方图片星标它，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_agent/stats.png)

## 关于

---

当使用 Docker API 管理 Docker 环境时，Portainer Agent 是一种针对 Docker API 限制的工作around。用户与特定资源（容器、网络、卷和镜像）的交互仅限于 Docker API 请求所指向节点上可用的那些。

此容器基于官方 Docker 镜像（https://github.com/portainer/agent），并使用 @homecentr 逻辑（https://github.com/homecentr/docker-portainer-agent）修改，以便在 homeassistant 基础镜像中使用。

## 警告

portainer_agent 附加组件非常强大，几乎给您提供对整个系统的访问权限。虽然该附加组件是经过精心创建和维护的，并考虑了安全性，但在误用或不熟练的手中，它可能会损坏您的系统。

## 安装

---

安装此附加组件非常简单，与其他任何附加组件的安装没有区别。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件存储栏顶部右侧，或者如果您已配置过我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以保存您的配置。
4. 将附加组件选项设置为您的偏好设置。
5. 启动附加组件。
6. 检查附加组件的日志，查看一切是否正常。
7. 打开 WebUI 并调整软件选项

操作说明（感谢 @Mincka）：
禁用保护模式，然后从其他 Portainer 集群添加一个新环境，类型为"Agent"，输入 HA 的 IP 地址和端口 9001。

![image](https://github.com/alexbelgium/hassio-addons/assets/6184289/f5c5f264-69d0-4d3c-b900-476e21aef05a)

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可以是大写或小写）。详情请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

---

主要选项：
```yaml
    "PORTAINER_AGENT_ARGS": 传递给 portainer-agent 可执行文件的命令行参数
```

其他选项：参见 https://github.com/portainer/agent#deployment-options

## 支持

在 Github 创建问题

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
