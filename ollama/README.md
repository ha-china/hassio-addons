# Ollama Addon for Home Assistant

Please note that this addon runs with CPU acceleration or experimental Nvidia GPU Support (please report if it works for you!). For ROCm the support is still pending.

## Model Directory

All downloaded models are stored `/share/ollama` by default. For historic reasons you can also configure it for `/config/ollama`. Please make sure that you have sufficient space available.

## Ollama Integration

To download any models either use the API of Ollama or integrate with the Home Assistant Integration [Ollama](https://www.home-assistant.io/integrations/ollama/):

[![Add Ollama Integration](https://my.home-assistant.io/badges/brand.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=ollama)

Use the following data:

- URL: `http://76e18fb5-ollama:11434`

If you want to change the model, delete the integration (not the addon!) and restart the process for the configuration of the integration.

## Note on the UI Link

The UI Link is only there to check if the API of ollama is available. There is no chat functionality included in the official image of ollama.

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
