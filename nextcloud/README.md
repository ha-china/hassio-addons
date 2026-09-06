## &#9888; 待解决议题 : [🐛 [NextCloud] 挂载的本地磁盘没有写入权限 (2025-09-23 开启)](https://github.com/alexbelgium/hassio-addons/issues/2123) 由 [@Patabugen](https://github.com/Patabugen) 提出
# Home assistant 附加组件 : Nextcloud

我利用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游更改、HA 更改以及在真实硬件上进行测试占据了大量时间（以及一些金钱）。我大约使用我 110 多个附加组件中的 5-10 个，所以我通常会安装用于测试的测试机（并购买一些我自己不使用的测试服务，如 vpn），以便调试和改进附加组件。

如果这个附加组件为您节省了时间或让您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

![Uses elasticsearch][elasticsearch-shield]

_感谢各位给我仓库点个星星！点击上方图片让它成为右上角的星星。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/nextcloud/stats.png)

## 简介

添加了各种调整和配置选项。
首次分叉版本：https://github.com/haberda/hassio_addons
此附加组件基于 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-nextcloud)。

## 配置

Webui 可访问 `<your-ip>:port`。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `additional_apps` | str | | 要安装的额外 APK 包（用逗号分隔） |
| `trusted_domains` | str | | Nextcloud 访问的受信任域名 |
| `use_own_certs` | bool | `false` | 使用自定义 SSL 证书 |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（在 `/ssl/` 中） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（在 `/ssl/` 中） |
| `OCR` | bool | `false` | 启用 Tesseract OCR 功能 |
| `OCRLANG` | str | | OCR 语言（例如，`fra,eng`） |
| `Full_Text_Search` | bool | `false` | 启用带有 Elasticsearch 的全文本搜索 |
| `elasticsearch_server` | str | | Elasticsearch 服务器地址（ip:port） |
| `enable_thumbnails` | bool | `true` | 启用缩略图生成 |
| `default_phone_region` | str | | 默认电话区域（ISO 3166-1 alpha-2） |
| `disable_updates` | bool | `false` | 禁止自动更新应用 |
| `env_memory_limit` | str | `512M` | PHP 内存限制 |
| `env_post_max_size` | str | `512M` | 最大 POST 大小 |
| `env_upload_max_filesize` | str | `512M` | 最大上传文件大小 |
| `localdisks` | str | | 要挂载的本地磁盘（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | str | | 要挂载的 SMB 共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | str | | 网络共享的 SMB 用户名 |
| `cifspassword` | str | | 网络共享的 SMB 密码 |
| `cifsdomain` | str | | 网络共享的 SMB 域 |
| `skip_permissions_check` | bool | `false` | 跳过文件权限检查 |

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

此附加组件支持挂载本地磁盘和远程 SMB 共享：

- **本地磁盘**：参见 [附加组件中的本地磁盘挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [附加组件中的远程共享挂载](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [附加组件中的运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。有关详细说明，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 自定义脚本示例

创建 `/config/addons_autoscripts/nextcloud-ocr.sh` 用于自定义初始化：

```bash
#!/usr/bin/with-contenv bashio
# shellcheck shell=bash

# 在附加组件开始时执行的自定义脚本
# 仅在初始化完成后运行

mkdir -p /scripts
if [ ! -f /app/www/public/occ ]; then
    cp /config/addons_autoscripts/"$(basename "${BASH_SOURCE}")" /scripts/ && exit 0
fi

echo "Scanning files"
sudo -u abc php /app/www/public/occ files:scan --all
echo "File scan completed!"
```

### 更改临时文件夹以避免膨胀 HA 系统的 emmc（感谢 @senna1992）

参见 : https://github.com/alexbelgium/hassio-addons/discussions/1370

### 使用 mariadb 作为主数据库（感谢 @amaciuc）

如果您在第一次运行 `webui` 时看到以下警告：

```bash
Performance warning
You chose SQLite as database.
SQLite should only be used for minimal and development instances. For production we recommend a different database backend.
If you use clients for file syncing, the use of SQLite is highly discouraged.
```

并希望克服它，请按以下步骤操作：

- 1. 安装 `mariadb` 附加组件，用一些随机信息配置它并开始它。重要的是要成功启动它，以便被 `nextcloud` 在网络中看见。
- 2. 安装 `nextcloud` 附加组件（如果您已经安装了它则重启它），查看日志直到您看到以下 `warning`：

  ```bash
  WARNING: MariaDB addon was found! It can't be configured automatically due to the way Nextcloud works, but you can configure it manually when running the web UI for the first time using those values :
  Database user : service
  Database password : Eangohyuchae6aif7saich2nies8xaivaejaNgaev6gi3yohy8ha2aexaetei6oh
  Database name : nextcloud
  Host-name : core-mariadb:3306
  ```

- 3. 返回 `mariadb` 附加组件，用上述凭据配置它并重启它。确保附加组件正在创建 `nextcloud` 数据库。
- 4. 进入 webui 并填入所有必要信息。您可以在这里查看示例：

![image](https://user-images.githubusercontent.com/19391765/207888717-50b43002-a5e2-4782-b5c9-1f582309df2b.png)

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有什么不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA 则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 进入 webui，在那里您将创建您的用户名、密码和数据库（如果使用 mariadb，信息在日志中）
1. 重新启动附加组件，以应用任何应该应用的选项

## HA 集成

见此组件 : https://www.home-assistant.io/integrations/nextcloud/

[repository]: https://github.com/alexbelgium/hassio-addons
[elasticsearch-shield]: https://img.shields.io/badge/Elasticsearch-optional-blue.svg?logo=elasticsearch
continu

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
