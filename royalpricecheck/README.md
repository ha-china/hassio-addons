# Home Assistant 插件：皇家加勒比价格检查

## 描述
当皇家加勒比邮轮插件降价时进行通知。可以重新计算邮轮、饮料套餐、互联网、游览项目等的价格。

_感谢所有给我的仓库加星标的人！要给仓库加星标，请点击下方的图片，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装
安装此插件非常简单，与其他 Hass.io 插件的安装过程没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `Save` 按钮保存你的配置。
1. 启动插件。它可能会失败，这是正常的
1. 访问 /addon-configs/2effc9b9_royalpricecheck
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`（见下文）
1. 再次运行插件并检查日志
1. 确认工作正常后，使用一个自动化流程每天运行一次

## Config.yaml
请参阅 `https://github.com/jdeath/CheckRoyalCaribbeanPrice`

## 自动运行
1. 创建一个自动化流程，每天运行一次此插件（在随机时间）

```
alias: Start Royal Price Check
description: ""
trigger:
  - platform: time
    at: "06:00:00"
condition: []
action:
  - delay: "{{ (range(0, 1)|random|int) }}:{{ (range(1, 59)|random|int) }}:00"
  - service: hassio.addon_start
    data:
      addon: 2effc9b9_royalpricecheck
mode: single
```

# 发送通知
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`
1. 配置通知那一行

对于 Home Assistant 通知，它应该看起来像这样：
```
# config.yaml
apprise:
  urls:
    - 'hassio://192.168.X.XX/eyXXXXXXXXXXXXXXXX.eyXXXXXXXXXXXXXXXXXxx'
```
其中 `eyXXX.eyXXX` 字符串是 Home Assistant 长期令牌。可以使用用户 Home Assistant 个人资料页面底部的“长期访问令牌”部分创建长期访问令牌。

更多详情请见：`https://github.com/caronc/apprise/wiki/Notify_homeassistant`

更多详情请见：`https://github.com/caronc/apprise` 您可以包含多行 URL 来发送邮件等
# 添加到侧边栏
由于没有 WebUI，无法在侧边栏中显示。但是，您可以将以下代码添加到 Home Assistant 的 `configuration.yaml` 中，通过侧边栏条目显示日志

```
panel_custom:
  - name: panel_rewards
    sidebar_title: Rewards
    sidebar_icon: mdi:medal
    url_path: 'hassio/addon/2effc9b9_royalpricecheck/logs'
    module_url: /api/hassio/app/entrypoint.js
    embed_iframe: true
    require_admin: true
```

# Issues


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
