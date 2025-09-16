## 配置

示例配置：

```yaml
vnc_server_host: 192.168.0.23
```

### `vnc_server_host`

VNC服务器的名称或IP地址，插件应连接到的VNC服务器。

### `vnc_server_port` (可选)

VNC服务器的远程端口。（默认：`5900`）

### `vnc_server_password` (可选)

VNC服务器的密码。如果未设置且连接需要密码，则在连接时请求输入。