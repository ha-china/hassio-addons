# Home Assistant 的 Ollama 插件

请注意，此插件运行于 CPU 加速或实验性的 Nvidia GPU 支持之上（如有成功支持，请报告）。ROCm 的支持仍在跟进中。

## 模型目录

所有下载的模型默认存储于 `/share/ollama`。出于历史原因，您也可以将其配置为 `/config/ollama`。请确保您有足够的可用空间。您可以选择 `/data/ollama` 以保持备份文件较小，因为该路径被排除在插件备份之外。

## Ollama 集成

要下载任何模型，请使用方法使用 Ollama 的 API 或将 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/)：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您想要更改模型，请删除集成（不是插件！）并重启以配置集成的流程。

## Ollama 云端模型

Ollama 支持运行在 Ollama 基础设施上的云端托管模型，这对于不适合本地 GPU 的大模型非常有用。

您有两种认证方式：

- 公有/私有密钥认证：
  - 查看此插件的日志，其中显示密钥，并将该密钥添加为您的 [ollama 账户的设备密钥](https://ollama.com/settings/keys)。
  - 本地，云端凭据存储于 `~/.ollama/` 并通过 `HOME` 选项持久化到 `/data/.ollama/`（即使插件重启）。
- API 密钥：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 处创建 API 密钥
  - 在插件配置中设置 `OLLAMA_API_KEY` 选项

更多详细信息请参阅 [Ollama 云端文档](https://docs.ollama.com/cloud)。

## 关于 UI 链接的说明

UI 链接仅用于检查 Ollama API 是否可用。官方 ollama 镜像中不包含聊天功能。

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
