# 配置

```yaml
media_folder: /media/mopidy/media
playlist_folder: /media/mopidy/playlists
locale: en_US
country: en
radio_net:
  language: net
  favorite_radiostations: []
```

### `media_folder`

此选项让您指定一个自定义媒体文件夹。

### `playlist_folder`

此选项让您指定一个自定义播放列表文件夹。

### `locale`

您的地区代码采用2x2格式。该设置用于用户界面和一些扩展。
默认值是`en_US`，地区列表在[这里](https://github.com/umpirsky/locale-list/blob/main/data/en_US/locales.yaml)。

### `country`

您的国家代码为两个字母的国家代码。该设置用于用户界面和一些扩展。
这里的默认代码是`en`。

### `radio_net/language`

电台的语言文本信息。可能的选项有：`net`，`at`，`de` ，`dk`，`es`，`fr`，`it`，`pl`，`pt`，`se`。

### `radio_net/favorite_radiostations`

您在radio.net扩展中最爱的电台标识。[关于该设置的更多信息](https://github.com/plintx/mopidy-radionet#configuration)。

### `custom_config`（可选）

**如果指定此项，所有其他选项将被忽略。**

此选项让您为mopidy指定一个自定义配置文件。
为了将所有MPD文件保存在一个地方，我限制了路径前缀为`/share/mopidy`。
请使用默认的[mopidy.conf](https://github.com/Poeschl/Hassio-Addons/blob/main/mopidy/root/etc/mopidy-template.conf)作为起点。

工作示例：

```yaml
...
custom_config: /share/mopidy/mopidy.conf
```


# 本地媒体

本地媒体可以存储在`/media`或`/share`的任何文件夹中（可以通过samba插件访问）。
默认媒体目录是`/media/mopidy/media`，播放列表的默认目录是`/media/mopidy/playlists`。

# 面板集成

由于Mopidy-Iris与入口功能（至少是开箱即用）不兼容，Mopidy可以通过以下行添加到侧面板配置中：

```yaml
panel_iframe:
  morpidy:
    title: 'Morpidy'
    icon: 'mdi:music-circle'
    url: 'http://<homeassistant-address>:6680/iris'
```


# MPD

要从Home Assistant连接，请使用以下配置：

```yaml
media_player:
  - platform: mpd
    host: 243ffc37-mopidy
    port: 6600