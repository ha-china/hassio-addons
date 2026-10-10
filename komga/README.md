# Home Assistant 附加组件：Komga

免费开源的漫画/连载刊物媒体服务器。

[Komga](https://komga.org) 会整理您的漫画、连载刊物、BD、杂志和电子书，通过网页阅读器提供访问，并向第三方阅读器（Tachiyomi/Mihon、Panels、Chunky 等）暴露 OPDS、Kobo 同步及 REST API。

## 关于

- 使用任意浏览器浏览和阅读 CBZ、CBR、PDF 和 EPUB 文件
- 导入元数据，编辑系列/书籍，构建收藏集和阅读列表
- 多用户支持，包括针对每个用户的图书库限制和年龄评级
- 支持 OPDS v1/v2、Kobo 同步以及文档化的 REST API

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Komga** 附加组件。
3. 启动附加组件并从侧边栏（入口点）打开，或在端口 `25600` 上访问 `http://homeassistant:25600/komga`。
4. 当网页界面要求时，创建初始用户账户。
5. 添加指向您漫画的图书库，例如 `/media/comics` 或 `/share/comics`。

首次启动时间较长：Komga 是一个 JVM 应用程序，会在首次启动时构建数据库和搜索索引。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于附加组件配置目录的权限。默认为 `0`（root）。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 要挂载的本地磁盘，例如 `sda1` 或磁盘标签。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要附加组件在 **2026 年 9 月 19 日之后** 发布。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许过时的 SMBv1 协议。 |
| `env_vars` | 传递给 Komga 的额外环境变量。请参阅 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

大多数 Komga 设置可以通过 `env_vars` 传递，使用上游命名，请参阅 [Komga 配置选项](https://komga.org/docs/installation/configuration/)。常见示例：

- `JAVA_TOOL_OPTIONS` = `-Xmx1g`——在小机器上限制 JVM 堆内存。

`SERVER_SERVLET_CONTEXTPATH` 和 `SERVER_PORT` 由附加组件保留：入口点基于端口 25600 上的 `/komga` 路径构建，覆盖其中任意一项都会破坏侧边栏面板。

## 入口点和 URL

Komga 从 `/komga` 子路径提供服务，以便在 Home Assistant 入口点后端正常工作：

- 来自 Home Assistant 侧边栏：入口点，无需额外设置
- 直接访问：`http://homeassistant:25600/komga`

外部客户端——OPDS 阅读器、Kobo 同步、Tachiyomi/Mihon、Panels——必须使用直接 `http://homeassistant:25600/komga` URL。入口点是基于浏览器会话的，因此这些客户端无法通过它进行身份验证。


## 数据

Komga 的数据库、日志和搜索索引位于附加组件内的 `/config` 目录，Home Assistant 将其映射到该附加组件自身的配置目录——`/addon_configs/<repository_id>_komga`，可通过 Filebrowser 附加组件进行浏览。它们在附加组件更新后依然存在。图书库保留在您放置的位置，位于 `/media`、`/share` 或已挂载的磁盘上。

## 支持

- [Komga 上游项目](https://github.com/gotson/komga)
- [附加组件仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
