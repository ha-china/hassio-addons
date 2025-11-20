# Ollama Addon for Home Assistant

请注意，此插件使用 CPU 加速或实验性 Nvidia GPU 支持（如果它对您有效，请报告！）。对于 ROCm，支持仍然在等待中。

## 模型目录

默认情况下，所有下载的模型都存储在 `/share/ollama` 中。由于历史原因，您也可以将其配置为 `/config/ollama`。请确保您有足够的空间可用。

## Ollama 集成

要下载任何模型，请使用 Ollama 的 API 或与 Home Assistant 集成 [Ollama](https://www.home-assistant.io/integrations/ollama/)：

[![添加 Ollama 集成](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

使用以下数据：

- URL: `http://76e18fb5-ollama:11434`

如果您想更改模型，请删除集成（不是插件！）并重新启动集成配置过程。

## UI 链接的说明

UI 链接仅用于检查 ollama 的 API 是否可用。官方 ollama 图像中不包括聊天功能。
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
