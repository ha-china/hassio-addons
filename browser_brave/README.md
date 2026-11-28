# Home Assistant 附加组件：Brave

我利用业余时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改，并在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我使用的附加组件大约有 5-10 个（在我拥有的 110 多个中），因此我安装测试机器（并购买一些测试服务，如 VPN）用于测试和优化这些附加组件。

如果您通过这个附加组件节省了时间或使您的设置更加简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint 代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢所有人给我的仓库加了星！要添加星号，请点击下图，然后它会出现在右上角。谢谢！_

[![按 @alexbelgium/hassio-addons 分组的 Stargazers 仓库名录](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/brave/stats.png)

## 关于

[Brave](https://brave.com/) 是一款适用于 PC、Mac 和移动设备的快速、独立且安全的网络浏览器。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-brave

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（支持大写或小写字母）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

Webui 可以通过 ingress 或在 <http://homeassistant:PORT> 访问。端口默认禁用，但可以通过附加组件选项启用。

默认情况下，该镜像基于 abc 用户，我们建议使用此用户，因为所有初始化/配置都围绕它展开。默认密码也是 abc。如果要更改此密码并在访问界面时需要身份验证，请在容器内的 GUI 终端内执行 passwd 命令。然后访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久的，您需要通过附加组件选项进行操作。然而，其配置是持久的。

如果显卡功能无效，请使用 DRINODE 特性来选择您的显卡设备。

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-brave#optional-environment-variables

```yaml
TZ: 时区; 根据国家/城市，参考 https://manpages.ubuntu.com/man-pages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久化的
DRINODE: 指定自定义显卡设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空以使用路由器的 DNS，或设置自定义 DNS 以避免可能的垃圾邮件，如果本地 DNS 包含广告拦截
localdisks: sda1# 输入您用于挂载的驱动器硬件名称，用逗号分隔，或将其标签名。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列出要挂载的 SMB 服务器，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许为 SMB 共享设置域
```

## 安全

如果没有 `PASSWORD`，Brave 没有身份验证功能，并且发布的 Web 端口会将浏览器的完全控制权交给网络上的任何人，包括其会话以及映射的媒体和共享文件夹。要确保其安全，请设置 `PASSWORD` 选项，或在附加组件的网络设置中禁用端口并使用 Ingress。即使设置了 `PASSWORD`，DevTools 端口 9221（默认禁用）也没有身份验证：仅在可信网络上发布它。在这两种情况下，附加组件在启动时会记录警告。

## 安装

此附加组件的安装非常直接，与其他任何附加组件的安装没有差别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店中右上角，或如果您已配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预设的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，看看一切是否正常。
1. 打开 Web 界面并调整软件选项

## 支持

在 github 上创建问题

## 插图

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
