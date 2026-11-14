## &#9888; 待处理问题：[🐛 [LINKWARDEN] 永远不要使用 STORAGE_FOLDER (创建于 2025-10-11)](https://github.com/alexbelgium/hassio-addons/issues/2137) 由 [@guimex22](https://github.com/guimex22) 提出

# Home Assistant 附加组件：Linkwarden

我在空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改，并在真实硬件上进行测试花费了大量时间（以及一些费用）。我使用我超过 110 个附加组件中的约 5-10 个，因此我定期安装测试机器（并购买一些我自己不使用的测试服务，如 vpn）来排查问题并改进附加组件

如果这个附加组件能为您节省时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flinkwarden%2Fconfig.yaml)
![Ingress (入口)](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flinkwarden%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flinkwarden%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的朋友们！要星标它，点击下方图片，之后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/linkwarden/stats.png)

## 关于

[Linkwarden](https://linkwarden.app/) 是一个协作书签管理器，用于收集、整理和保存网页及文章。它允许团队和个人保存、分类和管理书签，具备标签、集合和全文搜索功能。

此附加组件基于 [官方 Linkwarden Docker 镜像](https://github.com/linkwarden/linkwarden)。

## 配置

Web UI 可在 `<your-ip>:3000` 或通过侧边栏的 Ingress 访问。
启动时需要创建一个新的用户账户。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `NEXTAUTH_SECRET` | str | **必需** | NextAuth.js 身份验证的密钥（必须在启动时填写） |
| `NEXTAUTH_URL` | str | | 自定义 NextAuth URL（可选，仅当 Linkwarden 作为外部服务运行时） |
| `NEXT_PUBLIC_DISABLE_REGISTRATION` | bool | `false` | 禁用新用户注册 |
| `NEXT_PUBLIC_CREDENTIALS_ENABLED` | bool | `true` | 启用用户名/密码登录 |
| `STORAGE_FOLDER` | str | `/config/library` | 存储数据文件的目录 |
| `DATABASE_URL` | str | | 外部 PostgreSQL 数据库 URL（留空以使用内部数据库） |
| `NEXT_PUBLIC_AUTHENTIK_ENABLED` | bool | `false` | 启用 Authentik SSO 集成 |
| `AUTHENTIK_CUSTOM_NAME` | str | `Authentik` | Authentik 按钮的自定义提供商名称 |
| `AUTHENTIK_ISSUER` | str | | Authentik OpenID 配置颁发者 URL |
| `AUTHENTIK_CLIENT_ID` | str | | 来自 Authentik 提供商概览的客户端 ID |
| `AUTHENTIK_CLIENT_SECRET` | str | | 来自 Authentik 提供商概览的客户端密钥 |
| `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` | str | | AI 功能使用的 Ollama 端点 URL |
| `OLLAMA_MODEL` | str | | AI 处理使用的 Ollama 模型名称 |

### 示例配置

```yaml
NEXTAUTH_SECRET: "your-very-long-secret-key-here-at-least-32-characters"
NEXT_PUBLIC_DISABLE_REGISTRATION: false
NEXT_PUBLIC_CREDENTIALS_ENABLED: true
STORAGE_FOLDER: "/config/library"
DATABASE_URL: "postgresql://postgres:homeassistant@localhost:5432/linkwarden"
NEXT_PUBLIC_AUTHENTIK_ENABLED: false
AUTHENTIK_CUSTOM_NAME: "My Authentik"
AUTHENTIK_ISSUER: "https://authentik.my-domain.com/application/o/linkwarden"
AUTHENTIK_CLIENT_ID: "your-client-id"
AUTHENTIK_CLIENT_SECRET: "your-client-secret"
```

### 设置步骤

1. **首次设置**：启动附加组件后，访问 Web 界面并创建您的第一个用户账户
2. `NEXTAUTH_SECRET`：为 `NEXTAUTH_SECRET` 选项生成一个安全的随机字符串（至少 32 个字符）
3. **数据库**：默认情况下，Linkwarden 使用内部 SQLite 数据库。对于生产环境，建议配置 PostgreSQL
4. **身份验证**：如果您需要 SSO 功能，请配置 Authentik 集成
5. **存储**：书签数据和文件存储在配置的 `STORAGE_FOLDER` 中

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称不区分大小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### Authentik 集成

要集成 Authentik 以实现单点登录（SSO）：

1. 按照 [Linkwarden 文档](https://docs.linkwarden.app/self-hosting/sso-oauth#authentik) 中的说明进行操作
2. 将 `NEXT_PUBLIC_AUTHENTIK_ENABLED` 设置为 `true`
3. 使用来自您的 Authentik 提供商概览的值配置专用的 Authentik 选项
4. 注意：从 `AUTHENTIK_ISSUER` URL 中删除末尾的 "/"

### 其他配置

对于高级配置选项，请参阅 [Linkwarden 文档](https://docs.linkwarden.app/self-hosting/environment-variables) 中的环境变量完整列表。

## 安装

安装此附加组件非常简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我 Hass.io 附加组件仓库 [Add my Hass.io add-ons repository][repository] 添加到您的 Hass.io 实例。 [![在 Home Assistant 中添加仓库][repository-badge]][repository-url]
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将 `NEXTAUTH_SECRET` 选项设置为安全的随机字符串。
1. 根据需要配置其他选项。
1. 启动附加组件。
1. 检查附加组件的日志，以确认一切正常。
1. 打开 Web UI 并创建您的第一个用户账户。

## 支持

在 GitHub 上创建问题，或询问 [Home Assistant 论坛线程](https://community.home-assistant.io/t/home-assistant-addon-linkwarden/279247)。

[repository]: https://github.com/alexbelgium/hassio-addons
[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons

---

![插图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/linkwarden/illustration.png)

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
