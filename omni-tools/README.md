# Home Assistant 附加组件：Omni Tools

## 简介

Omni Tools 是一个自托管的网页应用程序，提供各种日常任务的在线工具。所有文件处理均在客户端完全进行，确保隐私和安全性。

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield]

## 功能特性

- **图像工具**：图像调整大小、转换器
- **视频工具**：视频剪辑器
- **PDF 工具**：PDF 分割、合并
- **文本/列表工具**：各种文本处理工具
- **日期和时间工具**：日期/时间计算器和转换器
- **数学工具**：数学计算器和转换器
- **数据工具**：JSON、CSV、XML 处理器

## 安装

1. 在您的 Home Assistant 实例中添加附加组件存储库（在 supervisor addons 存储库右上角，或如果您已配置了 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示附加组件存储库对话框，其中预填充了特定存储库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装"Omni Tools"附加组件
3. 启动附加组件
4. 打开 Web UI

## 配置

### 选项：`PUID`

运行应用程序的用户 ID。默认值为 `0`。

### 选项：`PGID`

运行应用程序的组 ID。默认值为 `0`。

### 选项：`TZ`

应用程序的时区设置。

## 使用方法

1. 通过 Home Assistant 侧边栏或通过导航到附加组件的 Web UI 访问 Web 界面
2. 从各种工具类别中选择：
   - 图像/视频/音频处理
   - PDF 操作
   - 文本和列表处理
   - 日期和时间工具
   - 数学工具
   - 数据格式转换

所有处理都在您的浏览器本地进行，以确保最大程度内的隐私和安全性。

### 环境变量

使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可为大写或小写）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 支持

有问题吗？

您可以选择以下几种方式获取帮助：

- [Home Assistant Discord 聊天服务器][discord]
- Home Assistant [社区论坛][forum]
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]

## 作者与贡献者

该存储库的原始设置由 [Alex Belgium][alexbelgium] 完成。

## 许可证

MIT 许可证

Copyright (c) 2017-2024 Alex Belgium

在此授权免费向任何复制本软件及相关文档文件（“软件”）的人士授予，在无任何限制的情况下对软件进行处理，包括但不限于以下权利：
使用、复制、修改、合并、发布、分发、 sublicense和销售软件的副本，以及允许向提供软件的任何人进行上述操作，但须遵循以下条款：

上述版权通知和本许可通知应包含在软件的所有副本或实质性部分中。

软件按照“原样”提供，不提供任何形式的保证，明示或暗示，包括但不限于适销性、特定用途适用性和不侵权保证。在任何情况下，作者或版权持有者不对任何索求、损害或其他责任承担责任，无论该责任是源于合同、侵权或其他行为，均源于软件、软件的使用或本软件协议中的其他事宜。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[alexbelgium]: https://github.com/alexbelgium
[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[reddit]: https://reddit.com/r/homeassistant

---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://raw.gitcode.com/ha-china/ha-apps/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
