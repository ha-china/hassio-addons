# ShieldDNS

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_ShieldDNS)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![GitHub Release](https://img.shields.io/github/v/release/FaserF/hassio-addons?include_prereleases&style=flat-square)](https://github.com/FaserF/hassio-addons/releases)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 高性能DoT代理，适用于AdGuard Home

---

## 📖 关于

<!-- markdownlint-disable MD033 MD041 MD013 -->
<!-- markdownlint-enable MD033 MD041 -->

为移动设备转发到您本地的AdGuard Home或其他DNS服务器。即使您在本地网络（如果您的设备强制使用Private DNS）上，或者您安全地暴露此端口时，也能保护您的DNS查询。

---

## ⚙️ 配置

通过Home Assistant插件页面中的**配置**选项卡配置插件。

### 选项

```yaml
certfile: fullchain.pem
cloudflare_tunnel_token: ''
doh_port: 3443
dot_port: 8853
enable_info_page: false
fallback_dns: false
fallback_dns_server: 1.1.1.1
keyfile: privkey.pem
log_level: info
upstream_dns: 192.168.1.2
```

---

## 👨‍💻 致谢与许可证

本项目是开源的，并在MIT许可证下提供。
由 **FaserF** 维护。
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
