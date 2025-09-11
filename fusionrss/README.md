# 家庭助手插件：Fusion RSS

一个轻量级的RSS聚合和阅读器。

主要功能包括：

- 自动分组、书签、搜索、嗅探feed
- 导入/导出OPML文件
- 支持RSS、Atom、JSON类型的feed
- 响应式，亮/暗模式，PWA
- 轻量级，自托管友好
  - 使用Golang和SQLite构建，通过单个二进制文件部署
  - 预构建的Docker镜像
  - 大约占用80MB内存
  
_感谢所有为我的库加星的朋友们！要加星，请点击下方图片，然后它会出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件基于 [docker镜像](https://github.com/0x2E/fusion)。

## 安装

该插件的安装相当简单，与安装任何其他Hass.io插件没有区别。

1. [将我的Hass.io插件库][repository]添加到你的Hass.io实例中。
1. 安装此插件。
1. 点击`保存`按钮以存储你的配置。
1. 启动插件。
1. 检查插件的日志以查看是否一切正常。
1. WebUI应该可以通过ingress或<your-ip>:port访问。
1. 你的数据存储在 /addon_configs/2effc9b9_fusionrss

## 配置

```
port : 8080 #你想要运行的端口。
```

Webui可以在`<your-ip>:port`找到。

[repository]: https://github.com/jdeath/homeassistant-addons