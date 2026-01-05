# WordPress

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_wordpress)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker Image](https://img.shields.io/badge/docker-0.0.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-wordpress)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> Web上最受欢迎的发布平台。

---

> [!CAUTION]
> **实验性/测试版状态**
>
> 此插件仍在开发中，或主要为个人使用而开发。
> 它尚未经过广泛测试，但预计基本功能可以正常工作。

---

## 📖 关于

Web上最受欢迎的发布平台。

WordPress是一个开源软件，您可以使用它来创建一个漂亮的网站、博客或应用程序。

此插件将WordPress带到Home Assistant，允许您直接在您的Home Assistant实例上托管您自己的网站。

## 安装

1. 在Supervisor插件商店中搜索“WordPress”插件并安装它。
1. 在“配置”选项卡中配置`database`设置。您必须有一个MariaDB/MySQL数据库可用。
1. 启动“WordPress”插件。
1. 检查“WordPress”插件的日志，看看是否一切正常。
1. 点击“打开Web界面”按钮以访问您的WordPress站点。

### 选项：`database_host`

您的MariaDB/MySQL数据库的主机名。

### 选项：`database_name`

要使用的数据库的名称。

### 选项：`database_password`

数据库用户的密码。

### 选项：`database_user`

数据库的用户名。

### 选项：`wordpress_admin_email`

管理员账户的电子邮件地址。

### 选项：`wordpress_admin_password`

管理员账户的密码。

### 选项：`wordpress_admin_user`

管理员账户的用户名。

### 选项：`wordpress_title`

您的WordPress站点的标题。

此项目是开源的，并在MIT许可证下提供。
由 **FaserF** 维护。

---

## ⚙️ 配置

通过Home Assistant插件页面中的**配置**选项卡配置插件。

### 选项

```yaml
database_host: ''
database_name: wordpress
database_password: ''
database_user: wordpress
wordpress_admin_email: admin@example.com
wordpress_admin_password: ''
wordpress_admin_user: admin
wordpress_title: My Blog
```

---

## 👨‍💻 致谢与许可证

此项目是开源的，并在MIT许可证下提供。
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
