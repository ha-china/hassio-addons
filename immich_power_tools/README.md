# Home Assistant 插件：Immich 功率工具


我在业余时间维护这个以及其他 Home Assistant 插件：跟踪上游变更、Home Assistant 变更以及在实际硬件上进行测试都需要花费大量的时间（以及一些金钱）。我经常使用我 >110 个插件中的 5-10 个，所以我安装了测试机器（并购买了一些我自己不使用的测试服务，如 vpn），用于故障排除和改进插件。

如果这个插件为您节省了时间或使您的设置变得更简单，我将非常感激您的支持！

[![给我买杯咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_power_tools%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_power_tools%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fimmich_power_tools%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点赞的人！要点赞，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![Stargazers 仓库清单 for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/immich_power_tools/stats.png)

## 关于

[Immich 功率工具](https://github.com/varun-raj/immich-power-tools) 提供了组织和管理您的 Immich 照片库的高级工具。此插件通过强大的功能扩展了 Immich 的能力，包括照片组织、分析和管理的功能。

主要功能：
- 高级照片组织工具
- 批量操作以管理照片
- 基于 AI 的照片分析和标记
- 结合 Google Maps 的地理照片映射
- 重复项检测和管理
- 先进的搜索和过滤功能

此插件基于 [immich-power-tools](https://github.com/varun-raj/immich-power-tools) 项目。

## 配置

Webui 可在 `<your-ip>:8001` 找到。

### 选项

| 选项 | 类型 | 默认 | 描述 |
|--------|------|---------|-------------|
| `IMMICH_URL` | str | **必需** | 内部 Immich 服务器 URL（例如，`http://homeassistant:3001`） |
| `EXTERNAL_IMMICH_URL` | str | **必需** | 用于浏览器访问的外部 Immich 服务器 URL |
| `IMMICH_API_KEY` | str | **必需** | Immich 身份验证的 API 密钥 |
| `DB_HOST` | str | **必需** | 数据库主机名（例如，`core-mariadb` 或 `homeassistant`） |
| `DB_USERNAME` | str | **必需** | 数据库用户名 |
| `DB_PASSWORD` | str | **必需** | 数据库密码 |
| `DB_DATABASE_NAME` | str | **必需** | 数据库名（通常为 `immich`） |
| `DB_PORT` | str | **必需** | 数据库端口（通常为 `5432` 用于 PostgreSQL） |
| `GOOGLE_MAPS_API_KEY` | str | | 用于地理功能的 Google Maps API 密钥 |
| `GEMINI_API_KEY` | str | | 用于 AI 功能的 Google Gemini API 密钥 |

### 示例配置

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

### 先决条件

在使用此插件之前，请确保您有以下条件：

1. **Immich 服务器运行** - 此插件需要一个运行的 Immich 安装
2. **数据库访问** - 您需要直接访问您的 Immich 数据库
3. **Immich API 密钥** - 从您的 Immich 管理面板生成 API 密钥

### 获取 API 密钥

**Immich API 密钥**：
1. 打开您的 Immich 网络界面
2. 前往 **管理** > **API 密钥**
3. 点击 **创建 API 密钥**
4. 复制生成的密钥

**Google Maps API 密钥**（可选）：
1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建一个新的项目或选择一个现有项目
3. 启用 Maps JavaScript API
4. 创建凭据（API 密钥）

**Google Gemini API 密钥**（可选）：
1. 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)
2. 为 Gemini 创建一个新的 API 密钥

### 自定义脚本和环境变量

此插件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项来传递额外的环境变量（使用大写或小写名称）。有关详细信息，请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

此插件的安装相当简单，与安装任何其他 Hass.io 插件没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在监督器插件存储的右上角，或点击下面的按钮如果您已配置了 HA）
   [![打开您的 Home Assistant 实例并显示具有特定仓库 URL 预填充的添加插件仓库对话框](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
2. 配置所有必需的数据库和 API 设置。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动插件。
5. 检查插件的日志以查看一切是否顺利。
6. 打开 WebUI 以开始使用功率工具。

## 支持

在 GitHub 上创建一个问题，或在 [home assistant 社区论坛](https://community.home-assistant.io/) 上提问。

有关 Immich 功率工具的更多信息，请访问：https://github.com/varun-raj/immich-power-tools

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
