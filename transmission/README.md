# 家庭助手插件：Transmission

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.json)
![入口](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftransmission%2Fconfig.json)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点亮星星的人！要给它点亮星星，请点击下面的图片，然后它将在右上角显示。谢谢！_

[![@alexbelgium/hassio-addons 的星际观众](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/transmission/stats.png)

## 关于

Transmission 是一个 bittorrent 客户端。
这个插件基于来自 linuxserver.io 的 [docker 镜像](https://github.com/linuxserver/docker-transmission)。

## 安装

这个插件的安装过程相当简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 仔细配置插件以满足你的偏好，具体见官方文档。

## 配置

选项：

```yaml
download_dir: "/share/downloads" # 下载后文件将保存的位置
incomplete_dir: "/share/incomplete" # 下载过程中保存文件的位置
localdisks: sda1 # 以逗号分隔放置你要挂载的驱动器的硬件名称或标签。例如 sda1, sdb1, MYNAS...
networkdisks: "<//SERVER/SHARE>" # 挂载的 smbv2/3 服务器列表，如果没有则为'' 
cifsusername: "<username>" # smb 用户名
cifspassword: "<password>" # smb 密码
```

完整的 transmission 选项位于 /share/transmission（确保在修改之前停止插件，因为 Transmission 在停止时会写入其正在进行的值，可能会覆盖你的更改）

Webui 可以在 `<your-ip>:9091` 找到。

## 问题

# 如果 settings.json 在日志中被重置 https://github.com/alexbelgium/hassio-addons/issues/1269
- 安装 Filebrowser 插件
- 删除文件夹 /homeassistant/addons_config/transmission 和 /homeassistant/addons_config/transmission-ls

[repository]: https://github.com/alexbelgium/hassio-addons