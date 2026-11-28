# ShieldDNS

<img src="https://raw.githubusercontent.com/FaserF/hassio-addons/master/ShieldDNS/logo.png" width="100" alt="Logo" />

[![Open your Home Assistant instance and show the app dashboard.](https://my.home-assistant.io/badges/supervisor_addon.svg)](https://my.home-assistant.io/redirect/supervisor_addon/?addon=605cee21_ShieldDNS)
[![Home Assistant App](https://img.shields.io/badge/home%20assistant-app-blue.svg)](https://www.home-assistant.io/apps/)
[![Docker Image](https://img.shields.io/badge/docker-2.5.20-blue.svg?logo=docker&style=flat-square)](https://github.com/FaserF/hassio-addons/pkgs/container/hassio-addons-shielddns)
![Project Maintenance](https://img.shields.io/badge/maintainer-FaserF-blue?style=flat-square)

> 具备广告拦截、过滤及管理员界面的 DNS-over-TLS/HTTPS 代理

---

## 📖 关于

**ShieldDNS** 是一款高性能、专注于隐私的 DNS 解决方案，支持 **DNS-over-TLS (DoT)** 和 **DNS-over-HTTPS (DoH)**。

它配备了用于实时监控的高级 **管理员仪表板 (Admin Dashboard)**，并拥有兼容 AdGuard、Pi-hole 和 uBlock origin 列表的强大 **过滤引擎 (Filtering Engine)**。

## 🚀 主要特性

- 🔒 **完整的双重支持**：原生支持 **DNS-over-TLS (DoT)** (端口 853) 和 **DNS-over-HTTPS (DoH)** (端口 443)，并具备高效处理能力。
- 📊 **管理员仪表板**：用于实时监控统计和配置的优质 Web UI。
- 🛡️ **DNS 过滤**：集成的过滤引擎，支持黑名单自动更新和去重。
- ⚡ **高性能**：基于 CoreDNS 和 Go 构建，追求最大效率。
- 🔐 **安全访问**：管理员界面强制使用 bcrypt 密码保护。
- 📱 **多平台兼容**：完美适用于 Android 私有 DNS、iOS 配置文件和 Windows 11。

## 🛠️ 使用方法

### Docker Compose

```yaml
services:
  shielddns:
    image: ghcr.io/faserf/shielddns:latest
    ports:
      - '853:853/tcp' # DoT
      - '443:443/tcp' # DoH
      - '8080:8080/tcp' # 管理员仪表板
    environment:
      - UPSTREAM_DNS=1.1.1.1, 8.8.8.8
      - LOG_LEVEL=info # debug, info, error
      - CERT_FILE=/certs/fullchain.pem
      - KEY_FILE=/certs/privkey.pem
    volumes:
      - ./certs:/certs
      - ./data:/data # 持久化配置和统计
```

## 🖥️ 管理员仪表板

访问仪表板地址 `http://YOUR_SERVER_IP:8080`。

- **初始化设置**：首次访问时，将被提示设置一个 12 位的管理员密码。
- **过滤**：可直接从 UI 中管理您的黑名单（如 AdGuard、Pi-hole 等）。
- **统计**：实时查看总查询数、被阻断请求数和阻断比例。

## 📱 客户端配置

### DoT (DNS-over-TLS) - 端口 853

- **Android**：进入 **设置 > 网络 > 私有的 DNS** 并输入 `dns.example.com`。
- **iOS/macOS**：使用提供的 `.mobileconfig` 模板。

### DoH (DNS-over-HTTPS) - 端口 443

- **Windows 11**：**设置 > 网络 > DNS 设置 > 编辑**。将 DNS over HTTPS 设为“开启 (手动)"，并输入 `https://dns.example.com/dns-query`。
- **浏览器**：在浏览器的安全 DNS 设置中输入 `https://dns.example.com/dns-query`。

## 🛡️ 安全最佳实践

由于您暴露 DNS 服务器到公开网络，因此您需要对其安全加固：

1. **使用 WAF**：在您的 DoH 端点前放置一个反向代理或 Cloudflare Tunnel。
2. **防火墙**：如可能，在防火墙中允许移动 IP 地址段访问端口 853。
3. **密码**：管理员界面使用强密码且唯一（至少 12 个字符）。

## 💡 概念与协议

| 协议 | 端口 | 描述 | 支持情况 |
| :------- | :---- | :------------------------- | :-------------------------------------- |
| **DoT**  | `853` | 专用安全 DNS 端口。 | **原生** (Android 私有 DNS)。       |
| **DoH**  | `443` | 标准 HTTPS Web 端口。   | **原生** (Windows 11, iOS, 浏览器)。 |

## 🏠 Home Assistant 补充包

ShieldDNS 作为官方 Home Assistant 补充包可用，为管理员仪表板提供了完整的 **入口 (Ingress)** 支持。
[查看补充包仓库](https://github.com/FaserF/hassio-addons/tree/master/ShieldDNS)

---

## ⚙️ 配置

通过 Home Assistant App 页面中的 **配置** 选项卡配置应用程序。

### 选项

```yaml
certfile: fullchain.pem
database_type: sqlite
database_url: ''
developer_mode: false
doh_port: 443
dot_port: 853
github_token: ''
keyfile: privkey.pem
log_level: info
```

---

## 👨‍💻 致谢与许可

本项目开源并采用 MIT 许可。
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
