<img src="logo.png" align="right" width="128" height="128">

# ShieldDNS

ShieldDNS 允许您从移动设备安全地接受 DNS-over-TLS (DoT) 连接，并将它们转发到您本地的 AdGuard Home 或其他 DNS 服务器。这即使在您处于本地网络（如果您的设备强制使用私有 DNS）或安全地公开此端口时，也能保护您的 DNS 查询。

## 配置

**注意**：您必须为所使用的域名拥有有效的 SSL 证书。如果您使用标准的 HA SSL 设置，您的证书可能位于 `/ssl/`。

### 选项：`upstream_dns`（必需）

上游 DNS 服务器的 IP 地址。这通常是您的 AdGuard Home IP，或者如果您只想将 DoT 网关连接到互联网，则为 `1.1.1.1`。

### 选项：`certfile`（必需）

`/ssl/` 目录中您的证书文件的名称。
示例：`fullchain.pem`

### 选项：`keyfile`（必需）

`/ssl/` 目录中您的私钥文件的名称。
示例：`privkey.pem`

### 选项：`cloudflare_tunnel_token`（可选）

如果您想通过 Cloudflare Tunnel（无需端口转发）公开您的 DNS 服务器，请在此处提供您的隧道令牌。

1. 在 Cloudflare Zero Trust 控制台创建一个隧道。
2. 选择 "Docker" 作为环境。
3. 复制令牌（安装命令中 `--token` 后面的长字符串）。
4. 将其粘贴在此处。

### 选项：`log_level`（可选）

设置日志的详细程度。

- `error`：仅显示关键错误。
- `info`：标准日志记录（包括 DNS 查询）。
- `debug`：详细日志记录（用于故障排除）。

## 集成

### Cloudflare Tunnel（官方插件）支持

您可以使用官方的 **Cloudflare Tunnel** Home Assistant 插件（或 cloudflared docker 容器）将此插件公开到互联网，而无需打开端口。

**设置**：

1. 在 Cloudflare 控制台创建一个公共主机名（例如，`dns.example.com`）。
2. 将服务指向 `HTTPS://<YOUR_HA_IP>:443`。
3. 在 **TLS 验证** 下禁用验证（无 TLS 验证）或如果您使用自签名证书，则提供 CA。
4. 现在 `https://dns.example.com/dns-query` 将提供 DNS-over-HTTPS！

### AdGuard Home 集成

要使用此插件作为 **AdGuard Home** 的安全前端：

1. 在 Home Assistant 中安装 AdGuard Home 插件。
2. 记下您的 Home Assistant 的 IP 地址（例如，`192.168.1.50`）。
3. 在 ShieldDNS 配置中，将 `upstream_dns` 设置为此 IP。
4. ShieldDNS 现在将接受加密请求并将其本地转发到 AdGuard Home。
5. **端口冲突**：AdGuard Home 可能会尝试绑定端口 `443`（Web UI HTTPS）和 `853`（DoT 加密）。
   - 如果您希望 ShieldDNS 处理加密，请**在 AdGuard Home 中禁用加密**。
   - 如果您需要在 443 上使用 AdGuard Home Web UI，请将 ShieldDNS 的 `443` 端口映射更改为其他内容（例如 `8443`）。

## 支持的端口和协议

| 端口 | 协议 | 使用情况                |
| ---- | ---- | ----------------------- |
| 853  | DoT  | 标准 DNS-over-TLS       |
| 443  | DoH  | 标准 DNS-over-HTTPS     |
| 784  | DoH  | Cloudflare 交替 HTTPS  |
| 2443 | DoH  | Cloudflare 交替 HTTPS  |

## 使用方法

1. 配置上述选项。
2. 启动插件。
3. 在您的 Android 设备上，进入 **设置 > 网络 > 私有 DNS**。
4. 将 "私有 DNS 提供商主机名" 设置为您证书匹配的域名。
5. 保存。您的设备现在将向此插件发送加密的 DNS 查询！

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
