# Home assistant 插件：Citi Merchant Offers

## 描述
加载您的账户并激活所有花旗银行商户优惠。使用自动化工具每隔几天自动运行。完全充满活力地编写！未完全测试，请自行使用。

_感谢所有人对我仓库的星标！要支持它，请点击下图，然后它将被置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装相比并无不同。

1. [将我收录的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。它可能会失败，这很正常。
1. 进入 /addon-configs/2effc9b9_citioffers
1. 编辑 `/addon-configs/2effc9b9_citioffers/credentials.yaml`（见下文）
1. 再次运行插件并检查日志
1. 确认工作正常后，使用自动化工具每天运行一次此插件

## credentials.yaml
```yaml
user: CITIBANK_USERNAME
password: CITIBANK_PASSWORD
```

## 自动运行
1. 创建一个自动化工具，每天运行一次此插件（随机时间）

```yaml
alias: Start Citi Offers
description: ""
trigger:
  - platform: time
    at: "06:00:00"
condition: []
action:
  - delay: "{{ (range(0, 1)|random|int) }}:{{ (range(1, 59)|random|int) }}:00"
  - service: hassio.addon_start
    data:
      addon: 2effc9b9_citioffers
mode: single
```


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
