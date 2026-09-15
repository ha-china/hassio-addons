# ShieldDNS

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/ShieldDNS/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_ShieldDNS)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-2.5.3-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-shielddns)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> AdGuard Home 的高性能 DoT 代理

---

## 📖 关于

**ShieldDNS** 是一款高性能、注重隐私的 DNS 解决方案，支持 **DNS-over-TLS (DoT)** 和 **DNS-over-HTTPS (DoH)**。

它配备了高端 **管理仪表板**，用于实时监控，并拥有强大的 **过滤引擎**，兼容 AdGuard、Pi-hole 和 uBlock origin 列表。

## 🚀 主要功能

- 🔒 **全双协议支持**：原生支持 **DNS-over-TLS (DoT)**（端口 853）和 **DNS-over-HTTPS (DoH)**（端口 443），具有高效率处理能力。
- 📊 **管理仪表板**：用于实时监控和高效率配置的高端 Web UI。
- 🛡️ **DNS 过滤**：集成的规则引擎，支持自动更新和去重。
- ⚡ **高性能**：基于 CoreDNS 和 Go 构建。
- 🔐 **安全访问**：Admin UI 强制密码保护（使用 bcrypt 加密）。
- 📱 **多平台支持**：非常适合 Android Private DNS、iOS Profiles 和 Windows 11。

## 🛠️ 使用方法

### Docker Compose

```yaml
services:
  shielddns:
    image: ghcr.io/faserf/shielddns:latest
    ports:
      - '853:853/tcp' # DoT
      - '443:443/tcp' # DoH
      - '8080:8080/tcp' # Admin Dashboard
    environment:
      - UPSTREAM_DNS=1.1.1.1, 8.8.8.8
      - LOG_LEVEL=info # debug, info, error
      - CERT_FILE=/certs/fullchain.pem
      - KEY_FILE=/certs/privkey.pem
    volumes:
      - ./certs:/certs
      - ./data:/data # 持久化配置和统计数据
```

## 🖥️ Admin Dashboard

访问仪表板：`http://YOUR_SERVER_IP:8080`。

- **初始设置**：首次访问时，将提示设置一个 12 位数的管理密码。
- **过滤**：直接从 UI 管理您的黑名单（AdGuard、Pi-hole 等）。
- **统计**：实时查看总查询数、被阻止的请求量及阻止比率。

## 📱 客户端配置

### DoT (DNS-over-TLS) - 端口 853

- **Android**：进入 **设置 > 网络 > Private DNS** 并输入 `dns.example.com`。
- **iOS/macOS**：使用提供的 `.mobileconfig` 模板。

### DoH (DNS-over-HTTPS) - 端口 443

- **Windows 11**：**设置 > 网络 > DNS 设置 > 编辑**。将 DNS over HTTPS 设置为“开启（手动）”，并输入 `https://dns.example.com/dns-query`。
- **浏览器**：在浏览器的“安全 DNS"设置中输入 `https://dns.example.com/dns-query`。

## 🛡️ 安全最佳实践

由于您将 DNS 服务器暴露给公众，您需要对其进行保护：

1. **使用 WAF**：在 DoH 端点前放置反向代理或 Cloudflare Tunnel。
2. **防火墙**：如果可能，白名单移动 IP 地址范围（端口 853）。
3. **密码**：为 Admin UI 使用强且唯一的密码（至少 12 个字符）。

## 💡 概念与协议

| 协议 | 端口 | 描述 | 支持状态 |
| :------- | :---- | :------------------------- | :-------------------------------------- |
| **DoT**  | `853` | 专用安全 DNS 端口。 | **原生** (Android Private DNS)。 |
| **DoH**  | `443` | 标准 HTTPS Web 端口。 | **原生** (Windows 11, iOS, Browsers)。 |

## 🏠 Home Assistant Addon

ShieldDNS 作为一个官方 Home Assistant Addon 提供，其管理仪表板支持完整的 **Ingress**（反向代理）。
[查看 Addon 仓库](https://github.com/FaserF/hassio-addons/tree/master/ShieldDNS)

---

## ⚙️ 配置

通过 Home Assistant App 页面上的 **配置** (Configuration) 标签页配置该应用。

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

此项目采用开源协议，遵循 MIT 协议。
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
