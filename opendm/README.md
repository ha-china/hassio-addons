# 家庭助手附加组件：开放跑团大师

## 说明
Open Dungeon Master 在您的本地机器上运行多玩家（及单人）的第五版龙与地下城（4E 战役，AI 跑团大师）。叙述者是您已有的任何 AI：本地模型（llama.cpp、Ollama、LM Studio、vLLM）、API 密钥（OpenAI、OpenRouter 或任何兼容 OpenAI 的端点），或者是您已付费使用的 CLI 代理（Claude Code、Codex、opencode、Grok Build），它将自行叙述并带有其订阅，无需传递 API 密钥。该模型是创意大脑和叙述者；一组服务器端引擎为玩家和跑团大师强制执行第五版规则。叙述者从不拥有这些数字：骰子、生命值、法术位、状态和死亡轨迹由后端计算并钳制，模型仅通过服务器验证的工具来更改游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

感谢所有人给我的仓库点亮！要点亮它，点击下面的图片，它就在右上角。感谢！

[![支持者的存储库名单 for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装
此附加组件的安装非常直接，与安装任何其他 Hass.io 附加组件没有区别。

1. [添加我的 Hass.io 附加组件存储库][repository] 到您的 Hass.io 实例。
1. 安装此附加组件。
1. 点击 `Save`（保存）按钮以存储您的配置。
1. 启动附加组件。它将失败，这没关系。
1. 进入 /addon-configs/2effc9b9_opendm。
1. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server`，添加此行：
	`DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf`

	这是一个假值，请使用以下命令替换：`openssl rand -hex 32`

1. 再次运行附加组件，检查日志并获取设置代码。
1. 使用日志中的设置代码在 IP:3005 登录，创建第一个用户（将是管理员）。
1. 您必须手动安装内容包。
1. 通过 SSH 登录到您的家庭助手。
1. `docker ps`
1. 查找正在运行的容器并登录。
1. `docker exec -it CONTAINERID /bin/bash`
1. `node scripts/import-open5e.mjs` 然后 `exit`。
1. 重启附加组件。
1. 然后设置 AI 并开始游戏。

语音和语音识别（TTS）将不会工作（我尚未弄清楚家庭助手的那部分）。

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
