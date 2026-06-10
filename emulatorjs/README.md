# Home Assistant 插件：EmulatorJS
在浏览器中基于Web的复古游戏机仿真，可移植到几乎所有设备。在Libretro和EmulatorJS之间使用了多种仿真器。

_感谢 everyone 为我的仓库点赞！要点赞，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [linuxserver/docker-emulatorjs](https://github.com/linuxserver/docker-emulatorjs) 的 docker 镜像。在浏览器中基于Web的仿真，可移植到几乎所有设备，用于许多复古游戏机。在Libretro和EmulatorJS之间使用了多种仿真器。

## 安装

此插件的安装相当简单，与安装任何其他Hass.io插件没有太大区别。

1. 将我的Hass.io插件仓库[repository]添加到您的Hass.io实例中。
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 创建目录 /share/emulatorjs 以存储您的游戏/艺术文件。
1. 创建 /share/emulatorjs/config 和 /share/emulatorjs/data。
1. 启动插件。
1. 检查插件的日志，以查看是否一切顺利。
1. 将rom文件放置在 /share/emulatorjs/data/EMULATORNAME/roms 的正确文件夹中。
1. 前往管理端口。
1. 为您添加游戏的仿真器点击“扫描”。
1. 点击仿真器框，执行步骤1和步骤2。
1. 打开WebUI应进入PlayerUI，访问您的本地homeassistant IP:port 或管理端口。
1. 您的游戏应该可用。
1. 咨询官方文档以获取设置支持：https://github.com/linuxserver/docker-emulatorjs
1. 如果启动插件导致清除您的设置，请停止插件，然后重新启动。有时对 /share/emulatorjs 的映射不起作用。
2. 

## 配置

```
adminport : 3000 # 您要在上面运行管理界面的端口号。
port: 89 # 您要在上面运行前端端口的端口号
```

WebUI可以在 `<您的IP>:端口` 找到。应通过ingress可用。管理端口不通过ingress可用。

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
