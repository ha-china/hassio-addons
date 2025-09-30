# 家用助手插件：Samba NAS 共享

# 📰 关于 SambaNas 插件开发的重要通知

**SambaNas 插件现已进入维护模式**

此通知旨在告知我们的用户，**SambaNas 插件将现在过渡到维护模式。** 这意味着对于此版本的插件**将不再实现未来功能。** 我们的开发工作将专注于仅提供**关键错误修复**，以确保现有用户的功能持续稳定性。

**推出 SambaNas2：Samba 集成的未来**

我们很高兴地宣布 **SambaNas2**，它是原始 SambaNas 插件的继任者！SambaNas2 代表了**从零开始完全重写，使用 Go 语言开发，拥有全新的核心。** 这将带来在性能、稳定性和未来可扩展性方面的显著改进。

**当前状态和即将发布的 Beta 版本**

SambaNas2 目前处于开发的**Alpha 阶段**。我们很高兴地宣布，**将在未来几周内发布公共 Beta 版本**，并通过我们的 Beta 渠道提供。

我们鼓励对最新功能和改进感兴趣的用户密切关注 SambaNas2 Beta 版本的发布。感谢您持续的支持。

## 🚨 重要提示 🚨

此插件已设计、构建和测试以与 HAOS（家用助手操作系统）一起工作。在其他类型的安装中使用它是不推荐的，因为主机提供的其他解决方案更有效。

### 在不同的操作系统上使用它会导致启动时出错。我向所有在不同操作系统上使用它的高级用户表示歉意，但我是在我的业余时间管理此插件，而我最近没有做任何有用的事情，只是回复那些不看文档的人。“这就是生活的意义”

## 安装

按照以下步骤将插件安装到您的系统上：

1. 在家用助手的界面前端导航到 **Supervisor** -> **插件商店**。
2. 找到“Samba NAS 共享”插件并点击它。
3. 点击“安装”按钮。

## 如何使用

1. 在配置部分，设置用户名和密码。
2. 查看启用的共享。禁用您不打算使用的任何共享。如果需要，稍后可以重新启用共享。

## 连接

如果您使用的是 Windows，您使用 `\\<IP_ADDRESS>\`，如果您使用的是 MacOS，您使用 `smb://<IP_ADDRESS>` 来连接到共享。

此插件通过 smb（samba）公开以下目录：

| 目录       | 描述                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `addons`        | 这是用于您本地插件的目录。                                          |
| `backup`        | 这是用于您的快照的目录。                                              |
| `config`        | 这是用于您的家用助手配置的目录。                           |
| `addon_configs` | 这是用于您的插件基本配置目录的目录                     |
| `media`         | 这是用于本地媒体文件的目录。                                           |
| `share`         | 这是用于在插件和家用助手之间共享的数据的目录。 |
| `ssl`           | 这是用于您的 SSL 证书的目录。                                       |

## 配置

这是一个配置示例。**_请勿使用_**，除非您进行了必要的更改，特别是对于用户名、密码、密钥和更多磁盘部分。
`<` 和 `>` 之间的字段表示省略的值，需要更改。

```yaml
workgroup: WORKGROUP
local_master: true
username: Hassio
password: "<您的密钥密码>"
allow_hosts:
  - 10.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
  - 169.254.0.0/16
  - fe80::/10
  - fc00::/7
automount: true
moredisks:
  - "<分区的标签>"
  - "id:<分区的 uuid>"
mountoptions: "nosuid,relatime,noexec"
veto_files:
  - "._*"
  - ".DS_Store"
  - Thumbs.db
compatibility_mode: false
recyle_bin_enabled: false
available_disks_log: true
wsdd: true
wsdd2: false
medialibrary:
  enable: true
other_users:
  - username: backupuser
    password: "<backupuser 密码>"
  - username: secureuser
    password: "<secureuser 密码>"
acl:
  - share: config
    disabled: true
  - share: backup
    disabled: false
    users:
      - backupuser
  - share: ssl
    users:
      - secureuser
```

### 选项：`workgroup`（必需）

将 WORKGROUP 更改为反映您的网络需求。

### 选项：`local_master`（必需）

启用以尝试成为子网上的本地主浏览器。

### 选项：`username`（必需）

