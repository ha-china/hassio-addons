# Home assistant add-on: Webtop KDE Alpine

我利用业余时间维护这个 Home Assistant add-on 以及其他的 add-on：跟进上游变化、Home Assistant 的变化，并在真实硬件上进行测试，这需要花费大量时间（和一些金钱）。我大约使用我超过 110 个 add-on 中的 5-10 个非常频繁，因此我安装了一些我自身不使用的测试机器（和购买了一些测试服务，如 VPN），以便于调试和改进这些 add-on。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片来点赞，它将会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代网络浏览器访问的完整桌面环境。
这个 add-on 基于以下 Docker 镜像：https://github.com/linuxserver/docker-webtop

## 配置

使用 add-on 的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。详情请参阅：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web UI 可以通过 ingress 访问，或访问 <http://homeassistant:PORT>。默认情况下端口是禁用的，但可以通过 add-on 选项启用。

默认情况下，镜像是基于用户 abc 构建的，我们推荐使用这个用户，因为所有的初始化和配置都是围绕它进行的。默认密码也是 abc。如果您想更改这个密码，并在访问界面时需要认证，只需在 webtop 中的 GUI 终端中执行 passwd 命令。然后，在访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用程序的安装不是持久的，您需要通过 add-on 选项来安装。但是，它们的配置是持久的。

如果图形设备不工作，使用 DRINODE 功能来选择您的图形设备。

查看所有潜在的 ENV 变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: timezone ; 国家/城市根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: 指定自定义图形设备，默认是 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的 DNS，或设置自定义 DNS 以避免在本地 DNS 广告拦截器的情况下发送垃圾邮件
localdisks: sda1 # 将您的驱动器的硬件名称（用逗号分隔）或其标签挂载，例如。 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 SMB 服务器的列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，所有 SMB 共享相同
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
```

## 安装

这个 add-on 的安装过程非常简单，与安装任何其他 add-on 没有区别。

1. 将我的 add-ons 仓库添加到您的 Home Assistant 实例（在 supervisor add-ons 存储库中位于右上角，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示添加 add-on 仓库对话框，其中预填了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个 add-on。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置 add-on 选项以符合您的偏好。
1. 启动 add-on。
1. 检查 add-on 的日志以查看是否一切正常。
1. 打开 Web UI 并调整软件选项。

## 支持

在 github 上创建问题

## 插图

![插图](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

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
