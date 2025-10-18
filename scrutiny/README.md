# Home assistant add-on: Scrutiny

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库点赞的人！要点赞，请点击下面的图片，然后它就会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一个硬盘健康仪表板和监控解决方案，将制造商提供的 S.M.A.R.T 指标与现实世界的故障率相结合。这个插件基于 [docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny) 来自 [linuxserver.io](https://www.linuxserver.io/)。

功能：

- SMART 监控
- 自动添加本地驱动器
- 每小时更新
- Ingress
- 自动上游更新

## 配置

Web UI 可以在 <http://homeassistant:8080> 或通过 Ingress 在侧边栏中访问。
配置可以通过应用的 Web UI 进行，以下选项除外。
它会自动挂载所有本地驱动器。

**注意**：仅当遇到问题时才启用完全访问权限。在所有情况下，SMART 访问应无需完全访问权限即可工作。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `Updates` | 列表 | `Hourly` | 更新计划（Quarterly/Hourly/Daily/Weekly/Custom） |
| `Updates_custom_time` | 字符串 | | 自定义更新间隔（例如，"5m"，"2h"，"1w"，"2mo"） |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `Mode` | 列表 | | 运行模式（Collector+WebUI 或 Collector 仅） |
| `COLLECTOR_API_ENDPOINT` | 字符串 | | Collector API 端点 URL |
| `COLLECTOR_HOST_ID` | 字符串 | | Collector 的主机标识符 |
| `SMARTCTL_COMMAND_DEVICE_TYPE` | 列表 | | SMARTCTL 命令的设备类型 |
| `SMARTCTL_MEGARAID_DISK_NUM` | 整数 | | MegaRAID 磁盘编号 |
| `expose_collector` | 布尔值 | | 外部暴露 Collector 端口 |

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

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **环境变量**：参见 [向您的插件添加环境变量](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon)

## 安装

---

此插件的安装非常简单，与安装任何其他插件没有区别。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 home assistant 实例中。
1. 安装此插件。
1. 点击 `保存` 按钮以保存您的配置。
1. 设置插件选项以符合您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 打开 Web UI（基于 Ingress）并调整软件选项

# 在 home assistant 中的集成

---

通过 [rest 平台](https://www.home-assistant.io/integrations/rest) 在配置文件中与 HA 进行集成。

即使端口未暴露，API 也可以在 Home Assistant 的内部网络上访问。从 Home Assistant 或其他插件查询时，使用插件的内部域名 (`http://db21ed7f-scrutiny:8080`)。如果您需要从本地网络访问 API，请在插件选项中暴露端口，并将域名替换为您的 Home Assistant IP 地址。

有两种类型的 API 端点可用：

- 摘要数据：<http://db21ed7f-scrutiny:8080/api/summary>
- 详细数据：<http://db21ed7f-scrutiny:8080/api/device/WWN/details>

对于详细数据，wwn 可以在每个硬盘的 Scrutiny 应用中找到。例如：<http://db21ed7f-scrutiny:8080/api/device/0x50014ee606c14537/details>

获取第一个硬盘数据的示例。

```yaml
rest:
  - verify_ssl: false
    scan_interval: 60
    resource: http://db21ed7f-scrutiny:8080/api/device/0x57c35481f82a7a9c/details
    sensor:
      - name: "HDD - WWN"
        value_template: "{{ value_json.data.smart_results[0].device_wwn }}"
      - name: "HDD - 最后更新"
        value_template: "{{ value_json.data.smart_results[0].date }}"
        device_class: timestamp
      - name: "HDD - 温度"
        value_template: "{{ value_json.data.smart_results[0].temp }}"
        device_class: temperature
        unit_of_measurement: "°C"
        state_class: measurement
      - name: "HDD - 电源周期"
        value_template: "{{ value_json.data.smart_results[0].power_cycle_count }}"
      - name: "HDD - 电源小时"
        value_template: "{{ value_json.data.smart_results[0].power_on_hours }}"
      - name: "HDD - 协议"
        value_template: "{{ value_json.data.smart_results[0].device_protocol }}"
      - name: "HDD - 重新分配扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["5"].raw_value }}'
      - name: "HDD - 重新分配事件计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["196"].raw_value }}'
      - name: "HDD - 当前待处理扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["197"].raw_value }}'
      - name: "HDD - (离线) 不可纠正扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["198"].raw_value }}'
    binary_sensor:
      - name: "HDD - SMART 状态"
        value_template: "{{ 1 if value_json.data.smart_results[0].Status in [1, 2] else 0 }}"
        device_class: problem
```

## 插图

---

![插图](https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在 github 上创建问题，或在 [home assistant 论坛](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747) 上提问。

<https://github.com/alexbelgium/hassio-addons>

[repository]: https://github.com/alexbelgium/hassio-addons