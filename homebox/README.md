# Home assistant 附加组件：Homebox

Homebox 是为家庭用户构建的库存和组织系统。注重简单和易用性，Homebox 是满足您的家庭库存、组织和管理工作需求的完美解决方案。在开发这个项目的过程中，我始终牢记以下原则：

- _简单_ - Homebox 专为简单和易用而设计。无需复杂的设置或配置。您可以使用单个 Docker 容器，或者根据您的首选平台编译并自行部署。
- _极快_ - Homebox 是用 Go 编写的，使其速度极快，且部署所需的资源极少。总体而言，容器整个空闲时的内存使用量低于 50MB。
- _便携_ - Homebox 专为便携性而设计，可在任何地方运行。我们使用了 SQLite 和嵌入式 Web UI，使其易于部署、使用和备份。

_感谢所有人都星标了我的仓库！要添加星标，请点击下方的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此附加组件使用的是 [Docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此附加组件的安装非常直观，与其他任何 Hass.io 附加组件的安装方式没有区别。

1. 将我的 Hass.io 附加组件仓库 [repository] 添加到您的 Hass.io 实例中。
1. 安装此附加组件。
1. 在配置中，如果您要向互联网开放，请将 `HBOX_AUTH_API_KEY_PEPPER` 设置为 `openssl rand -base64 48` 的输出。否则，使用默认密钥即可。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，以查看一切是否顺利。
1. 打开 Web UI 应该可以通过 `<your-ip>:port` 或 ingress 访问。
1. 注册用户
1. 如果您想要，请前往附加组件配置并禁用用户注册
## 配置

```
port : 7745 # 您想要运行的端口。
```

### SSO/OIDC 设置

详情请查看 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Web UI 可以在 `<your-ip>:port` 处找到。

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
