# 家居助手插件：Immich（无需机器学习）

⚠️ 项目正在非常活跃地开发中。请预期存在错误和变化。不要将其作为存储您照片和视频的唯一方式！（来自开发者）

[![赞助][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![赞助][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下面的图片，然后它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_noml/stats.png)

## 关于

直接从您的手机备份照片和视频的解决方案。这是 Immich 的 NoML（无需机器学习）版本，专为没有机器学习能力的系统或希望禁用 ML 功能以进行性能或资源管理的用户而设计。

此插件基于 imagegenius 的 [docker 镜像](https://github.com/imagegenius/docker-immich)，排除了机器学习组件，以减少资源消耗并提高与资源受限系统的兼容性。

## 用例

NoML 版本非常适合：

- **资源受限的系统**：降低 CPU 和内存使用，无需 ML 开销
- **注重隐私的部署**：不进行人脸识别或物体检测处理
- **简单的照片存储**：基本照片和视频备份，无需高级 AI 功能
- **旧硬件**：难以处理机器学习工作负载的系统
- **极简设置**：偏好基本照片管理，无需 AI 增强的用户

## 配置

Web UI 位于 `<your-ip>:8080`。PostgreSQL 可以是内部的或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `data_location` | 字符串 | `/share/immich` | Immich 数据存储的路径 |
| `library_location` | 字符串 | | 照片/视频库的路径 |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB 共享的 SMB 用户名 |
| `cifspassword` | 字符串 | | SMB 共享的 SMB 密码 |
| `cifsdomain` | 字符串 | | SMB 共享的 SMB 域 |
| `DB_HOSTNAME` | 字符串 | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | 字符串 | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | 字符串 | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | 字符串 | `immich` | 数据库名称 |
| `DB_PORT` | 整数 | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | 字符串 | | 数据库根密码 |
| `JWT_SECRET` | 字符串 | | 用于认证的 JWT 密钥 |
| `DISABLE_MACHINE_LEARNING` | 布尔值 | `false` | 禁用 ML 功能（推荐用于 NoML 版本） |
| `MACHINE_LEARNING_WORKERS` | 整数 | `1` | ML 工作线程的数量（对于 NoML 保持为 1） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | 整数 | `120` | ML 工作线程超时（秒） |
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
DISABLE_MACHINE_LEARNING: true
MACHINE_LEARNING_WORKERS: 1
MACHINE_LEARNING_WORKER_TIMEOUT: 120
```

### 挂载驱动器

此插件支持挂载本地驱动器和远程 SMB 共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

**步骤：**
1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件的日志，看看一切是否正常。
6. 仔细配置插件以满足您的需求，请参阅官方文档进行配置。

**数据库设置：**
注意，您需要安装一个单独的 postgres 插件才能连接数据库。您可以在我的仓库中安装 postgres 插件。
注意在启动之前更改密码；之后将无法更改

## 支持

在 github 上创建问题，或在 [home assistant 论坛](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 上提问

[repository]: https://github.com/alexbelgium/hassio-addons
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
