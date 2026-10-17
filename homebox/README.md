# 家庭助手附加组件：Homebox

Homebox 是为家庭用户设计的库存和组织系统。以其简单性和易用性为重点，Homebox 是您家庭库存、组织和管理的完美解决方案。在开发这个项目时，我谨记以下原则：

- _简单_ - Homebox 的设计简单易用。无需复杂的安装或配置。您可以使用单个 docker 容器，或者根据您的首选平台编译二进制文件进行自行部署。
- _极速_ - Homebox 是用 Go 编写的，这使它具有极高的速度，并且部署所需的资源最小。一般来说，该容器空闲时的内存使用量低于 50MB。
- _可移植性_ - Homebox 设计为易于移植，可以运行在任何地方。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和备份。

_感谢所有给我仓库星标的人！要星标它，请点击下方图片，之后它将显示在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

该附加组件使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

安装此附加组件非常简单，与其他安装 Hass.io 附加组件的过程没有区别。

1. [将我添加的 Hass.io 附加组件存储库][repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 在配置中，如果您要公开到互联网，请将 HBOX_AUTH_API_KEY_PEPPER 设置为 `openssl rand -base64 48` 的输出结果。如果不公开，默认密钥即可。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件日志，查看一切是否正常。
1. 通过 `<您的 IP 地址>:端口` 或 ingress 打开 Web UI 应该可用。
1. 注册用户
1. 如果希望的话，前往附加组件配置并禁用用户注册。
## 配置

```
port : 7745 #您想要运行的端口。
```

### SSO/OIDC 设置

有关详细信息，请参阅 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Web UI 可在 `<您的 IP 地址>:端口` 处找到。

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
