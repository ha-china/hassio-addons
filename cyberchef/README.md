# 家庭助手插件：CyberChef

CyberChef 是一个简单、直观的网页应用程序，用于在网络浏览器中执行各种“网络”操作。这些操作包括简单的编码，如 XOR 和 Base64，复杂的加密，如 AES、DES 和 Blowfish，创建二进制和十六进制转储，数据的压缩和解压缩，计算哈希和校验和，IPv6 和 X.509 解析，改变字符编码等。

该工具旨在使技术和非技术分析师能够以复杂的方式操作数据，而无需处理复杂的工具或算法。它是在分析师的 10% 创新时间中构思、设计、构建并逐步改进的，历时多年。

_感谢所有为我的仓库标星的人！要标星，请点击下面的图片，接着它会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于 [docker 镜像](https://github.com/gchq/CyberChef)。

## 安装

这个插件的安装非常简单，与安装其他任何 Hass.io 插件没有不同。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，以查看一切是否正常。
1. 打开 WebUI 应该可以通过 ingress 或 <your-ip>:port 访问。

## 配置

```
port : 80 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons