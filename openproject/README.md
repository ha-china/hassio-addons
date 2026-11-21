# Home Assistant 插件：Openproject

我利用业余时间来维护本插件及其他 Home Assistant 插件：跟进上游变更、适应 HA 的变化以及在真实硬件上进行测试耗费了大量时间（以及一些金钱）。我使用的插件大约有 5-10 个（总共超过 110 个），我会定期安装测试机器（并购买一些测试服务，如 VPN）来自己不使用以便调试和改进插件。

如果此插件能为您节省时间或让您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fopenproject%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fopenproject%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fopenproject%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=检查%20代码%20库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20Paypal-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！要点赞请点击下方图片，它将会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/openproject/stats.png)

## 关于

该插件基于 [docker 镜像](https://hub.docker.com/r/openproject/openproject)。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大小写均可）。详情见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

填充默认插件选项以启动插件。请确保特别配置主机名为您的 homeassistant IP + 插件暴露的端口。

针对额外选项，请使用 config.yaml 系统：https://github.com/alexbelgium/hassio-addons/wiki/Addons-feature:-add-env-variables。

Web 界面可在 `<您的 IP>:端口` 处访问。

## 安全性

`OPENPROJECT_SECRET_KEY_BASE` 默认值为 `addon_secret`。此键用于签署会话 Cookie 和令牌，所以任何知道它的人都能伪造登录会话。上游镜像也包含 `SECRET_KEY_BASE=OVERWRITE_ME`。请将相同的长随机值设置为 `OPENPROJECT_SECRET_KEY_BASE` 选项以及 `env_vars` 中的 `SECRET_KEY_BASE`。插件在默认值设置时会在启动日志中打印警告。

## 安装

安装此插件非常直接，与其他安装 Hass.io 插件没有不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 supervisor 添加插件仓库界面的右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示填充了特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 进入 Web 界面，在那里您将初始化应用程序。
1. 重启插件，以应用任何应应用的选项。

默认管理密码（登录：admin，密码：admin）。

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
