# EasyTier 使用说明

欢迎使用 **EasyTier**，这是一款旨在提升网络性能和稳定性的网络优化工具。以下是使用 EasyTier 的详细指南：

## 配置指南

安装完成后，您需要对 EasyTier 进行配置。本插件通过**环境变量**进行配置，支持EasyTier的所有功能。

## 配置参数说明

| 参数 | 说明 | 默认值 |
|------|------|--------|
| `env_vars` | 环境变量数组，每个变量包含name、value和type | 空数组 |

## 环境变量配置

在env_vars数组中添加环境变量，每个变量包含：

- **name**: 环境变量名称（如：ET_NETWORK_NAME）
- **value**: 环境变量值（如：my-vpn）
- **type**: 变量类型（string/boolean/integer，默认为string）



## 完整环境变量说明

### 基本设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_MACHINE_ID | Web配置服务器通过machine id识别机器 | abc123-def456 | string |
| ET_CONFIG_FILE | 配置文件路径 | /config/easytier.toml | string |
| ET_HOSTNAME | 用于标识此设备的主机名 | homeassistant | string |
| ET_INSTANCE_NAME | 实例名称，用于在同一台机器上标识此VPN节点 | easytier-node | string |

### 网络设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_NETWORK_NAME | 用于标识此VPN网络的网络名称 | my-vpn | string |
| ET_NETWORK_SECRET | 网络密钥，用于验证此节点属于VPN网络 | my-secret-key | string |
| ET_IPV4 | 此VPN节点的IPv4地址 | 10.144.144.1/24 | string |
| ET_DHCP | 由EasyTier自动确定并设置IP地址 | true | boolean |
| ET_PEERS | 最初要连接的对等节点 | tcp://public.easytier.top:11010 | string |
| ET_EXTERNAL_NODE | 使用公共共享节点来发现对等节点 | tcp://public.easytier.top:11010 | string |
| ET_PROXY_NETWORKS | 将本地网络导出到VPN中的其他对等节点 | 192.168.1.0/24 | string |
| ET_EXIT_NODES | 转发所有流量的出口节点 | 10.0.0.1 | string |
| ET_ENABLE_EXIT_NODE | 允许此节点成为出口节点 | true | boolean |
| ET_MANUAL_ROUTES | 手动分配路由CIDR | 192.168.0.0/16 | string |

### RPC设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_RPC_PORTAL | 用于管理的RPC门户地址 | 0.0.0.0:15888 | string |
| ET_RPC_PORTAL_WHITELIST | RPC门户白名单 | 127.0.0.1/32,::1/128 | string |

### 监听器设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_LISTENERS | 监听器用于接受连接 | tcp://0.0.0.0:11010,udp://0.0.0.0:11010 | string |
| ET_MAPPED_LISTENERS | 手动指定监听器的公网地址 | tcp://123.123.123.123:11223 | string |
| ET_NO_LISTENER | 不监听任何端口，只连接到对等节点 | true | boolean |
| ET_DEFAULT_PROTOCOL | 连接到对等节点时使用的默认协议 | tcp | string |

### 性能优化设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_MULTI_THREAD | 使用多线程运行时 | true | boolean |
| ET_MTU | TUN设备的MTU | 1400 | integer |
| ET_LATENCY_FIRST | 延迟优先模式，将尝试使用最低延迟路径转发流量 | true | boolean |
| ET_COMPRESSION | 要使用的压缩算法 | zstd | string |
| ET_ENABLE_KCP_PROXY | 使用 KCP 代理 TCP 流 | true | boolean |
| ET_DISABLE_KCP_INPUT | 不允许其他节点使用 KCP 代理 TCP 流到此节点 | true | boolean |
| ET_ENABLE_QUIC_PROXY | 使用 QUIC 代理 TCP 流 | true | boolean |
| ET_DISABLE_QUIC_INPUT | 不允许其他节点使用 QUIC 代理 TCP 流到此节点 | true | boolean |

### 安全和隐私设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_DISABLE_ENCRYPTION | 禁用对等节点通信的加密 | false | boolean |
| ET_PRIVATE_MODE | 不允许使用了与本网络不相同的网络名称和密码的节点通过本节点进行握手或中转 | true | boolean |
| ET_RELAY_NETWORK_WHITELIST | 仅转发白名单网络的流量 | my-network,backup-network | string |

### 高级设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_DISABLE_IPV6 | 不使用IPv6 | false | boolean |
| ET_DEV_NAME | 可选的TUN接口名称 | tun0 | string |
| ET_PROXY_FORWARD_BY_SYSTEM | 通过系统内核转发子网代理数据包，禁用内置NAT | true | boolean |
| ET_NO_TUN | 不创建TUN设备，可以使用子网代理访问节点 | false | boolean |
| ET_USE_SMOLTCP | 为子网代理和 KCP 代理启用smoltcp堆栈 | true | boolean |
| ET_DISABLE_P2P | 禁用P2P通信，只通过指定的节点转发数据包 | false | boolean |
| ET_DISABLE_UDP_HOLE_PUNCHING | 禁用UDP打洞功能 | false | boolean |
| ET_RELAY_ALL_PEER_RPC | 转发所有对等节点的RPC数据包 | true | boolean |
| ET_SOCKS5 | 启用 socks5 服务器 | 1080 | integer |
| ET_BIND_DEVICE | 将连接器的套接字绑定到物理设备以避免路由问题 | eth0 | string |
| ET_PORT_FORWARD | 将本地端口转发到虚拟网络中的远程端口 | udp://0.0.0.0:12345/10.126.126.1:23456 | string |
| ET_ACCEPT_DNS | 启用魔法DNS，可以使用域名访问其他节点 | true | boolean |
| ET_FOREIGN_RELAY_BPS_LIMIT | 限制转发流量的带宽 | 1048576 | integer |

### 日志设置

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_CONSOLE_LOG_LEVEL | 控制台日志级别 | info | string |
| ET_FILE_LOG_LEVEL | 文件日志级别 | warn | string |
| ET_FILE_LOG_DIR | 存储日志文件的目录 | /var/log | string |

### 配置服务器

| 环境变量 | 说明 | 示例值 | 类型 |
|----------|------|--------|------|
| ET_CONFIG_SERVER | 配置服务器地址 | udp://127.0.0.1:22020/admin | string |

## 环境变量优势

- **极简配置**：只需要两个参数
- **完整功能**：支持EasyTier的所有环境变量
- **灵活扩展**：可以设置任意环境变量
- **标准方式**：使用标准的Linux环境变量
- **易于理解**：name-value配对，一目了然

## 使用提示

- 环境变量名称以ET_开头，具体请参考EasyTier官方文档
- 多个值用逗号分隔（如ET_PEERS、ET_LISTENERS）
- 布尔值使用true/false，类型选择boolean
- 数值使用数字，类型选择integer
- 字符串使用文本，类型选择string（默认）
- 启动时会显示所有设置的环境变量
- 可以设置任意EasyTier支持的环境变量

## 注意事项

- 请确保您的网络环境适合使用 EasyTier。
- 在使用过程中，如遇到任何问题，请查看日志以获取更多信息和帮助。

如需进一步支持，请访问 [EasyTier配置说明页面](https://easytier.cn/guide/network/configurations.html) 以获取更多资源和帮助。

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