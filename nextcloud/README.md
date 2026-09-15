## &#9888; 待解决议题：[🐛 [NextCloud] 挂载的本地磁盘没有写入权限 (于 2025-09-23 提出)](https://github.com/alexbelgium/hassio-addons/issues/2123) by [@Patabugen](https://github.com/Patabugen)

# Home assistant 加农炮：Nextcloud

我在业余时间维护这个及其他 Home Assistant 加农炮：保持与上游变化、HA 变化同步，以及在真实硬件上进行测试需要大量时间（和一些金钱）。我使用的加农炮大约在 110 件中占了 5-10 件，所以我定期安装测试机器（并购买一些我不直接使用的测试服务，如 vpn），以便进行故障排查和改进加农炮

如果这个加农炮能为您节省时间或更容易进行设置，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 加农炮信息图

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

![Uses elasticsearch][elasticsearch-shield]

_谢谢 everyone 为我 repo 点赞！要点赞，请点击下方图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/nextcloud/stats.png)

## 关于内容

各种微调及配置文件选项的添加。
原始分支来自版本 : https://github.com/haberda/hassio_addons
该加农炮基于 [docker image](https://github.com/linuxserver/docker-nextcloud)，来自 linuxserver.io。

## 配置

Webui 位于 `<your-ip>:port`。

### 选项

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `additional_apps` | str | | 要安装的附加 APK 包（以逗号分隔） |
| `trusted_domains` | str | | Nextcloud 访问的信任域名 |
| `use_own_certs` | bool | `false` | 使用自定义 SSL 证书 |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（位于 `/ssl/`） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（位于 `/ssl/`） |
| `OCR` | bool | `false` | 启用 Tesseract OCR 功能 |
| `OCRLANG` | str | | OCR 语言（例如，`fra,eng`） |
| `Full_Text_Search` | bool | `false` | 使用 Elasticsearch 启用全文搜索 |
| `elasticsearch_server` | str | | Elasticsearch 服务器地址（ip:port） |
| `enable_thumbnails` | bool | `true` | 启用缩略图生成 |
| `default_phone_region` | str | | 默认电话区域（ISO 3166-1 alpha-2） |
| `disable_updates` | bool | `false` | 防止自动应用程序更新 |
| `env_memory_limit` | str | `512M` | PHP 内存限制 |
| `env_post_max_size` | str | `512M` | 最大 POST 大小 |
| `env_upload_max_filesize` | str | `512M` | 最大上传文件大小 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
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

### 挂载驱动器

该加农炮支持挂载本地驱动器及远程 SMB 共享：

- **本地驱动器**：参见 [在加农炮中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在加农炮中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

该加农炮通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在加农炮中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用加农炮 `env_vars` 选项传递额外的环境变量（大写或小写字母名称）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解更多细节。

### 自定义脚本示例

创建 `/config/addons_autoscripts/nextcloud-ocr.sh` 用于自定义初始化：

```bash
#!/usr/bin/with-contenv bashio
# shellcheck shell=bash

# 在加农炮启动时执行的自定义脚本
# 仅在初始化完成后运行

mkdir -p /scripts
if [ ! -f /app/www/public/occ ]; then
    cp /config/addons_autoscripts/"$(basename "${BASH_SOURCE}")" /scripts/ && exit 0
fi

echo "Scanning files"
sudo -u abc php /app/www/public/occ files:scan --all
echo "File scan completed!"
```

### 将临时文件夹更改以避免在 HA 系统上膨胀 emmc（感谢 @senna1992）

参见；https://github.com/alexbelgium/hassio-addons/discussions/1370

### 使用 mariadb 作为主要数据库（感谢 @amaciuc）

如果您在第一次运行 `webui` 时注意到以下警告：

```bash
Performance warning
You chose SQLite as database.
SQLite should only be used for minimal and development instances. For production we recommend a different database backend.
If you use clients for file syncing, the use of SQLite is highly discouraged.
```

并想要克服此问题，请按照以下步骤操作：

- 1. 安装 `mariadb` 加农炮，将其配置为一些随机信息并启动它。重要的是要成功启动它，以便 `nextcloud` 在网络中能看到它。
- 2. 安装 `nextcloud` 加农炮（或者如果已经安装，则重启它），查看日志直到您看到以下 `warning`：

  ```bash
  WARNING: MariaDB addon was found! It can't be configured automatically due to the way Nextcloud works, but you can configure it manually when running the web UI for the first time using those values :
  Database user : service
  Database password : Eangohyuchae6aif7saich2nies8xaivaejaNgaev6gi3yohy8ha2aexaetei6oh
  Database name : nextcloud
  Host-name : core-mariadb:3306
  ```

- 3. 回到 `mariadb` 加农炮，用上述凭据配置它并重启它。确保加农炮创建 `nextcloud` 数据库。
- 4. 进入 webui 并填写所有必填信息。这里您可以查看一个示例：

![image](https://user-images.githubusercontent.com/19391765/207888717-50b43002-a5e2-4782-b5c9-1f582309df2b.png)

## 安装

该加农炮的安装非常直接，并与安装任何其他 Hass.io 加农炮相比没有区别。

1. 将我的加农炮仓库添加到您的 Home assistant 实例中（在 supervisor addons 商店右上角，或者如果您已配置我的 HA 则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此加农炮。
1. 点击 `Save` 按钮存储您的配置。
1. 启动加农炮。
1. 检查加农炮的日志以查看是否一切顺利。
1. 进入 webui，在那里您将创建用户名、密码和数据库（如果使用 mariadb，信息在日志中）
1. 重启加农炮，以应用应该应用的任何选项

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
