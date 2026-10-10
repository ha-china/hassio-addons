# Home assistant 附加组件：Guacamole

我在空闲时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、Home Assistant 更改，并在真实硬件上进行测试需要大量时间（以及一些金钱）。我大约使用我超过 110 个附加组件中的 5-10 个，因此我定期安装测试机器（并购买一些我自己不使用的测试服务，如 vpn），以便用于故障排查和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置变得更加容易，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fguacamole%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fguacamole%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fguacamole%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢大家为我仓库点了星星！点击下面的图片来点亮它，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/guacamole/stats.png)

## 关于

[Apache Guacamole](https://guacamole.apache.org/) 是一个无需客户端的远程桌面网关，支持标准协议，如 VNC、RDP 和 SSH。它为用户提供基于 web 的界面来访问远程系统，无需用户在设备上安装任何客户端软件。Guacamole 充当代理，在基于 web 的前端和实际的远程桌面协议之间进行转换。

此附加组件将 Guacamole 服务器 (guacd) 和 web 应用程序组件与用于存储连接配置和用户管理的集成 PostgreSQL 数据库结合。该解决方案提供了一个完整的远程桌面网关，可通过 web 浏览器安全地从任何地方访问计算机和服务器。

此附加组件基于来自 https://github.com/abesnier/docker-guacamole 的 Docker 镜像。

## 配置

Web 界面可以在 `<your-ip>:8080` 或通过侧栏使用入口 (Ingress) 访问。

默认用户名为 `guacadmin`，密码为 `guacadmin`。强烈建议在首次登录后立即更改此密码。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `EXTENSIONS` | str | `auth-totp` | 要启用的 Guacamole 扩展（例如，`auth-totp`，`history-recording-storage`） |
| `recording_search_path` | str | `/config/recordings` | 添加到 `guacamole.properties` 作为 `recording-search-path` 的目录，供历史记录记录存储扩展使用 |
| `login_with_ha_user` | bool | `false` | 通过入口使用您的 Home Assistant 用户名登录，而不是始终使用 `guacadmin`（需要 `auth-header` 扩展） |
| `TZ` | str | | 时区（例如，`Europe/London`） |

### 配置示例

```yaml
EXTENSIONS: "auth-totp,history-recording-storage"
recording_search_path: "/config/recordings"
TZ: "Europe/London"
```

### Home Assistant 单点登录

将 `EXTENSIONS` 设置为 `"auth-header"` 并设置 `login_with_ha_user: true`，然后为每个应具有访问权的 Home Assistant 用户名创建一个 Guacamole 用户。入口将代替始终使用 `guacadmin` 将每个人以其自己的 Home Assistant 用户身份登录。没有匹配 Guacamole 账户的 Home Assistant 用户将显示常规登录表单。

注意事项：

- 该选项通过其默认头 `REMOTE_USER` 喂养 `auth-header` 扩展。如果您之前向 `/config/guacamole.properties` 添加了 `http-auth-header:` 行，请将其移除，否则该扩展将继续读取您在那里命名的头，并且此选项将不起作用。
- 坚持使用纯 ASCII 用户名。重音或拉丁字符之外的字符必须在没有商定编码的情况下穿过 nginx、Tomcat 和 Java，并且它们不一定能匹配 Guacamole 账户。

> [!WARNING]
> **安全风险：带有发布端口的 `auth-header`**。Guacamole 的头认证信任发送 `REMOTE_USER` 头的任何人，而端口 `8080/tcp`（主机端口默认为 `4822`）直接连接到 Guacamole，绕过入口代理。当启用 `auth-header` 时，任何能够到达该端口的人都可以自己发送该头并以任何用户身份登录，包括 `guacadmin`。在这种情况下，附加组件会在启动日志中打印 `SECURITY RISK` 警告。请清除附加组件的网络设置中的端口，并仅使用入口，或移除 `auth-header`。

### 数据库设置

附加组件会自动配置 PostgreSQL 数据库以存储 Guacamole 配置、用户和连接。数据库文件存储在 `/config/postgres` 中，并在首次启动时自动创建。

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有区别。

1. 将我的附加组件库添加到您的 Home Assistant 实例中（在超 supervision 附加组件商店顶部右侧，或如果已配置我的 HA 则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加附加组件库的对话框，其中预填充了特定的repository URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否正常。
1. 进入 web 界面，使用默认凭据 (`guacadmin`/`guacadmin`) 登录。
1. 出于安全原因，立即更改默认密码。
1. 通过 Guacamole web 界面配置您的远程连接。

## 设置

安装后和首次登录：

1. **更改默认密码**：前往设置 → 用户 → guacadmin 并更改密码
2. **创建连接**：使用 web 界面为您的远程系统添加 RDP、VNC 或 SSH 连接
3. **配置扩展**：如果使用 TOTP 认证，请在用户设置中配置它
4. **用户管理**：根据需要将创建其他用户并分配连接权限

## 支持

在 [GitHub][repository] 创建问题

[repository]: https://github.com/alexbelgium/hassio-addons

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
