## 安全性

为了挂载您的外部设备，集成的 AppArmor 功能已被禁用。
该附加组件可以访问可用的 `external_device` 配置选项路径中的设备！

## 配置

示例配置：

```yaml
folders:
  - source: /config
  - source: /media/playlists
    options: '--archive --recursive --compress'
external_folder: backup
external_device: ''
```

### `folders`

您希望与远程机器同步的文件夹列表。

### `folders` - `source`

rsync 的源文件夹。

### `folders` - `options`（可选）

为 rsync 使用您自己的选项。此字符串将替换默认选项并直接传递给 rsync。默认选项为 `--archive --recursive --compress --delete --prune-empty-dirs`。

### `external_folder`

外部 USB 驱动器或 USB 闪存驱动上的同步文件夹的基础文件夹。以上文件夹的子文件夹将在那里创建。
此路径不应以 `/` 开头。

### `external_device`

如果您需要指定一个特定的设备来进行备份，这里是选项。默认设备为 `/dev/sda1`。
确保在例如从外部驱动器运行 Home Assistant 时进行调整。`sda1` 将是 Home Assistant 驱动的一个分区。

如果未指定设备，日志中将显示所有可用设备。在没有设备的情况下不会进行同步。

可用选项：`/dev/sd[a-e][1-5]`