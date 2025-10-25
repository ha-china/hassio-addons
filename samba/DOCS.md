# Home Assistant Add-on: Samba Share

## 安装

按照以下步骤将插件安装到您的系统上：

1. 在 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 查找 "Samba share" 插件并点击它。
3. 点击 "安装" 按钮。

## 如何使用

1. 在配置部分，设置用户名和密码。
   您可以指定任何用户名和密码；这些与您用于登录 Home Assistant 或用于使用 Samba share 的计算机的登录凭据无关。
2. 查看启用的共享。禁用您不打算使用的任何共享。如果需要，可以稍后重新启用共享。

## 连接

如果您使用的是 Windows，您使用 `\\<IP_ADDRESS>\`，如果您使用的是 MacOS，您使用 `smb://<IP_ADDRESS>` 来连接到共享。

此插件通过 smb（samba）公开以下目录：

| 目录 | 描述 |
| -- | -- |
| `addons` | 这用于您的本地插件。 |
| `addon_configs` | 这用于您的插件配置文件。 |
| `backup` | 这用于您的备份。 |
| `config` | 这用于您的 Home Assistant 配置。 |
| `media` | 这用于本地媒体文件。 |
| `share` | 这用于在插件和 Home Assistant 之间共享的数据。 |
| `ssl` | 这用于您的 SSL 证书。 |

## 配置

插件配置：

```yaml
workgroup: WORKGROUP
local_master: true
username: homeassistant
password: YOUR_PASSWORD
enabled_shares:
  - addons
  - addon_configs
  - backup
  - config
  - media
  - share
  - ssl
allow_hosts:
  - 10.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
  - 169.254.0.0/16
  - fe80::/10
  - fc00::/7
veto_files:
  - "._*"
  - ".DS_Store"
  - Thumbs.db
compatibility_mode: false
```

### 选项：`workgroup` (必需)

将 WORKGROUP 更改为反映您的网络需求。

### 选项：`local_master` (必需)

启用以尝试成为子网上的本地主浏览器。

### 选项：`username` (必需)

您希望用于向 Samba 服务器进行身份验证的用户名。

### 选项：`password` (必需)

与用于身份验证配置的用户名对应的密码。

### 选项：`enabled_shares` (必需)

将要可访问的 Samba 共享的列表。从列表中删除或注释掉的任何共享将不可访问。

### 选项：`allow_hosts` (必需)

允许访问共享文件夹的主机/网络列表。

### 选项：`veto_files` (可选)

既不可见也不可访问的文件列表。用于阻止客户端在共享中堆砌临时隐藏文件（例如 macOS 的 `.DS_Store` 或 Windows 的 `Thumbs.db` 文件）。

### 选项：`compatibility_mode`

将此选项设置为 `true` 将在 Samba 插件上启用旧的遗留 Samba 协议。这可能解决一些无法处理新协议的客户端的问题，但会降低安全性。仅在绝对需要并了解可能后果的情况下使用。

默认值为 `false`。

### 选项：`apple_compatibility_mode`

启用 Samba 配置以提高与 Apple 设备的互操作性。这可能导致不支持 xattr 的文件系统（如 exFAT）出现问题。

默认值为 `true`。

### 选项：`server_signing`

配置 SMB 服务器签名要求。此选项可以通过要求消息签名来提高安全性，从而有助于防止中间人攻击。
有关详细信息的值，请参阅 `smb.conf` 的手册页：**default**、**auto**、**mandatory** 和 **disabled**。

默认值为 `default`。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/hassio-addons/repository