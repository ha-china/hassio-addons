## &#9888; Open Issue : [🐛 [NextCloud] Mounted localdisk does not have write permissions (opened 2025-09-23)](https://github.com/alexbelgium/hassio-addons/issues/2123) by [@Patabugen](https://github.com/Patabugen)
# Home assistant add-on: Nextcloud

我利用业余时间维护这个及其他Home Assistant插件：跟进上游变更、HA变更，并在真实硬件上测试，这需要大量时间（和一些金钱）。我大约使用我超过110个插件中的5-10个非常频繁，因此我安装了测试机器（并购买了一些我本人不使用的测试服务，如VPN）来排错和改进插件。

如果这个插件为您节省了时间或简化了设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnextcloud%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

![使用elasticsearch][elasticsearch-shield]

_感谢所有星标我的仓库！要星标它，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/nextcloud/stats.png)

## 关于

各种调整和配置选项的添加。
初始分叉自版本 : https://github.com/haberda/hassio_addons
此插件基于linuxserver.io的[docker镜像](https://github.com/linuxserver/docker-nextcloud)。

## 配置

Webui位于 `<你的IP>:端口`。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `PGID` | 整数 | `1000` | 文件权限的组ID |
| `PUID` | 整数 | `1000` | 文件权限的用户ID |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `additional_apps` | 字符串 | | 要安装的附加APK包（逗号分隔） |
| `trusted_domains` | 字符串 | | 用于Nextcloud访问的受信任域名 |
| `use_own_certs` | 布尔值 | `false` | 使用自定义SSL证书 |
| `certfile` | 字符串 | `fullchain.pem` | SSL证书文件（位于`/ssl/`） |
| `keyfile` | 字符串 | `privkey.pem` | SSL私钥文件（位于`/ssl/`） |
| `OCR` | 布尔值 | `false` | 启用Tesseract OCR功能 |
| `OCRLANG` | 字符串 | | OCR语言（例如，`fra,eng`） |
| `Full_Text_Search` | 布尔值 | `false` | 使用Elasticsearch启用全文搜索 |
| `elasticsearch_server` | 字符串 | | Elasticsearch服务器地址（ip:端口） |
| `enable_thumbnails` | 布尔值 | `true` | 启用缩略图生成 |
| `default_phone_region` | 字符串 | | 默认手机区域（ISO 3166-1 alpha-2） |
| `disable_updates` | 布尔值 | `false` | 防止自动应用更新 |
| `env_memory_limit` | 字符串 | `512M` | PHP内存限制 |
| `env_post_max_size` | 字符串 | `512M` | 最大POST大小 |
| `env_upload_max_filesize` | 字符串 | `512M` | 最大上传文件大小 |
| `localdisks` | 字符串 | | 要挂载的本地驱动器（例如，`sda1,sdb1,MYNAS`） |
| `networkdisks` | 字符串 | | 要挂载的SMB共享（例如，`//SERVER/SHARE`） |
| `cifsusername` | 字符串 | | SMB网络共享的用户名 |
| `cifspassword` | 字符串 | | SMB网络共享的密码 |
| `cifsdomain` | 字符串 | | SMB网络共享的域名 |
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

### 挂载驱动器

此插件支持挂载本地驱动器和远程SMB共享：

- **本地驱动器**：参见 [在插件中挂载本地驱动器](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-Local-Drives-in-Addons)
- **远程共享**：参见 [在插件中挂载远程共享](https://github.com/alexbelgium/hassio-addons/wiki/Mounting-remote-shares-in-Addons)

### 自定义脚本和环境变量

此插件通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用插件的`env_vars`选项传递额外的环境变量（大小写名称）。参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

### 自定义脚本示例

创建`/config/addons_autoscripts/nextcloud-ocr.sh`进行自定义初始化：

```bash
#!/usr/bin/with-contenv bashio
# shellcheck shell=bash

# 在插件启动时执行的自定义脚本
# 仅在初始化完成后执行

mkdir -p /scripts
if [ ! -f /app/www/public/occ ]; then
    cp /config/addons_autoscripts/"$(basename "${BASH_SOURCE}")" /scripts/ && exit 0
fi

echo "Scanning files"
sudo -u abc php /app/www/public/occ files:scan --all
echo "File scan completed!"
```

### 将临时文件夹更改为避免在HA系统上使emmc膨胀（感谢 @senna1992）

参见 : https://github.com/alexbelgium/hassio-addons/discussions/1370

### 使用mariadb作为主数据库（感谢 @amaciuc）

如果您在第一次运行`webui`时注意到以下警告：

```bash
性能警告
您选择了SQLite作为数据库。
SQLite仅应用于最小和开发实例。对于生产环境，我们推荐不同的数据库后端。
如果您使用文件同步客户端，强烈不建议使用SQLite。
```

并且您想要克服这个问题，请按照以下步骤操作：

- 1. 安装`mariadb`插件，使用一些随机信息进行配置并启动它。成功启动非常重要，以便`nextcloud`在网络上可以看到它。
- 2. 安装`nextcloud`插件（如果您已经安装，请重启它），查看日志直到您注意到以下警告：

  ```bash
  WARNING: MariaDB插件被发现！由于Nextcloud的工作方式，它无法自动配置，但您可以在第一次运行Web UI时使用这些值手动配置它：
  数据库用户 : service
  数据库密码 : Eangohyuchae6aif7saich2nies8xaivaejaNgaev6gi3yohy8ha2aexaetei6oh
  数据库名称 : nextcloud
  主机名 : core-mariadb:3306
  ```

- 3. 返回`mariadb`插件，使用上述凭证进行配置并重启它。确保插件正在创建`nextcloud`数据库。
- 4. 进入Web UI并填写所有必要信息。这里您可以查看一个示例：

![image](https://user-images.githubusercontent.com/19391765/207888717-50b43002-a5e2-4782-b5c9-1f582309df2b.png)

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有不同。

1. [添加我的Hass.io插件仓库][repository]到您的Hass.io实例。
1. 安装此插件。
1. 点击“保存”按钮以保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 进入Web UI，在那里您将创建您的用户名、密码和数据库（如果使用mariadb，信息在日志中）
1. 重启插件，以应用任何应该应用的选项

## HA集成

参见此组件 : https://www.home-assistant.io/integrations/nextcloud/

[repository]: https://github.com/alexbelgium/hassio-addons
[elasticsearch-shield]: https://img.shields.io/badge/Elasticsearch-optional-blue.svg?logo=elasticsearch

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
