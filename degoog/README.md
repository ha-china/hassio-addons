# Home Assistant 附加组件：Degoog

自托管搜索结果聚合器：一次查询，获取多个搜索引擎的结果，支持主题和功能模块商店。

[Degoog](https://github.com/degoog-org/degoog) 类似于 SearXNG：它将您的查询发送到您选择的引擎，并合并其返回结果。引擎、功能模块、主题和自动补全提供者均可从其内置商店中安装。

## 关于

- 从多个引擎同时获取结果，合并至同一页面
- 引擎、功能模块、主题和传输层可从基于 Git 的存储仓库中安装
- 支持 Bangs（快捷指令）、自动补全及可选的本地结果索引
- 作为浏览器的默认搜索引擎（OpenSearch）使用

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Degoog** 附加组件。
3. 设置 `DEGOOG_SETTINGS_PASSWORDS`（见下文），然后启动附加组件。
4. 从侧边栏（ingress）打开，或访问 `http://homeassistant:4444`。
5. 进入 **设置为 → 商店**，并至少安装一个搜索引擎：全新安装时没有预设引擎，因此只有手动安装后搜索才会返回网页结果。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `DEGOOG_SETTINGS_PASSWORDS` | 用于设置页面和管理页面的密码。可提供多个密码，以逗号分隔。若为空，Degoog 每次启动时都会生成一个新的单用密码并将其打印在附加组件日志中。 |
| `PUID` / `PGID` | Degoog 运行时的用户及其数据目录的所有者。默认为 `0`（root）。 |
| `TZ` | 时区，如 `Europe/Paris`。 |
| `env_vars` | 传递给 Degoog 的额外环境变量，例如 `DEGOOG_PUBLIC_INSTANCE` 或 `DEGOOG_I18N`。请参阅 [上游列表](https://degoog-org.github.io/docs/environment-variables.html) 和 [Wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

附加组件会自行设置 `DEGOOG_BASE_URL`、`DEGOOG_DATA_DIR`、`DEGOOG_PORT` 和 `DEGOOG_BIND_ADDRESS`，并清空 `DEGOOG_UNIX_SOCKET`，因为 ingess 直接端口和监控检查均依赖于这些设置；在 `env_vars` 中设置它们不会产生影响。

## Ingress、直接访问及搜索引擎使用

Degoog 在基础路径下提供所有页面。附加组件将该基础路径设置为 Home Assistant 的 ingress 路径，因此无需重写，同时捆绑的 nginx 将端口 `4444` 映射到相同路径。结果，在端口 `4444` 上打开的页面显示的地址类似于：
`http://homeassistant:4444/api/hassio_ingress/<token>/search?q=...`。这是预期的行为，简短形式依然有效。

要使用 Degoog 作为浏览器的默认搜索引擎，请使用直接端口而非 Home Assistant 侧边栏 URL，例如 `http://homeassistant:4444/search?q=%s`。Ingress URL 仅限在已登录的 Home Assistant 会话内使用。

在 nginx 之后，对所有客户端，Degoog 看到的 IP 地址均为 `127.0.0.1`，因此其每 IP 限速策略适用于所有用户聚合。其防爬虫机制从未针对私有 IP 地址进行封禁，因此不会导致您被封锁。如果您将该附加组件置于自己的反向代理之后并希望实现客户端级别的限制，请在 `env_vars` 中设置 `DEGOOG_DISTRUST_PROXY=0`。此时 Degoog 将信任 `X-Forwarded-For` 头（该头可由客户端伪造），因此仅在端口 `4444` 仅通过您的代理可访问时才使用此功能。

## 数据

设置、已安装扩展和索引数据库位于附加组件内部的 `/config` 目录。Home Assistant 将其映射到该附加组件自身的配置目录：
`/addon_configs/<repository_id>_degoog`，并且该目录包含在附加组件备份之中。它相当于上游的 `./data:/app/data` compose 卷，因此现有的 `data` 文件夹内容可以原样复制进去。

## 支持

- [Degoog 上游项目](https://github.com/degoog-org/degoog)
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
