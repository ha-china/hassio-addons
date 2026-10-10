# Home Assistant 插件：fireflyiii

我利用空闲时间维护此及其他 Home Assistant 插件：跟踪上游更新、HA 变更以及在实际硬件上进行测试需要大量时间（以及一些费用）。我使用了超过 110 个插件中的 5-10 个，因此我会安装测试机器（并购买一些测试服务，如 vpn）来测试和完善插件，这些机器我自己并不使用。

如果此插件为您节省了时间或使您的设置变得更加简便，您的支持我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标我的仓库的人！要星标它，请点击下方图片，然后它将被显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）的个人财务管理工具。它可以帮助您跟踪支出和收入，让您花得更少，存得更多。
此插件基于 docker 镜像：https://hub.docker.com/r/fireflyiii/core

## 配置

请使用插件的 `env_vars` 选项通过额外的环境变量（大写或小写名称均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可通过 <http://homeassistant:PORT> 访问，或通过侧边栏中的 Ingress 访问。
除以下选项外，其他配置均可通过应用 Web 界面完成。

**⚠️ 重要**：在首次启动前请更改您的 `APP_KEY`！之后将无法更改它，除非重置您的数据库。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `APP_KEY` | str | `CHANGEME_32_CHARS_EuC5dfn3LAPzeO` | **关键**：32 位加密密钥 - 首次运行前必须更改！ |
| `CONFIG_LOCATION` | str | `/config/addons_config/fireflyiii/config.yaml` | 附加配置文件的路径 |
| `DB_CONNECTION` | list | `sqlite_internal` | 数据库类型 (sqlite_internal/mariadb_addon/mysql/pgsql) |
| `DB_HOST` | str | | 数据库主机（用于外部数据库） |
| `DB_PORT` | str | | 数据库端口（用于外部数据库） |
| `DB_DATABASE` | str | | 数据库名称（mariadb_addon 默认为 `firefly`） |
| `DB_USERNAME` | str | | 数据库用户名（如果设置，将覆盖 MariaDB 插件服务发现） |
| `DB_PASSWORD` | str | | 数据库密码（如果设置，将覆盖 MariaDB 插件服务发现） |
| `Updates` | list | | 自动更新计划（每小时/每天/每周） |
| `silent` | bool | `true` | 静默模式 - 设为 false 以获取调试信息 |

### 配置示例

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

可以使用 config.yaml 文件配置额外的环境变量。请参阅：
- [添加环境变量指南](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)
- [完整 Firefly III 环境变量](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example)

## 安装

此插件的安装非常简单，与其他插件的安装没有不同。

1. 将我的插件仓库添加到您的 Home Assistant 实例（在监督器插件商店右上角，或者如果您已配置好我的 HA，请直接点击下方的按钮）
   [![在您的 Home Assistant 实例中打开“添加插件仓库”对话框，并预先填写特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以存储您的配置。
4. 将插件选项设置为您的偏好设置。
5. 启动插件。
6. 检查插件日志，确认是否一切顺利。
7. 打开 Web 界面并根据需要调整软件选项。

## 支持

请在 GitHub 上创建问题。

## 插图

![illustration](https://raw.githubusercontent.com/firefly-iii/firefly-iii/develop/.github/assets/img/imac-complete.png)

[repository]: https://github.com/alexbelgium/hassio-addons

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
