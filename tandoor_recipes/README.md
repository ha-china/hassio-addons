# Hass.io 附加组件：Tandoor 食谱

我非常乐意在我的空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更新、Home Assistant 社区更新以及在真实硬件上进行测试需要花费大量时间（甚至一些金钱）。我使用了大约 110 个附加组件中的 5-10 个，因此我经常安装测试机器（并购买一些我自己不使用的测试服务，如 VPN），以便进行故障排除和改进附加组件。

如果这个附加组件为您节省时间或使您的设置变得更加简单，我将对您的支持表示非常感谢！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库星标！要给它星标请点击下方的图片，它将在右上角显示。非常感谢！_

[![TandorRecipes/recipes repo 星标人员名单](https://raw.githubusercontent.com/TandoorRecipes/recipes/develop/docs/repo%20roster%20avatar%20big.png)](https://github.com/TandoorRecipes/recipes/stargazers)

![下载量变化](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tandoor_recipes/stats.png)

## 关于项目

[Tandoor 食谱](https://github.com/TandoorRecipes/recipes) 是由 [vabene1111](https://github.com/vabene1111) 制作的，旨在适用于想要与家人朋友分享食谱的收藏，或者 simply 以优美有序的方式存储食谱的人。存在基本的权限系统，但此应用程序不意味着作为公共页面运行。

## 配置

使用附加组件的 `env_vars` 选项来传递额外的环境变量（大写或小写均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详细信息。

Web 界面可以通过 <http://homeassistant:PORT> 访问或通过侧边栏使用 Ingress 访问。
除了以下选项外，配置可以通过应用程序 Web 界面完成。

有关 Ingress 支持的详细信息，请访问：https://community.home-assistant.io/t/ingress-access-for-tandoor-recipes/717859
完整文档：https://docs.tandoor.dev/install/docker/

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `SECRET_KEY` | str | `YOUR_SECRET_KEY` | **必需**：Django 安全密钥 |
| `ALLOWED_HOSTS` | str | | **必需**：用于 Ingress 的 Home Assistant 逗号分隔 URL |
| `DB_TYPE` | list | `sqlite` | 数据库类型 (sqlite 或 postgresql_external) |
| `DEBUG` | list | `0` | 调试模式 (0=普通，1=调试) |
| `externalfiles_folder` | str | | 外部食谱文件导入的文件夹 |
| `POSTGRES_HOST` | str | | PostgreSQL 主机名 (postgresql_external 需要) |
| `POSTGRES_PORT` | str | | PostgreSQL 端口 (postgresql_external 需要) |
| `POSTGRES_USER` | str | | PostgreSQL 用户名 (postgresql_external 需要) |
| `POSTGRES_PASSWORD` | str | | PostgreSQL 密码 (postgresql_external 需要) |
| `POSTGRES_DB` | str | | PostgreSQL 数据库名称 (postgresql_external 需要) |
| `AI_MODEL_NAME` | str | | 用于配置 LLM，支持的提供商可在 [这里](https://docs.litellm.ai/docs/providers/) 找到 |
| `AI_API_KEY` | str | | 访问 LLM 的 API 密钥 |
| `AI_RATELIMIT` | str | | LLM 的限速，使用 [DRF 语法](https://www.django-rest-framework.org/api-guide/throttling/) 指定 |

### 示例配置

```yaml
SECRET_KEY: "your-very-long-secret-key-here"
ALLOWED_HOSTS: "homeassistant.local,192.168.1.100"
DB_TYPE: "sqlite"
DEBUG: "0"
externalfiles_folder: "/config/addons_config/tandoor_recipes/externalfiles"
# 对于外部 PostgreSQL:
# POSTGRES_HOST: "core-postgres"
# POSTGRES_PORT: "5432"
# POSTGRES_USER: "tandoor"
# POSTGRES_PASSWORD: "secure_password"
# POSTGRES_DB: "tandoor_recipes"
# AI_MODEL_NAME: "anthropic/claude-4"
# AI_API_KEY: "SECRET KEY"
```

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式没有太大不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 商店的右上角，或如果您已配置好的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示添加附加组件仓库对话框，并预填充特定仓库 URL](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以保存配置。
4. 启动附加组件。
5. 查看附加组件日志以查看一切是否顺利。
6. 根据您的偏好仔细配置附加组件，请访问官方文档了解更多。

## 支持

如果您在安装过程中遇到问题，请确保检查 GitHub。

## 截图

![image](https://github.com/TandoorRecipes/recipes/raw/develop/docs/preview.png)

[repository]: https://github.com/alexbelgium/hassio-addons

## 外部食谱文件
目录 `/config/addons_config/tandoor_recipes/externalfiles` 可用于将外部文件导入到 Tandoor。您可以将其映射到 Docker 内的 `/opt/recipes/externalfiles`。
按照以下指示：https://docs.tandoor.dev/features/external_recipes/

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
