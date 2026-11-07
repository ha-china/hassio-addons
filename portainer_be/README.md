# Home Assistant 插件：Portainer Business Edition

我利用业余时间维护此插件以及其他 Home Assistant 插件：跟进上游更新、Home Assistant 变更以及在实际硬件上进行测试需要大量时间（和一些金钱）。我使用了约 5-10 个我的 110 多个插件，以至于我会定期安装测试机（并购买一些测试服务，如 vpn），即使这些服务我个人也不使用，以此来维修和改进这些插件

如果此插件为您节省时间或让您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

这是 [Portainer 插件](https://github.com/alexbelgium/hassio-addons/tree/master/portainer) 的 **Business Edition（企业版）** 版本。它使用的是 `portainer/portainer-ee` 构建而不是社区版（Community Edition）。3 个节点及以下为免费，需注册 <https://www.portainer.io/take-3> 获取许可证密钥；在首次启动时于 Web UI 中输入该密钥。没有密钥时它将运行限时试用版。

源自 : https://github.com/hassio-addons/addon-portainer
实现更改 : Business Edition 镜像 ; 更新到最新版本 ; ingress; ssl; 通过插件选项设置密码 ; 允许手动覆盖

_感谢所有人打赏我的 repos! 请点击下面的图片将其置顶，谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_be/stats.png)

## 关于

---

Portainer 是一个开源的轻量级管理 UI，允许您轻松管理您的 Docker 主机（台）或 Docker Swarm 集群。

管理 Docker 从未如此容易。Portainer 提供了 Docker 的详细概览，并允许您管理容器、镜像、网络和数据卷。

## 还原备份

打开插件选项并将密码设置为“空”。重启插件，它将允许从备份还原 Portainer。您需要将备份放在可访问的文件夹中，例如 /share，以便它在插件中被挂载

## 警告

Portainer 插件非常强大，几乎为您提供了对整个系统的访问权限。虽然此插件经过精心设计和维护，并时刻考虑安全，但在错误或缺乏经验的手中使用，可能会损坏您的系统。

## 安装

---

此插件的安装非常直接，与其他任何插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 添加插件商店的右上角，或者如果您已配置我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件商店对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Saved` 按钮以保存您的配置。
1. 将插件选项设置为您偏好设置。
1. 启动插件。
1. 检查插件日志以查看是否一切顺利。
1. 打开 Web UI 并调整软件选项。

## 配置

Web UI 可在 <http://homeassistant:port> 或通过 Ingress 在您的侧边栏中找到。
默认用户名是"admin"，密码是您设置的插件 `password`选项的值（默认 `homeassistant`）。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 启用 Web 接口的 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `password` | str | `homeassistant` | 管理员密码（最少 12 个字符，留空可还原备份）|

### 示例配置

```yaml
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
password: "your-secure-password-123"
```

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项来传递额外的环境变量（大小写名称）。详细信息请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 支持

在 github 上创建 issue

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
