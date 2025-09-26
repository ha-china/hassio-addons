# Home assistant插件：SilverBullet

SilverBullet是一款为具有黑客思维的人优化的笔记应用。我们都记笔记。现在有成千上万的笔记应用。字面意义上。如果有一个应用让你的笔记不仅仅是纯文本文件会怎样？让你的笔记本质上成为一个你可以查询的数据库；你可以在其上构建自定义知识应用？如果你愿意的话，就是一个可定制的笔记本？

_感谢大家给我的仓库加星！要加星请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于[docker镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
1. 安装这个插件。
1. 点击`保存`按钮以保存你的配置。
1. 如果你想设置密码保护，设置SB_HOME字段为用户名:密码，例如Mike:Pass123
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. 应该可以通过ingress或<你的IP>:端口打开WebUI。
1. 数据应该存储在 /addon_config/2effc9b9_silverbullet

## 配置

```
port : 8081 #你想要运行的端口。
```

Webui可以在 `<你的IP>:端口` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons