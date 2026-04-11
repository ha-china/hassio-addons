# Wiki.JS (版本 3 - Alpha)

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/wiki.js3/logo.png" width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用程序仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_wiki.js3)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-0.6.1-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-wiki.js3)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 最强大且可扩展的开源 Wiki 软件（版本 3 - Alpha）

---

> [!注意]
> **实验性 / 测试版状态**
>
> 此应用程序仍在开发中，或主要针对个人使用开发。
> 它尚未经过充分测试，但预计基本功能可以正常工作。

---

## 📖 关于

## 🏁 首次启动

首次启动时，您将看到一个管理设置向导。向导将引导您完成 Wiki 连接的初始配置和管理员账户的创建。

请在此过程中创建自己的 **管理员账户**（邮箱 / 密码）。

### 默认数据库凭证

应用程序预先配置了本地 PostgreSQL 数据库。`wiki` 数据库用户的默认密码为：

- **密码**：`wikijs`（这是数据库密码，不是您的管理员登录密码）

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置应用程序。

### 选项

```yaml
certfile: fullchain.pem
db_password: wikijs
keyfile: privkey.pem
log_level: info
reset_database: false
reset_database_confirm: false
ssl: true
```

---

## 👨‍💻 致谢与许可

此项目是开源的，并采用 MIT 许可证。
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
