# NGINX

![Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/nginx/logo.png)

[![打开您的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_nginx)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.3.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-nginx)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 开源 Web 服务器，支持 PHP 和 MariaDB。

---

> [!注意]
> **实验性/测试版状态**
>
> 此应用仍在开发中，或主要用于个人使用。
> 它尚未经过充分测试，但预期基本功能正常。

---

## 📖 关于

NGINX 是一个高性能的 HTTP 服务器和反向代理，以其稳定性、丰富的功能集和低资源消耗而闻名。此插件为 NGINX 提供了 PHP-FPM 和 MariaDB 客户端支持，提供了一种现代且极快的替代 Apache 的方案，用于托管复杂的 Web 应用程序和处理高并发环境。

---

## 🏠 Home Assistant 集成

此插件支持 Home Assistant 的 **Web服务器应用** 集成。
集成在插件启动时自动安装/更新。

有关更多信息和管理细节，请参阅 [集成 README](../custom_components/webserver_app/README.md)。

---

## ⚙️ 配置

通过 Home Assistant App 页面的 **配置** 选项卡配置应用。

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
ssl: false
website_name: web.local
```

---

## 👨‍💻 贡献者与许可证

此项目是开源的，并可在 MIT 许可证下使用。
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
