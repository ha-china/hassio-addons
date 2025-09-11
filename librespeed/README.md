# 家庭助理插件：librespeed

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flibrespeed%2Fconfig.json)
![进入](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flibrespeed%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Flibrespeed%2Fconfig.json)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub超级检查器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一个给我仓库加星的人！要加星请点击下面的图片，然后它会出现在右上角。谢谢！_

[![查看@alexbelgium/hassio-addons的星标者](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/librespeed/stats.png)

## 关于

[LibreSpeed](https://github.com/librespeed/speedtest) 是一个非常轻量级的速度测试工具，使用Javascript实现，利用XMLHttpRequest和Web Workers。
该插件基于docker镜像 https://github.com/linuxserver/docker-librespeed

## 安装

安装此插件非常简单，与安装其他任何插件没有不同。

1. 将我的插件库添加到你的家庭助理实例中（在右上角的监视器插件商店中，或者如果你已经配置了我的HA，点击下面的按钮）
   [![打开你的家庭助理实例，并显示带有特定库URL预填的添加插件库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以存储你的配置。
4. 设置插件选项以符合你的偏好。
5. 启动插件。
6. 查看插件的日志以确认一切正常。
7. 打开WebUI并调整软件选项。

## 配置

WebUI可以在 <http://homeassistant:PORT> 找到。
默认的用户名/密码：在启动日志中描述。
配置可以通过应用的WebUI进行，除了以下选项：

```yaml
PGID: user
GPID: user
TZ: timezone
PASSWORD: "" # 可选
CUSTOM_RESULTS: false # 可选
localdisks: sda1 # 输入要挂载的驱动器的硬件名称，用逗号隔开，或其标签。例：sda1, sdb1, MYNAS...
networkdisks: "//SERVER/SHARE" # 可选，要挂载的smb服务器列表，用逗号隔开
cifsusername: "username" # 可选，smb用户名，所有smb共享相同
cifspassword: "password" # 可选，smb密码
```

## 支持

在GitHub上创建一个问题

## 插图

![插图](https://speedtest.fdossena.com/mpot_v6.gif)

[repository]: https://github.com/alexbelgium/hassio-addons