# Home Assistant 插件：Transmission Openvpn

我在空闲时间维护此插件及其他 Home Assistant 插件：跟进上游更改、HA 更改，以及在真实硬件上进行测试需要大量时间（和些许金钱）。我使用约 5-10 个我的 110 多个插件，因此我会定期安装测试机（并购买一些测试服务，如 VPN），即使这些服务我自己不使用，也用于故障排除和改进插件。

如果此插件为您节省时间或使您的设置更简单，我会非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人关注我的仓库！要关注它，点击下方的图片，然后将置于右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星数仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission_openvpn/stats.png)

## 简介

Transmission 是一个 BitTorrent 客户端。
本插件基于 [Haugene Docker 镜像](https://github.com/haugene/docker-transmission-openvpn)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 仔细根据您的偏好配置插件，请查阅官方文档了解具体操作方法。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

选项：请参阅 https://github.com/haugene/docker-transmission-openvpn 获取文档

要设置自定义 openvpn 文件（即使使用 AIRVPN），您应将 OPENVPN_PROVIDER 设置为"custom"，然后在您的"OPENVPN_CONFIG"中链接到您的 ovpn 文件。例如，如果 AIRVPN 已为您提供名为 AIRVPN.ovpn 的 *.ovpn 文件，您需要安装一个插件（如 Filebrowser），进入 /config/addons_config/transmission/openvpn 文件夹并将 AIRVPN.ovpn 放入此文件夹。然后在插件选项中，您需要将"AIRVPN"写入"OPENVPN_CONFIG"选项。

完整的 Transmission 选项位于 /config/addons_config/transmission 中（在修改它之前请确保插件已停止，因为 Transmission 在停止时写入其持续运行值并可能会擦除您的更改）

WEBPROXY_ENABLED : 默认情况下，Web 代理在端口 8118 上启用，但可以使用插件选项"WEBPROXY_ENABLED"禁用。更多信息：https://haugene.github.io/docker-transmission-openvpn/web-proxy/（感谢 @tutorempire）

WebUI 位于 `<your-ip>:9091`。

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
