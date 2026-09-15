# Home Assistant 附加组件：BedrockServerManager

Bedrock Server Manager 是一个全面的 Python 服务器，旨在轻松安装、管理和维护 Minecraft Bedrock Dedicated Servers。

_感谢所有给我的仓库投票的人！要投票，请点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 概述

此附加组件使用 [docker 镜像](https://github.com/DMedina559/bedrock-server-manager)。

## 安装

此附加组件的安装非常简单，与其他 Hass.io 附加组件的安装方式没有区别。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，以确认一切是否顺利。
1. 使用您配置的门号（默认为 11325）访问 Home Assistant 的本地 IP 地址。
1. 配置将位于 `/addon_configs/2effc9b9_bedrockservermanager`。
1. 此目录在 Bedrock Server Manager 的文档中将对应于 `/root/`。

```
port : 11325 # 您希望运行的端口。
```

Web UI 可访问 `<your-ip>:port`。

Ingress 部分支持。它无法显示实时的“监控选项卡”或其他 Websocket 调用。但是，基本的管理功能可用。为了获得完整的功能，您需要访问 ip:port。

[repository]: https://github.com/jdeath/homeassistant-addons

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
