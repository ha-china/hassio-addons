# Imapsync

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/imapsync/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_imapsync)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.4.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-imapsync)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 轻松可靠地同步 IMAP 账户。

---

> [!CAUTION]
> **实验性/测试版状态**
>
> 此应用仍处于开发中，或主要面向个人使用。
> 尚未进行广泛测试，但预期能基本正常运行。

---

## 📖 简介

Imapsync 是专为重载荷邮件迁移、备份以及服务器间任意两个 IMAP 服务器之间的邮件箱同步而设计的行业标准工具。

### ✨ 功能特点

* **增量同步**：仅在后续运行中传输新消息和已修改的消息。
* **多账户支持**：在单个计划中配置并同步多个独立的账户对。
* **现代 OAuth2 支持**：完全支持 Google (Gmail) 和 Microsoft (Outlook/Office 365) 的 OAuth2。
* **灵活的过滤**：支持文件夹、最大 ages 和大小限制的细粒度包含/排除。

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **Configuration**（配置）选项卡配置此应用。

### 选项

```yaml
jobs:
  - additional_cli_args: []
    delete_after_sync: false
    destination_auth_type: password
    destination_host: imap.example.net
    destination_oauth2_client_id: ''
    destination_oauth2_client_secret: ''
    destination_oauth2_refresh_token: ''
    destination_oauth2_tenant_id: ''
    destination_password: ''
    destination_user: dest@example.net
    dry_run: false
    excluded_folders: []
    included_folders: []
    max_age: 0
    max_size: 0
    source_auth_type: password
    source_host: imap.example.com
    source_oauth2_client_id: ''
    source_oauth2_client_secret: ''
    source_oauth2_refresh_token: ''
    source_oauth2_tenant_id: ''
    source_password: ''
    source_user: source@example.com
    subscribe_folders: true
    sync_gmail_labels: false
    sync_internal_dates: true
log_level: info
sync_interval: 3600
```

---

## 👨‍💻 贡献与许可

本项目是开源的，遵循 MIT 许可证。
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
