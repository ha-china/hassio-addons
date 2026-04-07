# 家居助理插件：审查

我在业余时间维护这个以及其他家居助理插件：跟进上游更改、家居助理更改以及在真实硬件上进行测试需要花费大量时间（以及一些金钱）。我经常使用大约5-10个我的>110个插件，所以我安装了测试机器（并购买了一些我自己不使用的测试服务，例如VPN），用于调试和改进插件。

如果这个插件为您节省了时间或使您的设置更简单，我将非常感激您的支持！

[![买我一杯咖啡][捐赠徽章]](https://www.buymeacoffee.com/alexbelgium)
[![通过PayPal捐赠][paypal徽章]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![入口](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fscrutiny%2Fconfig.yaml)

[![Codacy徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[捐赠徽章]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal徽章]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢每一位为我仓库点赞的人！要给仓库点赞，请点击下面的图片，然后它将显示在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/scrutiny/stats.png)

## 关于

---

[审查](https://github.com/AnalogJ/scrutiny)是一个硬盘健康仪表板和监控解决方案，将制造商提供的S.M.A.R.T指标与真实世界的故障率合并。此插件基于来自[linuxserver.io](https://www.linuxserver.io/)的[docker镜像](https://hub.docker.com/r/linuxserver/scrutiny)。

特性：

- S.M.A.R.T监控
- 自动添加本地驱动器
- 每小时更新
- 入口
- 自动上游更新

## 配置

Web界面可以在<http://homeassistant:8080>或通过侧边栏使用入口找到。
可以通过应用Web界面进行配置，除了以下选项。
它自动挂载所有本地驱动器。

**注意**：只有在遇到问题时才启用完整访问权限。在所有情况下，SMART访问都应在没有完整访问权限的情况下工作。

### 选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|------|
| `Updates` | 列表 | `Hourly` | 更新计划（每季度/每小时/每天/每周/自定义） |
| `Updates_custom_time` | 字符串 | | 自定义更新间隔（例如，“5m”，“2h”，“1w”，“2mo”） |
| `TZ` | 字符串 | | 时区（例如，`Europe/London`） |
| `Mode` | 列表 | | 操作模式（收集器+WebUI或仅收集器） |
| `COLLECTOR_API_ENDPOINT` | 字符串 | | 收集器API端点URL |
| `COLLECTOR_HOST_ID` | 字符串 | | 收集器的主机标识符 |
| `SMARTCTL_COMMAND_DEVICE_TYPE` | 列表 | | SMARTCTL命令的设备类型 |
| `SMARTCTL_MEGARAID_DISK_NUM` | 整数 | | MegaRAID磁盘编号 |
| `expose_collector` | 布尔值 | | 是否对外公开收集器端口 |

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

- **自定义脚本**：请参阅[在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars选项**：使用插件的`env_vars`选项来传递额外的环境变量（使用大写或小写名称）。请参阅[将环境变量添加到您的插件](https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2)以获取详细信息。

## 安装

---

此插件的安装相当简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到您的家居助理实例中（在监督器插件商店的右上角，或点击下面的按钮如果您已配置了我的HA）
   [![打开您的家居助理实例并显示带有特定仓库URL预先填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此插件。
1. 点击“保存”按钮以存储您的配置。
1. 将插件选项设置为您的偏好设置
1. 启动插件。
1. 检查插件的日志以查看一切是否顺利。
1. 打开Web界面（基于入口）并调整软件选项

# 在家居助理中的集成

---

可以通过配置.yaml中的[rest平台](https://www.home-assistant.io/integrations/rest)进行与HA的集成。

API在Home Assistant的内部网络上可用，即使端口没有公开。使用插件的内部域名（`http://db21ed7f-scrutiny:8080`）从Home Assistant或其他插件查询它。如果您需要从本地网络访问API，请在插件选项中公开端口并将域名替换为您的Home Assistant IP地址。

提供了两种类型的API端点：

- 摘要数据：`<http://db21ed7f-scrutiny-fa:8080/api/summary>`
- 详细数据：`<http://db21ed7f-scrutiny-fa:8080/api/device/WWN/details>`

对于详细数据，wwn可以在Scrutiny应用中找到每个HDD。例如：`<http://db21ed7f-scrutiny-fa:8080/api/device/0x50014ee606c14537/details>`

获取第一个硬盘数据的示例。

```yaml
rest:
  - verify_ssl: false
    scan_interval: 60
    resource: http://db21ed7f-scrutiny-fa:8080/api/device/0x57c35481f82a7a9c/details
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
      - name: "HDD - 功率周期"
        value_template: "{{ value_json.data.smart_results[0].power_cycle_count }}"
      - name: "HDD - 功率小时"
        value_template: "{{ value_json.data.smart_results[0].power_on_hours }}"
      - name: "HDD - 协议"
        value_template: "{{ value_json.data.smart_results[0].device_protocol }}"
      - name: "HDD - 重新分配扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["5"].raw_value }}'
      - name: "HDD - 重新分配事件计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["196"].raw_value }}'
      - name: "HDD - 当前挂起的扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["197"].raw_value }}'
      - name: "HDD - (离线) 不可纠正的扇区计数"
        value_template: '{{ value_json.data.smart_results[0].attrs["198"].raw_value }}'
    binary_sensor:
      - name: "HDD - SMART状态"
        value_template: "{{ 1 if value_json.data.smart_results[0].Status in [1, 2] else 0 }}"
        device_class: problem
```

## 示例

---

![示例](https://github.com/AnalogJ/scrutiny/raw/master/docs/dashboard.png)

## 支持

在GitHub上创建一个问题，或者在[家居助理论坛](https://community.home-assistant.io/t/home-assistant-addon-scrutiny-smart-dashboard/295747)上提问。

<https://github.com/alexbelgium/hassio-addons>

[仓库链接]: https://github.com/alexbelgium/hassio-addons
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
