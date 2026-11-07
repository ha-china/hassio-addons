# Home Assistant 插件：Comicarr

具有现代 React 界面的自动化漫画书和漫画杂志下载器及图书馆管理器。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分支，采用了 React 前端和 FastAPI 后端。您可以添加系列，它会监视新期，将其发送到您的下载客户端，打标签并将它们储存在您的库中。

## 关于

- 跟踪漫画系列和漫画杂志，并在它们发布时获取新期
- 与 SABnzbd、NZBGet、blackhole 和 torrent 客户端配合使用
- 来自 ComicVine 和 Metron 的元数据，并自动打标签
- 从现有的 Mylar3 安装进行一键迁移
- 供第三方读取器使用的 OPDS  feed

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 插件。
3. 启动插件并从侧面栏（ingress）打开它，或在端口 `8090` 上访问 `http://homeassistant:8090`。
4. 当网页界面提示时，完成首次设置。
5. 将 Comicarr 的库和下载文件夹指向持久位置，例如 `/media/comics` 和 `/share/downloads`。

第一次启动会比平时慢：数据库迁移将在冷 SQLite 数据库上运行。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于插件配置目录的所有权。默认为 `0`（root）。请参阅下方说明，在更改前阅读。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地磁盘，例如 `sda1` 或磁盘标签。在驱动器后添加文件夹以仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，位于 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的插件版本。 |
| `networkdisks` | 挂载的 SMB 共享，例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许旧版 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是一个有用的 `env_vars` 条目：它每次启动时都会覆盖在设置中选择的日志详细程度。

使用默认的 `PUID`/`PGID` 为 `0` 时，Comicarr 以 root 身份运行，这使其能够写入 Home Assistant 的 root 拥有的 `/media` 和 `/share`。将 `PUID` 设置为您希望的任何其他值会将启动委托给上游入口点，它会创建匹配的用户并降级权限——此时库和下载文件夹必须对该用户可写。将现有安装从 `0` 切换为无 privileges 的 uid，也会使 `/config/comicarr` 下已写入的文件仍然属于 root；您需要手动将它们所有权更改，否则 Comicarr 在首次写入其配置或数据库时会失败。

网页界面的端口固定为 `8090`。更改 **设置 → 界面 → 端口** 无效：插件在启动时强制为 `8090`，因为 ingress 和健康检查都是基于它构建的。

## Ingress 和 URL

Comicarr 没有 url-base 设置，因此插件捆绑了 nginx 反向代理，该代理会在提供的 HTML、JavaScript 和 CSS 中重写绝对 `/assets`、`/api` 和 `/cache` url 到 Ingress 路径，并将上游 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` header 替换为这些，否则面板将留空。

需要知道的两个后果：

- 应用的客户端路由器不知道 Ingress 前缀。负载后不久，它将面板地址重写为 `/`。一切继续正常工作，因为每个请求 url 都会被重写为绝对 Ingress 路径——但重新加载面板框架本身（而不是从侧面栏重新打开它）会显示 Home Assistant 而不是 Comicarr。
- 应用的两个地方使用 `window.location` 而不是路由器进行导航：完成首次设置，以及在仪表板打开时会话过期。两者都会离开面板；从侧面栏重新打开 Comicarr 即可恢复。

外部客户端——特别是 OPDS 读取器——必须使用直接 `http://homeassistant:8090` url。Ingress 基于浏览器会话，因此这些客户端无法通过它进行身份验证。

不要在 Comicarr 的设置中启用 HTTPS：插件的代理在 `127.0.0.1` 上使用普通 HTTP 与它通信，并且 Ingress 将停止工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于插件内部的 `/config/comicarr`，Home Assistant 将其映射到此插件的配置目录——`/addon_configs/<repository_id>_comicarr`，可以通过 Filebrowser 插件浏览。它们能幸存插件更新。这是上游 `./config:/config` compose volume 的相同布局，因此现有安装可以直接复制进去。

漫画书和下载文件夹**不**存储在那里。将它们指向 `/media`、`/share` 或挂载的磁盘。上游 docker 图像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不持久化——不要使用它们。

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
