# Home Assistant 插件：Obsidian 同步服务器 SSL

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_ssl%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_ssl%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_ssl%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库%20检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

这是一个用于 [自我托管的 LiveSync](https://github.com/vrtmrz/obsidian-livesync) 插件（用于 Obsidian）的 CouchDB 同步后端服务，可让您使用现有的证书提供 HTTPS 服务。

此插件仅包含服务器端。请在 Obsidian 中安装配套插件：<https://community.obsidian.md/plugins/obsidian-livesync>

> [!IMPORTANT]
>
> - 安装或升级此插件或 obsidian livesync 插件之前，请先备份您的存档（vault）。
> - 不与其他同步解决方案（包括 iCloud 和 Obsidian Sync）兼容。
> - 备份请使用 [差分 ZIP 备份](https://github.com/vrtmrz/diffzip)。

您的存档将通过 Home Assistant 在您自己的设备间同步。无需 Obsidian Sync 订阅，笔记将保留在您的网络内。

本版本使用 `/ssl` 中的证书在 6984 端口提供 HTTPS，因此移动端 Obsidian 无需额外的反向代理即可同步（[易于在 HA 中添加](https://www.home-assistant.io/blog/2017/09/27/effortless-encryption-with-lets-encrypt-and-duckdns/)）。

| 插件 | TLS | 适用场景 |
| :--- | :--- | :--- |
| [Obsidian 同步服务器](../obsidian_syncserver_solo/README.md) | 无 | 您已运行反向代理 |
| Obsidian 同步服务器 SSL (本插件) | CouchDB 使用 `/ssl` 中的证书提供 HTTPS | 您在家 Host Assistant 机器上拥有证书 |
| [Obsidian 同步服务器 NPM](../obsidian_syncserver_npm/README.md) | 包含 Nginx Proxy Manager | 您没有代理，且希望包含证书处理功能 |

## 安装前需要什么

家在 Host Assistant 机器上的 `/ssl` 目录中需要一个证书和私钥。Let's Encrypt 和 DuckDNS 插件会将它们放置在此处。此插件仅读取它们，绝不会请求或续期任何内容。

自签名证书通常无法满足移动端 Obsidian，因为它需要一个它已信任的证书。

## 安装

1. 将仓库 `https://github.com/alexbelgium/hassio-addons` 添加到 Home Assistant，然后安装插件。
2. 在配置下设置密码。留空会自动生成一个并在首次启动时打印到日志中。
3. 检查 `certfile` 和 `keyfile` 是否与 `/ssl` 目录中已有的文件名匹配。
4. 启动插件。日志应显示 `在 6984 端口启用了 TLS` 然后是 `Ready.`。

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

`username` 和 `password` 是 LiveSync 插件使用的 CouchDB 管理员凭据。首次启动时若密码为空，会生成一个并保存到 `/config/obsidian-syncserver/admin_password`。

`database` 是存储您存档的 CouchDB 数据库。如果不存在，插件会自动创建它。

`ssl` 在或关闭 6984 端口上的 HTTPS。如果关闭，您将仅获得 HTTP，且移动端同步将无法工作。

`certfile` 和 `keyfile` 是 `/ssl` 目录内的文件名。

`log_level` 设置 CouchDB 日志的 verbosity（详细程度）。

## 证书检查

损坏的证书在客户端上会显示为无法解释的连接失败，这很难调试。因此，插件在启动前会检查证书，如果文件缺失、无法读取、非有效的 PEM 格式、已过期或与私钥不匹配，则会拒绝运行。无论哪种情况，日志中都会说明。

在正常启动时，它会打印证书覆盖的域名和过期日期。

Obsidian 必须通过证书覆盖的名称接入服务器。如果证书仅列出了 DNS 名称，而通过 IP 地址连接将会失败。

## 连接 Obsidian

从 Obsidian 的动态插件中安装自我托管 LiveSync。在其设置中，选择手动设置并填写：

- URI: `https://<证书上的主机名>:6984`
- 用户名和密码：您上面设置的内容
- 数据库名称：`obsidian`，除非您更改了它

点击“测试数据库连接”以检查，然后开启端到端加密并设置密码短语。打开后，服务器仅存储密文。

[DOCS.md](DOCS.md) 包含故障排除内容。

## 安全

此处的 CouchDB 要求每个请求都进行身份验证。除非您有意设置了远程访问，否则请始终在您的局域网内使用此功能。

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题，并标记 @ToledoEM

- Obsidian 自我托管 LiveSync 插件 → [github.com/vrtmrz/obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync)
- CouchDB 上游 → [couchdb.apache.org](https://couchdb.apache.org/)

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
