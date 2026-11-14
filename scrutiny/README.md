# Home assistant 附加组件：Scrutiny

我在空闲时间维护此及其他 Home Assistant 附加组件：跟进上游更改、HA 更改以及在真实硬件上测试需要大量时间（和一些金钱）。我使用了大约 5-10 个我的 >110 个附加组件，所以我经常安装测试机器（并购买一些我不自己使用的测试服务，如 vpn），以便排查问题并改进附加组件

如果这个附加组件能节省您的时间或让您的设置更容易，我将不胜感激您的支持！

[![Buy me a咖啡][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![通过 PayPal 捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=lint 代码库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-23D79C?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点赞的人！要点赞，请点击下方的图片，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一个硬盘健康仪表盘 & 监控解决方案，将制造商提供的 S.M.A.R.T 指标与现实失败率融合在一起。此附加组件基于来自 [linuxserver.io](https://www.linuxserver.io/) 的 [docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny)。

功能：

- SMART 监控
- 自动添加本地驱动器
- 每小时更新
- Ingress
- 自动上游更新

## 配置

Webui 可以在 <http://homeassistant:8080> 或通过侧边栏的 Ingress 访问。
配置可以通过应用程序 WebUI 完成，除了以下选项外。
它自动挂载所有本地驱动器。

**注意**：只有在遇到问题时才启用完全访问权限。在所有情况下，SMART 访问无需完全访问权限即可正常工作。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `Updates` | list | `Hourly` | 更新计划 (季度/小时/日/周/自定义) |
| `Updates_custom_time` | str | | 自定义更新间隔 (e.g., "5m", "2h", "1w", "2mo") |
| `TZ` | str | | 时区 (e.g., `Europe/London`) |
| `Mode` | list | | 运行模式 (Collector+WebUI 或仅 Collector) |
| `COLLECTOR_API_ENDPOINT` | str | | Collector API 端点 URL |
| `COLLECTOR_HOST_ID` | str | | Collector 的主机标识符 |
| `SMARTCTL_COMMAND_DEVICE_TYPE` | list | | SMARTCTL 命令的设备类型 |
| `SMARTCTL_MEGARAID_DISK_NUM` | int | | MegaRAID 磁盘号 |
| `expose_collector` | bool | | 在外部暴露 collector 端口 |

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

此附加组件支持自定义脚本和环境变量：

- **自定义脚本**: 见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**: 使用附加组件 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

---

此附加组件的安装非常简单，与安装任何其他附加组件没有区别。

1. 将我的附加组件存储库添加到您的 Home Assistant 实例（在 supervisor 附加组件存储顶部右侧，或者如果您配置了我的 HA，则点击下面的按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充的特定存储库 URL 的“添加附加组件存储库”对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons%2Fmaster)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置。
1. 设置附加组件选项为您的需求
1. 启动附加组件。
1. 检查附加组件的日志，查看一切是否正常。
1. 打开基于 Ingress 的 WebUI 并调整软件选项

# 在 home assistant 中的集成

---

与 HA 的集成可以通过 `configuration.yaml` 中的 [rest platform](https://www.home-assistant.io/integrations/rest) 完成。

即使端口未暴露，API 也可通过 Home Assistant 的内部网络访问。使用附加组件的内部域名 (`http://db21ed7f-scrutiny:8080`) 从 Home Assistant 或其他附加组件查询它。如果您需要从本地网络访问 API，请在附加组件选项中暴露端口，并用您的 Home Assistant IP 地址替换域名。

提供两种类型的 API 端点：

- 汇总数据：<http://db21ed7f-scrutiny:8080/api/summary>
- 详细信息：<http://db21ed7f-scrutiny:8080/api/device/WWN/details>

对于详细信息，wwn 可以在 Scrutiny 应用程序中的每个 HDD 内找到。例如：<http://db21ed7f-scrutiny:8080/api/device/0x50014ee606c14537/details>

从第一个 hdd 获取数据的示例。

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

## 插图

---

![Illustration](https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在 github 上创建问题，或在 [home assistant thread](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747) 中询问

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
