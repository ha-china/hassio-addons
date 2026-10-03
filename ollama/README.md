# Ollama 为 Home Assistant 制作的插件

请注意，该插件使用 CPU 加速运行，或支持实验性的 Nvidia GPU 支持（如有问题请使用请告诉我！）。ROCm 的支持仍在等待中。

## 模型目录

所有下载的模型默认存储在 `/share/ollama`。出于历史原因，您也可以将其配置为 `/config/ollama`。请确保有足够的可用空间。您可以选择 `/data/ollama` 以保持备份文件较小，因为该路径被排除在插件备份之外。

## Ollama 集成

要下载任何模型，请使用方法 Ollama 的 API 或与 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/)：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL：`http://76e18fb5-ollama:11434`

如果您想要更改模型，请删除集成（不是插件！）并重新启动以进行集成配置的流程。

## Ollama 云模型

Ollama 支持云托管模型，这些模型运行在 Ollama 的基础设施上，对不适合在本地 GPU 上运行的大型模型非常有用。

您有两种认证方式：

- 公共密钥与私有密钥认证：
  - 查看此插件的日志，其中显示了密钥，并请将此密钥添加到您的 [ollama 账户作为设备密钥](https://ollama.com/settings/keys)。
  - 本地地，云凭证存储在 `~/.ollama/` 中，并通过 `HOME` 选项在插件重启之间持久化到 `/data/.ollama/`。
- API 密钥：
  - 在 [ollama.com/settings/keys](https://ollama.com/settings/keys) 处创建 API 密钥
  - 在插件配置中设置 `OLLAMA_API_KEY` 选项

更多信息请在 [Ollama 云文档](https://docs.ollama.com/cloud)中阅读。

## 关于 UI 链接的说明

UI 链接仅用于检查 Ollama 的 API 是否可用。Ollama 官方镜像不包含聊天功能。

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
