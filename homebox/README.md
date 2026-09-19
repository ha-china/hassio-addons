# Home assistant 插件：Homebox

Homebox 是为家庭用户设计的物品管理和组织系统。侧重于简洁和易用性，Homebox 是解决家庭物品管理、组织和管理的理想方案。在开发该项目时，我尝试遵循以下原则：

- **简单** - Homebox 设计得简洁易用。无需复杂的设置或配置。您只需使用单个 Docker 容器，或者通过编译为您选择的平台生成二进制文件自行部署。
- **极速** - Homebox 是用 Go 编写的，这使得它运行的速度极快，且部署所需资源极少。通常情况下，整个容器的空闲内存使用量低于 50MB。
- **便携性** - Homebox 专为便携性设计，可在任何地方运行。我们使用 SQLite 和嵌入式 Web 界面，使其易于部署、使用和数据备份。

_感谢所有人给我的仓库点赞！要点赞它，请点击下方的图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

该插件使用 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

本插件的安装非常简单，与其他 Hass.io 插件的安装相比没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此插件。
3. 在配置中，如果您要对外暴露，请将 HBOX_AUTH_API_KEY_PEPPER 设置为 `openssl rand -base64 48` 的输出。如果不是，默认密钥即可。
4. 点击 `Save` 按钮以保存您的配置。
5. 启动插件。
6. 检查插件日志以确认一切正常。
7. Web 界面应可通过 `<your-ip>:port` 或 ingress 访问。
8. 注册用户
9. 如需，可前往插件配置并禁用用户注册功能。

## 配置

```
port : 7745 # 您想要运行的端口。
```

### SSO/OIDC 设置
有关详细信息，请参阅 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Web 界面位于 `<your-ip>:port`。

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
