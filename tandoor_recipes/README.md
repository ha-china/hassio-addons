# Hass.io 插件：Tandoor 烹饪食谱

我在业余时间维护这个以及其他 Home Assistant 插件：跟上上游更改、HA 更改以及在真实硬件上进行测试需要花费大量的时间（以及一些金钱）。我经常使用大约 5-10 个我的 >110 个插件，因此我会安装测试机器（并购买一些我自身不使用的测试服务，如 vpn），以便进行故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置变得更加简单，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位为我仓库点星的人！要点星，请点击下面的图片，然后它就会显示在右上角。谢谢！_

[![Stargazers 仓库列表 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tandoor_recipes/stats.png)

## 关于

[Tandoor 烹饪食谱](https://github.com/TandoorRecipes/recipes)，由 [vabene1111](https://github.com/vabene1111) 制作，旨在为那些想要与家人和朋友分享食谱或简单地以良好的组织方式存储食谱的人。存在基本的权限系统，但这个应用程序并不打算作为一个公开页面运行。

## 配置

使用添加 `env_vars` 选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可以在 <http://homeassistant:PORT> 或通过侧边栏使用入口找到。
可以通过应用程序 WebUI 进行配置，除了以下选项之外。

有关入口支持，请参阅：https://community.home-assistant.io/t/ingress-access-for-tandoor-recipes/717859
完整文档：https://docs.tandoor.dev/install/docker/

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|-------|
| `SECRET_KEY` | str | `YOUR_SECRET_KEY` | **必需**：Django 安全密钥 |
| `ALLOWED_HOSTS` | str | | **必需**：逗号分隔的 Home Assistant URL，用于入口 |
| `DB_TYPE` | list | `sqlite` | 数据库类型（sqlite 或 postgresql_external） |
| `DEBUG` | list | `0` | 调试模式（0=正常，1=调试） |
| `externalfiles_folder` | str | | 外部食谱文件导入文件夹 |
| `POSTGRES_HOST` | str | | PostgreSQL 服务器（必需，用于 postgresql_external） |
| `POSTGRES_PORT` | str | | PostgreSQL 端口（必需，用于 postgresql_external） |
| `POSTGRES_USER` | str | | PostgreSQL 用户名（必需，用于 postgresql_external） |
| `POSTGRES_PASSWORD` | str | | PostgreSQL 密码（必需，用于 postgresql_external） |
| `POSTGRES_DB` | str | | PostgreSQL 数据库名（必需，用于 postgresql_external） |
| `AI_MODEL_NAME` | str | | 用于配置 LLM，支持的提供者可以在 [这里](https://docs.litellm.ai/docs/providers/) 找到 |
| `AI_API_KEY` | str | | 访问 LLM 的 API 密钥 |
| `AI_RATELIMIT` | str | | LLM 访问速率限制，使用 [DRF 语法](https://www.django-rest-framework.org/api-guide/throttling/) 指定 |

### 示例配置

```yaml
SECRET_KEY: "your-very-long-secret-key-here"
ALLOWED_HOSTS: "homeassistant.local,192.168.1.100"
DB_TYPE: "sqlite"
DEBUG: "0"
externalfiles_folder: "/config/addons_config/tandoor_recipes/externalfiles"
# For external PostgreSQL:
# POSTGRES_HOST: "core-postgres"
# POSTGRES_PORT: "5432"
# POSTGRES_USER: "tandoor"
# POSTGRES_PASSWORD: "secure_password"
# POSTGRES_DB: "tandoor_recipes"
# AI_MODEL_NAME: "anthropic/claude-4"
# AI_API_KEY: "SECRET KEY"
```

## 安装

此插件的安装非常简单，与安装任何其他 Hass.io 插件没有不同。

1. 将我的插件存储库添加到您的 home assistant 实例中（在右上角的监督器插件存储库中，或点击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定存储库 URL 预填充的添加插件存储库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 仔细配置插件以符合您的喜好，有关详细信息请参阅官方文档。

## 支持

如果您在安装过程中遇到问题，请确保查看 GitHub。

## 截图

![图片](https://github.com/TandoorRecipes/recipes/raw/develop/docs/preview.png)

[repository]: https://github.com/alexbelgium/hassio-addons

## 外部食谱文件
目录 /config/addons_config/tandoor_recipes/externalfiles 可用于将外部文件导入 Tandoor。您可以将此与 Docker 中的 /opt/recipes/externalfiles 进行映射。
有关说明，请参阅：https://docs.tandoor.dev/features/external_recipes/
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
