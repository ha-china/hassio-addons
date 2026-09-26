# Antigravity-Server

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/antigravity-server/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_antigravity-server)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-1.3.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-antigravity-server)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 通过 NoVNC 在浏览器中流式传输 Antigravity AI IDE（基于 XFCE4 的 Linux 桌面）。

---

## 📖 关于介绍

通过 NoVNC 在浏览器中流式传输 Antigravity AI IDE（基于 XFCE4 的 Linux 桌面）。

### 高级特性

- **动态工具包**：随时启用 Android、C++/Dev、Windows (MinGW) 或 Linters 的专业工具。
- **持久化**：您的设置和工具将保存在 `/data` 目录中。
- **入口支持**：通过 Home Assistant Ingress 安全访问桌面。

---

## ⚙️ 配置

通过家庭助手应用页面中的 **配置** 选项卡配置该应用。

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

## 👨‍💻 致谢与许可证

本项目为开源软件，并提供 MIT 许可证。
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
