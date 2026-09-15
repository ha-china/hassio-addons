# 家庭助手插件：Fusion RSS

一个轻量级的RSS订阅聚合器和阅读器。

主要特性包括：

- 分组、书签、搜索、自动嗅探订阅
- 导入/导出OPML文件
- 支持RSS、Atom、JSON类型订阅
- 响应式设计、浅色/深色模式、PWA
- 轻量级、易于自托管
  - 使用Golang和SQLite构建，单二进制部署
  - 预建Docker镜像
  - 大约占用80MB内存
  
感谢各位给我star我的repo！要star它，请点击下面的图片，然后它就会出现在右上角。谢谢！

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于[docker镜像](https://github.com/0x2E/fusion)。

## 安装

此插件的安装非常简单，与安装其他Hass.io插件没有太大区别。

1. 将我的Hass.io插件仓库[repository]添加到您的Hass.io实例中。
1. 安装此插件。
1. 点击`保存`按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，查看是否一切顺利。
1. 应通过ingress或<您的IP>:port打开WebUI。
1. 您的数据存储在/addon_configs/2effc9b9_fusionrss

## 配置

```
port : 8080 #您想运行的端口号。
```

WebUI可以在<您的IP>:port找到。

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
