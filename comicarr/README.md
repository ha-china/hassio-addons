# Home Assistant Plus 插件：Comicarr

具有现代 React 用户界面的自动漫画书和 manga 下载器及图书馆管理软件。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分支，围绕 React 前端和 FastAPI 后端重新构建。你添加系列后，它会监控新版册子的发布，将它们发送到下载客户端，添加标签并将其归档到你的图书馆中。

## 关于

- 追踪漫画系列和 manga，并在有新册子发布时获取它们
- 支持 SABnzbd、NZBGet、blackhole 和 torrent 客户端
- 来自 ComicVine 和 Metron 的元数据，并具备自动标签功能
- 来自现有 Mylar3 安装的一键迁移
- 为第三方阅读器提供 OPDS 源

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 插件。
3. 启动插件，并从侧边栏（入口）打开它，或在端口 `8090` 上访问 `http://homeassistant:8090`。
4. 完成首次设置时的初始配置。
5. 将 Comicarr 的图书馆和下载文件夹指向持久化位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动比平时慢：它会针对冷启动的 SQLite 数据库运行数据库迁移。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于插件配置目录的权限所有者。默认值为 `0`（root）。请在下方注释说明中更改前注意。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地磁盘，例如 `sda1` 或磁盘标签。在驱动器名称后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载到 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许_legacy SMBv1_协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL`（值为 `0`、`1` 或 `2`）是有用的 `env_vars` 条目：它会覆盖每次重启时在设置中选择的日志详细程度。

使用默认的 `PUID`/`PGID` 为 `0` 时，Comicarr 以 root 运行，这正是它写入 Home Assistant 拥有 `/media` 和 `/share` 目录的原因。将 `PUID` 设置为任何其他值会交给上游入口点，其会创建匹配的账户并降权——此时图书馆和下载文件夹必须对该用户可写。将现有安装从 `0` 切换到非特权用户 ID 后，`/config/comicarr` 下已写入的文件仍由 root 拥有；请自行修改属主，否则 Comicarr 在首次写入其配置或数据库时会失败。

Web 界面端口固定为 `8090`。更改 **设置 → 界面 → 端口** 无效：插件在启动时会强制使用 `8090`，因为入口和健康检查都是围绕它构建的。

## 入口和 URL

Comicarr 没有 URL 根设置，因此插件捆绑了一个 nginx 反向代理，它将 HTML、JavaScript 和 CSS 中服务的 `/assets`、`/api` 和 `/cache` 的绝对 URL 重写为入口路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头部，否则面板将显示空白。

值得知道的两个后果：

- 应用客户端路由程序不了解入口前缀。加载后不久会将面板地址重写为 `/`。一切照常运行，因为每个请求的 URL 都被重写为绝对入口路径——但重新加载面板框架本身（而不是从侧边栏重新打开）会显示 Home Assistant 而非 Comicarr。
- 应用中有两处不使用路由器而使用 `window.location` 导航：完成首次设置以及会话在打开仪表板时过期。这两处都会导致面板切换；从侧边栏重新打开 Comicarr 可恢复。

外部客户端（尤其是 OPDS 阅读器）必须直接使用 `http://homeassistant:8090` 的 URL。入口基于浏览器会话，因此这些客户端无法通过它进行身份验证。

请勿在 Comicarr 自身的设置中启用 HTTPS：插件的代理对其使用的是平文的 HTTP（在 `127.0.0.1` 上），启用入口会导致其失效。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓冲区位于插件内的 `/config/comicarr`。Home Assistant 将其映射到此插件自身的配置目录——`/addon_configs/<仓库_id>_comicarr`，可通过 Filebrowser 插件浏览。它们会随插件更新而保留。这与上游的 `./config:/config` Compose 卷布局相同，因此可以像复制那样直接将现有安装复制过来。

漫画和下载文件夹并非存储在此处。请将其指向 `/media`、`/share` 或挂载的磁盘。上游 Docker 映像中使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不是持久化的——请勿使用它们。

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
