# Hass.io 附加组件：Tandoor 食谱

我在空闲时间维护此及其他 Home Assistant 附加组件：跟上上游的变更、HA 的变更以及确实在真实硬件上的测试需要大量时间（以及一些金钱）。由于我有超过 110 个附加组件，但只使用其中 5-10 个，所以我定期安装测试机（并购买一些我自己不使用的测试服务，例如 vpn），以便调试和改进附加组件。

如果这个附加组件能为您节省时间或使您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_谢谢大家为我仓库星标！要星标它，请点击下方的图片，然后它将被放置在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演进](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tandoor_recipes/stats.png)

## 关于

[Tandoor 食谱](https://github.com/TandoorRecipes/recipes) 由 [vabene1111](https://github.com/vabene1111) 制作，旨在供拥有大量想与家人朋友分享的食谱，或 simply 以优雅有序的方式存储它们的人使用。虽然存在基本权限系统，但该应用程序并非 meant 作为公开页面运行。

## 配置

使用附加组件的 `env_vars` 选项传递额外的环境变量（支持大写或小写的名称）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web 界面可通过 <http://homeassistant:PORT> 访问，或通过侧边栏使用 Ingress 访问。

除了以下选项外，可以通过应用 Web 界面进行配置。

有关 Ingress 支持，请参阅：https://community.home-assistant.io/t/ingress-access-for-tandoor-recipes/717859
完整文档：https://docs.tandoor.dev/install/docker/

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `SECRET_KEY` | str | `YOUR_SECRET_KEY` | **必填**：用于安全的 Django secret key |
| `ALLOWED_HOSTS` | str | | **必填**：供 Ingress 使用的逗号分隔 Home Assistant URL |
| `DB_TYPE` | list | `sqlite` | 数据库类型 (sqlite 或 postgresql_external) |
| `DEBUG` | list | `0` | 调试模式 (0=正常，1=调试) |
| `externalfiles_folder` | str | | 外部食谱文件导入的文件夹 |
| `POSTGRES_HOST` | str | | PostgreSQL 主机 (postgresql_external 时必需) |
| `POSTGRES_PORT` | str | | PostgreSQL 端口 (postgresql_external 时必需) |
| `POSTGRES_USER` | str | | PostgreSQL 用户名 (postgresql_external 时必需) |
| `POSTGRES_PASSWORD` | str | | PostgreSQL 密码 (postgresql_external 时必需) |
| `POSTGRES_DB` | str | | PostgreSQL 数据库名称 (postgresql_external 时必需) |
| `AI_MODEL_NAME` | str | | 用于配置 LLMs，支持的提供商可在 [此处](https://docs.litellm.ai/docs/providers/) 找到 |
| `AI_API_KEY` | str | | 访问 LLMs 的 API 密钥 |
| `AI_RATELIMIT` | str | | LLM 访问率限制，使用 [DRF 语法](https://www.django-rest-framework.org/api-guide/throttling/) 指定 |

### 配置示例

```yaml
SECRET_KEY: "your-very-long-secret-key-here"
ALLOWED_HOSTS: "homeassistant.local,192.168.1.100"
DB_TYPE: "sqlite"
DEBUG: "0"
externalfiles_folder: "/config/addons_config/tandoor_recipes/externalfiles"
# 用于外部 PostgreSQL:
# POSTGRES_HOST: "core-postgres"
# POSTGRES_PORT: "5432"
# POSTGRES_USER: "tandoor"
# POSTGRES_PASSWORD: "secure_password"
# POSTGRES_DB: "tandoor_recipes"
# AI_MODEL_NAME: "anthropic/claude-4"
# AI_API_KEY: "SECRET KEY"
```

## 安装

此附加组件的安装非常简单，与其他 Hass.io 附加组件的安装没有区别。

1. 将我的附加组件仓库添加到 Home Assistant 实例（在 supervisor 附加组件商店右上角，或者如果您已配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加附加组件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动附加组件。
1. 检查附加组件的日志，以查看一切是否正常。
1. 仔细根据您的偏好配置附加组件，请查看官方文档。

## 支持

如果您的安装有问题，请放心检查 GitHub。

## 截图

![image](https://github.com/TandoorRecipes/recipes/raw/develop/docs/preview.png)

[repository]: https://github.com/alexbelgium/hassio-addons

## 外部食谱文件

目录 `/config/addons_config/tandoor_recipes/externalfiles` 可用于将外部文件导入 Tandoor。您可以在 Docker 内部将其映射到`/opt/recipes/externalfiles`。
根据此处指示：https://docs.tandoor.dev/features/external_recipes/

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
