# Home Assistant 附加组件：Marginalia

Marginalia 是一个用于与大型语言模型共同创作长篇虚构作品的自托管写作工具。您为故事每个部分撰写指令，模型负责撰写正文，而 Marginalia 则确保一切井然有序：包括分叉式故事、世界观设定、保持长书内容在模型上下文内的摘要，以及塑造风格的各种提示设置。

该软件运行于您的浏览器中——既可作为您和朋友的小型服务器（Docker），也可作为您电脑上运行的桌面应用程序。它支持与任何 OpenAI 兼容的 API 对接，包括 OpenAI、OpenRouter、LiteLLM、llama.cpp、LM Studio、Ollama、vLLM 以及其他服务。

手册位于 **[enerccio.github.io/Marginalia](https://enerccio.github.io/Marginalia)**，另外还提供日语、法语、西班牙语、德语、韩语、意大利语和中文版本（语言链接位于手册顶部工具栏；应用程序内的帮助助手会根据您界面的语言自动阅读）。

_感谢所有为我仓库星标的小伙伴们！如需星标，请点击下方的图片，它将显示在右上角。谢谢大家！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 概述

该附加组件使用 [docker 镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

安装此附加组件非常简单，与其他 Hass.io 附加组件的安装方式没有区别。

1. [将我添加的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此附加组件。大型镜像下载可能需要较长时间。
3. 点击 `Save` 按钮保存您的配置。
4. 启动附加组件。
5. 检查附加组件日志，确认一切是否正常。
6. 通过 `<your-ip>:port` 打开 Web 界面。

## 配置

```
port : 8080 # 您希望运行的端口。
```

Web 界面地址为 `<your-ip>:port`。

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
