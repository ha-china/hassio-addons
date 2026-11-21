# Home assistant add-on: Karakeep

我利用业余时间维护这个和其他 Home Assistant add-ons：跟上上游的变化、Home Assistant 的变化，并在真实硬件上测试需要大量时间（和一些金钱）。我大约使用我超过 110 个 add-ons 中的 5-10 个，所以我会安装一些测试机器（和一些我自己不使用的测试服务，比如 VPN），以便调试和改进这些 add-ons。

如果这个 add-on 为您节省了时间或简化了您的设置，我将非常感谢您的支持。

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon informations

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fkarakeep%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fkarakeep%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！_

[![Stargazers repo roster](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

---

## About

[Karakeep](https://karakeep.app/) 是一个带有 AI 元素的“收藏一切”的应用程序，适用于数据囤积者。  
它存储页面、截图、文件和元数据，并使用 **Meilisearch** 提供快速全文和语义搜索。

这个 add-on 基于官方的 Karakeep Docker 镜像。

这个 Home Assistant add-on 以 **Supervisor 原生的方式**集成了 Karakeep：
- 内部服务（Meilisearch、Chromium、缓存、路径）预先连接并隐藏在 UI 之外
- 密钥自动生成并持久化
- 仅暴露有意义的用户设置

使用 [env_vars](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2) 添加额外的环境变量

---

## Secrets & Security

Karakeep 要安全运行需要两个密钥：

- `NEXTAUTH_SECRET`
- `MEILI_MASTER_KEY`

如果您留空它们，add-on 将会：
- 自动生成强加密密钥
- 将它们永久存储在 add-on 选项中
- 在重启和升级时重用它们

您不需要手动管理它们。

---

## Configuration

仅暴露**安全、有意义的选项**。  
所有基础设施（Meilisearch、Chromium、缓存、路径、分析等）都由 add-on 自动管理。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `NEXTAUTH_SECRET` | password | *(auto)* | 认证密钥（如果为空则自动生成）。 |
| `NEXTAUTH_URL` | str | | NextAuth 使用的公共 URL（可选）。 |
| `DISABLE_SIGNUPS` | bool | `false` | 禁止新用户注册。 |
| `MAX_ASSET_SIZE_MB` | int | `4` | 最大资产上传大小。 |
| `OPENAI_API_KEY` | password | | 用于 AI 功能的 OpenAI API 密钥。 |
| `OCR_LANGS` | str | | OCR 语言（逗号分隔）。 |
| `INFERENCE_LANG` | str | | 用于 AI 推理的语言。 |
| `CRAWLER_DOWNLOAD_BANNER_IMAGE` | bool | `true` | 下载横幅图像。 |
| `CRAWLER_STORE_SCREENSHOT` | bool | `true` | 存储页面截图。 |
| `CRAWLER_FULL_PAGE_SCREENSHOT` | bool | `true` | 捕获全页截图。 |
| `CRAWLER_FULL_PAGE_ARCHIVE` | bool | `true` | 存储全页存档。 |
| `CRAWLER_ENABLE_ADBLOCKER` | bool | `true` | 启用广告拦截。 |
| `CRAWLER_VIDEO_DOWNLOAD` | bool | `false` | 启用视频下载。 |
| `TZ` | str | `Etc/UTC` | 时区。 |

---

## Installation

1. 添加我的 Home Assistant add-ons 仓库  
   [![Add repository][repository-badge]][repository-url]

2. 安装 **Karakeep**
3. 点击 **保存**
4. 启动 add-on（密钥自动生成）
5. 打开 Web UI 并完成设置引导

---

## Support

如果需要帮助，请在 GitHub 上创建一个问题。

[repository]: https://github.com/alexbelgium/hassio-addons
[repository-badge]: https://img.shields.io/badge/Add%20repository%20to%20my-Home%20Assistant-41BDF5?logo=home-assistant&style=for-the-badge
[repository-url]: https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons
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
