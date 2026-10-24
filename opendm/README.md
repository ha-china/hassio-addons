# Home assistant 插件：Open Dungeon Master

## 描述
Open Dungeon Master 运行于您自己的机器上，使用 AI Dungeon Master 进行多用户（及单人） Dungeons & Dragons 5e 战役。解说员可以是您已有的任意 AI：本地模型（llama.cpp、Ollama、LM Studio、vLLM）、API 密钥（OpenAI、OpenRouter 或任何兼容 OpenAI 的端点），或您已付费使用的 CLI 代理（Claude Code、Codex、opencode、Grok Build），该代理将在其订阅中独立叙述，无需提供 API 密钥。模型是创造力和叙述者的核心；后端的一堆服务端引擎负责强制执行 5e 规则，包括对付手和 DM（地下城主）。模型从不拥有这些数据：骰子、生命值、法术位、状态条件和死亡轨道均由后端计算并限制，模型仅通过后端验证的工具来改变游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

_谢谢所有人给我的仓库投星！点击下方的图片即可给项目投星，它将显示在右上角。非常感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

该插件的安装非常简单，与其他任何 Hass.io 插件的安装方式无异。

1. 将我的 Hass.io 插件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储配置。
1. 启动插件。它可能会失败，这是正常的。
1. 访问 /addon-configs/2effc9b9_opendm
1. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server`
	添加此行：
	`DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf`

	这是一个占位符值，请运行以下命令替换它：`openssl rand -hex 32`

1. 再次运行插件，查看日志并获取配置代码。
1. 在 IP:3005 登录，使用日志中的配置代码创建第一个用户（该用户将是管理员）。
1. 您必须手动安装内容包。
1. 通过 SSH 登录到您的 Home Assistant。
1. `docker ps`
1. 找到正在运行的容器并登录进去。
1. `docker exec -it CONTAINERID /bin/bash`
1. `node scripts/import-open5e.mjs` 然后输入 `exit`
1. 重启插件。
1. 然后设置 AI 并开始游戏。

语音和 TTS 将无法使用（我尚未在 Home Assistant 上弄清楚这部分）。
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
