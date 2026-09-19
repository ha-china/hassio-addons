# Home Assistant 附加组件：Immich Frame

我是在空闲时间维护此及其他 Home Assistant 附加组件的开发者：跟进上游变更、Home Assistant 的更新，以及在真实硬件上进行测试需要大量时间（甚至一些金钱）。我大约使用我超过 110 个附加组件中的 5-10 个，因此我安装了试验机器（甚至购买一些我不使用的试验服务，如 vpn），以解决问题和改进附加组件。

如果您的附加组件为您节省了时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)

[![CodacyBadge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHubSuper-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！点击右上角下方的图片来点赞它，谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_frame/stats.png)

## 简介

[Immich Frame](https://immichframe.online/) 将您的 Immich 相册显示为数字照片相框。将任何屏幕转换为美丽、旋转的个人照片和记忆展示，它们都存储在 Immich 中。

此附加组件允许您创建一个连接到您的 Immich 服务器的数字照片相框，并以幻灯片格式显示您的照片，非常适合将旧平板电脑或显示器专门用作照片展示。

## 配置

Webui 地址为 `<your-ip>:8171`。

### 选项

#### 连接

| 选项 | 类型 | 描述 |
|--------|------|-------------|
| `ImmichServerUrl` | str | 您的 Immich 服务器 URL（例如，`http://homeassistant:3001`）。用于单账号设置。 |
| `ApiKey` | str | 用于认证的 Immich API 密钥。用于单账号设置。 |
| `Accounts` | list | 用于多账号支持的 Immich 账号列表。每个条目都需要 `ImmichServerUrl` 和 `ApiKey`，以及可选的每个账号过滤器（见下文）。 |
| `TZ` | str | 时区（例如，`Europe/London`） |

#### 常规（显示）选项

这些顶层选项映射到 ImmichFrame 的 `General` 设置，并控制显示行为：

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `Interval` | int | 45 | 图像显示间隔（秒） |
| `TransitionDuration` | float | 2 | 转换持续时间（秒） |
| `ShowClock` | bool | true | 显示当前时间 |
| `ClockFormat` | str | `hh:mm` | 时钟的时间格式 |
| `ClockDateFormat` | str | `eee, MMM d` | 时钟的日期格式 |
| `ShowProgressBar` | bool | true | 显示进度条 |
| `ShowPhotoDate` | bool | true | 显示当前图像的日期 |
| `PhotoDateFormat` | str | `MM/dd/yyyy` | 照片日期的格式 |
| `ShowImageDesc` | bool | true | 显示图像描述 |
| `ShowPeopleDesc` | bool | true | 显示人物名字 |
| `ShowTagsDesc` | bool | true | 显示标签名字 |
| `ShowAlbumName` | bool | true | 显示照片集名字 |
| `ShowImageLocation` | bool | true | 显示图像位置 |
| `ShowWeatherDescription` | bool | true | 显示天气描述 |
| `ImageZoom` | bool | true | 拉近图像以增添生机 |
| `ImagePan` | bool | false | 随机方向移动图像 |
| `ImageFill` | bool | false | 填充可用空间（可能导致裁剪） |
| `PlayAudio` | bool | false | 播放带有音频轨道的视频的音频 |
| `PrimaryColor` | str | `#f5deb3` | 主要 UI 颜色（十六进制） |
| `SecondaryColor` | str | `#000000` | 次要 UI 颜色（十六进制） |
| `Style` | str | `none` | 背景样式：`none`、`solid`、`transition`、`blur` |
| `Layout` | str | `splitview` | 布局：`single`或`splitview` |
| `BaseFontSize` | str | `17px` | 基础字体大小（CSS格式） |
| `Language` | str | `en` | 2 位 ISO 语言代码 |
| `WeatherApiKey` | str | | OpenWeatherMap API 密钥 |
| `UnitSystem` | str | `imperial` | `imperial` 或 `metric` |
| `WeatherLatLong` | str | | 天气位置格式为 `lat,lon` |
| `ImageLocationFormat` | str | `City,State,Country` | 位置显示格式 |
| `DownloadImages` | bool | false | 下载图像到服务器 |
| `RenewImagesDuration` | int | 30 | 在此天数后重新下载图像 |
| `RefreshAlbumPeopleInterval` | int | 12 | 专辑/人物刷新间隔（小时） |

#### 每个账号选项

这些选项可以在每个 `Accounts` 条目内部设置，以控制显示哪些图像：

| 选项 | 类型 | 描述 |
|--------|------|-------------|
| `Albums` | str | 用逗号分隔的专辑 UUID |
| `ExcludedAlbums` | str | 用逗号分隔的排除专辑 UUID |
| `People` | str | 用逗号分隔的人物 UUID |
| `Tags` | str | 用逗号分隔的标签路径（例如，`Vacation,Travel/Europe`） |
| `ShowFavorites` | bool | 显示喜爱的图像 |
| `ShowMemories` | bool | 显示记忆图像 |
| `ShowArchived` | bool | 显示归档图像 |
| `ShowVideos` | bool | 包含视频资产 |
| `ImagesFromDays` | int | 显示过去 X 天的图像 |
| `ImagesFromDate` | str | 显示此日期之后的图像 |
| `ImagesUntilDate` | str | 显示此日期之前的图像 |
| `Rating` | int | 按星级评分筛选（-1 到 5） |

### 单账号示例

```yaml
ImmichServerUrl: "http://homeassistant:3001"
ApiKey: "your-immich-api-key-here"
TZ: "Europe/London"
ShowClock: false
Interval: 30
PhotoDateFormat: "dd/MM/yyyy"
```

### 多账号示例

要显示来自多个 Immich 账号（例如，您和您的伴侣）的照片，请使用 `Accounts` 列表：

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

当使用 `Accounts` 列表时，不需要顶层的 `ApiKey` 和 `ImmichServerUrl` 选项。图像将来自每个账号，基于每个账号中存在的图像总数按比例绘制。

有关更多配置选项，请参阅 [ImmichFrame 文档](https://immichframe.dev/docs/getting-started/configuration)。

### 获取您的 Immich API 密钥

1. 打开您的 Immich Web 界面
2. 转到 **Administration** > **API Keys**
3. 点击 **Create API Key**
4. 给它一个描述性名称（例如，"Photo Frame"）
5. 复制生成的 API 密钥并将其粘贴到附加组件配置中

### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项来传递在附加组件 UI 中不可用的额外 ImmichFrame 设置。环境变量会自动分类为广义或账号级设置，并写入 `Settings.yaml`。详细信息请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

**env_vars 示例**（用于不在 UI 中的设置）：
```yaml
env_vars:
  - name: AuthenticationSecret
    value: "my-secret"
  - name: Webhook
    value: "http://example.com/notify"
```

## 安装

此附加组件的安装非常简单，不需要与安装任何其他 Hass.io 附加组件不同。

1. 将我的附加组件仓库添加到您的 home assistant 实例（在 supervisor addons 商店右上角，或者如果您已配置我的 HA，请点击下方按钮）
   [![打开您的 home assistant 实例并显示带有特定仓库 URL 预填的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 配置您的 Immich 服务器 URL 和 API 密钥。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，以查看一切是否正常。
1. 打开 WebUI 以配置您的照片相框设置。

## 支持

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问

有关 Immich Frame 的更多信息，请访问：https://immichframe.online/

[repository]: https://github.com/alexbelgium/hassio-addons

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
