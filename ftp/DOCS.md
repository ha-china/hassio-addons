# Home Assistant Community Add-on: FTP

FTP 协议在有时候可能会派上用场。虽然它比较老，但仍然有其用途。例如，大多数 IP 摄像头仍然支持通过 FTP 上传图像或视频。

这个插件以一种相对安全的方式为 Hass.io 提供了 FTP 服务器。虽然 FTP 由于其（未加密）的性质并不是完全安全的，但这个插件支持 FTP over SSL (FTPS) 并在虚拟用户在其主目录中受到限制（chroot）。

当然，如果你真的想这样做，你也可以使用这个插件通过 FTP 再次访问你的 Home Assistant 配置。

## 安装

这个插件的安装过程非常直接，与安装任何其他 Home Assistant 插件没有区别。

1. 点击下面的 Home Assistant 我的按钮，在你的 Home Assistant 实例上打开插件。

   ![在你的 Home Assistant 实例上打开这个插件][addon-badge]][addon]

1. 点击“安装”按钮来安装插件。
1. 启动“FTP”插件
1. 检查“FTP”插件的日志，看看是否一切顺利。

## 配置

**注意**：_在更改配置时，请记得重启插件。_

示例插件配置：

```yaml
log_level: info
port: 21
data_port: 20
banner: Welcome to the Hass.io FTP service.
pasv: true
pasv_min_port: 30000
pasv_max_port: 30010
pasv_address: ""
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
implicit_ssl: false
max_clients: 5
users:
  - username: hassio
    password: changeme
    allow_chmod: true
    allow_download: true
    allow_upload: true
    allow_dirlist: true
    addons: false
    backup: true
    config: true
    media: true
    share: true
    ssl: false
  - username: camera
    password: changeme
    allow_chmod: false
    allow_download: false
    allow_upload: true
    allow_dirlist: true
    addons: false
    backup: false
    config: false
    media: false
    share: true
    ssl: false
```

**注意**：_这只是个示例，不要复制粘贴！自己创建！_

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误性的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：发生了严重错误。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非你在进行故障排除。

这些日志级别也会影响 FTP 服务器的日志级别。

### 选项：`port`

FTP 将监听传入 FTP 连接的端口。

### 选项：`data_port`

PORT 风格连接的来源端口。

### 选项：`banner`

这个字符串选项允许你提供 FTP 服务器在首次连接时显示的问候横幅。

### 选项：`pasv`

如果你想要禁用获取数据连接的 PASV 方法，请将其设置为 `false`。有关被动与主动 FTP 的更多信息，请参阅[这个优秀的 Stack Overflow][passive-vs-active]答案。

### 选项：`pasv_min_port`

为 PASV 风格数据连接分配的最小端口。可用于指定一个狭窄的端口范围以协助防火墙。

### 选项：`pasv_max_port`

为 PASV 风格数据连接分配的最大端口。可用于指定一个狭窄的端口范围以协助防火墙。

### 选项：`pasv_address`

使用此选项来覆盖 FTP 服务器在响应 PASV 命令时广告的 IP 地址。提供一个数字 IP 地址，或者提供一个主机名，它将在启动时为你进行 DNS 解析。如果留空，地址将取自传入的连接套接字。

### 选项：`pasv_addr_resolve`

设置为 `true` 以允许为 PASV 连接解析主机名。

### 选项：`ssl`

启用/禁用 FTP 服务器的 SSL。设置为 `true` 以启用，`false` 否则。

### 选项：`certfile`

用于 SSL 的证书文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认的。_

### 选项：`keyfile`

用于 SSL 的私钥文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认的。_

### 选项：`implicit_ssl`

如果设置为 `true`，则所有连接的第一件事就是期待一个 SSL 握手（FTPS 协议）。

### 选项：`max_clients`

这是同时可以连接的最大客户端数量。任何额外的连接将收到错误消息。

### 选项：`users`

此选项允许你指定一个或多个用户。每个用户都可以有自己的权限，如下面的子选项中定义。

#### 子选项：`username`

用户需要使用的用户名来登录 FTP 服务器。有效的用户名最多有 32 个字符，只包含 `A-Z` 和 `0-9`。
用户名可以包含连字符（`-`），但不得以之开始或结束。

#### 子选项：`password`

用户登录时使用的密码。

#### 子选项：`allow_chmod`

将此选项设置为 `true` 将允许该用户使用 `SITE CHMOD` 命令。

#### 子选项：`allow_download`

将此选项设置为 `true` 将允许用户从 FTP 服务器下载文件。

#### 子选项：`allow_upload`

此选项控制是否允许任何更改文件系统的 FTP 命令。

这些命令是 `STOR`、`DELE`、`RNFR`、`RNTO`、`MKD`、`RMD`、`APPE` 和 `SITE`。

#### 子选项：`allow_dirlist`

将此选项设置为 `true`，允许用户使用列表命令浏览用户被授予访问权限的所有目录。

#### 子选项：`addons`

允许用户访问 `/addons` 目录。

#### 子选项：`backup`

允许用户访问 `/backup` 目录。

#### 子选项：`config`

允许用户访问 `/config` 目录。

#### 子选项：`media`

允许用户访问 `/media` 目录。

#### 子选项：`share`

允许用户访问 `/share` 目录。

#### 子选项：`ssl`

允许用户访问 `/ssl` 目录。

### 选项：`i_like_to_be_pwned`

将此选项添加到插件配置中，允许你通过将其设置为 `true` 来绕过 HaveIBeenPwned 密码要求。

**注意**：_我们强烈建议选择一个更强/更安全的密码，而不是使用此选项！自担风险！_

## 更改日志与发布

此存储库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或重大更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的补丁和软件包更新。

## 支持

有问题？

你有几个选项来得到答案：

- [Home Assistant Community Add-ons Discord 服务器][discord] 用于插件支持和功能请求。
- [Home Assistant Discord 服务器][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

你也可以在 GitHub 上[打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由 [Franck Nijhof][frenck] 完成。

要查看所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2017-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许获得软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论是由合同、侵权或其他行为引起的，均与软件或软件的使用或其他交易无关。

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_ftp&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository
[contributors]: https://github.com/hassio-addons/addon-ftp/graphs/contributors
[discord-ha]: https://discord.gg/c5DvZ4e
[discord]: https://discord.me/hassioaddons
[forum]: https://community.home-assistant.io/t/home-assistant-community-add-on-ftp/36799?u=frenck
[frenck]: https://github.com/frenck
[issue]: https://github.com/hassio-addons/addon-ftp/issues
[passive-vs-active]: https://stackoverflow.com/a/1699163/299699
[reddit]: https://reddit.com/r/homeassistant
[releases]: https://github.com/hassio-addons/addon-ftp/releases
[semver]: http://semver.org/spec/v2.0.0.htm