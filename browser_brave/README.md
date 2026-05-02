# 家庭助理插件：Brave

我在业余时间维护这个和其他家庭助理插件：跟进上游变更、家庭助理变更以及在实际硬件上进行测试都需要花费大量时间（以及一些金钱）。我经常使用大约5-10个我的>110个插件，因此我会安装测试机器（并购买一些我不使用的测试服务，如vpn），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fbrave%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/brave/stats.png)

## 关于

[Brave](https://brave.com/) 是一个快速、私密且安全的PC、Mac和移动端网络浏览器。
此插件基于docker镜像 https://github.com/linuxserver/docker-brave

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui可以通过入口或通过 <http://homeassistant:PORT> 访问。端口默认是禁用的，但可以通过插件选项启用。

默认情况下，镜像基于abc用户，我们建议使用此用户，因为所有的init/config都是围绕它设计的。默认密码也是abc。如果您想更改此密码并在访问界面时需要认证，请在容器内的GUI终端中运行passwd命令。然后，在访问Web界面时，请使用以下路径：

http://localhost:3000/?login=true

应用安装不会持久化，您需要通过插件选项进行安装。然而，它们的配置是会持久化的。

如果图形不工作，请使用DRINODE功能来选择您的图形设备。

有关所有可能的ENV变量，请参阅此处：https://docs.linuxserver.io/images/docker-brave#optional-environment-variables

```yaml
TZ: 时区；国家/城市，根据 https://manpages.ubuntu.com/manpages/trusty/man3/DateTime::TimeZone::Catalog.3pm.html
additional_apps: engrampa,thunderbird # 允许安装应用，因为它们不是持久的
DRINODE: 指定自定义的图形设备，默认是 /dev/dri/renderD128
DNS_servers: 8.8.8.8,1.1.1.1 # 留空以使用路由器的DNS，或设置自定义DNS以避免本地DNS广告移除
localdisks: sda1 # 放置您的驱动器的硬件名称以挂载，用逗号分隔，或其标签。例如，sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，挂载smb服务器的列表，用逗号分隔
cifsusername: "username" # 可选，smb用户名，对于所有smb共享相同
cifspassword: "password" # 可选，smb密码
cifsdomain: "domain" # 可选，允许设置smb共享的域
```

## 安装

此插件的安装非常简单，与安装任何其他插件没有不同。

1. 将我的插件仓库添加到您的家庭助理实例中（在管理员插件商店的右上角，或单击下面的按钮如果您已经配置了我的HA）
   [![打开您的家庭助理实例并显示具有特定仓库URL预先填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开WebUI并调整软件选项。

## 支持

在GitHub上创建问题

## 图解
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
