# Home Assistant 扩展：Emby

我在业余时间维护这个和其他 Home Assistant 扩展：跟踪上游更改、Home Assistant 更改以及在真实硬件上测试需要花费很多时间（还有一些金钱）。我经常使用大约 5-10 个我的 >110 个扩展，因此我安装了测试机器（并购买了一些我不使用的测试服务，如 VPN）来排查问题和改进扩展。

如果这个扩展为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![买我一杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Femby%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点星的人！要为它点星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/emby/stats.png)

## 关于

[emby](https://emby.media/) 将个人媒体库中的视频、音乐、直播电视和照片组织起来，并将它们流式传输到智能电视、流媒体盒子和移动设备。此容器作为独立的 emby 媒体服务器打包。

此扩展基于 [docker 镜像](https://github.com/linuxserver/docker-emby) 从 linuxserver.io。
初始扩展版本：https://github.com/petersendev/hassio-addons

## 配置

使用扩展的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可以在 `<您的 IP>:8096` 上找到，或者通过入口在 Home Assistant 中访问。

```yaml
PGID: user
GPID: user
TZ: timezone
localdisks: sda1 #将您驱动器的硬件名称放在此处以挂载，用逗号分隔，或使用其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" #可选，挂载的 smb 服务器列表，用逗号分隔
cifsusername: "username" #可选，smb 用户名，适用于所有 smb 共享
cifspassword: "password" #可选，smb 密码
cifsdomain: "domain" #可选，允许设置 smb 共享的域
silent: true #抑制调试信息
```

## 安装

此扩展的安装相当简单，与安装任何其他 Hass.io 扩展没有太大区别。

1. 将我的扩展仓库添加到您的 Home Assistant 实例中（在管理员的扩展存储中右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定仓库 URL 预填充的添加扩展仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击“保存”按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看一切是否顺利。
1. 仔细配置扩展以满足您的偏好，有关详细信息，请参阅官方文档。

[仓库](https://github.com/alexbelgium/hassio-addons)
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
