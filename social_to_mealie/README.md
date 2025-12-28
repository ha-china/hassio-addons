# Home assistant add-on: Social to Mealie

我利用业余时间维护这个和其他 Home Assistant 插件：跟上上游的更改、HA 的更改，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过 110 个插件中的 5-10 个，因此我安装了测试机器（并购买了一些我自己不使用的测试服务，例如 VPN），以便调试和改进插件。

如果这个插件为您节省了时间或简化了设置，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它将在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/social_to_mealie/stats.png)

## About

[Social to Mealie](https://github.com/GerardPolloRebozado/social-to-mealie) 允许您将社交媒体视频中的食谱直接导入到您的 Mealie 实例中。

这个插件基于 https://github.com/GerardPolloRebozado/social-to-mealie 的 Docker 镜像

## Configuration

Webui 可以在 <http://homeassistant:3000> 找到。

### Options

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `OPENAI_URL` | 字符串 | `https://api.openai.com/v1` | OpenAI 兼容端点的 URL |
| `OPENAI_API_KEY` | 字符串 | `` | OpenAI 兼容提供者的 API 密钥 |
| `TRANSCRIPTION_MODEL` | 字符串 | `whisper-1` | 用于转录的 Whisper 模型 |
| `TEXT_MODEL` | 字符串 | `gpt-4o-mini` | 用于构建食谱的文本模型 |
| `MEALIE_URL` | 字符串 | `https://mealie.example.com` | 您的 Mealie 实例的 URL |
| `MEALIE_API_KEY` | 字符串 | `` | Mealie 的 API 密钥 |
| `MEALIE_GROUP_NAME` | 字符串 | `home` | 可选的 Mealie 组名 |
| `EXTRA_PROMPT` | 字符串 | `` | 附加指令用于 AI |
| `YTDLP_VERSION` | 字符串 | `latest` | 启动时下载的 yt-dlp 版本 |
| `COOKIES` | 字符串 | `` | 可选的 yt-dlp 的 cookies 字符串 |
| `env_vars` | 列表 | `[]` | 需要导出的附加环境变量 |

### 示例配置

```yaml
OPENAI_URL: https://api.openai.com/v1
OPENAI_API_KEY: sk-...
TRANSCRIPTION_MODEL: whisper-1
TEXT_MODEL: gpt-4o-mini
MEALIE_URL: https://mealie.example.com
MEALIE_API_KEY: ey...
MEALIE_GROUP_NAME: home
EXTRA_PROMPT: ""
YTDLP_VERSION: latest
COOKIES: ""
env_vars: []
```

### 注意事项

- 需要 Mealie 1.9.0+ 并配置了 AI 提供者。
- 可以通过设置 `YTDLP_VERSION` 预先下载 yt-dlp（例如 `latest` 或 `2025.11.01`）。
- 如果您需要使用 yt-dlp 访问受保护的社交媒体内容，请提供 cookies 字符串。
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
