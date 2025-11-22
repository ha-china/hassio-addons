# Home assistant add-on: Immich CUDA

⚠️ 项目正在非常活跃地开发中。请预期出现错误和变化。不要将其作为您照片和视频的唯一存储方式！（来自开发者）

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_cuda%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片点赞，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_cuda/stats.png)

## 关于

从您的手机直接进行照片和视频备份的解决方案，支持CUDA硬件加速。这是Immich的CUDA支持版本，它为使用NVIDIA GPU进行机器学习任务提供了硬件加速。

此插件基于imagegenius的[docker镜像](https://github.com/imagegenius/docker-immich)，并启用了CUDA支持以增强性能。

## 硬件要求

- **NVIDIA GPU**: 兼容的带有CUDA支持的NVIDIA显卡
- **CUDA驱动程序**: NVIDIA驱动程序必须在主机系统上正确安装
- **架构**: 仅支持AMD64（ARM架构上不支持CUDA）

## 配置

Webui位于 `<你的IP>:8080`。PostgreSQL可以是内部的或外部的。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `data_location` | 字符串 | `/share/immich` | Immich数据存储的路径 |
| `library_location` | 字符串 | | 照片/视频库的路径 |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB网络共享的用户名 |
| `cifspassword` | 字符串 | | SMB网络共享的密码 |
| `cifsdomain` | 字符串 | | SMB网络共享的域 |
| `DB_HOSTNAME` | 字符串 | `homeassistant.local` | 数据库主机名 |
| `DB_USERNAME` | 字符串 | `postgres` | 数据库用户名 |
| `DB_PASSWORD` | 字符串 | `homeassistant` | 数据库密码 |
| `DB_DATABASE_NAME` | 字符串 | `immich` | 数据库名称 |
| `DB_PORT` | 整数 | `5432` | 数据库端口 |
| `DB_ROOT_PASSWORD` | 字符串 | | 数据库root密码 |
| `JWT_SECRET` | 字符串 | | 用于认证的JWT密钥 |
| `DISABLE_MACHINE_LEARNING` | 布尔值 | `false` | 禁用ML功能（不推荐用于CUDA版本） |
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

- **本地驱动器**: 参考 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**: 参考 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**: 参考 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**: 使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称）。参考 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

**前提条件:**
- 带有CUDA支持的NVIDIA GPU
- 主机系统上安装了NVIDIA驱动程序
- AMD64架构（不支持ARM）

**步骤:**
1. 将我的Hass.io插件仓库 [repository] 添加到您的Hass.io实例。
2. 安装此插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件的日志，查看是否一切正常。
6. 仔细配置插件以满足您的需求，请参考官方文档进行配置。

**数据库设置:**
注意，您需要安装一个单独的postgres插件才能连接到数据库。您可以在我的仓库中安装postgres插件。
注意在启动之前更改密码；之后将无法更改

## 支持

在github上创建问题，或在 [home assistant线程](https://community.home-assistant.io/t/home-assistant-addon-immich/282108/3) 上提问

[repository]: https://github.com/alexbelgium/hassio-addons
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
