# Hass.io 插件：Flexget

我会在闲暇时间维护此及其他 Home Assistant 插件：跟踪上游更新、适配 Home Assistant 的变更以及在真实硬件上进行测试需要大量时间（以及一些费用）。我平均使用 5-10 个我拥有的 110 多个插件，因此我安装了测试机（并购买了一些测试服务，如 VPN，这些我自己不用）来调试和改善这些插件。

如果您在使用此插件上节省时间或使您的设置更加简便，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]:https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点亮星星的人！要点亮它，点击下方图片，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变趋势图](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/flexget/stats.png)

## 介绍

[FlexGet](https://flexget.com/) 是一款多功能媒体自动化工具。它支持 Torrents、NZBs、播客、漫画、电视、电影、RSS、HTML、CSV 以及更多。

关键特性：
- 强大的插件系统，拥有 300 多个插件
- RSS 流处理和过滤
- 与下载客户端的集成
- 基于 Web 的管理界面
- 定时执行和守护进程模式

## 安装

此插件的安装非常简单明了，与其他插件的安装方式并无二致。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在 Supervisor 商店右上角，或如果您已配置了 HA 可点击下方按钮）
   [![打开您的 Home Assistant 实例并显示添加插件仓库对话框，预填特定仓库 URL](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `保存` 按钮以保存配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 打开 WebUI 并调整软件选项

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 地址为 <http://homeassistant:5050>。
默认密码：`homeassistant123`（可通过插件选项更改）。

### 安装步骤

1. 启动插件后访问 Web 界面
2. 创建或编辑您的 FlexGet 配置文件
3. 设置 RSS 源和下载源
4. 为您的下载客户端配置输出插件
5. 测试配置并启用计划任务

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `WebuiPass` | str | `homeassistant123` | 管理界面密码 |
| `FG_PLUGINS` | str | | 要安装的其他插件 |
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

FlexGet 使用位于 `/config/flexget/config.yml` 的 YAML 配置文件。示例如下：

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

完整配置文档请访问：https://flexget.com/Configuration

## 支持

如果您在安装过程中遇到问题，请确保查阅 GitHub。

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
