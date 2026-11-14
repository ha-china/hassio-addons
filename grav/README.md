# Home Assistant 插件：Grav

我利用空闲时间维护本及其他 Home Assistant 插件：跟进上游更改、HA 更新以及在实际硬件上的测试需要耗费大量时间（以及一些金钱）。我使用了超过 110 个插件中的大约 5-10 个，因此我频繁地安装测试机器（并购买一些测试服务，如 VPN），以供我不使用它们来进行测试和改进插件

如果此插件能为您节省时间或让设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falxbelgium%2Fhassio-addons%2Fmaster%2Fgrav%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falxbelgium%2Fhassio-addons%2Fmaster%2Fgrav%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falxbelgium%2Fhassio-addons%2Fmaster%2Fgrav%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家点亮我的仓库！要点亮它，请点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/grav/stats.png)

## 关于

---

[Grav](https://getgrav.org) 是一个免费软件、自托管的内容管理系统（CMS），使用 PHP 编程语言编写，并基于 Symfony Web 应用框架。它使用扁平文件数据库作为后端和前端数据库。
此插件基于 docker 镜像 https://github.com/linuxserver/docker-grav

## 安装

---

该插件的安装非常直接，与其他插件的安装方式没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店的右上角，或者如果您已配置了我的 HA，则点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falxbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 设置插件选项为个人偏好
1. 启动插件。
1. 检查插件日志，查看一切是否顺利。
1. 打开 Web 界面并调整软件选项

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（名称可为大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面位于 <http://homeassistant:9191>。
配置可以通过应用 Web 界面完成，除了以下选项。

### 设置步骤

1. 启动插件后访问 Web 界面
2. 跟随 Grav 设置向导进行初始配置
3. 通过管理面板安装主题/插件
4. 自定义主题可放置在 `/share/grav/www/user`

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
```

### 添加主题/骨架

将自定义主题和骨架放置在 `/share/grav/www/user/` 目录：
- 主题：`/share/grav/www/user/themes/`
- 插件：`/share/grav/www/user/plugins/`
- 页面：`/share/grav/www/user/pages/`

## 支持

在 GitHub 上创建问题

## 插图

---

![illustration](https://getgrav.org/user/pages/01.tour/_easy-to-use/001-dashboard.png)

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
