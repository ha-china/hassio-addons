# Home assistant 附加插件：扑克小队

## 描述

为 2 到 8 位朋友提供自托管的无限制德克萨斯扑克锦标赛：一个基于 three.js 渲染的扑克桌，内置语音和视频聊天。只有一个桌子，任何拥有链接的人无需账户即可加入。界面支持英语和德语。

基于 https://github.com/DerKobe/PokerCrew

_感谢所有给仓库踩星的人！想要踩星请点击下方图片，然后点击后它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)


## 安装

此附加插件的安装非常直接，与其他 Hass.io 附加插件的安装没有区别。

1. 将我的 Hass.io 附加插件仓库 [添加到此](https://github.com/DerKobe/PokerCrew) 您的 Hass.io 实例。
1. 安装此附加插件。
1. 将模式设置为登录。点击`保存`按钮以保存您的配置。
1. 启动附加插件。
1. 访问 http://homeassistantIP:3000

## 升级

1. 上游仓库不使用发布版，因此您必须监控 `https://github.com/DerKobe/PokerCrew` 以获取更新
1. 卸载附加插件
1. SSH 进入 home assistant 并运行 `docker builder prune`
1. 重新安装附加插件
1. 由于此附加插件是从上游 GitHub 源构建 Docker 镜像的，因此单纯重新构建附加插件可能无法拉取最新版本源。
1. 如果不再可用，请创建问题。上游 DOCKERFILE 中的必要更改将需要对附加插件进行更改

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
