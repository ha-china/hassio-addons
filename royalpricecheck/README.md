# 家居助手插件：皇家价格检查

## 描述
如果皇家加勒比游轮附加项价格更便宜时进行通知。可以重新定价游轮，只需喝套餐、互联网、游览等

_感谢大家给我的仓库点赞！要点赞请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

这个插件的安装非常简单，与其他任何Hass.io插件的安装方式相同。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。
1. 点击`保存`按钮来保存你的配置。
1. 启动插件。它会失败，这是正常的
1. 进入 /addon-configs/2effc9b9_royalpricecheck
1. 编辑 `/addon-configs/2effc9b9_royalpricecheck/config.yaml`（见下文）
1. 再次运行插件并检查日志
1. 确认工作正常后，使用自动化每天运行一次

## config.yaml
参考 `https://github.com/jdeath/CheckRoyalCaribbeanPrice`

## 自动运行
1. 创建一个自动化每天随机时间运行这个插件

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

它应该像这样为homeassistant通知：
```
# config.yaml
apprise:
  urls:
    - 'hassio://192.168.X.XX/eyXXXXXXXXXXXXXXXX.eyXXXXXXXXXXXXXXXXXxx'
```
其中 `eyXXX.eyXXX` 字符串是Home Assistant长寿命令牌。长寿命访问令牌可以在用户Home Assistant个人资料页面底部的“长寿命访问令牌”部分创建。

更多详情请参考：`https://github.com/caronc/apprise/wiki/Notify_homeassistant`

更多详情请参考：`https://github.com/caronc/apprise` 你可以包含多个URL行来发送电子邮件等
# 添加到侧边栏
由于没有WebUI，因此无法在侧边栏中显示。但是你可以将以下代码添加到你的Home Assistant `configuration.yaml`中来通过侧边栏条目显示日志

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

# 问题


[repository]: https://github.com/jdeath/homeassistant-addons