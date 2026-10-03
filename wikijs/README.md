# Home assistant 插件：Wiki.js

一个基于 NodeJS 的现代、轻量级和强大的维基应用程序

_感谢大家给我的库加星！要加星，请点击下面的图像，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件使用 [docker 镜像](https://github.com/requarks/wiki)。

## 安装

安装此插件非常简单，与安装任何其他 Hass.io 插件没有区别。

1. [将我的 Hass.io 插件库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 启动插件。插件将会出错
1. 从此库复制默认配置 [wikijs-config.yml](https://raw.githubusercontent.com/jdeath/homeassistant-addons/refs/heads/main/wikijs/wikijs-config.yml) （不是 config.yaml！）到 /addon_configs/2effc9b9_wikijs （有些人报告他们在 _wikijs 之前有不同的数字/字母，使用您目录中显示的那个）
1. SSH 登录到您的家庭助手，输入 `chmod 2777 /addon_configs/2effc9b9_wikijs`
1. 启动插件
1. 检查插件的日志以查看一切是否正常。
1. 通过 <your-ip>:port 打开 WebUI 应该可以工作。
1. 设置和 sqlite 数据库将位于 /addon_configs/2effc9b9_wikijs （在插件中挂载为 /config）
1. 停止插件，编辑 settings.yaml 文件以更改您需要的任何内容，例如更改到另一个数据库

## 配置

```
port : 3000 #您想要运行的端口。
```

Webui 可以在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons