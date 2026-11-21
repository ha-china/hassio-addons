# Home Assistant 附加组件：Portainer Business Edition

我利用空闲时间维护此及其他 Home Assistant 附加组件：跟进上游变更、HA 变更以及在真实硬件上进行测试需要大量的时间（以及一些金钱）。我的 100 多个附加组件中，大约 5-10 个我会很频繁地使用，因此我会安装测试机器（并购买一些测试服务，如 vpn）来帮助测试和改进附加组件，即使我自己也不使用它们。

如果这个附加组件能为您节省时间或简化您的设置，我将非常感谢您的支持！

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

这是 [Portainer 附加组件](https://github.com/alexbelgium/hassio-addons/tree/master/portainer) 的 **Business Edition**（商业版）变体。它分发 `portainer/portainer-ee` 构建，而不是社区版（Community Edition）。商业版最多支持 3 个节点免费使用，您需要注册后获得许可证密钥：<https://www.portainer.io/take-3>；首次启动时请在 Web UI 中输入该密钥。没有密钥时，它将运行一个有时限的试用版。

从 https://github.com/hassio-addons/addon-portainer 分叉而来
已实施变更：商业版镜像；更新到最新版本；ingress；ssl；通过附加组件选项设置密码；允许手动覆盖

_感谢大家都给我 repo 加星！要给它加星，请点击下方的图片，然后它就会出现于右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_be/stats.png)

## 关于

---

Portainer 是一个开源的轻量级管理界面，允许您轻松管理和控制您的 Docker 主机或 Docker Swarm 集群。

管理 Docker 从未如此容易。Portainer 提供了 Docker 的详细概览，并允许您管理容器、镜像、网络和卷。

## 恢复备份

打开附加组件选项，将密码设置为“空”。重启附加组件，它将允许从备份恢复 Portainer。您需要将备份文件放在可访问的文件夹中（如 /share），以便挂载到附加组件中。

## 警告

Portainer 附加组件非常强大，并授予您对系统几乎完全的控制权。尽管该附加组件是经过精心创建和维护并注重安全的，但在错误或没有经验的使用中，它可能会损坏您的系统。

## 安装

---

此附加组件的安装非常简单，与安装任何其他附加组件没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 Supervisor 附加组件商店右上角，或者如果您已配置了我的 Home Assistant，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以存储您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件日志，查看一切是否正常。
1. 打开 Web 界面并调整软件选项。

## 配置

Web UI 可访问地址为 <http://homeassistant:port> 或通过侧边栏使用 Ingress 访问。
默认用户名为 "admin"，密码为您在附加组件 `password` 选项中设置的值（默认 `homeassistant`）。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 Web 接口启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `password` | str | `homeassistant` | 管理员密码（最小 12 个字符，留空可恢复备份） |

### 示例配置

```yaml
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
password: "your-secure-password-123"
```

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（支持小写或大写字母名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安全

`password` 选项附带默认值 `homeassistant`。Portainer 控制 Docker 守护进程，因此任何能使用该密码访问 9000 端口的人都将获得对每个容器（进而对整个主机）的控制权。在新的安装中，请在首次启动前在附加组件选项中更改密码。在现有安装中，请直接在 Portainer 内部更改管理员密码：在那里更改选项会重置 Portainer（旧数据库将移至 `/share`）。当默认密码仍设置时，附加组件会在其启动日志中打印警告。

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
