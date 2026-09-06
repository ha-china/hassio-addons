## 预条件

确保在远程机器上安装了 `rsync`。如果插件在日志中给出 `bash: rsync: command not found`，则说明该机器上缺少 `rsync`。

## 关键文件

当指定位置未找到文件时，插件会生成自己的密钥文件。如果使用自己的密钥，请确保它是无密码的。

## 配置

示例配置：

```yaml
private_key_file: /ssl/rsync/id_rsa
username: user
folders:
  - local: /config
    remote: /home/user/config-target
    direction: push
  - local: /media/playlists
    remote: /home/user/cool-playlists
    options: '--archive --recursive --compress'
    direction: pull
remote_host: ''
```

### `private_key_file`

用于在远程机器上进行身份验证的私钥。如果未找到密钥文件，也会指定生成的密钥对位置。文件位置固定在 `/ssl` 卷中。

### `username`

在远程机器上接受该密钥的用户的用户名。

### `folders`

要与远程机器同步的文件夹列表。

### `folders` - `local`

用于 rsync 的本地文件夹。

### `folders` - `remote`

用于 rsync 的远程文件夹。

### `folders` - `options`（可选）

为 rsync 使用自定义选项。此字符串将替换默认选项并直接传递给 rsync。默认值是 `--archive --recursive --compress --delete --prune-empty-dirs`。

### `folders` - `direction`（可选）

指定每个文件夹的同步方向：

- `push`: 从 Home Assistant 复制到远程机器（默认）
- `pull`: 从远程机器复制到 Home Assistant

### `remote_host`

您想要连接的远程机器的 IP 地址或主机名。

### `remote_port`（可选）

远程机器上的 SSH 端口。如果未设置，则默认为 `22`。