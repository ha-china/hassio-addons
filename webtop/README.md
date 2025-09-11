# 家庭助理插件：Webtop KDE Alpine

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.json)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub 超级Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点星的朋友！要给我点星，请点击下面的图片，它会出现在右上角。谢谢！_

[![为 @alexbelgium/hassio-addons 点星的用户列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代网页浏览器访问的完整桌面环境。
此插件基于 Docker 镜像 [https://github.com/linuxserver/docker-webtop](https://github.com/linuxserver/docker-webtop)。

## 配置

Web UI 可通过入口访问，或访问 <http://homeassistant:PORT>。默认情况下，该端口是禁用的，但可以通过插件选项启用。

默认情况下，镜像是围绕 abc 用户构建的，我们建议使用此用户，因为所有的初始化/配置都是基于它的。默认密码也是 abc。如果您想更改此密码并在访问界面时要求身份验证，只需在 Webtop 中的 GUI 终端中输入 passwd。然后在访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用程序的安装不是持久的，您需要通过插件选项进行安装。不过，它们的配置是持久的。

如果图形不工作，请使用 DRINODE 功能选择您的图形设备。

有关所有潜在的环境变量，请参见此处： https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: 时区 ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 的国家/城市
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: 指定一个自定义图形设备，默认是 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持为空使用路由器的 DNS，或设置自定义 DNS 以避免在本地 DNS 广告删除器的情况下发送垃圾邮件
localdisks: sda1 # 输入您要挂载的驱动器的硬件名称，用逗号分隔，或其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，挂载的 smb 服务器列表，用逗号分隔
cifsusername: "用户名" # 可选，smb 用户名，所有 smb 共享都相同
cifspassword: "密码" # 可选，smb 密码
cifsdomain: "域" # 可选，允许为 smb 共享设置域
```

## 安装

此插件的安装非常简单，与安装其他插件并没有不同。

1. 将我的插件仓库添加到您的家庭助理实例中（在顶部右侧的 Supervisor 插件商店中，或者如果您已配置了我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例，并显示带有特定仓库 URL 的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 “保存” 按钮以存储您的配置。
1. 根据您的个人喜好设置插件选项。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI并调整软件选项。

## 支持

在 GitHub 上创建一个问题。

## 插图

![插图](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

[仓库]: https://github.com/alexbelgium/hassio-addons