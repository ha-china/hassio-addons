# Home Assistant Add-on: Chromium

我在空闲时间维护此和其他 Home Assistant add-on 插件：跟进上游变更、HA 变更以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我大约使用 >110 个插件中的 5-10 个，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 vpn），以用于排查问题并改进插件。

如果此 add-on 能为您节省时间或让您的设置更简单，您的支持让我非常感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Add-on 信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢大家给我的仓库点了星！点击下方图片给它的仓库点星，它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 关于

[chromium](https://chromium.com/) 是一款面向 PC、Mac 和移动设备的快速、私密且安全的 Web 浏览器。
此 add-on 基于 Docker 镜像 https://github.com/linuxserver/docker-chromium。

## 配置

使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大小写的名称均可有效）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解细节。

Web 界面可以通过 Ingress 访问，或者在 <http://homeassistant:PORT> 访问。端口默认是禁用的，但可以通过 add-on 选项启用。

默认情况下，该镜像基于 abc 用户，我们建议使用此用户，因为所有的初始化/配置都是围绕它展开。默认密码也是 abc。如果您想要更改此密码，并且在访问界面时需要身份验证，只需在容器的 GUI 终端内运行 passwd。之后在访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久的，您需要通过 add-on 选项进行。不过，它们的配置是持久的。

如果图形功能不工作，请使用 DRINODE 特性来选择您的图形设备。

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

```yaml
TZ: timezone ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 填写时区/国家城市
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久的
DRINODE: 指定自定义图形设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空使用路由器的 DNS，或设置自定义 DNS 以避免垃圾邮件（如果本地 DNS 有广告过滤）
localdisks: sda1 # 将您的磁盘硬件名称挂载分隔符为逗号，或标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
```

## 安装

此 add-on 的安装非常直接，与其他任何 add-on 的安装方式相比并无不同。

1. 将我的 add-on 仓库添加到您的 Home Assistant 实例中（在 supervisor addons 商店顶部右侧，或者如果您已配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加 add-on 仓库对话框，其中预填充了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此 add-on。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置 add-on 选项以符合您的偏好。
1. 启动 add-on。
1. 检查 add-on 的日志以确认一切是否顺利。
1. 打开 Web UI 并调整软件选项

## 支持

在 GitHub 上创建 Issue。

## 说明

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
