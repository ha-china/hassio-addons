# Home Assistant 插件：Homebox

Homebox 是为家庭用户量身打造的资产管理和组织系统。专注于简单和易用，Homebox 是您满足家庭资产、组织和管理需求的理想解决方案。在开发该项目时，我始终遵循以下原则：

- **简单** - Homebox 设计得简单易用，无需复杂的设置或配置。只需使用单一 Docker 容器，或根据您的首选平台编译二进制文件自行部署即可。
- **极速响应** - Homebox 是用 Go 语言编写的，这使得它运行极其迅速，且部署所需资源极小。通常情况下，容器的闲置内存使用量小于 50MB。
- **便携** - Homebox 专为便携性设计，可在任何地方运行。我们使用 SQLite 和嵌入式 Web 界面，使其易于部署、使用和备份。

_感谢所有点亮我仓库星标的朋友们！要点亮它，请单击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此插件使用了 [Docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件的方法没有不同。

1. 将我提供的 Hass.io 插件仓库 [添加至此](https://github.com/jdeath/homeassistant-addons) 您的 Hass.io 实例中。
1. 安装此插件。
1. 在配置中，如果您要将其公开到互联网，请将 `HBOX_AUTH_API_KEY_PEPPER` 设置为 `openssl rand -base64 48` 的输出结果。如果不是，默认密钥即可使用。
1. 点击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件日志以查看一切是否正常。
1. 打开 Web 界面，您可通过 `<your-ip>:port` 或 Ingress 进行访问。
1. 注册用户
1. 如需要，前往插件配置并禁用用户注册。
## 配置

```
port : 7745 # 要运行的端口。
```

### SSO/OIDC 设置

详见 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Web 界面地址为 `<your-ip>:port`。

[repository]: https://github.com/jdeath/homeassistant-addons

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
