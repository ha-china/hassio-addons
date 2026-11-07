# Home Assistant 附加组件：OmniRoute

我在空闲时间维护此项目及其他 Home Assistant 附加组件：跟进上游变化、Home Assistant 更新，以及在真实硬件上进行测试需要花费大量时间（和一些金钱）。我日常使用其中 5-10 个来自我拥有的 110 多个附加组件，为此我会定期安装测试机器（并购买一些测试服务，如 VPN），这些我自己并不使用，以便排查问题并改进附加组件。

如果该附加组件为您节省时间或使您的设置更简单，我将非常感激你的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)
![入口点](https://img.shields.io/badge/dynamic/yaml?label=入口点&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库投了星标！请点击下方的图片给它投星，它将会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量变化趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/omniroute/stats.png)

## 关于

[OmniRoute](https://github.com/cheaper-inference/OmniRoute) 是一个开源的、自托管的 AI 推理网关和代理，提供了一个统一的 OpenAI 兼容端点，并具备智能回退、负载均衡、配额池化、令牌压缩功能，以及跨 350+ AI 服务提供商的路由能力。

主要功能：

- **统一的 OpenAI 兼容网关**：即插即用替换，支持 `/v1/chat/completions`、原生 `/v1/responses`、视觉识别和工具调用。
- **智能回退与配额**：在速率限制、错误或配额耗尽时，毫秒级无缝重试其他Provider或备用模型。
- **上下文与令牌压缩**：内置提示词和上下文压缩引擎，减少令牌消耗和成本。
- **IDE 与助手就绪**：与 Cursor、Claude Code、Cline、Roo Code、Aider、OpenCode、VS Code 及其他开发者工具无缝集成。
- **管理 Web UI**：本地仪表板，用于配置提供商、API 密钥、回退路由、配额追踪，并查看实时延迟和调用日志。
- **Home Assistant 入口点**：无需离开仪表板即可从 Home Assistant 侧边栏和 Open Web UI 直接访问。

## 安装

1. 将此仓库添加到您的 Home Assistant 实例：
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装 **OmniRoute** 附加组件。
3. 配置附加组件选项（例如，为管理 Web UI 设置 `INITIAL_PASSWORD`）。
4. 启动附加组件。
5. 点击 **打开 Web UI** 以通过 Home Assistant 入口点访问。

## 配置

Web UI 可通过 Home Assistant 入口点访问。出于安全考虑，默认情况下端口 **20128** 的直接网络访问被禁用（`null`）；如果您希望在局域网中直接暴露网关，请在 **配置** 选项卡下设置主机端口（例如 `20128`）。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `INITIAL_PASSWORD` | password | *(未设置)* | 首次设置时管理员账户的初始密码。如果未设置，将通过 Web UI 中的入门向导创建密码。 |
| `REQUIRE_API_KEY` | bool | `true` | 当设为 true 时，发送到 `/v1` 的请求需要有效的 API 密钥（该密钥需在 OmniRoute 中配置）。 |
| `OMNIROUTE_MEMORY_MB` | int | `1024` | 推理网关使用的最大 Node.js V8 旧空间内存，单位为兆字节。 |
| `TZ` | str | *(未设置)* | 容器的时区（例如 `Europe/Paris`）。 |
| `env_vars` | list | `[]` | 传递给 OmniRoute 的任意环境变量。 |

### 连接开发者工具

配置您的编程助手以连接到 OmniRoute 网关：

- **基础 URL**：`http://<homeassistant-ip>:20128/v1`
- **API 密钥**：在 OmniRoute 仪表板（位于 API 密钥部分）中生成的 API 密钥。

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
