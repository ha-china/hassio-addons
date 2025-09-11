## 警告：打开问题 : [🐛 [immich] 有关生成缩略图的作业的问题，使用 HA 插件无法解决 (于 2025-08-26 打开)](https://github.com/alexbelgium/hassio-addons/issues/2072) 由 [@samimasad](https://github.com/samimasad)
# Home assistant 插件：immich

⚠️ 项目正在非常活跃地开发中。请预期出现错误和变更。不要将其用作存储您照片和视频的唯一方式！(来自开发者)

[![捐款][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐款][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich%2Fconfig.json)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich/stats.png)

## 关于

基于 Web 的文件浏览器。
此插件基于 imagegenius 的 [Docker 镜像](https://github.com/imagegenius/docker-immich)。

## 配置

Web 界面位于 `<你的 IP>:8080`。PostgreSQL/MySQL 可以是内部的或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `data_location` | 字符串 | `/share/immich` | Immich 数据存储路径 |
| `library_location` | 字符串 | | 照片/视频库路径 |
| `TZ` | 字符串 | | 时区 (例如，`Europe/London`) |
| `localdisks` | 字符串 | | 要挂载的本地驱动器 (例如，`sda1,sdb1,MYNAS`) |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享 (例如，`//SERVER/SHARE`) |
| `cifsusername` | 字符串 | | SMB 网络共享的用户名 |
| `cifspassword` | 字符串 | | SMB 网络共享的密码 |
| `cifsdomain` | 字符串 | | SMB 网络共享的域 |
| `DB_HOSTNAME` | 字符串 | `localhost` | 数据库主机名 |
| `DB_USERNAME` | 字符串 | `immich` | 数据库用户名 |
| `DB_PASSWORD` | 字符串 | | 数据库密码 |
| `DB_DATABASE_NAME` | 字符串 | `immich` | 数据库名称 |
| `DB_PORT` | 整数 | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | 字符串 | | 数据库根密码 |
| `JWT_SECRET` | 字符串 | | 用于身份验证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | 布尔值 | `false` | 禁用 ML 功能 |
| `MACHINE_LEARNING_WORKERS` | 整数 | `1` | ML 工作线程的数量 |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | 整数 | `120` | ML 工作线程超时 (秒) |
| `skip_permissions_check` | 布尔值 | `false` | 跳过文件权限检查 |

### 示例配置

```yaml
data_location: "/share/immich"
library_location: "/media/photos"
TZ: "Europe/London"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/photos"
cifsusername: "photouser"
cifspassword: "password123"
DB_HOSTNAME: "core-mariadb"
DB_USERNAME: "immich"
DB_PASSWORD: "secure_password"
DB_DATABASE_NAME: "immich"
JWT_SECRET: "your-secret-key-here"
```

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志，看看是否一切正常。
1. 仔细配置插件以满足您的偏好，请参阅官方文档进行配置。

注意，您需要安装一个单独的 postgres 插件才能连接数据库。您可以在我的仓库中安装 postgres 插件。
注意在启动之前更改密码；之后将无法更改

## 支持

在 github 上创建一个问题，或在 [home assistant 版本](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 上提问。

[repository]: https://github.com/alexbelgium/hassio-addons
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg