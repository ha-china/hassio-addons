# Home Assistant 附加组件：Degoog

自建搜索聚合器：一次查询，来自多个搜索引擎的结果，带有主题和插件商店。

[Degoog](https://github.com/degoog-org/degoog) 的工作原理类似于 SearXNG：它将您的搜索发送到您选择的引擎，并合并它们返回的结果。引擎、插件、主题和自动补全提供者均安装在其内置商店中。

## 关于

- 同时从多个引擎获取结果，合并显示在一个页面上
- 引擎、插件、主题和传输层从基于 git 的商店仓库中安装
- 包含 Bangs、快捷键、自动补全和可选的本地结果索引
- 可作为浏览器的默认搜索引擎使用 (OpenSearch)

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Degoog** 附加组件。
3. 设置 `DEGOOG_SETTINGS_PASSWORDS`（见下文），然后启动附加组件。
4. 从侧边栏（ingress）打开它，或直接访问 `http://homeassistant:4444`。
5. 前往 **设置 → 商店**，并至少安装一个搜索引擎：首次安装时没有配置，因此执行搜索前不会返回任何网页结果，直到您手动安装。

## 配置

| 选项 | 描述 |
|------|------|
| `DEGOOG_SETTINGS_PASSWORDS` | 设置页和管理页的密码。可以指定多个密码，用逗号分隔。如果为空，Degoog 每次启动时都会生成一个新密码，并打印在附加组件日志中。 |
| `PUID` / `PGID` | Degoog 运行所需的用户及其数据目录的所有者。默认为 `0`（root）。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `env_vars` | 传递给 Degoog 的额外环境变量，例如 `DEGOOG_PUBLIC_INSTANCE` 或 `DEGOOG_I18N`。请参阅 [上游列表](https://degoog-org.github.io/docs/environment-variables.html) 和 [wiki](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

附加组件会自动设置 `DEGOOG_BASE_URL`、`DEGOOG_DATA_DIR`、`DEGOOG_PORT` 和 `DEGOOG_BIND_ADDRESS`，并将 `DEGOOG_UNIX_SOCKET` 清空。这是因为 ingresses（直接端口）和健康检查都围绕这些属性构建；在 `env_vars` 中设置它们不会生效。

## Ingress、直接访问和搜索引擎使用

Degoog 服务每个页面的基础路径。附加组件将该基础路径设置为 Home Assistant 的 ingress 路径，因此不需要修改 ingresses，预装的 nginx 也将端口 4444 映射到相同的路径。因此，通过端口 4444 打开的页面会显示类似下面的地址：
`http://homeassistant:4444/api/hassio_ingress/<token>/search?q=...`。这是预期的行为，短形式也能正常工作。

要将 Degoog 用作浏览器的搜索引擎，请使用直接端口，而不是 Home Assistant 侧边栏的 URL，例如 `http://homeassistant:4444/search?q=%s`。Ingress URL 仅在已登录 Home Assistant 会话时有效。

在 nginx 之后，所有客户端在 Degoog 看来都是 `127.0.0.1`，因此其每 IP 速率限制应用于所有用户。其机器人检测机制从不封锁私有地址，因此不会导致您被锁定在外。如果您希望附加组件后面有反向代理，并且需要客户端级别的限制，请在 `env_vars` 中添加 `DEGOOG_DISTRUST_PROXY=0`。Degoog 随后会信任 `X-Forwarded-For` 头，这是客户端可以伪造的，因此仅在端口 4444 仅通过您的代理可访问时才使用此设置。

## 数据

设置、已安装的扩展和索引数据库位于附加组件内的 `/config`。Home Assistant 将其映射到此附加组件自己的配置目录：
`/addon_configs/<repository_id>_degoog`，并且包含在附加组件备份中。它相当于上游的 `./data:/app/data` 组成卷，因此可以原样复制现有 `data` 文件夹的内容。

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
