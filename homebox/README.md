# Home assistant 附加功能：Homebox

Homebox 是为家庭用户量身定制的库存和组织系统。Homebox 专注于简单和易用性，是满足您的家庭库存、组织和管理工作需求的最完美解决方案。在开发此项目时，我尝试牢记以下原则：

- **简单** - Homebox 被设计为简单易懂。无需复杂的设置或配置。您可以使用单个 docker 容器运行，或者根据您的首选平台编译二进制文件自行部署。
- **极速运行** - Homebox 是用 Go 编写的，这使它运行极其迅速，并且部署所需资源极少。通常，整个容器的空闲内存使用量低于 50MB。
- **便携** - Homebox 被设计为可移植，可在任何地方运行。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和数据备份。

_感谢所有为我仓库星星的人！要星星，请点击下方的图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此附加功能使用了 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此附加功能的安装非常简单，与其他任何 Hass.io 附加功能的安装相比并无不同。

1. [将我 Hass.io 附加功能仓库](链接至 repository) 添加到您的 Hass.io 实例。
2. 安装此附加功能。
3. 在配置中，如果您暴露在网络上，请将 HBOX_AUTH_API_KEY_PEPPER 设置为 `openssl rand -base64 48` 的输出；否则，默认密钥即可。
4. 点击 `Save` 按钮以存储您的配置。
5. 启动附加功能。
6. 检查附加功能的日志，以查看一切是否顺利。
7. 打开 WebUI 应可通过 <your-ip>:port 或 ingress 访问。
8. 注册用户。
9. 如果您希望，请访问附加功能配置并禁用用户注册。

## 配置

```
port : 7745 #您想要运行的端口。
```

### SSO/OIDC 设置

有关详细信息，请参阅 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Webui 的地址为 `<your-ip>:port`。

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
