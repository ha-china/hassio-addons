# Home Assistant 增补包：SillyTavern

SillyTavern 为多种 LLM API（包括 KoboldAI/CPP、Horde、NovelAI、Ooba、Tabby、OpenAI、OpenRouter、Claude、Mistral 等）提供单一统一界面，配有移入手机友好的布局、视觉小说模式、与 Automatic1111 和 ComfyUI API 图像生成集成、语音合成、WorldInfo（lorebooks）、可自定义界面、自动翻译、以及超过您甚至能想到的提示选项，并且可以通过第三方扩展实现无限增长潜力。

_感谢所有给我的仓库点星！要让它顶格，请点击下图中的链接。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此增补包使用 [docker 镜像](https://github.com/SillyTavern/SillyTavern/)。

## 安装

此增补包的安装非常简单，与安装任何其他 Hass.io 增补包的方式并无不同。

1. 将 [我的 Hass.io 增补包仓库][repository] 添加到您的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存配置。
1. 启动增补包。
1. 通过 `<your-ip>:port` 打开 WebUI。
1. 您应该会遇到登录错误提示。
1. 查看日志以查找需要添加到白名单的客户 IP 地址。
1. 进入 `/addon_configs/2effc9b9_sillytavern`。
1. 编辑 `/addon_configs/2effc9b9_sillytavern/config.yaml` 并将客户 IP 地址添加到 `whitelist:` 部分中。
1. 重启增补包。
1. 通过 `<your-ip>:port` 打开 WebUI。
1. 应该可以工作了。如果不行，请调整 `config.yaml`。
1. 在增补包内部编辑选项，连接至 LLM，等等。

## 配置

```
port : 8000 # 你打算运行的端口。
```

WebUI 可访问于 `<your-ip>:port`。

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
