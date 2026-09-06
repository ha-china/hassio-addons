# Home Assistant 附加组件：Scrutiny

我在业余时间维护和开发 Home Assistant 附加组件：跟踪上游更改、Home Assistant 更新以及在真实硬件上进行测试需要大量时间（以及一些金钱）。我会使用 50-10 个我的 110 多个附加组件，因此我经常安装测试机（甚至购买一些我自己不使用的测试服务，如 vpn），用于调试和改进附加组件。

如果这个附加组件为您节省了时间或简化了设置，您的支持将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢大家star 了我的仓库！要star它，请点击下面的图片，它将显示在右上角。谢谢 !_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一个硬盘健康仪表板与监控解决方案，将制造商提供的 S.M.A.R.T 指标与实际世界故障率相结合。该附加组件基于 [linuxserver.io](https://www.linuxserver.io/) 上的 [docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny)。

功能：

- SMART 监控
- 自动添加本地驱动器
- 每小时更新
- Ingress
- 自动上游更新

## 配置

Web 界面可在 <http://homeassistant:8080> 或通过侧边栏的 Ingress 访问。
配置可以通过应用 webUI 完成，除了以下选项外。它会自动挂载所有本地驱动器。

**注意**：仅在遇到问题时才启用完全访问权限。在所有场景中，SMART 访问都不需要完全访问权限即可正常工作。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `Updates` | list | `Hourly` | 更新调度（季度/小时/日/周/自定义） |
| `Updates_custom_time` | str | | 自定义更新间隔（例如，"5m"、"2h"、"1w"、"2mo"） |
| `TZ` | str | | 时区（例如，`Europe/London`） |
| `Mode` | list | | 工作模式（Collector+WebUI 或仅 Collector） |
| `COLLECTOR_API_ENDPOINT` | str | | Collector API 端点 URL |
| `COLLECTOR_HOST_ID` | str | | Collector 的主机标识符 |
| `SMARTCTL_COMMAND_DEVICE_TYPE` | list | | SMARTCTL 命令的设备类型 |
| `SMARTCTL_MEGARAID_DISK_NUM` | int | | MegaRAID 磁盘号 |
| `expose_collector` | bool | | 在外部暴露 Collector 端口 |

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
- **env_vars 选项**：使用附加组件的 `env_vars` 选项传递额外的环境变量（大写或小写名称均可）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

## 安装

---

此附加组件的安装非常简单，与其他附加组件的安装方式没有区别。

1. 将我的附加组件仓库添加到您的 home assistant 实例中（在 supervisor 附加组件商店右上角，或点击下方的按钮，如果您已配置了我的 HA）。
   [![打开您的 Home Assistant 实例并显示附加组件仓库对话框，其中预填了特定的仓库 URL。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此附加组件。
3. 点击 `Save` 按钮以存储您的配置。
4. 将附加组件选项设置为您的偏好。
5. 启动附加组件。
6. 检查附加组件的日志，查看是否一切正常。
7. 打开 webUI（基于 Ingress）并调整软件选项。

# 在 home assistant 中集成

---

与 HA 的集成可以通过 [rest 平台](https://www.home-assistant.io/integrations/rest) 在 configuration.yaml 中完成。

即使端口未暴露，API 也可在 Home Assistant 的内部网络中访问。使用附加组件的内部域名（`http://db21ed7f-scrutiny:8080`）从 Home Assistant 或其他附加组件中查询它。如果需要从本地网络访问 API，请在附加组件选项中暴露端口，并将域名替换为 Home Assistant 的 IP 地址。

有两种类型的 API 端点：

- 摘要数据：<http://db21ed7f-scrutiny:8080/api/summary>
- 详细数据：<http://db21ed7f-scrutiny:8080/api/device/WWN/details>

对于详细数据，wwn 可以在 Scrutiny 应用中的每个 HDD 内找到。例如：<http://db21ed7f-scrutiny:8080/api/device/0x50014ee606c14537/details>

获取第一个 HDD 数据的示例。

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

![插图](https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在 github 上创建 issue，或在 [home assistant 主题](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747) 中询问。

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
