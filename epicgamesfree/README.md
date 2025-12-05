# Home assistant插件：Epic Games Free

我利用业余时间维护这个和其他Home Assistant插件：跟上上游的变化、HA的变化，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个插件中的5-10个，因此我安装了测试机器（和一些我自己的测试服务，如VPN），以便我不用来调试和改进插件。

如果这个插件节省了您的时间或使您的设置更容易，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/epicgamesfree/stats.png)

## 关于

[Epic Games Store每周免费游戏](https://github.com/claabs/epicgames-freegames-node) : 自动登录并兑换Epic Games Store的促销免费游戏。处理多个账户、2FA、验证码绕过、验证码通知和计划运行。
这个插件基于docker镜像 https://hub.docker.com/r/charlocharlie/epicgames-freegames

## 配置

插件选项暴露了`env_vars`字段来传递额外的环境变量，以及一个`disable_cron`开关来停止内置的cron服务；所有其他应用程序配置都是通过JSON文件完成的。

### 配置文件

配置文件存储在`/config/addons_config/epicgamesfree/`：

- **config.json**：主配置文件
- **cookies.json**：认证cookie（可选）

如果这些文件不存在，它们将在首次启动时使用默认设置创建。

- **env_vars选项**：使用插件的`env_vars`选项来传递额外的环境变量（大小写名称）。详情请参阅：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

### 基本配置

创建`/config/addons_config/epicgamesfree/config.json`：

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
| `accounts` | 数组 | Epic Games账户列表 |
| `cronSchedule` | 字符串 | 声明游戏的cron计划（默认：`0 */6 * * *`） |
| `runOnStartup` | 布尔值 | 当插件启动时运行一个声明周期 |
| `logLevel` | 字符串 | 应用程序日志级别 |
| `webPortalConfig.baseUrl` | 字符串 | 内置网页门户使用的基URL |
| `notifiers` | 数组 | 通知目标，如电子邮件、Discord、Telegram、Apprise等 |
| `disable_cron` | 布尔值 | 如果使用外部调度器，则禁用插件的cron服务 |

### 账户配置

对于`accounts`数组中的每个账户：

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

#### Webhook通知
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

### 重要注意事项

- **自动兑换**：由于Epic Games的自动化检测改进，自动兑换不再可能
- **通知系统**：插件现在通过您喜欢的通知方法发送兑换链接，而不是自动声明游戏
- **2FA支持**：对于启用双因素认证的账户，支持基于时间的单次密码（TOTP）
- **多个账户**：您可以配置多个Epic Games账户

### Cookie导入（可选）

您可以导入浏览器cookie以避免登录问题。创建`/config/addons_config/epicgamesfree/cookies.json`：

详细的cookie导入说明，请参阅：https://github.com/claabs/epicgames-freegames-node#cookie-import

### 故障排除

#### 超时错误
在您的`config.json`中添加以下内容：
```json
{
  "browserNavigationTimeout": 300000
}
```

#### 登录问题
1. 检查您的凭据是否正确
2. 如果启用，请验证2FA/TOTP配置
3. 考虑导入浏览器cookie
4. 检查插件的日志以获取特定的错误消息

## 安装

这个插件的安装非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的Home Assistant实例（在supervisor插件商店的右上角，或点击下面的按钮如果您已经配置了我的HA）
   [![打开您的Home Assistant实例并显示带有特定仓库URL预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击`保存`按钮以存储您的配置。
1. 设置插件选项以符合您的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开WebUI并调整软件选项

## 支持

### 超时错误

请尝试在您的`config.json`中添加`"browserNavigationTimeout": 300000,`（https://github.com/alexbelgium/hassio-addons/issues/675#issuecomment-1407675351）

### 其他错误

在github上创建问题

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
