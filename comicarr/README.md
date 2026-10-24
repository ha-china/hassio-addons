# Home Assistant 附加功能：Comicarr

具有现代化 React UI 的自动化漫画书和小说集下载器及图书馆管理器。

[Comicarr](https://comicarr.com) 是 Mylar3 的衍生版本，基于 React 前端和 FastAPI 后台 rebuilt。您可以添加系列，系统会监控新期数，将它们发送到下载客户端，进行标记并归类到您的图书馆中。

## 关于

- 追踪漫画系列和小说集，并在它们发布时获取新期数
- 与 SABnzbd、NZBGet、blackhole 以及 torrent 客户端兼容
- 包含来自 ComicVine 和 Metron 的元数据，并支持自动标记
- 提供单命令迁移现有 Mylar3 安装的功能
- 支持供第三方阅读器使用的 OPDS  feeds

## 安装

1. 将此仓库添加到 Home Assistant 中。
2. 安装 **Comicarr** 附加功能组件。
3. 启动附加功能模块，并从侧边栏（入口）打开它，或在地址 `http://homeassistant:8090` 的 `8090` 端口上打开。
4. 当网页界面请求时，完成首次运行设置。
5. 将 Comicarr 的图书库和下载文件夹指向持久的位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动的时间比平时要长：数据库迁移正在冷 SQLite 数据库上运行。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于附加功能配置目录的所有权。默认为 `0` (root)。请在修改它之前查看下面的说明。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 要挂载的本地磁盘，例如 `sda1` 或磁盘标签。在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要附加功能组件版本在 2026-09-19 之后发布。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的身份验证凭据。 |
| `smbv1` | 允许过时的 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [Wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是一个有用的 `env_vars` 条目：它在每次重启时覆盖设置中选择的日志级别。

使用默认的 `PUID`/`PGID` 为 `0` 时，Comicarr 以 root 身份运行，这正是它能够写入 Home Assistant 的 root 所有 `/media` 和 `/share` 目录的原因。将 `PUID` 设置为任何其他值会交由上游启动入口点处理，该入口点会创建一个对应的用户并降低权限——然后图书库和下载文件夹必须可由该用户写入。将现有安装从 `0` 切换到非特权用户 ID 也会使 `/config/comicarr` 下已写入的文件仍然由 root 拥有；您需要手动更改所有者，否则 Comicarr 在首次写入其配置或数据库时会失败。

网页接口端口固定为 `8090`。更改 **设置 → 接口 → 端口** 无效：附加功能模块在启动时强制使用 `8090`，因为入口和健康检查都是基于它构建的。

## 入口 (Ingress) 和 URL

Comicarr 没有 URL 基础设置，因此附加功能模块捆绑了一个 nginx 反向代理，它会将服务的 HTML、JavaScript 和 CSS 中的绝对 `/assets`、`/api` 和 `/cache` 路径重写到入口路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头，否则面板会显示空白。

需要知道的两点后果：

- 客户端路由不知道入口前缀。加载后不久它会重写面板地址为 `/`。一切照常工作，因为每个请求 URL 都会被重写为绝对的入口路径——但如果是重新加载面板窗口（而不是从侧边栏重新打开它），则会显示 Home Assistant 而不是 Comicarr。
- 应用程序中有两个地方使用 `window.location` 而非路由器进行导航：完成首次运行设置，以及仪表盘打开期间会话过期。这两种情况都会导致面板空白；从侧边栏重新打开 Comicarr 即可恢复。

外部客户端（尤其是 OPDS 阅读器）必须使用直接 `http://homeassistant:8090` URL。入口是浏览器会话级别的，因此这些客户端无法通过入口进行身份验证。

不要在 Comicarr 的自身设置中启用 HTTPS：附加功能的代理使用纯 HTTP 在 `127.0.0.1` 与其通信，如果启用入口则会停止工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于附加功能模块内部的 `/config/comicarr` 目录中，该目录被 Home Assistant 映射到附加功能模块自身的配置目录——`/addon_configs/<repository_id>_comicarr`，可以通过文件浏览（Filebrowser）附加功能模块查看。它们在附加功能模块更新后仍然存在。这与上游的 `./config:/config`  compose 卷布局相同，因此现有的安装可以直接复制进来。

漫画书和下载文件夹**不**存储在此处。请将其指向 `/media`、`/share` 或已挂载的磁盘。上游 docker 镜像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不持久保存——请勿使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
- [附加功能模块仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
