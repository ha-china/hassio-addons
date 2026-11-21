# Home Assistant 附加组件：Fusion RSS

轻量级 RSS 订阅源聚合器与阅读器。

主要功能包括：

- 分组、标记书签、搜索，自动嗅探订阅源
- 导入/导出 OPML 文件
- 支持 RSS、Atom、JSON 类型订阅源
- 响应式设计、亮/暗模式、PWA
- 轻量级，易于自托管
  - 使用 Golang 和 SQLite 构建，通过单个二进制文件进行部署
  - 预构建的 Docker 镜像
  - 占用约 80MB 内存

_感谢大家为我代码仓库点赞！想要支持请点击下方图片，它将显示在右上角。谢谢！_

[![Fusion RSS 代码仓库的 Stargazers 成员列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件基于 [Docker 镜像](https://github.com/0x2E/fusion)。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件的方式一致。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例中。
2. 安装此附加组件。
3. 点击 `保存` 按钮以保存配置。
4. 启动附加组件。
5. 查看附加组件的日志以确认一切正常。
6. 通过 Ingress 或 <your-ip>:port 打开 Web 界面。
7. 您的数据保存在 `/addon_configs/2effc9b9_fusionrss`。

## 配置

```
port : 8080 # 您希望运行的端口。
```

Web 界面地址为 `<your-ip>:port`。

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
