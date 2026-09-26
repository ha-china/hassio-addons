# Home assistant 附加组件：Epic Games Free

我在业余时间维护此及其他 Home Assistant 附加组件：追踪上游更改、HA 更改以及在实际硬件上测试需要花费大量时间（以及一些金钱）。我日常使用约 5-10 个我拥有的 100 多个附加组件，因此我会安装测试机器（并购买一些我不使用的测试服务，如 vpn）来排查问题并改进附加组件。

如果此附加组件为您节省时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![接入点](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！点击下方图片点赞，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/epicgamesfree/stats.png)

## 关于

[Epic Games Store Weekly Free Games](https://github.com/claabs/epicgames-freegames-node)：自动登录并兑换 Epic Games Store 促销免费游戏。支持多账户、2FA、验证码绕过、验证码通知以及计划任务运行。
此附加组件基于 Docker 镜像 https://hub.docker.com/r/charlocharlie/epicgames-freegames。

## 配置

附加组件选项暴露 `env_vars` 字段用于传递额外的环境变量，并包含 `disable_cron` 开关以停止内置的 cron 服务；其余的应用程序配置均通过 JSON 文件完成。

### 配置文件

配置文件存储在 `/config/addons_config/epicgamesfree/` 目录下：

- **config.json**：主配置文件
- **cookies.json**：认证 cookies（可选）

如果这些文件不存在，首次启动时将以默认设置创建它们。

- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可以是大小写任意）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 基础配置

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
| `accounts` | array | Epic Games 账户列表 |
| `cronSchedule` | string | 用于领取游戏的 Cron 计划（默认值：`0 */6 * * *`） |
| `runOnStartup` | boolean | 附加组件启动时执行一次领取循环 |
| `logLevel` | string | 应用程序日志级别 |
| `webPortalConfig.baseUrl` | string | 包含 Web 接口使用的基本 URL |
| `notifiers` | array | 通知目标，如邮件、Discord、Telegram、Apprise 等 |
| `disable_cron` | boolean | 如果使用了外部调度器，则禁用附加组件的 cron 服务 |

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

- **自动兑换**：由于 Epic Games 改进了自动检测机制，自动兑换已不再可行。
- **通知系统**：附加组件现在会通过您首选的通知方法发送兑换链接，而不是自动领取游戏。
- **2FA 支持**：TOTP（基于时间的一次性密码）已支持用于双因素认证的账户。
- **多账户**：您可以配置多个 Epic Games 账户。

### Cookie 导入（可选）

您可以导入浏览器 cookie 以避免登录问题。创建 `/config/addons_config/epicgamesfree/cookies.json`：

有关详细的 cookie 导入说明，请参阅：https://github.com/claabs/epicgames-freegames-node#cookie-import

### 故障排除

#### 超时错误
请在您的 config.json 中添加以下内容：
```json
{
  "browserNavigationTimeout": 300000
}
```

#### 登录问题
1. 检查您的凭据是否正确。
2. 如果启用了 2FA/TOTP，请验证其配置。
3. 考虑导入浏览器 cookies。
4. 检查附加组件日志以获取特定的错误消息。

## 安装

此附加组件的安装非常 straightforward，与其他附加组件的安装没区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了 HA，可点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示附加组件存储库对话框，其中预填充了特定仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以保存您的配置。
4. 将附加组件选项设置为您首选项。
5. 启动附加组件。
6. 检查附加组件的日志以确认一切正常。
7. 打开 Web 界面并调整软件选项。

## 支持

### 超时错误

请尝试在您的 config.json 中添加 `"browserNavigationTimeout": 300000`（https://github.com/alexbelgium/hassio-addons/issues/675#issuecomment-1407675351）

### 其他错误

请在 GitHub 上创建问题。

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
