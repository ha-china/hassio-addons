# Home Assistant 插件：Gitea

我利用业余时间维护此及其他 Home Assistant 插件。紧跟上游更新、适配 Home Assistant 的变化以及在真实硬件上进行测试，耗时耗力（甚至需要金钱）。我的 10 多个插件中，有 5-10 个我频繁使用，因此我专门安装测试机器（并购买一些未自行使用的测试服务，如 VPN）来排查问题和改进这些插件。

如果此插件为您节省时间或使您的环境配置更简单，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![反向代理](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fgitea%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢所有人给我的仓库加星！要加星，点击下方图片，它就会出现于右上角。谢谢！_

[![Gitea@alexbelgium/hassio-addons 星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/gitea/stats.png)

## 关于

[Gitea](https://about.gitea.com/) 是一个无痛苦的自托管一站式软件开发服务平台，包括代码托管、代码审查、团队协作、制品库以及 CI/CD。它与 GitHub、Bitbucket 和 GitLab 类似。

进行了各种调整并增加了配置选项。
此插件基于 [Docker 镜像](https://hub.docker.com/r/gitea/gitea)。

## 配置

Web UI 可通过 <http://homeassistant:PORT> 访问，或通过侧边栏使用反向代理访问。
除了以下选项外，其他配置均通过应用 Web UI 完成。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl 目录下） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl 目录下） |
| `APP_NAME` | str | | Gitea 应用程序名称 |
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

Gitea 的 `app.ini` 配置文件暴露于插件的配置目录中（宿主机上的 `/app_configs/gitea/app.ini`），使其可以通过 Home Assistant 的文件编辑器或 Studio Code 插件直接编辑。

- **首次运行时**：完成 Gitea 设置向导，然后重启插件。生成的 `app.ini` 将自动复制到 app_config 目录中。
- **后续运行时**：如需修改上述选项未涵盖的任何 Gitea 设置，请直接编辑 `/app_configs/gitea/app.ini`。每次重启时，插件选项（SSL、DOMAIN、ROOT_URL、APP_NAME）仍会叠加应用于你的文件中。

请参阅 [Gitea 配置快速指南](https://docs.gitea.com/administration/config-cheat-sheet) 以查看所有可用选项。

### 自定义脚本和环境变量

此插件支持通过 `app_config` 映射来使用自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（支持大写或小写下标）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装非常直接，与其他 Hass.io 插件的安装方式并无不同。

1. 将我的插件存储库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店顶部右侧，或如果您已配置我的 HA，则点击下方按钮）：
   [![打开您的 Home Assistant 实例并显示添加存储库对话框，且预先填写特定存储库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以存储你的配置。
4. 启动插件。
5. 检查插件日志，查看一切是否顺利。
6. 进入 Web UI，其中您将初始化应用。
7. 重启插件，以应用任何需要应用的选项。

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
