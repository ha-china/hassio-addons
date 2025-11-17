# Apache2 Webserver Add-on for Home Assistant OS
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield] ![Supports i386 Architecture][i386-shield]
![Project Maintenance][maintenance-shield]

![Ingress Support](../_images/apache2/ingress.png)

一个轻量级的Apache2 Web服务器插件，适用于Home Assistant OS，支持可选的PHP 8和MariaDB。

此插件允许您提供静态或动态网站，运行基于PHP的应用程序，或通过Web界面暴露内部服务。提供多个版本以适应不同的需求和用例。

---

## 📋 目录

- [关于](#关于)
- [版本](#版本)
- [安装](#安装)
- [配置](#配置)
- [认证](#认证)
- [Ingress](#ingress)
- [MariaDB使用](#mariadb使用)
- [限制](#限制)
- [支持](#支持)
- [许可证](#许可证)

---

## 📖 关于

此插件为Home Assistant OS提供[Apache HTTP Server](https://httpd.apache.org/)。它支持：

- 托管静态HTML/CSS/JS网站
- 运行PHP应用程序（例如仪表板、工具）
- 可选的MariaDB集成（例如用于WordPress、phpMyAdmin）

Apache HTTP Server是一个由Apache软件基金会维护的开源Web服务器软件。

---

## 🧰 版本

| 版本                                                                                          | 功能                                                                     |
|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [完整版](https://github.com/FaserF/hassio-addons/tree/master/apache2)                              | Apache2, PHP 8.4（带常用扩展），MariaDB客户端，ffmpeg，Mosquitto |
| [精简版](https://github.com/FaserF/hassio-addons/tree/master/apache2-minimal)                   | 仅Apache2                                                                 |
| [精简版 + MariaDB](https://github.com/FaserF/hassio-addons/tree/master/apache2-minimal-mariadb) | Apache2, MariaDB客户端，带基本模块的PHP                              |

---

## 🚀 安装

1. 将仓库添加到Home Assistant：
   [![添加仓库](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)

2. 通过Supervisor安装`Apache2`插件。

3. 将您的网站文件放置在`document_root`（默认：`/share/htdocs`）。
   示例：`/share/htdocs/index.html`

4. 启动插件并通过Ingress或外部端口访问您的网站。

---

## ⚙️ 配置

```yaml
document_root: /share/htdocs               # 必填
php_ini: default                           # "default", "get_file" 或路径
default_conf: default                      # Apache默认配置
default_ssl_conf: default                  # Apache SSL配置
website_name: mydomain.local               # 如果启用ssl则必填
username: apache                           # 可选，更改文件所有权
password: mySecretPassword                 # 可选，用于内部文件访问
ssl: true                                  # 启用HTTPS
certfile: fullchain.pem                    # 如果启用ssl则必填
keyfile: privkey.pem                       # 如果启用ssl则必填
init_commands:                             # 可选的启动命令
  - apk add imagemagick
```

您可以使用`get_file`创建自己的配置文件和PHP.ini，从`/share`拉取。

### 选项：`document_root`

此选项是必需的。根据您的Home Assistant安装中根Web文件夹的位置进行更改。

注意：它必须在/share或/media文件夹中！其他文件夹对此插件不可见。

### 选项：`php_ini`

您可以选择以下选项：

default → 使用内置的PHP 8.4配置文件（推荐）

get_file → 将默认的PHP 8.4 `php.ini`复制到`/share/apache2addon_php.ini`

path/to/your/new/php.ini -> 请根据您的自定义php.ini文件的位置更改位置，例如：/share/apache2/php.ini

### 选项：`default_conf` & `default_ssl_conf`

您可以选择以下选项：

default -> 使用默认的apache2插件文件

get_config -> 获取默认的apache2插件配置文件的副本到您的/share文件夹。

path/to/your/new/apache2.conf -> 请根据您的自定义000-default.conf / 000-default-le-ssl.conf文件的位置更改位置，例如：/share/apache2/000-default.conf <br />
更多信息：<https://cwiki.apache.org/confluence/display/HTTPD/ExampleVhosts><br /> <br />
请注意，如果您使用自定义的apache2配置文件并收到任何apache2错误，我将不会提供任何支持！

### 选项：`website_name`

如果启用ssl为true，此选项是必需的。如果您不使用SSL，这里可以填任何内容，因为无关紧要。

### 选项：`username`

此选项是可选的。此用户用于访问Web文件（不是网站本身）。它将所有Web文件的所有权从"root"更改为此新所有者。

这**不**用于网站认证。如果您需要此功能，请查看[网站认证](#网站认证)

### 选项：`password`

此选项是可选的。一些自托管的网站需要认证密码才能访问容器内的文件。 #50

这**不**用于网站认证。如果您需要此功能，请查看[网站认证](#网站认证)

### 选项：`ssl`

在Web界面启用/禁用SSL（HTTPS）。

如果您需要一个自签名证书，请查看我的openssl插件：<https://github.com/FaserF/hassio-addons/tree/master/openssl>

**注意**：_文件必须存储在`/ssl/`中，这是默认的_

### 选项：`init_commands`

此选项是可选的。如果您需要一些特殊的软件包或命令，您可以使用此选项来安装/使用它们。 #124

如果您遇到任何问题，请在提交错误报告之前删除此选项！

### 配置示例

推荐的插件配置示例：

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

`username`和`password`字段用于保护`/share/apache`目录中的文件（例如配置或日志）。它们**不**用于实际托管的网页。

要保护Web内容，请使用`.htaccess`和`.htpasswd`文件。

### 示例：创建`.htpasswd`

```bash
htpasswd -c /share/htdocs/.htpasswd myuser
```

然后在您的`.htaccess`文件中像这样引用它：

```
AuthType Basic
AuthName "Restricted Content"
AuthUserFile /share/htdocs/.htpasswd
Require valid-user
```

---

## 🧩 Ingress

插件支持Ingress（通过Home Assistant UI访问）。但是请注意：

- 基本的HTML页面完美工作。
- 使用完整认证、重定向链或WebSockets的复杂应用程序可能无法在Ingress中良好工作。
- 为了最佳兼容性，建议通过本地IP和暴露端口访问。

---

## 🐬 MariaDB使用

如果您想将PHP应用程序（例如WordPress或phpMyAdmin）连接到官方MariaDB插件：

- 使用`core-mariadb`作为主机名。
- 端口：`3306`
- 用户名/密码：使用Home Assistant MariaDB凭证
- 数据库名：`homeassistant`（默认）

PHP中的示例配置：

```php
$mysqli = new mysqli("core-mariadb", "user", "pass", "homeassistant");
```

---

## ⚠️ 限制

- ✅ 仅在amd64上测试过（其他架构可能工作，但未测试）
- ⚠️ PHP支持仅在**完整版**中
- 🔒 SSL需要有效的证书在`/ssl/`
- 🌐 不建议直接暴露到互联网，而无需额外的加固
- 🧩 WordPress兼容性有限——请考虑[专门的WordPress插件](https://github.com/FaserF/hassio-addons/pull/202)

---

## 🙋 支持

如果您遇到问题或有功能请求，请在GitHub上打开一个问题：
👉 [GitHub问题](https://github.com/FaserF/hassio-addons/issues)

---

## 📝 许可证

本项目根据MIT许可证授权。

特此授予任何获得本软件及有关文档文件（“软件”）副本的人，在不限制的前提下，自由处理该软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

该软件按“原样”提供，不附带任何形式的明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论该责任是由于合同、侵权或其他行为引起的，也不论该责任是由于使用该软件或其他与此软件的使用或其他交易有关的行为引起的。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
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
