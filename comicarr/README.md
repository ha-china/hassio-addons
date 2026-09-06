# Home Assistant 插件：Comicarr

拥有现代化 React UI 的自动化漫画书和 Manga 下载管理器及库管理器。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分支，重构为基于 React 前端和 FastAPI 后端。您可以添加丛书，它会监控新章节并自动抓取、将它们发送到您的下载客户端、添加标签并将其归档到您的库中。

## 关于

- 跟踪漫画系列和 Manga，并在新章节发布时抓取新内容
- 支持与 SABnzbd、NZBGet、blackhole 和 torrent 客户端协同工作
- 拥有来自 ComicVine 和 Metron 的元数据，支持自动标签
- 提供从现有 Mylar3 安装的一步迁移
- 为第三方阅读器提供 OPDS 数据源

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 插件。
3. 启动插件并从侧边栏（入口）打开它，或在端口 `8090` 访问 `http://homeassistant:8090`。
4. 当 Web 界面询问时，完成首次启动设置。
5. 将 Comicarr 的库和下载文件夹指向持久化位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动会比平时慢：其数据库迁移正在冷 SQLite 数据库中运行。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于插件配置目录的所有权。默认为 `0`（root）。在变更前请查看下方的说明。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地挂载磁盘，例如 `sda1` 或磁盘标签。 |
| `networkdisks` | 挂载的网络共享（SMB），例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许过时的 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是一个有用的 `env_vars` 条目：它在每次重启时都会覆盖在设置中选择的日志详细程度。

在使用默认的 `PUID`/`PGID`（为 `0`）时，Comicarr 以 root 运行，这使其能够写入 Home Assistant 的 root 拥有的 `/media` 和 `/share` 目录。将 `PUID` 设置为任何其他值时，启动将交给上游入口点，该入口点将创建一个匹配的用户并降低权限——此时库和下载文件夹必须对该用户可写。从一个现有安装中将 `0` 切换到非特权 uid 后，`/config/comicarr` 下已写入的文件仍保留为 root 所有；请自行更改所有者，否则 Comicarr 在首次写入其配置或数据库时可能会失败。

Web 界面的端口固定为 `8090`。更改 **设置 → 界面 → 端口** 无效：插件在启动时强制使用 `8090`，因为入口和健康检查都是围绕它设计的。

## 入口和网址

Comicarr 没有 url-base 设置，因此插件捆绑了一个 nginx 反向代理，该代理重写 HTML、JavaScript 和 CSS 中 served 的绝对 `/assets`、`/api` 和 `/cache` 网址为入口路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头，否则面板将显示空白。

有两个需要知道的后果：

- 应用程序客户端侧路由器不了解入口前缀。加载 Shortly 它将面板地址重写为 `/`。一切继续正常工作，因为每个请求网址都被重写为绝对入口路径——但重新加载面板框架本身（而不是从侧边栏重新打开它）会显示 Home Assistant 而不是 Comicarr。
- 应用程序中有两个地方使用 `window.location` 而非路由器进行导航：完成首次启动设置，以及在仪表板打开期间会话过期。两者都会离开面板；从侧边栏重新打开 Comicarr 后可恢复。

外部客户端（特别是 OPDS 阅读器）必须使用直接 `http://homeassistant:8090` 网址。入口基于浏览器会话，因此这些客户端无法通过它进行身份验证。

请勿在 Comicarr 自身的设置中启用 HTTPS：插件的代理使用纯 HTTP 在 `127.0.0.1` 与其通信，启用 HTTPS 将导致入口停止工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于插件内部的 `/config/comicarr`，Home Assistant 将其映射到此插件自身的配置目录——`/addon_configs/<repository_id>_comicarr`，可通过 Filebrowser 插件浏览。它们在插件更新后依然存在。这与上游 `./config:/config` compose volume 的布局相同，因此现有安装可以原样复制进去。

漫画和下载文件夹**不**存储在那里。请将它们指向 `/media`、`/share` 或通过磁盘挂载。上游 Docker 镜像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不可持续——请勿使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
- [插件仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
