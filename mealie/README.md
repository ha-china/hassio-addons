# Hass.io 添加组件：Mealie

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

警告：仅支持 armv7 到 0.4.3 版本！它将不会在后续版本中更新

_感谢所有给我的仓库加星标的人！要加星标，请点击下面的图片，然后它将出现在右上角。谢谢！_

[![加星标仓库](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/mealie/stats.png)

## 关于

Mealie 是一个自托管的食谱管理和餐计划系统，具有 REST API 后端和基于 Vue 的响应式前端应用程序，为整个家庭提供愉快的用户体验。
这个 Mealie 1.0 的添加组件基于 hendrix04 的 [docker 镜像](https://hub.docker.com/r/hendrix04/mealie-combined)。
这个添加组件基于 hay-kot 的 [docker 镜像](https://hub.docker.com/r/hkotel/mealie)。

## 配置

Web UI 可以在 <http://homeassistant:PORT> 或通过入口栏访问。
配置可以通过应用程序的 Web UI 进行，但以下选项除外。

- 启动添加组件。稍等片刻并检查日志中的任何错误。
- 默认凭证：
  - 用户名：changeme@example.com
  - 密码：MyPassword

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|-------|
| `PGID` | 整数 | `1000` | 文件权限的组 ID |
| `PUID` | 整数 | `1000` | 文件权限的用户 ID |
| `ssl` | 布尔值 | `false` | 为 Web 界面启用 HTTPS |
| `certfile` | 字符串 | `fullchain.pem` | SSL 证书文件（必须位于 /ssl） |
| `keyfile` | 字符串 | `privkey.pem` | SSL 密钥文件（必须位于 /ssl） |
| `BASE_URL` | 字符串 | | 可选的外部基本 URL |
| `DATA_DIR` | 字符串 | `/config` | 数据目录路径 |
| `ALLOW_SIGNUP` | 布尔值 | `true` | 允许新用户注册 |

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

这个添加组件通过 `addon_config` 映射支持自定义脚本和环境变量：

- **自定义脚本**：参见 [在添加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [为你的添加组件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

你可以通过创建 `/homeassistant/addons_config/xxx-mealie/config.yaml` 来添加环境变量。

完整的选项列表可以在以下链接找到：https://nightly.mealie.io/documentation/getting-started/installation/backend-config/

## 与 HA 集成

### 详细信息（感谢 @michelangelonz）

创建一个 RESTful 传感器

```yaml
sensor:
  - platform: rest
    resource: "http://###.###.#.#:9090/api/groups/mealplans/today"
    method: GET
    name: Mealie todays meal
    headers:
      Authorization: Bearer <在此处放入授权信息>
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

添加一个通用摄像头以获取图像
http://###.###.#.#:9090/api/media/recipes/{{ state_attr('sensor.mealie_todays_meal', 'id') }}/images/min-original.webp

### 全局信息

阅读这里：https://hay-kot.github.io/mealie/documentation/community-guide/home-assistant/

## 安装

这个添加组件的安装非常简单，与安装任何其他 Hass.io 添加组件没有区别。

1. [将我的 Hass.io 添加组件仓库][repository] 添加到你的 Hass.io 实例。
1. 安装这个添加组件。
1. 点击 `保存` 按钮以保存你的配置。
1. 启动添加组件。
1. 检查添加组件的日志以查看一切是否正常。
1. 仔细配置添加组件以满足你的偏好，参见官方文档。

## 支持

如果你在安装过程中遇到问题，请确保查看 GitHub。

[repository]: https://github.com/alexbelgium/hassio-addons
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
