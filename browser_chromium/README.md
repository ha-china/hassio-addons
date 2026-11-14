# Home assistant 添插件：chromium

我在业余时间维护和操作其他 Home Assistant 添插件（keep up with upstream changes, HA changes, and testing on real hardware）这需要花费大量时间（和一些钱）。我使用超过 110 的 addons 中的大约 5-10 个，因此我安装测试机（并购买一些测试服务，如 vpn）进行故障排查和改进这些 addons。

如果此添插件为您节省了时间或使您的设置更方便，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fchromium%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人都星标了我的 repo！要星标它，请点击下面的图片，然后它将出现在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 关于

[chromium](https://chromium.com/) 是一款快速、私密和安全的 PC、Mac 和移动设备的网页浏览器。
此添插件基于 docker 镜像 https://github.com/linuxserver/docker-chromium

## 配置

使用添插件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

Webui 可通过 ingress 或在 <http://homeassistant:PORT> 找到。端口默认被禁用，但可通过添插件选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用该用户，因为所有的 init/config 都基于它。默认密码也是 abc。如果您想更改此密码并在访问界面时需要认证，只需在容器的 GUI 终端中 issue `passwd`。然后访问 web 界面时使用以下路径：

http://localhost:3000/?login=true

Apps 安装不是 remanent，您需要通过添插件选项进行安装。它们的配置，但是是 remanent。

如果图形没有工作，请使用 DRINODE 功能选择您的图形设备。

查看所有潜在 ENV 变量，请看这里：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

```yaml
TZ: timezone ; 根据国家/City 按照 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 设置
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的 DNS，或者设置自定义 DNS 以避免重复，以防本地 DNS ad-remover
localdisks: sda1 # 将您的硬盘的硬件名称挂载为逗号分隔的列表，或其标签。例如 sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，列表 smb 服务器以挂载，逗号分隔
cifsusername: "username" # 可选，smb 用户名，适用于所有 smb 共享
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许设置 smb 共享的域
```

## 安装

此添插件的安装非常直接，与其他任何添插件的安装没有不同。

1. 将我的添插件库添加到您的 home assistant 实例（在 supervisor addons store 顶部右侧，或者如果您已配置我的 HA，请点击下面的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此添插件。
1. 点击 `Save` 按钮以存储您的配置。
1. 将添插件选项设置为您的偏好设置
1. 启动添插件。
1. 检查添插件的日志，看看一切是否正常。
1. 打开 webUI 并调整软件选项

## 支持

在 github 上创建 issue

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
