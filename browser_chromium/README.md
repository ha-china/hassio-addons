# Home assistant add-on: chromium

我业余时间维护这个Home Assistant插件和其他插件：跟进上游变化、HA变化，以及在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过110个插件中的5-10个，因此我安装了一些我自身不使用的测试机器（和一些测试服务，例如VPN）来调试和改进插件。

如果这个插件能帮到你或者让你的设置更简单，我将非常感谢你的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐款][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片来点赞，然后它就会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons的starred repo roster](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 关于

[chromium](https://chromium.com/) 是一个快速、私密且安全的网络浏览器，适用于PC、Mac和移动设备。
这个插件基于Docker镜像 [https://github.com/linuxserver/docker-chromium](https://github.com/linuxserver/docker-chromium)

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（名称大小写均可）。详情请参考 [https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)。

WebUI 可以通过 Ingress 访问，或者通过 <http://homeassistant:PORT> 访问。默认情况下端口是禁用的，但可以通过插件选项启用。

默认情况下，镜像是基于 abc 用户构建的，我们推荐使用这个用户，因为所有的 init/config 都是围绕它构建的。默认密码也是 abc。如果你想更改这个密码并在访问界面时需要认证，只需在GUI终端中在容器内运行 passwd 命令。然后访问Web界面时使用路径：

http://localhost:3000/?login=true

应用程序的安装不是持久的，你需要通过插件选项来安装。但它们的配置是持久的。

如果图形不工作，使用 DRINODE 功能来选择你的图形设备。

查看所有可能的 ENV 变量：[https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables](https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables)

```yaml
TZ: timezone ; 国家/城市根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: 指定自定义图形设备，默认是 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的DNS，或设置自定义DNS以避免在本地DNS广告拦截器的情况下被轰炸
localdisks: sda1 # 将你的驱动硬件名称（用逗号分隔）或其标签挂载，例如。 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选的，要挂载的SMB服务器列表，用逗号分隔
cifsusername: "username" # 可选的，SMB用户名，所有SMB共享相同
cifspassword: "password" # 可选的，SMB密码
cifsdomain: "domain" # 可选的，允许为SMB共享设置域
```

## 安装

这个插件的安装非常简单，与安装其他插件没有区别。

1. 将我的插件仓库添加到你的Home Assistant实例中（在supervisor插件商店右上角，或点击下面的按钮如果你已经配置了我的HA）
   [![打开你的Home Assistant实例并显示带有特定仓库URL预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮来保存你的配置。
1. 设置插件选项以符合你的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开WebUI并调整软件选项。

## 支持

在github上创建一个问题
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
