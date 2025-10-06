# ESPHome 扩展程序
## 安装

这个扩展程序的安装过程非常直接，与安装任何其他 Home Assistant 扩展程序没有区别。

1. 在 Supervisor 扩展程序商店中搜索“ESPHome”扩展程序。
2. 点击安装以下载扩展程序并在您的机器上解压它。这可能需要一些时间。
3. 可选：如果您正在使用 SSL/TLS 证书并希望加密与该扩展程序的通信，请在 `ssl` 字段中输入 `true`，并相应地设置 `fullchain` 和 `certfile` 选项。
4. 启动扩展程序，检查扩展程序的日志以查看是否一切顺利。
5. 点击“打开 Web UI”以打开 ESPHome 仪表板。您将被要求输入您的 Home Assistant 凭据 - ESPHome 使用 Home Assistant 的认证系统来登录您。

您可以在 https://esphome.io/ 查看ESPHome 文档。

## 配置

**注意**：_更改配置时，请记得重启扩展程序。_

示例扩展程序配置：

```json
{
  "ssl": false,
  "certfile": "fullchain.pem",
  "keyfile": "privkey.pem"
}
```

### 选项：`ssl`

启用或禁用到此扩展程序 Web 服务器的加密 SSL/TLS（HTTPS）连接。
将其设置为 `true` 以加密通信，否则设置为 `false`。
请注意，如果您将此设置为 `true`，您还必须生成加密所需的密钥和证书文件。
例如，使用 [Let's Encrypt](https://www.home-assistant.io/addons/lets_encrypt/)
或 [自签名证书](https://www.home-assistant.io/docs/ecosystem/certificates/tls_self_signed_certificate/)。

### 选项：`certfile`

用于 SSL 的证书文件。如果此文件不存在，扩展程序启动将失败。

**注意**：文件必须存储在 `/ssl/` 中，这是 Home Assistant 的默认路径。

### 选项：`keyfile`

用于 SSL 的私钥文件。如果此文件不存在，扩展程序启动将失败。

**注意**：文件必须存储在 `/ssl/` 中，这是 Home Assistant 的默认路径。

### 选项：`leave_front_door_open`

在扩展程序配置中添加此选项允许您通过将其设置为 `true` 来禁用身份验证。

### 选项：`relative_url`

在相对 URL 下托管 ESPHome 仪表板，以便它可以在现有的 Web 代理（如 NGINX）下作为相对 URL 进行集成。默认值为 `/`。

### 选项：`status_use_ping`

默认情况下，仪表板使用 mDNS 来检查节点是否在线。如果您的路由器支持 mDNS 转发或 avahi，否则这不会跨子网工作。

将其设置为 `true` 将使 ESPHome 使用 ICMP ping 请求来获取节点状态。如果所有节点即使在连接时也总是显示离线状态，请使用此选项。

### 选项：`streamer_mode`

如果设置为 `true`，这将启用流模式，使 ESPHome 隐藏所有可能私有的信息。例如 WiFi (B)SSID（可用于找到您的位置）、用户名等。请注意，您需要在您的 YAML 文件中使用 `!secret` 标签来阻止这些信息在编辑和验证时显示。