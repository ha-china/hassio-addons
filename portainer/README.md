# 家庭辅助软件附加组件：Portainer

我在业余时间维护和更新其他家庭辅助软件附加组件：跟踪上游更改、家庭辅助软件更改，并在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用的附加组件大约有 10 个左右，在 >110 个附加组件中经常使用。为了调试和改进附加组件，我会安装测试机器（并购买一些我自己不使用的测试服务，例如 VPN）。

如果这个附加组件能为您节省时间或让设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码审查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

源自：https://github.com/hassio-addons/addon-portainer  
实现更改：更新到最新版本；Ingress；SSL；通过附加组件选项设置密码；允许手动覆盖

_感谢所有为我仓库点赞的人！要点赞，请点击下方的图片，它将显示在右上角。谢谢！_

[![星号托管库成员名单 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer/stats.png)

## 简介

---

Portainer 是一个开源的轻量级管理界面，您可以轻松管理 Docker 主机（或）Docker swarm 集群。

管理 Docker 从未如此简单。Portainer 提供 Docker 的详细概览，并允许您管理容器、镜像、网络和卷。

## 恢复备份

打开附加组件选项，并将密码设置为“空”。重启附加组件，它将允许从备份恢复 Portainer。您需要将备份放在可访问的目录中，例如 /share，以便在附加组件中挂载。

## 警告

Portainer 附加组件非常强大，几乎可以为您提供对整个系统的访问权限。虽然此附加组件是经过精心设计和维护的，并将安全放在第一位，但在错误或不熟练的操作下，它可能会损坏您的系统。

## 安装

---

此附加组件的安装非常简单，与其他任一附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的家庭辅助软件实例中（在 supervisor 附加组件存储中点击右上角，或如果您已配置了我的 HA，则点击下方按钮）
   [![打开您的家庭辅助软件实例并显示附加组件仓库对话框，其中预填写特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 单击 `保存` 按钮以保存配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，看看是否一切顺利。
1. 打开 Web UI 并调整软件选项

## 配置

Web UI 可找到于 <http://homeassistant:port> 或通过侧边栏中的 Ingress 访问。
默认用户名为 "admin"，密码在启动日志中描述。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（在 `/ssl/` 中） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（在 `/ssl/` 中） |
| `password` | str | `homeassistant` | 管理员密码（最少 12 个字符，留空以恢复备份） |

### 示例配置

```yaml
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
password: "your-secure-password-123"
```

### 自定义脚本和环境变量

该附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

## 支持

在 github 上创建问题

## 说明

---

![说明](https://github.com/hassio-addons/addon-portainer/raw/main/images/screenshot.png)

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
