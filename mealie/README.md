# Hass.io 附加组件：Mealie

我在空闲时间维护此及其他 Home Assistant 附加组件：跟踪上游更新、Home Assistant 的变化以及在真实硬件上进行测试需要耗费大量时间（以及一些金钱）。我使用了超过 110 个附加组件中的 5-10 个，所以我定期安装测试机器（并购买一些测试服务，如 vpn），即使我不亲自使用它们，也用于故障排查和改进附加组件。

如果这个附加组件为您节省了时间或使您的配置更加简便，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![入口端口 (Ingress)](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![架构 (Arch)](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

> **警告**：armv7 架构仅支持到 0.4.3 版本！该架构将不会更新到更新的版本。

_感谢大家为我们仓库点赞！请点击下方的图片来点赞，这样它将会显示在右上方。谢谢！_

[![Star 的仓库成员名单 (Stargazers repo roster) for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/mealie/stats.png)

## 简介

Mealie 是一个自托管的食谱管理器及用餐计划生成器，拥有基于 RestAPI 的后端，以及由 Vue 构建的响应式前端应用程序，为整个家庭提供愉悦的用户体验。
此 mealie 1.0 附加组件基于结合了来自 hendrix04 的 [Docker 镜像](https://hub.docker.com/r/hendrix04/mealie-combined)。
此附加组件也基于来自 hay-kot 的 [Docker 镜像](https://hub.docker.com/r/hkotel/mealie)。

## 配置

Webui 可在 <http://homeassistant:PORT> 访问，或通过使用入口端口 (Ingress) 在侧边栏中访问。
除非特别说明，配置可通过应用 Webui 进行。

- 启动附加组件。等待一段时间，并检查日志以查找任何错误。
- 默认凭据：
  - 用户名：changeme@example.com
  - 密码：MyPassword

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件 (必须位于 /ssl 目录) |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件 (必须位于 /ssl 目录) |
| `BASE_URL` | str | | 可选的外部基础 URL |
| `DATA_DIR` | str | `/config` | 数据目录路径 |
| `ALLOW_SIGNUP` | bool | `false` | 允许新用户注册 |
| `login_with_ha_user` | bool | `true` | 通过入口端口 (Ingress) 使用您的 Home Assistant 用户名登录 |

要配置 Gunicorn 的 `--forwarded-allow-ips` 设置（用于可信任的反向代理），请在您的附加组件配置中手动添加 `FORWARDED_ALLOW_IPS` 选项（以逗号分隔的 IP 地址）。此选项是可选的并且在默认选项标签中隐藏。例如：`FORWARDED_ALLOW_IPS: "192.168.1.1,10.0.0.1"`

### 示例配置文件

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

此附加组件支持通过 `app_config` 映射自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（名称可以是大写或小写）。详见 [https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2) 了解详情。

您可以通过创建 `/homeassistant/addons_config/xxx-mealie/config.yaml` 来添加环境变量。

完整的选项列表可在此找到：https://nightly.mealie.io/documentation/getting-started/installation/backend-config/

### 使用您的 Home Assistant 用户登录

当启用 `login_with_ha_user`（默认开启）时，入口端口 (Ingress) 面板会自动将您登录为 Mealie 用户（其用户名与您的 Home Assistant 用户名匹配）。它使用 Mealie 的 [反向代理认证](https://mealie.io/documentation/getting-started/installation/backend-config/#reverse-proxy-auth) 机制，该机制利用 Home Assistant 入口端口 (Ingress) 发送的 `X-Remote-User-Name` 头部。

- 如果不存在具有该用户名的 Mealie 用户，则显示常规登录页面。如果您想自动创建该用户，请将 `REVERSE_PROXY_AUTH_SIGNUP_ENABLED` 设置为 `true` 并添加到 `env_vars` 选项中。
- 匹配是不区分大小写的，并且也接受 Mealie 用户的电子邮件地址。
- 任何能够访问该面板的 Home Assistant 用户都会获得匹配的 Mealie 账户，包括管理员。
- 只有入口端口 (Ingress) 可以以此方式登录：它在每次启动时向 Mealie 发送一个密钥，因此通过默认的直接 Web 端口 (9090) 发出的请求始终会得到常规的 Mealie 登录页面。
- 设置 `login_with_ha_user: false` 以禁用此功能。

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
      Authorization: Bearer <在此处填入凭据>
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

从属性中创建模板传感器

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

添加通用摄像头以显示图像：
http://###.###.#.#:9090/api/media/recipes/{{ state_attr('sensor.mealie_todays_meal', 'id') }}/images/min-original.webp

### 全球信息

请访问以下页面获取更多信息：https://hay-kot.github.io/mealie/documentation/community-guide/home-assistant/

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装没有不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 supervisor 附加组件商店的右上角，或如果您已配置了我的 HA，请点击下方的按钮）
   [![打开您的 Home Assistant 实例并显示添加附加组件仓库对话框，其中预填充了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动附加组件。
5. 检查附加组件的日志以确认一切是否正常。
6. 仔细根据您的需求配置附加组件，有关官方文档请参阅相关链接。

## 支持

如果您在 installation 过程中遇到问题，请确保检查 GitHub。

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
