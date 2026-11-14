# 家庭助手附加组件：Webtop KDE Alpine

我在闲暇时间维护此及其他家庭助手附加组件：追踪上游变更、适配家庭助手变更以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我会定期使用 5-10 个我拥有的 100 多个附加组件中的几个，为此我还安装测试机器（并购买一些我自己不使用的测试服务，如 vpn），以便调试和改进附加组件

如果此附加组件能为您节省时间或简化您的设置，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我仓库点赞！点击下图中的图片即可点赞，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 简介

[webtop](https://github.com/webtop/webtop) 是一个完整的桌面环境，可通过任何现代网络浏览器访问。
此附加组件基于 docker 镜像：https://github.com/linuxserver/docker-webtop

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大写字母或小写名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web UI 可以通过 Ingress 访问，或者访问 <http://homeassistant:PORT>。端口默认禁用，但可以通过附加组件选项启用。

默认情况下，该镜像基于 abc 用户，我们建议使用此用户，因为所有的初始化/配置都是基于它。默认密码也为 abc。如果您想更改此密码，并且在访问界面时需要身份验证，请在 webtop 的 GUI 终端内部执行 passwd 命令。然后访问 Web 界面时，请使用路径：

http://localhost:3000/?login=true

应用安装不是持久的，您需要通过附加组件选项来执行。不过，其配置是持久的。

如果图形功能不工作，请使用 DRINODE 功能选择您的图形设备。

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: timezone ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 设置时区
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久的
DRINODE: specify a custom graphic device, default is /dev/dri/renderD128 指定自定义图形设备，默认为 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的 DNS，或设置自定义 DNS 以避免因本地 DNS 广告移除器而发送垃圾邮件
localdisks: sda1 # 将硬盘的硬件名称（用逗号分隔）或标签写入此处用于挂载。示例：sda1, sdb1, MYNAS... 只需添加要挂载的文件夹，如 MYNAS/public 将挂载到 /mnt/MYNAS/public（2026-09-19 之后发布的附加组件版本）
networkdisks: "//SERVER/SHARE" # 可选，要挂载的 smb 服务器列表，用逗号分隔
cifsusername: "username" # 可选，smb 用户名，所有 smb 共享共用
cifspassword: "password" # 可选，smb 密码
cifsdomain: "domain" # 可选，允许为 smb 共享设置域
```

## 安装

此附加组件的安装非常简单，与其他任意附加组件的安装方式没有区别。

1. 在我的附加组件存储库中添加到您的家庭助手实例（在 supervisor 附加组件商店右上角，或者如果您已配置了我的 HA，点击下图中的按钮）
   [![打开您的家庭助手实例并显示预填充了特定存储库 URL 的添加附加组件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志，确认一切正常。
1. 打开 Web UI 并适应软件选项

## 支持

在 github 上创建问题

## 图片说明

![illustration](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

[repository]: https://github.com/alexbelgium/hassio-addons

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
