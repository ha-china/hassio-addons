# Home assistant 附加组件：BedrockServerManager

Bedrock Server Manager 是一款全面的 Python 服务器，旨在简化 Minecraft Bedrock Dedicated Servers（床岩专用服务器）的安装、管理和维护工作。

_感谢所有为我仓库点赞的人们！想点赞请点击下方的图片，它将被置于右上方。非常感谢您的支持！_

[![Bedrock Server Manager 的 Stars 档案](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [Docker 镜像](https://github.com/DMedina559/bedrock-server-manager)。

## 安装

此附加组件的安装流程非常直观，与其他 Hass.io 附加组件的安装方式并无不同。

1. 将我的 [Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存配置。
1. 启动附加组件。
1. 检查附加组件的日志，以确保一切正常。
1. 访问配置好的端口（默认为 11325）下本地 IP 地址的 Home Assistant。
1. 设置文件位于 `/addon_configs/2effc9b9_bedrockservermanager`。
1. 该文件夹在 `bedrock-server-manager` 的文档中对应为 `/root/`。

```
port : 11325 # 您希望运行的端口。
```

Web UI 可在 `<your-ip>:port` 处找到。

Ingress 功能仅 partial 支持。它无法显示实时的“监控界面”或其他 WebSocket 调用。不过基础的行政管理功能是可用的。如需完整功能，请手动访问 ip:port。
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
