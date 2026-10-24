# Home Assistant 插件：Gitea

我在空闲时间维护此及其他 Home Assistant 插件：跟踪上游变更、HA 变更以及在实际硬件上进行测试需要花费大量时间（以及一些费用）。我使用的 10 多个插件中有 5-10 个，因此我安装测试机（并购买一些我自己不使用的测试服务，如 VPN）来排查问题并改进插件。

如果此插件能为您节省时间或让您的设置更容易，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我的高星支持！如果您要高星，请点击下方的图片，它就会出现在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gitea/stats.png)

## 关于

[Gitea](https://about.gitea.com/) 是一个无痛的自托管一站式软件开发服务，它包括 Git 托管、代码审查、团队协作、软件包注册表和 CI/CD。它类似于 GitHub、Bitbucket 和 GitLab。

提供了各种更改和配置选项。
此插件基于 [docker 镜像](https://hub.docker.com/r/gitea/gitea)。

## 配置

Web 界面可以在 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问。
配置可以通过应用程序 Web 界面完成，除了以下选项外。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl 目录中） |
| `keyfile` | str | `privkey.pem` | SSL 密钥文件（必须位于 /ssl 目录中） |
| `APP_NAME` | str | | Gitea 应用程序名称 |
| `DOMAIN` | str | | 可达的域名（默认：homeassistant.local） |
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

### 直接访问 app.ini

Gitea `app.ini` 配置文件在插件配置文件夹中暴露（宿主机的 `/app_configs/gitea/app.ini`），使其可以通过 HA 文件编辑器或 Studio Code 插件直接编辑。

- **首次运行**：完成 Gitea 设置向导，然后重新启动插件。生成的 `app.ini` 将自动复制到 app_config 文件夹。
- **后续运行**：直接编辑 `/app_configs/gitea/app.ini` 以更改任何上述选项未涵盖的 Gitea 设置。插件选项（SSL、DOMAIN、ROOT_URL、APP_NAME）将在每次重启时应用于您的文件之上。

查看所有可用选项，请参阅 [Gitea 配置速查表](https://docs.gitea.com/administration/config-cheat-sheet)。

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装方式没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置了我的 HA，则点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以查看一切是否正常。
1. 前往 Web 界面，您将在那里初始化应用程序。
1. 重新启动附加组件，以应用任何应被应用的选项

[repository]: https://github.com/alexbelgium/hassio-addons

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
