# Home Assistant 插件：Obsidian 同步服务器

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_solo%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_solo%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_solo%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

在 Obsidian 的 [Self-hosted LiveSync](https://github.com/vrtmrz/obsidian-livesync) 插件中，将 CouchDB 作为同步后端运行。

此插件仅包含服务器端。请在 Obsidian 中安装配套插件：<https://community.obsidian.md/plugins/obsidian-livesync>

> [!IMPORTANT]
>
> - 在安装或升级此插件或 obsidian livesync 插件之前，请备份您的馆藏。
> - 与其他同步解决方案不兼容（包括 iCloud 和 Obsidian Sync）。
> - 用于备份，请使用 [Differential ZIP Backup](https://github.com/vrtmrz/diffzip)。

您的馆藏通过 Home Assistant 在您自己的设备之间同步。无需 Obsidian Sync 订阅，且笔记将保留在网络中。

此插件使用标准 HTTP 通信。桌面版 Obsidian 可以正常工作。移动版 Obsidian 不能，因为它坚持要求有效的 TLS 证书 ([在 Home Assistant 上轻松添加](https://www.home-assistant.io/blog/2017/09/27/effortless-encryption-with-lets-encrypt-and-duckdns/))。要同步手机或平板电脑，您需要在此插件前面部署反向代理，或使用以下版本之一：

| 插件 | TLS 支持 | 适用场景 |
| :--- | :--- | :--- |
| Obsidian 同步服务器（当前版本） | 无 | 您已部署反向代理 |
| [Obsidian 同步服务器 SSL](../obsidian_syncserver_ssl/README.md) | CouchDB 从您的 `/ssl` 目录中的证书提供 HTTPS | Home Assistant 机器上有证书 |
| [Obsidian 同步服务器 NPM](../obsidian_syncserver_npm/README.md) | 内置的 Nginx Proxy Manager | 没有代理且希望集成证书管理 |

## 安装

1. 将仓库 `https://github.com/alexbelgium/hassio-addons` 添加到 Home Assistant，然后安装插件。
2. 在配置下设置密码。保持空白将在首次启动时生成一个密码并打印到日志中。
3. 启动插件，并在日志中查找 `Ready.`。

## 配置

```yaml
username: admin
password: ""
database: obsidian
log_level: info
```

`username` 和 `password` 是 LiveSync 插件使用的 CouchDB 管理员凭据。首次启动时将生成空白密码并保存在 `/config/obsidian-syncserver/admin_password`。

`database` 是存储您馆藏的 CouchDB 数据库。如果不存在，插件将创建它。

`log_level` 设置 CouchDB 日志的详细信息级别。

## 连接 Obsidian

从 Obsidian 社区插件中安装 Self-hosted LiveSync。在其设置中，选择手动设置并填写以下信息：

- URI：`http://<home-assistant-host>:5984`，或您的代理的 HTTPS 地址
- 用户名和密码：填写上方设置的内容
- 数据库名称：`obsidian`，如果您未更改则保持默认

点击“测试数据库连接”以检查连接，然后使用短语启用端到端加密。启用后，服务器仅存储密文。

[DOCS.md](DOCS.md) 包含反向代理设置和故障排查信息。

## 安全性

此处的 CouchDB 需要每个请求都进行身份验证，因此不能无身份验证访问读取。尽管如此，请勿将 5984 端口转发到互联网。请将其保持在您的局域网内，或将其置于经过代理终止 TLS 并执行自身访问控制的代理之后。

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 上创建问题并标记 @ToledoEM

- Obsidian Self-hosted LiveSync 插件 → [github.com/vrtmrz/obsidian-livesync](https://github.com/vrtmrz/obsidian-livesync)
- CouchDB 上游项目 → [couchdb.apache.org](https://couchdb.apache.org/)

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
