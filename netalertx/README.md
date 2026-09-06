# Home Assistant 插件：NetAlertX

我在业余时间维护此及其他 Home Assistant 插件：跟进上游更改、Home Assistant 的更新以及在实际硬件上测试需要花费大量时间（甚至一些金钱）。我大约使用了超过 110 个插件中的 5-10 个，因此我安装了测试机器（并购买了一些测试服务，如 VPN），我自己不使用它们来调试和改进插件。

如果此插件为您节省了时间或简化了您的设置，我将不胜感激！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 插件信息

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Fnetalertx%2Fconfig.yaml)
![mqtt](https://img.shields.io/badge/Service-MQTT-green.svg?logo=chromecast&logoColor=white)

[![Codacy 徽章](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![构建者](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_非常感谢为我仓库点星的所有人！点星请点击下方图片，然后点击后它会显示在右上角。感谢！_

[![@alexbelgium/hassio-addons 插件仓库星标者名单](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/netalertx/stats.png)

## 关于

网络存在检测器和入侵探测器。扫描连接到您网络的设备，并提醒您是否发现了新设备和未知设备。
此插件基于来自 jokob-sk 的 [docker 镜像](https://github.com/jokob-sk/NetAlertX/tree/main/dockerfiles)。

## 安装

此插件的安装非常简单，与安装任何其他的 Hass.io 插件没有区别。

1. 将我提供的插件仓库添加到您的 Home Assistant 实例中（在 supervisor 插件商店点击右上角，或如果您已配置了 HA，请点击下方按钮）
   [![打开您的 Home Assistant 实例并显示带有预填充特定仓库 URL 的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装此插件。
3. 点击 `保存` 按钮以存储您的配置。
4. 启动插件。
5. 检查插件日志以查看一切是否正常。
6. 按照官方文档仔细配置插件以满足您的需求。

## 配置

1. 如果未找到，应用程序会在首次运行时生成默认的 `app.conf` 和 `app.db` 文件。
2. 首选的管理配置方式是通过 UI 中的设置部分，如果无法访问 UI，您可以直接修改 `/config/config/` 文件夹中的 `app.conf`。
3. 您需要指定将要扫描的网络。这通过输入从主机可访问的子网来完成。如果您使用默认的 `ARPSCAN` 插件，您必须在 `SCAN_SUBNETS` 设置中至少指定一个有效的子网和接口。请参阅 [关于如何设置多个子网、VLAN 以及限制说明的文档](https://github.com/jokob-sk/NetAlertX/blob/main/docs/SUBNETS.md)，并获取故障排除及更高级别的场景说明。
4. 阅读如何通过 [MQTT 插件将设备导入您的 Home Assistant 实例](https://github.com/jokob-sk/NetAlertX/blob/main/docs/HOME_ASSISTANT.md)。
5. 按照 [备份文档](https://github.com/jokob-sk/NetAlertX/blob/main/docs/BACKUPS.md) 备份所有内容。

Web UI 可在 <http://homeassistant.local:20211> 或通过 HA ingress 访问。

<img width="500" alt="image" src="https://github.com/user-attachments/assets/fd74af43-091a-4f38-9879-037ca64cfab9" />

```yaml
PGID: user
GPID: user
```

### 自定义脚本和环境变量

此插件支持通过 `addon_config` 映射使用自定义脚本和环境变量：

- **自定义脚本**：参见 [在插件中运行自定义脚本](https://github.com/alexbelgium/hassio-addons/wiki/Running-custom-scripts-in-Addons)
- **env_vars 选项**：使用插件 `env_vars` 选项传递额外的环境变量（名称可以是大写或小写）。详细信息请参阅 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

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
