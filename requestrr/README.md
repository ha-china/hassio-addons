# Home Assistant 插件：requestrr

我在空闲时间维护此及其他 Home Assistant 插件：跟踪上游更改、Home Assistant 更改以及在实际硬件上测试需要大量时间（和一些金钱）。我只使用我 >110 个插件中的 5-10 个，所以我经常安装测试机器（并购买一些我自己不用的测试服务，如 vpn）来排查问题和改进插件。

如果这个插件为您节省时间或让您的设置更简单，我将非常感谢您提供的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Frequestrr%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Frequestrr%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Frequestrr%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库打星的人！想打星，请点击下方的图片，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/requestrr/stats.png)

## 关于

---

[Requestrr](https://github.com/darkalfx/requestrr) 是一个聊天机器人，用于简化使用 Sonarr/Radarr/Ombi 等服务，通过聊天来实现。当前平台仅为 Discord，但该机器人是在以快速适应新功能和为新平台构建的理念下开发的。

此插件基于 https://github.com/linuxserver/docker-requestrr 的 docker 镜像。

## 安装

---

此插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件商店的右上角，或如果您已配置我的 HA，请点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加组件选项设置为您偏好。
1. 启动附加组件。
1. 检查附加组件的日志，查看是否一切顺利。
1. 打开 WebUI 并调整软件选项

## 配置

WebUI 可在 <http://homeassistant:4545> 或通过侧边栏中的 Ingress 访问。
配置可通过应用程序 WebUI 进行，除了以下选项外。

默认用户名/密码在启动日志中描述。
先运行附加组件，然后使用 Filebrowser 插件自定义 `/app_configs/db21ed7f_requestrr` 中创建的配置文件。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | 整数 | `0` | 文件权限组 ID |
| `PUID` | 整数 | `0` | 文件权限用户 ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
```

### 自定义脚本和环境变量

此插件支持自定义脚本和环境变量：

- **自定义脚本**：见此 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。详细说明请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 支持

在 github 上创建一个问题。

## 插图

![illustration](https://nashosted.com/wp-content/uploads/2020/04/requestrr-discord-nashosted.com_-1024x680.jpg)

---

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
