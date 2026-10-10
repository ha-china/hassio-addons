# Home Assistant 附加组件：Dungeon Master

## 描述
Open Dungeon Master 利用 AI Dungeon Master 在您自己的机器上运行多人（或单人）《龙与地下城》第5版战役。叙述者可以是您已有的任何 AI：本地模型（llama.cpp, Ollama, LM Studio, vLLM），API 密钥（OpenAI, OpenRouter，或任何与 OpenAI 兼容的端点），或者是您已付费的 CLI 代理（Claude Code, Codex, opencode, Grok Build），它将使用其订阅自行叙述，无需传递 API 密钥。模型是创造灵感和叙述者；一组后端引擎强制执行 5e 规则，确保玩家和 DM 遵守规则。叙述者绝不掌控数字：骰子、生命值、法术位、状态异常和死亡进度由后端计算和限制，模型仅通过未经服务器验证的工具来更改游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

_感谢大家为我仓库点赞！要在右上角点亮它，请点击下方的图片。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

本附加组件的安装非常直接，与安装任何其他 Hass.io 附加组件的方式基本相同。

1. [将我提供的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `Save` 按钮保存您的配置。
1. 启动附加组件。它将失败，这是正常的。
1. 前往 /addon-configs/2effc9b9_opendm
1. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server`
	add this line:
	`DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf`

	这是一个占位值，请运行以下命令后用其替换：`openssl rand -hex 32`

1. 再次运行附加组件并检查日志，获取设置代码
1. 使用日志中的设置代码在 IP:3005 登录，创建第一个用户（将作为管理员）。
1. 您必须手动安装内容包
1. 通过 SSH 登录到您的 Home Assistant
1. `docker ps`
1. 找到正在运行的容器并登录
1. `docker exec -it CONTAINERID /bin/bash`
1. 执行 `node scripts/import-open5e.mjs`，然后执行 `exit`
1. 重启附加组件
1. 然后设置 AI 并开始游戏

声音和 TTS 功能将无法工作（我还没有在 Home Assistant 上弄明白这部分内容）
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
