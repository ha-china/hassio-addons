# Home Assistant 插件：Scrutiny

我在闲暇时间维护此插件及其他 Home Assistant 插件：跟进上游变更、HA 变更以及在实际硬件上测试需要大量时间（和一些金钱）。我会使用约 5-10 个我的 110 多个插件，因此我安装了测试机器（并购买了一些测试服务，如 vpn），这些机器我自己不使用，以便排查和修复插件的问题

如果您使用此插件节省了时间或让配置更简单，我将非常感谢您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本] (https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![Ingress] (https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![架构] (https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy 徽章] (https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter] (https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=代码库检查)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者] (https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库星标的人！要星标它，请在下方图片处点击，然后它将显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 星标仓库人员名单] (https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势] (https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 简介

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一个硬盘健康仪表盘与监控解决方案，它将制造商提供的 S.M.A.R.T 指标与现实世界的故障率合并。此插件基于 [linuxserver.io](https://www.linuxserver.io/) 的 [docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny)。

功能：

- S.M.A.R.T 监控
- 自动添加本地驱动器
- 每小时更新
- Ingress（网络入口）
- 自动上游更新

## 配置

WebUI 可以在 <http://homeassistant:8080> 或通过侧边栏的 Ingress 找到。
配置可以通过应用程序 WebUI 完成，除了以下选项。它会自动挂载所有本地驱动器。

**注意**：仅在遇到问题时才启用完全访问权限。在所有场景下，S.M.A.R.T 访问在不启用完全访问权限的情况下应能正常工作。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `Updates` | list | `Hourly` | 更新时间表（季度/小时/天/周/自定义） |
| `Updates_custom_time` | str | | 自定义更新时间间隔（例如，"5m", "2h", "1w", "2mo"） |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `Mode` | list | | 操作模式（Collector+WebUI 或仅 Collector） |
| `COLLECTOR_API_ENDPOINT` | str | | Collector API 端点 URL |
| `COLLECTOR_HOST_ID` | str | | Collector 的主机标识符 |
| `SMARTCTL_COMMAND_DEVICE_TYPE` | list | | SMARTCTL 命令的设备类型 |
| `SMARTCTL_MEGARAID_DISK_NUM` | int | | MegaRAID 磁盘号 |
| `expose_collector` | bool | | 对外暴露 Collector 端口 |

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

- **自定义脚本**：参见 [插件中运行自定义脚本] (https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件的 `env_vars` 选项来传递额外的环境变量（大小写名称均可）。有关详细信息，请访问 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

---

此插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的 home assistant 实例（在 supervisor addons 商店右上角，或者如果您已配置了我的 HA，则点按下方按钮）
   [![打开您的 Home Assistant 实例并显示带预填充特定仓库 URL 的添加插件仓库对话框。] (https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击 `Save` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好设置。
1. 启动插件。
1. 查看插件日志以确认一切正常。
1. 打开 WebUI (基于 Ingress) 并调整软件选项

# 集成到 Home Assistant

---

与 HA 的集成可以通过配置.yaml 中的 [rest 平台](https://www.home-assistant.io/integrations/rest) 完成。

即使端口未暴露，API 也可在 Home Assistant 的内部网络中访问。使用插件的内部域名 (`http://db21ed7f-scrutiny:8080`) 从 Home Assistant 或其他插件中查询它。如果需要从本地网络访问 API，请在插件选项中暴露端口，并将域名替换为您的 Home Assistant IP 地址。

有两种类型的 API 端点：

- 摘要数据：<http://db21ed7f-scrutiny-fa:8080/api/summary>
- 详细数据：<http://db21ed7f-scrutiny-fa:8080/api/device/WWN/details>

对于详细数据，可以在 Scrutiny 应用程序的每个 HDD 内找到 wwn。例如：<http://db21ed7f-scrutiny-fa:8080/api/device/0x50014ee606c14537/details>

从第一个 hdd 获取数据的示例。

```yaml
rest:
  - verify_ssl: false
    scan_interval: 60
    resource: http://db21ed7f-scrutiny-fa:8080/api/device/0x57c35481f82a7a9c/details
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

![说明] (https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在 GitHub 上创建问题，或在 [Home Assistant 线程] (https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747) 中提问

<https://github.com/alexbelgium/hassio-addons>

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
