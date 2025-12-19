<img src="logo.png" align="right" width="128" height="128">

# ShieldDNS

ShieldDNS 允许您安全地接受来自移动设备的 DNS-over-TLS (DoT) 连接，并将它们转发到您本地的 AdGuard Home 或其他 DNS 服务器。这即使在您处于本地网络（如果您的设备强制执行私有 DNS）或如果您安全地公开此端口时，也能保护您的 DNS 查询。

## 配置

**注意**：您必须为所使用的域名拥有有效的 SSL 证书。如果您使用标准的 HA SSL 设置，您的证书可能位于 `/ssl/`。

### 选项：`upstream_dns`（必需）

上游 DNS 服务器的 IP 地址。这通常是您的 AdGuard Home IP，或者如果您只想到互联网上设置 DoT 网关，则为 `1.1.1.1`。

### 选项：`certfile`（必需）

在 `/ssl/` 目录中您的证书文件的名称。
示例：`fullchain.pem`

### 选项：`keyfile`（必需）

在 `/ssl/` 目录中您的私钥文件的名称。
示例：`privkey.pem`

### 选项：`cloudflare_tunnel_token`（可选）

如果您想通过 Cloudflare Tunnel（无需端口转发）公开您的 DNS 服务器，请在此处提供您的隧道令牌。

1. 在 Cloudflare Zero Trust 控制台中创建一个隧道。
2. 选择“Docker”作为环境。
3. 复制令牌（安装命令中 `--token` 后面的长字符串）。
4. 将其粘贴在此处。

### 选项：`log_level`（可选）

设置日志的详细程度。

- `error`：仅显示关键错误。
- `info`：标准日志记录（包括 DNS 查询）。
- `debug`：详细日志记录（用于故障排除）。

### 选项：`dot_port`（可选）

监听 DNS-over-TLS 的端口。默认：`8853`。

### 选项：`doh_port`（可选）

监听 DNS-over-HTTPS 的端口。默认：`3443`。
_注意：默认为 3443 以避免与 Home Assistant UI 在 443 端口冲突。_

### 选项：`doh_alt_port_1` & `doh_alt_port_2`（可选）

可选的额外端口用于 DoH/HTTPS（例如 784, 2443）。默认禁用。

## 网络

此插件以 **主机网络** 模式运行，以保留 DNS 查询的“源 IP”。
这意味着：

1.  **源 IP**：AdGuard Home 将看到客户端的真实 IP（例如您的手机）。
2.  **端口**：上述配置的端口直接在您的 Host 设备上打开。
3.  **冲突**：确保这些端口未被其他服务使用（如 AdGuard Home 加密或 Nginx Proxy Manager）。

## 集成

### Cloudflare Tunnel（官方插件）支持

您可以使用官方的 **Cloudflare Tunnel** Home Assistant 插件（或 cloudflared docker 容器）将此插件公开到互联网，而无需打开端口。

**设置**：

1. 在 Cloudflare 控制台中创建一个公共主机名（例如，`dns.example.com`）。
2. 将服务指向 `HTTPS://localhost:3443`（或您配置的任何 `doh_port`）。
3. 在 **TLS 验证** 下禁用验证（无 TLS 验证）或提供 CA。

### AdGuard Home 集成

要将此插件用作 **AdGuard Home** 的安全前端：

1. 在 Home Assistant 中安装 AdGuard Home 插件。
2. 记下您的 Home Assistant 的 IP 地址/主机名。
3. 在 ShieldDNS 配置中，将 `upstream_dns` 设置为此 IP。
4. ShieldDNS 现在将接受加密请求并将其本地转发到 AdGuard Home。
5. **端口冲突**：由于 ShieldDNS 以主机网络运行，如果两者都尝试在所有接口上绑定相同端口，则它不能与 AdGuard Home 共享端口。
   - 如果 AdGuard 使用 443/853，请更改配置中的 ShieldDNS 端口（`dot_port`, `doh_port`）或禁用 AdGuard 中的加密。

## 支持的协议

| 参数     | 协议   | 默认值 |
|----------|--------|-------|
| `dot_port` | DoT    | 8853  |
| `doh_port` | DoH    | 3443  |

## 使用

1. 配置上述选项。
2. 启动插件。
3. 在您的 Android 设备上，转到 **设置 > 网络 > 私有 DNS**。
4. 将“私有 DNS 提供商主机名”设置为与您的证书匹配的域名。
5. 保存。您的设备现在将向此插件发送加密的 DNS 查询！

## 🛡️ 安全最佳实践

由于您通过隧道或端口转发公开了一个 DNS 服务器，因此您应该保护它以防止滥用（DNS 放大、扫描、DDoS）。

### 1. Cloudflare Tunnel（强烈推荐）

使用 Cloudflare Tunnel 隐藏您的源 IP 并允许您使用 **Cloudflare Zero Trust** 功能。

- **WAF / 自定义规则**：
  - **阻止国家**：阻止所有国家，除了您自己的国家。
  - **阻止机器人**：启用“机器人战斗模式”或阻止已知的机器人 User-Agent。
- **速率限制**：为您的主机名设置速率限制规则（例如，每 IP 每秒最多 50 个请求）以防止洪水。
- **Zero Trust 身份验证**：如果可行，将 DNS 端点放在 Cloudflare Access 后面（注意：这会破坏标准 DoH 客户端，除非它们支持身份验证头）。

### 2. 一般防火墙

如果未使用 Cloudflare（直接暴露）：

- **白名单 IP**：仅允许您自己的移动 IP 范围或特定的网络（如果可能）。
- **Fail2Ban**：监控日志并禁止滥用 IP（需要将日志挂载到主机）。
- **限制速率**：使用 `iptables` 或 UFW 限制端口 853/443 的连接速率。

## 故障排除

检查插件的日志。如果证书无效或路径错误，CoreDNS 将无法启动。
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
