# Home Assistant add-on: OmniRoute

我利用空闲时间维护此及其他 Home Assistant add-on：跟踪上游变化、适配 Home Assistant 更新以及在实际硬件上测试需要花费大量时间（和一定的金钱）。我大约使用我的 110 多个 add-on 中的 5-10 个，以至于我 regularly 安装测试机器（并购买一些测试服务，如 VPN），即使我自己不使用它们，也用于调试和改进 add-on。

如果这个 add-on 能为您的节省时间或简化配置，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## Addon 信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fomniroute%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢大家为我仓库星标！要星标它，请点击图片，它将被置于右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/omniroute/stats.png)

## 关于

[OmniRoute](https://github.com/cheaper-inference/OmniRoute) 是一个开源的自托管 AI 推理网关和代理，提供统一的 OpenAI 兼容端点，具备智能备用、负载均衡、配额池、token 压缩以及跨 350+ 个 AI 服务商的能力。

主要特性：

- **统一的 OpenAI 兼容网关**：即插即用，支持 `/v1/chat/completions`、原生 `/v1/responses`、视觉识别和工具调用。
- **智能备用与配额管理**：在速率限制、错误或配额耗尽时，无缝地在毫秒级时间内重试备用服务商或备用模型。
- **上下文与 Token 压缩**：内置提示词和上下文压缩引擎，以减少 token 消耗和成本。
- **IDE 与助手就绪**：与 Cursor、Claude Code、Cline、Roo Code、Aider、OpenCode、VS Code 及其他开发者工具无缝集成。
- **管理 Web UI**：本地仪表板用于配置服务商、API 密钥、备用路线、配额跟踪并查看实时延迟和调用日志。
- **Home Assistant Ingress**：无需离开仪表板，即可直接从 Home Assistant 侧边栏和 Open Web UI 直接访问。

## 安装

1. 将此仓库添加到您的 Home Assistant 实例：
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装 **OmniRoute** add-on。
3. 配置 add-on 选项（例如，为管理 Web UI 设置 `INITIAL_PASSWORD`）。
4. 启动 add-on。
5. 点击 **Open Web UI** 通过 Home Assistant Ingress 访问。

## 配置

Web UI 可通过 Home Assistant Ingress 访问。出于安全考虑，默认在端口 **20128** 上禁用直接网络访问（设置为 `null`）；如果希望将网关直接在局域网中暴露，请在 **Configuration** 选项卡下设置主机端口（例如 `20128`）。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `INITIAL_PASSWORD` | password | *(未设置)* | 首次设置时管理员账户的初始密码。如果未设置，密码将通过 Web UI 中的入职向导创建。 |
| `REQUIRE_API_KEY` | bool | `true` | 当为 `true` 时，发送到 `/v1` 的代理请求需要在 OmegaRoute 中配置的有效 API 密钥。 |
| `OMNIROUTE_MEMORY_MB` | int | `1024` | 推理网关中 Node.js V8 旧空间的最大内存（MB）。 |
| `TZ` | str | *(未设置)* | 容器的时区（例如 `Europe/Paris`）。 |
| `env_vars` | list | `[]` | 传递给 OmniRoute 的任意环境变量。 |

### 连接开发者工具

配置您的编程助手以连接到 OmniRoute 网关：

- **Base URL**: `http://<homeassistant-ip>:20128/v1`
- **API Key**: 在 OmniRoute 仪表板（API Keys 部分）生成的 API 密钥

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
