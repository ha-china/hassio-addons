# Home Assistant 补充包：Comicarr

一个现代化的 React UI 自动漫画书和漫画（Manga）下载器及图书馆管理器。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分支，基于 React 前端和 FastAPI 后端重新构建。你添加系列，它便会监听新期数的发布，将它们发送给下载客户端，打上标签并将其归档到你的图书馆中。

## 关于

- 追踪漫画和漫画系列，并在新期数发布时获取
- 支持 SABnzbd、NZBGet、blackhole 和 Torrent 客户端
- 来自 ComicVine 和 Metron 的元数据，以及自动打标签
- 从现有的 Mylar3 安装进行一键迁移
- 为第三方阅读器提供 OPDS Feed

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 补充包。
3. 启动补充包，并从边栏（Ingress）打开它，或在端口 `8090` 上访问 `http://homeassistant:8090`。
4. 当 Web 界面要求时，完成首次设置。
5. 将 Comicarr 的图书和下载文件夹指向持久化位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动比通常所需的时间更长：数据库迁移将在冷启动的 SQLite 数据库上运行。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于补充包配置目录的所有权。默认为 `0` (root)。在更改前请参阅下面的注释。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地挂载的磁盘，例如 `sda1` 或磁盘标签。在驱动器后添加一个文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要补充包版本在 2026-09-19 之后发布。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载到 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许旧版 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的附加环境变量。请参阅 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是有用的 `env_vars` 条目：它会在每次重启时覆盖在设置中选择的日志详细程度。

使用默认的 `PUID`/`PGID` 为 `0` 时，Comicarr 以 root 身份运行，这使得它能够写入 Home Assistant 在 root 拥有的 `/media` 和 `/share`。将 `PUID` 设置为任何其他值会将启动交给上游启动脚本，它会创建一个匹配的用户并降低权限——这样图书和下载文件夹就必须对该用户可写。将现有安装从 `0` 切换到无特权用户 UID 后，已写入 `/config/comicarr` 的文件仍属于 root；你需要自己更改所有权，否则 Comicarr 在首次写入其配置或数据库时会失败。

Web 界面端口固定为 `8090`。更改 **设置 → 界面 → 端口** 没有任何效果：补充包在启动时强制使用 `8090`，因为 Ingress 和状态检查都是围绕它构建的。

## Ingress 和 URL

Comicarr 没有 URL Base 设置，因此补充包捆绑了一个 nginx 反向代理，它将 HTML、JavaScript 和 CSS 中服务的绝对 `/assets`、`/api` 和 `/cache` URL 重写为Ingress路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头，否则面板将保持空白。

两件事值得知道：

- 客户端路由不知道 Ingress 前缀。它在加载后不久将面板地址重写为 `/`。一切继续运作，因为每个请求 URL 都被重写到绝对 Ingress 路径——但重新加载面板本身（而不是从边栏重新打开它）会显示 Home Assistant 而不是 Comicarr。
- 应用程序中有两个位置使用 `window.location` 而非路由进行导航：完成首次设置以及面板打开时会话过期。两者都会将面板移出；从边栏重新打开 Comicarr 后恢复正常。

外部客户端——特别是 OPDS 阅读器——必须直接使用 `http://homeassistant:8090` 链接。Ingress 是基于浏览器会话的，因此这些客户端无法通过它进行身份验证。

不要在 Comicarr 自己的设置中启用 HTTPS：补充包的代理以纯 HTTP 在 `127.0.0.1` 与其通信，这会导致 Ingress 无法工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于补充包内的 `/config/comicarr` 中，Home Assistant 将其映射到该补充包的配置目录——`/addon_configs/<repository_id>_comicarr`，可通过 Filebrowser 补充包浏览。这些内容在补充包更新后依然存在。这是上游 `./config:/config` compose 卷的相同布局，因此现有的安装可以原样复制进去。

漫画和下载文件夹**不**存储在那里。将它们指向 `/media`、`/share` 或挂载的磁盘。上游 docker 镜像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不是持久化的——不要使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
- [补充包仓库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
