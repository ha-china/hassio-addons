# Home Assistant 附加组件：奖励商人

## 描述
基于 https://youtu.be/4qdPcMNaioA 的 MS Rewards 自动化。

上游项目不使用发布版本。因此，您需要监控更改并重新构建。

**重要提示：** 请自行承担风险。如果 Microsoft 检测到用户使用自动化脚本获取奖励积分，可能会采取行动封禁您的账户。YouTube 视频中包含了更多关于实施此脚本以避免检测的技术详情。

基于 https://github.com/User0332/rewards-farmer/

_感谢所有给我的仓库星星的人！如果也想给它星星，请点击下面的图片，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有不同。

1. [将我添加 Hass.io 附加组件库][repository] 导入您的 Hass.io 实例。
2. 安装此附加组件。
3. 将模式设置为登录。点击 `保存` 按钮以保存您的配置。
4. 启动附加组件。 
5. 访问 http://homeassistantIP:6080 并登录 Bing Rewards。关闭 edge 窗口。
6. 将模式设置为运行。点击 `保存` 按钮以保存您的配置。
7. 重新启动附加组件。
8. 确认工作正常后，使用一个自动化每天运行一次此附加组件。

## 升级
1. 上游项目不使用发布版本，因此您必须监控 `https://github.com/User0332/rewards-farmer/` 以获取更新。
2. 卸载附加组件。
3. SSH 到 Home Assistant 并运行 `docker builder prune` 命令。
4. 重新安装附加组件。
5. 由于此附加组件是从上游 GitHub 源构建 Docker 镜像的，因此仅仅重新构建附加组件可能无法拉取最新的源文件。
6. 如果不再工作，请创建问题（Issue）。上游 `DOCKERFILE` 中的任何必需更改都将要求对附加组件进行相应的修改。

## 自动运行
1. 创建一个自动化，每天在随机时间运行一次此附加组件。

```yaml
alias: Start MS Rewards Farmer
description: ""
trigger:
  - platform: time
    at: "06:00:00"
condition: []
action:
  - delay: "{{ (range(0, 1)|random|int) }}:{{ (range(1, 59)|random|int) }}:00"
  - service: hassio.addon_start
    data:
      addon: 2effc9b9_rewardsfarmernew
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
