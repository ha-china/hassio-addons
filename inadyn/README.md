# Home Assistant 插件：Inadyn

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Finadyn%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Finadyn%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Finadyn%2Fconfig.json)

[![Codacy 勋章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码规范检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建工具](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建工具)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/请%20我%20喝杯%20咖啡%20(无%20Paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/请%20我%20喝杯%20咖啡%20(使用%20Paypal)-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位关注我的仓库的朋友！如果要关注，请点击下方的图片，然后在右上角进行关注。谢谢！_

[![关注者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/inadyn/stats.png)

## 关于

[Inadyn](https://github.com/troglobit/inadyn)，或称为 In-a-Dyn，是一个小且简单的动态 DNS（DDNS）客户端，支持 HTTPS。它通常可用于许多 GNU/Linux 发行版，被用于现成的路由器和互联网网关，以自动执行将您的互联网名称与您的公共¹ IP 地址保持同步的任务。它还可以用于具有冗余（备份）连接的互联网安装。
基于 https://hub.docker.com/r/troglobit/inadyn
项目主页 : https://github.com/troglobit/inadyn
部分代码借用自 https://github.com/nalipaz/hassio-addons

## 安装

该插件的安装相当简单，与安装其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 单击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 仔细配置插件以符合您的喜好，请查看官方文档以获取详细信息。

## 配置

要通过插件选项进行配置，无需 WebUI。
有关配置，请参见 https://github.com/troglobit/inadyn

可用的配置选项如下（这里填写了一些示例数据）：

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

您不应填写所有这些选项，只需使用必要的即可。一个典型的示例可能如下所示：

```json
{
    {
      "provider": "duckdns",
      "username": "your-token",
      "hostname": "sub.duckdns.org"
    }
}
```

或：

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

对于不受 Inadyn 支持的自定义提供者，您可以这样做：

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

ddns_path 中的标记已在 `inadyn.conf(5)` 手册页中列出。

### 使用相同提供者的多个子域名

相关于 https://github.com/troglobit/inadyn#example

如果您想使用此插件与同一提供者的多个子域名，您必须按如下方式枚举域名：

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