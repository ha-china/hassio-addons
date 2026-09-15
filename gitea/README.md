# Home Assistant 附加组件：Gitea

我在业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改，并在真实硬件上进行测试，这耗费了大量的时间（以及一些金钱）。我大约使用我 110 多个附加组件中的 5-10 个，因此我会定期安装测试机器（并购买一些我自己不常用的测试服务，如 vpn），用于故障排除和改进附加组件。

如果这个附加组件为您节省时间或使您的设置更简单，我将不胜感激！

[![买我杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加 stars 的人！要 star 它，请点击下方图片，它就会出现在右上角。非常感谢！_

[![@alexbelgium/hassio-addons 的 Stargazers 仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gitea/stats.png)

## 关于

[Gitea](https://about.gitea.com/) 是一款轻松搭建的自我托管一站式软件开发服务，它包含 Git 托管、代码审查、团队协作、包注册表和 CI/CD。它类似于 GitHub、Bitbucket 和 GitLab。

增加了一些调整和配置选项。
此附加组件基于 [镜像](https://hub.docker.com/r/gitea/gitea)。

## 配置

Web UI 可在 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问。
配置可以通过应用程序 Web UI 进行，除了以下选项。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `ssl` | bool | `false` | 启用 Web 接口的 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl） |
| `APP_NAME` | str | | Gitea 应用程序名称 |
| `DOMAIN` | str | | 目标域名（默认：homeassistant.local） |
| `ROOT_URL` | str | | 自定义根 URL（针对特定路由需求） |

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

Gitea `app.ini` 配置文件在附加组件的配置文件夹中暴露（主机上的 `/addon_configs/gitea/app.ini`），可以通过 HA 文件编辑器或 Studio Code 附加组件直接编辑。

- **首次运行**：完成 Gitea 设置向导，然后重启附加组件。生成的 `app.ini` 将自动复制到 addon_config 文件夹。
- **后续运行**：直接编辑 `/addon_configs/gitea/app.ini` 以修改上述选项之外的任何 Gitea 设置。附加组件选项（SSL、DOMAIN、ROOT_URL、APP_NAME）在每次重启时仍会叠加应用于您的文件。

请参阅 [Gitea 配置一览表](https://docs.gitea.com/administration/config-cheat-sheet) 以获取所有可用选项。

### 自定义脚本和环境变量

此附加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [Run 附加组件中的自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（支持大小写名称）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

## 安装

此附加组件的安装非常直接，与其他 Hass.io 附加组件的安装没有区别。

1. 将我的附加组件仓库添加至您的 Home Assistant 实例（在 supervisor 附加组件商店右上角，或点击下方按钮，如果您已配置好我的 HA）
   [![打开您的 Home Assistant 实例并显示添加附加组件仓库对话框，且预填充特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件日志，查看是否一切正常。
1. 前往 Web UI，在那里您将初始化应用程序。
1. 重启附加组件，以应用任何应应用的选项。

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
