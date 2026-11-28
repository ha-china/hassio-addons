# Home Assistant 附加组件：OmniRoute

我在闲暇时间维护此及其他 Home Assistant 附加组件：跟进上游更改、Home Assistant 更改的变化以及在真实硬件上的测试需要大量的时间和精力（以及一些金钱）。我定期使用约 5-10 个 110 多个附加组件中我自己在用的那个用于安装测试机器（并购买一些测试服务，如 vpn），我将不使用它们自己用来调试和改进附加组件。

如果此附加组件为您节省时间或使设置更容易，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库点赞！要点赞它，请点击下方的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/omniroute/stats.png)

## 关于

[OmniRoute](https://github.com/cheaper-inference/OmniRoute) 是一个开源的自托管 AI 推理网关和代理，它提供了一个统一的 OpenAI 兼容端点，具有智能回退、负载均衡、配额池化、令牌压缩以及在 350+ AI 供应商之间的路由功能。

主要功能：

- **统一的 OpenAI 兼容网关**：无缝替换支持 `/v1/chat/completions`，原生 `/v1/responses`，视觉和工具调用。
- **智能回退与配额**：在速率限制、错误或配额耗尽时，可在毫秒内无缝重试替代供应商或备用模型。
- **上下文与令牌压缩**：内置提示词和上下文压缩引擎以减少令牌消耗和成本。
- **IDE 与助手就绪**：与 Cursor、Claude Code、Cline、Roo Code、Aider、OpenCode、VS Code 和其他开发人员工具无缝集成。
- **管理 Web UI**：本地仪表板用于配置供应商、API 密钥、回退路由、配额跟踪，并查看实时延迟和调用日志。
- **Home Assistant Ingress**：无需离开仪表板即可从 Home Assistant 侧边栏和 Open Web UI 直接访问。

## 安装

1. 将此仓库添加到您的 Home Assistant 实例：
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装 **OmniRoute** 附加组件。
3. 配置附加组件选项（例如，为管理 Web UI 设置 `INITIAL_PASSWORD`）。
4. 启动附加组件。
5. 点击 **Open Web UI** 通过 Home Assistant Ingress 访问。

## 配置

Web UI 可通过 Home Assistant Ingress 访问。出于安全性考虑，端口 **20128** 的直接网络连接默认被禁用（`null`）；如果您希望在 LAN 上直接暴露网关，请在 **Configuration** 标签页下设置主机端口（例如 `20128`）。

### 选项

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `INITIAL_PASSWORD` | password | *(unset)* | 首次设置时管理员账户的初始密码。如果未设置，将通过 Web UI 中的上板向导创建密码。 |
| `REQUIRE_API_KEY` | bool | `true` | 当设为 true 时，代理请求到 `/v1` 需要配置在 OmniRoute 中的有效 API 密钥。 |
| `OMNIROUTE_MEMORY_MB` | int | `1024` | 推理网关的最大 Node.js V8 old space 内存（兆字节）。 |
| `TZ` | str | *(unset)* | 容器的时区（例如 `Europe/Paris`）。 |
| `env_vars` | list | `[]` | 传递给 OmniRoute 的任意环境变量。 |

### 连接开发人员工具

配置您的编程助手以连接到 OmniRoute 网关：

- **Base URL**：`http://<homeassistant-ip>:20128/v1`
- **API Key**：在 OmniRoute 仪表板（在 API Keys 下）生成的 API 密钥。

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
