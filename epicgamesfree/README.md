# Home Assistant 扩展：Epic Games 免费游戏

我在业余时间维护这个和其他 Home Assistant 扩展：跟踪上游更改、Home Assistant 更改以及在实际硬件上的测试都需要花费大量时间（以及一些金钱）。我经常使用 5-10 个我 >110 个扩展，所以我安装了测试机器（并购买了一些我自身不使用的测试服务，如 VPN）来调试和改进扩展。

如果这个扩展为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位给我的仓库加星的人！要加星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers 仓库清单 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/epicgamesfree/stats.png)

## 关于

[Epic Games Store 每周免费游戏](https://github.com/claabs/epicgames-freegames-node) : 自动登录并兑换 Epic Games Store 的促销免费游戏。支持多个账户、2FA、跳过验证码、验证码通知、定时运行。
此扩展基于 docker 镜像 https://hub.docker.com/r/charlocharlie/epicgames-freegames

## 配置

扩展选项公开了 `env_vars` 字段，用于传递额外的环境变量，以及一个 `disable_cron` 开关来停止内置的 cron 服务；所有其他应用程序配置都通过 JSON 文件完成。

### 配置文件

配置文件存储在 `/config/addons_config/epicgamesfree/`：

- **config.json**：主要配置文件
- **cookies.json**：认证 cookies（可选）

如果这些文件不存在，它们将在首次启动时创建，并使用默认设置。

- **env_vars 选项**：使用扩展 `env_vars` 选项来传递额外的环境变量（名称为大写或小写）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

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
|------|------|------|
| `accounts` | 数组 | Epic Games 账户列表 |
| `cronSchedule` | 字符串 | 认领游戏的 Cron 调度（默认：`0 */6 * * *`） |
| `runOnStartup` | 布尔值 | 当扩展启动时运行认领周期 |
| `logLevel` | 字符串 | 应用程序日志级别 |
| `webPortalConfig.baseUrl` | 字符串 | 包含的 Web 站点的基 URL |
| `notifiers` | 数组 | 通知目标，如电子邮件、Discord、Telegram、Apprise 等。 |
| `disable_cron` | 布尔值 | 如果使用外部调度器，则禁用扩展的 cron 服务 |

### 账户配置

对于 `accounts` 数组中的每个账户：

```yaml
email: account@example.com
password: password
totp: TOTP_SECRET
onlyWeekly: true
```

### 通知方法

#### 电子邮件通知
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

### 重要提示

- **自动兑换**：由于 Epic Games 的自动化检测改进，自动兑换不再可能
- **通知系统**：扩展现在通过您首选的通知方法发送兑换链接，而不是自动认领游戏
- **2FA 支持**：支持带有双因素认证的账户的 TOTP（基于时间的单次密码）
- **多个账户**：您可以配置多个 Epic Games 账户

### Cookie 导入（可选）

您可以将浏览器 cookies 导入以避免登录问题。创建 `/config/addons_config/epicgamesfree/cookies.json`：

有关详细的 cookie 导入说明，请参阅：https://github.com/claabs/epicgames-freegames-node#cookie-import

### 故障排除

#### 超时错误
将以下内容添加到您的 config.json 中：
```json
{
  "browserNavigationTimeout": 300000
}
```

#### 登录问题
1. 确认您的凭证正确无误
2. 如果已启用，请验证 2FA/TOTP 配置
3. 考虑导入浏览器 cookies
4. 检查扩展日志以获取特定的错误消息

## 安装

此扩展的安装非常简单，与安装任何其他扩展没有区别。

1. 将我的扩展仓库添加到您的 Home Assistant 实例中（在 supervisor 扩展存储的右上角，或如果您已配置我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示具有特定仓库 URL 预填充的添加扩展仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 点击“保存”按钮以存储您的配置。
1. 将扩展选项设置为您的偏好设置
1. 启动扩展。
1. 检查扩展日志以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项

## 支持

### 超时错误

请尝试将 `"browserNavigationTimeout": 300000,` 添加到您的 config.json 中（https://github.com/alexbelgium/hassio-addons/issues/675#issuecomment-1407675351）

### 其他错误

在 GitHub 上创建问题

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
