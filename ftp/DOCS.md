# Home Assistant Community Add-on: FTP

FTP协议在某些情况下可能会很有用。虽然它比较老，但仍然有其用途。例如，大多数IP摄像头仍然支持通过FTP上传图像或视频。

这个插件以相对安全的方式为Hass.io提供FTP服务器。虽然FTP由于其（未加密的）性质并不完全安全，但这个插件支持FTP over SSL (FTPS)，并且将虚拟用户隔离（chroot）在其主目录中。

当然，如果你真的想这样做，你也可以使用这个插件通过FTP再次访问你的Home Assistant配置。

## 安装

这个插件的安装非常直接，与安装任何其他Home Assistant插件没有区别。

1. 点击下面的Home Assistant My按钮，在你的Home Assistant实例上打开这个插件。

   ![在你的Home Assistant实例上打开这个插件][addon-badge]][addon]

1. 点击“安装”按钮来安装插件。
1. 启动“FTP”插件
1. 检查“FTP”插件的日志，看看是否一切顺利。

## 配置

**注意**：_当配置更改时，请记住重启插件。_

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

`log_level`选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`：显示所有细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非错误的异常情况。
- `error`：不需要立即处理的运行时错误。
- `fatal`：发生了严重错误。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐的设置，除非你在排除故障。

这些日志级别也会影响FTP服务器的日志级别。

### 选项：`port`

FTP将监听传入FTP连接的端口。

### 选项：`data_port`

PORT风格连接的源端口。

### 选项：`banner`

这个字符串选项允许你提供FTP服务器在首次连接时显示的问候横幅。

### 选项：`pasv`

如果你想要禁用PASV方法来获取数据连接，请将其设置为`false`。有关被动与主动FTP的更多信息，请参阅[这个优秀的Stack Overflow][passive-vs-active]答案。

### 选项：`pasv_min_port`

为PASV风格数据连接分配的最小端口。可用于指定一个窄端口范围以帮助防火墙。

### 选项：`pasv_max_port`

为PASV风格数据连接分配的最大端口。可用于指定一个窄端口范围以帮助防火墙。

### 选项：`pasv_address`

使用此选项可以覆盖FTP服务器在响应PASV命令时宣传的IP地址。提供一个数字IP地址，或者提供一个主机名，它将在启动时进行DNS解析。如果留空，地址将从传入的连接套接字中获取。

### 选项：`pasv_addr_resolve`

设置为`true`以允许为PASV连接解析主机名。

### 选项：`ssl`

启用/禁用FTP服务器的SSL。设置为`true`以启用它，`false`否则。

### 选项：`certfile`

用于SSL的证书文件。

**注意**：_文件必须存储在`/ssl/`中，这是默认的_

### 选项：`keyfile`

用于SSL的私钥文件。

**注意**：_文件必须存储在`/ssl/`中，这是默认的_

### 选项：`implicit_ssl`

如果设置为`true`，则SSL握手是所有连接中首先期待的事情（FTPS协议）。

### 选项：`max_clients`

这是同一时间可以连接的最大客户端数。任何额外的连接客户端将收到错误消息。

### 选项：`users`

此选项允许你指定一个或多个用户。每个用户可以有自己的权限，如下面的子选项定义。

#### 子选项：`username`

用户需要使用的用户名来登录FTP服务器。有效的用户名最多有32个字符，只包含`A-Z`和`0-9`。
用户名可以包含连字符（`-`），但不能以连字符开头或结尾。

#### 子选项：`password`

用户登录时使用的密码。

#### 子选项：`allow_chmod`

将此选项设置为`true`将允许该用户使用`SITE CHMOD`命令。

#### 子选项：`allow_download`

将此选项设置为`true`将允许用户从FTP服务器下载文件。

#### 子选项：`allow_upload`

此选项控制是否允许任何更改文件系统的FTP命令。

这些命令是`STOR`、`DELE`、`RNFR`、`RNTO`、`MKD`、`RMD`、`APPE`和`SITE`。

#### 子选项：`allow_dirlist`

将此选项设置为`true`，允许用户使用列表命令浏览所有用户被授予访问权限的目录。

#### 子选项：`addons`

允许用户访问`/addons`目录。

#### 子选项：`backup`

允许用户访问`/backup`目录。

#### 子选项：`config`

允许用户访问`/config`目录。

#### 子选项：`media`

允许用户访问`/media`目录。

#### 子选项：`share`

允许用户访问`/share`目录。

#### 子选项：`ssl`

允许用户访问`/ssl`目录。

### 选项：`i_like_to_be_pwned`

将此选项添加到插件配置中，可以通过将其设置为`true`来绕过HaveIBeenPwned密码要求。

**注意**：_我们强烈建议选择一个更强/更安全的密码，而不是使用这个选项！自己承担风险！_

## 更改日志与发布

这个仓库使用GitHub的[发布][releases]功能来维护更改日志。

发布基于[语义版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下内容进行增量：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题吗？

你有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord聊天服务器][discord]用于插件支持和功能请求。
- [Home Assistant Discord聊天服务器][discord-ha]用于一般的Home Assistant讨论和问题。
- Home Assistant的[社区论坛][forum]。
- 加入Reddit的[/r/homeassistant][reddit]社区。

你也可以在GitHub上[打开一个问题][issue]。

## 作者与贡献者

这个仓库的原始设置是由[Franck Nijhof][frenck]完成的。

要查看所有作者和贡献者的完整列表，请查看[贡献者页面][contributors]。

## 许可证

MIT许可证

版权（c）2017-2025 Franck Nijhof

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论这些责任是由于合同、侵权或其他行为引起的，还是由于与软件或软件的使用或其他交易有关。