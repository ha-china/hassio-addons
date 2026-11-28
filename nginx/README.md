# NGINX

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/nginx/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_nginx)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.4.15-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-nginx)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 开源 Web 服务器，支持 PHP 和 MariaDB。

---

> [!CAUTION]
> **实验性 / 测试版状态**
>
> 该应用程序仍处于开发中，或主要为个人使用而开发。
> 它尚未经过全面测试，但预计能基本正常运行。

---

## 📖 关于

NGINX 是一款以其稳定性、丰富的功能集和低资源消耗而闻名的高性能 HTTP 服务器和反向代理。此附加程序为 NGINX 提供了 PHP-FPM 和 MariaDB 客户端支持，为复杂 Web 应用程序的托管和高并发环境提供了一种现代且极快的 Apache 替代品方案。

---

## 🏠 Home Assistant 集成功能

此附加程序支持 Home Assistant 的 **Web 服务器应用** 集成功能。
当附加程序启动时，集成功能将自动安装/更新。

有关更多信息和配置详情，请参考 [集成功能说明](https://github.com/FaserF/ha-webserver)。

---

## ⚙️ 配置

请在 Home Assistant 应用页面的 **配置** 选项卡中配置该应用程序。

### 选项

```yaml
certfile: fullchain.pem
default_conf: default
default_ssl_conf: default
document_root: /share/htdocs
init_commands: []
keyfile: privkey.pem
log_level: notice
php_ini: default
ssl: false
stream_gateway:
  buffer_size: 32M
  cache_dir: /data/rclone_cache
  cache_enabled: true
  cache_path: /share/nginx/stream_cache
  cache_size: 10g
  enabled: false
  port: 8097
  rclone_config: /share/rclone/rclone.conf
  rclone_enabled: false
  rclone_remote: 'cloud_pool_crypt:'
  upstream_url: ''
  vfs_cache_max_age: 24h
  vfs_cache_max_size: 10G
  vfs_cache_mode: full
  vfs_read_ahead: 64M
  vfs_read_chunk_size: 8M
  vfs_read_chunk_size_limit: 64M
website_name: web.local
```

---

## 👨‍💻 致谢与许可

该项目是开源的，并采用 MIT 许可。
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
