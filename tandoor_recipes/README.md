# Hass.io Add-ons: Tandoor recipes

我利用业余时间维护这些Home Assistant插件，包括跟进上游变更、Home Assistant的变更以及在真实硬件上测试，这需要大量时间（和一些金钱）。我大约使用我超过110个插件中的5-10个，因此我安装了一些用于调试和改进插件的测试机器（以及购买了一些我自己不使用的测试服务，如VPN）。

如果这个插件能为您节省时间或简化您的设置，我将非常感谢您的支持！

[![请给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！点击下面的图片点赞，它就会出现在右上角。谢谢！_

[![@alexbelgium/hassio-addons的星标者仓库名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tandoor_recipes/stats.png)

## 关于

[Tandoor recipes](https://github.com/TandoorRecipes/recipes)，由 [vabene1111](https://github.com/vabene1111) 制作，旨在为那些希望与家人和朋友分享食谱或简单以整齐的方式存储食谱的人们。一个基本的权限系统存在，但这个应用并不打算作为公共页面运行。

## 配置

使用插件的 `env_vars` 选项传递额外的环境变量（名称大小写均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui可以在 <http://homeassistant:PORT> 或通过Ingress在侧边栏中找到。
配置可以通过应用WebUI进行，除了以下选项。

对于Ingress支持，请参考：https://community.home-assistant.io/t/ingress-access-for-tandoor-recipes/717859
完整文档：https://docs.tandoor.dev/install/docker/

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `SECRET_KEY` | 字符串 | `YOUR_SECRET_KEY` | **必需**：Django密钥，用于安全 |
| `ALLOWED_HOSTS` | 字符串 | | **必需**：用逗号分隔的Home Assistant URL，用于Ingress |
| `DB_TYPE` | 列表 | `sqlite` | 数据库类型（sqlite或postgresql_external） |
| `DEBUG` | 列表 | `0` | 调试模式（0=正常，1=调试） |
| `externalfiles_folder` | 字符串 | | 外部食谱文件导入的文件夹 |
| `POSTGRES_HOST` | 字符串 | | PostgreSQL主机（postgresql_external所需） |
| `POSTGRES_PORT` | 字符串 | | PostgreSQL端口（postgresql_external所需） |
| `POSTGRES_USER` | 字符串 | | PostgreSQL用户名（postgresql_external所需） |
| `POSTGRES_PASSWORD` | 字符串 | | PostgreSQL密码（postgresql_external所需） |
| `POSTGRES_DB` | 字符串 | | PostgreSQL数据库名（postgresql_external所需） |
| `AI_MODEL_NAME` | 字符串 | | 用于配置LLMs，支持的提供者可以在 [这里](https://docs.litellm.ai/docs/providers/) 找到 |
| `AI_API_KEY` | 字符串 | | 访问LLMs的API密钥 |
| `AI_RATELIMIT` | 字符串 | | LLM访问的速率限制，使用 [DRF语法](https://www.django-rest-framework.org/api-guide/throttling/) 指定 |

### 示例配置

```yaml
SECRET_KEY: "your-very-long-secret-key-here"
ALLOWED_HOSTS: "homeassistant.local,192.168.1.100"
DB_TYPE: "sqlite"
DEBUG: "0"
externalfiles_folder: "/config/addons_config/tandoor_recipes/externalfiles"
# 对于外部PostgreSQL：
# POSTGRES_HOST: "core-postgres"
# POSTGRES_PORT: "5432"
# POSTGRES_USER: "tandoor"
# POSTGRES_PASSWORD: "secure_password"
# POSTGRES_DB: "tandoor_recipes"
# AI_MODEL_NAME: "anthropic/claude-4"
# AI_API_KEY: "SECRET KEY"
```

## 安装

这个插件的安装非常简单，与其他Hass.io插件的安装方式相同。

1. [将我的Hass.io插件仓库][repository]添加到您的Hass.io实例。
2. 安装这个插件。
3. 点击 `保存` 按钮以保存您的配置。
4. 启动插件。
5. 检查插件的日志，查看是否一切正常。
6. 仔细配置插件以满足您的需求，请参考官方文档进行配置。

## 支持

如果您在安装中遇到问题，请务必查看github。

## 截图

![image](https://github.com/TandoorRecipes/recipes/raw/develop/docs/preview.png)

[repository]: https://github.com/alexbelgium/hassio-addons

## 外部食谱文件
目录 /config/addons_config/tandoor_recipes/externalfiles 可用于导入外部文件到Tandoor。您可以将其映射到 Docker 中的 /opt/recipes/externalfiles。
按照这里指示：https://docs.tandoor.dev/features/external_recipes/
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
