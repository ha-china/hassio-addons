# Home Assistant 插件：Homebox

Homebox 是为家庭用户打造的库存和组织系统！本着简单和易于使用的原则，Homebox 是解决家庭库存、组织和管理的完美方案。在开发此项目时，我尝试遵循以下原则：

- **简单** - Homebox 设计得简单易用，无需复杂的设置或配置。可以仅使用单个 Docker 容器运行，或者根据您的首选平台编译二进制文件进行部署。
- **极速运行** - Homebox 是用 Go 编写的，这使得它运行速度极快，且部署所需资源最少。通常整个容器的空闲内存使用量小于 50MB。
- **便携性** - Homebox 设计用于在任何地方运行。我们使用 SQLite 和嵌入式的 Web 界面，使其易于部署、使用和备份。

_感谢大家为我 Repo 点赞！要点赞请点击下方的图片，然后点击它会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有不同。

1. [添加我的 Hass.io 插件仓库][repository] 到您的 Hass.io 实例。
1. 安装此插件。
1. 在配置中，如果您将其暴露到互联网，请将 `HBOX_AUTH_API_KEY_PEPPER` 设置为 `openssl rand -base64 48` 的输出生出。否则，使用默认键即可。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动插件。
1. 检查插件日志以查看一切是否顺利。
1. 打开 WebUI 应可通过 `<your-ip>:port` 或 ingress 访问。
1. 注册用户
1. 若需要，进入插件配置并禁用用户注册
## 配置

```
port : 7745 #您想要运行的端口。
```

### SSO/OIDC 设置

详见 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Web 界面位于 `<your-ip>:port`。

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
