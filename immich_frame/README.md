# Home Assistant 附加组件：Immich 画框

我利用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、处理 Home Assistant 更新以及在真正的硬件上进行测试耗费了大量时间（和一些金钱）。我使用了约 5-10 个我的 100 多个附加组件，因此我定期安装测试机器（并购买一些自己不使用的服务，如 vpn）用于故障排查和改进附加组件功能。

如果您认为此附加组件为您节省时间或使您的设置更简便，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家在我的仓库上点个星！要星标它，请点下方的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_frame/stats.png)

## 关于

[Immich Frame](https://immichframe.online/) 展示您的 Immich 图库作为数字相框。将任何屏幕转换为您的个人照片和存储在 Immich 中的记忆的优美旋转显示屏。

该附加组件允许您创建一个数字相框，连接到您的 Immich 服务器并以幻灯片格式显示您的照片，非常适合将旧平板电脑或显示器改用作专用照片显示器。

## 配置

WebUI 位于 `<your-ip>:8171`。

### 选项

#### 连接

| 选项 | 类型 | 描述 |
|--------|------|-------------|
| `ImmichServerUrl` | str | 您的 Immich 服务器的 URL（例如，`http://homeassistant:3001`）。用于单账户设置。 |
| `ApiKey` | str | 用于认证的 Immich API 密钥。用于单账户设置。 |
| `Accounts` | list | Immich 账户列表以支持多账户。每个条目需要 `ImmichServerUrl` 和 `ApiKey`，以及一些可选的特定账户过滤器（见下文）。 |
| `TZ` | str | 时区（例如，`Europe/London`） |
| `IMMICHFRAME_ADMIN_PASSWORD` | password | ImmichFrame 的 `/admin` 设置页面的可选密码 |

#### 通用 (显示) 选项

这些顶层选项映射到 ImmichFrame 的 `General` 设置，并控制显示行为：

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `Interval` | int | 45 | 图像显示间隔（秒） |
| `TransitionDuration` | float | 2 | 过渡持续时间（秒） |
| `ShowClock` | bool | true | 显示当前时间 |
| `ClockFormat` | str | `hh:mm` | 时钟的时间格式 |
| `ClockDateFormat` | str | `eee, MMM d` | 时钟的日期格式 |
| `ShowProgressBar` | bool | true | 显示进度条 |
| `ShowPhotoDate` | bool | true | 显示当前图像的日期 |
| `PhotoDateFormat` | str | `MM/dd/yyyy` | 照片日期的格式 |
| `ShowImageDesc` | bool | true | 显示图像描述 |
| `ShowPeopleDesc` | bool | true | 显示人名 |
| `ShowTagsDesc` | bool | true | 显示标签名 |
| `ShowAlbumName` | bool | true | 显示相册名称 |
| `ShowImageLocation` | bool | true | 显示图像位置 |
| `ShowWeatherDescription` | bool | true | 显示天气描述 |
| `ImageZoom` | bool | true | 放大有些生机 |
| `ImagePan` | bool | false | 向随机方向平移图像 |
| `ImageFill` | bool | false | 填充可用空间（可能会裁剪） |
| `PlayAudio` | bool | false | 带音轨的 videos 播放音频 |
| `PrimaryColor` | str | `#f5deb3` | 主要 UI 颜色（十六进制） |
| `SecondaryColor` | str | `#000000` | 次要 UI 颜色（十六进制） |
| `Style` | str | `none` | 背景样式：`none`, `solid`, `transition`, `blur` |
| `Layout` | str | `splitview` | 布局：`single` 或 `splitview` |
| `BaseFontSize` | str | `17px` | 基本字体大小（CSS 格式） |
| `Language` | str | `en` | 两位 ISO 语言代码 |
| `WeatherApiKey` | str | | OpenWeatherMap API 密钥 |
| `UnitSystem` | str | `imperial` | `imperial` 或 `metric` |
| `WeatherLatLong` | str | | 天气位置作为 `lat,lon` |
| `ImageLocationFormat` | str | `City,State,Country` | 位置显示格式 |
| `DownloadImages` | bool | false | 下载图像到服务器 |
| `RenewImagesDuration` | int | 30 | 在此天数后重新下载图像 |
| `RefreshAlbumPeopleInterval` | int | 12 | 相册/人脸刷新间隔（小时） |

#### 每个账户选项

可以在每个 `Accounts` 条目中设置这些选项来控制显示哪些图像：

| 选项 | 类型 | 描述 |
|--------|------|-------------|
| `Albums` | str | 逗号分隔的专辑 UUID 列表 |
| `ExcludedAlbums` | str | 被排除的专辑 UUID 逗号分隔列表 |
| `People` | str | 逗号分隔的人 UUID 列表 |
| `Tags` | str | 逗号分隔的标签路径（例如，`Vacation,Travel/Europe`） |
| `ShowFavorites` | bool | 显示喜欢图像 |
| `ShowMemories` | bool | 显示记忆图像 |
| `ShowArchived` | bool | 显示归档图像 |
| `ShowVideos` | bool | 包含视频资产 |
| `ImagesFromDays` | int | 显示最后 X 天的图像 |
| `ImagesFromDate` | str | 显示此日期之后的图像 |
| `ImagesUntilDate` | str | 显示此日期之前的图像 |
| `Rating` | int | 按星评过滤（-1 到 5） |

#### 单账户示例

```yaml
ImmichServerUrl: "http://homeassistant:3001"
ApiKey: "your-immich-api-key-here"
TZ: "Europe/London"
ShowClock: false
Interval: 30
PhotoDateFormat: "dd/MM/yyyy"
```

#### 多账户示例

要显示多个 Immich 账户的照片（例如，您和您的伴侣），请使用 `Accounts` 列表：

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

使用 `Accounts` 列表时，不需要顶层的 `ApiKey` 和 `ImmichServerUrl` 选项。图像将按照每个账户中实际存在的总图像数量的比例进行绘制。

从 ImmichFrame 1.0.38 开始，设置存储在上游 SQLite 数据库中。附加组件在首次启动时以及在任何附加组件选项更改时自动导入生成的配置。只要附加组件选项保持不变，通过 ImmichFrame 的 `/admin` 页面更改的设置就会在重启后得到保留。更改一个附加组件选项会使附加组件配置再次具有权威性；之前的数据库会被保留在活跃的数据库旁边，并在重新导入之前将其更改为带有 `.addon-backup` 后缀。

有关更多配置选项，请参阅 [ImmichFrame 文档](https://immichframe.dev/docs/getting-started/configuration)。

#### 获取您的 Immich API 密钥

1. 打开 Immich web 界面
2. 进入 **Administration** > **API Keys**
3. 点击 **Create API Key**
4. 给它取一个描述性名称（例如，"Photo Frame"）
5. 复制生成的 API 密钥并将其粘贴到附加组件配置中

#### 自定义脚本和环境变量

此附加组件支持通过 `app_config` 映射的自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递附加组件 UI 中不可用的额外 ImmichFrame 设置。环境变量会被自动分类为通用或账户级别设置，并写入 `Settings.yaml`。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

**env_vars 示例**（适用于 UI 中未设置的内容）：
```yaml
env_vars:
  - name: AuthenticationSecret
    value: "my-secret"
  - name: Webhook
    value: "http://example.com/notify"
```

## 安装

此附加组件的安装非常直接，与安装任何其他 Hass.io 附加组件没有区别。

1. 将我的附加组件存储库添加到您的 home assistant 实例中（在 supervisor Add-on 存储右上角，或者如果您已配置了我的 HA，请点击下方的按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 配置您的 Immich 服务器 URL 和 API 密钥。
4. 点击 `Save` 按钮以存储您的配置。
5. 启动附加组件。
6. 检查附加组件的记录以确定一切是否正常。
7. 打开 WebUI 配置您的照片框设置。

## 支持

在 github 上创建问题，或询问 [home assistant 社区论坛](https://community.home-assistant.io/)

有关 Immich Frame 的更多信息，请访问：https://immichframe.online/

[repository]: https://github.com/alexbelgium/hassio-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
