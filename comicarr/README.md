# Home Assistant 插件：Comicarr

带有现代化 React UI 的自动漫画和漫画书下载器及图书馆管理器。

[Comicarr](https://comicarr.com) 是 Mylar3 的一个分支，基于 React 前端和 FastAPI 后端重建。你可以添加系列，它会监视新刊物的出现，将它们发送到下载客户端，添加标签并将它们分类到你的图书馆中。

## 关于

- 跟踪漫画系列和漫画，并在新刊发布时抓取新内容
- 支持 SABnzbd、NZBGet、blackhole 和迅雷客户端
- 包含来自 ComicVine 和 Metron 的元数据，并自动打标签
- 支持从现有的 Mylar3 安装进行一键迁移
- 为第三方阅读器提供 OPDS  feed

## 安装

1. 将本库添加到 Home Assistant。
2. 安装 **Comicarr** 插件。
3. 启动插件并从侧边栏（ingress）打开它，或在端口 `8090` 的 `http://homeassistant:8090` 访问。
4. 当网页界面询问时，完成首次运行设置。
5. 将 Comicarr 的库和下载文件夹指向一个持久化位置（例如 `/media/comics` 和 `/share/downloads`）。

首次启动比通常要慢：它正在对冷 SQLite 数据库运行数据库迁移。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `PUID` / `PGID` | 应用于插件配置目录的所有权。默认为 `0`（root）。在更改之前请参阅下面的备注。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `localdisks` | 要挂载的本地磁盘，例如 `sda1` 或磁盘标签。 |
| `networkdisks` | 要挂载的 SMB 共享，例如 `//192.168.1.2/comics`。在 `/mnt` 下挂载。 |
| `cifsusername` / `cifspassword` / `cifsdomain` | SMB 共享的凭据。 |
| `smbv1` | 允许遗留的 SMBv1 协议。 |
| `env_vars` | 传递给 Comicarr 的额外环境变量。参见 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

`COMICARR_LOG_LEVEL` (`0`, `1` 或 `2`) 是一个有用的 `env_vars` 条目：它在每次重启时覆盖 Settings 中选择的日志详细程度。

使用默认的 `PUID`/`PGID` 为 `0` 时，Comicarr 以 root 身份运行，这使其能够写入 Home Assistant 的 root 拥有的 `/media` 和 `/share`。将 `PUID` 设置为任何其他值会将启动权交给上游入口点，该入口点创建一个匹配的用户的并降低权限——此时库和下载文件夹必须对该用户可写。将现有安装从 `0` 切换到非特权 uid 也会使 `/config/comicarr` 下已写的文件仍归 root 所有；请手动修改它们，否则 Comicarr 在首次写入其配置或数据库时会失败。

网页界面端口的固定值为 `8090`。更改 **Settings → Interface → port** 无效：插件在启动时强制为 `8090`，因为 ingress 和健全性检查都是基于它构建的。

## Ingress 和 URL

Comicarr 没有 url-base 设置，因此插件捆绑了一个 nginx 反向代理，该代理重写 HTML、JavaScript 和 CSS 中被服务的绝对 `/assets`、`/api` 和 `/cache` URL 为 ingress 路径，并替换上游的 `X-Frame-Options: DENY` 和 `frame-ancestors 'none'` 头，否则面板会空白。

值得注意的是两个后果：

- 应用的客户端路由不知道ingress 前缀。它在加载后不久将面板地址重写为 `/`。所有内容都能正常工作，因为每个请求 URL 都被重写到绝对 ingress 路径——但是，重新加载面板框架本身（而不是从侧边栏重新打开它）会显示 Home Assistant 而不是 Comicarr。
- 两处地方在应用中通过 `window.location` 而不是路由进行导航：完成首次运行设置，以及仪表盘打开时会话过期。两者都会离开面板；从侧边栏重新打开 Comicarr 可恢复。

外部客户端——特别是 OPDS 阅读器——必须使用直接的 `http://homeassistant:8090` 地址。ingress 是基于浏览器会话的，因此这些客户端无法通过它进行身份验证。

不要在 Comicarr 自身的设置中启用 HTTPS：插件的代理使用普通 HTTP 在 `127.0.0.1` 与其通信，这将阻止 ingress 工作。

## 数据

Comicarr 的 `config.ini`、数据库、日志和封面缓存位于插件内的 `/config/comicarr`，Home Assistant 将其映射到此插件自身的配置目录——`/addon_configs/<repository_id>_comicarr`，可通过 Filebrowser 插件浏览。它们在插件更新后仍然存在。这与上游的 `./config:/config` 组合卷布局相同，因此现有安装可以照抄。

漫画和下载文件夹**存储于此**。将它们指向 `/media`、`/share` 或挂载的磁盘。上游 docker 图像使用的 `/comics`、`/manga` 和 `/downloads` 路径在 Home Assistant 中不可持久化——请勿使用它们。

## 支持

- [Comicarr 上游项目](https://github.com/frankieramirez/comicarr)
- [插件存储库问题](https://github.com/alexbelgium/hassio-addons/issues)

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
