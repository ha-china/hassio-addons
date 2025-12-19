# Home assistant add-on: Immich Frame


我利用业余时间维护这个以及其他 Home Assistant add-ons：跟上上游的变更、HA 的变更，并在真实硬件上进行测试需要花费大量时间（和一些金钱）。我大约使用我 >110 个 add-ons 中的 5-10 个，因此我安装了一些我自身不使用的测试机器（并购买了一些测试服务，例如 vpn），以便调试和改进这些 add-ons。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_frame%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片来点赞，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_frame/stats.png)

## About

[Immich Frame](https://immichframe.online/) 将您的 Immich 画廊显示为数字相框。将任何屏幕转换为美丽、旋转的您个人照片和记忆的展示，这些照片和记忆存储在 Immich 中。

这个 add-on 允许您创建一个连接到您的 Immich 服务器的数字相框，并以幻灯片格式显示您的照片，非常适合将旧平板电脑或显示器改造成专用的照片显示设备。

## Configuration

Webui 可以在 `<your-ip>:8171` 找到。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `ImmichServerUrl` | str | **Required** | 您的 Immich 服务器的 URL（例如，`http://homeassistant:3001`） |
| `ApiKey` | str | **Required** | 用于身份验证的 Immich API 密钥 |
| `TZ` | str | | 时区（例如，`Europe/London`） |

### Example Configuration

```yaml
ImmichServerUrl: "http://homeassistant:3001"
ApiKey: "your-immich-api-key-here"
TZ: "Europe/London"
```

### Getting Your Immich API Key

1. 打开您的 Immich 网页界面
2. 转到 **Administration** > **API Keys**
3. 点击 **Create API Key**
4. 给它一个描述性的名称（例如，"Photo Frame"）
5. 复制生成的 API 密钥并将其粘贴到 add-on 配置中

### Custom Scripts and Environment Variables

这个 add-on 通过 `addon_config` 映射支持自定义脚本和环境变量：

- **Custom scripts**: 查看 [Running Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用 add-on 的 `env_vars` 选项传递额外的环境变量（名称可以是大小写）。查看 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## Installation

这个 add-on 的安装过程非常简单，与安装任何其他 Hass.io add-on 没有区别。

1. [将我的 Hass.io add-ons 仓库][repository] 添加到您的 Hass.io 实例。
1. 安装这个 add-on。
1. 配置您的 Immich 服务器 URL 和 API 密钥。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动 add-on。
1. 检查 add-on 的日志以查看是否一切正常。
1. 打开 WebUI 以配置您的照片框设置。

## Support

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
