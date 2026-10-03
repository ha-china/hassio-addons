# Home Assistant 附加组件：Vaultwarden

这是用 Rust 编写的 Bitwarden 服务器 API 的替代实现，与上游 Bitwarden 客户端兼容*，非常适合自托管部署，在运行官方资源占用大的服务可能亚理想的不理想的环境中表现更佳。

*注：原文标点或语境可能存在轻微不严谨，此处保持原意翻译。*

此版本与官方 Home Assistant 附加组件及 Alex Belgium 的附加组件的区别在于，它将数据存储在 `/addons_config` 中。这样，如果不小心卸载或升级失败，便更容易移动数据。你必须确保使用 Argon2 加密的密码，现在这应该是默认设置。此外，内置的 Home Assistant 附加组件往往无法更新（即使经过多次请求）。此附加组件仅使用官方 Docker 镜像，不做任何修改，而其他附加组件会对镜像进行编辑并添加额外的内容。

_感谢大家为我的仓库添加星标！要添加星标，请点击下方的图片，它将显示在右上角。谢谢！_

[![@jdeath/homeassistant-addons 仓库星标者名单]((https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此附加组件使用 [Docker 镜像](https://github.com/dani-garcia/vaultwarden)。

## 安装

此附加组件的安装非常简单，与其他安装 Hass.io 附加组件的方式没有不同。

1. 将 [我的 Hass.io 附加组件仓库][repository] 添加到你的 Hass.io 实例中。
1. 点击 `Save` 按钮以保存你的配置。
1. 启动附加组件。
1. 检查附加组件的日志，确认一切是否正常。
1. 打开 WebUI 应可以通过 `<your-ip>:port` 访问。
1. 你的数据将存储在 `/addon-configs/2effc9b9_vaultwarden/` 下。

如果你已有 Vaultwarden 安装（默认附加组件或 alexbelgium 的）：
1. 确保附加组件曾运行过，但之后请停止它。
1. 登录 Home Assistant CLI。
1. `docker ps | grep "vault"`
1. 查找 Docker 容器 ID。
1. `docker cp CONTAINERID:/data /addon-configs/2effc9b9_vaultwarden/`
1. 然后在 `/addon-configs/2effc9b9_vaultwarden/`中，将所有文件从`data`文件夹移出至 `/addon-configs/2effc9b9_vaultwarden/`。
1. 所有文件现在应位于 `/addon-configs/2effc9b9_vaultwarden/`。
1. 停止默认附加组件，关闭"启动时启动”选项。
1. 启动我的附加组件。
1. 查阅文档以进行配置：https://github.com/dani-garcia/vaultwarden

## 配置
1. 设置完成后，请将外部对管理控制台的访问限制在你自己的网络中。
2. 你可以通过停止容器并编辑 `/addon-configs/2effc9b9_vaultwarden/config.json` 来手动配置许多参数。
3. 确保你的 `admin_token` 是 argon2 加密的：https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page#secure-the-admin_token
4. 如果没有加密，请使用 `docker ps | grep "vault"`并前面的数字或字母即为容器 ID。
5. 执行 `docker exec -it containerID /bin/bash`。
6. 进入 `/`，运行 `/vaultwarden hash --preset owasp`，输入密码，然后替换该管理员令牌。
7. 由于此文件可访问，我猜想任何人都可以这样做，所以请小心。如果你有 HomeAssistant 机器的访问权限，这也可以在容器内完成，因此安全性并不会真的降低。

```
port : 7277 # 你希望运行的端口。
```

WebUI 可访问于 `<your-ip>:port`。

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
