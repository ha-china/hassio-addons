# Home Assistant 插件: DynuDNS

## 安装

按照以下步骤在您的系统上安装插件：

1. 在 Home Assistant 前端导航到 **Supervisor** -> **Add-on Store**。
2. 找到 "DynuDNS" 插件并点击它。
3. 点击 "INSTALL" 按钮。

## 如何使用

1. 访问 [dynu.com](https://www.dynu.com) 并通过任何可用的账号服务（Google、Github、Twitter、Persona、Reddit）创建一个账户。
2. 在 `控制面板` 区域，点击 `DDNS 服务` 部分，点击 `添加`。选择可用域名中的一个，并输入子域名的名称。
3. 如果注册成功，子域名将出现在 `DDNS 服务` 部分，并且 `当前 IP` 将是您当前使用访问 `dynu.com` 的设备的公共 IP 地址。该 IP 地址将由 DynuDNS 插件进行更新。
4. 在 DynuDNS 插件的配置中，执行以下操作：
    - 复制 DynuDNS API 密钥（在控制面板中，转到 `API 凭据`，显示并复制）并粘贴到 `token` 选项中。
    - 使用您注册的完整域名更新 `domains` 选项。例如：`my-domain.ddnsfree.com`。

## 配置

插件配置：

```yaml
lets_encrypt:
  accept_terms: true
  certfile: fullchain.pem
  keyfile: privkey.pem
token: sdfj-2131023-dslfjsd-12321
domains:
  - my-domain.ddnsfree.com
aliases: []
seconds: 300
```

此外，您还需要配置 Home Assistant Core 以获取 SSL 证书。这可以通过在 `configuration.yaml` 中为 [HTTP][HTTP] 集成配置设置以下配置来完成：

```yaml
http:
  ssl_certificate: /ssl/fullchain.pem
  ssl_key: /ssl/privkey.pem
```

### 选项组 `lets_encrypt`

以下选项适用于选项组：`lets_encrypt`。这些设置仅适用于 Let's Encrypt SSL 证书。

#### 选项 `lets_encrypt.accept_terms`

在您阅读并接受 Let's Encrypt [订阅协议](https://letsencrypt.org/repository/) 后，将值更改为 `true` 以使用 Let's Encrypt 服务。

#### 选项 `lets_encrypt.certfile`

由 Let's Encrypt 生成的证书文件名称。该文件用于 Home Assistant 插件的 SSL，建议保留文件名不变（`fullchain.pem`）以保持兼容性。

**注意**：_该文件存储在 `/ssl/` 中，这是 Home Assistant 的默认设置_

#### 选项 `lets_encrypt.keyfile`

由 Let's Encrypt 生成的私钥文件名称。该私钥文件用于 Home Assistant 插件的 SSL，建议保留文件名不变（`privkey.pem`）以保持兼容性。

**注意**：_该文件存储在 `/ssl/` 中，这是 Home Assistant 的默认设置_

### 选项： `ipv4`（可选）

该选项允许您覆盖自动检测并手动指定 IPv4 地址。

如果在此处指定 URL，将获取其指向的资源的内容并用作地址。这使得能够使用像 https://api.ipify.org/ 或 https://ipv4.text.wtfismyip.com 的服务获取地址。

### 选项： `ipv6`（可选）

该选项允许您覆盖自动检测并手动指定 IPv6 地址。

如果在此处指定 URL，将获取其指向的资源的内容并用作地址。这使得能够使用像 https://api6.ipify.org/ 或 https://ipv6.text.wtfismyip.com 的服务获取地址。

### 选项： `token`

在 Dynu 控制面板中找到的 DynuDNS API 密钥。该令牌是对您账户下注册的子域名进行任何更改所必需的。

### 选项： `domains`

您账户下注册的 DynuDNS 子域名列表。

### 选项： `aliases`（可选）

在 `domains` 选项上配置的域别名列表。
当您希望使用自己的域名时，这很有用。
创建一个 CNAME 记录指向 DynuDNS 子域名，并相应地设置此值。

例如：

```yaml
domains:
  - my-domain.dynudns.org
aliases:
  - domain: ha.my-domain.com
    alias: my-domain.dynudns.org
```

不要将自定义域名添加到 `domains` 数组中。对于证书创建，所有唯一域名和别名都将被使用。

此外，请确保 dns-01 挑战能够到达 Duckdns。可能需要为此添加特定的 CNAME：

```
CNAME _acme-challenge.<own-domain>    _acme-challenge.<domain>.dynudns.org
CNAME                 <own-domain>                    <domain>.dynudns.org
```

### 选项： `seconds`

在更新 DynuDNS 子域名和续订 Let's Encrypt 证书之前等待的秒数。

## 已知问题和限制

- 免费的 DynuDNS 账户限制为四个子域名。

## 说明

该插件是官方 DuckDNS 插件和 ACME.sh 的 94% 副本。
[upstream run.sh]: https://github.com/home-assistant/addons/blob/master/duckdns/data/run.sh
[upstream hook.sh]: https://github.com/home-assistant/addons/blob/master/duckdns/data/hook.sh
[upstream dnsdynu.sh]: https://github.com/acmesh-official/acme.sh/blob/master/dnsapi/dns_dynu.sh

## 支持

- Home Assistant [社区论坛][forum]。

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[forum]: https://community.home-assistant.io
[issue]: https://github.com/koying/ha-addons/issues
[dynudns]: https://www.dynudns.org
[dynudns-faq]: https://www.dynu.com/FAQ/Dynamic-DNS-Service
[HTTP]: https://www.home-assistant.io/integrations/http/