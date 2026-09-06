# Hass.io Add-ons: Teamspeak

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fteamspeak%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fteamspeak%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fteamspeak%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库加星标的人！要加星标，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/teamspeak/stats.png)

## 关于

TeamSpeak 提供了在线游戏、教育训练、内部企业通信以及与朋友和家人保持联系的理想的语音通信。我们的主要重点是提供一个易于使用、具有高安全标准、出色的语音质量和低系统及带宽使用的解决方案。

基于 https://hub.docker.com/r/ertagh/teamspeak3-server (arm) 和 https://hub.docker.com/r/mbentley/teamspeak:latest (x64)

## 安装

这个插件的安装非常简单，与其他插件的安装方式没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店的右上角，或者如果您已配置我的 HA，请点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件的选项以符合您的偏好。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 打开 WebUI 并调整软件选项

## 配置

这个插件没有 Web 界面 - 它运行一个 TeamSpeak 3 服务器。
使用 TeamSpeak 客户端在 `homeassistant.local:9987` 连接。

### 获取服务器凭证

1. 启动插件并等待初始化
2. 检查容器日志以获取：
   - 服务器管理员密码
   - 服务器管理员权限密钥

### 端口

| 端口 | 协议 | 描述 |
|------|------|------|
| `9987` | UDP | 语音通信 |
| `10011` | TCP | 服务器查询（原始） |
| `30033` | TCP | 文件传输 |
| `41144` | TCP | TSDNS |

**重要提示**：请配置您的路由器以转发这些端口以实现外部访问。

## 支持

如果您在安装中遇到问题，请务必查看 GitHub。