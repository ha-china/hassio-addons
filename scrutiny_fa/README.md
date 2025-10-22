# 家用助手插件：Scrutiny

[![捐赠][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![捐赠][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![版本](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建器](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建器)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库星标的人！要给星标，请点击下面的图片，然后它会在右上角显示。谢谢！_

[![@alexbelgium/hassio-addons 仓库星标罗盘](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[Scrutiny](https://github.com/AnalogJ/scrutiny) 是一个硬盘健康仪表盘和监控解决方案，将制造商提供的 S.M.A.R.T 指标与现实世界的故障率相结合。这个插件基于 [docker 镜像](https://hub.docker.com/r/linuxserver/scrutiny) 由 [linuxserver.io](https://www.linuxserver.io/) 提供。

特性：

- S.M.A.R.T 监控
- 自动添加本地驱动器
- 每小时更新
- 入口
- 自动上游更新

## 配置

---

Webui 可以在 <http://homeassistant:8080> 找到，或者通过入口访问。
它自动挂载所有本地驱动器。

仅在遇到问题时启用完全访问权限。在其他所有情况下，S.M.A.R.T 访问应该可以在不需要完全访问的情况下工作。

```yaml
Updates: 每小时, 每日, 每周
Updates_custom_time : 如果你选择 "自定义" 作为 "Updates" 变量，你可以在 "Updates_custom_time" 字段中用自然语言定义特定的更新。示例：选择 "自定义" 作为 "Updates"，然后输入自定义间隔，如 "5m", "2h", "1w"，或 "2mo"，以每 5 分钟，或每 2 小时，或每周，或每 2 个月更新一次
TZ: 时区
Mode: 收集器+WebUI 或仅收集器
```

## 安装

---

这个插件的安装非常简单，与其他插件的安装方式没有不同。

1. [将我的 Hass.io 插件仓库][repository] 添加到你的家用助手实例中。
2. 安装这个插件。
3. 点击 `保存` 按钮以保存你的配置。
4. 设置插件的选项以符合你的偏好
5. 启动插件。
6. 检查插件的日志以查看一切是否正常。
7. 打开 WebUI（基于入口）并调整软件选项

# 在家用助手中的集成

---

与 HA 的集成可以通过配置文件中的 [rest 平台](https://www.home-assistant.io/integrations/rest) 完成。

有两种类型的 API 端点可用：

- 摘要数据：http://YOURIP:ADDONPORT/api/summary
- 详细数据：http://YOURIP:ADDONPORT/api/device/WWN/details

对于详细数据，每个硬盘在 scrutiny 应用程序中都可以找到 WWN。例如：http://192.168.178.23:8086/api/device/0x50014ee606c14537/details

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

## 说明

---

![说明](https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在 github 上创建问题，或在 [家用助手讨论区](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747) 上提问

https://github.com/alexbelgium/hassio-addons

[repository]: https://github.com/alexbelgium/hassio-addons