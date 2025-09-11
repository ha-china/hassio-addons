## 配置

示例配置：

```yaml
vnc_server_host: 192.168.0.23
```

### `vnc_server_host`

要连接的 VNC 服务器的主机名或 IP 地址。

### `vnc_server_port`（可选）

VNC 服务器的远程端口。（默认值：`5900`）

### `vnc_server_password`（可选）

VNC 服务器的密码。当未设置且连接需要密码时，会在连接时询问。