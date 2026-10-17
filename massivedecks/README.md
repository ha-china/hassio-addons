# Home Assistant 附加组件：Massive Decks
Massive Decks 是一款免费、开源的喜剧派对游戏，基于《人类的反抗》制作。和朋友一起玩吧！

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 特性

 - 可以在同一个房间或在线一起玩。
 - 使用任何设备（手机、PC、Chromecast，任何有网页浏览器的设备）。
 - 你可以设置一个中央屏幕，但不需要这样做（不需要为其他在线玩家流式传输任何内容）。
 - 自定义牌组（通过 [Many Decks][many-decks]）。
 - 自定义规则：
   - 自定义卡牌。
   - 房规。
   - AI 玩家。
   - 如果需要，可以设置自定义时间限制。
 - 观众。
 - 默认情况下保持游戏私密，如有需要，您也可以设置游戏密码。
 - 社区翻译。

[many-decks]: https://decks.rereadgames.com/

## 关于

基于 https://github.com/Lattyware/massivedecks/

该游戏是开源软件，依据 [AGPLv3 许可协议](LICENSE) 发布。

## 安装

该附加组件的构建需要一些时间。这是因为 massive decks 将服务器/客户端分为两个 Docker，而这个附加组件则从源代码手动合并它们！

安装此附加组件相对简单，与安装任何其他 Hass.io 附加组件没有区别。

1. 安装该附加组件（构建需要一些时间）。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利进行。
1. 打开的 WebUI 应该在 IP:port 加载。