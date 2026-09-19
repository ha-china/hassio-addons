# Home Assistant 插件：Scrutiny

我利用业余时间维护此 Home Assistant 插件及其他插件：跟踪上游更改（upstream changes）、Home Assistant 更改以及在真实硬件上的测试花费了大量时间（和金钱）。在我使用的 10-5 个插件中（我有 110 多个），我会经常安装测试机器（并购买一些不自行使用的测试服务，如 VPN）以用于故障排除和改进插件。

如果这个插件能为您节省时间或让您的设置更简便，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有星标（star）我的仓库的朋友们！要星标它，点击下方图片，之后它将在右上角显示。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一款硬盘健康仪表板及监控解决方案，它将制造商提供的 S.M.A.R.T 指标与真实世界的故障率相结合。此插件基于 [linuxserver.io](https://www.linuxserver.io/) 的 [docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny)。

功能：

- S.M.A.R.T 监控
- 自动添加本地磁盘
- 每小时更新
- Ingress
- 自动上游更新

## 配置

WebUI 可在此地址通过 Ingress 访问：<http://homeassistant:8080>。除以下配置项外，其余可通过应用 WebUI 进行配置。
它会自动挂载所有本地磁盘。

**注意**：仅在遇到问题时启用完整访问权限。在所有场景下，S.M.A.R.T 访问无需完整权限即可正常工作。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `Updates` | list | `Hourly` | 更新计划（季度/小时/天/周/自定义） |
| `Updates_custom_time` | str | | 自定义更新间隔（例如，"5m", "2h", "1w", "2mo"） |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `Mode` | list | | 运行模式（Collector+WebUI 或仅 Collector） |
| `COLLECTOR_API_ENDPOINT` | str | | Collector API 端点 URL |
| `COLLECTOR_HOST_ID` | str | | Collector 的标识符 |
| `SMARTCTL_COMMAND_DEVICE_TYPE` | list | | SMARTCTL 命令的设备类型 |
| `SMARTCTL_MEGARAID_DISK_NUM` | int | | MegaRAID 磁盘号 |
| `expose_collector` | bool | | 将 Collector 端口暴露到外部 |

### 示例配置

```yaml
Updates: "Daily"
Updates_custom_time: "12h"
TZ: "Europe/London"
Mode: "Collector+WebUI"
COLLECTOR_API_ENDPOINT: "http://localhost:8080"
COLLECTOR_HOST_ID: "home_assistant"
SMARTCTL_COMMAND_DEVICE_TYPE: "auto"
expose_collector: false
```

### 自定义脚本和环境变量

此插件支持自定义脚本和环境变量：

- **自定义脚本**：参见 [Addon 中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项传递额外的环境变量（名称可大写或小写）。有关详细信息，请参见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

---

此插件的安装非常简单，与其他插件的安装方式无异。

1. 将我的插件仓库添加到 Home Assistant 实例中（在 supervisor 的 addons 商店右上角，或如果您已配置了 HA，则点击下方按钮）。
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮保存您的配置。
1. 将插件选项设置为您偏好的设置。
1. 启动插件。
1. 检查插件日志以查看一切是否正常。
1. 打开 WebUI（基于 Ingress）并调整软件选项。

# 在 home assistant 中的集成

---

与 HA 的集成可通过 [rest 平台](https://www.home-assistant.io/integrations/rest) 在 `configuration.yaml` 中进行。

通过 Ingress 即使未暴露端口，API 也可在 Home Assistant 的内部网络中访问。使用插件的内部域名（`http://db21ed7f-scrutiny:8080`）从 Home Assistant 或其他插件中查询它。如需从本地网络访问 API，请将端口在插件选项中暴露，并将域名替换为您 Home Assistant 的 IP 地址。

提供两种类型的 API 端点：

- 汇总数据：<http://db21ed7f-scrutiny:8080/api/summary>
- 详细数据：<http://db21ed7f-scrutiny:8080/api/device/WWN/details>

对于详细数据，可在 Scrutiny 应用中找到每个 HDD 的 wwn。例如：<http://db21ed7f-scrutiny:8080/api/device/0x50014ee606c14537/details>

获取第一个 HDD 数据的示例如下。

```yaml
rest:
  - verify_ssl: false
    scan_interval: 60
    resource: http://db21ed7f-scrutiny:8080/api/device/0x57c35481f82a7a9c/details
    sensor:
      - name: "HDD - WWN"
        value_template: "{{ value_json.data.smart_results[0].device_wwn }}"
      - name: "HDD - Last Update"
        value_template: "{{ value_json.data.smart_results[0].date }}"
        device_class: timestamp
      - name: "HDD - Temperature"
        value_template: "{{ value_json.data.smart_results[0].temp }}"
        device_class: temperature
        unit_of_measurement: "°C"
        state_class: measurement
      - name: "HDD - Power Cycles"
        value_template: "{{ value_json.data.smart_results[0].power_cycle_count }}"
      - name: "HDD - Power Hours"
        value_template: "{{ value_json.data.smart_results[0].power_on_hours }}"
      - name: "HDD - Protocol"
        value_template: "{{ value_json.data.smart_results[0].device_protocol }}"
      - name: "HDD - Reallocated Sectors Count"
        value_template: '{{ value_json.data.smart_results[0].attrs["5"].raw_value }}'
      - name: "HDD - Reallocation Event Count"
        value_template: '{{ value_json.data.smart_results[0].attrs["196"].raw_value }}'
      - name: "HDD - Current Pending Sector Count"
        value_template: '{{ value_json.data.smart_results[0].attrs["197"].raw_value }}'
      - name: "HDD - (Offline) Uncorrectable Sector Count"
        value_template: '{{ value_json.data.smart_results[0].attrs["198"].raw_value }}'
    binary_sensor:
      - name: "HDD - SMART Status"
        value_template: "{{ 1 if value_json.data.smart_results[0].Status in [1, 2] else 0 }}"
        device_class: problem
```

## 说明

---

![说明](https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在 GitHub 上创建问题，或在 [home assistant 线程](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747) 中提问。

<https://github.com/alexbelgium/hassio-addons>

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
