# Home Assistant 附加组件：mitmproxy

Mitmproxy 是调试、测试、隐私测量和渗透测试的瑞士军刀。它可以用于拦截、检查、修改和重放 HTTP/1、HTTP/2、WebSocket 或其他任何 SSL/TLS 受保护协议的 Web 流量。您可以美化并解码从 HTML 到 Protobuf 等多种消息类型，实时拦截特定消息，在它们到达目标之前进行修改，并在稍后将它们重放到客户端或服务器。

使用 mitmweb 在图形界面中发挥 mitmproxy 的主要功能。你喜欢 Chrome 的 DevTools 吗？mitmweb 为任何其他应用程序或设备提供类似体验，并具备请求拦截和重放等额外功能。

_感谢所有人对这个仓库的点赞过！想关注的话，请点击下方图片，它将出现在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该附加组件基于 [docker 镜像](https://github.com/mitmproxy/mitmproxy)。

## 安装

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储代理端口和 WebUI 端口的配置。
1. 启动附加组件。
1. 附加组件将失败，这是正常的。
1. ssh 进入您的 Home Assistant 并下载 `chmod 2777 /addon_configs/2effc9b9_mitmproxy/`
1. 查看附加组件的日志以确认一切是否顺利。
1. 您的证书将生成在 /addon_configs/2effc9b9_mitmproxy
1. 如果您有来自其他安装状态的证书，请复制它们到该目录，而不是使用默认操作。
1. 打开 WebUI，可通过 <your-ip>:port 访问。
1. 密码为 `homeassistant`

WebUI 可访问 <your-ip>:port。

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
