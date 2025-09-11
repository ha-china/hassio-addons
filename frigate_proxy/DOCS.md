此插件创建一个代理，以连接与Home Assistant分开运行的Frigate服务器，使您可以在侧边栏中访问而无需将Frigate作为插件运行。

请注意，此插件本身并不运行Frigate。

## 配置

### 选项：`server`

`server`选项设置Frigate服务器的地址。

这必须以`http[s]://host:port`格式。以下是有效的示例：

- `http://frigate.local:5000`
- `http://192.168.0.101:5000`
- `https://192.168.0.101:443`

### 选项：`proxy_pass_host`

确定我们是否应该将我们运行的主机（例如，
`homeassistant.local`）传递给我们正在代理的服务器。一般来说，您可能
希望将其设置为`true`。

如果服务器需要接收frigate实例的主机
（而不是Home Assistant或此插件运行的主机），则设置为`false`。这可能是因为
如果您的frigate实例在SSL代理后面（如Traefik或Caddy），则
需要接收frigate主机以正确路由请求。

### 选项：`proxy_pass_real_ip`

确定我们是否应该将客户的真实IP地址传递给我们正在代理的服务器。一般来说，您可能
希望将其设置为`true`。

如果您需要知道请求来自HA IP，则设置为`false`。这可能是因为
如果您的frigate实例在仅允许特定IP连接的代理后面。

## 必要的依赖关系

- 对运行Frigate服务器的网络访问

## 支持

如果您需要支持，请[打开一个问题](https://github.com/blakeblackshear/frigate/issues/new/choose)。