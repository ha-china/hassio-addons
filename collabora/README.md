# Home Assistant 增强包：Collabora

我在空闲时间维护这个及其他 Home Assistant 增强包：跟踪上游变更、HA 变更，以及在真实硬件上进行测试需要大量时间（还花费了不少金钱）。我大约使用了 110 个增强包中的 5-10 个，因此我经常设置测试机器（并购买一些测试服务，如 vpn），以便在不亲自使用的情况下进行故障排除和改进增强包。

如果您使用此增强包节省了时间或简化了您的设置，对此非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 增强包信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fcollabora%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的人！要星标它，请点击下方的图片，然后它将被显示在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/collabora/stats.png)

## 关于

Collabora Online 是一款基于 LibreOffice 技术的协作办公套件。

## 安装

---

1. 将我的增强包仓库添加到您的 Home Assistant 实例或点击下方的“我的”链接。
1. 安装该增强包。
1. 启动该增强包。
1. 检查增强包日志以验证启动成功。

<a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=local_collabora" target="_blank"><img src="https://my.home-assistant.io/badges/supervisor_addon.svg" alt="打开您的 Home Assistant 实例并显示增强包仓库对话框"/></a>

## 配置

---

Webui 位于 `https://homeassistant:9980/browser/dist/admin/admin.html`。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `aliasgroup1` | str | | 允许使用此 Collabora 的 **Nextcloud** 服务器的外部地址（例如 `https://nextcloud_domain\.com:443`） |
| `aliasgroup2` | str | | 第二个 Nextcloud 服务器，格式与 `aliasgroup1` 相同 |
| `aliasgroup3` | str | | 第三个 Nextcloud 服务器，格式与 `aliasgroup1` 相同 |
| `server_name` | str | | **此 Collabora** 服务器的外部主机名（和端口），即浏览器访问该服务器时的地址（例如 `code_domain.com:9980`）。当 Collabora 位于反向代理之后时设置此项 |
| `ssl_termination` | bool | `false` | 当 `ssl` 为 `false` 但浏览器通过反向代理通过 `https` 访问 Collabora 时，将其设置为 `true` |
| `extra_params` | str | | 传递给 Collabora 启动脚本的额外参数 |
| `ssl` | bool | `false` | 使用 /ssl 中的证书启用 SSL |
| `certfile` | str | `fullchain.pem` | 位于 /ssl 中的证书文件名 |
| `keyfile` | str | `privkey.pem` | 位于 /ssl 中的私钥文件名 |
| `cert_domain` | str | | 当 `ssl` 为 `false` 时生成的自签名证书的共同名称 |
| `username` | str | | Collabora 管理控制台的用户名 |
| `password` | str | | Collabora 管理控制台的密码 |
| `dictionaries` | str | | 要安装的字典语言的空间分隔列表 |
| `domain1` | str | | **已弃用**，请使用 `server_name` |

#### 关于 `aliasgroup*` 中的转义点

Collabora 将 `aliasgroup*` 地址用作 **正则表达式**，因此点号需要用 **单个** 反斜杠进行转义：`next\.duckdns\.org`，而不是 `next\\.duckdns\\.org`。双反斜杠表示“字面反斜杠后跟任意字符”，这永远不会匹配真实的主机名，Collabora 随后会拒绝该 Nextcloud 服务器。

此页面的早期版本要求两个反斜杠，这是错误的。现在该增强包会规范化您输入的任何内容，因此 `next.duckdns.org`、`next\.duckdns\.org` 和 `next\\.duckdns\\.org` 最终都会变成相同的正确模式。真正传递给 Collabora 的值会在增强包启动日志中打印：

```text
Allowed Nextcloud host aliasgroup1: https://next\.duckdns\.org:443
```

包含其他正则表达式字符（`*`, `|`, `(`, `[`, …）的值将原样保留，因此手写的模式仍然有效。

`server_name` **不是**正则表达式：请以普通主机名编写，不带反斜杠。

### 示例配置

Nextcloud 位于 `https://next.duckdns.org` 且 Collabora 可通过 `https://code.duckdns.org:9980` 访问，且由反向代理处理证书：

```yaml
aliasgroup1: https://next\.duckdns\.org:443
server_name: code.duckdns.org:9980
ssl_termination: true
ssl: false
username: admin
password: changeme
```

相同的设置，但让增强包从 `/ssl` 提供证书本身：

```yaml
aliasgroup1: https://next\.duckdns\.org:443
server_name: code.duckdns.org:9980
ssl: true
certfile: fullchain.pem
keyfile: privkey.pem
username: admin
password: changeme
```

### 使用 Collabora 与 Nextcloud

1. 安装 Collabora 增强包并配置上述选项。
1. 启动增强包并将 Collabora 服务器暴露给外部域名。
1. 安装并配置 Nextcloud 增强包。
1. 在 Nextcloud 中安装 **Nextcloud Office** 应用程序。
1. 在 Nextcloud **Administration Settings → Office** 中，将 Collabora 服务器地址设置为 **Collabora** 地址，而不是 Nextcloud 地址——按照上面的例子，即 `https://code.duckdns.org:9980`，并且如果增强包提供自签名证书，则启用 **Disable certificate validation**。
1. 将两个主机名添加到 Nextcloud 的 `trusted_domains` 中。

这两个主机名具有不同的角色，交换它们是导致 `Could not establish connection to the Collabora Online server` 的最常见原因：

- `aliasgroup1` 是 **Nextcloud** 地址，它告诉 Collabora 哪些服务器被允许请求打开文档。
- `server_name` 是 **Collabora** 地址，它告诉 Collabora 应该将哪些 URL 返回给浏览器。

### 自定义脚本和环境变量

该增强包通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在增强包中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用增强包的 `env_vars` 选项传递额外的环境变量（大小写不敏感）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

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
