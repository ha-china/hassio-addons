# Home assistant add-on: Inadyn

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Finadyn%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Finadyn%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Finadyn%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！要点赞请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/inadyn/stats.png)

## 关于

[Inadyn](https://github.com/troglobit/inadyn)，或 In-a-Dyn，是一个简单的小型动态DNS、DDNS客户端，支持HTTPS。在许多GNU/Linux发行版中常见，通常用于现成路由器和互联网网关，以自动同步您的互联网名称与公共IP地址¹。它也可以用于具有冗余（备份）互联网连接的安装。

基于 https://hub.docker.com/r/troglobit/inadyn
项目地址：https://github.com/troglobit/inadyn
部分代码来源于 https://github.com/nalipaz/hassio-addons

## 安装

这个add-on的安装非常简单，与安装任何其他Hass.io add-on没有区别。

1. [将我的Hass.io add-ons仓库][repository]添加到您的Hass.io实例。
1. 安装这个add-on。
1. 点击`保存`按钮以保存您的配置。
1. 启动add-on。
1. 检查add-on的日志以查看是否一切正常。
1. 仔细配置add-on以符合您的偏好，请参阅官方文档。

## 配置

这个add-on没有Web界面——所有配置都是通过add-on选项完成的。
有关详细的配置信息，请参阅 [官方文档](https://github.com/troglobit/inadyn)。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `verify_address` | bool | | 使用检查IP服务验证IP地址 |
| `fake_address` | bool | | 用于测试的假地址 |
| `allow_ipv6` | bool | | 启用IPv6支持 |
| `iface` | str | | 要使用的网络接口（例如，`eth0`） |
| `iterations` | int | | 迭代次数（0 = 无限） |
| `period` | int | `300` | 更新间隔（秒） |
| `forced_update` | int | | 强制更新间隔（秒） |
| `secure_ssl` | bool | | 启用安全SSL验证 |
| `providers` | list | | DDNS提供程序配置列表 |

### 提供程序配置

`providers` 列表中的每个提供程序支持这些选项：

| 选项 | 类型 | 描述 |
|------|------|------|
| `provider` | str | 提供程序名称或自定义标识符 |
| `custom_provider` | bool | 是否为自定义提供程序 |
| `username` | str | 用于身份验证的用户名或令牌 |
| `password` | str | 密码或API密钥 |
| `hostname` | str | 要更新的域/主机名 |
| `ssl` | bool | 用于更新的SSL |
| `ddns_server` | str | 自定义DDNS服务器 |
| `ddns_path` | str | 自定义更新路径 |
| `checkip_server` | str | 自定义IP检查服务器 |
| `checkip_path` | str | 自定义IP检查路径 |
| `checkip_ssl` | bool | 用于IP检查的SSL |
| `append_myip` | bool | 将IP附加到请求 |

### 示例配置

```json
{
  "verify_address": false,
  "fake_address": false,
  "allow_ipv6": true,
  "iface": "eth0",
  "iterations": 0,
  "period": 300,
  "forced_update": 300,
  "secure_ssl": true,
  "providers": [
    {
      "provider": "providerslug",
      "custom_provider": false,
      "username": "yourusername",
      "password": "yourpassword_or_token",
      "ssl": true,
      "hostname": "dynamic-subdomain.example.com",
      "checkip_ssl": false,
      "checkip_server": "api.example.com",
      "checkip_command": "/sbin/ifconfig eth0 | grep 'inet6 addr'",
      "checkip_path": "/",
      "user_agent": "Mozilla/5.0",
      "ddns_server": "ddns.example.com",
      "ddns_path": "",
      "append_myip": false
    }
  ]
}
```

您不需要填写所有这些，只需使用必要的部分。一个典型的示例看起来像这样：

```json
{
    {
      "provider": "duckdns",
      "username": "your-token",
      "hostname": "sub.duckdns.org"
    }
}
```

或者：

```json
{
  "providers": [
    {
      "provider": "someprovider",
      "username": "username",
      "password": "password",
      "hostname": "your.domain.com"
    }
  ]
}
```

对于inadyn不支持的自定义提供程序，您可以这样做：

```json
{
  "providers": [
    {
      "provider": "arbitraryname",
      "username": "username",
      "password": "password",
      "hostname": "your.domain.com",
      "ddns_server": "api.cp.easydns.com",
      "ddns_path": "/somescript.php?hostname=%h&myip=%i",
      "custom_provider": true
    }
  ]
}
```

`ddns_path`中的令牌在`inadyn.conf(5)`手册页中有详细说明。

### 使用同一提供程序的多个子域名

相关于 https://github.com/troglobit/inadyn#example

如果您想使用同一提供程序的多个子域名，您必须像这样列出域名：

```json
{
  "providers": [
    {
      "hostname": "first.mydomain.dev",
      "provider": "domains.google.com:1",
      "username": "xxxxxxxxxxxxxxxx",
      "password": "xxxxxxxxxxxxxxxx"
    },
    {
      "hostname": "second.mydomain.dev",
      "provider": "domains.google.com:2",
      "username": "xxxxxxxxxxxxxxxx",
      "password": "xxxxxxxxxxxxxxxx"
    },
    {
      "hostname": "another.mydomain.dev",
      "provider": "domains.google.com:3",
      "username": "xxxxxxxxxxxxxxxx",
      "password": "xxxxxxxxxxxxxxxx"
    }
  ]
}
```

[repository]: https://github.com/alexbelgium/hassio-addons
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
