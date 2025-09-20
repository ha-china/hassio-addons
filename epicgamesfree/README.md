# Home assistant add-on: Epic Games Free

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fepicgamesfree%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库加星！要加星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/epicgamesfree/stats.png)

## 关于

[Epic Games Store 每周免费游戏](https://github.com/claabs/epicgames-freegames-node) : 自动登录并兑换 Epic Games Store 的促销免费游戏。处理多个账户、2FA、验证码绕过、验证码通知和计划运行。
此插件基于 Docker 镜像 https://hub.docker.com/r/charlocharlie/epicgames-freegames

## 配置

通过 Home Assistant 界面没有可用的插件选项。所有配置都是通过 JSON 文件完成的。

### 配置文件

配置文件存储在 `/config/addons_config/epicgamesfree/`：

- **config.json**：主配置文件
- **cookies.json**：认证 Cookie（可选）

如果这些文件不存在，它们将在首次启动时使用默认设置创建。

### 基本配置

创建 `/config/addons_config/epicgamesfree/config.json`：

```json
{
  "accounts": [
    {
      "email": "your-epic-email@example.com", 
      "password": "your-password",
      "totp": "OPTIONAL_2FA_SECRET"
    }
  ],
  "intervalHours": 24,
  "onlyWeekly": false,
  "searchStrategy": "purchase",
  "browserNavigationTimeout": 300000,
  "notifications": {
    "email": {
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
  }
}
```

### 配置选项

| 选项 | 类型 | 描述 |
|------|------|------|
| `accounts` | 数组 | Epic Games 账户列表 |
| `intervalHours` | 数字 | 检查间隔小时数（默认：24） |
| `onlyWeekly` | 布尔值 | 仅申领每周免费游戏 |
| `searchStrategy` | 字符串 | 搜索策略："purchase" 或 "claim" |
| `browserNavigationTimeout` | 数字 | 浏览器超时毫秒数 |
| `notifications` | 对象 | 通知设置（电子邮件、webhook 等） |

### 账户配置

对于 `accounts` 数组中的每个账户：

```json
{
  "email": "account@example.com",
  "password": "password",
  "totp": "TOTP_SECRET",
  "onlyWeekly": true
}
```

### 通知方法

#### 电子邮件通知
```json
"notifications": {
  "email": {
    "smtpHost": "smtp.gmail.com",
    "smtpPort": 587,
    "emailSenderAddress": "sender@example.com",
    "emailRecipientAddress": "recipient@example.com",
    "secure": false,
    "auth": {
      "user": "sender@example.com",
      "pass": "app-password"
    }
  }
}
```

#### Webhook 通知
```json
"notifications": {
  "webhook": {
    "url": "https://your-webhook-url.com",
    "events": ["purchase-success", "already-owned"]
  }
}
```

### 重要提示

- **自动兑换**：由于 Epic Games 加强了自动化检测，自动兑换不再可能
- **通知系统**：插件现在通过您首选的通知方法发送兑换链接，而不是自动申领游戏
- **2FA 支持**：支持 TOTP（基于时间的单次密码）用于具有双因素认证的账户
- **多个账户**：您可以配置多个 Epic Games 账户

### Cookie 导入（可选）

您可以将浏览器 Cookie 导入以避免登录问题。创建 `/config/addons_config/epicgamesfree/cookies.json`：

有关详细的 Cookie 导入说明，请参阅：https://github.com/claabs/epicgames-freegames-node#cookie-import

### 故障排除

#### 超时错误
在您的 config.json 中添加以下内容：
```json
"browserNavigationTimeout": 300000
```

#### 登录问题
1. 检查您的凭证是否正确
2. 如果启用，请验证 2FA/TOTP 配置
3. 考虑导入浏览器 Cookie
4. 检查插件的日志以获取特定的错误消息

## 安装

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在右上角的 Supervisor 插件商店，或如果您已配置我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，预填充了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 支持

### 超时错误

请尝试在您的 config.json 中添加 `"browserNavigationTimeout": 300000,"` (https://github.com/alexbelgium/hassio-addons/issues/675#issuecomment-1407675351)

### 其他错误

在 GitHub 上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons