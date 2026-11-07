# Home Assistant 插件：开放式地下城主

## 描述

Open Dungeon Master 旨在您的个人机器上运行（多人及单人） Dungeons & Dragons 5e 战役，并配备 AI 地下城主。叙述者即为您已有的任何 AI：本地模型（llama.cpp、Ollama、LM Studio、vLLM）、API 密钥（OpenAI、OpenRouter 或任何其他兼容 OpenAI 的端点），或您已付费使用的命令行代理（Claude Code、Codex、opencode、Grok Build），后者将独立使用其订阅进行叙述，无需提供 API 密钥。模型是创造力和叙述的大脑；一组服务器端引擎强制执行针对玩家和地下主主的 5e 规则。叙述者不拥有数字：骰子、生命值、法术槽、状态效果和死亡轨迹由后端计算和限制，模型仅通过服务器验证的工具更改游戏状态。

来源：https://github.com/Lebbitheplow/open-dungeon-master

_感谢大家为我仓库点亮星星！要点亮它，请点击下列图片，它便会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装方式没有区别。

1. [将我的 Hass.io 插件仓库添加到您的 Hass.io 实例中][repository]。
2. 安装此插件。
3. 点击 `保存` 按钮以保存配置。
4. 启动插件。它将失败，这没关系。
5. 访问 `/addon-configs/2effc9b9_opendm`。
6. 创建并编辑 `/addon-configs/2effc9b9_opendm/env.server`。
   添加这一行：
   ```
   DB_ENCRYPTION_KEY=58979662b0146318a9c4d8bd3bda1b65e7ccfeae5896f9ddaebeec17ebd32ddf
   ```
   这是一个占位符值，请运行以下命令进行替换：`openssl rand -hex 32`
7. 再次运行插件，检查日志并获取设置代码。
8. 通过 IP:3005 登录，使用日志中的设置代码创建第一个用户（此用户将是管理员）。
9. 您必须手动安装内容包。
10. 通过 SSH 登录到您的 Home Assistant。
11. `docker ps`。
12. 找到正在运行的容器并登录它。
13. `docker exec -it CONTAINERID /bin/bash`。
14. 运行 `node scripts/import-open5e.mjs`，然后 `exit`。
15. 重启插件。
16. 然后设置 AI 并开始游戏。

语音和 TTS（文本转语音）将无法工作（我与 Home Assistant 尚未弄明白这部分）。

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
