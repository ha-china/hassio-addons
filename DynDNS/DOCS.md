# Home Assistant 插件：DynDNS

## 安装

按照以下步骤在您的系统上安装该插件：

1. [将我的 Home Assistant 插件库][repository] 添加到您的 HassOS 实例中。
2. 在您的 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
3. 找到 "DynDNS" 插件并点击它。
4. 点击 "安装" 按钮。

## 如何使用

1. 按照动态 DNS 服务提供商文档中的描述设置动态 DNS 服务。
2. 在 DynDNS 插件的配置中，您只需设置提供商文档中描述的 updateUrl。  
然后替换此网址中的 IPv4 和 IPv6 变量。  
有些提供商要求您在请求中登录。您可以使用 `dnsServiceUsername` 和 `dnsServicePassword` 选项来实现。

## 配置 

插件配置：

### 选项： `updateUrl` （必填）

动态 DNS 服务提供的 DNS 更新网址。
此外，还有各种变量用于替换更新网址中的动态部分。

> **例如：** https://dyndns.inwx.com/nic/update?myip=${ipv4}&myipv6=${ipv6}  
或  
> https://www.duckdns.org/update?domains=example.duckdns.org&token=abcd1234-1234-abcd-1234-abcdef123456&ip=${ipv4}&ipv6=${ipv6}

#### 可用变量：
- `${ipv4}`  
  由 `ipv4` 选项的设置提供的 IPv4
- `${ipv6}`  
  由 `ipv6` 选项的设置提供的 IPv6
- `${DNS_SERVICE_USERNAME}`  
  `dnsServiceUsername` 选项的值
- `${DNS_SERVICE_PASSWORD}`  
  `dnsServicePassword` 选项的值

### 选项： `secondUpdateUrl` （可选）

在某些情况下，您可能需要在两个单独的请求中更新 IPv4 和 IPv6，因此您可以在此输入第二个 DNS 更新网址。
此外，还有各种变量用于替换更新网址中的动态部分。

> **例如：** https://dyndns.inwx.com/nic/update?myip=${ipv4}&myipv6=${ipv6}  
或  
> https://www.duckdns.org/update?domains=example.duckdns.org&token=abcd1234-1234-abcd-1234-abcdef123456&ip=${ipv4}&ipv6=${ipv6}

### 选项： `dnsServiceUsername` （可选）

对于某些 dynDNS 服务，您必须在请求期间进行身份验证。
为此，您需要在此输入相应的用户名。

### 选项： `dnsServicePassword` （可选）

对于某些 dynDNS 服务，您必须在请求期间进行身份验证。
为此，您需要在此输入相应的密码。

### 选项： `ipv4` （必填）

此选项允许指定 'default' 或接口名称，以使用主机的 IPv4 地址，或者您可以手动输入一个地址。

如果您在这里指定一个 URL，它指向的资源的内容将被获取并用作地址。这使得可以使用像 https://api.ipify.org/ 或 https://ipv4.text.wtfismyip.com 这样的服务来获取地址。

> 如果您不确定，请将其设置为“default”。

### 选项： `ipv6` （必填）

此选项允许指定 'default' 或接口名称，以使用主机的 IPv6 地址，或者您可以手动输入一个地址。

如果您在这里指定一个 URL，它指向的资源的内容将被获取并用作地址。这使得可以使用像 https://api6.ipify.org/ 或 https://ipv6.text.wtfismyip.com 这样的服务来获取地址。

> 如果您不确定，请将其设置为“default”。

### 选项： `seconds`

在更新子域名之前等待的秒数。

### 示例

#### INWX
```yaml
updateUrl: https://dyndns.inwx.com/nic/update?myip=${ipv4}&myipv6=${ipv6}
seconds: 300
ipv4: default
ipv6: default
dnsServiceUsername: example-username
dnsServicePassword: secret
```

#### Strato
```yaml
updateUrl: https://dyndns.strato.com/nic/update?hostname=${DNS_SERVICE_USERNAME}&myip=${ipv4},${ipv6}
seconds: 300
ipv4: default
ipv6: default
dnsServiceUsername: sub.domain.de (在此示例中为子域名) 
dnsServicePassword: secret
```

#### DuckDNS
请注意，在 updateUrl 中，域名和令牌必须替换为您的值。
```yaml
updateUrl: https://www.duckdns.org/update?domains=example.duckdns.org&token=abcd1234-1234-abcd-1234-abcdef123456&ip=${ipv4}&ipv6=${ipv6}
seconds: 300
ipv4: default
ipv6: default
```

## 已知问题

- `/run.sh: line 28: SOMEVARIABLE: unbound variable`  
  此错误意味着您在 `updateUrl` 中对变量的提示错误或这些变量不存在。

## 支持

有问题吗？

您有几种选择可以获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]。

如果您发现了错误，请 [在我们的 GitHub 上打开一个问题][issue]。