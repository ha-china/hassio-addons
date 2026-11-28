# Home Assistant 附加组件：Social to Mealie

我在空闲时间维护这款及其他 Home Assistant 附加组件：我需要紧跟上游变化，适配 HA 变化，并在真实硬件上进行测试，这耗费了大量时间（甚至不少金钱）。由于我使用的附加组件有 110 多个中大约仅维持 5-10 个的活跃度，因此我经常安装测试机（并购买一些测试服务如 vpn），用于这些我自己不常用的机器的故障排查与附加组件的改进。

如果这个附加组件能为您节省时间或简化您的设置，您的支持将令我非常感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我 repo 点赞！请点击上方图片为其点赞同/star，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/social_to_mealie/stats.png)

## 简介

[Social to Mealie](https://github.com/GerardPolloRebozado/social-to-mealie) 可直接从社交媒体视频导入食谱到您的 Mealie 实例中。

该附加组件基于 Docker 镜像：https://github.com/GerardPolloRebozado/social-to-mealie

## 安装

1. 将我的附加组件存储库添加到您的 home assistant 实例（在 supervisor 附加组件商店点击右上角，或在您已配置我的 Home Assistant 时点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 启动附加组件。
1. 查看附加组件的日志以确认是否一切正常。

## 配置

Webui 位于 <http://homeassistant:3000>。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `OPENAI_URL` | str | `https://api.openai.com/v1` | 兼容 OpenAI 的端点 URL |
| `OPENAI_API_KEY` | str | `` | 兼容 OpenAI 的服务提供商的 API 密钥 |
| `TRANSCRIPTION_MODEL` | str | `whisper-1` | 用于转录的 Whisper 模型 |
| `TEXT_MODEL` | str | `gpt-4o-mini` | 用于构建食谱的文本模型 |
| `MEALIE_URL` | str | `https://mealie.example.com` | 您的 Mealie 实例的 URL |
| `MEALIE_API_KEY` | str | `` | Mealie 的 API 密钥 |
| `MEALIE_GROUP_NAME` | str | `home` | 可选的 Mealie 组名 |
| `EXTRA_PROMPT` | str | `` | 给 AI 的额外指令 |
| `YTDLP_VERSION` | str | `latest` | 启动时下载的 yt-dlp 版本 |
| `COOKIES` | str | `` | 供 yt-dlp 使用的可选 cookies 字符串 |
| `env_vars` | list | `[]` | 要导出的额外环境变量 |

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

- 需要 Mealie 1.9.0+ 并配置有 AI 提供商。
- 可通过设置 `YTDLP_VERSION` 预先下载 yt-dlp（例如 `latest` 或 `2025.11.01`）。
- 如需使用 yt-dlp 访问受保护的社交媒体内容，请提供 cookies 字符串。

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
