# WordPress

![Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/wordpress/logo.png)

[![打开您的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_wordpress)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.4.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-wordpress)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 互联网上最受欢迎的发布平台。

---

> [!警告]
> **实验性/测试版状态**
>
> 此应用仍在开发中，或主要针对个人使用进行开发。
> 它尚未经过广泛测试，但预计基本功能正常。

---

## 📖 关于

## 🌐 如何访问

该应用为访问您的 WordPress 网站公开了两个端口：

- **HTTP**：端口 `8099` => `http://homeassistant.local:8099`
- **HTTPS**：端口 `8449` => `https://homeassistant.local:8449`

**重要**：

1. 如果您启用 **SSL** (`ssl: true`)，对 HTTP 端口的请求将严格重定向到 HTTPS 端口。
2. 确保您的 `wordpress_url` 配置与您打算使用的协议相匹配（例如，以 `https://` 开头，如果您使用 SSL）。

## 🔐 首次运行 & 登录

### 初始凭证

在 **首次启动** 时，该应用将安装 WordPress 并自动生成一个安全的 **管理员密码**。

1. 启动应用。
2. 立即检查应用的 **日志** 选项卡。
3. 查找包含 **"Wordpress 管理员密码"** 的消息框。
4. **复制并保存此密码**！它只会显示一次。

默认 **用户名** 是 `admin`（除非在配置中更改）。

### 数据库 & 配置

- `wp-config.php` 文件将由应用自动生成和维护。
- 数据库连接将自动处理。

---

## ⚙️ 配置

通过 Home Assistant App 页面的 **配置** 选项卡配置应用。

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

## 👨‍💻 致谢 & 许可证

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
