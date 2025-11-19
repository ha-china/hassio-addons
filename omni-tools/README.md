# Home Assistant Add-on: Omni Tools

## About

Omni Tools 是一个自托管的网络应用程序，为日常任务提供各种在线工具。所有文件处理均在客户端完成，确保隐私和安全。

![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield]

## Features

- **图像工具**: 图像大小调整、转换
- **视频工具**: 视频剪辑
- **PDF 工具**: PDF 分割、合并
- **文本/列表工具**: 各种文本操作工具
- **日期和时间工具**: 日期/时间计算器和转换器
- **数学工具**: 数学计算器和转换器
- **数据工具**: JSON、CSV、XML 处理器

## Installation

1. 将此存储库添加到您的 Home Assistant Supervisor add-on 商店
2. 安装 "Omni Tools" add-on
3. 启动 add-on
4. 打开 Web UI

## Configuration

### 选项: `PUID`

以运行应用程序的用户 ID。默认值为 `0`。

### 选项: `PGID`

以运行应用程序的组 ID。默认值为 `0`。

### 选项: `TZ`

应用程序的时区设置。

## Usage

1. 通过 Home Assistant 侧边栏或通过导航到 add-on 的 Web UI 访问 Web 界面
2. 从各种工具类别中选择：
   - 图像/视频/音频处理
   - PDF 操作
   - 文本和列表处理
   - 日期和时间工具
   - 数学工具
   - 数据格式转换

所有处理均在您的浏览器中本地进行，以实现最大化的隐私和安全。

### 环境变量

使用 add-on 的 `env_vars` 选项传递额外的环境变量（大写或小写名称）。详情请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## Support

有问题？

您有几个选项来获得答案：

- [Home Assistant Discord 聊天服务器][discord]
- Home Assistant [社区论坛][forum]
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

## 作者和贡献者

此存储库的原始设置由 [Alex Belgium][alexbelgium] 完成。

## 许可证

MIT 许可证

版权所有 (c) 2017-2024 Alex Belgium

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不限制的情况下，在软件中进行的自由处理权，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论这些责任是由于合同、侵权或其他行为引起的，均与软件或软件的使用或其他交易无关。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[alexbelgium]: https://github.com/alexbelgium
[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[reddit]: https://reddit.com/r/homeassistant
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
