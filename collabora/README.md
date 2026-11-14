# Home Assistant 附加包：Collabora

我利用业余时间维护此及其他 Home Assistant 附加包：紧跟上游更改、HA 更改，以及在真实硬件上进行测试占据了大量时间（还涉及一些费用）。我大约使用 5-10 个超过 110 个附加包，因此我定期安装测试机器（并购买一些测试服务，如 VPN），以便我为这些机器而不由我自己使用它们来排查问题和改进附加包。

如果您通过这个附加包节省了时间或让您的设置更容易，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加包信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=检查代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标了我仓库的人！要星标它，请点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/collabora/stats.png)

## 简介

Collabora Online 是一个基于 LibreOffice 技术的协作办公套件。

## 安装

---

1. 将我的附加包仓库添加到您的 Home Assistant 实例，或点击下方的“我的”链接。
1. 安装附加包。
1. 启动附加包。
1. 检查附加包日志以验证成功启动。

<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=local_collabora" target="_blank"><img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="打开您的 Home Assistant 实例并显示附加包仓库对话框"/></a>

## 配置

---

Web 界面位于 `https://homeassistant:9980/browser/dist/admin/admin.html`。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `aliasgroup1` | 字符串 | | **Nextcloud**服务器的外部地址，允许使用该 Collabora（例如 `https://nextcloud_domain\.com:443`） |
| `aliasgroup2` | 字符串 | | 第二个 Nextcloud 服务器，格式与 `aliasgroup1` 相同 |
| `aliasgroup3` | 字符串 | | 第三个 Nextcloud 服务器，格式与 `aliasgroup1` 相同 |
| `server_name` | 字符串 | | **此** Collabora 服务器的外部主机名（和端口），即浏览器到达它的地址（例如 `code_domain.com:9980`）。当 Collabora 位于反向代理后面时设置此项 |
| `ssl_termination` | 布尔 | `false` | 当 `ssl` 为 `false` 但浏览器通过反向代理通过 `https` 访问 Collabora 时设置为 `true` |
| `extra_params` | 字符串 | | 传递给 Collabora 启动脚本的参数 |
| `ssl` | 布尔 | `false` | 使用 `/ssl` 中的证书启用 SSL |
| `certfile` | 字符串 | `fullchain.pem` | 位于 `/ssl` 中的证书文件名 |
| `keyfile` | 字符串 | `privkey.pem` | 位于 `/ssl` 中的私钥文件名 |
| `cert_domain` | 字符串 | | 当 `ssl` 为 `false` 时生成的自签名证书的常见名称 |
| `username` | 字符串 | | Collabora 管理控制台的用户名 |
| `password` | 字符串 | | Collabora 管理控制台的密码 |
| `dictionaries` | 字符串 | | 要安装的字典语言列表（空格分隔） |
| `domain1` | 字符串 | | **已弃用**，请使用 `server_name` |

#### 关于 `aliasgroup*` 中的转义点

Collabora 将 `aliasgroup*` 地址匹配为**正则表达式**，因此点号需要用**单个**反斜杠转义：`next\.duckdns\.org`，而不是 `next\\.duckdns\\.org`。双反斜杠意味着“字面反斜杠后跟任意字符”，这永远不会匹配真实的主机名，Collabora 随后会拒绝 Nextcloud 服务器。

该页面的早期版本请求两个反斜杠，这是错误的。附加包现在会规范化您输入的任何内容，因此 `next.duckdns.org`、`next\.duckdns\.org` 和 `next\\.duckdns\\.org` 最终会变成同一个正确的模式。真正传递给 Collabora 的值将在附加包启动日志中打印：

```text
Allowed Nextcloud host aliasgroup1: https://next\.duckdns\.org:443
```

包含其他正则表达式字符（`*`, `|`, `(`, `[`, …）的值保持不变，因此手写模式仍然有效。

`server_name` **不是**正则表达式：请以普通主机名编写，不要使用反斜杠。

### 示例配置

Nextcloud 位于 `https://next.duckdns.org`，Collabora 可通过 `https://code.duckdns.org:9980` 访问，由反向代理处理证书：

```yaml
aliasgroup1: https://next\.duckdns\.org:443
server_name: code.duckdns.org:9980
ssl_termination: true
ssl: false
username: admin
password: changeme
```

相同的设置，但让附加包从 `/ssl` 直接提供证书：

```yaml
aliasgroup1: https://next\.duckdns\.org:443
server_name: code.duckdns.org:9980
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
username: admin
password: changeme
```

### 使用 Collabora 与 Nextcloud 搭配

1. 安装 Collabora 附加包并配置上述选项。
1. 启动附加包并将 Collabora 服务器暴露在外部域名。
1. 安装并配置 Nextcloud 附加包。
1. 在 Nextcloud 中安装 **Nextcloud Office** 应用程序。
1. 在 Nextcloud **设置 → Office** 中，将 Collabora 服务器 URL 设置为 **Collabora** 地址，而不是 Nextcloud 地址——以上述为例，即 `https://code.duckdns.org:9980`——并且在附加包提供自签名证书时启用 **停用证书验证**。
1. 将两个主机名添加到 Nextcloud 的 `trusted_domains`。

两个主机名扮演不同的角色，交换它们是导致 `无法与 Collabora Online 服务器建立连接` 的最常见原因：

- `aliasgroup1` 是 **Nextcloud** 地址，它告诉 Collabora 哪台服务器被允许请求打开文档。
- `server_name` 是 **Collabora** 地址，它告诉 Collabora 将哪个 URL 返回给浏览器。

### 自定义脚本和环境变量

该附加包支持通过 `app_config` 映射的自定义脚本和环境变量：

- **自定义脚本**：详见 [附加包中的运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加包的 `env_vars` 选项传递额外的环境变量（大小写皆可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 支持

在 GitHub 上创建问题

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
