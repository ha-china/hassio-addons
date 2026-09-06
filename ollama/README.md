# Home Assistant 的 Ollama 插件

请注意，该插件使用 CPU 加速运行，或支持实验性的 Nvidia GPU 支持（如有支持，请告知！）。ROCm 的支持尚待发布。

## 模型目录

所有下载的模型默认存储在 `/share/ollama`。出于历史原因，您也可以将其配置为 `/config/ollama`。请确保该位置空间充足。您可以选择 `/data/ollama` 以保持备份较小，因为该路径不包含在插件备份中。

## Ollama 集成

要下载任何模型，请使用 Ollama API 或集成 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/)：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

请填入以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您想更改模型，请删除集成（而非插件！）并重新启动配置过程。

## Ollama 云服务模型

Ollama 支持在 Ollama 基础设施上运行的云托管模型，这对于不适合本地 GPU 的大模型非常有用。

您有两种身份验证方式：

- 公钥私有钥身份验证：
  - 查看此插件的日志，获取显示的密钥，并将其添加到您的 [ollama 账户作为设备密钥](https://ollama.com/settings/keys)。
  - 本地，云凭证存储在 `~/.ollama/` 中，并通过插件重启（通过 `HOME` 选项）持久化到 `/data/.ollama/`。
- API 密钥：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 创建 API 密钥
  - 在插件配置中设置 `OLLAMA_API_KEY` 选项

更多信息请参阅 [Ollama Cloud 文档](https://docs.ollama.com/cloud)。

## 关于 UI 链接的说明

UI 链接仅用于检查 ollama API 是否可用。官方的 ollama 镜像不包含聊天功能。

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
