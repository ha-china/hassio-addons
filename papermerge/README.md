# 家庭助手附加组件：Papermerge

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpapermerge%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpapermerge%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fpapermerge%2Fconfig.json)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库打星的人！要给我的仓库打星，请点击下面的图片，接着它会在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/papermerge/stats.png)

## 关于

开源文档管理系统 (DMS)
此附加组件基于来自 linuxserver.io 的 [docker 镜像](https://hub.docker.com/r/linuxserver/papermerge)。

## 安装

此附加组件的安装相当简单，与安装任何其他 Hass.io 附加组件没有不同。

1. [将我的 Hass.io 附加组件库][repository] 添加到您的 Hass.io 实例。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利。
1. 小心配置附加组件以满足您的偏好，详细信息请参见官方文档。

## 配置

Webui 可以在 `<your-ip>:8000` 找到。

默认用户名 `admin` 密码 `admin`

选项可以通过以下两种方式配置：

- 附加组件选项

```yaml
PGID: user
GPID: user
ocrlang: 可以从此页面设置任何语言（始终为三个字母） [这里](https://tesseract-ocr.github.io/tessdoc/Data-Files#data-files-for-version-400-november-29-2016)。
localdisks: sda1 #输入要挂载的驱动器的硬件名称，以逗号隔开，或其标签。例如：sda1, sdb1, MYNAS...
networkdisks: "<//SERVER/SHARE>" # 要挂载的 smbv2/3 服务器列表（可选）
cifsusername: "username" # smb 用户名（可选）
cifspassword: "password" # smb 密码（可选）
storage_dir: 存储目录位置 (https://papermerge.readthedocs.io/en/v2.0.1/consumption.html)
import_dir: 导入目录位置 (https://papermerge.readthedocs.io/en/v2.0.1/consumption.html)
imaphost: 从电子邮件导入 (https://papermerge.readthedocs.io/en/v2.0.1/consumption.html#imap-email)
imapusername: 从电子邮件导入 (https://papermerge.readthedocs.io/en/v2.0.1/consumption.html#imap-email)
imappassword: 从电子邮件导入 (https://papermerge.readthedocs.io/en/v2.0.1/consumption.html#imap-email)
CONFIG_LOCATION: papermerge.conf.py 的位置（见下文）
```

- papermerge.conf.py
  可以将自定义环境变量添加到 /config/addons_config/papermerge/papermerge.conf.py。
  完整的变量可以在此处找到： https://papermerge.readthedocs.io/en/v2.0.1/settings.html。

[repository]: https://github.com/alexbelgium/hassio-addons