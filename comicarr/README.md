# Home Assistant 附加组件：Comicarr

一个具有现代 React UI 的自动漫画书和 Manga 下载器及图书馆管理员。

[Comicarr](https://comicarr.com) 是围绕 React 前段和 FastAPI 后段重新构建的 Mylar3 的衍生版本。您可以添加系列，它会监控新卷是否发布，将它们发送到您的下载客户端，为其添加标签并将其归档到您的图书馆中。

## 关于

- 跟踪漫画系列和 Manga，并在它们发布时获取新卷
- 适用于 SABnzbd、NZBGet、blackhole 和 torrent 客户端
- 来自 ComicVine 和 Metron 的元数据，支持自动打标签
- 支持从现有的 Mylar3 安装进行一键迁移
- 第三方阅读器可用的 OPDS  feeds

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Comicarr** 附加组件。
3. 启动附加组件并从侧边栏（ingress）打开，或在端口 `8090` 上访问 `http://homeassistant:8090`。
4. 当网页界面要求时，完成首次运行设置。
5. 将 Comicarr 的图书馆和下载文件夹指向持久化位置，例如 `/media/comics` 和 `/share/downloads`。

首次启动比普通情况耗时较长：它会对冷 SQLite 数据库执行数据库迁移。

## 配置

| 选项 | 描述 |
|--------|------------|
| `PUID` / `PGID` | 应用于附加组件配置目录的所有权。默认为 `0` (root)。请在更改前阅读下方的说明。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 本地磁盘挂载点，例如 `sda1` 或磁盘标签。 |
| `networkdisks` | SMB 共享挂载点，例如 `//192.168.1.2/comics`。挂载在 `/mnt` 下。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许过时的 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是一个有用的 `env_vars` 条目：它会在每次重启时覆盖 Settings 中选择的日志详细程度。

在使用默认的 `PUID`/`PGID` 为 `0` 时，Comicarr 以 root 身份运行，这正是它能写入 Home Assistant root 拥有的 `/media` 和 `/share` 目录的原因。将 `PUID` 设置为任何其他值会将启动过程移交至上游入口点，该入口点会创建匹配的用户并降低权限——此时图书馆和下载文件夹必须由该用户可写。将现有安装从 `0` 切换到非特权用户时，已写入 `/config/comicarr` 的文件仍然由 root 拥有；您需要手动更改所有者，否则 Comicarr 在首次写入其配置或数据库时会失败。

网页界面的端口固定为 `8090`。更改 **Settings → Interface → port** 没有任何效果：附加组件在启动时强制使用 `8090`，因为 ingress 和健康检查都是围绕它构建的。

## Ingress 和 URL

Comicarr 没有 url-base 设置，因此附加组件捆绑了一个 nginx 反向代理，该代理将服务 HTML、JavaScript 和 CSS 中的绝对 `/assets`、`/api` 和 `/cache` URL 重写为 ingress 路径，并替换上行端 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头，否则面板会显示空白。

需要了解的两个后果：

- 应用的客户端路由器不知道 ingress 前缀。加载后不久它将面板地址重写为 `/`。一切工作正常，因为每个请求 URL 都被重写为绝对 ingress 路径——但是重新加载面板本身框架（而不是从侧边栏重新打开它）将显示 Home Assistant 而不是 Comicarr。
- 应用中有两个地方使用 `window.location` 而非路由器进行导航：完成首次运行设置，以及仪表盘打开期间会话过期。两者都会离开面板；从侧边栏重新打开 Comicarr 可恢复。

外部客户端——尤其是 OPDS 阅读器——必须使用直接 `http://homeassistant:8090` URL。ingress 是基于浏览器会话的，因此这些客户端无法通过它进行身份验证。

不要在 Comicarr 自身的设置中启用 HTTPS：附加组件的代理以纯 HTTP 形式与它在 `127.0.0.1` 上通信，启用 HTTPS 会导致 ingress 停止工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于附加组件内部的 `/config/comicarr` 目录中，Home Assistant 将其映射到此附加组件自己的配置目录——`/addon_configs/<repository_id>_comicarr`，可用 Filebrowser 附加组件浏览。它们在附加组件更新后依然存在。这与上游的 `./config:/config` compose volume 布局相同，因此可以原样复制现有安装。

Comic 和下载目录**不**存储在那里。请将其指向 `/media`、`/share` 或挂载的磁盘。上游 docker 图像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不是持久化的——请勿使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
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
