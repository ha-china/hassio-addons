# Home assistant add-on: Immich OpenVINO

⚠️ 项目正在非常活跃地开发中。请预期会有错误和变更。不要将其作为您照片和视频的唯一存储方式！（来自开发者）

我利用业余时间维护这个及其他Home Assistant add-on：跟上上游更改、HA更改，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个add-on中的5-10个，因此我安装了测试机器（并购买了一些我本人不使用的测试服务，如vpn）来调试和改进add-on。

如果这个add-on为您节省了时间或简化了设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_openvino%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_openvino/stats.png)

## 关于

直接从您的手机上自托管照片和视频备份解决方案，支持OpenVINO硬件加速。这是OpenVINO启用的Immich变体，它为使用Intel GPU和CPU的机器学习任务提供硬件加速。

此add-on基于imagegenius的[docker镜像](https://github.com/imagegenius/docker-immich)，并启用了OpenVINO支持，以在Intel硬件上增强性能。

## 硬件要求

- **Intel硬件**：兼容的Intel CPU或Intel集成/离散GPU
- **OpenVINO支持**：具有OpenVINO工具包兼容性的Intel硬件
- **架构**：仅AMD64（OpenVINO支持针对Intel x86-64架构进行了优化）
- **Intel GPU驱动程序**：在主机系统上正确安装的Intel GPU驱动程序（如果使用Intel GPU加速）

## 配置

Webui位于`<your-ip>:8080`。PostgreSQL可以是内部的或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `data_location` | str | `/share/immich` | Immich数据存储的路径 |
| `library_location` | str | | 照片/视频库的路径 |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | SMB网络共享的用户名 |
| `cifspassword` | str | | SMB网络共享的密码 |
| `cifsdomain` | str | | SMB网络共享的域 |
| `DB_HOSTNAME` | str | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | str | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | str | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | str | `immich` | 数据库名称 |
| `DB_PORT` | int | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | str | | 数据库根密码 |
| `JWT_SECRET` | str | | 用于认证的JWT密钥 |
| `DISABLE_MACHINE_LEARNING` | bool | `false` | 禁用ML功能（不推荐用于OpenVINO变体） |
| `MACHINE_LEARNING_WORKERS` | int | `1` | ML工作者的数量（可以随着OpenVINO增加） |
| `MACHINE_LEARNING_WORKER_TIMEOUT` | int | `120` | ML工作者超时（秒） |
| `skip_permissions_check` | bool | `false` | 跳过文件权限检查 |

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
DISABLE_MACHINE_LEARNING: false
MACHINE_LEARNING_WORKERS: 2
MACHINE_LEARNING_WORKER_TIMEOUT: 180
```

### 挂载驱动器

此add-on支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参阅[Mounting Local Drives in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参阅[Mounting Remote Shares in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此add-on通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：参阅[Running Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用add-on的`env_vars`选项传递额外的环境变量（名称大小写均可）。详情请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

**前提条件：**
- Intel CPU或Intel GPU以进行OpenVINO加速
- AMD64架构（ARM不受支持）
- 安装了Intel GPU驱动程序（如果使用Intel GPU加速）

**步骤：**
1. 将我的Hass.io add-ons仓库[repository]添加到您的Hass.io实例。
1. 安装此add-on。
1. 点击“保存”按钮以保存您的配置。
1. 启动add-on。
1. 检查add-on的日志以查看是否一切正常。
1. 仔细配置add-on以满足您的偏好，请参阅官方文档以获取相关说明。

**数据库设置：**
请注意，您需要安装一个单独的postgres add-on才能连接数据库。您可以在我的仓库中安装postgres add-on。
请注意在启动之前更改密码；之后将无法更改

## 支持

在github上创建问题，或在[home assistant thread](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)上提问

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
