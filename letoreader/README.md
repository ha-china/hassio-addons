# Home assistant 插件：Leto Reader
**LetoReader** 是一款多功能的快速阅读器，旨在提高您的阅读效率。它支持以每分钟 400-1000 个词的速度进行快速阅读，以浏览或轻松理解文本。然而，它也可以以较低的速度使用，以便更好地理解，同时仍然受益于快速串行视觉呈现（RSVP）。

### 与传统阅读的主要区别
- 固定阅读速度（可由用户配置）
- 在较高速度下抑制内心独白和回顾性扫视
- 减少眼睛疲劳

### 特性
- 内置块状处理、节奏控制和高亮显示
- 优良的用户体验和响应式设计
- 极简的用户界面
- 易于导入
- 可定制（8个设置）
- 专注模式（适用于阅读障碍/多动症）
- 无外部 API 依赖
- 仅本地存储
- 自由和开源软件（FOSS）
- 可自托管

#### 导入选项
- 从 URL 导入
- 上传文件（.pdf, .md, .txt, .html, .epub）
- 剪贴板
- GET 请求的请求体

_感谢所有给我的仓库加星的人！要加星，请点击下方图片，然后在右上角可以看到。谢谢！_

[![Stargazers repo roster for @jdeath/homeassistant-addons](https://reporoster.com/stars/jdeath/homeassistant-addons)](https://github.com/jdeath/homeassistant-addons/stargazers)

## 关于

此插件使用 [docker 镜像](https://github.com/Axym-Labs/LetoReader)。

## 安装

安装此插件非常简单，与安装其他 Hass.io 插件没有什么区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 Hass.io 实例。
1. 安装此插件。
1. 单击 `保存` 按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志，以查看一切是否正常。

## 配置

```
port : 8080 # 您希望运行的端口
```

Webui 可在 `<your-ip>:port` 找到。

[repository]: https://github.com/jdeath/homeassistant-addons