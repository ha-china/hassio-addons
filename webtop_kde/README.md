# 家居助理附加组件：Webtop KDE Alpine


我在业余时间维护这个以及其他家居助理附加组件：跟踪上游变更、家居助理变更以及在实际硬件上测试需要花费很多时间（还有一些钱）。我经常使用大约5-10个我的>110个附加组件，因此我会安装测试机器（并购买一些我自身不使用的测试服务，如vpn）来排查问题和改进附加组件。

如果这个附加组件为您节省了时间或使您的设置更加简便，我将非常感激您的支持！

[![买我一杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers 仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个通过任何现代网页浏览器可访问的完整桌面环境。
此附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-webtop

## 配置

使用附加组件 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以通过入口或 <http://homeassistant:PORT> 访问。默认情况下，端口是禁用的，但可以通过附加组件选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用此用户，因为所有的初始化/配置都是围绕它进行的。默认密码也是 abc 。如果您想更改此密码并在访问界面时需要认证，请在 webtop 中的 GUI 终端内运行 passwd 命令。然后当访问 Web 界面时，使用以下路径：

http://localhost:3000/?login=true

应用程序安装不会持久化，您需要通过附加组件选项进行安装。但是，它们的配置会持久化。

如果图形功能不起作用，请使用 DRINODE 功能来选择您的图形设备。

有关所有潜在的 ENV 变量，请参阅此处：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: timezone ; Country/City according to https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # Keep blank to use router’s DNS, or set custom DNS to avoid spamming in case of local DNS ad-remover
localdisks: sda1 #put the hardware name of your drive to mount separated by commas, or its label. ex. sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # optional, list of smb servers to mount, separated by commas
cifsusername: "username" # optional, smb username, same for all smb shares
cifspassword: "password" # optional, smb password
cifsdomain: "domain" # optional, allow setting the domain for the smb share
```

## 安装

此附加组件的安装相当简单，与安装任何其他附加组件没有不同。

1. 将我的附加组件存储库添加到您的家居助理实例中（在 supervisor 附加组件存储库的右上角，或单击下面的按钮如果您已配置我的 HA）
   [![打开您的家居助理实例并显示一个具有特定存储库 URL 预填充的添加附加组件存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 单击 `保存` 按钮以存储您的配置。
1. 将附加组件选项设置为您的首选设置。
1. 启动附加组件。
1. 检查附加组件的日志，以查看是否一切顺利。
1. 打开 WebUI 并调整软件选项

## 支持

在 GitHub 上创建问题

## 示例

![示例](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

[仓库]: https://github.com/alexbelgium/hassio-addons
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
