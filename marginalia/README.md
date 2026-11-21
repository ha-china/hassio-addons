# Home assistant 插件：Marginalia

Marginalia 是一款专为长篇小说创作的自助托管写作工具，可与大语言模型共同创作。你为故事每一部分编写指令，模型负责撰写正文，而 Marginalia 则有序地管理所有相关内容：分支故事、世界观设定、用于将长篇作品控制在模型上下文范围内的摘要，以及塑造风格的提示设置。

它运行在你的浏览器中——既可以作为你和你朋友的小服务器（Docker），也可以作为你自己电脑上的桌面应用程序——并且可与任何兼容 OpenAI 的 API 配合使用：OpenAI、OpenRouter、LiteLLM、llama.cpp、LM Studio、Ollama、vLLM 以及其他。

手册位于 **[enerccio.github.io/Marginalia](https://enerccio.github.io/Marginalia)**，同时也提供日语、法语、西班牙语、德语、韩语、意大利语和中文版本（语言链接位于手册顶部工具栏；内置应用帮助助手将根据你的界面语言进行阅读）。

_感谢所有对我仓库点亮星星的人们！要点亮它，请点击下方的图片，它将被放置在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于本插件

本插件使用 [docker 图像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

本插件的安装非常简单，与其他任何 Hass.io 插件的安装相比并无不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例中。
1. 安装本插件。大图像可能需要较长时间下载。
1. 点击 `Save` 按钮保存配置。
1. 启动插件。
1. 检查插件日志以确认一切是否正常。
1. 通过 `<your-ip>:port` 打开 Web 界面。

## 配置

```
port : 8080 #你想要运行的端口。
```

Web 界面位于 `<your-ip>:port`。

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
