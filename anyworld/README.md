# Home assistant 附加组件：Anyworld

## 描述

一个无需掷骰子或记分即可进行的多用户文字冒险游戏——只需书写角色所作所为。由一名玩家（主持人）描述场景，随后每位玩家依次用自己的文字描述行动，而 AI 便将每一次选择编织进故事中，使情节持续展开。

_感谢大家为我仓库点赞！点击上方图片为我点赞，它就会显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

该附加组件的安装过程非常简单，与其他 Hass.io 附加组件相比并无不同。

1. 将我的 Hass.io 附加组件仓库 [加入] 到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储配置。
1. 启动附加组件。它会失败，这没关系。
1. 前往 `/addon-configs/2effc9b9_anyworld`

将以下内容保存为 `/addon-configs/2effc9b9_anyworld/config.yaml `，并根据需要修改 `llm` 和 `password` 变量。请在 `https://github.com/iamarxs/AnyWorld/blob/main/INSTALL.md` 中查看详细信息。

```yaml
server:
  host: "0.0.0.0"
  port: 4141
  host_password: host
  player_password: player
llm:
  provider: "compatible"
  endpoint: "http://192.168.1.111:8080/v1"
  model_name: "gemma-4-31B-it-GGUF-MTP"
  initial_output_tokens: 1024
  round_output_tokens: 2048
  dice_output_tokens: 512
  summary_output_tokens: 1024
  token_safety_margin: 256
  request_timeout_seconds: 120.0
  max_retries: 1
  system_prompt: >-
    你是一个连贯的多用户冒险的地下城城主。使用提供的权威骰子和既定事实同时处理所有玩家的尝试。保持私人城主指导和隐藏检定机密；仅叙述可观察到的后果。返回请求的结构化输出。
```

1. 编辑 `/addon-configs/2effc9b9_anyworld/config.yaml`（见下文）
1. 再次运行附加组件并检查日志
1. 在 https://homeassistantIP:4141 登录（必须使用 https 并接受自签名证书）

[repository]: https://github.com/jdeath/homeassistant-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
