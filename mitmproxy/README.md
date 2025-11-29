# Home assistant add-on: mitmproxy

Mitmproxy 是您用于调试、测试、隐私测量和渗透测试的瑞士军刀。它可用于拦截、检查、修改和重放网络流量，例如 HTTP/1、HTTP/2、WebSockets 或任何其他 SSL/TLS 加密的协议。您可以将各种消息类型（从 HTML 到 Protobuf）进行美化和解码，实时拦截特定消息，在它们到达目的地之前修改它们，并在稍后重放给客户端或服务器。

使用 mitmweb 在图形界面中使用 mitmproxy 的主要功能。您喜欢 Chrome 的 DevTools 吗？mitmweb 为任何其他应用程序或设备提供类似体验，并具有额外的功能，如请求拦截和重放。

_感谢所有将我的仓库标记为星标的人！要将它标记为星标，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## About

这个插件基于 [docker 镜像](https://github.com/mitmproxy/mitmproxy)。

## Installation

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
2. 安装此插件。
3. 点击 `保存` 按钮以存储您的代理端口和 WebUI 端口配置。
4. 启动插件。
5. 检查插件的日志以查看是否一切正常。
6. 您的证书将生成在 /addon_configs/2effc9b9_mitmproxy
7. 如果您有来自其他安装的证书，请将它们复制到此目录。
8. 应该可以通过 <your-ip>:port 打开 WebUI。
9. 密码是 `homeassistant`

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
