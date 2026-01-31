# Hass.io 插件：Flexget

我利用业余时间维护这个和其他 Home Assistant 插件：紧跟上游更新、HA 更改以及在真实硬件上测试需要花费大量时间（和金钱）。我使用大约 5-10 个我的 >110 个插件，所以我经常安装测试机器（并购买一些我不使用的测试服务，如 VPN）来排查和改进这些插件。

如果这个插件为您节省了时间或使您的设置更容易，我将非常感谢您的支持！

[![请我喝杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=检查代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/请我喝杯咖啡-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/通过%20PayPal%20捐赠-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给仓库加星的人！要给它加星，请点击下方的图片，然后它就会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的 Stargazers 仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/flexget/stats.png)

## 关于

[FlexGet](https://flexget.com/) 是一个多功能自动化工具，用于处理您的所有媒体。它支持 torrent、NZB、播客、漫画、电视、电影、RSS、HTML、CSV 等。

主要功能：
*   拥有 300 多个插件的功能强大插件系统
*   RSS 源处理和过滤
*   与下载客户端集成
*   基于 Web 的管理界面
*   计划执行和守护进程模式

## 安装

安装此插件非常简单，与其他插件的安装没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 Supervisor 插件商店右上角，或者如果您已配置我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，其中预填充了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好。
1. 启动插件。
1. 检查插件的日志，查看一切是否顺利。
1. 打开 WebUI 并调整软件选项。

## 配置

使用插件的 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。详情请见：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2

Webui 位于 <http://homeassistant:5050>。
默认密码：`homeassistant123`（通过插件选项更改）。

### 设置步骤

1. 启动插件后访问 Web 界面
2. 创建或编辑您的 FlexGet 配置文件
3. 设置 RSS 源和下载源
4. 为您的下载客户端配置输出插件
5. 测试配置并启用计划任务

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 用于文件权限的组 ID |
| `PUID` | int | `0` | 用于文件权限的用户 ID |
| `WebuiPass` | str | `homeassistant123` | Web 界面密码 |
| `FG_PLUGINS` | str | | 要安装的额外插件 |
| `FG_LOG_LEVEL` | list | | 日志级别 (critical/error/warning/info/verbose/debug/trace) |

### 示例配置

```yaml
PGID: 1000
PUID: 1000
WebuiPass: "SecurePassword123"
FG_PLUGINS: "flexget-plugins-extra"
FG_LOG_LEVEL: "info"
```

### 配置文件

FlexGet 使用位于 `/config/flexget/config.yml` 的 YAML 配置文件。示例：

```yaml
tasks:
  tv-shows:
    rss: https://example.com/tv-shows.rss
    series:
      - Breaking Bad
      - Game of Thrones
    transmission:
      host: localhost
      port: 9091
```

完整配置文档请见：https://flexget.com/Configuration

## 支持

如果您在安装方面遇到问题，请务必查看 GitHub。
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
