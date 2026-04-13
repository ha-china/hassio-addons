# Home Assistant 扩展：mitmproxy

mitmproxy 是您的瑞士军刀，用于调试、测试、隐私测量和渗透测试。它可以拦截、检查、修改和回放如 HTTP/1、HTTP/2、WebSocket 或任何其他 SSL/TLS-保护协议的网页流量。您可以对从 HTML 到 Protobuf 的各种消息类型进行美化和解码，即时拦截特定消息，在它们到达目的地之前修改它们，并在以后将它们回放到客户端或服务器。

使用 mitmproxy 的主要功能，通过 mitmweb 图形界面。您喜欢 Chrome 的开发者工具吗？mitmweb 为您提供了类似的其他应用或设备的体验，还增加了请求拦截和回放等额外功能。

_感谢所有为我仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![为 @jdeath/homeassistant-addons 仓库点星的用户列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此扩展基于 [docker 镜像](https://github.com/mitmproxy/mitmproxy)。

## 安装

1. 将我的 Hass.io 扩展仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此扩展。
2. 点击 `保存` 按钮以存储您的代理端口和 WebUI 端口配置。
3. 启动扩展。
4. 检查扩展日志以查看是否一切顺利。
5. 您的证书将在 /addon_configs/2effc9b9_mitmproxy 生成。
6. 如果您有来自另一个安装的证书，请将它们复制到这个目录。
7. 通过 <your-ip>:port 打开 WebUI。
8. 密码是 `homeassistant`

WebUI 可以在 `<your-ip>:port` 找到。

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
