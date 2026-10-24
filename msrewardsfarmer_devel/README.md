# Home Assistant 插件: MS Rewards Farmer

## 描述
自动获取 MS Rewards 计划的积分，并为你完成所有任务（玩测验、搜索……）

这是[**@klept0**](https://github.com/klept0)的 MS-Rewards-Farmer 的 docker 化版本（最初由 [**@charlesbel**](https://github.com/charlesbel) 编写）。它在 docker 环境中完全无头运行，使用谷歌浏览器和 xvfb 作为虚拟显示器。

Docker 实现借助了 LtCMDstone Docker Image 的工作：https://github.com/LtCMDstone/MS-Rewards-Farmer-Docker

此 homeassistant 版本在安装/重建插件时会更新 Chrome。这将确保 Chrome 保持最新。我可能做错了什么，但这个插件似乎可以工作。如果你有更干净的方式来构建插件，请提交一个 PR。

_感谢所有给我的仓库加星星的人！要给它加星星，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有不同。

1. [将我的 Hass.io 插件库][repository] 添加到你的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存你的配置。
1. 如果不是 `US`（美国）和 `en`（英语），请设置你的 GEO 和 LANG。
1. 启动插件。它会失败，这没关系。
1. 转到 /addon-configs/2effc9b9_msrewardsfarmer
1. 使用你的用户名和密码编辑 accounts.json。如果有第二个条目，请删除它。
1. （可选）编辑 `/addon-configs/2effc9b9_msrewardsfarmer/config.yaml` 以发送通知（见下文）。
1. 再次运行插件并检查日志。
1. 确认工作后，使用自动化每天运行一次。

## GEO 和 Lang
这必须正确设置，因为 MS 可能只允许你每天从一个国家获取积分，这将有效禁用此农场或你获得积分的标准方式。

1. 转到 https://trends.google.com/trends/
1. 更改你的国家。URL 应以 =XX 结尾，其中 XX 是要使用的 GEO 代码。必须大写。
1. 语言默认为英语 (en)。如果需要，使用适当的代码更改语言。

## 自动运行
1. 创建一个自动化，以每天一次运行此插件（在随机时间以避免被禁）。

```
alias: 开始 MS Rewards Farmer
description: ""
trigger:
  - platform: time
    at: "05:00:00"
condition: []
action:
  - delay: "{{ (range(0, 1)|random|int) }}:{{ (range(1, 59)|random|int) }}:00"
  - service: hassio.addon_start
    data:
      addon: 2effc9b9_msrewardsfarmer
mode: single
```

# 发送通知
1. 编辑 `/addon-configs/2effc9b9_msrewardsfarmer/config.yaml`
1. 配置通知行

对于 homeassistant 通知，它应该看起来像这样：
```
# config.yaml
apprise:
  urls:
    - 'hassio://192.168.X.XX/eyXXXXXXXXXXXXXXXX.eyXXXXXXXXXXXXXXXXXxx'
```
其中 `eyXXX.eyXXX` 字符串是 Home Assistant 的长期访问令牌。可以使用用户 Home Assistant 个人资料页面底部的 "长期访问令牌" 部分创建长期访问令牌。

更多细节在此：`https://github.com/caronc/apprise/wiki/Notify_homeassistant`

# 添加到侧边栏
由于没有 WebUI，无法在侧边栏中显示此内容。但是，你可以将以下代码添加到 Home Assistant 的 `configuration.yaml` 中，以通过侧边栏条目显示日志。

```
panel_custom:
  - name: panel_rewards
    sidebar_title: 奖励
    sidebar_icon: mdi:medal
    url_path: 'hassio/addon/2effc9b9_msrewardsfarmer/logs'
    module_url: /api/hassio/app/entrypoint.js
    embed_iframe: true
    require_admin: true
```

# 问题

如果你遇到问题，首先问自己 - 我是否确保更新了所有文件并在再次运行之前清除了会话文件夹？

仍在进行中，并且农场器有时会崩溃或运行缓慢，因为无头 Chrome 可能会出现问题。当崩溃时，只需再次运行它。发送通知到 Home Assistant 使这易于查看。

[repository]: https://github.com/jdeath/homeassistant-addons

[repository]: https://github.com/jdeath/homeassistant-addons