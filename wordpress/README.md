# WordPress

![Logo](logo.png)

[![打开你的 Home Assistant 实例并显示插件仪表板。](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_wordpress)
[![Home Assistant 插件](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.2.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-wordpress)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 网络上最受欢迎的发布平台。

---

> [!CAUTION]
> **实验性 / Beta 状态**
>
> 该插件仍在开发中，或主要开发用于个人使用。
> 目前尚未进行广泛测试，但预计基本功能可以正常工作。

---

## 📖 关于

网络上最受欢迎的发布平台。

WordPress 是一种开源软件，您可以使用它来创建一个漂亮的网站、博客或应用程序。

该插件将 WordPress 带到 Home Assistant，允许您直接在您的 Home Assistant 实例上托管自己的网站。

## 🌐 如何访问

该插件为访问您的 WordPress 网站暴露了两个端口：

- **HTTP**: 端口 `8099` => `http://homeassistant.local:8099`
- **HTTPS**: 端口 `8449` => `https://homeassistant.local:8449`

**重要**：

1. 如果您启用 **SSL** (`ssl: true`)，对 HTTP 端口的请求将严格重定向到 HTTPS 端口。
2. 确保您的 `wordpress_url` 配置与您打算使用的协议匹配（例如，如果使用 SSL，则开头应为 `https://`）。

## 🔐 首次运行与登录

### 初始凭证

在 **首次启动时**，插件将安装 WordPress 并自动生成一个安全的 **管理员密码**。

1. 启动插件。
2. 立即检查插件的 **日志** 选项卡。
3. 查找包含 **"WordPress 管理员密码"** 的消息框。
4. **复制并保存此密码！** 它将只显示一次。

默认的 **用户名** 是 `admin`（除非在配置中更改）。

### 数据库与配置

- 自动生成并维护的 `wp-config.php` 文件。
- 数据库连接由插件自动处理。

---

## ⚙️ 配置

通过 Home Assistant 插件页面中的 **配置** 选项卡配置插件。

### 选项

```yaml
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
ssl: false
wordpress_admin_email: admin@example.com
wordpress_admin_user: admin
wordpress_title: 我的博客
wordpress_url: http://wordpress.local
```

---

## 👨‍💻 致谢与许可证

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
