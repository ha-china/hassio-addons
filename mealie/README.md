# Hass.io 插件：Melvie

我在空闲时间维护和开发其他 Home Assistant 插件：跟进上游更改、适配 Home Assistant 更新以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我大约使用我超过 110 个插件中的 5-10 个，所以我频繁地安装测试机（并购买一些我自己不使用的测试服务，如 VPN）来调试和改进这些插件。

如果这个插件能为您节省时间或使您的设置更简单，我会非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

警告：armv7 架构仅支持至 0.4.3 版本！后续版本将不再更新。

_感谢所有为我仓库 starred 的人！想 starred 它，请点击下方的图片，然后它将出现在右上角。感谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/mealie/stats.png)

## 简介

Melvie 是一个自托管的食谱管理器和膳食计划器，拥有 REST API 后端和一个使用 Vue 构建的响应式前端应用，为整个家庭提供愉悦的用户体验。
此插件基于 hendrix04 合并的 [Docker 镜像](https://hub.docker.com/r/hendrix04/mealie-combined)，适用于 melvie 1.0。
此插件基于 hay-kot 的 [Docker 镜像](https://hub.docker.com/r/hkotel/mealie)。

## 配置

Web UI 可访问 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问。
除了以下选项外，其他配置均可通过应用 Web UI 完成。

- 启动插件。等待一段时间，并在日志中检查错误。
- 默认凭据：
  - 用户名：changeme@example.com
  - 密码：MyPassword

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `ssl` | bool | `false` | 启用 Web 接口的 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl 目录） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl 目录） |
| `BASE_URL` | str | | 可选的外部基础 URL |
| `DATA_DIR` | str | `/config` | 数据目录路径 |
| `ALLOW_SIGNUP` | bool | `true` | 允许新用户注册 |
| `login_with_ha_user` | bool | `true` | 通过 Ingress 使用 Home Assistant 用户名登录 |

要为受信任的反向代理配置 Gunicorn 的 `--forwarded-allow-ips` 设置，请在插件配置中手动添加 `FORWARDED_ALLOW_IPS` 条目（以逗号分隔的 IP 地址）。这是可选的，并在默认选项标签中隐藏。例如：`FORWARDED_ALLOW_IPS: "192.168.1.1,10.0.0.1"`

### 示例配置

```yaml
PGID: 1000
PUID: 1000
ssl: false
certfile: "fullchain.pem"
keyfile: "privkey.pem"
BASE_URL: "https://mealie.mydomain.com"
DATA_DIR: "/config"
ALLOW_SIGNUP: false
```

### 自定义脚本和环境变量

此插件通过 `app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（名称可大写或小写）。详情见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

您可以通过创建 `/homeassistant/addons_config/xxx-mealie/config.yaml` 来添加环境变量。

完整的选项列表见此链接：https://nightly.mealie.io/documentation/getting-started/installation/backend-config/

### 使用您的 Home Assistant 用户登录

默认开启 `login_with_ha_user` 时，Ingress 面板会自动将您登录为 Melvie 用户（其用户名与您的 Home Assistant 用户名匹配）。它使用 Melvie 的 [反向代理认证](https://mealie.io/documentation/getting-started/installation/backend-config/#reverse-proxy-auth)，带由 Home Assistant Ingress 发送的 `X-Remote-User-Name` 请求头。

- 如果 Melvie 没有该用户名的账户，将显示正常登录页面。若要自动创建该用户，请将 `REVERSE_PROXY_AUTH_SIGNUP_ENABLED` 设置为 `true` 添加到 `env_vars` 选项。
- 匹配是大小写不敏感的，也接受 Melvie 用户的邮箱地址。
- 任何能够打开该面板的 Home Assistant 用户都将获得匹配的 Melvie 账户，包括管理员。
- 只有 Ingress 可以这样登录：它在每次启动时发送一个给 Melvie 的秘密，因此通过默认 Web 端口（9090）的直接请求始终会进行正常的 Melvie 登录。
- 设置 `login_with_ha_user: false` 可关闭此功能。

## 与 Home Assistant 的集成

### 详细信息（感谢 @michelangelonz）

创建 REST 传感器

```yaml
sensor:
  - platform: rest
    resource: "http://###.###.#.#:9090/api/groups/mealplans/today"
    method: GET
    name: Mealie todays meal
    headers:
      Authorization: Bearer <put  auth here>
    value_template: "{{ value_json.value }}"
    json_attributes_path: $..recipe
    json_attributes:
      - name
      - id
      - totalTime
      - prepTime
      - performTime
      - description
      - slug
```

从属性创建模板传感器

```yaml
- name: TodaysDinner
  unique_id: sensor.TodaysDinner
  state: "{{ state_attr('sensor.mealie_todays_meal', 'name') }}"
- name: TodaysDinnerDescription
  unique_id: sensor.DinnerDescription
  state: "{{ state_attr('sensor.mealie_todays_meal', 'description') }}"
- name: TodaysDinnerSlug
  unique_id: sensor.DinnerSlug
  state: "{{ state_attr('sensor.mealie_todays_meal', 'slug') }}"
- name: TodaysDinnerID
  unique_id: sensor.DinnerID
  state: "{{ state_attr('sensor.mealie_todays_meal', 'id') }}"
```

添加通用摄像头以显示图片
http://###.###.#.#:9090/api/media/recipes/{{ state_attr('sensor.mealie_todays_meal', 'id') }}/images/min-original.webp

### 全局信息

请访问：https://hay-kot.github.io/mealie/documentation/community-guide/home-assistant/

## 安装

此插件的安装非常简单，与其他 Hass.io 插件的安装方式没有区别。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 Supervisor 插件商店顶部右侧，或者如果您配置了 Ha，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填装的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 启动该插件。
1. 检查插件日志以查看是否一切正常。
1. 仔细根据您的偏好配置插件，具体请参考官方文档。

## 支持

如果您在安装过程中遇到问题，请确保检查 GitHub。

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
