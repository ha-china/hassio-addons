# 家居助手插件：Immich（无需机器学习）

⚠️ 项目正在非常活跃地开发中。请预期出现错误和变更。不要将其作为您照片和视频的唯一存储方式！（来自开发者）

我利用业余时间维护这个和其他家居助手插件：跟上上游变更、HA变更，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用了我超过110个插件中的5-10个，因此我安装了测试机器（并购买了一些测试服务，如VPN），以便我不用来调试和改进插件。

如果这个插件节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐款][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_noml%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库星标的人！要给星标，请点击下面的图片，它将在右上角显示。谢谢！_

[![@alexbelgium/hassio-addons的星标仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_noml/stats.png)

## 关于

自托管照片和视频备份解决方案，直接从您的手机。这是Immich的NoML（无需机器学习）版本，专为没有机器学习能力的系统或用户设计，这些用户希望禁用ML功能以出于性能或资源管理原因。

这个插件基于imagegenius的[docker镜像](https://github.com/imagegenius/docker-immich)，排除了机器学习组件以减少资源消耗并提高与资源受限系统的兼容性。

## 使用场景

NoML版本非常适合：

- **资源受限的系统**：降低CPU和内存使用，无需ML开销
- **注重隐私的部署**：不进行面部识别或对象检测处理
- **简单的照片存储**：基本照片和视频备份，无需高级AI功能
- **老旧硬件**：难以处理机器学习工作负载的系统
- **极简设置**：喜欢基本照片管理而不需要AI增强的用户

## 配置

Webui位于`<your-ip>:8080`。PostgreSQL可以是内部的或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `data_location` | 字符串 | `/share/immich` | Immich数据存储的路径 |
| `library_location` | 字符串 | | 照片/视频库的路径 |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB共享的网络用户名 |
| `cifspassword` | 字符串 | | SMB共享的网络密码 |
| `cifsdomain` | 字符串 | | SMB共享的网络域 |
| `DB_HOSTNAME` | 字符串 | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | 字符串 | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | 字符串 | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | 字符串 | `immich` | 数据库名称 |
| `DB_PORT` | 整数 | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | 字符串 | | 数据库根密码 |
| `JWT_SECRET` | 字符串 | | 用于认证的JWT密钥 |
| `DISABLE_MACHINE_LEARNING` | 布尔值 | `false` | 禁用ML功能（推荐用于NoML版本） |
| `MACHINE_LEARNING_WORKERS` | 整数 | `1` | ML工作者的数量（对于NoML保持为1） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | 整数 | `120` | ML工作者超时（秒） |
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

这个插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见[在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见[在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：参见[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用插件的`env_vars`选项传递额外的环境变量（名称大小写均可）。参见https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2以获取详细信息。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

**步骤：**
1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
2. 安装这个插件。
3. 点击`保存`按钮以存储您的配置。
4. 启动插件。
5. 检查插件的日志以查看是否一切正常。
6. 仔细配置插件以满足您的偏好，请参阅官方文档以获取详细信息。

**数据库设置：**
请注意，您需要安装一个单独的postgres插件才能连接数据库。您可以在我的仓库中安装postgres插件。
请注意在启动之前更改密码；之后将无法更改

## 支持

在github上创建问题，或在[家居助手线程](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)上提问

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
