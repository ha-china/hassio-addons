# Home Assistant 扩展：皇家邮轮价格检查

## 描述
当皇家邮轮游轮的附加产品价格降低时，会发出通知。可以重新定价游轮、仅饮料套餐、网络、远足活动等。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此扩展的安装非常简单，与安装任何其他Hass.io扩展没有区别。

1. 将我的Hass.io扩展仓库[仓库](https://github.com/jdeath/homeassistant-addons)添加到您的Hass.io实例中。
1. 安装此扩展。
1. 点击“保存”按钮以存储您的配置。
1. 启动扩展。它将失败，这是正常的
1. 前往 /addon-configs/2effc9b9_royalpricecheck
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`（见下文）
1. 再次运行扩展并检查日志
1. 确认工作正常后，使用自动化任务每天运行一次

## config.yaml
请参阅 `https://github.com/jdeath/CheckRoyalCaribbeanPrice`

## 自动运行
1. 创建一个自动化任务，每天（在随机时间）运行此扩展一次

```
alias: 启动皇家价格检查
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

# 发送通知。
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`
1. 配置通知行

对于Home Assistant通知，它应该看起来像这样：
```
# config.yaml
apprise:
  urls:
    - 'hassio://192.168.X.XX/eyXXXXXXXXXXXXXXXX.eyXXXXXXXXXXXXXXXXXxx'
```
其中 `eyXXX.eyXXX` 字符串是Home Assistant长期有效令牌。长期有效访问令牌可以通过用户Home Assistant个人资料页面底部的“长期有效访问令牌”部分创建。

更多详情请参阅 `https://github.com/caronc/apprise/wiki/Notify_homeassistant`

更多详情请参阅 `https://github.com/caronc/apprise` 您可以包含多个URL行来发送电子邮件等。

# 添加到侧边栏
由于没有WebUI，此内容无法显示在侧边栏中。但是，您可以将以下代码添加到您的Home Assistant `configuration.yaml` 中，以通过侧边栏条目显示日志。

```
panel_custom:
  - name: panel_rewards
    sidebar_title: 奖励
    sidebar_icon: mdi:medal
    url_path: 'hassio/addon/2effc9b9_royalpricecheck/logs'
    module_url: /api/hassio/app/entrypoint.js
    embed_iframe: true
    require_admin: true
```

# 问题


[仓库]: https://github.com/jdeath/homeassistant-addons
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
