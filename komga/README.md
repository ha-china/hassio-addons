# Home Assistant 插件：Komga

免费且开源的漫画/漫画书媒体服务器。

[Komga](https://komga.org) 会整理您的漫画、漫画书、BD 光盘、杂志和电子书，通过内置的 Web 阅读器提供服务，并为第三方阅读器（Tachiyomi/Mihon、Panels、Chunky 等）提供 OPDS、Kobo 同步和 REST API 支持。

## 关于

- 浏览并通过任何浏览器读取 CBZ、CBR、PDF 和 EPUB 文件
- 导入元数据，编辑杂志/书籍，构建收藏集和阅读列表
- 支持多用户，可设置针对每个用户的图书库访问限制和年龄评级
- 支持 OPDS v1/v2、Kobo 同步以及文档详尽的 REST API

## 安装

1. 将本仓库添加到 Home Assistant 中。
2. 安装 **Komga** 插件。
3. 启动插件，并从侧边栏（ingress）打开，或访问端口 `25600` 上的 `http://homeassistant:25600/komga`。
4. 当网页界面要求时，创建初始用户账户。
5. 添加指向漫画库的路径，例如 `/media/comics` 或 `/share/comics`。

首次启动所需时间比平时更长：Komga 是一个基于 JVM 的应用程序，首次启动时会构建其数据库和搜索索引。

## 配置

| 选项 | 描述 |
|------|------|
| `PUID` / `PGID` | 应用于插件配置文件目录的所有权 ID。默认值为 `0` (root)。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 要挂载的本地磁盘，例如 `sda1` 或磁盘标签。若在驱动器后添加文件夹，则仅挂载该文件夹（例如 `MYNAS/public` 仅挂载该文件夹至 `/mnt/MYNAS/public`）。文件夹挂载功能需要在 2026-09-19 之后发布的插件版本中支持。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载至 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据信息。 |
| `smbv1` | 允许使用旧版 SMBv1 协议。 |
| `env_vars` | 传递给 Komga 的额外环境变量。参见 [Wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

大多数 Komga 设置可以通过 `env_vars` 使用上游命名方式传递，详见 [Komga 配置选项](https://komga.org/docs/installation/configuration/)。一个常用示例：

- `JAVA_TOOL_OPTIONS` = `-Xmx1g` —— 在小机器上限制 JVM 堆内存。

`SERVER_SERVLET_CONTEXTPATH` 和 `SERVER_PORT` 被插件保留：ingress 围绕端口 `25600` 上的 `/komga` 路径构建，若覆盖这两个设置将破坏侧边栏面板。

## Ingress 和 URL

Komga 被托管在 `/komga` 子路径下，以便它可以在 Home Assistant ingresses 之后正常工作：

- 从 Home Assistant 侧边栏：通过 ingress，无需额外设置。
- 直接访问：`http://homeassistant:25600/komga`

外部客户端 —— OPDS 阅读器、Kobo 同步、Tachiyomi/Mihon、Panels —— 必须使用直接 URL `http://homeassistant:25600/komga`。ingress 是基于浏览器会话的，因此这些客户端无法通过它进行身份验证。

## 数据

Komga 的数据库、日志和搜索索引位于插件内的 `/config` 目录中，该目录被 Home Assistant 映射到此插件的配置目录 —— `/addon_configs/<repository_id>_komga`，可以通过 Filebrowser 插件浏览。它们在插件更新后仍然存在。库文件保持在您放置的位置，在 `/media`、`/share` 或挂载的磁盘上。

## 支持

- [Komga 上游项目](https://github.com/gotson/komga)
- [插件仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
