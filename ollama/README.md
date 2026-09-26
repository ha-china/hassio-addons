# Home Assistant 的 Ollama 插件

请注意，该插件支持 CPU 加速或实验性的 Nvidia GPU 支持（如果您发现它有效，请告知我们！）。ROCm 的支持尚待开发。

## 模型目录

下载的模型默认存储在 `/share/ollama`。出于历史原因，您也可以将其配置为 `/config/ollama`。请确保有足够的可用空间。您可以选择 `/data/ollama` 来保持备份体积小，因为该路径将排除在插件备份之外。

## Ollama 集成

要下载任何模型，请使用 Ollama 的 API 或将 Ollama [Home Assistant 集成](https://www.home-assistant.io/integrations/ollama/) 与 Home Assistant 集成：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL：`http://76e18fb5-ollama:11434`

如果需要更改模型，请删除集成（不是插件！）并重启配置集成过程的系统。

## Ollama 云模型

Ollama 支持托管在 Ollama 基础设施上的云模型，这对于不适合本地 GPU 的大模型非常有用。

您有两种认证方式：

- 公钥私钥认证：
  - 查看该插件的日志以获取密钥，并将此密钥添加到您的 [ollama 账户作为设备密钥](https://ollama.com/settings/keys)。
  - 本地，云凭证存储在 `~/.ollama/` 中，并通过 `HOME` 选项随着插件重启而持久化到 `/data/.ollama/`。
- API 密钥：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 创建 API 密钥。
  - 在插件配置中设置 `OLLAMA_API_KEY` 选项。

更多信息请参阅 [Ollama 云文档](https://docs.ollama.com/cloud)。

## 关于 UI 链接的说明

UI 链接仅用于检查 Ollama API 是否可用。Ollama 官方镜像中不包含聊天功能。

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
