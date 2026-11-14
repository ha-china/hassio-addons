# Home assistant 附加组件：BedrockServerManager

Bedrock Server Manager 是一个功能全面的 Python 服务器，专为实现 Minecraft Bedrock 专用服务器的安装、管理以及维护而设计。

_感谢各位为我仓库点赞！要点赞，请点击下方的图片，这样它就会显示在右上角。谢谢!_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件使用 [docker 镜像](https://github.com/DMedina559/bedrock-server-manager)。

## 安装

该附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1.  [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1.  点击 `Save`（保存）按钮以保存您的配置。
1.  启动附加组件。
1.  检查附加组件的日志以确定一切是否顺利。
1.  使用您配置的端口（默认为 11325）访问 Home Assistant 的本地 IP 地址。
1.  配置文件位于 `/addon_configs/2effc9b9_bedrockservermanager`。
1.  此文件夹在 bedrock-server-manager 的文档中对应于 `/root/` 目录。

```
port : 11325 # 您想要运行的端口。
```

Web 界面可访问于 `<your-ip>:port`。

Ingress 功能部分可用。它将不会显示实时的"Monitor Tab"或其他 WebSocket 调用。但是，基本的管理功能是可用的。您需要访问 ip:port 以获得完整功能。
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
