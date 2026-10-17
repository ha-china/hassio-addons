# Home assistant 附加组件：开放地牢城主

## 描述
Open Dungeon Master 运行于您自己的设备，使用 AI 地牢城主进行多人（及单人）《龙与地下城》5e 战役。讲故事者（Narrator）可以是您现有的任何 AI：本地模型（llama.cpp、Ollama、LM Studio、vLLM）、API 密钥（OpenAI、OpenRouter 或任何其他兼容 OpenAI 的端点），或您已经付费订阅的 CLI 代理（Claude Code、Codex、opencode、Grok Build），后者将使用其自身的订阅进行叙述，无需提供任何 API 密钥。模型是创造力和叙述的大脑；一套服务器端引擎则强制执行针对玩家和地牢主（DM）的 5e 规则。叙述者不拥有任何数值：骰子、生命值、法术位、状态栏和死亡进度条均由后端计算并限制，模型仅通过服务器验证的工具来更改游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

_感谢所有为我仓库点星的人！若要点亮它，请点击下图，然后在右上角即可。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装
该附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件在方法上没有区别。

1. [将我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存配置。
1. 启动附加组件。它将启动失败，这没问题。
1. 进入 `/addon-configs/2effc9b9_opendm` 目录。
1. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server` 文件：
	添加此行：
	`DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf`

	这是一个占位符值，请运行以下命令进行替换：`openssl rand -hex 32`

1. 再次运行附加组件，检查日志以获取设置代码（Setup Code）。
1. 在 IP 地址:3005 登录，使用日志中的设置代码创建第一个用户（该用户将是管理员）。
1. 您必须手动安装内容包。
1. 通过 SSH 登录到您的 Home Assistant。
1. 运行 `docker ps`。
1. 找到正在运行的容器并登录其中。
1. 运行 `docker exec -it CONTAINERID /bin/bash`。
1. 运行 `node scripts/import-open5e.mjs`，然后输入 `exit`。
1. 重新启动附加组件。
1. 然后设置 AI 并开始游戏。

语音和无语音合成（TTS）功能将无法工作（我尚未搞清楚 Home Assistant 如何实现这部分）。
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
