# Home Assistant 插件：emby

我在休假期间维护这个及其他 Home Assistant 插件：跟踪上游变更、HA 变更以及在真实硬件上测试耗费了大量时间（以及一些金钱）。我使用了大约 5-10 个我的 >110 个插件中常备的，因此我安装测试机器（并购买一些测试服务如 VPN）用于自行不使用的服务，以排查和更好地支持插件。

如果该插件能为您节省时间或使您的设置更简便，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人对我仓库的星标！如果想要星标它，请点击下方的图片，然后它将显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的主星用户仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载增长曲线](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/emby/stats.png)

## 关于

[emby](https://emby.media/) 将个人媒体库中的视频、音乐、直播电视和照片进行整理，并将它们流式传输到智能电视、流媒体盒和移动设备。此容器以独立的 emby 媒体服务器形式打包。

此插件基于 [docker 镜像](https://github.com/linuxserver/docker-emby)（来自 linuxserver.io）。
初始插件版本：https://github.com/petersendev/hassio-addons

## 配置

使用插件的 `env_vars` 选项传递额外环境变量（不区分大小写）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可在 `<您的 IP 地址>:8096` 或通过 Ingress 在 Home Assistant 中访问。

```yaml
PGID: user
GPID: user
TZ: timezone
localdisks: sda1 # 将您要挂载的驱动硬件名称（用逗号分隔）或其标签放在此处。例如：sda1, sdb1, MYNAS... 仅挂载文件夹时请加上一句，例如 MYNAS/public 将挂载到 /mnt/MYNAS/public（2026-09-19 之后发布的插件版本）
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，所有 SMB 共享共用
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许设置 SMB 共享的域
silent: true # 抑制调试消息
```

## 安装

该插件的安装非常简单，与安装任何其他 Hass.io 插件并无不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在监督器的插件商店右上角，或者如果您已配置我的 HA 则单击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库的对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动该插件。
1. 检查插件日志以查看一切是否顺利。
1. 根据需要仔细配置该插件，请参考官方文档。

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
