## 安全

为了挂载您的外部设备，集成的 AppArmor 功能已被禁用。
此插件可以访问具有可用 `external_device` 配置选项的路径的设备！

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

### `folders` - `options` (可选)

为 rsync 使用您自己的选项。此字符串将替换默认值并直接传递给 rsync。默认值是 `--archive --recursive --compress --delete --prune-empty-dirs`。

### `external_folder`

外部 USB 驱动器或 USB 闪存盘上的基本文件夹，用于同步文件夹。上述文件夹的子文件夹将创建在那里。
此路径不应以 `/` 开头。

### `external_device`

如果您需要将特定设备固定下来以创建备份，这里提供了该选项。默认设备是 `/dev/sda1`。
确保在例如从外部驱动器运行 Home Assistant 时进行调整。`sda1` 将是 Home Assistant 驱动器的一个分区。

如果没有指定设备，所有可用设备将在日志中显示。没有设备时不会进行同步。

可用选项：`/dev/sd[a-e][1-5]`