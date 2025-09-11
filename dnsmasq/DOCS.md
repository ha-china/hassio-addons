# Home Assistant 插件：Dnsmasq

## 安装

按照以下步骤在您的系统上安装插件：

1. 在 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 找到 "Dnsmasq" 插件并点击它。
3. 点击 "安装" 按钮。

## 如何使用

该插件提供了一些可用选项。有关更详细的说明，请参见下面。让插件运行的基本步骤是：

1. 启动插件。

## 配置

Dnsmasq 插件可以根据您的喜好进行调整。本节描述了每个插件配置选项。

示例插件配置：

```yaml
defaults:
  - 8.8.8.8
  - 8.8.4.4
forwards:
  - domain: mystuff.local
    server: 192.168.1.40
hosts:
  - host: home.mydomain.io
    ip: 192.168.1.10
services:
  - srv: _ldap._tcp.pdc._msdcs.mydomain.io
    host: dc.mydomain.io
    port: 389
    priority: 0
    weight: 100
log_queries: false
```

### 选项： `defaults`（必需）

defaults 是上游 DNS 服务器，无法在本地处理的 DNS 请求将被转发到这些服务器。默认配置为使用 Google 的公共 DNS 服务器：`"8.8.8.8", "8.8.4.4"`。

可以使用井号（#）分隔符指定端口，例如：`"192.168.1.2#1053"`。

### 选项： `forwards`（可选）

此选项允许您列出转发到不同（非默认）上游 DNS 服务器的域。

#### 选项： `forwards.domain`

要转发到不同上游 DNS 服务器的域名。

#### 选项： `forwards.server`

用于转发此域名请求的 DNS 服务器。

### 选项： `hosts`（可选）

此选项允许您为 DNS 服务器提供本地静态回答。

这有助于在您的内部网络上解析地址，并甚至覆盖外部域以返回本地地址。

例如，您可以将 `myuser.duckdns.org` 设置为直接解析到内部 IP 地址，例如 `192.168.1.10`。在该网络之外，它将正常解析。

此选项允许您创建所谓的：拆分 DNS。

#### 选项： `hosts.host`

要在本地解析的主机名或域名。

#### 选项： `hosts.ip`

Dnsmasq 应在其 DNS 响应中返回的 IP 地址。

### 选项： `services`（可选）

此选项允许您提供 srv-host 记录。

#### 选项： `services.srv`

要解析的服务。

#### 选项： `services.host`

包含该服务的主机。

#### 选项： `services.port`

该服务的端口号。

#### 选项： `services.priority`

该服务的优先级。

#### 选项： `services.weight`

该服务的权重。

### 选项： `cnames`（可选）

此选项允许您提供 cname 记录。

#### 选项： `cnames.name`

要解析的名称。

#### 选项： `cnames.target`

目标名称。请注意，这仅适用于 DHCP 或 /etc/hosts 中的名称。给主机 "bert" 一个另一个名称，bertrand cname=bertand,bert。

### 选项： `log_queries`（必需）

记录所有 DNS 请求。默认为 `false`。

### 选项： `cache_size`

设置 Dnsmasq 缓存的大小。默认设置为 150。如果设置为 0，则禁用缓存。请注意，缓存大小过大会造成性能问题。

## 支持

有问题吗？

您有几个选择可以得到答案：

- Home Assistant Discord 聊天服务器 [discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]。

如果您发现了错误，请[在我们的 GitHub 上报告问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository