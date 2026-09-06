# Imapsync

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/imapsync/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_imapsync)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-0.4.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-imapsync)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 轻松可靠地同步 imap 账户。

---

> [!CAUTION]
> **实验/测试版状态**
>
> 此应用程序仍处于开发阶段，且/或主要用于个人使用。
> 它尚未得到充分测试，但预期可以基本运行。

---

## 📖 简介

Imapsync 是专为重型邮件迁移、备份以及任意两个 IMAP 服务器之间的邮件盒同步设计的行业标准工具。

### ✨ 功能特性

* **增量同步**：仅在后续运行中传输新消息和已修改的消息。
* **多账户支持**：可在单个调度计划中配置并同步多个独立的账户对。
* **现代 OAuth2 支持**：支持 Google (Gmail) 和 Microsoft (Outlook/Office 365) 的完整 OAuth2 支持。
* **灵活过滤**：对文件夹、最大年龄和文件大小限制进行精细的包含/排除设置。

---

## ⚙️ 配置

通过 Home Assistant 应用程序页面的 **配置** 标签页配置该应用程序。

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

## 👨‍💻 致谢与许可

该项目是开源的，并在 MIT 许可证下提供。
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
