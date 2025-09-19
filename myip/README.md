# Home assistant 插件：MyIP

MyIP 是一个高级 IP 工具，旨在提供有关您 IP 地址的广泛信息和诊断。它非常适合需要查看和分析其 IP 详细信息、检查网站可访问性、执行 DNS 泄漏测试等用户。

_感谢 everyone 给我的仓库 star！要 star 它，请点击下面的图片，它将在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/jason5ng32/MyIP)。

## 安装

此插件的安装非常直接，与安装任何其他 Hass.io 插件没有区别。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 应该可以通过 <your-ip>:port 打开 WebUI。

## 配置

```
port : 18966 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons