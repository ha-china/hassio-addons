# Ollama Home Assistant 插件

请注意，此插件需要使用 CPU 加速或实验性的 Nvidia GPU 支持（如果它对您有效，请报告一下！）对于 ROCm，支持仍在等待中。

## 模型目录

所有下载的模型默认存储在 `/share/ollama`。由于历史原因，您也可以将其配置为 `/config/ollama`。请确保您有足够的可用空间。您可以选择 `/data/ollama` 以保持备份较小，因为这个路径不包括在插件备份中。

## Ollama 集成

要下载任何模型，请使用 Ollama 的 API 或与 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/) 集成：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您想更改模型，请删除集成（而不是插件！）并重新启动集成配置过程。

## Ollama 云端模型

Ollama 支持运行在 Ollama 基础设施上的云端托管模型，这对于不适合本地 GPU 的大型模型非常有用。

您有两种身份验证方式：

- 公私钥身份验证：
  - 查看此插件的日志，其中显示了密钥，并将此密钥添加到您的 [ollama 账户作为设备密钥](https://ollama.com/settings/keys)。
  - 在本地，云凭证存储在 `~/.ollama/` 并跨插件重启持久化到 `/data/.ollama/`（通过 `HOME` 选项）。
- API 密钥：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 创建 API 密钥
  - 在插件配置中设置 `OLLAMA_API_KEY` 选项

有关更多信息，请参阅 [Ollama 云端文档](https://docs.ollama.com/cloud)。

## 关于 UI 链接的说明

UI 链接仅用于检查 ollama 的 API 是否可用。ollama 的官方镜像中不包含聊天功能。
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
