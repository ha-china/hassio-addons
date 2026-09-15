# Homeassistant 插件：SillyTavern

SillyTavern 为众多 LLM API（KoboldAI/CPP、Horde、NovelAI、Ooba、Tabby、OpenAI、OpenRouter、Claude、Mistral 等）提供了一个统一的单一接口，具备移动友好布局、视觉小说模式、Automatic1111 和 ComfyUI API 图片生成集成、语音合成、世界信息（lorebooks）、可自定义用户界面、自动翻译、远超您所需数量的提示选项，以及通过第三方插件无限的扩展潜力。

_感谢所有为我的仓库星标udos！请在下方图片点击星标，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [docker 镜像](https://github.com/SillyTavern/SillyTavern/)。

## 安装

该插件的安装非常 straightforward，与安装任何其他 Hass.io 插件并无二致。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 通过 <your-ip>:port 打开 WebUI。
1. 您应该会收到一个登录错误。
1. 查看日志以查找需要添加到白名单部分的客户端 IP 地址。
1. 进入 /addon_configs/2effc9b9_sillytavern
1. 编辑 /addon_configs/2effc9b9_sillytavern/config.yaml，并在 `whitelist:` 部分中添加客户端 IP 地址。
1. 重启插件。
1. 通过 <your-ip>:port 打开 WebUI。
1. 应该可以工作。如果不行，请调整 config.yaml。
1. 在插件内部编辑选项，连接到 llm 等。

## 配置

```
port : 8000 #您想要运行的端口。
```

Webui 位于 <your-ip>:port。

[repository]: https://github.com/jdeath/homeassistant-addons

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
