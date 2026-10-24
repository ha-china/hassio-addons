# Home assistant 附加组件：chromium

我在业余时间维护本及其他 Home Assistant 附加组件：跟进上游变更、Home Assistant 变更，并在真实硬件上进行测试花费了大量时间（以及一些费用）。我大约使用我的 110 多个附加组件中的 5-10 个，因此我常常安装测试机器（并购买一些我不使用的测试服务，如 VPN），以便进行故障排除和改进附加组件

如果此附加组件为您节省时间或简化您的设置，我将不胜感激！

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

_感谢大家为我仓库星标！要给我星标，请点击下方的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/chromium/stats.png)

## 关于

[chromium](https://chromium.com/) 是一款快速、私有且安全的 Web 浏览器，适用于 PC、Mac 和移动设备。
此附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-chromium

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（支持大写或小写字母）。详细说明请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以通过-ingress 或在 <http://homeassistant:PORT> 找到。端口默认禁用，但可以通过附加组件选项启用。

默认情况下，镜像围绕 abc 用户构建，我们建议使用该用户，因为所有初始化/配置都围绕它进行。默认密码也是 abc。如果您想更改此密码并要求在访问接口时进行身份验证，请在容器内的 GUI 终端中执行 passwd。然后，在访问 Web 接口时使用以下路径：

http://localhost:3000/?login=true

应用程序安装不是持久化的，您需要通过附加组件选项进行操作。但是，其配置是持久化的。

如果图形不工作，请使用 DRINODE 功能选择您的图形设备。

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-chromium#optional-environment-variables

```yaml
TZ: timezone ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 填写国家/城市
additional_apps: engrampa,thunderbird # 允许安装应用程序，因为它们不是持久化的
DRINODE: 指定自定义图形设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空以使用路由器的 DNS，或将自定义 DNS 设置为在本地 DNS 广告拦截器情况下避免滥用
localdisks: sda1 # 输入您要挂载的硬件磁盘名称，用逗号分隔，或其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "username" # 可选，SMB 用户名，所有 SMB 共享共用
cifspassword: "password" # 可选，SMB 密码
cifsdomain: "domain" # 可选，允许设置 SMB 共享的域
```

## 安装

此附加组件的安装非常直接，与其他任何附加组件的安装方式没有不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了我的 HA，请点击下方按钮）
   [![Opens your Home Assistant instance and shows the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件日志以查看一切是否正常。
1. 打开 WebUI 并调整软件选项

## 支持

在 GitHub 上创建问题

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
