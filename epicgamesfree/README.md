# Home Assistant 插件：Epic Games Free

我在业余时间维护和更新这些 Home Assistant 插件：跟进上游变更、HA 的内部变更，并在真实硬件上测试需要大量时间（以及一些金钱）。我大约有 110 个插件，但我只使用其中 5-10 个。为此，我安装机器（甚至购买一些如 vpn 的测试服务），这些服务我自己并不使用，用于故障排除和改进插件。

如果您通过此插件节省时间或简化了配置，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点赞的人！要点赞，请点击下图，然后它会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/epicgamesfree/stats.png)

## 关于

[Epic Games Store Weekly Free Games](https://github.com/claabs/epicgames-freegames-node)：自动登录并兑换 Epic Games Store 的免费促销游戏。支持处理多个账户、两步验证（2FA）、验证码跳过、验证码通知和定时运行。
该插件基于 Docker 图像 https://hub.docker.com/r/charlocharlie/epicgames-freegames

## 配置

插件选项暴露了 `env_vars` 字段以传递额外的环境变量，以及一个 `disable_cron` 开关用于停止内置的 cron 服务；所有其他应用程序配置都通过 JSON 文件完成。

### 配置文件

配置文件存储于 `/config/addons_config/epicgamesfree/` 中：

- **config.json**：主配置文件
- **cookies.json**：认证 Cookies（可选）

如果这些文件不存在，它们将在首次启动时以默认设置创建。

- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。详细信息请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

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
| `accounts` | array | Epic Games 账户列表 |
| `cronSchedule` | string | 领取游戏的 Cron 调度（默认：`0 */6 * * *`） |
| `runOnStartup` | boolean | 附加组件启动时运行一次领取循环 |
| `logLevel` | string | 应用程序日志级别 |
| `webPortalConfig.baseUrl` | string | 内置 Web 门户使用的基 URL |
| `notifiers` | array | 通知目标，例如邮件、Discord、Telegram、Apprise 等 |
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

### 重要提示

- **自动兑换**：由于 Epic Games 改进了自动化检测，自动兑换已不再可能
- **通知系统**：插件现在通过您首选的通知方法发送兑换链接，而不是自动领取游戏
- **2FA 支持**：TOTP（基于时间的一次性密码）受支持，适用于带有双重验证的账户
- **多账户**：您可以配置多个 Epic Games 账户

### Cookie 导入（可选）

您可以通过导入浏览器 Cookies 来避免登录问题。创建 `/config/addons_config/epicgamesfree/cookies.json`：

有关详细的 Cookie 导入说明，请访问：https://github.com/claabs/epicgames-freegames-node#cookie-import

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
2. 如果启用了，请验证 2FA/TOTP 配置
3. 考虑导入浏览器 Cookies
4. 检查附加组件日志以查找特定的错误消息

## 安装

此附加组件的安装非常简单，与其他附加组件的安装没有区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 Supervisor 附加组件商店右上角，或者如果您已配置了 HA，请点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将附加组件选项设置为您偏好的设置。
1. 启动附加组件。
1. 检查附加组件日志以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项

## 支持

### 超时错误

请尝试在您的 config.json 中添加 `"browserNavigationTimeout": 300000,`（https://github.com/alexbelgium/hassio-addons/issues/675#issuecomment-1407675351）

### 其他错误

在 GitHub 上创建问题

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
