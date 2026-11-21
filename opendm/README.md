# Home assistant 插件：Open Dungeon Master

## 描述
Open Dungeon Master 运行于您自己的机器上，使用 AI Dungeon Master 进行多人（或单局）《龙与地下城》第 5 版战役。叙述者由您已拥有的 AI 决定：本地模型（llama.cpp、Ollama、LM Studio、vLLM）、API 密钥（OpenAI、OpenRouter 或任何兼容 OpenAI 的端点），或您已支付的 CLI 代理（Claude Code、Codex、opencode、Grok Build），该代理将通过其订阅进行叙述，无需提供任何 API 密钥。模型是创造力和叙述的核心；而一系列服务器端引擎则强制玩家和裁判遵守第 5 版规则。叙述者永远不会拥有数值：骰子、生命值、法术位、状态效果以及死亡进程均由后端计算并限制，模型仅通过服务器验证的工具来改变游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

_感谢所有为我的仓库星标的人！要星标它，点击下方的图片，它将出现在右上角。谢谢！_

[![来自 @jdeath/homeassistant-addons 的星标仓库名单图板](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

该插件的安装非常简单，与安装任何其他 Hass.io 插件没有什么不同。

1. 将我的[Hass.io 插件仓库][repository]添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `Save` 按钮以保存配置。
1. 启动插件。它将会失败，这没关系。
1. 前往 `/addon-configs/2effc9b9_opendm` 目录。
1. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server` 文件，添加以下内容：
	`DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf`

	这是一个假值，请运行 `openssl rand -hex 32` 替换为正确的值。
1. 再次运行插件，查看日志并获取设置代码。
1. 通过 IP 地址:3005 登录，使用日志中的设置代码创建第一个用户（该用户将是管理员）。
1. 您必须手动安装内容包。
1. 通过 SSH 登录您的 Home Assistant。
1. 运行 `docker ps`。
1. 找到正在运行的容器并登录其中。
1. 运行 `docker exec -it CONTAINERID /bin/bash`，然后运行 `node scripts/import-open5e.mjs`（稍后输入 `exit` 退出）。
1. 重启插件。
1. 设置 AI 并开始游戏。

语音合成和文本转语音功能将无法工作（我尚未在 Home Assistant 方面弄明白那部分内容）。

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
