# ESPHome 插件
## 安装

这个插件的安装过程非常简单，与安装其他 Home Assistant 插件的过程相同。

1. 在 Supervisor 插件商店中搜索“ESPHome”插件。
2. 点击安装以下载插件并在您的机器上解压。这可能需要一些时间。
3. 可选：如果您正在使用 SSL/TLS 证书并希望加密与该插件之间的通信，请在 `ssl` 字段中输入 `true`，并相应地设置 `fullchain` 和 `certfile` 选项。
4. 启动插件，检查插件的日志以查看是否一切正常。
5. 点击“打开 Web UI”以打开 ESPHome 仪表板。您将被要求输入 Home Assistant 凭据 - ESPHome 使用 Home Assistant 的认证系统来登录。

您可以在 https://esphome.io/ 查看 ESPHome 文档。

## 配置

**注意**：_更改配置时请记住重启插件。_

示例插件配置：

```json
{
  "ssl": false,
  "certfile": "fullchain.pem",
  "keyfile": "privkey.pem"
}
```

### 选项：`ssl`

启用或禁用到该插件 Web 服务器的加密 SSL/TLS（HTTPS）连接。
设置为 `true` 以加密通信，否则设置为 `false`。
请注意，如果您将此选项设置为 `true`，您还必须生成用于加密的密钥和证书文件。
例如，使用 [Let's Encrypt](https://www.home-assistant.io/addons/lets_encrypt/)
或 [自签名证书](https://www.home-assistant.io/docs/ecosystem/certificates/tls_self_signed_certificate/)。

### 选项：`certfile`

用于 SSL 的证书文件。如果此文件不存在，插件启动将失败。

**注意**：文件必须存储在 `/ssl/` 中，这是 Home Assistant 的默认路径。

### 选项：`keyfile`

用于 SSL 的私钥文件。如果此文件不存在，插件启动将失败。

**注意**：文件必须存储在 `/ssl/` 中，这是 Home Assistant 的默认路径。

### 选项：`leave_front_door_open`

将此选项添加到插件配置中，允许您通过设置为 `true` 来禁用身份验证。

### 选项：`relative_url`

在相对 URL 下托管 ESPHome 仪表板，以便它可以集成到现有的 Web 代理（如 NGINX）的相对 URL 下。默认值为 `/`。

### 选项：`status_use_ping`

默认情况下，仪表板使用 mDNS 来检查节点是否在线。如果您的路由器不支持 mDNS 转发或 avahi，这将无法跨子网工作。

将此选项设置为 `true` 将使 ESPHome 使用 ICMP ping 请求来获取节点状态。如果所有节点即使连接时也始终显示离线状态，请使用此选项。

### 选项：`streamer_mode`

如果设置为 `true`，这将启用流模式，使 ESPHome 隐藏所有可能包含私人信息的详细信息。例如 WiFi (B)SSID（可能用于定位您的位置）、用户名等。请注意，您需要在您的 YAML 文件中使用 `!secret` 标签来阻止这些信息在编辑和验证时显示。