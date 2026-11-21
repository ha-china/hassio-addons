# Home Assistant 插件：Gitea

我在业余时间维护此及其他 Home Assistant 插件：跟进 upstream 更改、应对 HA 更新以及在真实硬件上测试需要大量时间（以及一些金钱）。我使用约 5-10 个我拥有的 >110 个插件，因此我安装测试机器（并购买一些我自己不使用的测试服务如 vpn）来故障排查和改善这些插件。

如果此插件为您节省了时间或简化了您的设置，我将非常感谢您的支持！

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

_感谢大家给我的仓库加星标！如果您希望加星标，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gitea/stats.png)

## 简介

[Gitea](https://about.gitea.com/) 是一个无痛式自托管的一站式软件开发服务，包含 Git 托管、代码审查、团队协作、软件包注册表和 CI/CD。它类似于 GitHub、Bitbucket 和 GitLab。

包含多种自定义配置和选项。
此插件基于 [docker 镜像](https://hub.docker.com/r/gitea/gitea)。

## 配置

Web 界面位于 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问。
配置可通过应用 Web 界面执行，除了以下选项。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl 中） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl 中） |
| `APP_NAME` | str | | Gitea 应用名称 |
| `DOMAIN` | str | | 可访问的域名（默认：homeassistant.local） |
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

Gitea 的 `app.ini` 配置文件暴露于插件配置文件夹中（主机上为 `/app_configs/gitea/app.ini`），使其可通过 HA 文件编辑器或 Studio Code 插件直接编辑。

- **首次运行**：完成 Gitea 配置向导，然后重启插件。生成的 `app.ini` 将自动复制到 app_config 文件夹中。
- **后续运行**：直接编辑 `/app_configs/gitea/app.ini` 进行上述选项未涵盖的任何 Gitea 设置。插件选项（SSL、DOMAIN、ROOT_URL、APP_NAME）每次重启时仍会叠加到文件中应用。

请参阅 [Gitea 配置速查表](https://docs.gitea.com/administration/config-cheat-sheet) 了解所有可用选项。

### 自定义脚本和环境变量

该插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（大小写字母均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加选项存储的右上角，或如果您已配置我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动插件。
5. 检查插件日志以查看一切是否正常。
6. 进入 Web 界面，在此您将初始化应用。
7. 重启插件，以应用任何应应用的选项

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
