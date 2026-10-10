# Home assistant 插件：Homebox

Homebox 是为家庭用户打造的库存和组织系统！它专注于简单性和易用性，是家庭库存、组织和管理的完美解决方案。在开发该项目时，我一直尝试牢记以下原则：

- **简单** - Homebox 专为简单和易用而设计。无需复杂的设置或配置。您可以使用单个 Docker 容器，或在您选择的平台上编译二进制文件自行部署。
- **极速** - Homebox 用 Go 编写，这使得它极其快速，且部署所需资源最少。通常，整个容器的空闲内存使用量低于 50MB。
- **便携** - Homebox 专为便携性而设计，可在任何地方运行。我们使用 SQLite 和嵌入的 Web UI，使其易于部署、使用和数据备份。

_感谢各位为我的仓库点亮星标！要点亮它，请点击下方的图片，然后将它置于右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用了 [docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此插件的安装非常直接，与其他任何 Hass.io 插件的安装方式相比并无不同。

1. [将我添加的 Hass.io 插件存储库][repository] 添加到您的 Hass.io 实例中。
2. 安装此插件。
3. 在配置中，如果暴露到互联网，请将 HBOX_AUTH_API_KEY_PEPPER 设置为 `openssl rand -base64 48` 的输出。如果不需要，则默认密钥即可。
4. 点击 `保存` 按钮以保存您的配置。
5. 启动插件。
6. 检查插件的日志，以查看一切是否顺利。
7. 通过 <your-ip>:port 或 ingress 打开 Web UI 应能正常工作。
8. 注册用户
9. 进入插件配置，如果您想要，可以禁用用户注册。

## 配置

```
port : 7745 # 您希望运行的端口。
```

### SSO/OIDC 设置

详见 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

Webui 可位于 `<your-ip>:port`。

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
