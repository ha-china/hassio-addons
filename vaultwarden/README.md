# Home assistant 附加组件：Vaultwarden

这是用 Rust 编写的 Bitwarden 服务器 API 的替代实现，与上游 Bitwarden 客户端*兼容，非常适合自部署环境，在这种环境中运行官方资源消耗较大的服务可能并不理想。

此版本与官方 Home Assistant 附加组件以及 Alex Belgium 的附加组件之间的区别在于：它将数据存储于 `/addons_config` 文件中。这样，如果您意外卸载或通过一次失败的升级，可以更容易地迁移数据。请务必使用 argon 加密密码，默认情况下应该是开启的。此外，内置的 Home Assistant 附加组件往往无法更新（即使经过多次请求）。本附加组件仅使用官方 Docker 镜像，不进行任何修改，而其他附加组件则通过修改镜像添加额外内容。

_感谢大家为我的仓库星标！要星标它，请点击下方的图片，它将出现在右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [docker 镜像](https://github.com/dani-garcia/vaultwarden)。

## 安装

此附加组件的安装非常直接，与安装任何其他的 Hass.io 附加组件没有不同。

1. [添加我的 Hass.io 附加组件仓库][repository] 到您的 Hass.io 实例。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，确认一切顺利。
1. 通过 `<your-ip`:port` 访问 WebUI 应该可以工作。
1. 您的数据将存储在 `/addon-configs/2effc9b9_vaultwarden/` 中。

如果您已有 Vaultwarden 安装（默认附加组件或 AlexBelgium 的）：
1. 确保我的附加组件已经运行过一次，但随后请停止它。
1. 登录 Home Assistant CLI
1. `docker ps | grep "vault"`
1. 查找 Docker 容器 ID
1. `docker cp CONTAINERID:/data /addon-configs/2effc9b9_vaultwarden/`
1. 然后在 `/addon-configs/2effc9b9_vaultwarden/` 内，将所有文件从 `data` 文件夹移出到 `/addon-configs/2effc9b9_vaultwarden/`
1. 现在所有文件都应该在 `/addon-configs/2effc9b9_vaultwarden/` 中
1. 停止默认附加组件，关闭“开机自启”
1. 启动我的附加组件
1. 查阅文档进行配置：https://github.com/dani-garcia/vaultwarden

## 配置

1. 一旦设置完成，请防止外网访问管理员控制面板。
2. 您可以通过停止容器并编辑 `/addon-configs/2effc9b9_vaultwarden/config.json` 来手动配置许多参数。
3. 确保您的 `admin_token` 已 argon2 加密：https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page#secure-the-admin_token
4. 如果没有，执行 `docker ps | grep "vault"`，前面的数字/字母即为容器 ID。
5. `docker exec -it containerID /bin/bash`
6. `cd /` 执行 `/vaultwarden hash --preset owasp`，输入密码，然后替换管理员令牌（admin token）。
7. 由于该文件是可访问的，我猜任何人都可以执行此操作，所以请小心。如果您有访问 HomeAssistant 主机的权限，也可以在容器内部完成此操作，因此安全性并没有实质性降低。

```
port : 7277 # 您想要运行的端口号。
```

WebUI 可通过 `<your-ip>:port` 访问。

[repository]: https://github.com/jdeath/homeassistant-addons
```

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
