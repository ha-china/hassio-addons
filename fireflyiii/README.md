# Home assistant add-on: fireflyiii

我利用业余时间维护这个Home Assistant插件以及其他插件：跟进上游变化、Home Assistant的变化以及在真实硬件上测试都需要大量时间（并且还需要一些金钱）。我大约使用了我超过110个插件中的5-10个，因此我安装了一些我自己的测试机器（并购买了一些测试服务，例如VPN），以便用于调试和改进插件。

如果这个插件能为您节省时间或使您的设置更简单，我将非常感谢您的支持！

[![给我买咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后它将在右上角。谢谢！_

[![@alexbelgium/hassio-addons的星标者仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）的个人财务管理工具。它可以帮助您跟踪支出和收入，以便您少花钱多存钱。
这个插件基于以下Docker镜像：https://hub.docker.com/r/fireflyiii/core

## 配置

使用插件的`env_vars`选项来传递额外的环境变量（名称可以是大小写）。详情请参阅：https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui可以在<http://homeassistant:PORT>或通过Ingress在侧边栏中找到。
配置可以通过应用WebUI进行，除了以下选项。

**⚠️ 重要提示**：在首次启动前更改您的`APP_KEY`！您将无法在不重置数据库的情况下更改它。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `APP_KEY` | 字符串 | `CHANGEME_32_CHARS_EuC5dfn3LAPzeO` | **关键**：32位加密密钥 - 首次运行前更改！ |
| `CONFIG_LOCATION` | 字符串 | `/config/addons_config/fireflyiii/config.yaml` | 额外配置文件的位置 |
| `DB_CONNECTION` | 列表 | `sqlite_internal` | 数据库类型（sqlite_internal/mariadb_addon/mysql/pgsql） |
| `DB_HOST` | 字符串 | | 数据库主机（用于外部数据库） |
| `DB_PORT` | 字符串 | | 数据库端口（用于外部数据库） |
| `DB_DATABASE` | 字符串 | | 数据库名称（用于外部数据库） |
| `DB_USERNAME` | 字符串 | | 数据库用户名（用于外部数据库） |
| `DB_PASSWORD` | 字符串 | | 数据库密码（用于外部数据库） |
| `Updates` | 列表 | | 自动更新计划（每小时/每天/每周） |
| `silent` | 布尔值 | `true` | 静默模式 - 设置为false以获取调试信息 |

### 示例配置

```yaml
APP_KEY: "SomeRandomStringOf32CharsExactly"
CONFIG_LOCATION: "/config/addons_config/fireflyiii/config.yaml"
DB_CONNECTION: "mariadb_addon"
DB_HOST: "core-mariadb"
DB_PORT: "3306"
DB_DATABASE: "firefly"
DB_USERNAME: "firefly"
DB_PASSWORD: "secure_password"
Updates: "weekly"
silent: false
```

### 高级配置

可以使用config.yaml文件配置额外的环境变量。请参阅：
- [添加环境变量指南](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)
- [完整的Firefly III环境变量](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example)

## 安装

这个插件的安装非常简单，与其他插件的安装方式相同。

1. 将我的插件仓库添加到您的Home Assistant实例中（在supervisor插件商店的右上角，或点击下面的按钮如果您已经配置了我的HA）
   [![打开您的Home Assistant实例并显示添加插件仓库对话框，并预填充特定的仓库URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击`保存`按钮以保存您的配置。
1. 设置插件选项以符合您的偏好。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 打开WebUI并调整软件选项

## 支持

在github上创建问题

## 插图

![插图](https://raw.githubusercontent.com/firefly-iii/firefly-iii/develop/.github/assets/img/imac-complete.png)

[repository]: https://github.com/alexbelgium/hassio-addons
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
