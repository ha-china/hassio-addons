# Home Assistant 附加组件：Firefly III FinTS 导入器

我在空闲时间维护这个以及其他 Home Assistant 附加组件：跟进上游更新、HA 改版以及在实际硬件上测试非常耗时（而且有些开支）。我大约使用了超过 110 个附加组件中的 5-10 个，因此我会经常安装测试机器（甚至购买一些我自己不使用的测试服务，如 VPN）来排查问题和改进附加组件。

如果这个附加组件为您节省时间或让您的设置变得更加简便，我将非常感激您的支持！

[![Buy me a coffee][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate via PayPal][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

## 附加组件信息

![Version](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Donate%20via%20PayPal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有人给我的仓库星标！点击下方图片，您就可以为我标记为星标，它将出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![downloads evolution](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_fints_importer/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一款用于管理您个人财务的系统（自托管）。它可以帮助您跟踪支出和收入，从而做到花得少、存得多。该工具允许您将启用了 FinTS 的银行的交易导入 Firefly III。它附带一个 Web GUI，引导您完成整个过程。

该附加组件基于 Docker 镜像：https://hub.docker.com/r/benkl/firefly-iii-fints-importer

## 配置

请使用附加组件的 `env_vars` 选项来传递额外的环境变量（变量名可以是大写或小写）。详见 https://github.com/alexbelgium/hassio-addons/wiki/Add-Environment-variables-to-your-Addon-2。

Webui 页面地址为：<http://homeassistant:3476>。

该工具允许您将启用了 FinTS 的银行的交易（主要是德国银行）导入 Firefly III。

### 设置步骤

1. 确保您已有正在运行的 Firefly III 实例
2. 访问 Web 界面配置银行连接
3. 为每个银行账户设置导入配置
4. 如需，配置自动导入计划

详细的设置文档请关注：https://github.com/bnw/firefly-iii-fints-importer

### 选项

| 选项 | 类型 | 描述 |
|--------|------|-----------|
| `Updates` | list | 自动导入计划（每小时，每天2次，4次，6次，8次，10次，12次，每周） |
| `silent` | bool | 抑制调试消息 |

### 示例配置示例

```yaml
Updates: ["daily6"]  # 每天上午 6 点运行
silent: false
```

### 自动导入计划

`Updates` 选项允许您安排自动导入：

- `hourly`: 每小时
- `daily2`: 每天凌晨 2:00
- `daily4`: 每天凌晨 4:00
- `daily6`: 每天上午 6:00
- `daily8`: 每天上午 8:00
- `daily10`: 每天上午 10:00
- `daily12`: 每天中午 12:00
- `weekly`: 每周（每周日凌晨 2:00）

### 配置文件存储

银行配置（`.json` 文件）和导入设置存储在附加组件配置目录中：
`/addon_configs/xxx_fireflyiii_fints_importer/configurations/`

来自旧位置 `/config/addons_config/fireflyiii_fints_importer/` 的文件会在首次启动时自动移动到此位置。

关于配置文件格式的详细信息，请关注：https://github.com/bnw/firefly-iii-fints-importer#storing-configurations

### FinTS 支持

该导入器支持使用 FinTS（金融服务交易协议）的德国银行。大多数主要德国银行均支持 FinTS 用于自动获取交易数据。

## 安装

该附加组件的安装过程相当简单，并未与其他附加组件的安装有太大区别。

1. 将我的附加组件仓库添加到您的 Home Assistant 实例中（在 Supervisor 附加组件商店右上角，或如果您已配置我的 HA，则点击下方按钮）
   [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装此附加组件。
1. 点击 `Save` 按钮以保存您的配置
1. 设置附加组件选项为您所需的偏好设置
1. 启动附加组件
1. 检查附加组件日志以确认一切是否正常
1. 打开 Web UI 并调整软件选项

## 支持

在 github 上创建一个问题（Issue）

## 说明

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
