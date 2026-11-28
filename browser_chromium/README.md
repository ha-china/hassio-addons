# Home Assistant 附加组件：chromium

我利用闲暇时间维护及其他 Home Assistant 附加组件：紧跟上游更新、HA 的变更以及针对真实硬件的测试，这些需要花费大量时间（和一些金钱）。我使用大约 5-10 个我 >110 个附加组件中的，因此我安装测试机器（并购买一些测试服务如 vpn），我不亲自使用它们来调试和改进附加组件

如果这个附加组件为您节省了时间或让您的设置更方便，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人星标我的仓库！要星标它，点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 关于

[chromium](https://chromium.com/) 是一个快速、私密和安全的 PC、Mac 和移动浏览器。
此附加组件基于 docker 镜像 https://github.com/linuxserver/docker-chromium

## 配置

使用附加组件 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

WebUI 可通过 Ingress 或位于 <http://homeassistant:PORT> 找到。端口默认禁用，但可通过附加组件选项启用。

默认情况下，该镜像围绕 abc 用户构建，我们推荐使用该用户，因为所有的 init/config 都围绕它构建。默认密码也是 abc。如果您想更改此密码并需要在访问界面时要求认证，请通过在容器内的 GUI 终端中执行 passwd，然后访问 Web 界面时使用路径：

http://localhost:3000/?login=true

应用程序安装不是持久化的，您需要通过附加组件选项进行操作。不过，它们的配置是持久的。

如果图形不工作，请使用 DRINODE 功能选择您的图形设备。

查看所有潜在的 ENV 变量请在此处：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

```yaml
TZ: timezone ; Country/City according to https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久化的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空以使用路由器的 DNS，或设置自定义 DNS 以避免因本地 DNS 广告移除器而导致大量请求
localdisks: sda1 # 将驱动器硬件名称挂载，分隔符为逗号，或对其进行标记。例如 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 smb 服务器列表，分隔符为逗号
cifsusername: "username" # 可选，smb 用户名，所有 smb 共享相同
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许为 smb 共享设置域
```

## 安全

如果没有 `PASSWORD`，Chromium 无法进行身份验证，并发布 Web 端口将赋予网络上任何人（包括其会话和映射的媒体和共享文件夹）完全的控制权。为了加固它，请设置 `PASSWORD` 选项，或在附加组件的 Network 设置中禁用端口，并使用 Ingress。DevTools 端口 9221（默认禁用）即使设置了 `PASSWORD` 也没有身份验证：仅在受信任的网络上发布。附加组件在这两种情况下都会在启动时记录警告。

## 安装

此附加组件的安装非常简单，与其他任何附加组件的安装没有什么不同。

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor addons store 右上角，或如果您已配置了我的 HA 请点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 设置附加组件选项以满足您的偏好
1. 启动附加组件。
1. 检查附加组件的日志以查看是否一切顺利。
1. 打开 WebUI 并调整软件选项

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
