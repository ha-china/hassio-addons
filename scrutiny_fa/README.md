# Home assistant 插件：Scrutiny

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/json?label=%E7%89%88%E672&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.json)
![架构](https://img.shields.io/badge/dynamic/json?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有为我的仓库点星的人！要点星，请点击下面的图像，然后它将位于右上方。谢谢！_

[![星标用户列表 @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载演变](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一个硬盘健康仪表板和监控解决方案，将制造商提供的 S.M.A.R.T 指标与实际故障率相结合。此插件基于来自 [linuxserver.io](https://www.linuxserver.io/) 的 [docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny)。

功能：

- SMART 监控
- 自动添加本地驱动器
- 每小时更新
- Ingress
- 自动上游更新

## 配置

---

Webui 可以在 <http://homeassistant:8080> 找到，或通过 Ingress 访问。
它会自动挂载所有本地驱动器。

仅在遇到问题时启用完全访问。其他情况下 SMART 访问应在不需要完全访问的情况下正常工作。

```yaml
Updates: 每小时、每日、每周
Updates_custom_time: 如果您选择“自定义”作为“更新”变量，您可以在“Updates_custom_time”字段中以自然语言定义具体更新。例如：选择“自定义”作为“更新”，然后输入自定义间隔，如“5m”、“2h”、“1w”或“2mo”，以每 5 分钟、每 2 小时、每周或每 2 个月更新一次
TZ: 时区
Mode: Collector+WebUI 或仅 Collector
```

## 安装

---

安装此插件非常简单，与安装其他插件并无不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到您的 home assistant 实例。
1. 安装此插件。
1. 单击 `保存` 按钮以保存您的配置。
1. 将插件选项设置为您的偏好
1. 启动插件。
1. 检查插件的日志以查看是否一切顺利。
1. 打开 WebUI（基于 Ingress）并调整软件选项。

# 在 Home Assistant 中集成

---

可以通过在 configuration.yaml 中使用 [rest 平台](https://www.home-assistant.io/integrations/rest) 实现与 HA 的集成。

提供两种类型的 API 端点：

- 概要数据 : http://YOURIP:ADDONPORT/api/summary
- 详细数据 : http://YOURIP:ADDONPORT/api/device/WWN/details

对于详细数据，可以在 Scrutiny 应用程序中为每个硬盘找到 wmn。例如：http://192.168.178.23:8086/api/device/0x50014ee606c14537/details

获取第一个硬盘数据的示例。

```yaml
rest:
  - verify_ssl: false
    scan_interval: 60
    resource: http://192.168.178.4:8086/api/device/0x57c35481f82a7a9c/details
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
      - name: "HDD - 电源循环次数"
        value_template: "{{ value_json.data.smart_results[0].power_cycle_count }}"
      - name: "HDD - 电源使用小时数"
        value_template: "{{ value_json.data.smart_results[0].power_on_hours }}"
      - name: "HDD - 协议"
        value_template: "{{ value_json.data.smart_results[0].device_protocol }}"
      - name: "HDD - 重新分配扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["5"].raw_value }}'
      - name: "HDD - 重新分配事件计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["196"].raw_value }}'
      - name: "HDD - 当前待定扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["197"].raw_value }}'
      - name: "HDD - (离线) 无法更正的扇区计数"
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

在 GitHub 上创建一个问题，或者在 [home assistant 线程](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747) 中提问。

https://github.com/alexbelgium/hassio-addons

[repository]: https://github.com/alexbelgium/hassio-addons