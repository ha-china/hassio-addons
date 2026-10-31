# Home assistant 附加组件：Portainer Business Edition

我利用业余时间维护此及其他 Home Assistant 附加组件：跟上上游更改、HA 更改以及在实际硬件上进行测试需要大量时间（以及一些金钱）。我在我超过 110 个附加组件中大约使用 5-10 个，所以我会安装我本人不使用的测试机器（并购买一些测试服务，如 vpn），以便进行故障排除和改进附加组件。

如果这个附加组件为您节省了时间或让您的设置更简单，我会非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

这是 [Portainer 附加组件](https://github.com/alexbelgium/hassio-addons/tree/master/portainer) 的 **商业版** 变体。它分发的是 `portainer/portainer-ee` 构建，而不是社区版。商业版最多支持 3 个节点免费使用，您需要通过注册于 <https://www.portainer.io/take-3> 获取许可密钥；首次启动时在 web UI 中输入该密钥。没有密钥将在限时试用模式下运行。

源自：https://github.com/hassio-addons/addon-portainer
实施的更改：商业版镜像；更新为最新版本；ingress；ssl；通过附加组件选项设置密码；允许手动覆盖

_感谢所有人星标了我的仓库！要星标它，请点击下方图片，然后它将显示在右上角。 thanks!_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_be/stats.png)

## 关于

---

Portainer 是一个开源的轻量级管理 UI，允许您轻松管理 Docker 主机或 Docker swarm 集群。

管理 Docker 从未如此容易。Portainer 提供详细的 Docker 概览，并让您管理容器、镜像、网络和卷。

## 还原备份

打开附加组件选项，将密码设置为“空”。重启附加组件，将允许从备份还原 portainer。您需要将备份放入可访问的文件夹，如 /share，以便将其挂载到附加组件中

## 警告

Portainer 附加组件功能强大，并为您提供对整个系统的几乎完全访问权限。虽然此附加组件是精心创作和维护的，并且考虑了安全性，但在错误或不熟练的操作下，它可能会损坏您的系统。

## 安装

---

此附加组件的安装非常直接，与其他附加组件的安装没有不同。

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志以确定一切是否正常。
1. 打开 webUI 并调整软件选项

## 配置

WebUI 可通过 <http://homeassistant:port> 访问，或者使用 Ingress 在侧边栏中访问。
默认用户名是"admin"，密码是在附加组件 `password` 选项中设置的值（默认值 `homeassistant`）。

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `password` | str | `homeassistant` | 管理密码（至少 12 个字符，留空以还原备份） |

### 示例配置

```yaml
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
password: "your-secure-password-123"
```

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。详细信息请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 支持

在 github 上创建问题

## 插图

---

![illustration](https://github.com/hassio-addons/addon-portainer/raw/main/images/screenshot.png)

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
