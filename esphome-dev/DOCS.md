# ESPHome DEV add on

这是 **开发** 版本的 ESPHome add on。

要部署生产节点，请使用主流发布的 add on。

该 add on 使用的是每天凌晨02:00 UTC自动构建的 ESPHome 版本，用于测试开发中的组件。请参考下方的 `esphome_fork` 配置以正确配置 add on。一旦更新了配置，请确保重新构建镜像。

## 配置

**注意**：_更改配置时请记得重启 add-on_。

### 选项：`esphome_fork`

从分支或fork中安装 ESPHome。
例如，要测试一个pull请求，使用 `pull/XXXX/head`，其中 `XXXX` 是PR编号，
或者你可以指定fork所有者的用户名和分支 `username:branch`，假设仓库名称仍然是 `esphome`。

如果你需要在镜像更新前在开发分支上测试最新提交，可以在这里输入 `dev`。

请注意，你正在使用的fork或分支**必须**与 ESPHome 开发版本保持同步，
否则add-on将不会启动。

## 一般 ESPHome add on 配置

一般选项在其他版本中也可用。

### 选项：`ssl`

启用或禁用此add-on的Web服务器加密SSL/TLS（HTTPS）连接。
设置为 `true` 以加密通信，否则设置为 `false`。
请注意，如果你将此设置为 `true`，你必须生成加密所需的密钥和证书文件。
例如，使用 [Let's Encrypt](https://www.home-assistant.io/addons/lets_encrypt/)
或 [自签名证书](https://www.home-assistant.io/docs/ecosystem/certificates/tls_self_signed_certificate/)。

### 选项：`certfile`

用于SSL的证书文件。如果此文件不存在，add-on启动将失败。

**注意**：文件**必须**存储在 `/ssl/`，这是Home Assistant的默认路径。

### 选项：`keyfile`

用于SSL的私钥文件。如果此文件不存在，add-on启动将失败。

**注意**：文件**必须**存储在 `/ssl/`，这是Home Assistant的默认路径。

### 选项：`leave_front_door_open`

在add-on配置中添加此选项，允许你通过将其设置为 `true` 来禁用身份验证。

### 选项：`relative_url`

在相对URL下托管 ESPHome 仪表板，以便它可以被集成到现有的Web代理（如NGINX）的相对URL下。默认值为 `/`。

### 选项：`status_use_ping`

默认情况下，仪表板使用mDNS来检查节点是否在线。如果路由器不支持mDNS转发或avahi，这跨子网将无法工作。

将其设置为 `true` 将使 ESPHome 使用ICMP ping请求来获取节点状态。如果所有节点即使连接时也总是显示离线状态，请使用此选项。

### 选项：`streamer_mode`

如果设置为 `true`，这将启用streamer模式，使 ESPHome 隐藏所有潜在的个人信息。例如WiFi (B)SSID（可能被用来找到你的位置）、用户名等。
请注意，你需要在你的YAML文件中使用 `!secret` 标签来阻止这些信息在编辑和验证时显示。