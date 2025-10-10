# Home assistant插件：SilverBullet

SilverBullet是一款为具有黑客思维的人优化的笔记应用程序。我们都记笔记。现在有成千上万的笔记应用程序。字面意义上的。 wouldn’t it be nice to have one where your notes are more than plain text files? Where your notes essentially become a database that you can query; that you can build custom knowledge applications on top of? A hackable notebook, if you will?

_感谢大家给我的仓库加星！要加星，请点击下面的图片，然后它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

这个插件基于[docker镜像](https://github.com/silverbulletmd/silverbullet)。

## 安装

这个插件的安装非常简单，与安装任何其他Hass.io插件没有区别。

1. 将我的Hass.io插件仓库[repository]添加到你的Hass.io实例中。
1. 安装这个插件。
1. 点击“保存”按钮以保存你的配置。
1. 如果你想设置密码保护，将SB_HOME字段设置为用户名:密码，例如Mike:Pass123
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 应该可以通过ingress或<your-ip>:port打开WebUI。
1. 数据应该存储在/addon_config/2effc9b9_silverbullet

## 配置

```
port : 8081 #你想要运行的端口。
```

Webui可以在<your-ip>:port找到。

[repository]: https://github.com/jdeath/homeassistant-addons