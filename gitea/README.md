# Home Assistant 插件：Gitea

我在业余时间维护此插件以及其他 Home Assistant 插件：跟进上游变更、HA 变更以及在真实硬件上进行测试耗费了大量时间（乃至一些金钱）。我常用的约 5-10 个 >110 个插件，因为我经常安装测试机（并购买一些测试服务，如 vpn），我自己并不使用这些资源来调试和改进插件。

如果该插件为您节省了时间或让您的设置更简单，我非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffe&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢大家点亮我的仓库！要点亮它，请点击下图，之后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gitea/stats.png)

## 关于简介

[Gitea](https://about.gitea.com/) 是一个无痛的自我托管全功能软件开发服务，包含代码托管、代码审查、团队协作、软件包注册表和 CI/CD 功能。它类似于 GitHub、Bitbucket 和 GitLab。

提供各种调整和配置选项。
该插件基于 [docker 镜像](https://hub.docker.com/r/gitea/gitea)。

## 配置

Webui 可在 <http://homeassistant:PORT> 访问，或通过侧边栏的 Ingress 访问。
配置可通过应用 Webui 完成，除了以下选项。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl） |
| `APP_NAME` | str | | Gitea 应用名称 |
| `DOMAIN` | str | | 要访问的域名（默认：homeassistant.local） |
| `ROOT_URL` | str | | 自定义根 URL（用于特定路由需求） |

### 配置示例

```yaml
ssl: false
certfile: "fullchain.pem"
keyfile: "privkey.pem"
APP_NAME: "Gitea for Homeassistant"
DOMAIN: "homeassistant.local"
ROOT_URL: "http://homeassistant.local:3000"
```

### 直接访问 app.ini

Gitea `app.ini` 配置文件已暴露于插件配置目录中（主机上为 `/app_configs/gitea/app.ini`），使其可以通过 HA 文件编辑器或 Studio Code 插件直接编辑。

- **首次运行**：完成 Gitea 设置向导，然后重启插件。生成的 `app.ini` 将自动复制到 app_config 文件夹。
- **后续运行**：对于上述选项未涵盖的任何 Gitea 设置，直接编辑 `/app_configs/gitea/app.ini`。插件选项（SSL、DOMAIN、ROOT_URL、APP_NAME）会在每次重启时仍然应用在这些文件之上。

请参阅 [Gitea 配置捷标单](https://docs.gitea.com/administration/config-cheat-sheet) 以获取所有可用选项。

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项来传递额外的环境变量（名称可大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常直接，与安装任何其他 Hass.io 插件没有什么不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置了我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 前往 Webui，在那里您将初始化应用程序。
1. 重启插件，以应用应应用的任何选项

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
