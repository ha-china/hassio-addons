## &#9888; 挂起的问题：[🐛 [NextCloud] 挂载的本地磁盘没有写入权限 (2025-09-23 打开)](https://github.com/alexbelgium/hassio-addons/issues/2123) 由 [@Patabugen](https://github.com/Patabugen) 发起
# Home assistant 附加组件：Nextcloud

我有空余时间维护 Home Assistant 附加组件及其他功能：跟进上游更改、HA 更改，并在真实硬件上进行测试需要大量时间（以及一些金钱）。我使用的附加组件大约有 5-10 个，所以我定期安装测试机器（并购买一些我自己不使用的测试服务，例如 vpn），以用于故障排除和改进附加组件。

如果这个附加组件为您节省了时间或让您的设置变得更容易，我将不胜感激地感谢您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐款][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![ ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

![使用 elasticsearch][elasticsearch-shield]

_感谢所有为我仓库星标的人！要给它星标，请点击下方的图片，然后它将被置于右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标管理员仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载曲线图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/nextcloud/stats.png)

## 简介

包含各种调整和技术配置选项的添加。
初始 fork 来自版本 : https://github.com/haberda/hassio_addons
此附加组件基于 [docker 镜像](https://github.com/linuxserver/docker-nextcloud)（来自 linuxserver.io）。

## 配置

Webui 可在 `<your-ip>:port` 访问。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `additional_apps` | str | | 要安装的额外 APK 包（逗号分隔） |
| `trusted_domains` | str | | Nextcloud 访问的可信域 |
| `use_own_certs` | bool | `false` | 使用自定义 SSL 证书 |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（在 `/ssl/` 中） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（在 `/ssl/` 中） |
| `OCR` | bool | `false` | 启用 Tesseract OCR 功能 |
| `OCRLANG` | str | | OCR 语言（例如，`fra,eng`） |
| `Full_Text_Search` | bool | `false` | 启用带有 Elasticsearch 的全文搜索 |
| `elasticsearch_server` | str | | Elasticsearch 服务器地址 (ip:port) |
| `enable_thumbnails` | bool | `true` | 启用缩略图生成 |
| `default_phone_region` | str | | 默认电话区号（ISO 3166-1 alpha-2） |
| `disable_updates` | bool | `false` | 防止自动应用更新 |
| `env_memory_limit` | str | `512M` | PHP 内存限制 |
| `env_post_max_size` | str | `512M` | 最大 POST 大小 |
| `env_upload_max_filesize` | str | `512M` | 最大上传文件大小 |
| `localdisks` | str | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`）。要在驱动器后添加文件夹仅挂载该文件夹，例如 `MYNAS/public` 仅挂载该文件夹，路径为 `/mnt/MYNAS/public`。文件夹挂载需要 2026-09-19 之后发布的附加组件版本。 |
| `networkdisks` | str | | 要挂载的网络 SMB 共享（例如，`//SERVER/SHARE`） |
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

此附加组件支持挂载本地驱动器来自网络 SMB 共享：

- **本地驱动器**：参见 [附加组件中的挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **网络共享**：参见 [附加组件中的挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此附加组件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [附加组件中的运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外的环境变量（大写或小写名称）。详情参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

### 自定义脚本示例

为自定义初始化创建 `/config/addons_autoscripts/nextcloud-ocr.sh`：

```bash
#!/usr/bin/with-contenv bashio
# shellcheck shell=bash

# 附加组件启动时执行的自定义脚本
# 仅在初始化完成后运行

mkdir -p /scripts
if [ ! -f /app/www/public/occ ]; then
    cp /config/addons_autoscripts/"$(basename "${BASH_SOURCE}")" /scripts/ && exit 0
fi

echo "正在扫描文件"
sudo -u abc php /app/www/public/occ files:scan --all
echo "文件扫描完成！"
```

### 更改临时文件夹以避免在 HA 系统上占用过多 emmc 空间（感谢 @senna1992）

参见 ; https://github.com/alexbelgium/hassio-addons/discussions/1370

### 使用 mariadb 作为主要数据库（感谢 @amaciuc）

如果您在首次运行 `webui` 时注意到以下警告消息：

```bash
性能警告
您选择了 SQLite 作为数据库。
SQLite 仅适用于精简和开发实例。对于生产环境，我们建议使用不同的数据库后端。
如果您使用客户端进行文件同步，强烈建议使用 SQLite。
```

并希望克服它，请按照以下步骤操作：

- 1. 安装 `mariadb` 附加组件，将其配置为一些随机信息并启动它。重要的是成功启动它，以便 `nextcloud` 能够在网络上看到它。
- 2. 安装 `nextcloud` 附加组件（或者如果您已经安装了，请重启它），观察日志直到您看到以下 `warning`：

  ```bash
  警告：发现 MariaDB 附加组件！由于 Nextcloud 的工作方式，它无法自动配置，但您可以在首次运行 web UI 时手动配置，使用以下值：
  数据库用户 : service
  数据库密码 : Eangohyuchae6aif7saich2nies8xaivaejaNgaev6gi3yohy8ha2aexaetei6oh
  数据库名称 : nextcloud
  主机名称 : core-mariadb:3306
  ```

- 3. 返回 `mariadb` 附加组件，使用上述凭据配置它并重启它。确保附加组件正在创建 `nextcloud` 数据库。
- 4. 进入 webui 并填写所有所需信息。您可以在此处查看示例：

![image](https://user-images.githubusercontent.com/19391765/207888717-50b43002-a5e2-4782-b5c9-1f582309df2b.png)

## 安装

此附加组件的安装非常直接，与安装任何其他 Hass.io 附加组件不同。

1. 将我的附加组件仓库添加到 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了我的 HA，则点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 进入 webui，您将创建您的用户名、密码和数据库（如果使用 mariadb，则详细信息在日志中）。
1. 重启附加组件，以应用任何应该应用的选项

## HA 集成

查看此组件：https://www.home-assistant.io/integrations/nextcloud/

[repository]: https://github.com/alexbelgium/hassio-addons
[elasticsearch-shield]: https://img.shields.io/badge/Elasticsearch-optional-blue.svg?logo=elasticsearch
contin

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
