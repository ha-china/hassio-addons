# Antigravity-Server

![Antigravity-Server 标志](https://raw.githubusercontent.com/FaserF/hassio-addons/master/antigravity-server/logo.png) width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_antigravity-server)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.2.2-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-antigravity-server)
![项目维护者](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 通过 NoVNC 在浏览器中流式传输 Antigravity AI IDE（Linux 桌面带有 XFCE4）。

---

## 📖 关于

通过 NoVNC 在浏览器中流式传输 Antigravity AI IDE（Linux 桌面带有 XFCE4）。

### 高级功能

- **动态工具集**：动态启用针对 Android、C++/Dev、Windows (MinGW) 或 Linters 的专用工具。
- **持久性**：您的设置和工具在 `/data` 目录中持久保存。
- **入境支持**：通过 Home Assistant 入境安全访问桌面。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置此应用。

### 选项

```yaml
additional_packages: []
autostart_antigravity: true
install_android_tools: false
install_dev_tools: false
install_linter_tools: false
install_windows_tools: false
log_level: info
vnc_password: ''
```

---

## 👨‍💻 信用与许可证

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
