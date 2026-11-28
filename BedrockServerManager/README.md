# Home assistant 插件：BedrockServerManager

Bedrock Server Manager 是一个功能全面的 Python 服务器，旨在轻松安装、管理和维护 Minecraft Bedrock Dedicated Servers。

_感谢所有给我的仓库点赞的人！想点赞请点击下图，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于此插件

此插件使用 [docker 镜像](https://github.com/DMedina559/bedrock-server-manager)。

## 安装

此插件的安装非常简单，与其他任何 Hass.io 插件的安装方式没有不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存配置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利进行。
1. 使用您配置的端口（默认为 11325）访问 Home Assistant 的本地 IP 地址。
1. 设置信息将位于 `/addon_configs/2effc9b9_bedrockservermanager`。
1. 该文件夹在 bedrock-server-manager 的官方文档中将显示为 `/root/`。

```
port : 11325 #您想要运行的端口。
```

Webui 可以访问 `<your-ip>:port`。

Ingress（反向代理）部分有效。它不会显示实时的"Monitor Tab"或其他 WebSocket 调用。然而，基本的管理功能是可用的。您必须通过 ip:port 访问才能获得完整功能。
[repository]: https://github.com/jdeath/homeassistant-addons

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
