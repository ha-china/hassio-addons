# pterodactyl Panel Gameserver

![Logo](https://raw.githubusercontent.com/FaserF/hassio-addons/master/pterodactyl-panel/logo.png)

[![打开您的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_pterodactyl-panel)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-1.3.0-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-pterodactyl_panel)
![项目维护](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 开源游戏服务器管理面板

---

## 📖 关于

## 安装

1. 在 Home Assistant 应用商店中搜索 "pterodactyl Panel Gameserver - BETA" 应用并安装。
2. （可选）在配置选项卡中设置一个 **密码**。如果留空，将生成一个随机密码并在日志中显示。
3. 启动应用。
4. 对于初始登录凭证，请参阅[文档](DOCS.md#%F0%9F%9A%80-first-login)。

> [!TIP]
> **登录信息：**
>
> - **邮箱地址:** `admin@example.com`
> - **密码:** 您在 `password` 字段中设置的值（或如果留空，请检查日志）
>
> > 开源游戏服务器 - 目前尚未完全工作
>
> [!CAUTION]
> **实验性/测试版状态**
> 此应用仍在开发中，或主要用于个人使用。
> 它尚未经过广泛测试，但预期基本功能应该可以工作。

如果您在此应用中遇到任何问题，请通过以下链接报告。
问题表单将预填充应用信息，以帮助我们更快地解决问题。

如果您有新功能或改进的想法，请使用以下链接提交功能请求。表单将预填充应用信息。

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置应用。

### 选项

```yaml
app_url: http://pterodactyl.local
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
password: ''
ssl: false
```

---

## 👨‍💻 致谢与许可

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
