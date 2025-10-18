# Home assistant add-on: Resilio Sync

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fresiliosync%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fresiliosync%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fresiliosync%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！要点赞，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/resiliosync/stats.png)

## 关于

一个在网络上自托管的文件共享和协作平台。
这个插件基于linuxserver.io的[docker镜像](https://github.com/linuxserver/resilio-sync)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例中。
2. 安装这个插件。
3. 点击`保存`按钮来存储你的配置。
4. 启动插件。
5. 检查插件的日志，看看是否一切正常。
6. 仔细配置插件以符合你的偏好，查看官方文档以了解如何配置。

## 配置

Webui位于 <http://homeassistant:8888>。

```yaml
PGID: user
GPID: user
TZ: timezone
localdisks: sda1 #用逗号分隔你的驱动器的硬件名称或标签来挂载，例如。 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" #可选，要挂载的smb服务器的列表，用逗号分隔
cifsusername: "username" #可选，smb用户名，所有smb共享相同
cifspassword: "password" #可选，smb密码
cifsdomain: "domain" #可选，允许为smb共享设置域
data_location: 同步文件的位置
config_location: 配置文件的位置
```

## 支持

在github上创建一个问题

[repository]: https://github.com/alexbelgium/hassio-addons