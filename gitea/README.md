## ⚠️ 开启请求 : [✨ [请求] 访问 Gitea app.ini (已开启 2025-06-10)](https://github.com/alexbelgium/hassio-addons/issues/1907) 由 [@UplandJacob](https://github.com/UplandJacob)
# Home assistant 插件: Gitea


我在业余时间维护这个和其他 Home Assistant 插件：跟上上游的变化、HA 的变化，并在真实硬件上测试需要大量时间（和一些钱）。我大约使用 5-10 个我的 >110 个插件，所以我会安装一些我不用来测试和改进插件的测试机器（和一些测试服务，如 VPN）

如果这个插件为你节省了时间或使你的设置更简单，我将非常感谢你的支持！

[![给我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要给星标，请点击下面的图片，它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gitea/stats.png)

## 关于

[Gitea](https://about.gitea.com/) 是一个无痛苦的自我托管的一站式软件开发服务，它包括 Git 托管、代码审查、团队协作、包注册和 CI/CD。它与 GitHub、Bitbucket 和 GitLab 类似。

各种调整和配置选项增加。
这个插件基于 [Docker 镜像](https://hub.docker.com/r/gitea/gitea)。

## 配置

Webui 可以在 <http://homeassistant:PORT> 或通过 Ingress 侧边栏访问。
配置可以通过应用 WebUI 进行，除了以下选项。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl） |
| `keyfile` | str | `privkey.pem` | SSL 密钥文件（必须位于 /ssl） |
| `APP_NAME` | str | | Gitea 应用的名称 |
| `DOMAIN` | str | | 要访问的域名（默认：homeassistant.local） |
| `ROOT_URL` | str | | 自定义根 URL（用于特定路由需求） |

### 示例配置

```yaml
ssl: false
certfile: "fullchain.pem"
keyfile: "privkey.pem"
APP_NAME: "Gitea for Homeassistant"
DOMAIN: "homeassistant.local"
ROOT_URL: "http://homeassistant.local:3000"
```

### 自定义脚本和环境变量

这个插件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

这个插件的安装非常简单，与其他 Hass.io 插件安装没有不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. 进入 WebUI，初始化应用
1. 重新启动插件，以应用任何应该应用的选项

[repository]: https://github.com/alexbelgium/hassio-addons
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
