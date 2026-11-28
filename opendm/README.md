# Home assistant 插件：开放地牢城主

## 描述

Open Dungeon Master 在您的本地机器上运行多人（及单人）地下城与勇士 5e 战役，并由人工智能地牢城主主持。讲故事的人可以是您已拥有的任何 AI：本地模型（llama.cpp、Ollama、LM Studio、vLLM）、API 密钥（OpenAI、OpenRouter 或任何兼容 OpenAI 的端点），或一个您已付费的命令行代理（Claude Code、Codex、opencode、Grok Build），它会用自己的订阅进行叙述，无需提供 API 密钥。该模型是创作思维和叙述者；一组服务端引擎强制执行针对玩家和地牢主城的 5e 规则。叙述者绝不拥有数据：骰子、生命值、法术位、状态异常和死亡进度条均由后端计算和限制，模型仅通过服务器验证的工具来更改游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

感谢所有我为仓库点 star 的人！要将其 star，请点击下图，然后它会在右上角。谢谢大家！

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

该插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此插件。
3. 点击 `保存` 按钮保存配置。
4. 启动插件。它会失败，这没关系。
5. 进入 /addon-configs/2effc9b9_opendm
6. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server`
	添加此行：
	`DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf`

	这是一个占位符值，请运行 `openssl rand -hex 32` 替换它。

7. 再次运行插件并检查日志，获取设置代码。
8. 使用日志中的设置代码在 IP:3005 登录，创建第一个用户（将是管理员）。
9. 您必须手动安装内容包。
10. 通过 SSH 登录您的 Home Assistant。
11. `docker ps`
12. 找到运行的容器并登录它。
13. `docker exec -it CONTAINERID /bin/bash`
14. 运行 `node scripts/import-open5e.mjs`，然后 `exit`。
15. 重启插件。
16. 然后设置 AI 并开始游戏。

语音和 TTS 将无法工作（我尚未弄清楚如何与 Home Assistant 结合使用这一部分）。
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
