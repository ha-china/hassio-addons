# 家居助手插件：WireGuard Easy 版本 15+

您已找到在任意 Linux 主机上安装和管理 WireGuard 的最简单方法！

此版本运行 WG Easy 的 15 版本。Ingress 不工作。如果您需要 Ingress，请运行非 15+ 版本。

记住，您需要在 UI 前面配置一个反向代理以确保安全。此版本启用了非安全访问，但您除非在本地网络中使用，否则不应使用它。

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [Docker 镜像](https://github.com/wg-easy/wg-easy)。

* 一站式：WireGuard + Web UI。
* 15+ 版本不支持 Ingress（使用我的其他 wgeasy 插件，它工作正常）！
* 易于安装，简单易用。
* 列出、创建、编辑、删除、启用和禁用客户端。
* 显示客户端的 QR 码。
* 下载客户端的配置文件。
* 显示连接客户端的统计数据。
* 每个连接客户端的 Tx/Rx 图表。
* 支持Gravatar。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 根据需要编辑插件配置。只有 WG_HOST 必须更改为您的外部 IP 地址
1. 将 WG_PORT（通常为 51820）从路由器转发到您的家居助手 IP
1. 点击 `保存` 按钮以保存您的配置。

1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 打开 WebUI。Ingress 不工作，您需要运行非 15+ 的 WireGuard 版本
1. 制作客户端配置，扫描 QR 码或下载配置文件。
1. 如果更改设置，您可能需要重新制作客户端配置，但现在非常简单！
1. 如果您想在 UI 中使用密码，请登录到您的家居助手并输入：
1. 我不推荐将此 WebUI 暴露在互联网上，但您如果敢可以。使用 caddy 等反向代理确保您通过 SSL 保护连接。

## 配置

您的配置将保存在 /addon_configs/2effc9b9_wgeasy15plus

> 如果想使用 Adguard Home 插件 https://github.com/hassio-addons/addon-wireguard ，请将 `WG_DEFAULT_DNS` 设置为 172.30.32.1

[repository]: https://github.com/jdeath/homeassistant-addons
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
