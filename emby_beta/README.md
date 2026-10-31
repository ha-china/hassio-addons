# Home Assistant 插件：emby

在业余时间，我维护此及其他 Home Assistant 辅助插件：跟踪上游变化、适配 Home Assistant 变化以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。在 110 多个辅助插件中，我使用约 5-10 个，因此我拥有一套测试机器（并购买了某些测试服务，如 vpn），用于 myself 不常使用它们来调试和改进辅助插件。

如果这个辅助插件为您节省了时间或使您的设置更加便捷，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 辅助插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人对我的仓库点亮星标！点击右上角的图片点亮它，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/emby/stats.png)

## 关于

[emby](https://emby.media/) 从个人媒体库中组织视频、音乐、直播 TV 和照片，并将其流媒体传输到智能电视、流媒体盒子和移动设备。此容器以独立的 emby 媒体服务器形式进行打包。

此辅助插件基于来自 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-emby)。
初始辅助插件版本：https://github.com/petersendev/hassio-addons

## 配置

使用辅助插件的 `env_vars` 选项来传递额外的环境变量（大小写均可的名称）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以获取详细信息。

Webui 可在 `<your-ip>:8096` 或 Home Assistant 中的 Ingress 部分找到。

```yaml
PGID: user
GPID: user
TZ: timezone
localdisks: sda1 # 在此处设置要挂载的硬件驱动器名称，用逗号分隔，或使用其标签。例如：sda1, sdb1, MYNAS... 仅欲挂载一个文件夹，例如 MYNAS/public 将挂载在 /mnt/MYNAS/public (2026-09-19 之后发布的附加版本)
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
silent: true # 抑制调试消息
```

## 安装

此辅助插件的安装非常直接，与其他 Hass.io 辅助插件安装有所不同。

1. 将我添加附加功能存储库添加到您的 Home Assistant 实例中（在 supervisor 附加功能商店右上角，或者如果您已配置了我设置的 Home Assistant，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定存储库 URL 的附加附加功能存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此辅助插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 启动辅助插件。
1. 检查辅助插件的日志，以查看是否一切正常。
1. 仔细地为您的偏好配置辅助插件，有关详细信息，请参阅官方文档。

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
