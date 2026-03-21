# 家居助手插件：Webtop KDE Alpine

我在业余时间维护这个以及其他家居助手插件：跟上上游变化、家居助手变化以及在真实硬件上进行测试都需要花费大量时间（以及一些金钱）。我经常使用我超过110个插件中的5-10个，所以我安装了测试机器（并购买了一些我自己不使用的测试服务，如vpn），以排除故障并改进插件。

如果这个插件为您节省了时间或使您的设置更容易，我将非常感谢您的支持！

[![请我喝杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点星的人！要点星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代网络浏览器访问的完整桌面环境。
此插件基于 docker 镜像 https://github.com/linuxserver/docker-webtop

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以通过入口或 <http://homeassistant:PORT> 访问。默认情况下，端口是禁用的，但可以通过插件选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用此用户，因为所有初始化/配置都是基于它的。默认密码也是 abc。如果您想更改此密码并要求在访问界面时进行身份验证，请在 webtop 内的图形终端中运行 passwd。然后，当访问 Web 界面时，请使用以下路径：

http://localhost:3000/?login=true

应用程序安装不是持久的，您需要通过插件选项来完成。然而，它们的配置是。

如果图形不工作，请使用 DRINODE 功能来选择您的图形设备。

有关所有潜在的环境变量，请参阅此处：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: 时区；国家/城市，根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: 指定自定义图形设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的 DNS，或设置自定义 DNS 以避免本地 DNS 广告拦截
localdisks: sda1 # 放置您的驱动器的硬件名称以挂载，用逗号分隔，或其标签。例如，sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，挂载的 smb 服务器列表，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，对于所有 smb 共享相同
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许为 smb 共享设置域
```

## 安装

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件存储库添加到您的家居助手实例中（在管理员的插件商店顶部右侧，或单击下面的按钮如果您已配置我的 HA）
   [![打开您的家居助手实例并显示具有特定存储库 URL 预填充的添加插件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 单击“保存”按钮以存储您的配置。
1. 将插件选项设置为您的要求。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开 WebUI 并调整软件选项

## 支持

在 GitHub 上创建问题

## 图解

![图解](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

[repository]: https://github.com/alexbelgium/hassio-addons
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
