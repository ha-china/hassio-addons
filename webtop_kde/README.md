# Home Assistant 附加组件：Webtop KDE Alpine

我会在空闲时间维护和更新此及其他 Home Assistant 附加组件：跟踪上游更改、适配 HA 的更新，并在真实硬件上进行测试，这需要大量时间（以及一些金钱）。我使用的附加组件大约有 5-10 个，所以我养成了定期安装测试机器（并为一些测试服务，如 VPN，购买服务）的习惯，以便自行维护和优化这些附加组件。

如果这个附加组件为您节省时间或让您的设置更便捷，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fwebtop%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

非常感谢大家为我仓库点赞！如需点赞，请点击下方图片，它将出现在右上角。谢谢！

[![@alexbelgium/hassio-addons 仓库的星标者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/webtop/stats.png)

## 关于

[webtop](https://github.com/webtop/webtop) 是一个可以通过任何现代 Web 浏览器访问的完整桌面环境。此附加组件基于 Docker 镜像 https://github.com/linuxserver/docker-webtop。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写均可）。详情请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可以通过 Ingress 访问，或访问 <http://homeassistant:PORT>。端口默认是禁用的，但可以通过附加组件选项启用。

默认情况下，镜像基于 abc 用户，我们建议使用该用户，因为所有初始化配置都围绕它设计。默认密码也是 abc。如果您想要更改密码，并在访问界面时需要验证身份，请首先在 webtop 的 GUI 终端中输入 `passwd`。然后，在访问 Web 界面时使用以下路径：

http://localhost:3000/?login=true

应用安装不是持久化的，您需要通过附加组件选项进行安装。但是，它们的配置将会持久化。

如果图形界面不工作，请使用 DRINODE 特性选择您的图形设备。

查看所有潜在的环境变量：https://docs.linuxserver.io/images/docker-webtop#optional-environment-variables

```yaml
TZ: 时区 ; 根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html 选择国家/城市
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久的
DRINODE: 指定自定义图形设备，默认是 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 保持空白以使用路由器的 DNS，或设置自定义 DNS 以避免垃圾邮件（本地 DNS 广告拦截器）
localdisks: sda1 # 输入要挂载的硬件驱动器名称，用逗号分隔，或输入标签。例如：sda1, sdb1, MYNAS... 如果要挂载特定文件夹，例如 MYNAS/public，只添加该文件夹（2026-09-19 之后发布的附加组件版本中挂载在 /mnt/MYNAS/public）
networkdisks: "//SERVER/SHARE" # 可选，SMB 服务器列表，用逗号分隔
cifsusername: "用户名" # 可选，SMB 用户名，适用于所有 SMB 共享
cifspassword: "密码" # 可选，SMB 密码
cifsdomain: "域" # 可选，设置 SMB 共享的域
```

## 安装

此附加组件的安装非常简单，与其他附加组件的安装没有太大不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 Supervisor 附加组件商店右上角点击，或者如果您配置了我的 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 设置附加组件选项为您的偏好设置。
1. 启动附加组件。
1. 检查附加组件的日志，确保一切正常。
1. 打开 Web 界面，并根据需要调整软件选项。

## 支持

在 GitHub 上创建 issue。

## 插图

![插图](https://www.linuxserver.io/user/pages/content/images/2021/05/menu.png)

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
