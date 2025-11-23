# Home Assistant OS 的 Apache2 Web 服务器附加组件
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]
![项目维护状态][maintenance-shield]

![入口支持](../_images/apache2/ingress.png)

这是一个为 Home Assistant OS 设计的轻量级 Apache2 Web 服务器附加组件，支持可选的 PHP 8 和 MariaDB。

此附加组件允许您提供静态或动态网站、运行基于 PHP 的应用程序，或通过 Web 界面暴露内部服务。提供多个版本以适应不同的需求和用例。

---

## 📋 目录

- [关于](#关于)
- [版本](#版本)
- [安装](#安装)
- [配置](#配置)
- [认证](#认证)
- [入口](#入口)
- [MariaDB 使用](#mariadb使用)
- [限制](#限制)
- [支持](#支持)
- [许可证](#许可证)

---

## 📖 关于

此附加组件为 Home Assistant OS 提供 [Apache HTTP 服务器](https://httpd.apache.org/)。它支持：

- 托管静态 HTML/CSS/JS 网站
- 运行 PHP 应用程序（例如仪表板、工具）
- 可选的 MariaDB 集成（例如用于 WordPress、phpMyAdmin）

Apache HTTP 服务器是由 Apache 软件基金会维护的开源 Web 服务器软件。

---

## 🧰 版本

| 版本                                                                                          | 功能                                                                     |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [完整版](https://github.com/FaserF/hassio-addons/tree/master/apache2)                              | Apache2, PHP 8.4（带常见扩展）、MariaDB 客户端、ffmpeg、Mosquitto             |
| [精简版](https://github.com/FaserF/hassio-addons/tree/master/apache2-minimal)                   | 仅 Apache2                                                                |
| [精简版 + MariaDB](https://github.com/FaserF/hassio-addons/tree/master/apache2-minimal-mariadb) | Apache2, MariaDB 客户端、带基本模块的 PHP                                |

---

## 🚀 安装

1. 将仓库添加到 Home Assistant：
   [![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)

2. 通过 Supervisor 安装 `Apache2` 附加组件。

3. 将您的网站文件放置在 `document_root`（默认：`/share/htdocs`）。
   示例：`/share/htdocs/index.html`

4. 启动附加组件并通过 Ingress 或外部端口访问您的网站。

---

## ⚙️ 配置

```yaml
document_root: /share/htdocs               # 必填
php_ini: default                           # "default", "get_file" 或路径
default_conf: default                      # Apache 默认配置
default_ssl_conf: default                  # Apache SSL 配置
website_name: mydomain.local               # 如启用 ssl 则必填
username: apache                           # 可选，更改文件所有权
password: mySecretPassword                 # 可选，用于内部文件访问
ssl: true                                  # 启用 HTTPS
certfile: fullchain.pem                    # 如启用 ssl 则必填
keyfile: privkey.pem                       # 如启用 ssl 则必填
init_commands:                             # 可选启动命令
  - apk add imagemagick
```

您可以使用 `get_file` 从 `/share` 拉取自己的配置文件和 PHP.ini 创建。

### 选项：`document_root`

此选项是必需的。根据您的 Home Assistant 安装中根 Web 文件夹的位置进行更改。

注意：它必须在 /share 或 /media 文件夹中！其他文件夹对此附加组件不可见。

### 选项：`php_ini`

您可以选择以下选项：

default → 使用内置的 PHP 8.4 配置文件（推荐）

get_file → 将默认的 PHP 8.4 `php.ini` 复制到 `/share/apache2addon_php.ini`

path/to/your/new/php.ini -> 请根据您的自定义 php.ini 文件位置进行更改，例如：/share/apache2/php.ini

### 选项：`default_conf` & `default_ssl_conf`

您可以选择以下选项：

default -> 使用默认的 apache2 附加组件文件

get_config -> 从默认的 apache2 附加组件配置文件中获取副本到您的 /share 文件夹。

path/to/your/new/apache2.conf -> 请根据您的自定义 000-default.conf / 000-default-le-ssl.conf 文件位置进行更改，例如：/share/apache2/000-default.conf <br />
更多信息：<https://cwiki.apache.org/confluence/display/HTTPD/ExampleVhosts><br /> <br />
请注意，如果您使用自定义的 apache2 配置文件并收到任何 apache2 错误，我将不会提供任何支持！

### 选项：`website_name`

如果您启用 ssl 为 true，则此选项是必需的。如果您不使用 SSL，这里可以填任何内容，因为不重要。

### 选项：`username`

此选项是可选的。此用户用于访问 Web 文件（不是网站本身）。它将所有 Web 文件的所有者从 "root" 更改为此新所有者。

这不是用于网站认证的。如果您需要此功能，请查看 [网站认证](#网站认证)

### 选项：`password`

此选项是可选的。一些自托管网站需要认证密码才能访问 Docker 图像内的文件。#50

这不是用于网站认证的。如果您需要此功能，请查看 [网站认证](#网站认证)

### 选项：`ssl`

启用/禁用 Web 界面的 SSL (HTTPS)。

如果您需要一个自签名证书，请查看我的 openssl 附加组件：<https://github.com/FaserF/hassio-addons/tree/master/openssl>

**注意**：_文件必须存储在 `/ssl/`，这是默认的_

### 选项：`init_commands`

此选项是可选的。如果您需要一些特殊的软件包或命令，您可以使用此选项来安装/使用它们。#124

如果您遇到任何问题，请在提交错误报告之前删除此选项！

### 配置示例

推荐示例附加组件配置：

```yaml
document_root: /share/htdocs
php_ini: default
default_conf: default
default_ssl_conf: default
website_name: mywebsite.com
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
```

---

## 🔐 认证

`username` 和 `password` 字段用于保护 `/share/apache` 目录中的文件（例如配置或日志）。它们**不是**用于实际托管的网页。

要保护 Web 内容，请使用 `.htaccess` 和 `.htpasswd` 文件。

### 示例：创建 `.htpasswd`

```bash
htpasswd -c /share/htdocs/.htpasswd myuser
```

然后在您的 `.htaccess` 文件中这样引用它：

```
AuthType Basic
AuthName "Restricted Content"
AuthUserFile /share/htdocs/.htpasswd
Require valid-user
```

---

## 🧩 入口

附加组件支持入口（通过 Home Assistant UI 访问）。但是请注意：

- 基本的 HTML 页面工作得很好。
- 使用完整认证、重定向链或 WebSocket 的复杂应用程序可能无法在入口中很好地工作。
- 为获得最佳兼容性，建议通过本地 IP 和暴露端口访问。

---

## 🐬 MariaDB 使用

如果您想将 PHP 应用程序（例如 WordPress 或 phpMyAdmin）连接到官方 MariaDB 附加组件：

- 主机名：`core-mariadb`
- 端口：`3306`
- 用户名/密码：使用 Home Assistant MariaDB 凭据
- 数据库名：`homeassistant`（默认）

PHP 中的示例配置：

```php
$mysqli = new mysqli("core-mariadb", "user", "pass", "homeassistant");
```

---

## ⚠️ 限制

- ✅ 仅在 amd64 上测试过（其他架构可能工作，但未经测试）
- ⚠️ PHP 支持仅在 **完整版** 中
- 🔒 SSL 需要在 `/ssl/` 中有有效的证书
- 🌐 不建议直接暴露到互联网，除非进行额外的加固
- 🧩 WordPress 兼容性有限——请考虑 [专门的 WordPress 附加组件](https://github.com/FaserF/hassio-addons/pull/202)

---

## 🙋 支持

如果您遇到问题或有功能请求，请在 GitHub 上打开一个问题：
👉 [GitHub 问题](https://github.com/FaserF/hassio-addons/issues)

---

## 📝 许可证

本项目根据 MIT 许可证授权。

特此授予任何人免费获得本软件及其相关文档文件（“软件”）的副本的权限，可以在软件上不受限制地进行处理，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件的副本，并允许向获得软件的人提供此类许可，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论是因合同、侵权或其他行为引起的，也不论此类责任是由于软件或其使用或其他交易引起的。
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
