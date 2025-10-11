# Hass.io Add-ons: Mealie

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fmealie%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

警告：仅支持armv7版本至0.4.3！后续版本将不再更新

_感谢所有星标我的仓库！要星标它，请点击下面的图片，它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/mealie/stats.png)

## 关于

Mealie是一个自托管食谱管理和餐计划系统，具有RestAPI后端和Vue构建的响应式前端应用程序，为全家人提供愉悦的用户体验。
这个Mealie 1.0的插件基于hendrix04的[合并docker镜像](https://hub.docker.com/r/hendrix04/mealie-combined)。
这个插件基于hay-kot的[docker镜像](https://hub.docker.com/r/hkotel/mealie)。

## 配置

Webui可以在<http://homeassistant:PORT>或通过Ingress侧边栏访问。
配置可以通过应用WebUI进行，除了以下选项。

- 启动插件。稍等片刻并检查日志中的任何错误。
- 默认凭证：
  - 用户名：changeme@example.com
  - 密码：MyPassword

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `PGID` | int | `1000` | 文件权限的组ID |
| `PUID` | int | `1000` | 文件权限的用户ID |
| `ssl` | bool | `false` | 为Web界面启用HTTPS |
| `certfile` | str | `fullchain.pem` | SSL证书文件（必须在/ssl中） |
| `keyfile` | str | `privkey.pem` | SSL密钥文件（必须在/ssl中） |
| `BASE_URL` | str | | 可选的外部基本URL |
| `DATA_DIR` | str | `/config` | 数据目录路径 |
| `ALLOW_SIGNUP` | bool | `true` | 允许新用户注册 |

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

这个插件通过`addon_config`映射支持自定义脚本和环境变量：

- **自定义脚本**：参见[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见[为你的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

你可以通过创建`/homeassistant/addons_config/xxx-mealie/config.yaml`来添加环境变量。

完整的选项列表可以在以下链接找到：https://nightly.mealie.io/documentation/getting-started/installation/backend-config/

## 与HA集成

### 详细信息（感谢@michelangelonz）

创建一个RESTful传感器

```yaml
sensor:
  - platform: rest
    resource: "http://###.###.#.#:9090/api/groups/mealplans/today"
    method: GET
    name: Mealie todays meal
    headers:
      Authorization: Bearer <在这里放入认证信息>
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

添加一个通用摄像头用于图像
http://###.###.#.#:9090/api/media/recipes/{{ state_attr('sensor.mealie_todays_meal', 'id') }}/images/min-original.webp

### 全局信息

在此处阅读：https://hay-kot.github.io/mealie/documentation/community-guide/home-assistant/

## 安装

这个插件的安装非常简单，与安装其他Hass.io插件没有区别。

1. [将我的Hass.io插件仓库][repository]添加到你的Hass.io实例。
2. 安装这个插件。
3. 点击`保存`按钮以保存你的配置。
4. 启动插件。
5. 检查插件的日志以查看是否一切正常。
6. 仔细配置插件以满足你的偏好，请参考官方文档进行配置。

## 支持

如果你在安装中遇到问题，请确保查看github。

[repository]: https://github.com/alexbelgium/hassio-addons