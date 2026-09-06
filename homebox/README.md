# Home Assistant 附加组件：Homebox

Homebox 是为家庭用户构建的库存和组织系统。焦点在于简单性和易用性，Homebox 是满足您家庭库存、组织和管理需求的完美解决方案。在开发此项目时，我一直在考虑以下原则：

- _简单_ - Homebox 旨在简单且易于使用。无需复杂的设置或配置。您只需使用单个 Docker 容器运行，或根据您的首选平台编译二进制文件自行部署。
- _极快的速度_ - Homebox 是用 Go 语言编写的，这使得它极其快速，且部署所需的资源最小。通常情况下，整个容器的空闲内存使用量低于 50MB。
- _可移植性_ - Homebox 设计为可移植，可在任何地方运行。我们使用 SQLite 和嵌入式 Web UI，使其易于部署、使用和备份。

_感谢所有人支持我的仓库！要点赞它，请点击下方的图片，它将会出现在右上角。谢谢大家！_

[![Star 仓库成员的名单](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用的 [Docker 镜像](https://github.com/sysadminsmedia/homebox)。

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有区别。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 安装此附加组件。
3. 在配置中，如果您需要暴露到互联网，请将 HBOX_AUTH_API_KEY_PEPPER 设置为 `openssl rand -base64 48` 的输出。否则，默认键即可。
4. 点击 `保存` 按钮以存储您的配置。
5. 启动附加组件。
6. 检查附加组件的日志，看看是否一切顺利。
7. 打开 WebUI 应该可以通过 `<your-ip>:port` 或入口点访问。
8. 注册用户
9. 如果不需要，请进入附加组件配置并禁用用户注册。
## 配置

```
port : 7745 #您希望运行的端口号。
```

### SSO/OIDC 设置

有关详细信息，请参阅 [HomeBox 文档](https://homebox.software/en/quick-start/configure/oidc/)。

WebUI 位于 `<your-ip>:port`。

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
