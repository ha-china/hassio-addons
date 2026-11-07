# Home Assistant 的 Ollama 附加功能

请注意，此附加功能使用 CPU 加速运行或实验性 Nvidia GPU 支持（如有需要，请报告它是否对您有效！）。ROCm 的支持仍在进行中。

## 模型目录

所有下载模型默认存储在 `/share/ollama`。出于历史原因，您也可以将其配置为 `/config/ollama`。请确保您有足够的可用空间。您可以选择 `/data/ollama` 以保留备份体积小，因为该路径被附加功能备份排除。

## Ollama 集成

要下载任何模型，请使用 Ollama 的 API 或集成 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/)：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

请使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果更改模型，请删除集成（不是附加功能！）并重新启动集成配置的流程。

## Ollama 云服务模型

Ollama 支持运行在 Ollama 基础设施上的云服务模型，这些模型适用于不适合本地 GPU 的大模型。

您有两种认证方式：

- **公共密钥 - 私人密钥认证**：
  - 查看此附加功能的日志，该密钥会显示在其中，然后将此密钥添加到您的 [ollama 账户作为设备密钥](https://ollama.com/settings/keys)。
  - 本地，雲凭证存储于 `~/.ollama/` 并通过 `HOME` 选项在附加功能重启期间持久化到 `/data/.ollama/`。
- **API 密钥**：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 处创建 API 密钥。
  - 在附加功能配置中设置 `OLLAMA_API_KEY` 选项。

更多信息请参阅 [Ollama Cloud 文档](https://docs.ollama.com/cloud)。

## 关于 UI 链接的说明

UI 链接仅用于检查 Ollama API 是否可用。Ollama 官方镜像不包含聊天功能。

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
