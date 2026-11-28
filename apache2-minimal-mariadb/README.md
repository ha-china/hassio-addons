# Apache2 最小化版配合 MariaDB 客户端

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/apache2-minimal-mariadb/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_apache2-minimal-mariadb)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-3.4.14-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-apache2-minimal-mariadb)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 一个开源的 Web 服务器，附带 MariaDB 客户端以及一些 PHP 模块。

---

## 📖 关于信息

这个 Apache Web 服务器的版本在性能与功能之间取得了平衡。它包含了用于数据库通信的 MariaDB 客户端以及必要的 PHP 模块，同时比完整的 Apache2 附加组件更加轻量。推荐给那些不需要完整 Apache 模块套件的数据库驱动型应用使用。

### Apache2 版本对比

| 特性 | Apache2 (全功能版) | Apache2 最小化版 | Apache2 最小化版 + MariaDB |
| :--- | :--- | :--- | :--- |
| **PHP 支持** | ✅ 有 (完整) | ❌ 无 | ✅ 有 (基本) |
| **MariaDB 客户端** | ✅ 有 | ❌ 无 | ✅ 有 |
| **占用空间** | 🖥️ 大 | ⚡ 最小 | ⚖️ 中等 |
| **适合场景** | WordPress、完整 CMS | 静态网站 | 简单 PHP 应用 |

---

## 🏠 Home Assistant 集成

该附加组件支持 Home Assistant 的 **Webserver App** 集成。
当附加组件启动时，该集成会自动安装/更新。

有关更多信息和配置详情，请参阅 [集成说明文档](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请通过 Home Assistant App 页面上的 **配置** 选项卡来配置应用程序。

### 选项

```yaml
certfile: fullchain.pem
default_conf: default
default_ssl_conf: default
document_root: /share/htdocs
init_commands: []
keyfile: privkey.pem
log_level: info
php_ini: default
ssl: true
website_name: web.local
```

---

## 👨‍💻 致谢与许可

此项目专为开源设计，按 MIT 许可协议发布。
由 **FaserF** 维护。

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
