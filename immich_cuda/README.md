# Home assistant add-on: Immich CUDA

⚠️ 项目正在非常活跃地开发中。请预期出现错误和变更。不要将其作为存储您照片和视频的唯一方式！（来自开发者）

![支持捐赠](https://www.buymeacoffee.com/alexbelgium)
![支持捐赠](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)

![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e) ![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)
![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星的贡献者！要加星，请点击下面的图片，然后它将在右上角显示。谢谢！_

![@alexbelgium/hassio-addons的星标仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg) ![下载趋势图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_cuda/stats.png)

## 关于

从您的手机直接进行自托管照片和视频备份解决方案，并支持CUDA硬件加速。这是Immich的CUDA启用版本，它为使用NVIDIA GPU进行机器学习任务提供了硬件加速。

此插件基于imagegenius的[docker镜像](https://github.com/imagegenius/docker-immich)，并启用了CUDA支持以增强性能。

## 硬件要求

- **NVIDIA GPU**: 兼容的带有CUDA支持的NVIDIA显卡
- **CUDA驱动器**: NVIDIA驱动器必须在主机系统上正确安装
- **架构**: 仅支持AMD64（ARM架构不支持CUDA）

## 配置

Web UI位于`<your-ip>:8080`。PostgreSQL可以是内部的或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `data_location` | 字符串 | `/share/immich` | Immich数据存储的路径 |
| `library_location` | 字符串 | | 照片/视频库的路径 |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | 用于网络共享的SMB用户名 |
| `cifspassword` | 字符串 | | 用于网络共享的SMB密码 |
| `cifsdomain` | 字符串 | | 用于网络共享的SMB域 |
| `DB_HOSTNAME` | 字符串 | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | 字符串 | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | 字符串 | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | 字符串 | `immich` | 数据库名 |
| `DB_PORT` | 整数 | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | 字符串 | | 数据库根密码 |
| `JWT_SECRET` | 字符串 | | 用于认证的JWT密钥 |
| `DISABLE_MACHINE_LEARNING` | 布尔值 | `false` | 禁用ML功能（对于CUDA版本不建议） |
| `MACHINE_LEARNING_WORKERS` | 整数 | `1` | ML工作者的数量（可以使用CUDA增加） |
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
DISABLE_MACHINE_LEARNING: false
MACHINE_LEARNING_WORKERS: 2
MACHINE_LEARNING_WORKER_TIMEOUT: 180
```

### 挂载驱动器

此插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**: 请参阅[在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 请参阅[在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件支持通过`addon_config`映射自定义脚本和环境变量：

- **自定义脚本**: 请参阅[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**: 请参阅[为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

**前提条件:**
- 带有CUDA支持的NVIDIA GPU
- 主机系统上安装了NVIDIA驱动器
- AMD64架构（ARM不支持）

**步骤:**
1. 将我的Hass.io插件仓库[repository]添加到您的Hass.io实例。
2. 安装此插件。
3. 点击“保存”按钮以存储您的配置。
4. 启动插件。
5. 检查插件的日志，看看一切是否正常。
6. 仔细配置插件以满足您的需求，请参阅官方文档。

**数据库设置:**
请注意，您需要安装一个单独的postgres插件才能连接数据库。您可以在我的仓库中安装postgres插件。
请注意，在启动之前更改密码；之后将无法更改

## 支持

在github上创建问题，或在[home assistant线程](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3)上提问。

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
