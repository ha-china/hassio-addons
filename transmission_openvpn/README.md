# Home assistant add-on: Transmission Openvpn

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission_openvpn%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission_openvpn/stats.png)

## 关于

Transmission 是一个 BitTorrent 客户端。
这个插件基于 [Haugene 的 docker 镜像](https://github.com/haugene/docker-transmission-openvpn)。

## 安装

这个插件的安装非常简单，与其他 Hass.io 插件的安装方式相同。

1. [将我的 Hass.io 插件仓库][repository]添加到你的 Hass.io 实例中。
1. 安装这个插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切顺利。
1. 仔细配置插件以符合你的偏好，请参阅官方文档进行配置。

## 配置

选项：参见 https://github.com/haugene/docker-transmission-openvpn 的文档

要设置自定义的 openvpn 文件（即使使用 AIRVPN），你应该将 OPENVPN_PROVIDER 设置为 "custom"，然后在 "OPENVPN_CONFIG" 中引用你的 ovpn 文件。例如，如果 AIRVPN 提供给你一个名为 AIRVPN.ovpn 的 *.ovpn 文件，你需要安装一个类似 Filebrowser 的插件，进入 /config/addons_config/transmission/openvpn 文件夹并将 AIRVPN.ovpn 放在这里。然后，在插件选项中，你需要在 "OPENVPN_CONFIG" 选项中输入 "AIRVPN"

完整的 transmission 选项在 /config/addons_config/transmission 中（确保在修改插件之前停止插件，因为 Transmission 在停止时会写入其当前值，可能会覆盖你的更改）

WEBPROXY_ENABLED：web代理默认在端口 8118 上启用，但可以使用插件选项 "WEBPROXY_ENABLED" 禁用。更多信息：https://haugene.github.io/docker-transmission-openvpn/web-proxy/（感谢 @tutorempire）

Webui 可以在 `<your-ip>:9091` 找到。

[repository]: https://github.com/alexbelgium/hassio-addons