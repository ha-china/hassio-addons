## ¨ Open Issue : [🐛 [LINKWARDEN] Never use STORAGE_FOLDER (opened 2025-10-11)](https://github.com/alexbelgium/hassio-addons/issues/2137) by [@guimex22](https://github.com/guimex22)

# Home Assistant 附加组件：Linkwarden

我利用业余时间来维护此及其他 Home Assistant 附加组件：跟进上游变更、HA 变更以及在真实硬件上进行测试花费了大量时间（以及一些金钱）。我大约使用了超过 110 个附加组件中的 5-10 个，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 VPN）来进行故障排除和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flinkwarden%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flinkwarden%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flinkwarden%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家关注我的仓库！为了将其置顶，请点击下方图片中的星标，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/linkwarden/stats.png)

## 关于

[Linkwarden](https://linkwarden.app/) 是一个协作书签管理器，用于收集、组织和保存网页及文章。它允许团队和个人保存、分类和管理书签，具有标签、收藏和全文搜索等功能。

此附加组件基于 [官方 Linkwarden Docker 镜像](https://github.com/linkwarden/linkwarden)。

## 配置

Web 界面可访问 `<your-ip>:3000`，或通过在侧边栏使用 Ingress 访问。
启动时需要创建新用户账户。

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `NEXTAUTH_SECRET` | str | **Required** | NextAuth.js 认证所需密钥（启动时必须填写） |
| `NEXTAUTH_URL` | str | | 自定义 NextAuth URL（可选，仅当 Linkwarden 外部托管时） |
| `NEXT_PUBLIC_DISABLE_REGISTRATION` | bool | `false` | 禁用新用户注册 |
| `NEXT_PUBLIC_CREDENTIALS_ENABLED` | bool | `true` | 启用用户名/密码登录 |
| `STORAGE_FOLDER` | str | `/config/library` | 存储数据文件的目录 |
| `DATABASE_URL` | str | | 外部 PostgreSQL 数据库 URL（留空以使用内部数据库） |
| `NEXT_PUBLIC_AUTHENTIK_ENABLED` | bool | `false` | 启用 Authentik SSO 集成 |
| `AUTHENTIK_CUSTOM_NAME` | str | `Authentik` | Authentik 按钮的自定义提供商名称 |
| `AUTHENTIK_ISSUER` | str | | Authentik OpenID 配置发行者 URL |
| `AUTHENTIK_CLIENT_ID` | str | | Authentik 提供商总览中的客户端 ID |
| `AUTHENTIK_CLIENT_SECRET` | str | | Authentik 提供商总览中的客户端密钥 |
| `NEXT_PUBLIC_OLLAMA_ENDPOINT_URL` | str | | AI 功能的 Ollama 端点 URL |
| `OLLAMA_MODEL` | str | | AI 处理的 Ollama 模型名称 |

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

1. **初次设置**：启动附加组件后，请访问 Web 界面并创建您的第一个用户账户
2. **NEXTAUTH_SECRET**：为 `NEXTAUTH_SECRET` 选项生成一个安全的随机字符串（至少 32 个字符）
3. **数据库**：默认情况下，Linkwarden 使用内部 SQLite 数据库。对于生产环境，请考虑设置 PostgreSQL
4. **认证**：如果希望具备 SSO 功能，请配置 Authentik 集成
5. **存储**：书签数据和文件将存储在配置的 `STORAGE_FOLDER` 中

### 自定义脚本和环境变量

此附加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### Authentik 集成

要将authentik 集成以便于单点登录 (SSO)：

1. 按照 [Linkwarden 文档](https://docs.linkwarden.app/self-hosting/sso-oauth#authentik) 中的说明操作
2. 设置 `NEXT_PUBLIC_AUTHENTIK_ENABLED` 为 `true`
3. 使用您 Authentik 提供商总览中的值配置特定的 Authentik 选项
4. 注意：从 `AUTHENTIK_ISSUER` URL 中移除尾部的 "/"

### 其他配置

高级配置选项，请参阅 [Linkwarden 文档](https://docs.linkwarden.app/self-hosting/environment-variables) 中的环境变量完整列表。

## 安装

此附加组件的安装非常简单，与其他 Hass.io 附加组件的安装方式基本相同。

1. 将我的 Hass.io 附加组件仓库 [Linkwarden](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/linkwarden/illustration.png) 添加到您的 Hass.io 实例。[![添加到我的 Home Assistant 中的仓库][repository-badge]][repository-url]
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将 `NEXTAUTH_SECRET` 选项设置为安全的随机字符串。
1. 根据需要配置其他选项。
1. 启动附加组件。
1. 查看附加组件日志以确定一切是否正常。
1. 打开 Web 界面并创建您的第一个用户账户。

## 支持

在 github 上创建问题，或前往 [Home Assistant 讨论区](https://community.home-assistant.io/t/home-assistant-addon-linkwarden/279247) 提问。

[repository]: https://github.com/alexbelgium/hassio-addons
[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons

---

![illustration](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/linkwarden/illustration.png)

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
