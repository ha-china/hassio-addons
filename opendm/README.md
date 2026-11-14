# Home Assistant 插件：Open Dungeon Master

## 描述
Open Dungeon Master 是您本机上的多个人（及单人）Dungeons & Dragons 5e 战役运行平台，配备 AI Dungeon Master。该叙述者为您已配置的任意 AI：本地模型（llama.cpp、Ollama、LM Studio、vLLM）、API 密钥（OpenAI、OpenRouter 或任何兼容 OpenAI 的端点），或您已付费的 CLI 代理（Claude Code、Codex、opencode、Grok Build），后者将独立在订阅下负责叙述，无需提供 API 密钥。该模型是创造性的思想和叙述者；一组服务器端引擎则强制执行针对玩家和 DM 的 5e 规则。叙述者永远不拥有这些数字：骰子、生命值、魔法位、状态和死亡进度条由后端计算并限制，模型仅通过服务器验证的工具来更改游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

_感谢大家给我仓库点了明星！点击下方图片上的按钮即可为我点赞，它将被置顶！谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此插件的安装非常直接，与安装任何其他 Hass.io 插件并无不同。

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例中。
2. 安装此插件。
3. 点击 `Save` 按钮以保存配置。
4. 启动插件。它会失败，这是正常的。
5. 前往 /addon-configs/2effc9b9_opendm
6. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server`
   输入此行：
   `DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf`
   
   这是一个占位符值，请使用命令 `openssl rand -hex 32` 运行进行替换。
   
7. 再次运行插件，检查日志并获取设置代码。
8. 使用日志中的设置代码从 IP:3005 登录，创建第一个用户（将作为管理员）。
9. 您必须手动安装内容包。
10. 通过 SSH 登录到您的 Home Assistant。
11. 执行 `docker ps`
12. 找到运行的容器并登录它。
    `docker exec -it CONTAINERID /bin/bash`
13. 运行 `node scripts/import-open5e.mjs` 然后 `exit`
14. 重启插件
15. 然后设置 AI 并开始游戏

语音和 TTS 将无法工作（我尚未弄清楚 Home Assistant 的这一部分）。
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
