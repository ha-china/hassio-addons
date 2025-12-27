# ShieldFile

![Logo](logo.png)

[![Open your Home Assistant instance and show the add-on dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=c1e285b7_ShieldFile)
[![Home Assistant Add-on](https://img.shields.io/badge/home%20assistant-addon-blue.svg)](https://www.home-assistant.io/addons/)
[![GitHub Release](https://img.shields.io/github/v/release/FaserF/hassio-addons?include_prereleases&style=flat-square)](https://github.com/FaserF/hassio-addons/releases)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 安全的、基于Web的文件管理器（通过HTTPS的SFTP）

---

## 📖 关于

## 安全的、基于Web的文件管理器（通过HTTPS的SFTP）

主要项目：[ShieldFile](https://github.com/FaserF/ShieldFile)

ShieldFile 提供了一种现代、快速且安全的方法来管理您的 Home Assistant 主机（例如 `/share`、`/media`、`/config`）上的文件。

> **由 [Filebrowser](https://filebrowser.org/) 支持 ❤️**
> ShieldFile 将出色的 Filebrowser 项目包装在一个为 Home Assistant 优化的“默认安全”容器中。

<!-- markdownlint-disable MD013 MD026 -->

## ❓ 为什么选择 "ShieldFile" 而不是普通的 Filebrowser

<!-- markdownlint-enable MD026 -->

ShieldFile 专为 **Home Assistant** 和 **安全性** 设计：

1. **🔐 安全默认设置**：ShieldFile 强制使用 HTTPS。如果您没有自己的证书，它会自动生成自签名证书，确保您的文件传输永远不会是明文。
1. **🏠 HA 集成**：它预挂载您的关键 Home Assistant 文件夹（`/config`、`/media`、`/share`、`/backup`），以便您可以立即管理它们。
1. **🛡️ 身份**：它与“Shield”生态系统（如 ShieldDNS）完美契合，为您的私有云提供一致、品牌化的体验。

## 🤝 兼容性

ShieldFile 可以完美地与其他官方和社区插件协同工作：

- **高级 SSH & Web 终端**：您可以通过命令行管理文件，同时使用 ShieldFile 获得视觉界面。两者都访问相同的 `/share`、`/config` 等目录。
- **FTP**：您可以使用 FTP 客户端传输批量文件，并使用 ShieldFile 从浏览器管理它们。

## 功能

- **HTTPS**：通过浏览器进行安全的文件传输。
- **可配置**：选择要提供哪个目录。
- **多用户**：在 `config.yaml` 中定义主要用户，在 UI 中管理强大的权限。
- **主机网络**：高性能的直接绑定。

## 安装

1. 在插件商店中安装此仓库。
2. 安装 **ShieldFile**。
3. 配置选项。
4. 启动！

---

## ⚙️ 配置

通过 Home Assistant 插件页面中的 **配置** 标签配置插件。

### 选项

```yaml
base_directory: /share
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
port: 8443
users:
- password: changeme
  username: admin
```

---

## 👨‍💻 致谢 & 许可证

此项目是开源的，并在 MIT 许可证下提供。
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
