# Home Assistant 插件：Transmission Openvpn

我在业余时间维护这个和其他 Home Assistant 插件：跟进上游更改、Home Assistant 更改以及在真实硬件上测试需要花费大量的时间（还有一些钱）。我经常使用大约 5-10 个我的 >110 个插件，所以我安装了测试机器（并购买了一些测试服务，例如 VPN），这些服务我自己并不使用，以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更加简单，我将非常感激您的支持！

[![给我买杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码基检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位为我仓库点星的人！要给仓库点星，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Star 人数](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission_openvpn/stats.png)

## 关于

Transmission 是一个比特orrent 客户端。
这个插件基于 [Haugene docker 镜像](https://github.com/haugene/docker-transmission-openvpn)。

## 安装

安装这个插件非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在管理员界面右上角的插件存储中，或者如果您已经配置了我的 HA，则点击下面的按钮）。
   [![打开您的 Home Assistant 实例并显示一个带有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 根据您的偏好仔细配置插件，有关详细信息，请参阅官方文档。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

选项：请参阅 https://github.com/haugene/docker-transmission-openvpn 以获取文档。

对于设置自定义 openvpn 文件（即使使用 AIRVPN），您应将 OPENVPN_PROVIDER 设置为 "custom"，然后在 "OPENVPN_CONFIG" 中引用您的 ovpn 文件。例如，如果 AIRVPN 提供给您一个名为 AIRVPN.ovpn 的 *.ovpn 文件，您需要安装一个如 Filebrowser 这样的插件，进入 /config/addons_config/transmission/openvpn 文件夹，并将 AIRVPN.ovpn 放在这里。然后，在插件选项中，您需要在 "OPENVPN_CONFIG" 选项中写入 "AIRVPN"。

完整的 transmission 选项位于 /config/addons_config/transmission（修改之前请确保插件已停止，因为 Transmission 在停止时会写入其当前值，可能会覆盖您的更改）。

WEBPROXY_ENABLED：默认情况下，webproxy 在端口 8118 上启用，但可以使用插件的 "WEBPROXY_ENABLED" 选项禁用。更多信息：https://haugene.github.io/docker-transmission-openvpn/web-proxy/（感谢 @tutorempire）

Webui 可在 `<您的 IP>:9091` 找到。

[仓库]: https://github.com/alexbelgium/hassio-addons
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
