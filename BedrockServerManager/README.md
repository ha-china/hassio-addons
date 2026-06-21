# Home Assistant 扩展：BedrockServerManager

Bedrock Server Manager 是一个综合的 Python 服务器，旨在轻松安装、管理和维护 Minecraft 岩石版专用服务器。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展使用 [docker 镜像](https://github.com/DMedina559/bedrock-server-manager)。

## 安装

此扩展的安装相当简单，与安装任何其他 Hass.io 扩展没有太大区别。

1. 将我的 Hass.io 扩展仓库 [repository] 添加到您的 Hass.io 实例中。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看是否一切顺利。
1. 使用您配置的端口（默认为 11325）访问 home assistant 的本地 IP。
1. 设置将在 /addon_configs/2effc9b9_bedrockservermanager 中。
1. 此文件夹在 bedrock-server-manager 的文档中对应于 /root/

```
端口 : 11325 #您想要运行的端口。
```

Webui 可以在 `<您的 IP>:端口` 找到。

Ingress 只部分工作。它不会显示实时“监控标签”或其他 WebSocket 调用。然而，基本的行政管理是可用的。您必须访问 ip:端口 以获得完整功能
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
