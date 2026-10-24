# Home assistant 插件：EmulatorJS
在浏览器中基于 Web 的便携式模拟器，可移植到几乎所有设备，支持许多复古游戏机。Libretro 和 EmulatorJS 之间结合了多种模拟器。


_感谢所有为我仓库点赞的人！要点赞，请点击上方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 简介

此插件基于 linuxserver 的 [docker 镜像](https://github.com/linuxserver/docker-emulatorjs)。在浏览器中基于 Web 的便携式模拟器，可移植到几乎所有设备，支持许多复古游戏机。Libretro 和 EmulatorJS 之间结合了多种模拟器。

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有区别。

1.  [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例中。
1.  安装此插件。
1.  点击 `保存` 按钮以保存配置。
1.  创建目录 /share/emulatorjs 用于存储游戏/艺术文件。
1.  创建 /share/emulatorjs/config 和 /share/emulatorjs/data。
1.  启动插件。
1.  检查插件日志以查看一切是否正常。
1.  进入管理端口。
1.  下载默认配置。
1.  将游戏放入 /share/emulatorjs/data/EMULATORNAME/roms 的正确文件夹中。
1.  进入管理端口。
1.  点击您添加游戏的模拟器旁的“扫描”按钮。
1.  点击模拟器复选框，执行第 1 步和第 2 步。
1.  打开 WebUI 应导入 PlayerUI，前往您的本地 homeassistant IP:端口或管理端口。
1.  游戏应该可用。
1.  如需设置支持，请参阅官方文档：https://github.com/linuxserver/docker-emulatorjs
1.  如果启动插件导致清除设置，请停止插件并重新启动。有时 /share/emulatorjs 的映射不起作用。
2. 

## 配置

```yaml
adminport: 3000 # 运行时管理界面所在的端口。
port: 89 # 运行时前端所在的端口。
```

WebUI 可位于 `<your-ip>:port`。应可通过 ingress 访问。adminport 无法通过 ingress 访问。

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
