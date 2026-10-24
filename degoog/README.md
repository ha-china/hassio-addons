# Home Assistant 插件：Degoog

自托管搜索聚合器：一次查询，获取多个搜索引擎的结果，带有主题和插件商店。

[Degoog](https://github.com/degoog-org/degoog) 像 SearXNG 一样工作：它将您的查询发送到您选择的引擎，并合并它们返回的结果。引擎、插件、主题和自动补全提供者均安装在其内置商店中。

## 关于

- 一次获取多个引擎的结果并合并到一页中
- 从基于 Git 的商店仓库安装引擎、插件、主题和传输协议
- 支持 Bang、快捷方式、自动补全以及可选的本地结果索引
- 作为浏览器的默认搜索引擎使用（OpenSearch）

## 安装

1. 将此仓库添加到 Home Assistant。
2. 安装 **Degoog** 插件。
3. 设置 `DEGOOG_SETTINGS_PASSWORDS`（见下文），然后启动插件。
4. 从侧边栏（ingress）或访问 `http://homeassistant:4444` 打开它。
5. 进入 **设置 → 商店**，至少安装一个搜索引擎：新安装时没有任何搜索引擎，因此直到您手动安装之前，搜索将不会返回任何网页结果。

## 配置

| 选项 | 描述 |
|------|------|
| `DEGOOG_SETTINGS_PASSWORDS` | 设置页面和管理页面的密码。可以提供一个或多个密码，用逗号分隔。如果为空，Degoog 每次启动时都会生成一个新的临时代码并打印到头日志中。 |
| `PUID` / `PGID` | Degoog 运行的用户及其数据目录的所有者。默认为 `0`（root）。 |
| `TZ` | 时区，例如 `Europe/Paris`。 |
| `env_vars` | 传递给 Degoog 的额外环境变量，例如 `DEGOOG_PUBLIC_INSTANCE` 或 `DEGOOG_I18N`。请参阅 [上游列表](https://degoog-org.github.io/docs/environment-variables.html) 和 [维基](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。 |

插件会自动设置 `DEGOOG_BASE_URL`、`DEGOOG_DATA_DIR`、`DEGOOG_PORT` 和 `DEGOOG_BIND_ADDRESS`，并清除 `DEGOOG_UNIX_SOCKET`，因为 ingresses、直接端口和健康检查都是围绕它们构建的：在 `env_vars` 中设置它们将无效。

## Ingress、直接访问和搜索引擎使用

Degoog 在基础路径下提供每一页。插件将基础路径设置为 Home Assistant 的 ingress 路径，因此 ingresses 不需要重写，且捆绑的 nginx 将端口 `4444` 映射到同一路径。因此，在端口 `4444` 上打开的页面会显示类似 `http://homeassistant:4444/api/hassio_ingress/<token>/search?q=...` 的地址。这是预期的，短形式也能正常工作。

要将 Degoog 用作浏览器的搜索引擎，请直接使用直接端口，而不是 Home Assistant 侧边栏 URL，例如 `http://homeassistant:4444/search?q=%s`。只有已登录 Home Assistant 会话时 ingresses URL 才有效。

在 nginx 之后，每个客户端对 Degoog 都表现为 `127.0.0.1`，因此其每 IP 速率限制适用于所有用户。其机器人检测永远不会封禁私人地址，因此这不会锁定您。如果您将插件放在自己的反向代理之后并希望实现每客户端限制，请在 `env_vars` 中添加 `DEGOOG_DISTRUST_PROXY=0`。然后 Degoog 会信任 `X-Forwarded-For` 标头，该标头可以被客户端伪造，因此仅在端口 `4444` 仅通过您的代理可访问时才使用此功能。

## 数据

设置、已安装的扩展和索引数据库位于插件内部的 `/config` 目录中。Home Assistant 将其映射到此插件自己的配置目录 `/addon_configs/<repository_id>_degoog`，并且它包含在插件备份中。它与上游的 `./data:/app/data` compose 卷等效，因此现有的 `data` 文件夹的内容可以原样复制进去。

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
