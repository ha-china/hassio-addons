# Ollama Addon for Home Assistant

请注意，此插件支持CPU加速或实验性的Nvidia GPU支持（如果它对您有效，请报告！）。对于ROCm，支持仍在等待中。

## 模型目录

所有下载的模型默认存储在 `/share/ollama`。由于历史原因，您也可以将其配置为 `/config/ollama`。请确保您有足够的空间。您可以选择 `/data/ollama` 以保持您的备份小巧，因为这个路径不包括在插件备份中。

## Ollama 集成

要下载任何模型，请使用Ollama的API或与Home Assistant集成 [Ollama](https://www.home-assistant.io/integrations/ollama/) 集成：

[![添加Ollama集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您想更改模型，请删除集成（不是插件！）并重新启动配置集成的过程。

## 关于UI链接的说明

UI链接仅用于检查Ollama的API是否可用。Ollama的官方镜像中不包含聊天功能。
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
