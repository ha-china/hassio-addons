# Home assistant add-on: Immich Frame

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库星标的人！要星标它，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_frame/stats.png)

## 关于

[Immich Frame](https://immichframe.online/) 将您的 Immich 画廊显示为数字相框。将任何屏幕转变为展示您在 Immich 中存储的个人照片和记忆的美丽旋转显示。

这个插件允许您创建一个连接到您的 Immich 服务器的数字相框，并以幻灯片格式显示您的照片，非常适合将旧平板电脑或显示器改造成专用的照片显示器。

## 配置

Webui 可以在 `<your-ip>:8171` 找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `ImmichServerUrl` | 字符串 | **必需** | 您的 Immich 服务器的 URL（例如，`http://homeassistant:3001`） |
| `ApiKey` | 字符串 | **必需** | 用于认证的 Immich API 密钥 |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |

### 示例配置

```yaml
ImmichServerUrl: "http://homeassistant:3001"
ApiKey: "your-immich-api-key-here"
TZ: "Europe/London"
```

### 获取您的 Immich API 密钥

1. 打开您的 Immich 网页界面
2. 转到 **管理** > **API 密钥**
3. 点击 **创建 API 密钥**
4. 给它一个描述性的名称（例如，"照片相框"）
5. 复制生成的 API 密钥并将其粘贴到插件配置中

### 自定义脚本和环境变量

这个插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：见 [为您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

这个插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
2. 安装这个插件。
3. 配置您的 Immich 服务器 URL 和 API 密钥。
4. 点击 `保存` 按钮以保存您的配置。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 打开 WebUI 以配置您的照片相框设置。

## 支持

在 github 上创建问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问。

有关 Immich Frame 的更多信息，请访问：https://immichframe.online/

[repository]: https://github.com/alexbelgium/hassio-addons