# 配置

```yaml
media_folder: /media/mpd/media
playlist_folder: /media/mpd/playlists
volume_normalization: false
httpd_output: false
```

### `volume_normalization`

启用内置的音量标准化功能。

### `httpd_output`

启用httpd音频输出。

### `media_folder`

此选项允许您指定自定义媒体文件夹。

### `playlist_folder`

此选项允许您指定自定义播放列表文件夹。

### `verbose` (可选)

使 `mpd` 详细输出。

```yaml
verbose: true
```

### `custom_config` (可选)

**如果指定此选项，所有其他选项将被忽略。**

此选项允许您指定MPD的自定义配置文件。
为了将所有MPD文件放在一个地方，我将路径前缀限制为 `/share/mpd`
请使用默认的 [插件mpd.conf](https://github.com/Poeschl/Hassio-Addons/blob/main/mpd/root/etc/mpd.conf) 作为起点。
如果您在配置方面遇到问题，[MPD文档](https://www.musicpd.org/doc/html/user.html#configuration) 可能会帮助您。

工作示例：

```yaml
...
custom_config: /share/mpd/mpd.conf
```

# 故障排除

### `RTIOThread could not get realtime scheduling, continuing anyway: sched_setscheduler`

此错误在任何非glibc系统（如alpine linux）上都会显示。MPD应该没有它也能工作。
更多信息请参阅：[MPD问题](https://github.com/MusicPlayerDaemon/MPD/issues/218)

### `Failed to open '/data/database/mpd.db': No such file or directory`

此错误在首次启动时显示，当没有数据库存在时。它将在第二次运行时存在。

# MPD

要从Home Assistant连接，请使用以下值的 [MPD集成](https://www.home-assistant.io/integrations/mpd/)：

```text
host: 68413af6-mpd
password: <空>
port: 6600