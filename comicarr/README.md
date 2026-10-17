# Home Assistant 插件：Comicarr

具有现代 React 用户界面的自动漫画书和漫画下载库管理器。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分支，围绕 React 前端和 FastAPI 后端重新构建。您可以添加系列，它会监控新刊物的发布，将它们发送到下载客户端，添加标签并将它们归档到您的库中。

## 概述

- 跟踪漫画系列和漫画，并在释放新刊物时获取它们
- 与 SABnzbd、NZBGet、blackhole 和 torrent 客户端兼容
- 具有来自 ComicVine 和 Metron 的元数据，支持自动标签
- 支持从现有 Mylar3 安装的一键迁移
- 为第三方阅读器提供 OPDS 内容源

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 插件。
3. 启动插件并从侧边栏（入口点）打开它，或在端口 `8090` 上访问 `http://homeassistant:8090`。
4. 当 Web 界面提示时，完成首次启动设置。
5. 将 Comicarr 的库文件夹和下载文件夹指向持久位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动时间较长：数据库迁移将在冷 SQLite 数据库上运行。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于插件配置目录的所有权。默认为 `0` (根用户)。在修改之前，请参阅下方的注释。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地磁盘挂载，例如 `sda1` 或磁盘标签。驱动器后添加一个文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载到 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许 Legacy 的 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [Wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`、`1` 或 `2`) 是 `env_vars` 中有用的条目：它会覆盖每次重启时在设置中选择的日志详细程度。

使用默认的 `PUID`/`PGID` 为 `0`，Comicarr 以 root 用户运行，这使它能够写入 Home Assistant 的属于 root 用户的 `/media` 和 `/share` 目录。将 `PUID` 设置为其他值会将启动任务交给上游入口脚本，该脚本创建相应的用户并降低权限——此时库文件夹和下载文件夹必须由该用户可写。将现有安装从 `0` 切换到非特权用户 ID 也会使已写入 `/config/comicarr` 的文件仍属于 root；您需要手动更改所有者，否则 Comicarr 在写入配置或数据库时会失败。

Web 界面端口固定为 `8090`。更改 **设置 → 界面 → 端口** 无效：插件在启动时强制使用 `8090`，因为入口点和健康检查都是基于此构建的。

## 入口点和 URL

Comicarr 没有 URL 基础设置，因此插件捆绑了一个 nginx 反向代理，它将服务 HTML、JavaScript 和 CSS 中的绝对 `/assets`、`/api` 和 `/cache` URL 重写到入口点路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头部，否则面板将显示为空。

以下是两点需要注意的后果：

- 应用的客户端路由 unaware（不知晓）入口点前缀。加载后不久，它将面板地址重写为 `/`。一切继续正常工作，因为每个请求 URL 都被重写为绝对入口点路径——但如果重新加载面板框架（而不是从侧边栏重新打开它），则显示 Home Assistant 而不是 Comicarr。
- 应用中有两处使用 `window.location` 而非路由器进行导航：完成首次启动设置，以及仪表板打开时会话过期。这两处都会离开面板；从侧边栏重新打开 Comicarr 可以恢复。

外部客户端——特别是 OPDS 阅读器——必须使用直接 `http://homeassistant:6090` URL。（注：原文为 8090）入口点是基于浏览器会话的，因此这些客户端无法通过它进行身份验证。

不要在 Comicarr 自身的设置中启用 HTTPS：插件的反向代理会在 `127.0.0.1` 上使用明文 HTTP 与其通信，如果启用 HTTPS，入口点将无法工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于插件内部的 `/config/comicarr` 目录中，该目录由 Home Assistant 映射到此插件的自身配置目录——`/addon_configs/<repository_id>_comicarr`，可以通过 Filebrowser 插件浏览。它们在插件更新时得以保留。这与上游的 `./config:/config` compose volume 布局相同，因此现有安装可以原样复制进去。

漫画书和下载文件夹**不**存放在那里。请将它们指向 `/media`、`/share` 或已挂载的磁盘。上游 docker 镜像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不是持久化的——请勿使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
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
