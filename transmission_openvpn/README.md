# Home Assistant 插件：Transmission Openvpn

我在业余时间维护此插件及其他 Home Assistant 插件：跟踪上游变更、HA 变更以及在真实硬件上测试需要花费大量时间（以及一些金钱）。我使用的 110+ 插件中大约只有 5-10 个，因为我经常安装测试机（并购买一些我本人不使用的测试服务，如 vpn）来调试和改进这些插件。

如果此插件为您节省时间或使您的配置变得更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我仓库的大家！要星标它，请点击下方的图片，它将显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission_openvpn/stats.png)

## 关于

Transmission 是一个 BitTorrent 客户端。
本插件基于 [Haugene docker 镜像](https://github.com/haugene/docker-transmission-openvpn)。

## 安装

此插件的安装非常简单，在安装其他 Hass.io 插件方面没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店右上角，或如果您已配置了我的 HA，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志以确认一切正常。
1. 根据您的偏好仔细配置插件，请参考官方文档了解如何配置。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（名称为大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

更多选项：请参阅 https://github.com/haugene/docker-transmission-openvpn 以获取文档说明

要设置自定义 openvpn 文件（即使使用的是 AIRVPN），您需要将 `OPENVPN_PROVIDER` 设置为"custom"，然后在您的"OPENVPN_CONFIG"中引用您的 ovpn 文件。例如，如果 AIRVPN 为您提供了一个名为 AIRVPN.ovpn 的 *.ovpn 文件，您需要安装一个插件（如 Filebrowser），进入 `/config/addons_config/transmission/openvpn` 文件夹并将 AIRVPN.ovpn 放置在此处。然后，在插件选项中，您需要在"OPENVPN_CONFIG"选项中写入"AIRVPN"。

完整的 Transmission 选项位于 `/config/addons_config/transmission`（在修改之前请确保插件已停止，因为 Transmission 在停止时会写入其进行中的值，可能会擦除您的更改）。

`WEBPROXY_ENABLED`：默认情况下，WebProxy 在端口 8118 启用，但可以使用插件选项"WEBPROXY_ENABLED"禁用它。更多信息：https://haugene.github.io/docker-transmission-openvpn/web-proxy/（感谢 @tutorempire）。

本地驱动器：`localdisks` 选项根据名称或标签挂载驱动器（例如 `sda1,MYNAS`）到 `/mnt/<name>`。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。

Webui 可访问 `<your-ip>:9091`。

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
