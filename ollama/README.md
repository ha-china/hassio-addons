# Home Assistant 的 Ollama 附加组件

请注意，该附加组件支持 CPU 加速或实验性的 Nvidia GPU 支持（如果您发现它有效，请告知我们！）。对于 ROCm，支持功能尚待实现。

## 模型目录

所有下载的模型默认存储在 `/share/ollama`。出于历史原因，您也可以将其配置到 `/config/ollama`。请确保您有足够的空间。您可以选择 `/data/ollama` 以保持备份体积小，因为该路径已被从附加组件备份中排除。

## Ollama 集成

要下载任何模型，请使用 Ollama 的 API 或与 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/) 进行集成：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您想更改模型，请删除集成（不要删除附加组件！）并重新启动以配置集成的过程。

## Ollama 云端模型

Ollama 支持在 Ollama 基础设施上运行的云端托管模型，这对于不适合本地 GPU 的大模型非常有用。

您有两种身份验证方式：

- **公钥私钥身份验证**：
  - 查看该附加组件的日志（其中显示密钥），并将此密钥添加到您的 [Ollama 账户作为设备密钥](https://ollama.com/settings/keys)。
  - 本地地，云端凭据存储于 `~/.ollama/`，并跨附加组件重启通过 `HOME` 选项持久化保存到 `/data/.ollama/`。
- **API 密钥**：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 创建 API 密钥。
  - 在附加组件配置中设置 `OLLAMA_API_KEY` 选项。

更多详情请参阅 [Ollama 云端文档](https://docs.ollama.com/cloud)。

## 关于 UI 链接的说明

UI 链接仅用于检查 Ollama API 是否可用。官方 ollama 镜像中不包含聊天功能。

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
