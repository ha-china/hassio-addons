# Home assistant 插件：Epic Games 免费游戏

我利用业余时间维护此以及其他 Home Assistant 插件：跟踪上游更改、适应 Home Assistant 的更新以及在真实硬件上进行测试需要大量时间（还有些开销）。我常用的约 5-10 个插件，来自我拥有的 >110 个插件中。为了排查和改进插件，我经常安装测试机器（并购买一些测试服务，如 VPN），这些服务我自己并不使用。

如果此插件为您节省了时间或让您的设置更简便，您的支持将使我将感激不尽！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标关注的朋友们！请点击下方图片星标关注，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/epicgamesfree/stats.png)

## 关于

[Epic Games 商店周免费游戏](https://github.com/claabs/epicgames-freegames-node)：自动登录并从 Epic Games 商店兑换促销免费游戏。处理多个账户、双重认证、验证码绕过、验证码通知以及定时运行。
此插件基于 Docker 镜像：https://hub.docker.com/r/charlocharlie/epicgames-freegames

## 配置

插件选项暴露 `env_vars` 字段用于传递额外的环境变量，以及一个 `disable_cron` 开关以停止内置的 cron 服务；其余的应用程序配置通过 JSON 文件进行。

### 配置文件

配置文件存储在 `/config/addons_config/epicgamesfree/` 中：

- **config.json**：主配置文件
- **cookies.json**：认证 cookies（可选）

如果这些文件不存在，它们将在首次启动时以默认设置创建。

- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（支持大写或小写名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 基本配置

创建 `/config/addons_config/epicgamesfree/config.json`：

```json
{
  "runOnStartup": true,
  "cronSchedule": "0 */6 * * *",
  "logLevel": "info",
  "webPortalConfig": {
    "baseUrl": "https://epic.example.com"
  },
  "accounts": [
    {
      "email": "your-epic-email@example.com",
      "password": "your-password",
      "totp": "OPTIONAL_2FA_SECRET"
    }
  ],
  "notifiers": [
    {
      "type": "email",
      "smtpHost": "smtp.gmail.com",
      "smtpPort": 587,
      "emailSenderAddress": "notifications@example.com",
      "emailSenderName": "Epic Games Free",
      "emailRecipientAddress": "recipient@example.com",
      "secure": false,
      "auth": {
        "user": "notifications@example.com",
        "pass": "your-app-password"
      }
    }
  ]
}
```

### 配置选项

| 选项 | 类型 | 描述 |
|--------|------|-------------|
| `accounts` | 数组 | Epic Games 账户列表 |
| `cronSchedule` | 字符串 | 获取游戏的 Cron 计划（默认：`0 */6 * * *`） |
| `runOnStartup` | 布尔值 | 插件启动时运行一次领取周期 |
| `logLevel` | 字符串 | 应用程序日志级别 |
| `webPortalConfig.baseUrl` | 字符串 | 嵌入式 Web 门户使用的基准 URL |
| `notifiers` | 数组 | 通知目标，如邮件、Discord、Telegram、Apprise 等 |
| `disable_cron` | 布尔值 | 如果使用外部调度器，禁用插件的 cron 服务 |

### 账户配置

对于 `accounts` 数组中的每个账户：

```yaml
email: account@example.com
password: password
totp: TOTP_SECRET
onlyWeekly: true
```

### 通知方法

#### 邮件通知
```yaml
notifications:
  email:
    smtpHost: smtp.gmail.com
    smtpPort: 587
    emailSenderAddress: sender@example.com
    emailRecipientAddress: recipient@example.com
    secure: false
    auth:
      user: sender@example.com
      pass: app-password
```

#### Webhook 通知
```json
{
  "notifiers": [
    {
      "type": "webhook",
      "url": "https://your-webhook-url.com",
      "events": [
        "purchase-success",
        "already-owned"
      ]
    }
  ]
}
```

### 重要说明

- **自动兑换**：由于 Epic Games 改进了自动化检测，自动兑换已不再可行
- **通知系统**：插件现在通过您首选的通知方法发送兑换链接，而不是自动领取游戏
- **2FA 支持**：TOTP（基于时间的单次密码）支持具有双重认证的账户
- **多账户**：您可以配置多个 Epic Games 账户

### Cookie 导入（可选）

您可以导入浏览器 cookies 以避免登录问题。创建 `/config/addons_config/epicgamesfree/cookies.json`：

有关详细的 Cookie 导入说明，请查看：https://github.com/claabs/epicgames-freegames-node#cookie-import

### 故障排除

#### Timeout 错误
在您的 config.json 中添加以下内容：
```json
{
  "browserNavigationTimeout": 300000
}
```

#### 登录问题
1. 检查您的凭据是否正确
2. 如果启用了 2FA/TOTP，请验证其配置
3. 考虑导入浏览器 cookies
4. 查看插件日志以查找具体的错误信息

## 安装

此插件的安装非常简单，与其他插件安装方式相同。

1. 将我的插件仓库添加到 Home Assistant 实例中（在 Supervisor 插件商店右上角，或如果您已配置了我的 HA，可点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 打开 WebUI 并调整软件选项

## 支持

### Timeout 错误

请尝试在您的 config.json 中添加 `"browserNavigationTimeout": 300000,`（https://github.com/alexbelgium/hassio-addons/issues/675#issuecomment-1407675351）

### 其他错误

在 GitHub 上创建 Issue

[repository]: https://github.com/alexbelgium/hassio-addons

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
