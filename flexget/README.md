# Hass.io 附加组件：Flexget

我在业余时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改，并在真实硬件上进行测试需要大量时间（以及一些金钱）。我大约使用了超过 110 个附加组件中的 5-10 个，因此我经常会安装测试机器（并购买某些测试服务如 vpn），这些服务我自己不使用，用于故障排查和改进附加组件。

如果此附加组件为您节省时间或使您的设置更容易，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![端口入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

*感谢所有人 starred 我的仓库！要将其 high light，请点击下图，然后它会出现在右上角。非常感谢！*

[![@alexbelgium/hassio-addons 的 Star 者仓库队列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/flexget/stats.png)

## 关于

[FlexGet](https://flexget.com/) 是一个多功能工具，用于您所有的媒体内容。它可以支持 torrents、NZBs、播客、漫画、电视、电影、RSS、HTML、CSV 等。

关键功能：
- 强大的插件系统，包含 300+ 个插件
- RSS 源处理与过滤
- 与下载客户端集成
- 基于 Web 的管理界面
- 调度执行和守护进程模式

## 安装

此附加组件的安装非常简单，与其他任何附加组件的安装方式没有什么不同。

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件商店右上角，或如果您已配置了 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 的弹出对话框，自动填充仓库 URL](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以保存您的配置。
1. 将附加组件选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 打开 webUI 并调整软件选项

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（大小写均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

Webui 可在此地址找到：<http://homeassistant:5050>。
默认密码：`homeassistant123`（可通过附加组件选项更改）。

### 设置步骤

1. 启动附加组件后访问 web 界面
2. 创建或编辑您的 FlexGet 配置文件
3. 设置 RSS 源和下载源
4. 为您的下载客户端配置输出插件
5. 测试配置并启用调度

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
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

有关完整的配置文档，请访问：https://flexget.com/Configuration

## 安全

`WebuiPass` 选项默认为 `homeassistant123`。任何可以访问 5050 端口并知道该密码的人都可以在 web 界面上登录并更改任务，这可能导致执行命令。请在附加组件选项中更改密码。当默认值仍设置时，附加组件会在启动日志中打印警告。

## 支持

如果您的安装遇到问题，请确保查看 GitHub。

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
