# ShieldFile Addon 🛡️📂

![Logo](logo.png)

**基于 Web 的安全文件管理器 (SFTP over HTTPS)**

主项目: [ShieldFile](https://github.com/FaserF/ShieldFile)

ShieldFile 提供了一种现代、快速且安全的方式来管理您 Home Assistant 主机上的文件（例如 `/share`、`/media`、`/config`）。

> **由 [Filebrowser](https://filebrowser.org/) 驱动** ❤️
> ShieldFile 将优秀的 Filebrowser 项目包装在一个针对 Home Assistant 优化的“默认安全”容器中。

## ❓ 为什么是 "ShieldFile" 而不是普通的 Filebrowser？

ShieldFile 是专门为 **Home Assistant** 和 **安全性** 设计的：

1.  **🔐 安全默认设置**：ShieldFile 强制使用 HTTPS。如果您没有自己的证书，它会自动生成自签名证书，确保您的文件传输永远不会是明文。
2.  **🏠 Home Assistant 集成**：它会预挂载您的关键 Home Assistant 文件夹（`/config`、`/media`、`/share`、`/backup`），以便您可以立即管理它们。
3.  **🛡️ 身份验证**：它与“Shield”生态系统（如 ShieldDNS）完美契合，为您的私有云提供一致、品牌化的体验。

## 🤝 兼容性

ShieldFile 可以完美地与其他官方和社区插件协同工作：

- **高级 SSH & Web 终端**：您可以使用终端通过命令行管理文件，同时使用 ShieldFile 获得可视化界面。两者都访问相同的 `/share`、`/config` 等目录。
- **FTP**：您可以使用 FTP 客户端传输批量文件，并使用 ShieldFile 从浏览器管理它们。

## 功能

- **HTTPS**：通过浏览器进行安全的文件传输。
- **可配置**：选择要提供服务的目录。
- **多用户**：在 `config.yaml` 中定义主要用户，在 UI 中管理强大的权限。
- **主机网络**：高性能直接绑定。

## 安装

1. 在插件商店中安装此仓库。
2. 安装 **ShieldFile**。
3. 配置选项。
4. 启动！

## 配置

### 选项：`base_directory`

要提供服务的绝对路径。

- `/share`：共享文件夹。
- `/media`：媒体文件夹。
- `/config`：配置文件夹（请小心！）。

### 选项：`users`

用户列表。密码必须强大。
_注意：ShieldFile 使用内部数据库。配置选项初始化用户，但您也可以在 Web UI 中管理它们（设置 > 用户）。_

### 选项：`certfile` / `keyfile`

您的 SSL 证书。如果缺失，将生成自签名证书。

### 网络

在 **主机网络** 上运行。默认端口 `8443`。
确保防火墙允许此端口。

## 🛡️ 安全性与登录

### 它是如何安全的？

ShieldFile 使用 **数据库认证**。

1.  当您打开网站时，您将看到一个 **登录屏幕**。
2.  使用配置中定义的用户登录（默认：`admin`）。
3.  连接通过 **HTTPS**（TLS）加密。

### 公开访问

如果您将此插件发布到互联网（例如通过 Cloudflare Tunnel）：

1.  **强密码**：确保您的 `admin` 用户有一个非常强的密码。
2.  **2FA（推荐）**：使用 Cloudflare Access（零信任）在登录屏幕之前添加一个 2FA 层。
3.  **Fail2Ban**：监控日志以检测失败的登录尝试。

## 致谢

如果没有 [Filebrowser](https://github.com/filebrowser/filebrowser)，这个项目将不会存在。非常感谢开发者在后端所做的不懈努力！
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
