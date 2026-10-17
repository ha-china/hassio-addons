# Home Assistant 插件：Komga

免费开源的漫画/漫画媒体服务器。

[Komga](https://komga.org) 管理系统漫画、杂志、BD（蓝光碟）、杂志和电子书，通过网络阅读器提供服务，并暴露 OPDS、Kobo 同步和 REST API 供第三方阅读器使用（如 Tachiyomi/Mihon、Panels、Chunky 等）。

## 关于

- 在任何浏览器中浏览和阅读 CBZ、CBR、PDF 和 EPUB 文件
- 导入元数据、编辑系列/书籍、构建收藏集和阅读书单
- 多用户支持，包含每个用户的库限制和年龄评级
- 支持 OPDS v1/v2、Kobo 同步以及文档化的 REST API

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Komga** 插件。
3. 启动插件并从侧边栏（ingress）打开，或在端点 `25600` 处访问 `http://homeassistant:25600/komga`。
4. 当网页界面询问时创建初始用户账户。
5. 添加指向您的漫画的库，例如 `/media/comics` 或 `/share/comics`。

首次启动时间较长：Komga 是一个 JVM 应用程序，首次启动时会建立其数据库和搜索索引。

## 配置

| 选项 | 描述 |
|------|------|
| `PUID` / `PGID` | 应用于插件配置目录的所有权。默认为 `0`（root）。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 如需挂载的本地磁盘，例如 `sda1` 或磁盘标签。在驱动器后添加一个文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | 需要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载到 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许过时的 SMBv1 协议。 |
| `env_vars` | 传递给 Komga 的额外环境变量。详见 [Wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

大多数 Komga 设置可以通过上游命名通过 `env_vars` 传递，请参阅 [Komga 配置选项](https://komga.org/docs/installation/configuration/)。一个常见的设置是：

- `JAVA_TOOL_OPTIONS` = `-Xmx1g` —— 在小型机器上限制 JVM 堆内存。

`SERVER_SERVLET_CONTEXTPATH` 和 `SERVER_PORT` 由插件保留：侧边栏是基于端点 `25600` 上的 `/komga` 路径构建的，覆盖任何一项都会破坏侧边栏面板功能。

## Ingress 和 URL

Komga 从 `/komga` 子路径服务，因此它可以工作在 Home Assistant ingresse 之后：

- 从 Home Assistant 侧边栏：通过 ingresse，无需额外设置
- 直接访问：`http://homeassistant:25600/komga`

外部客户端 — OPDS 阅读器、Kobo 同步、Tachiyomi/Mihon、Panels — 必须使用直接 URL `http://homeassistant:25600/komga`。Ingress 基于浏览器会话，因此这些客户端无法通过它进行身份验证。

## 数据

Komga 的数据库、日志和搜索索引位于插件内的 `/config` 目录中，Home Assistant 将其映射到此插件的配置目录 —— `/addon_configs/<repository_id>_komga`，可以通过 Filebrowser 插件浏览。插件更新后它们仍然存在。库保留在您放置的位置，位于 `/media`、 `/share` 或已挂载的磁盘上。

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
