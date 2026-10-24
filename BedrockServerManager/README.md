# Home assistant 插件：BedrockServerManager

Bedrock Server Manager 是一个功能全面的 Python 服务器，旨在轻松安装、管理和维护 Minecraft Bedrock 专用服务器。

_感谢所有星标我的仓库！请点下面的图片来星标它，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [docker 镜像](https://github.com/DMedina559/bedrock-server-manager)。

## 安装

此插件的安装过程非常简单，与安装任何其他 Hass.io 插件没有不同。

1. [将我开发的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志以确认为一切顺利。
1. 使用您配置的端口（默认为 11325）访问 home assistant 的本地 IP 地址。
1. 设置文件位于 `/addon_configs/2effc9b9_bedrockservermanager`。
1. 该文件夹将对应 bedrock-server-manager 文档中的 `/root/` 目录。

```
port : 11325 # 您希望运行的端口。
```

Web 界面位于 `<your-ip>:port`。

Ingress 部分有效。它不会显示实时的“监控选项卡 (Monitor Tab)"或其他 WebSocket 调用。但是，基本管理功能是可用的。您必须访问 ip:port 以获取完整功能。

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
