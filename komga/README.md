# Home Assistant 附加组件：Komga

免费开源的漫画/ manga 媒体服务器。

[Komga](https://komga.org) 组织您的漫画、曼哈、BD、杂志和电子书，通过 Web 阅读器提供服务，并 expose OPDS、Kobo 同步以及供第三方阅读器（Tachiyomi/Mihon、Panels、Chunky 等）使用的 REST API。

## 关于

- 在任何浏览器中浏览和阅读 CBZ、CBR、PDF 和 EPUB 文件
- 导入元数据，编辑系列/图书，构建收藏集和阅读列表
- 多用户支持，包含每用户图书馆限制和年龄评级
- 支持 OPDS v1/v2、Kobo 同步以及文档化的 REST API

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Komga** 附加组件。
3. 启动附加组件，并从侧边栏（ingress）中打开，或在端口 `25600` 访问 `http://homeassistant:25600/komga`。
4. 当 Web 界面询问时，创建初始用户账户。
5. 添加指向您的漫画的图书馆，例如 `/media/comics` 或 `/share/comics`。

首次启动耗时较长：Komga 是一个 JVM 应用程序，并在首次启动时构建其数据库和搜索索引。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 附加组件配置目录应用的拥有者。默认为 `0` (root)。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地磁盘挂载，例如 `sda1` 或磁盘标签。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许 Legacy SMBv1 协议。 |
| `env_vars` | 传递给 Komga 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

大多数 Komga 设置可以通过 `env_vars` 使用上游命名传递，参见 [Komga 配置选项](https://komga.org/docs/installation/configuration/)。一个常见的例子：

- `JAVA_TOOL_OPTIONS` = `-Xmx1g` — 限制小型机上的 JVM 堆内存。

`SERVER_SERVLET_CONTEXTPATH` 和 `SERVER_PORT` 被附加组件保留：ingress 围绕端口 25600 上的 `/komga` 路径构建，覆盖任一项都会破坏侧边栏面板。

## Ingress 和 URL

Komga 从 `/komga` 子路径提供服务，以便它在 Home Assistant ingress 后面也能正常工作：

- 从 Home Assistant 侧边栏：ingress，无需额外设置
- 直接访问：`http://homeassistant:25600/komga`

客户端 —— OPDS 阅读器、Kobo 同步、Tachiyomi/Mihon、Panels —— 必须使用直接 `http://homeassistant:25600/komga` 地址。Ingess 是基于浏览器会话的，因此这些客户端无法通过它进行认证。


## 数据

Komga 的数据库、日志和搜索索引位于附加组件的 `/config` 文件夹内，该文件夹被 Home Assistant 映射到此附加组件自己的配置目录——`/addon_configs/<repository_id>_komga`，可通过 Filebrowser 附加组件浏览。它们能保存附加组件更新。图书馆仍然放置在您指定的位置，位于 `/media`、`/share` 或挂载的磁盘上。

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
