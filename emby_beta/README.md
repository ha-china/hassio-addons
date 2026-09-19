# Home assistant add-on: emby

我在业余时间维护此和其他 Home Assistant 插件：需要大量时间（甚至包括一些费用）来跟上上游变更、HA 变更，并在真实硬件上进行测试。我使用的插件中有 5-10 个是我本人并不经常使用的，我安装这些测试机器（并购买一些测试服务，如 vpn）来排查问题和改进插件。

如果此插件能为您节省时间或让您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢为我仓库点亮星标的所有人！想要点亮星标，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/emby/stats.png)

## 关于

[emby](https://emby.media/) 对个人媒体库中的视频、音乐、直播电视和照片进行组织，并将它们流转到智能电视、流媒体盒和移动设备。此容器封装为独立的 emby 媒体服务器。

此插件基于 linuxserver.io 上的 [docker 镜像](https://github.com/linuxserver/docker-emby)。
初始插件版本：https://github.com/petersendev/hassio-addons

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可在 `<your-ip>:8096` 访问，或透过 Home Assistant 的 Ingress 访问。

```yaml
PGID: user
GPID: user
TZ: timezone
localdisks: sda1 # 挂载您的驱动器，以逗号分隔，或由逗号分隔其标签或硬件名称。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，以逗号分隔
cifsusername: "username" # 可选，SMB 用户名，所有 SMB 共享共用
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许设置 SMB 共享的域
silent: true # 抑制调试消息
```

## 安装

此插件的安装非常简单，与安装任何其他的 Hass.io 插件没有不同。

1. 将我的插件库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志，确认一切是否正常。
1. 仔细根据您的偏好配置插件，请参阅官方文档。

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
