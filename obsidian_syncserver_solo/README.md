# Home assistant 附加组件：Obsidian 同步服务器

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_solo%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_solo%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fobsidian_syncserver_solo%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

运行 CouchDB 作为 [自我托管的 LiveSync](https://github.com/vrtmrz/obsidian-livesync) 插件在 Obsidian 中的同步后端。

该附加组件仅包含服务器端。请在 Obsidian 中安装配套的插件：<https://community.obsidian.md/plugins/obsidian-livesync>

> [!IMPORTANT]
>
> - 在安装或升级此附加组件或 obsidian livesync 插件之前，请先备份您的 vault（库）。
> - 与其他同步解决方案（包括 iCloud 和 Obsidian Sync）不兼容。
> - 对于备份，请使用 [增量 ZIP 备份](https://github.com/vrtmrz/diffzip)。

您的 vault 通过 Home Assistant 在不同设备间同步。无需 Obsidian Sync 订阅，笔记将保留在您的网络上。

此附加组件使用普通 HTTP 通信。桌面版 Obsidian 可以正常工作。移动版 Obsidian 无法使用，因为它坚持要求有效的 TLS 证书 ([在 Home Assistant 上很容易添加](https://www.home-assistant.io/blog/2017/09/27/effortless-encryption-with-lets-encrypt-and-duckdns/))。要同步手机或平板，您需要在此附加组件前部署反向代理，或者使用以下两种版本之一：

| 附加组件 | TLS | 适用场景 |
| :--- | :--- | :--- |
| Obsidian 同步服务器 (当前版本) | 无 | 您已经运行了反向代理 |
| [Obsidian 同步服务器 SSL](../obsidian_syncserver_ssl/README.md) | CouchDB 使用 `/ssl` 中的证书提供 HTTPS | 您在 Home Assistant 机器上有证书 |
| [Obsidian 同步服务器 NPM](../obsidian_syncserver_npm/README.md) | 内置 Nginx Proxy Manager | 您没有代理且希望包含证书管理功能 |

## 安装

1. 将 repository `https://github.com/alexbelgium/hassio-addons` 添加到 Home Assistant，然后安装该附加组件。
2. 在配置中选择密码。留空将自动生成密码并在首次启动时将其打印在日志中。
3. 启动附加组件，并在日志中查找 `Ready.`。

## 配置

```yaml
username: admin
password: ""
database: obsidian
log_level: info
```

`username` 和 `password` 是 LiveSync 插件使用的 CouchDB 管理员凭据。首次启动时，留空密码将自动生成并保存到 `/config/obsidian-syncserver/admin_password`。

`database` 是存放您的 vault 的 CouchDB 数据库。如果不存在，附加组件将创建它。

`log_level` 设置 CouchDB 日志的详细程度。

## 连接 Obsidian

从 Obsidian 的社区插件中安装 Self-hosted LiveSync。在其设置中，选择手动设置并输入以下内容：

- URI: `http://<home-assistant-host>:5984`，或您的代理的 HTTPS 地址。
- 用户名和密码：即上方配置的凭据。
- 数据库名称：`obsidian`，除非您已更改它。

点击“测试数据库连接”以验证，然后启用端到端加密，输入一个密码短语。启用后，服务器仅保存密文。

[DOCS.md](DOCS.md) 涵盖反向代理设置和故障排除。

## 安全性

这里的 CouchDB 要求在每次请求时进行身份验证，因此不能匿名读取任何内容。尽管如此，请勿将 5984 端口转发到互联网。将其保持在您的 LAN（局域网）内，或者将其置于执行 TLS 终止和自身访问控制的代理之后。

## 支持

在 [github](https://github.com/alexbelgium/hassio-addons/issues) 上创建议题，并标记 @ToledoEM

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