您希望用于向 Samba 服务器进行身份验证的用户名。

### 选项：`password`（必需）

与配置用于身份验证的用户名对应的密码。

### 选项：`allow_hosts`（必需）

允许访问共享文件夹的主机/网络列表。

### 选项 `automount`（可选）

**_必须禁用保护模式才能启用此功能_**
自动挂载并公开所有标记的磁盘。

默认为 `true`。

### 选项：`moredisks`（可选）

**_必须禁用保护模式才能启用此功能_**
列出要搜索和共享的磁盘或分区标签。如果将名称以 `id:` 开头，也可以使用磁盘 ID（警告：仅小写写 id 前缀！）

支持的 Fs：

- [x] ext3
- [x] ext2
- [x] ext4
- [x] squashfs
- [x] vfat --> **_注意：不支持 ACL，因此不支持 TimeMachine 兼容性_**
- [x] msdos --> **_注意：不支持 ACL，因此不支持 TimeMachine 兼容性_**
- [x] f2fs --> **_注意：不支持 ACL，因此不支持 TimeMachine 兼容性_**
- [x] exFat --> **_注意：与 exFat 内核驱动程序实验性支持_**
- [x] ntfs --> **_注意：与 ntfs3 内核驱动程序实验性支持。在某些架构上不可用_**
- [x] brtfs
- [x] xfs
- [x] apfs --> **_注意：非常实验性。只读，仅通过 ID 而不是标签引用。不支持挂载选项_**

### 选项 `mountoptions`（必需）
允许设置挂载选项。

**_必须禁用保护模式才能启用此功能_**
默认为 'nosuid,relatime,noexec'

### 选项 `available_disks_log`（可选）

启用找到标记磁盘的日志。对于初始配置非常有用。

### 选项：`log_level`（可选）

log_level 选项控制插件生成的日志级别，可以更改为更详细或更简洁，这在处理未知问题时可能有用。可能的值是：

- trace: 显示每个细节，如所有调用的内部函数。
- debug: 显示详细的调试信息。
- info: 通常（通常）有趣的正常事件。
- warning: 异常情况，但不一定是错误。
- error: 运行时错误，不需要立即采取行动。
- fatal: 发生了严重的问题。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，debug 也显示 info 消息。默认情况下，log_level 设置为 info，这是推荐的设置，除非您正在解决问题。

### 选项：`medialibrary`（可选） **_实验性_**

启用 `/media` 路径上 `moredisk` 的可见性。

_从 Homeassistant 2023.6.0 开始，插件使用 'mount' supervisor 功能。因此，您不再需要 SSH 密钥。_

**警告：此功能被视为实验性，可能会导致问题或数据丢失。**

#### 选项：`enable`（可选）

启用/禁用主机挂载选项。

默认为 `false`。

### 选项：`recyle_bin_enabled`（可选）

将此选项设置为 `true` 将在 Samba 插件上启用回收站功能
***检查 'veto_files'，因为可能会被 '._*' 阻止。***

默认为 `false`。

#### 选项：`ssh_private_key`（可选） **_已弃用_**

用于通过 SSH 访问主机（端口 22222）的**私钥**。

启用主机挂载 `moredisk` 而不是容器挂载。

注意<sup>1</sup>：它只适用于 HassOS，在其他主机上未经测试，很可能无法工作。

注意<sup>2</sup>：必须启用主机 SSH 端口 22222 的访问。请参阅 HassOS [开发者文档](https://developers.home-assistant.io/docs/operating-system/debugging/#home-assistant-operating-system)或使用 [配置插件](https://community.home-assistant.io/t/add-on-hassos-ssh-port-22222-configurator/264109)。

注意<sup>3</sup>：必须传递 SSH 私钥以获得对主机的 root 访问。确保使用密钥文件来保护无法访问密钥的人员。

注意<sup>4</sup>：如果“媒体浏览器”中的磁盘为空，请尝试重新启动 Homeassistant。

如果您发现了一个错误，请[在我们的 GitHub 上打开一个问题][issue]。

[issue]: https://github.com/dianlight/hassio-addons/issues
[reddit]: https://reddit.com/r/homeassistant
[repository]: https://github.com/dianlight/hassio-addons