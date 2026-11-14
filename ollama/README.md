# Home Assistant 的 Ollama 附加组件

请注意，该附加组件使用 CPU 加速运行，或支持实验性的 Nvidia GPU（如果您发现其有效，请反馈！）。ROCm 的支持目前仍处于待定状态。

## 模型目录

所有下载的模型默认存储在 `/share/ollama`。出于历史原因，您也可以将其配置为 `/config/ollama`。请确保有足够的光盘空间。您可以选择 `/data/ollama` 以保持备份较小，因为该路径已被附加组件备份排除。

## Ollama 集成

要下载任何模型，请使用 Ollama 的 API 或结合 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/)：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您要更改模型，请删除集成（不是附加组件！）并重启以重新配置集成。

## Ollama 云模型

Ollama 支持运行在 Ollama 基础设施上的云托管模型，这对不适合本地 GPU 的大型模型非常有用。

您有两种认证方式：

- **公钥 - 私钥认证**：
  - 查看此附加组件的日志以显示密钥，并将此密钥添加到您的 [ollama 账户作为设备密钥](https://ollama.com/settings/keys)。
  - 本地，云凭证存储在 `~/.ollama/` 并持久化到 `/data/.ollama/`（通过 `HOME` 选项），跨越附加组件重启。
- **API 密钥**：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 处创建 API 密钥。
  - 在附加组件配置中设置 `OLLAMA_API_KEY` 选项。

更多详情请参阅 [Ollama 云文档](https://docs.ollama.com/cloud)。

## 关于 UI 链接的说明

UI 链接仅用于检查 ollama 的 API 是否可用。在 ollama 的官方镜像中不包括聊天功能。

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
