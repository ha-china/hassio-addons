# Hass.io 扩展：Tandoor 烹饪食谱


我在业余时间维护这个和其他 Home Assistant 扩展：跟上上游变更、HA 变更以及在实际硬件上测试需要花费大量的时间（以及一些金钱）。我经常使用 5-10 个我的 >110 个扩展，所以我安装了测试机器（并购买了一些我自身不使用的测试服务，如 vpn），以便进行故障排除和改进扩展

如果这个扩展为您节省了时间或使您的设置更简单，我会非常感激您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 扩展信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的存储库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tandoor_recipes/stats.png)

## 关于

[Tandoor 烹饪食谱](https://github.com/TandoorRecipes/recipes)，由 [vabene1111](https://github.com/vabene1111) 制作，旨在为那些想要与家人和朋友分享食谱或以良好组织方式存储食谱的人。存在基本的权限系统，但这个应用程序并不是为了作为公共页面运行。

## 配置

使用 `env_vars` 扩展选项来传递额外的环境变量（大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 可在 <http://homeassistant:PORT> 或通过侧边栏使用入口找到。
可以通过应用程序 WebUI 进行配置，但以下选项除外。

有关入口支持，请参阅：https://community.home-assistant.io/t/ingress-access-for-tandoor-recipes/717859
完整文档：https://docs.tandoor.dev/install/docker/

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|-------|
| `SECRET_KEY` | 字符串 | `YOUR_SECRET_KEY` | **必需的**：Django 安全密钥 |
| `ALLOWED_HOSTS` | 字符串 | | **必需的**：逗号分隔的 Home Assistant URLs 用于入口 |
| `DB_TYPE` | 列表 | `sqlite` | 数据库类型（sqlite 或 postgresql_external） |
| `DEBUG` | 列表 | `0` | 调试模式（0=正常，1=调试） |
| `externalfiles_folder` | 字符串 | | 用于外部食谱文件导入的文件夹 |
| `POSTGRES_HOST` | 字符串 | | PostgreSQL 主机（用于 postgresql_external） |
| `POSTGRES_PORT` | 字符串 | | PostgreSQL 端口（用于 postgresql_external） |
| `POSTGRES_USER` | 字符串 | | PostgreSQL 用户名（用于 postgresql_external） |
| `POSTGRES_PASSWORD` | 字符串 | | PostgreSQL 密码（用于 postgresql_external） |
| `POSTGRES_DB` | 字符串 | | PostgreSQL 数据库名称（用于 postgresql_external） |
| `AI_MODEL_NAME` | 字符串 | | 用于配置 LLM，支持的提供者可以在 [这里](https://docs.litellm.ai/docs/providers/) 找到 |
| `AI_API_KEY` | 字符串 | | 访问 LLM 的 API 密钥 |
| `AI_RATELIMIT` | 字符串 | | LLM 访问的速率限制，使用 [DRF 语法](https://www.django-rest-framework.org/api-guide/throttling/) 指定 |

### 示例配置

```yaml
SECRET_KEY: "your-very-long-secret-key-here"
ALLOWED_HOSTS: "homeassistant.local,192.168.1.100"
DB_TYPE: "sqlite"
DEBUG: "0"
externalfiles_folder: "/config/addons_config/tandoor_recipes/externalfiles"
# 对于外部 PostgreSQL：
# POSTGRES_HOST: "core-postgres"
# POSTGRES_PORT: "5432"
# POSTGRES_USER: "tandoor"
# POSTGRES_PASSWORD: "secure_password"
# POSTGRES_DB: "tandoor_recipes"
# AI_MODEL_NAME: "anthropic/claude-4"
# AI_API_KEY: "SECRET KEY"
```

## 安装

此扩展的安装相当简单，与安装任何其他 Hass.io 扩展没有不同。

1. 将我的扩展存储库添加到您的 home assistant 实例中（在监督器扩展存储库的右上角，或单击下面的按钮如果您已配置我的 HA）
   [![打开您的 Home Assistant 实例并显示具有特定存储库 URL 预填充的添加扩展存储库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此扩展。
1. 单击“保存”按钮以存储您的配置。
1. 启动扩展。
1. 检查扩展的日志以查看是否一切顺利。
1. 仔细配置扩展以满足您的喜好，有关详细信息请参阅官方文档。

## 支持

如果您在安装过程中遇到问题，请确保查看 GitHub。

## 截图

![图像](https://github.com/TandoorRecipes/recipes/raw/develop/docs/preview.png)

[存储库](https://github.com/alexbelgium/hassio-addons)

## 外部食谱文件
目录 /config/addons_config/tandoor_recipes/externalfiles 可用于将外部文件导入 Tandoor。您可以将此目录与 Docker 中的 /opt/recipes/externalfiles 映射。
请按照以下说明进行操作：https://docs.tandoor.dev/features/external_recipes/
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
