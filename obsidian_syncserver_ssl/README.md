# Home Assistant 附加组件：Obsidian Sync Server SSL

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_ssl%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_ssl%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_ssl%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

该附加组件在 Home Assistant 中运行，作为 [Self-hosted LiveSync](https://github.com/vrtmrz/obsidian-livesync) 插件（用于 Obsidian）的同步后端服务器，并使用您已有的证书提供 HTTPS 服务。

此附加组件仅包含服务器端。请在 Obsidian 中安装配套插件：<https://community.obsidian.md/plugins/obsidian-livesync>

> [!IMPORTANT]
>
> - 在安装或升级此附加组件或 Obsidian Livesync 插件之前，请务必备份您的数据仓库（Vault）。
> - 与其他同步方案不兼容（包括 iCloud 和 Obsidian Sync）。
> - 备份请使用 [Differential ZIP Backup](https://github.com/vrtmrz/diffzip)。

您的数据仓库将通过 Home Assistant 在您自己的设备之间同步。无需Obsidian Sync 订阅，笔记亦保留在您的网络上。

此版本使用位于 `/ssl` 目录的证书，在 6984 端口提供 HTTPS 服务，因此移动版的 Obsidian 无需单独的反向代理即可进行同步（[在 Home Assistant 上轻松添加](https://www.home-assistant.io/blog/2017/09/27/effortless-encryption-with-lets-encrypt-and-duckdns/)）。

| 附加组件 | TLS | 适用场景 |
| :--- | :--- | :--- |
| [Obsidian Sync Server](../obsidian_syncserver_solo/README.md) | 无 | 您已运行反向代理 |
| Obsidian Sync Server SSL（本款） | CouchDB 使用 `/ssl` 中的您的证书提供 HTTPS | 您的 Home Assistant 机器上已有证书 |
| [Obsidian Sync Server NPM](../obsidian_syncserver_npm/README.md) | 捆绑的 Nginx Proxy Manager | 您没有代理，且希望包含证书管理功能 |

## 安装前需要

在 Home Assistant 机器上的 `/ssl` 目录中包含证书和私钥。Let's Encrypt 和 DuckDNS 附加组件都会放置它们。本附加组件仅读取这些文件，永不请求或刷新任何内容。

自签名证书通常无法满足移动端 Obsidian 的要求，因为它需要一个它已信任的证书。

## 安装

1. 向 Home Assistant 添加仓库 `https://github.com/alexbelgium/hassio-addons`，然后安装附加组件。
2. 在配置部分设置密码。留空将自动生成一个密码，并在首次启动时打印到日志中。
3. 检查 `certfile` 和 `keyfile` 是否与 `/ssl` 目录中存在的文件名匹配。
4. 启动附加组件。日志应显示"TLS enabled on port 6984"，随后显示"Ready."。

## 配置

```yaml
username: admin
password: ""
database: obsidian
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
log_level: info
```

`username` 和 `password` 是 LiveSync 插件使用的 CouchDB 管理员凭据。空密码将在首次启动时生成并保存到 `/config/obsidian-syncserver/admin_password`。

`database` 是存储您数据仓库的 CouchDB 数据库。如果不存在，附加组件将创建它。

`ssl` 用于开启或关闭 6984 端口的 HTTPS。如果关闭，则仅提供 HTTP，此时移动端同步将无法工作。

`certfile` 和 `keyfile` 是 `/ssl` 目录内的文件名。

`log_level` 设置 CouchDB 日志的详细程度。

## 证书检查

损坏的证书在客户端显示为无解释的连接失败，这非常难以调试。因此，附加组件在启动前会检查证书。如果文件缺失、无法读取、格式无效的 PEM、已过期或与私钥不匹配，它将拒绝运行。无论哪种情况，日志中都会说明。

在启动顺利时，它还会打印证书覆盖的域名主机名以及到期日期。

Obsidian 必须通过证书覆盖的名称到达服务器。如果证书仅列出 DNS 名称，而您通过 IP 地址连接将失败。

## 连接 Obsidian

从 Obsidian 社区插件中安装 Self-hosted LiveSync。在其设置中，选择“手动设置”并填入以下内容：

- URI: `https://<证书上的主机名>:6984`
- 用户名和密码：您上面配置的凭据
- 数据库名称：`obsidian`，除非您更改过它

点击“测试数据库连接”以检查连接，然后开启端到端加密，并提供一个 passphrase。开启此项后，服务器仅持有密文。

[DOCS.md](DOCS.md) 涵盖故障排除内容。

## 安全性

此处 CouchDB 要求对所有请求进行身份验证。除非您特意设置了远程访问，否则请仅在您的局域网（LAN）中使用。

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题报告，并标记 @ToledoEM

- Obsidian Self-hosted LiveSync 插件 → [github.com/vrtmrz/obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync)
- CouchDB 上游项目 → [couchdb.apache.org](https://couchdb.apache.org/)

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
