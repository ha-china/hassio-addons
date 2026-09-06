# Home Assistant 附加组件：Epic Games Free

我利用空闲时间维护和托管其他 Home Assistant 附加组件：跟踪上游变更、Home Assistant 自身的变更，以及在真实硬件上进行测试需要花费大量时间（以及部分金钱）。我约使用 5-10 个超过 110 个附加组件，因此我安装自己不使用的测试机（并购买一些测试服务，如vpn）来调试和改进附加组件。

如果这个附加组件节省了您的时间或让您的设置更加便捷，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我 repo 点过星的人！想点一个，请点击下图，它将显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/epicgamesfree/stats.png)

## 关于

[Epic Games Store Weekly Free Games](https://github.com/claabs/epicgames-freegames-node) : 自动登录并从 Epic Games Store 兑换促销免费游戏。支持多个账户、双因素认证(2FA)、验证码绕过、验证码通知和定时运行。
该附加组件基于 docker 镜像 https://hub.docker.com/r/charlocharlie/epicgames-freegames

## 配置

附加组件选项暴露了用于传递额外环境变量的 `env_vars` 字段，以及用于停止内置 cron 服务的 `disable_cron` 开关；其余的应用程序配置通过 JSON 文件完成。

### 配置文件

配置文件存储在 `/config/addons_config/epicgamesfree/` 目录中：

- **config.json**: 主配置文件
- **cookies.json**: 认证饼干（可选）

如果这些文件不存在，它们将在首次启动时以默认设置创建。

- **env_vars 选项**: 使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。详情见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 基本配置

创建 `/config/addons_config/epicgamesfree/config.json` 文件：

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

### 配置选项配置

| 选项 | 类型 | 描述 |
|------|------|------|
| `accounts` | 数组 | Epic Games 账户列表 |
| `cronSchedule` | 字符串 | 兑换游戏的 cron 计划（默认：`0 */6 * * *`） |
| `runOnStartup` | 布尔值 | 附加组件启动时运行兑换周期 |
| `logLevel` | 字符串 | 应用程序日志级别 |
| `webPortalConfig.baseUrl` | 字符串 | 包含的 web 门户使用的基 URL |
| `notifiers` | 数组 | 通知目标，如电子邮件、Discord、Telegram、Apprise 等 |
| `disable_cron` | 布尔值 | 如果使用的是外部调度器，则禁用附加组件的 cron 服务 |

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

### 重要说明

- **自动兑换**: 由于 Epic Games 改进了自动化检测，自动兑换现已不再可能
- **通知系统**: 附加组件现在通过您首选的通知方法发送兑换链接，而不是自动兑换游戏
- **2FA 支持**: 支持双因素认证账户的 TOTP（基于时间的单用密码）
- **多账户**: 您可以配置多个 Epic Games 账户

### 饼干导入（可选）

您可以导入浏览器的饼干以避免登录问题。创建 `/config/addons_config/epicgamesfree/cookies.json` 文件：

有关饼干导入的详细指令，请参见：https://github.com/claabs/epicgames-freegames-node#cookie-import

### 故障排除

#### 超时错误
在您的 config.json 中添加以下内容：
```json
{
  "browserNavigationTimeout": 300000
}
```

#### 登录问题
1. 检查您的凭据是否正确
2. 如果启用 2FA/TOTP，请验证其配置
3. 考虑导入浏览器饼干
4. 查看附加组件日志以查找具体的错误消息

## 安装

安装该附加组件非常直接，与其他任何附加组件的安装没有区别。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例中（在 Supervisor 附加组件商店右上角，或如果您已配置我的 HA，则点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定存储库 URL 预填充的添加附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以保存您的配置。
4. 将附加组件选项设置为您的偏好设置。
5. 启动附加组件。
6. 检查附加组件的日志以查看一切是否顺利进行。
7. 打开 WebUI 并调整软件选项。

## 支持

### 超时错误

请尝试在您的 config.json 中添加 `"browserNavigationTimeout": 300000,` (https://github.com/alexbelgium/hassio-addons/issues/675#issuecomment-1407675351)

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
