# Home Assistant 附加组件：Vaultwarden

使用 Rust 编写并兼容上游 Bitwarden 客户端*\*的 Bitwarden 服务器 API 的替代实现，非常适合自托管部署，在官方资源消耗较大的服务可能不理想的场景中表现出色。

本版本与官方 Home Assistant 附加组件以及 Alex Belgium 的附加组件的区别在于数据存储位置存放在 `/addons_config` 中。这使得如果您因意外卸载或升级出现问题，移动数据时会更加便捷。请务必使用 argon 加密密码，这应现已成为默认设置。此外，内置的 Home Assistant 附加组件往往更新不及时（即使多次请求也是如此）。本附加组件仅使用官方 Docker 镜像且无任何修改，而其他附加组件则在镜像中添加了额外内容。

_感谢所有星标了我的仓库的人！要星标它，请点击下方的图片，然后将其置于右上角。感谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

本附加组件使用 [docker 镜像](https://github.com/dani-garcia/vaultwarden)。

## 安装

此附加组件的安装非常简单，与安装任何其他 Hass.io 附加组件没有不同。

1. [将我添加 Hass.io 附加组件仓库][repository] 添加到您的 Hass.io 实例中。
2. 点击 `Save` 按钮以保存您的配置。
3. 启动附加组件。
4. 检查附加组件日志，以查看一切是否正常。
5. 打开 WebUI 应可通过 `<your-ip>:port` 访问。
6. 您的数据将存储在 `/addon-configs/2effc9b9_vaultwarden/`

如果您已有现有的 vaultwarden 安装（默认附加组件或 alexbelgium 的）：
1. 确保我的附加组件已运行过一次，但此后请确保将其停止。
2. 登录到 homeassistant cli
3. `docker ps | grep "vault"`
4. 查找 Docker 容器 ID
5. `docker cp CONTAINERID:/data /addon-configs/2effc9b9_vaultwarden/`
6. 然后在 `/addon-configs/2effc9b9_vaultwarden/` 中，将`data` 文件夹中的所有文件移至 `/addon-configs/2effc9b9_vaultwarden/`
7. 所有文件现在应都在 `/addon-configs/2effc9b9_vaultwarden/` 中
8. 停止默认附加组件，关闭“开机启动”
9. 启动我的附加组件
10. 查阅文档以进行配置: https://github.com/dani-garcia/vaultwarden

## 配置
1. 设置完成后，请从您的网络外部移除对控制面板的访问权限。
2. 您可以手动配置许多参数，方法是停止容器并编辑 `/addon-configs/2effc9b9_vaultwarden/config.json`
3. 请确保您的 `admin_token` 是 argon2 加密的：https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page#secure-the-admin_token
4. 如果不是，请输入 `docker ps | grep "vault"`，数字和字母前面的部分是容器 ID
5. `docker exec -it containerID /bin/bash`
6. `cd /` `/vaultwarden hash --preset owasp` 输入密码，然后替换管理令牌

由于此文件是可访问的，我猜任何人都可以这样做，所以请小心。如果您拥有对您的 homeassistant 设备的访问权限，也可以在容器内完成此事，因此实际上并没有更少的安全性

```
port : 7277 # 您希望运行的端口。
```

WebUI 可位于 `<your-ip>:port`。

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
