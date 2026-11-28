# Home assistant 插件：SillyTavern

SillyTavern 为许多 LLM API（包括 KoboldAI/CPP、Horde、NovelAI、Ooba、Tabby、OpenAI、OpenRouter、Claude、Mistral 等）提供单一的统一接口，配备移动友好的布局、视觉小说模式、与 Automatic1111 和 ComfyUI API 的图像生成集成、TTS、世界信息（lorebooks）、自定义 UI、自动翻译、无数你甚至想要也无需的提示选项，以及通过第三方扩展无限扩展的潜力。

_感谢所有为我仓库点赞的人们！想要在此处点赞，请点击下方的图片，这样它就会被置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此插件使用 [docker 镜像](https://github.com/SillyTavern/SillyTavern/)。

## 安装

此插件的安装非常简单直接，与安装任何其他 Hass.io 插件相比并无不同。

1. [将我Hass.io插件仓库][repository]添加到你的Hass.io实例中。
2. 点击`保存`按钮以保存配置。
3. 启动插件。
4. 通过 <your-ip>:port 打开 WebUI。
5. 你应该会收到一个登录错误。
6. 查看日志以查找需要添加到白名单部分的客户端 IP 地址。
7. 进入 `/addon_configs/2effc9b9_sillytavern` 目录
8. 编辑 `/addon_configs/2effc9b9_sillytavern/config.yaml`，并将客户端 IP 地址添加到`whitelist:` 部分。
9. 重启插件。
10. 通过 <your-ip>:port 再次打开 WebUI。
11. 应该可以正常工作了。如果不行，请修改`config.yaml`。
12. 在插件内部编辑选项，连接到 LLM 等。

## 配置

```yaml
port : 8000 #你希望运行的端口。
```

WebUI 可以通过 `<your-ip>:port` 访问。

[repository]: https://github.com/jdeath/homeassistant-addons

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
