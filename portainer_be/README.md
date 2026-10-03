# Home Assistant 插件：Portainer 企业版

我利用业余时间维护此及其他 Home Assistant 插件：跟进上游变更、Home Assistant 的变更更新，以及在真实硬件上进行测试需要耗费大量时间（甚至一些金钱）。我大约使用了超过 110 个插件中的 5-10 个，因此我定期安装测试机器（并购买一些测试服务，如虚拟私有网）来我自己不使用，以便排查问题和改进插件。

如果此插件能为您节省时间或简化设置，我将不胜感激地感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)
![入口路由 (Ingress)](https://img.shields.io/badge/dynamic/yaml?label=入口路由 (Ingress)&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)
![架构 (Arch)](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构 (Arch)&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fportainer_be%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=lint 代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

这是 [Portainer 插件](https://github.com/alexbelgium/hassio-addons/tree/master/portainer) 的**企业版**变体。它分发 `portainer/portainer-ee` 构建而非社区版。企业版最多支持 3 个节点免费使用，您需通过注册于 <https://www.portainer.io/take-3> 获取许可证密钥；首次启动时在 Web UI 中输入该密钥。没有密钥时，它将运行限时试用。

源自 : https://github.com/hassio-addons/addon-portainer
实施变更 : 企业版镜像；更新至最新版本；入口路由；ssl；通过插件选项设置密码；允许手动覆盖

_感谢大家将我仓库设为星标！喜欢的请点击下图，它将位于右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/portainer_be/stats.png)

## 关于

---

Portainer 是一个开源的轻量级管理 UI，可让您轻松管理 Docker 主机或 Docker 自托管集群。

管理 Docker 从未如此简单。Portainer 提供 Docker 的详细概述，并允许您管理容器、镜像、网络和卷。

## 从备份恢复

打开插件选项并将密码设置为“空”。重新启动插件，它将允许从备份恢复 Portainer。您需要将备份文件放在可访问的文件夹中（如 /share），以便其在插件中挂载。

## 警告

Portainer 插件非常强大，给了您几乎对整个系统的全方位访问权限。虽然此插件在创建和维护过程中都考虑了安全和谨慎，但在错误或 inexperienced（经验不足）的手中，它可能会损坏您的系统。

## 安装

---

此插件的安装非常简单，与其他插件的安装相比并没有什么不同。

1. 将我安装的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或在单击下面的按钮时，如果您配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示添加附加组件仓库对话框，其中预填写了特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 单击“保存”按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 打开 Web UI 并调整软件选项。

## 配置

Web UI 可通过 <http://homeassistant:port> 或通过使用入口路由在侧边栏中找到。默认用户名为“admin"，密码是在插件`password` 选项中设置的价值（默认为`homeassistant`）。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `password` | str | `homeassistant` | 管理员密码（最低 12 个字符，留空以恢复备份） |

### 示例配置

```yaml
ssl: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
password: "your-secure-password-123"
```

###自定义脚本和环境变量

此插件支持通过`addon_config` 映射中的自定义脚本和环境变量：

- **自定义脚本**：请参阅 [Running Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项来传递额外环境变量（大小写名称均可）。有关详细信息，请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

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

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
