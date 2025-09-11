# Home assistant 插件: HRConvert2

- 转换445种不同的文件格式。
- 自托管。可以安装在家庭服务器上！
- 所有转换都是在本地服务器上进行的。
- 对PDF和图像执行光学字符识别（OCR）。
- 可以使用ClamAV在后台自动扫描文件以查找病毒。
- 允许用户使用ClamAV或[zelon88/scanCore](https://github.com/zelon88/scanCore)按需扫描文件以查找病毒。
- 允许用户生成临时链接以共享文件。
- 极简的拖放界面。
- 每个用户都有自己的临时工作空间！
- 最终用户可以通过将其附加到URL来切换13种语言，例如：`?language=en`
- 对于公开环境足够安全（在适当实现时）。
- 无数据库。无Cookies。无缓存文件。
- 与其他流行软件（如WordPress）干净安装。
- 不进行外部连接。
- 所有JS都是本地安装的。没有臃肿的框架。没有分析。没有Google字体。
- 完全没有跟踪功能。
- 配置文件中设置了4种配色方案。
- 安全、性能高、紧凑的代码库，已经开源多年。

图像为2 GB，因此安装将花费很长时间，请耐心等待。

_感谢所有给我的仓库加星的朋友！要加星，请点击下面的图片，然后它将出现在右上方。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用了[docker镜像](https://github.com/5etools-mirror-2/5etools-mirror-2.github.io)。

## 安装

此插件的安装非常简单，与安装其他Hass.io插件没有不同。

1. [将我的Hass.io插件库][repository]添加到您的Hass.io实例。
1. 安装此插件。2 GB的镜像需要一段时间来下载。
1. 点击`Save`按钮保存您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. WebUI应通过<your-ip>:port访问。

## 配置

```
port : 8080 #您希望运行的端口。
```

Webui可以在`<your-ip>:port`找到。

[repository]: https://github.com/jdeath/homeassistant-addons