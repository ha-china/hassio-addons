# 家居助手插件：Vaultwarden

这是一个用Rust编写的Bitwarden服务器API的替代实现，与上游Bitwarden客户端兼容*，非常适合自托管部署，因为运行官方资源密集型服务可能并不理想。

与官方版本、Home Assistant插件和Alex Belgium的插件相比，这个版本将数据存储在/addons_config中，这使得在意外卸载或进行糟糕的升级时移动数据变得更加容易。你必须确保使用argon加密的密码，这应该是默认设置。此外，内置的Home Assistant插件通常没有更新（即使在多次请求后）。此插件也仅使用官方的Docker镜像，没有任何更改，而其他插件则使用额外的内容编辑镜像。

_感谢所有为我仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![点赞者列表](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用[docker镜像](https://github.com/dani-garcia/vaultwarden)。

## 安装

此插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库添加到你的Hass.io实例](https://github.com/jdeath/homeassistant-addons)。
1. 点击“保存”按钮以存储你的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 通过<your-ip>:port打开WebUI。
1. 你的数据将存储在/addon-configs/2effc9b9_vaultwarden/。

如果你已经有了现有的vaultwarden安装（默认插件或alexbelgium的），
1. 确保我的插件至少运行过一次，然后确保停止它
1. 登录Home Assistant CLI
1. `docker ps | grep "vault"`
1. 查找docker容器ID
1. `docker cp CONTAINERID:/data /addon-configs/2effc9b9_vaultwarden/`
1. 然后在/addon-configs/2effc9b9_vaultwarden/中，将`data`文件夹中的所有内容移动到/addon-configs/2effc9b9_vaultwarden/
1. 所有文件现在都应该在/addon-configs/2effc9b9_vaultwarden/中
1. 停止默认插件，关闭“启动时启动”
1. 启动我的插件
1. 查阅文档进行配置：https://github.com/dani-garcia/vaultwarden


## 配置
1. 设置完成后，请从你的网络外部移除对管理控制面板的访问
1. 你可以通过停止容器并编辑/addon-configs/2effc9b9_vaultwarden/config.json手动配置许多参数
1. 确保你的`admin_token`是argon2加密的：https://github.com/dani-garcia/vaultwarden/wiki/Enabling-admin-page#secure-the-admin_token
1. 如果不是，`docker ps | grep "vault"`，前面的是容器ID
2. `docker exec -it containerID /bin/bash`
3. `cd /` `/vaultwarden hash --preset owasp` 输入一个密码，然后替换管理令牌
4. 由于此文件是可访问的，我猜任何人都可以这样做，所以请小心。如果你能够访问你的Home Assistant机器，这也可以在容器内完成，所以实际上并没有更不安全


```
端口：7277 #你想要运行的端口。
```

WebUI可以在<your-ip>:port找到。

[仓库](https://github.com/jdeath/homeassistant-addons)
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
