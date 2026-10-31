# Home Assistant 插件：DynDNS

自动更新您的动态 DNS IP 地址，支持多种动态 DNS (DynDNS 或 DDNS) 服务。

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]

## 关于

以下动态 DNS 服务经过测试：
- INWX: https://dyndns.inwx.com/nic/update?myip=${ipv4}&myipv6=${ipv6}
- Strato: https://dyndns.strato.com/nic/update?hostname=${DNS_SERVICE_USERNAME}&myip=${ipv4},${ipv6}
- DuckDNS: https://www.duckdns.org/update?domains=example.duckdns.org&token=abcd1234-1234-abcd-1234-abcdef123456&ip=${ipv4}&ipv6=${ipv6}
> 即使您的动态 DNS 服务未在此列出，仍然有可能与此插件兼容。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg

**基于 [Home Assistant DuckDns 插件](https://github.com/home-assistant/addons/tree/master/duckdns)**
**Logo 由 [logo.com](https://logo.com/) 创建**