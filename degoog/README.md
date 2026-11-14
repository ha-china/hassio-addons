# Home Assistant 插件：Degoog

自托管的搜索聚合器：一次查询，从多个搜索引擎获取结果，并支持主题和插件商店。

[Degoog](https://github.com/degoog-org/degoog) 的工作方式类似于 SearXNG：它将您的查询发送给您选择的引擎，并合并它们的结果。引擎、插件、主题和自动补全提供者均可从其内置商店安装。

## 关于

- 一次性合并多个引擎的结果到一个页面中
- 基于 Git 的商店仓库安装引擎、插件、主题和传输器
- 支持 Bangs（快捷方式/捷径）、自动补全以及可选的本地结果索引器
- 可用作浏览器的默认搜索引擎 (OpenSearch)

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Degoog** 插件。
3. 设置 `DEGOOG_SETTINGS_PASSWORDS`（见下文），然后启动插件。
4. 从侧边栏（入口）打开它，或在 `http://homeassistant:4444` 地址访问。
5. 进入 **设置 → 商店** 并安装至少一个搜索引擎：首次安装时没有设置任何引擎，因此执行搜索前不会返回网页结果。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `DEGOOG_SETTINGS_PASSWORDS` | 设置页面和管理页面的密码。可以输入多个密码，用逗号分隔。如果为空，Degoog 将在每次启动时生成一个新的临时密码，并将其打印在插件日志中。 |
| `PUID` / `PGID` | Degoog 运行时的用户及其数据目录的所有者。默认为 `0` (root)。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `env_vars` | 传递给 Degoog 的额外环境变量，例如 `DEGOOG_PUBLIC_INSTANCE` 或 `DEGOOG_I18N`。请参阅 [上游列表](https://degoog-org.github.io/docs/environment-variables.html) 和 [维基](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

插件会自动设置 `DEGOOG_BASE_URL`、`DEGOOG_DATA_DIR`、`DEGOOG_PORT` 和 `DEGOOG_BIND_ADDRESS`，并清空 `DEGOOG_UNIX_SOCKET`，因为入口（ingress）、直接端口和健康检查都围绕这些设置构建。在 `env_vars` 中设置它们不会生效。

## 入口、直接访问和搜索引擎使用

Degoog 在基础路径下提供所有页面。插件将基础路径设置为 Home Assistant 的入口路径，因此入口无需重写，且捆绑的 nginx 将端口 `4444` 映射到相同路径。因此，在端口 `4444` 上打开的页面会显示类似 `http://homeassistant:4444/api/hassio_ingress/<token>/search?q=...` 的地址。这是预期的，短格式也已正常工作。

若要使用 Degoog 作为浏览器的搜索引擎，请使用直接端口而不是 Home Assistant 侧边栏 URL，例如 `http://homeassistant:4444/search?q=%s`。入口 URL 仅在已登录 Home Assistant 会话的环境中有效。

在 nginx 之后，每个客户端对 Degoog 看起来都是 `127.0.0.1`，因此其每 IP 速率限制适用于所有用户。其防爬器陷阱从不阻止私有地址，因此无法锁住你。如果您将插件放置在您自己的反向代理之后并希望实行客户端级别限制，请在 `env_vars` 中添加 `DEGOOG_DISTRUST_PROXY=0`。此时 Degoog 将信任 `X-Forwarded-For` 头，而客户端可以伪造该头，因此仅在端口 `4444` 仅可通过您的代理访问时才执行此操作。

## 数据

设置、安装的扩展和索引数据库位于插件内部的 `/config` 目录中。Home Assistant 将此目录映射到该插件自己的配置目录 `/addon_configs/<repository_id>_degoog`，并且它在插件备份中。这相当于上游的 `./data:/app/data` compose 卷，因此可以直接复制现有的 `data` 文件夹内容。

## 支持

- [Degoog 上游项目](https://github.com/degoog-org/degoog)
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
