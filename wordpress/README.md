# Wordpress

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/wordpress/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用程序仪表盘。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_wordpress)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.4.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-wordpress)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 互联网上最流行的内容发布平台。

---

> [!CAUTION]
> **实验性 / 试用状态**
>
> 此应用程序仍处于开发阶段，或主要用于个人使用。
> 它尚未得到广泛测试，但预计在基本功能上是可用的。

---

## 📖 介绍

WordPress 是世界上最流行的开源内容管理和博客平台。

### ✨ 功能

* **预配置环境**：基于 Apache，配备 PHP 和 MariaDB 数据库连接。
* **可扩展且可定制**：完整访问主题、插件和自定义 PHP 脚本的权限。
* **Ingress 与直接访问**：可通过 Home Assistant Ingress 和专用的 Web 端口访问。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 标签页配置该应用。

### 选项

```yaml
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
ssl: false
wordpress_admin_email: admin@example.com
wordpress_admin_user: admin
wordpress_title: My Blog
wordpress_url: http://wordpress.local
```

---

## 👨‍💻 致谢与许可

本项目开源，采用 MIT 许可。
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
