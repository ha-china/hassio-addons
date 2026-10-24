# Home assistant 附加组件：皇家邮轮价格监控

## 描述
监控皇家加勒比邮轮附加服务是否降价。可重新计算全价邮轮的费用，仅针对饮品套餐、互联网、游览活动等。

_感谢所有为我仓库点赞的人！要点赞它，请点击下方的图片，它将显示在右上角。谢谢！_

[![为 @jdeath/homeassistant-addons 的仓库点赞者名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件的方式没有区别。

1. [将我的 Hass.io 附加组件库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存配置。
1. 启动附加组件。它会失败，这没关系。
1. 访问 `/addon-configs/2effc9b9_royalpricecheck` 目录。
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`（见下）。
1. 再次运行附加组件并查看日志。
1. 确认工作正常后，使用自动化脚本每天运行一次此附加组件。

## Config.yaml
参见 `https://github.com/jdeath/CheckRoyalCaribbeanPrice`

## 自动运行
创建一个自动化脚本，让此附加组件每天随机时间运行一次。

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
1. 配置通知行

对于 Home Assistant 通知，它大致应如下所示：
```
# config.yaml
apprise:
  urls:
    - 'hassio://192.168.X.XX/eyXXXXXXXXXXXXXXXX.eyXXXXXXXXXXXXXXXXXxx'
```
其中 `eyXXX.eyXXX` 字符串是 Home Assistant 长期有效令牌。长期使用令牌可在学习用户 Home Assistant 个人资料页面底部的“长期有效访问令牌”部分创建。

更多详情见：`https://github.com/caronc/apprise/wiki/Notify_homeassistant`

更多详情见：`https://github.com/caronc/apprise` 您可以包含多行 URL 来发送电子邮件等消息。
# 添加到侧边栏
由于没有 Web 用户界面，因此无法在侧边栏中显示。但是，您可以将以下代码添加到您的 Home Assistant `configuration.yaml` 文件中，通过侧边栏条目显示日志。

```
panel_custom:
  - name: panel_rewards
    sidebar_title: Rewards
    sidebar_icon: mdi:medal
    url_path: 'config/app/2effc9b9_royalpricecheck/logs'
    module_url: /api/hassio/app/entrypoint.js
    embed_iframe: true
    require_admin: true
```

# 问题


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
