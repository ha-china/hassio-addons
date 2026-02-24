# Home Assistant App: NGINX Home Assistant SSL proxy

设置一个使用 NGINX 的 SSL 代理，并将从端口 80 的流量重定向到 443。

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield]

## 关于

使用 NGINX Web 服务器设置一个 SSL 代理。它通常用于转发 SSL 互联网流量，同时允许来自/至 Home Assistant 实例的未加密流量。

在开始此应用之前，请确保您已经生成了一个证书。[Duck DNS](https://github.com/home-assistant/hassio-addons/tree/master/duckdns) 应用可以生成一个 Let's Encrypt 证书，该证书可用于此应用。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
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
