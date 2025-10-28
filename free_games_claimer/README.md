## ⚠️ 多台机器上 VNC 无法工作。请使用 config.env 来执行脚本

# Home assistant 插件：免费游戏领取器

![捐赠](https://www.buymeacoffee.com/alexbelgium)
![捐赠](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffree_games_claimer%2Fconfig.yaml)

![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，它将在右上角。谢谢！_

![@alexbelgium/hassio-addons 的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/free_games_claimer/stats.png)

## 关于

[免费游戏领取器](https://github.com/vogler/free-games-claimer) : 定期领取免费游戏

- 埃及游戏商店
- 亚马逊_prime游戏
- GOG
- Live 游戏金 - 计划中

此插件基于 https://github.com/vogler/free-games-claimer 的 docker 镜像

## 配置

Webui 可以在 <http://homeassistant:6080> 找到（NoVNC 接口 - 目前在某些机器上有问题）。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `CMD_ARGUMENTS` | 字符串 | `node epic-games ; node prime-gaming ; node gog` | 用于领取游戏的命令 |
| `CONFIG_LOCATION` | 字符串 | `/config/config.env` | 配置文件的位置 |

### 示例配置

```yaml
CMD_ARGUMENTS: "node epic-games ; node prime-gaming ; node gog"
CONFIG_LOCATION: "/config/config.env"
```

### 环境配置

所有主要配置都是通过位于 `/config/addons_config/free_games_claimer/config.env` 的 `config.env` 文件完成的。

如果此文件不存在，它将在首次启动时使用默认设置创建。

### 必要的环境变量

将这些添加到您的 `config.env` 文件中：

```env
# 埃及游戏商店
EG_EMAIL=your-email@example.com
EG_PASSWORD=your-password

# 亚马逊_prime游戏
PG_EMAIL=your-amazon-email@example.com
PG_PASSWORD=your-amazon-password

# GOG (可选)
GOG_EMAIL=your-gog-email@example.com
GOG_PASSWORD=your-gog-password

# 通知 (可选)
EMAIL_SMTP_HOST=smtp.gmail.com
EMAIL_SMTP_PORT=587
EMAIL_USER=notifications@example.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
```

### 其他选项

有关完整的配置选项和高级设置，请参阅：https://github.com/vogler/free-games-claimer#configuration--options

### 重要提示

- **VNC 问题**：NoVNC 网络接口目前在某些机器上无法可靠工作
- **推荐**：使用 `config.env` 文件而不是网络界面进行配置
- **安全**：安全地存储凭证，并在可用时考虑使用特定于应用密码

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射的自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 home assistant 实例（在 supervisor 插件商店的右上角，或如果您已配置我的 HA，请点击下面的按钮）
   ![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 设置插件的选项以符合您的偏好。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 打开 WebUI 并调整软件选项

## 支持

在 github 上创建问题

[repository]: https://github.com/alexbelgium/hassio-addons