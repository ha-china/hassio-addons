# Home Assistant 附加组件：Scrutiny

我利用业余时间维护此及其他 Home Assistant 附加组件：跟踪上游变更、HA 变更，以及在真实硬件上进行测试需要大量时间（和一些金钱）。我使用的附加组件有 110 多个，从中 5-10 个我会 regularly 安装测试机（并购买一些我本人不使用的测试服务，如 vpn），用于故障排除和改进附加组件。

如果您附加组件为您节省了时间或让您的设置更简单，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我仓库点赞的人！请点击查看下图，然后点击以点赞，它将显示在右上角。谢谢！_

[![@alexbelgium/hassio-addons 仓库星标组织列表](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载量趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一个硬盘健康仪表板及监控解决方案，将制造商提供的 S.M.A.R.T 指标与真实世界的故障率合并。此附加组件基于 [linuxserver.io](https://www.linuxserver.io/) 的 [Docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny)。

功能：

- S.M.A.R.T 监控
- 本地驱动自动添加
- 每小时更新
- 入口
- 自动上游更新

## 配置

Web 界面位于 `<http://homeassistant:8080>` 或通过侧边栏的入口访问。
配置可以通过应用程序 Web UI 完成，以下选项除外。
它自动挂载所有本地驱动。

**注意**：仅在遇到问题时启用完全访问权限。在所有场景下，S.M.A.R.T 访问无需完全访问权限即可工作。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|--------|------|---------|-------------|
| `Updates` | list | `Hourly` | 更新计划 (季度/小时/天/周/自定义) |
| `Updates_custom_time` | str | | 自定义更新时间间隔 (例如，"5m", "2h", "1w", "2mo") |
| `TZ` | str | | 时区 (例如，`Europe/London`) |
| `Mode` | list | | 运行模式 (采集器 +Web UI 或仅采集器) |
| `COLLECTOR_API_ENDPOINT` | str | | 采集器 API 端点 URL |
| `COLLECTOR_HOST_ID` | str | | 采集器的主机标识符 |
| `SMARTCTL_COMMAND_DEVICE_TYPE` | list | | SMARTCTL 命令的设备类型 |
| `SMARTCTL_MEGARAID_DISK_NUM` | int | | MegaRAID 磁盘号 |
| `expose_collector` | bool | | 对外暴露采集器端口 |

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

- **自定义脚本**：参见 [在附加组件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写字名字符串）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2 了解详情。

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装没有不同。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在受管器附加组件商店的右上角，或如果您已配置了我的 HA 则点击下方的按钮）
   [![打开 Home Assistant 实例并显示弹出对话框以添加附加组件仓库，其中预填充了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `保存` 按钮以存储配置文件。
1. 将附加组件选项设置为您首选的值
1. 启动附加组件。
1. 检查附加组件的日志以查看一切是否正常。
1. 打开 Web UI（基于入口）并调整软件选项

# 在 Home Assistant 集成

---

可以通过 [rest 平台](https://www.home-assistant.io/integrations/rest) 在配置文件中使用配置进行与 HA 的集成。

即使端口未暴露，API 也可在 Home Assistant 内部网络中访问。使用附加组件的内部域名 (`http://db21ed7f-scrutiny:8080`) 从 Home Assistant 或其他附加组件对其进行查询。如果您需要从本地网络访问 API，请在附加组件选项中暴露端口，并将域名替换为您的 Home Assistant IP 地址。

有两种类型的 API 端点：

- 摘要数据：<http://db21ed7f-scrutiny-fa:8080/api/summary>
- 详细信息：<http://db21ed7f-scrutiny-fa:8080/api/device/WWN/details>

对于详细信息数据，WWN 可在 Scrutiny 应用内的每个 HDD 中找到。例如：<http://db21ed7f-scrutiny-fa:8080/api/device/0x50014ee606c14537/details>

从第一个 HDD 获取数据的示例。

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

## 插图

---

![插图](https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在 GitHub 上创建一个 Issue，或提出 [Home Assistant 线程](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747)

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
