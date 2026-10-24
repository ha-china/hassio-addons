# Home assistant 插件：Immich Power Tools

我在空闲时间维护此及其他 Home Assistant 插件：跟进上游变更、HA 变更的同步，以及在真实硬件上进行测试需要大量时间（和一些金钱）。我大约使用了我的 110 多个插件中的 5-10 个，因此定期安装测试机器（并购买一些测试服务，如 vpn），但我不亲自使用这些，以便 troubleshoot 和 improve 插件。

如果此插件为您节省时间或使您的设置更简单，我将不胜感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_power_tools%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_power_tools%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_power_tools%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家为我 repo 星标！要星标，请点击下图，它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_power_tools/stats.png)

## 简介

[Immich Power Tools](https://github.com/varun-raj/immich-power-tools) 为管理和组织您的 Immich 相册库提供高级工具。此插件为 Immich 的相机功能增添了强大的相机组织、分析和管理功能。

主要功能：
- 高级相机组织工具
- 批量操作以管理相机
- AI 驱动的相机分析和标签
- 集成 Google Maps 的相机地理位置映射
- 重复检测和管理工作
- 高级搜索和过滤功能

此插件基于 [immich-power-tools](https://github.com/varun-raj/immich-power-tools) 项目。

## 配置

Webui 位于 `<your-ip>:8001`。

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `IMMICH_URL` | str | **Required** | 内部 Immich 服务器 URL（例如 `http://homeassistant:3001`） |
| `EXTERNAL_IMMICH_URL` | str | **Required** | 用于浏览器访问的外部 Immich 服务器 URL |
| `IMMICH_API_KEY` | str | **Required** | Immich API 密钥用于认证 |
| `DB_HOST` | str | **Required** | 数据库主机名（例如 `core-mariadb` 或 `homeassistant`） |
| `DB_USERNAME` | str | **Required** | 数据库用户名 |
| `DB_PASSWORD` | str | **Required** | 数据库密码 |
| `DB_DATABASE_NAME` | str | **Required** | 数据库名称（通常为 `immich`） |
| `DB_PORT` | str | **Required** | 数据库端口（通常为 PostgreSQL 的 `5432`） |
| `GOOGLE_MAPS_API_KEY` | str | | 用于地理功能的 Google Maps API 密钥 |
| `GEMINI_API_KEY` | str | | 用于 AI 功能的 Google Gemini API 密钥 |

### Example Configuration

```yaml
IMMICH_URL: "http://homeassistant:3001"
EXTERNAL_IMMICH_URL: "https://your-immich-domain.com"
IMMICH_API_KEY: "your-immich-api-key-here"
DB_HOST: "core-mariadb"
DB_USERNAME: "immich"
DB_PASSWORD: "your-db-password"
DB_DATABASE_NAME: "immich"
DB_PORT: "5432"
GOOGLE_MAPS_API_KEY: "your-google-maps-api-key"
GEMINI_API_KEY: "your-gemini-api-key"
```

### Prerequisites

在使用此插件之前，请确保您有：

1. **Immich server running** - 此插件需要一个工作的 Immich 安装
2. **Database access** - 您需要直接访问您的 Immich 数据库
3. **Immich API key** - 从 Immich 管理员面板生成 API 密钥

### Getting API Keys

**Immich API Key:**
1. 打开您的 Immich web 界面
2. 前往 **Administration** > **API Keys**
3. 点击 **Create API Key**
4. 复制生成的键

**Google Maps API Key** (optional):
1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 Maps JavaScript API
4. 创建凭据 (API 密钥)

**Google Gemini API Key** (optional):
1. 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 为 Gemini 创建新 API 密钥

### Custom Scripts and Environment Variables

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **Custom scripts**: 查看 [Running Custom Scripts in Addons](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars option**: 使用插件 `env_vars` 选项传递额外的环境变量（大小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## Installation

此插件的安装非常简单，与安装任何其他 Hass.io 插件不同。

1. 将我的插件仓库添加到您的 home assistant 实例（在 supervisor addons store 右上角，或在您已配置我的 HA 的情况下点击下图)
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 配置所有所需的数据库和 API 设置。
1. 点击 `Save` 按钮存储您的配置。
1. 启动插件。
1. 检查插件日志以查看是否一切顺利。
1. 打开 WebUI 开始使用功率工具。

## Support

在 github 上创建 issue，或在 [home assistant community forum](https://community.home-assistant.io/) 上提问

有关 Immich Power Tools 的更多信息，请访问：https://github.com/varun-raj/immich-power-tools

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
