# Home Assistant 附加组件：Comicarr

一款具有现代 React 界面的自动漫画和视频下载及图书管理工具。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分支项目，重构了 React 前端和 FastAPI 后端。您可以添加系列，它将监控新 выпуски（新卷），将其发送到您的下载客户端，添加标签并将文件归档到您的图书馆。

## 关于

- 跟踪漫画系列和漫画，并在发布新卷时获取它们
- 支持 SABnzbd、NZBGet、Hailium torrent 等下载客户端
- 来自 ComicVine 和 Metron 的元数据，支持自动标记
- 支持从现有的 Mylar3 安装进行一键迁移
- 提供供第三方阅读器使用的 OPDS 流

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 附加组件。
3. 启动附加组件，并从侧边栏（网关）打开，或在端口 `8090` 上访问 `http://homeassistant:8090`。
4. 完成首次运行时 веб 界面要求的设置。
5. 将 Comicarr 的库和下载文件夹指向持久化位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动比以往更耗时：数据库迁移将在冷 SQLite 数据库中运行。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于附加组件配置目录的所有权。默认为 `0`（root）。在更改此选项之前，请参阅下方的说明。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地挂载磁盘，例如 `sda1` 或磁盘标签。在驱动器后添加一个文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 以后发布的附加组件版本。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许 legacy SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。请参阅 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是一个有用的 `env_vars` 项：它在每次重启时覆盖设置了日志详细程度的设置。

使用默认的 `PUID`/`PGID` 为 `0`，Comicarr 以 root 身份运行，这正是它能向 Home Assistant 的根拥有的 `/media` 和 `/share` 写文件的原因。将 `PUID` 设置为任何其他值会将启动交给上游启动脚本，它会创建匹配的用户并降低权限——此时库和下载文件夹必须由该用户可写。将现有安装从 `0` 切换到无特权 uid 后，在 `/config/comicarr` 下已写入的文件仍然由 root 拥有；请使用 chown 自行更改所有权，否则 Comicarr 在首次写入其配置或数据库时会失败。

网页界面的端口固定为 `8090`。更改 **设置 → 界面 → 端口** 没有效果：附加组件会在启动时强制使用 `8090`，因为网关和健康检查都是基于它构建的。

## 网关和 URL

Comicarr 没有 URL 基础设置，因此附加组件捆绑了一个 nginx 反向代理，它会重写服务 HTML、JavaScript 和 CSS 中的绝对 `/assets`、`/api` 和 `/cache` url 到网关路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` HTTP 头部，否则面板将显示空白。

值得注意的两个后果：

- 应用程序的客户端路由器不知道网关前缀。加载后不久，它会重写面板的地址为 `/`。一切继续正常工作，因为每个请求 URL 都被重写为绝对的网关路径——但重新加载面板框（而不是从侧边栏重新打开它）会显示 Home Assistant 而不是 Comicarr。
- 应用程序中的两个地方使用 `window.location` 而不是路由器进行导航：完成首次运行时设置，和dashboard打开时会话过期。两者都会离开面板；从侧边栏重新打开 Comicarr 可以恢复。

外部客户端——特别是 OPDS 阅读器——必须使用直接 `http://homeassistant:8090` url。网关基于浏览器会话，因此这些客户端无法通过它进行身份验证。

不要在 Comicarr 自己的设置中启用 HTTPS：附加组件的代理对其使用简单的 HTTP 通信在 `127.0.0.1`，启用 HTTPS 会阻止网关工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于附加组件内的 `/config/comicarr`，Home Assistant 将其映射到此附加组件的配置目录——`/addon_configs/<repository_id>_comicarr`，使用 Filebrowser 附加组件可浏览。它们在附加组件更新后依然存在。这与上游的 `./config:/config` docker 卷布局相同，因此现有的安装可以原样复制进去。

漫画和下载文件夹不会存储在此处。将它们的文件路径指向 `/media`、`/share` 或已挂载的磁盘。上游 docker 镜像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不是持久化的——请勿使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
- [附加组件仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
