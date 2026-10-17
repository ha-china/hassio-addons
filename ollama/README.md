# Home Assistant Ollama 附加组件

请注意，该附加组件运行于 CPU 加速模式或实验性的 Nvidia GPU 支持（如果有发现运行成功，请反馈）。ROCm 的支持目前仍处于待定状态。

## 模型目录

默认情况下，所有下载的模型存储于 `/share/ollama`。出于历史原因，您也可以将其配置为 `/config/ollama`。请确保有足够的空间可用。您可以选择 `/data/ollama` 以保持备份小巧，因为该路径被附加组件备份排除在外。

## Ollama 集成

要下载任何模型，请使用 Ollama 的 API 或将 `Home Assistant` 集成与 [Ollama](https://www.home-assistant.io/integrations/ollama/) 集成：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

请使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您想更改模型，请删除集成（不是附加组件！）并重新运行配置过程的流程以恢复配置。

## Ollama 云端模型

Ollama 支持运行在 Ollama 基础架构上的云托管模型，这对于不适合本地 GPU 的大型模型非常有用。

您有两种身份验证方式：

- 公钥 - 私钥身份验证：
  - 在此附加组件的日志中查找密钥，并将此密钥添加为您的 [ollama 账户中的设备密钥](https://ollama.com/settings/keys)。
  - 本地，云凭证存储在 `~/.ollama/` 中，并通过 `HOME` 选项在附加组件重启期间持久化到 `/data/.ollama/`。
- API 密钥：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 处创建 API 密钥
  - 在附加组件配置中设置 `OLLAMA_API_KEY` 选项

请查看 [Ollama 云文档](https://docs.ollama.com/cloud) 了解更多。

## 关于 UI 链接的说明

UI 链接仅用于检查 Ollama API 是否可用。官方 Ollama 镜像中不包含聊天功能。

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
