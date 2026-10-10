# Home Assistant 附加组件：Social to Mealie

我在业余时间维护此 Home Assistant 附加组件及其他附加组件：跟踪上游更改、HA 的变化以及在实际硬件上测试需要大量时间（和一些金钱）。我使用的附加组件约有 5-10 个（我在 100 多个以上），所以我经常使用我自己不使用进行测试机器（并购买一些测试服务，如 vpn），以便辅助故障排除和改进附加组件

如果这个附加组件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fsocial_to_mealie%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库 lint)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库星标！要星标它，请点击下面的图片，然后将它显示在右上角。谢谢!_

[![@alexbelgium/hassio-addons 的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/social_to_mealie/stats.png)

## 简介

[Social to Mealie](https://github.com/GerardPolloRebozado/social-to-mealie) 允许您直接从社交媒体视频中导入食谱到您的 Mealie 实例中。

该附加组件基于 docker 镜像 https://github.com/GerardPolloRebozado/social-to-mealie

## 安装

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或如果您已配置了我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 启动附加组件。
1. 检查附加组件的日志，以查看一切是否顺利。

## 配置

Webui 可在 <http://homeassistant:3000> 处找到。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `OPENAI_URL` | str | `https://api.openai.com/v1` | OpenAI 兼容端点的 URL |
| `OPENAI_API_KEY` | str | `` | OpenAI 兼容提供商的 API 密钥 |
| `TRANSCRIPTION_MODEL` | str | `whisper-1` | 用于转录的 Whisper 模型 |
| `TEXT_MODEL` | str | `gpt-4o-mini` | 用于构建食谱的文本模型 |
| `MEALIE_URL` | str | `https://mealie.example.com` | 您的 Mealie 实例的 URL |
| `MEALIE_API_KEY` | str | `` | Mealie 的 API 密钥 |
| `MEALIE_GROUP_NAME` | str | `home` | 可选的 Mealie 组名称 |
| `EXTRA_PROMPT` | str | `` | 提供给 AI 的额外指令 |
| `YTDLP_VERSION` | str | `latest` | 启动时下载的 yt-dlp 版本 |
| `COOKIES` | str | `` | 提供给 yt-dlp 的可选cookie 字符串 |
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

### 备注

- Mealie 1.9.0+且已配置 AI 提供者是必需的。
- 可以通过设置 `YTDLP_VERSION` 预先下载 yt-dlp（例如 `latest` 或 `2025.11.01`）。
- 如果需要 yt-dlp 访问受保护的社交媒体内容，请提供 cookie 字符串。

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
