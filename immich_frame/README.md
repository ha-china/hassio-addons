# Home Assistant 插件：Immich Frame

我在业余时间维护这个以及其他 Home Assistant 插件：跟进上游变更、Home Assistant 变更以及在实际硬件上的测试都需要花费大量时间（以及一些金钱）。我经常使用 5-10 个我超过 110 个插件中的插件，所以我安装了测试机器（并购买了某些测试服务，如 vpn），这些服务我自己并不使用，以便排查问题和改进插件。

如果这个插件为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![买我一杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位为我仓库点星的人！要为它点星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_frame/stats.png)

## 关于

[Immich Frame](https://immichframe.online/) 将您的 Immich 相册显示为一个数字相框。将任何屏幕变成一个美丽、旋转显示您在 Immich 中存储的个人照片和回忆的电子相框。

此插件允许您创建一个数字相框，它连接到您的 Immich 服务器，并以幻灯片格式显示您的照片，非常适合将旧平板电脑或显示器改造成专用照片显示设备。

## 配置

Webui 可以在 `<your-ip>:8171` 找到。

### 选项

#### 连接

| 选项 | 类型 | 描述 |
|------|------|------|
| `ImmichServerUrl` | str | 您的 Immich 服务器 URL（例如，`http://homeassistant:3001`）。用于单账户设置。 |
| `ApiKey` | str | Immich API 密钥用于身份验证。用于单账户设置。 |
| `Accounts` | list | Immich 多账户支持账户列表。每个条目都需要 `ImmichServerUrl` 和 `ApiKey`，以及可选的每个账户的过滤器（见下文）。 |
| `TZ` | str | 时区（例如，`Europe/London`） |

#### 一般（显示）选项

这些顶级选项映射到 ImmichFrame 的 `General` 设置并控制显示行为：

| 选项 | 类型 | 默认 | 描述 |
|------|------|------|------|
| `Interval` | int | 45 | 图片显示间隔（秒） |
| `TransitionDuration` | float | 2 | 过渡持续时间（秒） |
| `ShowClock` | bool | true | 显示当前时间 |
| `ClockFormat` | str | `hh:mm` | 时钟时间格式 |
| `ClockDateFormat` | str | `eee, MMM d` | 时钟日期格式 |
| `ShowProgressBar` | bool | true | 显示进度条 |
| `ShowPhotoDate` | bool | true | 显示当前图片的日期 |
| `PhotoDateFormat` | str | `MM/dd/yyyy` | 图片日期格式 |
| `ShowImageDesc` | bool | true | 显示图片描述 |
| `ShowPeopleDesc` | bool | true | 显示人物名称 |
| `ShowTagsDesc` | bool | true | 显示标签名称 |
| `ShowAlbumName` | bool | true | 显示相册名称 |
| `ShowImageLocation` | bool | true | 显示图片位置 |
| `ShowWeatherDescription` | bool | true | 显示天气描述 |
| `ImageZoom` | bool | true | 将图像缩放以增加生动感 |
| `ImagePan` | bool | false | 在随机方向上平移图像 |
| `ImageFill` | bool | false | 填充可用空间（可能会裁剪） |
| `PlayAudio` | bool | false | 为带有音频轨道的视频播放音频 |
| `PrimaryColor` | str | `#f5deb3` | 主要 UI 颜色（十六进制） |
| `SecondaryColor` | str | `#000000` | 次要 UI 颜色（十六进制） |
| `Style` | str | `none` | 背景样式：`none`、`solid`、`transition`、`blur` |
| `Layout` | str | `splitview` | 布局：`single` 或 `splitview` |
| `BaseFontSize` | str | `17px` | 基本字体大小（CSS 格式） |
| `Language` | str | `en` | 两位数字的 ISO 语言代码 |
| `WeatherApiKey` | str | | OpenWeatherMap API 密钥 |
| `UnitSystem` | str | `imperial` | `imperial` 或 `metric` |
| `WeatherLatLong` | str | | 作为 `lat,lon` 的天气位置 |
| `ImageLocationFormat` | str | `City,State,Country` | 位置显示格式 |
| `DownloadImages` | bool | false | 将图像下载到服务器 |
| `RenewImagesDuration` | int | 30 | 在此天数后重新下载图像 |
| `RefreshAlbumPeopleInterval` | int | 12 | 相册/人物刷新之间的小时数 |

#### 每账户选项

以下选项可以在每个 `Accounts` 条目内设置，以控制显示哪些图像：

| 选项 | 类型 | 描述 |
|------|------|------|
| `Albums` | str | 以逗号分隔的相册 UUID |
| `ExcludedAlbums` | str | 以逗号分隔的排除相册 UUID |
| `People` | str | 以逗号分隔的人物 UUID |
| `Tags` | str | 以逗号分隔的标签路径（例如，`Vacation,Travel/Europe`） |
| `ShowFavorites` | bool | 显示收藏图片 |
| `ShowMemories` | bool | 显示回忆图片 |
| `ShowArchived` | bool | 显示存档图片 |
| `ShowVideos` | bool | 包含视频资产 |
| `ImagesFromDays` | int | 显示最后 X 天的图片 |
| `ImagesFromDate` | str | 显示此日期之后的图片 |
| `ImagesUntilDate` | str | 显示此日期之前的图片 |
| `Rating` | int | 通过星级评分过滤（-1 到 5） |

### 单账户示例

```yaml
ImmichServerUrl: "http://homeassistant:3001"
ApiKey: "your-immich-api-key-here"
TZ: "Europe/London"
ShowClock: false
Interval: 30
PhotoDateFormat: "dd/MM/yyyy"
```

### 多账户示例

要显示来自多个 Immich 账户的照片（例如，您和您的伴侣），请使用 `Accounts` 列表：

```yaml
Accounts:
  - ImmichServerUrl: "http://homeassistant:3001"
    ApiKey: "api-key-for-user-1"
    Albums: "album-uuid-1,album-uuid-2"
    ShowFavorites: true
  - ImmichServerUrl: "http://homeassistant:3001"
    ApiKey: "api-key-for-user-2"
    People: "person-uuid-1,person-uuid-2"
ShowClock: false
Interval: 40
TZ: "Europe/London"
```

当使用 `Accounts` 列表时，顶级选项 `ApiKey` 和 `ImmichServerUrl` 不需要。图像将根据每个账户中存在的总图像数量成比例地从每个账户中绘制。

有关更多配置选项，请参阅 [ImmichFrame 文档](https://immichframe.dev/docs/getting-started/configuration)。

### 获取您的 Immich API 密钥

1. 打开您的 Immich 网络界面
2. 前往 **管理** > **API 密钥**
3. 点击 **创建 API 密钥**
4. 给它一个描述性的名称（例如，“Photo Frame”）
5. 复制生成的 API 密钥并将其粘贴到插件配置中

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项来传递在插件 UI 中不可用的额外 ImmichFrame 设置。环境变量将自动分类为通用或账户级设置，并写入 `Settings.yaml`。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

**env_vars 示例**（用于 UI 中不可用的设置）:
```yaml
env_vars:
  - name: AuthenticationSecret
    value: "my-secret"
  - name: Webhook
    value: "http://example.com/notify"
```

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有太大区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件存储的右上角，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
2. 配置您的 Immich 服务器 URL 和 API 密钥。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动插件。
5. 检查插件的日志以查看一切是否顺利。
6. 打开 WebUI 以配置您的照片相框设置。

## 支持

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问。

有关 Immich Frame 的更多信息，请访问：https://immichframe.online/

[仓库](https://github.com/alexbelgium/hassio-addons)
---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
