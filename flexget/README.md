# Hass.io 附加组件：Flexget

我利用闲暇时间维护此及其他 Home Assistant 附加组件：跟进上游变更、Home Assistant 的更新以及在实际硬件上测试需要大量的时间（以及一些金钱）。大约使用我拥有 >110 个附加组件中的 5-10 个，因此我定期安装测试机器（并购买一些我自行不使用的测试服务，如 vpn）来排查问题并改进附加组件

如果此附加组件为您节省时间或使您的设置更简便，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fflexget%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![建造者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点星 (star) 的人！要点星，请点击下图，之后它会出现在右上角。感谢！_

[![@alexbelgium/hassio-addons 仓库星标者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量走势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/flexget/stats.png)

## 关于

[FlexGet](https://flexget.com/) 是一个用于您所有媒体的多功能自动化工具。它可以支持比特种子 (torrents)、NZBs、播客、漫画、电视、电影、RSS、HTML、CSV 以及更多。

核心功能：
- 拥有 300+ 插件的强大插件系统
- RSS 订阅处理与过滤
- 与下载客户端集成的支持
- Web 界面管理
- 定期任务和守护进程模式

## 安装

此附加组件的安装非常直接，与其他附加组件的安装没有区别。

1. 将我设置的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或者如果您已配置了 HA，可以点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的“添加附加组件仓库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储您的配置。
1. 将附加组件的选项设置为您的偏好设置
1. 启动附加组件。
1. 检查附加组件的日志以确认一切正常。
1. 打开 WebUI 并调整软件选项

## 配置

使用附加组件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

WebUI 可访问于 <http://homeassistant:5050>。
默认密码：`homeassistant123`（可通过附加组件选项更改）。

### 设置步骤

1. 启动附加组件后访问 Web 界面
2. 创建或编辑您的 FlexGet 配置文件
3. 设置 RSS 订阅和下载源
4. 为下载客户端配置输出插件
5. 测试配置并启用定时任务

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `0` | 文件权限分组 ID |
| `PUID` | int | `0` | 文件权限用户 ID |
| `WebuiPass` | str | `homeassistant123` | Web 界面密码 |
| `FG_PLUGINS` | str | | 安装的附加插件 |
| `FG_LOG_LEVEL` | list | | 日志级别 (critical/error/warning/info/verbose/debug/trace) |

### 配置示例

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

有关完整配置文档，请见：https://flexget.com/Configuration

## 安全

`WebuiPass` 选项默认值为 `homeassistant123`。任何能访问 5050 端口并知道密码的人都可以登录 Web 界面更改任务，这可以运行命令。请在附加组件选项中更改它。附加组件在启动时仍使用默认值时会在启动日志中打印警告。

## 支持

如果您在安装中遇到问题，请确保查看 GitHub。

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
