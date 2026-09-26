# Home Assistant 进程：Obsidian 同步服务器 NPM

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_npm%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_npm%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_npm%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

此进程作为 [Self-hosted LiveSync](https://github.com/vrtmrz/obsidian-livesync) 插件在 Obsidian 中的同步后端运行 CouchDB，并捆绑了 [Nginx Proxy Manager](https://nginxproxymanager.com/) 来处理 TLS。

此进程仅负责服务器端。请在 Obsidian 中安装配套插件：<https://community.obsidian.md/plugins/obsidian-livesync>

> [!IMPORTANT]
>
> - 在安装或升级此进程或 obsidian livesync 插件之前，请先备份您的库 (vault)。
> - 与其他同步解决方案不兼容（包括 iCloud 和 Obsidian Sync）。
> - 备份请使用 [Differential ZIP Backup](https://github.com/vrtmrz/diffzip)。

您的库通过 Home Assistant 在您自己的设备间进行同步。无需 Obsidian Sync 订阅，笔记将保留在您的网络上。

此版本将所有移动 Obsidian 所需的功能整合到一个进程中。NPM 处理请求并续订证书，并通过代理将HTTPS请求转发至 CouchDB。如果您尚未运行反向代理，请选择它。

| 进程 | TLS | 使用场景 |
| :--- | :--- | :--- |
| [Obsidian 同步服务器](../obsidian_syncserver_solo/README.md) | 无 | 您已经运行反向代理 |
| [Obsidian 同步服务器 SSL](../obsidian_syncserver_ssl/README.md) | CouchDB 使用您 `/ssl` 目录中的证书提供 HTTPS | 您的 Home Assistant 机器上拥有证书 |
| Obsidian 同步服务器 NPM（当前此一个） | 捆绑 Nginx Proxy Manager | 您没有代理并希望包含证书处理功能 |

请注意，此进程绑定端口 80、81 和 443。如果您已经在这些端口上运行了 Nginx Proxy Manager + Static Web Server 进程，或其他服务，则同一时间只能运行其中一个。在这种情况下，请使用纯 [Obsidian 同步服务器](../obsidian_syncserver_solo/README.md) 并将您已拥有的 NPM 添加代理主机。

## 端口

| 端口 | 用途 |
| :--- | :--- |
| 443 | HTTPS，在此处指向 Obsidian |
| 81 | Nginx Proxy Manager 管理界面 |
| 80 | HTTP，证书验证和重定向 |
| 5984 | CouchDB 直接访问，供桌面端或本地工具使用 |

## 安装

1. 将仓库 `https://github.com/alexbelgium/hassio-addons` 添加到 Home Assistant，然后安装进程。
2. 在配置部分设置密码。留空会生成一个密码并在首次启动时将其打印到日志中。
3. 启动进程并在日志中寻找 `Ready.`。
4. 打开端口 81 上的 NPM 管理界面。默认登录为用户 `admin@example.com`，密码为 `changeme`，NPM 要求您首次登录时修改这两个信息。现在修改它而不是稍后。

## 获取真实证书

端口 443 开箱即用，但使用的是移动 Obsidian 将拒绝其的自签名证书。要修复此问题：

1. 在 NPM 管理界面中，进入 SSL Certificates，然后点击 Add SSL Certificate，然后选择 Let's Encrypt。
2. 输入指向您的 Home Assistant 机器的主机名，以及您的电子邮件。
3. 如果域名没有公网 IP，勾选 Use a DNS Challenge 并选择您的 DNS 提供商。
4. 一旦证书颁发，进入 Hosts，然后 Proxy Hosts，然后 Add Proxy Host：
   - Domain Names: 您的域名
   - Scheme: `http`
   - Forward Hostname / IP: `127.0.0.1`
   - Forward Port: `5984`
   - Websockets Support: 开启（on）。没有它 LiveSync 将不会同步。
   - 在 SSL 选项卡中，选择您的证书并开启 Force SSL。

## 配置

```yaml
username: admin
password: ""
database: obsidian
log_level: info
```

`username` 和 `password` 是 LiveSync 插件使用的 CouchDB 管理员凭据，与 NPM 管理员登录分开。留空密码会在首次启动时生成并保存到 `/config/obsidian-syncserver/admin_password`。

`database` 是存储您库的 CouchDB 数据库。如果不存在，进程将创建它。

`log_level` 设置 CouchDB 日志的详细程度。

## 连接 Obsidian

从 Obsidian 的社区插件中安装 Self-hosted LiveSync。在其设置中，选择手动设置并填入：

- URI: `https://your-domain`
- 用户名和密码：上述 CouchDB 凭据
- 数据库名：`obsidian`，除非您已更改它

点击测试数据库连接以检查它，然后开启端到端加密并输入密码短语。开启后，服务器仅始终持有密文。

[DOCS.md](DOCS.md) 涵盖了故障排除内容。

## 安全

CouchDB 要求每个请求都进行身份验证，且 NPM 的管理界面也有其自己的登录，您必须首次使用时更改它。除非您已故意设置远程访问，否则请将其保留在您的局域网 (LAN) 内。

## 支持

如果此进程遇到问题（而非上游 CouchDB 或 Nginx Proxy Manager 软件），请在 [github](https://github.com/alexbelgium/hassio-addons/issues) 创建问题并标记 @ToledoEM

- Obsidian Self-hosted LiveSync 插件 → [github.com/vrtmrz/obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync)
- CouchDB 上游 → [couchdb.apache.org](https://couchdb.apache.org/)
- Nginx Proxy Manager 上游 → [github.com/NginxProxyManager/nginx-proxy-manager](https://github.com/NginxProxyManager/nginx-proxy-manager)

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
