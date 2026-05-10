# ShieldDNS

![ShieldDNS 标志](https://raw.githubusercontent.com/FaserF/hassio-addons/master/ShieldDNS/logo.png) width="100" alt="Logo" />

[![打开您的 Home Assistant 实例并显示应用仪表板](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_ShieldDNS)
[![Home Assistant 应用](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker 镜像](https://img.shields.io/badge/docker-2.4.6-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-shielddns)
![项目维护者](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 高性能的 AdGuard Home DoT 代理

---

## 📖 关于

**ShieldDNS** 是一个高性能、注重隐私的 DNS 解决方案，支持 **DNS-over-TLS (DoT)** 和 **DNS-over-HTTPS (DoH)**。

它具有高级的 **管理仪表板** 用于实时监控和与 AdGuard、Pi-hole 和 uBlock origin 列表兼容的强大 **过滤引擎**。

## 🚀 关键特性

- 🔒 **全面双支持**：原生支持 **DNS-over-TLS (DoT)**（端口 853）和 **DNS-over-HTTPS (DoH)**（端口 443），具有高效率的处理。
- 📊 **管理仪表板**：高级网页 UI 用于实时统计和配置。
- 🛡️ **DNS 过滤**：集成的引擎适用于带有自动更新和去重的阻止列表。
- ⚡ **高性能**：基于 CoreDNS 和 Go，提供最大效率。
- 🔐 **安全访问**：管理 UI 必须强制密码保护（bcrypt）。
- 📱 **多平台**：非常适合 Android 私有 DNS、iOS 配置文件和 Windows 11。

## 🛠️ 使用方法

### Docker Compose

```yaml
services:
  shielddns:
    image: ghcr.io/faserf/shielddns:latest
    ports:
      - '853:853/tcp' # DoT
      - '443:443/tcp' # DoH
      - '8080:8080/tcp' # 管理仪表板
    environment:
      - UPSTREAM_DNS=1.1.1.1, 8.8.8.8
      - LOG_LEVEL=info # debug, info, error
      - CERT_FILE=/certs/fullchain.pem
      - KEY_FILE=/certs/privkey.pem
    volumes:
      - ./certs:/certs
      - ./data:/data # 持久配置和统计
```

## 🖥️ 管理仪表板

在 `http://YOUR_SERVER_IP:8080` 访问仪表板。

- **初始设置**：首次访问时，您将被提示设置一个 12 位的行政密码。
- **过滤**：直接从 UI 管理您的阻止列表（AdGuard、Pi-hole 等）。
- **统计**：实时查看总查询、阻止请求和阻止比率。

## 📱 客户端配置

### DoT (DNS-over-TLS) - 端口 853

- **Android**：进入 **设置 > 网络 > 私有 DNS** 并输入 `dns.example.com`。
- **iOS/macOS**：使用提供的 `.mobileconfig` 模板。

### DoH (DNS-over-HTTPS) - 端口 443

- **Windows 11**：进入 **设置 > 网络 > DNS 设置 > 编辑**。将 DNS over HTTPS 设置为“开（手动）”并输入 `https://dns.example.com/dns-query`。
- **浏览器**：在浏览器的“安全 DNS”设置中输入 `https://dns.example.com/dns-query`。

## 🛡️ 安全最佳实践

由于您正在将 DNS 服务器公开到公网，您应该对其进行保护：

1. **使用 WAF**：在 DoH 端点前面放置反向代理或 Cloudflare Tunne。
2. **防火墙**：如果可能，为端口 853 白名单您的移动 IP 范围。
3. **密码**：为管理 UI 使用强大且唯一的密码（至少 12 个字符）。

## 💡 概念和协议

| 协议 | 端口 | 描述 | 支持 |
| :--- | :--- | :--- | :--- |
| **DoT** | `853` | 专用的安全 DNS 端口。 | **原生**（Android 私有 DNS）。 |
| **DoH** | `443` | 标准的 HTTPS 网页端口。 | **原生**（Windows 11、iOS、浏览器）。 |

## 🏠 Home Assistant 插件

ShieldDNS 作为官方 Home Assistant 插件提供，具有完整的 **入站** 支持用于管理仪表板。
[查看插件仓库](https://github.com/FaserF/hassio-addons/tree/master/ShieldDNS)

---

## ⚙️ 配置

通过 Home Assistant 应用页面中的 **配置** 选项卡配置应用。

### 选项

```yaml
certfile: fullchain.pem
doh_port: 443
dot_port: 8853
fallback_dns: false
fallback_dns_server: 1.1.1.1
keyfile: privkey.pem
log_level: info
prefer_encrypted: true
upstream_dns: 86.54.11.100 1.1.1.1 9.9.9.9 8.8.8.8 1.0.0.1
upstream_dot: unfiltered.joindns4.eu dns.quad9.net one.one.one.one dns.google
```

---

## 👨‍💻 致谢与许可

此项目是开源的，并受 MIT 许可证的约束。
由 **FaserF** 维护。
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
