# SSH Tunnel

Hass.io 的附加组件，用于通过 SSH 协议配置对 **Home Assistant** 的外部访问。如果你有 "灰色" IP 地址，这个非常有用。

要使用此功能，你必须已经租用了一台具有 SSH 访问权限的服务器。

默认情况下，该附加组件将 Hass.io 服务器的 80 和 443 端口映射到外部服务器，并在 Hass.io 服务器上创建 SOCKS 代理。

在首次配置时，只需设置你的服务器的 `host`、`port` 和 `user`。

启动时，日志中会显示公共 SSH 密钥（相当长），例如：

```
ssh-rsa AAAAB3NzaC1yc2EA...XfsAODObXZRVMI03 root@2fc7ce79c3de
```

密钥在每次安装附加组件时随机生成。你需要将其 **复制到你的公共服务器** 的用户主目录中，该用户用于通过 SSH 连接到服务器：

`~/.ssh/authorized_keys`

例如 `/root/.ssh/authorized_keys` 或 `/home/USERNAME/.ssh/authorized_keys`

如有必要，请创建 `.ssh` 目录和 `authorized_keys` 文件 - 可能不存在。

**注意！** `.ssh` 目录被视为隐藏目录。

连接中断后，将自动恢复。但是请阅读 **恢复中断** 部分。

## 设置

- `ssh_host` - 公共服务器地址
- `ssh_user` - 公共服务器用户
- `ssh_port` - 公共服务器端口
- `tunnel_http` - 转发 HTTP 端口
- `tunnel_https` - 转发 HTTPS 端口
- `socks_port` - 在指定的 Hass.io 服务器端口启用 SOCKS 代理模式
- `advanced` - ssh 命令的额外参数
- `before` - 见 **恢复中断** 部分

**注意！** 对于映射 "特权" 端口（例如 80 和 443），公共服务器的用户必须是管理员。如果你在这方面有问题，可以搜索：**ssh forward privileged ports**。

配置示例：

- 将 80 和 443 端口从 Hass.io 服务器映射到外部服务器
- 在 Hass.io 服务器上创建 SOCKS 代理，端口为 1080

```yaml
ssh_host: 87.250.250.242
ssh_user: root
ssh_port: 22
tunnel_http: true
tunnel_https: true
socks_port: 1080
```

## 应用

### 对 Home Assistant 的外部访问

与 [Caddy Proxy](https://github.com/bestlibre/hassio-addons/tree/master/caddy_proxy) 哈希.io 插件一起使用非常方便。这是一个轻量级的 Web 服务器，自动生成 HTTPS 证书。

Caddy Proxy 的配置示例：

```yaml
homeassistant: sshtunnel.duckdns.org
vhosts": []
raw_config": []
email": sshtunnel@gmail.com
```

电子邮件用于生成证书。域名（DNS）需要指向你的公共服务器的 IP 地址。

**设置：**

1. 租用 VDS 服务器
2. 配置 SSH Tunnel 附加组件
3. 创建并配置 Duck DNS 帐户
4. 配置 Caddy Proxy 附加组件
5. 配置 Home Assistant 的双重身份验证
6. 使用安全稳定的外部访问 HA

### Telegram 机器人的代理

```yaml
telegram_bot:
- platform: broadcast
  api_key: TELEGRAM_BOT_API_KEY
  allowed_chat_ids: [123456789]
  proxy_url: socks5://172.17.0.1:1080
```

PS：`172.17.0.1` - 对于标准的 Hass.io 安装，这个 IP 地址无需更改

### 任何本地资源的隧道

例如，外部访问在路由器上运行的家庭 OpenVPN 服务器。

```yaml
advanced: -R 1194:192.168.1.1:1194
```

PS：现在可以通过 `sshtunnel.duckdns.org:1194` 连接回家

### 恢复中断

在附加组件中设置了每 30 秒检查一次连接的功能。如果 3 次检查失败，则连接会中断。

**注意！** 按照默认设置，在连接中断后，您服务器上的端口将保持占用状态！

有两种选择：

1. 在服务器上设置与客户端的连接检查：[ClientAliveInterval](https://sys-adm.in/os/nix/429-centos-increase-ssh-session-timeout.html)

2. 在客户端每次连接时释放端口

为此，我设置了选项 `before: fuser -k 443/tcp`。 **fuser** 是在 Ubuntu 中释放被占用端口的方式之一，**默认情况下未安装！**

我个人使用第二种选择。