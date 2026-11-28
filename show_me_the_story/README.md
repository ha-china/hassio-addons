# Home assistant 附加功能：Show Me The Story

RA 本地应用程序，用于在 AI 协助下创作长篇虚构文学。一个可执行文件和浏览器界面连接到 OpenAI 兼容的模型服务，用于管理设置、规划章节批次、起草和修改散文，以及导出您的作品。

**完整应用程序以单个可执行文件形式发行，大小不到 5 MB**——小到可以下载、移动并存储在任何地方。

您决定故事的规则和方向。这些规则可能是现实的，也可能是完全虚构的。


## 首次运行

1. 下载适合您系统的版本，解压到您计划保留的目录中，然后运行它。
2. 打开 `http://homeassistantip:48090`，并创建一个中文或英文项目。
3. 在“配置”环节，输入 API 地址、模型标识符和 API 密钥。测试连接并保存。请使用您的提供商提供的确切模型标识符。
4. 保存体裁、目标章节长度、风格以及人称视角（POV）。添加主要角色和世界观念条目。
5. 在“大纲”中，为第一批写入输入简介和章节数量（1–36）。生成并审查它。如果页面提供了“确认大纲”选项，请在开始写作前进行确认。
6. 在“写作”中，生成一个章节，阅读并修改它，然后在继续之前接受它。

从较小的批次开始并禁止自动确认，以检查语气、角色和模型行为。

基于：https://github.com/Nigh/show-me-the-story/

_感谢所有为我项目加星的朋友！点击上图即可添加星标，它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 安装

此附加功能的安装非常直接，与其他 Hass.io 附加功能的安装方式基本相同。

1. 将 [我的 Hass.io 附加功能仓库]`repository` 添加到您的 Hass.io 实例中。
1. 安装此附加功能。
1. 点击“保存”按钮以存储您的配置。
1. 启动附加功能。
1. 检查附加功能的日志，以查看一切是否顺利。
1. 通过入口或 `<your-ip>:port` 打开 Web UI 应能正常工作。

## 配置

```
port : 8081 # 您希望运行的端口。
```

Web UI 可通过 `<your-ip>:port` 访问。


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
