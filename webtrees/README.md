# Home assistant add-on: Webtrees

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtrees%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的贡献者！要加星，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtrees/stats.png)

## 关于

[webtrees](http://www.webtrees.net) 是目前网络上领先的在线协作家谱应用。

这个插件基于以下 Docker 镜像：https://github.com/NathanVaughn/webtrees-docker

## 配置

Web UI 可以在 <http://homeassistant:PORT> 找到。

名称和密码通过启动向导定义。

选项可以通过两种方式配置：

- 插件选项

```yaml
LANG: "en-US" # webtrees 的默认语言
BASE_URL: "http://192.168.178.69" # 你访问 webtrees 的 URL
DB_TYPE: "sqlite" # 你的数据库类型：sqlite 用于自动配置，或外部用于手动配置
CONFIG_LOCATION: location of the config.yaml (see below)
localdisks: sda1 #put the hardware name of your drive to mount separated by commas, or its label. ex. sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # optional, list of smb servers to mount, separated by commas
cifsusername: "username" # optional, smb username, same for all smb shares
cifspassword: "password" # optional, smb password
trusted_headers: single address, or a range of addresses in CIDR format
base_url_portless: base url without port
```

- Config.yaml

可以给 config.yaml 文件添加自定义环境变量。这个文件所在的文件夹不是根配置目录（HA 的配置.yaml 所在的目录），而是 /root/addon_configs ([HA 文档](https://developers.home-assistant.io/blog/2023/11/06/public-addon-config/))。完整的環境变量可以在以下链接找到：https://github.com/linuxserver/docker-paperless-ng。它必须以有效的 YAML 格式输入，并在插件启动时进行验证。

## 安装

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到你的 home assistant 实例中（在 supervisor 插件商店的右上角，或者如果你已经配置了我的 HA，点击下面的按钮）
   [![打开你的 Home Assistant 实例并显示添加插件仓库对话框，并预填特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 设置插件选项以符合你的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 Web UI 并调整软件选项

## 远程访问

可以免费将这个插件暴露给外部访问（给家人和朋友）。这可以在不暴露你的网络给外部的情况下完成。其中一种解决方案是 [Cloudflare 隧道](https://github.com/brenner-tobias/addon-cloudflared)。论坛和 YouTube 上有很多关于如何做到这一点的资料，以及如何使用额外的规则和 Google 邮箱验证来保护它。以下是配置集成的考虑：

Webtrees 配置

```yaml
BASE_URL: httpS://your_tunnel_domain_name.example.com
# 这是你要访问的页面的外部 URL。
# 尽管插件的默认配置不使用 SSL，但在使用 Cloudflare 时，base_url 重要的是有 https
# 这是因为当隧道运行时，Cloudflare 会将其自己的 SSL 应用于连接。
# 如果 base_url 有 http://，这将导致不匹配，并且某些模块可能无法正确加载
ssl: false #禁用，Cloudflare 负责处理这一点
base_url_portless: true #必须启用

#rest is standard
DATA_LOCATION: /config/data
certfile: fullchain.pem
keyfile: privkey.pem
```

Cloudflared 配置

```yaml
external_hostname: "" #无，以保持 HA 仅通过 Nabu Casa 可访问，但可用于同时完成
additional_hosts:
  - hostname: your_tunnel_domain_name.example.com #注意这与 webtrees 配置相同
    service: http://your_HA_IP:9999 #注意这里使用 http 和端口，尽管 webtrees 配置为无端口
tunnel_name: Your_tunnel_name
```

## 支持

在 github 上创建问题

## 插图

![插图](https://installatron.infomaniak.com/installatron//images/ss2_webtrees.jpg)