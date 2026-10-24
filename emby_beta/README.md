# Home assistant 附加组件：emby

我利用业余时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在真实硬件上进行测试需要大量时间（并且需要花费一些钱）。我大约有 5-10 个（我有超过 110 个附加组件中）会频繁使用，因此我有时会安装测试机器（并购买一些测试服务，如 vpn），这些机器我自己并不使用，用于调试和改进附加组件

如果此附加组件为您节省了时间或让您的设置更方便，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有 Star 了我仓库的朋友！想给我 Star 请点击下面的图片，然后点击后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/emby/stats.png)

## 关于

[emby](https://emby.media/) 对个人媒体库中的视频、音乐、直播 TV 和照片进行组织，并将其流式传输到智能电视、流媒体boxes 和移动设备。此容器被打包为独立的 emby Media Server。

此附加组件基于 linuxserver.io 上的 [docker 镜像](https://github.com/linuxserver/docker-emby)。
初始附加组件版本：https://github.com/petersendev/hassio-addons

## 配置

使用附加组件 `env_vars` 选项来传递额外的环境变量（名称不区分大小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 以了解详情。

Webui 可在 `<your-ip>:8096` 访问，或通过 Home Assistant 中的 Ingress 访问。

```yaml
PGID: user
GPID: user
TZ: timezone
localdisks: sda1 #这里输入要挂载的硬件驱动器名称，用逗号分隔；或者输入其标签名。例如：sda1, sdb1, MYNAS... 若要只挂载一个文件夹，请这样添加：例如 MYNAS/public 将挂载到 /mnt/MYNAS/public（2026-09-19 之后发布的附加组件版本）
networkdisks: "//SERVER/SHARE" #可选，SMB 服务器的列表，用逗号分隔
cifsusername: "username" #可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" #可选，SMB 密码
cifsdomain: "domain" #可选，设置 SMB 共享的域
silent: true #抑制调试消息
```

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或者如果您已配置了我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否顺利进行。
1. 仔细配置附加组件以满足您的偏好，并查看官方文档。

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
