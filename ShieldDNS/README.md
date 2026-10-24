# ShieldDNS

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/ShieldDNS/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_ShieldDNS)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-2.5.7-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-shielddns)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 带有广告拦截、过滤功能和管理后台的 DNS-over-TLS/HTTPS 代理

---

## 📖 关于

**ShieldDNS** 是一个高性能、注重隐私的 DNS 解决方案，支持 **DNS-over-TLS (DoT)** 和 **DNS-over-HTTPS (DoH)**。

它配备了一个高端 **管理仪表板**，用于实时监控，以及一个强大的 **过滤引擎**，兼容 AdGuard、Pi-hole 和 uBlock Origin 列表。

## 🚀 主要功能

- 🔒 **全双重支持**：原生支持 **DNS-over-TLS (DoT)** (端口 853) 和 **DNS-over-HTTPS (DoH)** (端口 443)，并具有高效处理。
- 📊 **管理仪表板**：用于实时监控和配置的高端 Web UI。
- 🛡️ **DNS 过滤**：集成支持阻止列表的引擎，支持自动更新和去重。
- ⚡ **高性能**：基于 CoreDNS 和 Go 构建，以实现最大效率。
- 🔐 **安全访问**：管理后台强制使用 bcrypt 密码保护。
- 📱 **多平台支持**：完美适用于 Android Private DNS、iOS 配置文件和 Windows 11。

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
      - ./data:/data # 持久化配置和统计数据
```

## 🖥️ 管理仪表板

访问地址：`http://YOUR_SERVER_IP:8080`。

- **初始设置**：首次访问时，将提示您设置一个 12 字符的管理密码。
- **过滤**：直接从界面上管理您的阻止列表（AdGuard, Pi-hole 等）。
- **统计**：实时查看总查询数、被阻止的请求数和阻止比例。

## 📱 客户端配置

### DoT (DNS-over-TLS) - 端口 853

- **Android**：进入 **设置 > 网络 > Private DNS** 并输入 `dns.example.com`。
- **iOS/macOS**：使用提供的 `.mobileconfig` 模板。

### DoH (DNS-over-HTTPS) - 端口 443

- **Windows 11**：**设置 > 网络 > DNS 设置 > 编辑**。将 DNS over HTTPS 设置为“开启 (手动)"，并输入 `https://dns.example.com/dns-query`。
- **浏览器**：在浏览器的“安全 DNS"设置中输入 `https://dns.example.com/dns-query`。

## 🛡️ 安全最佳实践

由于您将 DNS 服务器暴露在公网上，您应该对其进行加固：

1. **使用 WAF**：在您的 DoH 端之前放置反向代理或 Cloudflare 隧道。
2. **防火墙**：如果可能，请为端口 853 白名单您的移动 IP 范围。
3. **密码**：为管理后台使用强且唯一的密码（至少 12 个字符）。

## 💡 概念与协议

| 协议 | 端口 | 描述 | 支持情况 |
| :------- | :---- | :------------------------- | :-------------------------------------- |
| **DoT**  | `853` | 专用安全 DNS 端口。 | **原生** (Android Private DNS)。 |
| **DoH**  | `443` | 标准 HTTPS Web 端口。 | **原生** (Windows 11, iOS, 浏览器)。 |

## 🏠 Home Assistant Addon

ShieldDNS 可作为官方 Home Assistant Addon 提供，管理仪表板具有完整的 **Ingress** 支持。
[查看 Addon 仓库](https://github.com/FaserF/hassio-addons/tree/master/ShieldDNS)

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **配置** 标签页配置应用程序。

### 选项

```yaml
certfile: fullchain.pem
developer_mode: false
doh_port: 443
dot_port: 8853
github_token: ''
keyfile: privkey.pem
log_level: info
```

---

## 👨‍💻 致谢与许可证

本项目是开源软件，采用 MIT 许可。
由 **FaserF** 维护。

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
