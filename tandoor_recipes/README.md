# Hass.io 添加项：Tandoor 食谱

## 💖 支持开发

我利用业余时间维护这个和其他 Home Assistant 添加项：跟上上游的变更、HA 的变更，并在真实硬件上进行测试，这需要花费大量时间（和一些金钱）。我大约使用我 110 多个添加项中的 5-10 个非常频繁，因此我安装了测试机器（和一些我自己不使用的测试服务，例如 VPN）来排错和改进这些添加项。

如果这个添加项节省了您的时间或使您的设置更简单，我将非常感谢您的支持！

[![请我喝咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 添加项信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ftandoor_recipes%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家给我的仓库加星！要加星，请点击下面的图片，然后它就会在右上角。谢谢！_

[![@alexbelgium/hassio-addons 的星标仓库列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/tandoor_recipes/stats.png)

## 关于

[Tandoor 食谱](https://github.com/TandoorRecipes/recipes)，由 [vabene1111](https://github.com/vabene1111) 制作，旨在为那些希望与家人和朋友分享食谱或简单地以整齐的方式存储食谱的人提供帮助。一个基本的权限系统已经存在，但这个应用程序并非设计为公共页面运行。

## 配置

使用添加项的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。详情请见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Web UI 可以在 <http://homeassistant:PORT> 或通过 Ingress 侧边栏访问。配置可以通过应用 Web UI 进行，除了以下选项。

有关 Ingress 支持的信息，请参阅：https://community.home-assistant.io/t/ingress-access-for-tandoor-recipes/717859
完整文档：https://docs.tandoor.dev/install/docker/

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `SECRET_KEY` | 字符串 | `YOUR_SECRET_KEY` | **必需**：Django 密钥，用于安全 |
| `ALLOWED_HOSTS` | 字符串 | | **必需**：用于 Ingress 的逗号分隔的 Home Assistant URL |
| `DB_TYPE` | 列表 | `sqlite` | 数据库类型（sqlite 或 postgresql_external） |
| `DEBUG` | 列表 | `0` | 调试模式（0=正常，1=调试） |
| `externalfiles_folder` | 字符串 | | 用于外部食谱文件导入的文件夹 |
| `POSTGRES_HOST` | 字符串 | | PostgreSQL 主机（postgresql_external 所需） |
| `POSTGRES_PORT` | 字符串 | | PostgreSQL 端口（postgresql_external 所需） |
| `POSTGRES_USER` | 字符串 | | PostgreSQL 用户名（postgresql_external 所需） |
| `POSTGRES_PASSWORD` | 字符串 | | PostgreSQL 密码（postgresql_external 所需） |
| `POSTGRES_DB` | 字符串 | | PostgreSQL 数据库名称（postgresql_external 所需） |
| `AI_MODEL_NAME` | 字符串 | | 用于配置 LLM，支持提供者可在此处找到 [链接](https://docs.litellm.ai/docs/providers/) |
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

这个添加项的安装非常简单，与其他 Hass.io 添加项的安装方式相同。

1. [将我的 Hass.io 添加项仓库][repository] 添加到您的 Hass.io 实例。
2. 安装这个添加项。
3. 点击 `保存` 按钮来存储您的配置。
4. 启动添加项。
5. 检查添加项的日志，看看是否一切正常。
6. 仔细配置添加项以满足您的偏好，请参阅官方文档了解如何配置。

## 支持

如果您在安装过程中遇到问题，请务必查看 GitHub。

## 截图

![image](https://github.com/TandoorRecipes/recipes/raw/develop/docs/preview.png)

[repository]: https://github.com/alexbelgium/hassio-addons

## 外部食谱文件
目录 /config/addons_config/tandoor_recipes/externalfiles 可用于导入外部文件到 Tandoor。您可以将此映射到 Docker 中的 /opt/recipes/externalfiles。
按照这里的指示：https://docs.tandoor.dev/features/external_recipes/
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
