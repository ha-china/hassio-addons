# ShieldFile

![ShieldFile 标志](https://raw.githubusercontent.com/FaserF/hassio-addons/master/ShieldFile/logo.png) width="100" alt="Logo" />

[![打开你的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_ShieldFile)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-2.3.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-shieldfile)
![项目维护者](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 安全的基于 Web 的文件管理器（通过 HTTPS 使用 SFTP）

---

## 📖 关于

安全的基于 Web 的文件管理器（通过 HTTPS 使用 SFTP）

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **配置** 选项卡来配置此应用。

### 选项

```yaml
base_directory: /share
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
port: 8443
users:
- password: changeme1234
  username: admin
```

---

## 👨‍💻 贡献者与许可证

此项目是开源的，并受 MIT 许可证的约束。
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
