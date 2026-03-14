# Home Assistant 扩展程序：Transmission Openvpn


我在业余时间维护这个以及其他 Home Assistant 扩展程序：跟进上游变化、Home Assistant 变化以及在真实硬件上进行测试需要花费大量的时间和金钱（以及一些金钱）。我经常使用 5-10 个我的 >110 个扩展程序，因此我安装了测试机器（并购买了些测试服务如 vpn），这些服务我自己并不使用，以用于故障排除和改进扩展程序。

如果这个扩展程序为您节省了时间或使您的设置变得更简单，我会非常感激您的支持！

[![请我喝杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展程序信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码 lint%20基础)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/请我喝杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/通过 PayPal 捐赠-%230070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位为我仓库点赞的人！要给它点赞，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Star 数量](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission_openvpn/stats.png)

## 关于

Transmission 是一个 BitTorrent 客户端。
这个扩展程序基于 [Haugene 的 Docker 镜像](https://github.com/haugene/docker-transmission-openvpn).

## 安装

安装这个扩展程序非常简单，与安装任何其他 Hass.io 扩展程序没有区别。

1. 将我的扩展程序仓库添加到您的 Home Assistant 实例中（在 supervisor 扩展程序存储的右上角，或者点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示一个具有特定仓库 URL 预填充的添加扩展程序仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个扩展程序。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动扩展程序。
1. 检查扩展程序的日志以查看一切是否顺利。
1. 根据您的偏好仔细配置扩展程序，有关详情请参阅官方文档。

## 配置

使用扩展程序的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详情，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

选项：请参阅 https://github.com/haugene/docker-transmission-openvpn 了解文档。

为了设置自定义的 Openvpn 文件（即使使用 AIRVPN），您应该将 OPENVPN_PROVIDER 设置为 "custom"，然后在 "OPENVPN_CONFIG" 中引用您的 ovpn 文件。例如，如果 AIRVPN 为您提供了一个名为 AIRVPN.ovpn 的 *.ovpn 文件，您需要安装一个如 Filebrowser 这样的扩展程序，进入 /config/addons_config/transmission/openvpn 文件夹，并将 AIRVPN.ovpn 放在这里。然后，在扩展程序选项中，您需要在 "OPENVPN_CONFIG" 选项中写入 "AIRVPN"。

完整的 Transmission 选项在 /config/addons_config/transmission（在修改之前请确保扩展程序已停止，因为 Transmission 在停止时会写入其当前值，可能会覆盖您的更改）。

WEBPROXY_ENABLED：webproxy 默认在端口 8118 上启用，但可以通过扩展程序选项 "WEBPROXY_ENABLED" 禁用。更多信息：https://haugene.github.io/docker-transmission-openvpn/web-proxy/（感谢 @tutorempire）

Webui 可在 `<您的 IP>:9091` 上找到。

[仓库链接]: https://github.com/alexbelgium/hassio-addons
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
