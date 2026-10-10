# Home Assistant 插件：Comicarr

一款具有现代 React UI 的自动漫画书和 Manga 下载器及图书馆管理器。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分叉版本，基于 React 前端和 FastAPI 后端重构。你添加系列后，它将自动寻找新刊，将其发送到你的下载客户端，打上标签并将其归档到你的图书馆中。

## 关于

- 跟踪漫画系列和 Manga，并在它们发布时获取新刊
- 与 SABnzbd、NZBGet、blackhole 和 torrent 客户端兼容
- 来自 ComicVine 和 Metron 的元数据，包含自动标签功能
- 从现有的 Mylar3 安装进行一键迁移
- 提供供第三方阅读器使用的 OPDS feeds

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 插件。
3. 启动插件，并从工具栏（ingress）打开，或在端口 `8090` 上访问 `http://homeassistant:8090`。
4. 当 Web 界面提示时，完成首次 setup 设置。
5. 将 Comicarr 的库文件夹和下载文件夹指向持久化位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动时间比普通启动要长：数据库迁移将在冷 SQLite 数据库上运行。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于插件配置目录的所有权。默认为 `0` (root)。在更改之前请查看下方的说明。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地磁盘挂载，例如 `sda1` 或磁盘标签。在驱动器后添加文件夹以只挂载该文件夹，例如 `MYNAS/public` 只挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许旧版 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是一个有用的 `env_vars` 条目：它在每次重启时覆盖 Settings 中选择的对数详细程度。

使用默认的 `PUID`/`PGID` 为 `0` 时，Comicarr 以 root 身份运行，这正是它能够写入 Home Assistant 的根属于自己的 `/media` 和 `/share` 的原因。将 `PUID` 设置为其他值会将启动交给上游条目进程，该进程会创建一个匹配的用户并降级权限——此时库文件夹和下载文件夹必须对该用户可写。将现有设置从 `0` 切换到非特权 uid 时，已写下的文件将仍然是 `root` 所有（位于 `/config/comicarr`）；你需要自己修改 `chown`，否则 Comicarr 在写入其配置或数据库时第一次就会失败。

Web 界面端口固定为 `8090`。更改 **Settings → Interface → port** 将无效：插件在启动时强制使用 `8090`，因为 ingress 和状态检查都是围绕它构建的。

## Ingress 和 URL

Comicarr 没有 url 前缀设置，因此插件捆绑了 nginx 反向代理，将托管的 HTML、JavaScript 和 CSS 中的绝对 `/assets`、`/api` 和 `/cache` URL 重写为 Ingress 路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头，否则面板将是空白的。

值得知道的两个后果：

- 应用的客户端路由不知道 Ingress 前缀。加载后不久，它会将面板的地址重写为 `/`。一切继续正常工作，因为每个请求 URL 都被重写为绝对 Ingress 路径——但重新加载面板帧本身（而不是从工具栏重新打开）会显示 Home Assistant 而不是 Comicarr。
- 应用中有两个地方使用 `window.location` 而不是路由前进：完成首次 setup 设置，以及当仪表板打开时会话过期。两者都会离开面板；从工具栏重新打开 Comicarr 后恢复。

外部客户端——尤其是 OPDS 阅读器——必须使用直接的 `http://homeassistant:8090` URL。Ingress 是基于浏览器会话的，因此这些客户端不能通过它进行身份验证。

不要在 Comicarr 的自身设置中启用 HTTPS：插件的代理在 `127.0.0.1` 上与其使用纯 HTTP 通信，启用 Ingress 将导致失效。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于插件内的 `/config/comicarr`，Home Assistant 将其映射到此插件自身的配置目录——`/addon_configs/<repository_id>_comicarr`，可以通过 Filebrowser 插件浏览。它们能够随插件更新而幸存。这与上游的 `./config:/config` compose 卷布局相同，因此现有的设置可以直接复制。

漫画和下载文件夹**不**存储在那里。请将它们指向 `/media`、`/share` 或挂载的磁盘。上游 Docker 镜像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不是持久化的——不要使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
- [插件仓库 Issue](https://github.com/alexbelgium/hassio-addons/issues)

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
