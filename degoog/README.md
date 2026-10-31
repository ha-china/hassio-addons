# Home Assistant 附加组件：Degoog

自托管的搜索聚合器：一次查询，多个搜索引擎返回结果，支持主题和插件商店。

[Degoog](https://github.com/degoog-org/degoog) 与 SearXNG 工作原理相似：它将您的查询发送给所选的引擎，并合并它们返回的结果。引擎、插件、主题和自动完成提供者均从其内置商店安装。

## 关于

- 一次查询多个引擎的结果，合并到一个页面
- 引擎、插件、主题和传输层从基于 git 的存储仓库安装
- 支持 Bang（快捷码）、快捷方式、自动完成以及可选的本地结果索引器
- 可作为浏览器的默认搜索引擎（OpenSearch）工作

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Degoog** 附加组件。
3. 设置 `DEGOOG_SETTINGS_PASSWORDS`（见下文），然后启动附加组件。
4. 从侧边栏（入口）打开它，或访问 `http://homeassistant:4444`。
5. 进入 **设置 → 商店** 并至少安装一个搜索引擎：全新安装时没有搜索引擎，因此未配置前搜索不会返回任何网页结果。

## 配置

| 选项 | 描述 |
|--------|-------------|
| `DEGOOG_SETTINGS_PASSWORDS` | 设置和管理页面的密码。可以提供多个密码，用逗号分隔。如果为空，Degoog 每次启动时生成一个新密码并在附加组件日志中打印。 |
| `PUID` / `PGID` | Degoog 运行该用户及其数据目录的所有者。默认为 `0` (root)。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `env_vars` | 传递给 Degoog 的额外环境变量，例如 `DEGOOG_PUBLIC_INSTANCE` 或 `DEGOOG_I18N`。请参阅 [上游列表](https://degoog-org.github.io/docs/environment-variables.html) 和 [Wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

附加组件会自行设置 `DEGOOG_BASE_URL`、`DEGOOG_DATA_DIR`、`DEGOOG_PORT` 和 `DEGOOG_BIND_ADDRESS`，并清空 `DEGOOG_UNIX_SOCKET`，因为入口（ingress）、直接端口和健康检查都是围绕它们构建的：在 `env_vars` 中设置它们无效。

## 入口、直接访问和搜索引擎使用

Degoog 提供基于基本路径的所有页面。附加组件将该基本路径设置为 Home Assistant 的入口路径，因此入口无需重写，内置的 nginx 将 `4444` 端口映射到相同路径。因此，在 `4444` 端口打开的页面会显示类似 `http://homeassistant:4444/api/hassio_ingress/<token>/search?q=...` 的地址。这是预期的，短形式也照常工作。

要将 Degoog 用作浏览器的搜索引擎，请使用直接端口而不是 Home Assistant 侧边栏 URL，例如 `http://homeassistant:4444/search?q=%s`。入口 URL 仅在 Home Assistant 会话登录时有效。

在 nginx 之后，每个客户端对 Degoog 来说都显示为 `127.0.0.1`，因此其基于 IP 的速率限制对所有用户一起应用。其机器人陷阱从未封锁私有地址，因此无法让您被锁定。如果您将附加组件放在自己反向代理之后并希望客户级别限制，请在 `env_vars` 中添加 `DEGOOG_DISTRUST_PROXY=0`。Degoog 将信任 `X-Forwarded-For` 标头（客户端可以伪造它），因此仅在端口 `4444` 仅通过您的代理可达时才执行此操作。

## 数据

设置、已安装的扩展和索引数据库位于附加组件内的 `/config`。Home Assistant 将其映射到此附加组件的配置目录 `/addon_configs/<repository_id>_degoog`，它包含在附加组件备份中。它与上游 `./data:/app/data` compose 卷等效，因此现有 `data` 文件夹的内容可以原样复制。

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
