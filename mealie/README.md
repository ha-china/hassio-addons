# Hass.io 附加组件：Mealie

我利用有空时间在空闲时间维护此及其他 Home Assistant 附加组件：跟上上游更改、HA 更改，以及在真实硬件上测试会耗费大量时间（以及一些金钱）。我使用我 110 多个附加组件中的大约 5-10 个，所以经常安装测试机（并购买一些我自身不使用的测试服务，如 vpn）来 troubleshoot 和改进附加组件

如果此附加组件为您节省时间或使您的设置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referralutm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub 超级 linter](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflows/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

警告：armv7 仅支持到版本 0.4.3！它将不会被更新为后续版本

_感谢所有人给我的仓库加星！要加星请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers 仓库名录 @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/mealie/stats.png)

## 简介

Mealie 是一个自托管食谱管理器和餐单计划器，具有 RestAPI 后端和一个使用 Vue 构建的响应式前端应用程序，为整个家庭提供愉快的用户体验。
此 mealie 1.0 附加组件基于组合的 [Docker 镜像](https://hub.docker.com/r/hendrix04/mealie-combined)（来自 hendrix04）。
此附加组件基于 [Docker 镜像](https://hub.docker.com/r/hkotel/mealie)（来自 hay-kot）。

## 配置

Web 界面位于 <http://homeassistant:PORT> 或通过侧边栏使用 Ingress 访问。
配置可以通过应用程序 Web UI 完成，但以下选项除外：

- 启动附加组件。稍等一会儿，检查日志以查看是否有任何错误。
- 默认凭据：
  - 用户名：changeme@example.com
  - 密码：MyPassword

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `PGID` | int | `1000` | 文件权限的组 ID |
| `PUID` | int | `1000` | 文件权限的用户 ID |
| `ssl` | bool | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | str | `fullchain.pem` | SSL 证书文件（必须位于 /ssl） |
| `keyfile` | str | `privkey.pem` | SSL 私钥文件（必须位于 /ssl） |
| `BASE_URL` | str | | 可选的外部基础 URL |
| `DATA_DIR` | str | `/config` | 数据目录路径 |
| `ALLOW_SIGNUP` | bool | `true` | 允许新用户注册 |

为了配置 Gunicorn 的 `--forwarded-allow-ips` 设置（用于可信反向代理），请将 `FORWARDED_ALLOW_IPS` 条目手动添加到附加组件配置中（逗号分隔的 IP 地址）。这是可选的，并从默认选项选项卡隐藏。例如：`FORWARDED_ALLOW_IPS: "192.168.1.1,10.0.0.1"`

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

此附加组件通过`app_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：请参阅 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件 `env_vars` 选项传递额外环境变量（大写或小写字母名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

您可以通过创建 `/homeassistant/addons_config/xxx-mealie/config.yaml` 来添加环境变量。

完整的选项列表请参阅：https://nightly.mealie.io/documentation/getting-started/installation/backend-config/

## 与 HA 的集成

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

根据属性创建模板传感器

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

请参阅：https://hay-kot.github.io/mealie/documentation/community-guide/home-assistant/

## 安装

此附加组件的安装非常简单，与其他任何 Hass.io 附加组件的安装方式相比没有不同。

1. 将我的附加组件仓库添加到您的 home assistant 实例（在 supervisor 附加组件存储中选择右下角，或者如果您已配置了我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示附加组件存储库对话框，并且预先填写特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击“保存”按钮以存储您的配置。
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否顺利进行。
1. 仔细根据需要配置附加组件，请参阅官方文档以获取详细信息。

## 支持

如果您在安装过程中遇到问题，请确保检查 github。

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
