# Home assistant 插件：Royal Price Check

## 描述
如果皇家加勒比邮轮的附加项目变便宜了，会向您发送通知。可以重新计算邮轮价格，仅限饮料套餐、互联网、游览项目等。

_感谢所有人给我的仓库点亮星星！要点亮它，请点击下方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此插件的安装非常直接，与安装任何其他 Hass.io 插件没有不同。

1. 将 [我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。它会失败，这没问题。
1. 进入 /addon-configs/2effc9b9_royalpricecheck
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`（见下文）
1. 再次运行插件并查看日志。
1. 确认工作正常后，使用自动化每天运行一次此插件。

## Config.yaml
查看 `https://github.com/jdeath/CheckRoyalCaribbeanPrice`

## 自动运行
1. 创建一个自动化，每天运行一次此插件（在随机时间）

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

# 发送通知。
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`
1. 配置通知行的设置

对于 homeassistant 通知，它应该看起来像这样：
```
# config.yaml
apprise:
  urls:
    - 'hassio://192.168.X.XX/eyXXXXXXXXXXXXXXXX.eyXXXXXXXXXXXXXXXXXxx'
```
其中 `eyXXX.eyXXX` 字符串是 Home Assistant 的长期有效令牌。长期访问令牌可以使用 Home Assistant 个人资料页面底部的“长期访问令牌”部分创建。

更多详情见：`https://github.com/caronc/apprise/wiki/Notify_homeassistant`

更多详情见：`https://github.com/caronc/apprise` 您可以包含多个 URL 行以发送邮件等。
# 添加到侧边栏
由于没有 WebUI，因此无法在侧边栏中显示。但是，您可以在 Home Assistant 的 `configuration.yaml` 中添加以下代码，以通过侧边栏条目显示日志

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

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
