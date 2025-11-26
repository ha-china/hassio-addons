## 🚨 开启问题 : [🐛 [NextCloud] 挂载的本地磁盘没有写入权限 (于 2025-09-23 开启)](https://github.com/alexbelgium/hassio-addons/issues/2123) 由 [@Patabugen](https://github.com/Patabugen)
# Home assistant 插件：Nextcloud

## 💖 支持开发

我在业余时间维护这个和其他 Home Assistant 插件：跟上上游的变化、HA 的变化，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过 110 个插件中的 5-10 个插件，我安装了测试机器（和一些我本人不使用的测试服务，如 VPN）来调试和改进插件。

如果这个插件为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![请给我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

![使用 elasticsearch][elasticsearch-shield]

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它就会在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/nextcloud/stats.png)

## 关于

各种调整和配置选项的添加。
初始从版本 : https://github.com/haberda/hassio_addons
这个插件基于 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-nextcloud)。

## 配置

Web UI 可以在 `<你的 IP>:端口` 找到。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `PGID` | 整数 | `1000` | 文件权限的组 ID |
| `PUID` | 整数 | `1000` | 文件权限的用户 ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `additional_apps` | 字符串 | | 要安装的额外 APK 包（用逗号分隔） |
| `trusted_domains` | 字符串 | | 用于 Nextcloud 访问的信任域 |
| `use_own_certs` | 布尔值 | `false` | 使用自定义 SSL 证书 |
| `certfile` | 字符串 | `fullchain.pem` | SSL 证书文件（在 `/ssl/` 中） |
| `keyfile` | 字符串 | `privkey.pem` | SSL 私有密钥文件（在 `/ssl/` 中） |
| `OCR` | 布尔值 | `false` | 启用 Tesseract OCR 功能 |
| `OCRLANG` | 字符串 | | OCR 语言（例如，`fra,eng`） |
| `Full_Text_Search` | 布尔值 | `false` | 使用 Elasticsearch 启用全文搜索 |
| `elasticsearch_server` | 字符串 | | Elasticsearch 服务器地址（ip:端口） |
| `enable_thumbnails` | 布尔值 | `true` | 启用缩略图生成 |
| `default_phone_region` | 字符串 | | 默认电话区域（ISO 3166-1 alpha-2） |
| `disable_updates` | 布尔值 | `false` | 防止自动应用更新 |
| `env_memory_limit` | 字符串 | `512M` | PHP 内存限制 |
| `env_post_max_size` | 字符串 | `512M` | 最大 POST 大小 |
| `env_upload_max_filesize` | 字符串 | `512M` | 最大上传文件大小 |
| `localdisks` | 字符串 | | 要挂载的本地磁盘（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB 共享的网络用户名 |
| `cifspassword` | 字符串 | | SMB 共享的网络密码 |
| `cifsdomain` | 字符串 | | SMB 共享的网络域 |
| `skip_permissions_check` | 布尔值 | `false` | 跳过文件权限检查 |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
TZ: "Europe/London"
additional_apps: "vim,curl"
trusted_domains: "nextcloud.example.com,192.168.1.100"
use_own_certs: true
certfile: "fullchain.pem"
keyfile: "privkey.pem"
OCR: true
OCRLANG: "eng,fra,deu"
enable_thumbnails: true
env_memory_limit: "1024M"
localdisks: "sda1,sdb1"
networkdisks: "//192.168.1.100/nextcloud"
cifsusername: "nextcloud_user"
cifspassword: "password123"
```

### 挂载磁盘

这个插件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：查看 [在插件中挂载本地磁盘](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：查看 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

这个插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：查看 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项来传递额外的环境变量（名称可以是全大写或全小写）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

### 自定义脚本示例

创建 `/config/addons_autoscripts/nextcloud-ocr.sh` 进行自定义初始化：

```bash
#!/usr/bin/with-contenv bashio
# shellcheck shell=bash

# 在插件启动时执行的自定义脚本
# 仅在初始化完成后执行

mkdir -p /scripts
if [ ! -f /app/www/public/occ ]; then
    cp /config/addons_autoscripts/"$(basename "${BASH_SOURCE}")" /scripts/ && exit 0
fi

echo "扫描文件"
sudo -u abc php /app/www/public/occ files:scan --all
echo "文件扫描完成！"
```

### 将临时文件夹更改为避免 HA 系统上 emmc 膨胀（感谢 @senna1992）

查看 : https://github.com/alexbelgium/hassio-addons/discussions/1370

### 使用 mariadb 作为主数据库（感谢 @amaciuc）

如果你在第一次运行 `webui` 时注意到以下警告：

```bash
性能警告
你选择了 SQLite 作为数据库。
SQLite 只应用于最小和开发实例。对于生产环境，我们推荐不同的数据库后端。
如果你使用文件同步客户端，强烈不建议使用 SQLite。
```

并且你想克服这个问题，请按照以下步骤操作：

- 1. 安装 `mariadb` 插件，用一些随机信息配置它并启动它。成功启动它很重要，这样 `nextcloud` 才能在网络中看到它。
- 2. 安装 `nextcloud` 插件（如果你已经安装了，请重启它），查看日志直到你注意到以下警告：

  ```bash
  警告：mariadb 插件被发现了！由于 Nextcloud 的工作方式，它无法自动配置，但你可以在第一次运行 web UI 时使用这些值：
  数据库用户：service
  数据库密码：Eangohyuchae6aif7saich2nies8xaivaejaNgaev6gi3yohy8ha2aexaetei6oh
  数据库名称：nextcloud
  主机名：core-mariadb:3306
  ```

- 3. 回到 `mariadb` 插件，用上述凭据配置它并重启它。确保插件正在创建 `nextcloud` 数据库。
- 4. 进入 web UI 并填写所有必要信息。这里你可以查看一个示例：

![image](https://user-images.githubusercontent.com/19391765/207888717-50b43002-a5e2-4782-b5c9-1f582309df2b.png)

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮来存储您的配置。
1. 启动插件。
1. 查看插件的日志，看看是否一切正常。
1. 进入 web UI，您将创建您的用户名、密码和数据库（如果使用 mariadb，信息在日志中）
1. 重启插件，以应用任何应该应用的选项

## HA 集成

查看这个组件 : https://www.home-assistant.io/integrations/nextcloud/

[repository]: https://github.com/alexbelgium/hassio-addons
[elasticsearch-shield]: https://img.shields.io/badge/Elasticsearch-optional-blue.svg?logo=elasticsearch

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
