# Home assistant add-on: Fireflyiii fints importer

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/yaml?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)
![Ingress](https://img.shields.io/badge/dynamic/yaml?label=Ingress&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)
![Arch](https://img.shields.io/badge/dynamic/yaml?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.yaml)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20code%20base)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=Builder)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我的仓库加星的人！要加星，请点击下面的图片，然后它会在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_fints_importer/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）的个人财务管理工具。它可以帮助你跟踪你的支出和收入，以便你花得更少，存得更多。这个工具允许你将来自你的 FinTS 支持银行的交易导入 Firefly III。它附带一个 Web GUI，引导你完成整个过程。

这个插件基于 Docker 镜像 https://hub.docker.com/r/benkl/firefly-iii-fints-importer

## 配置

Webui 可以在 <http://homeassistant:3476> 找到。

这个工具允许你将来自你的 FinTS 支持银行（主要是德国银行）的交易导入 Firefly III。

### 设置步骤

1. 确保你有一个运行的 Firefly III 实例
2. 访问 Web 界面来配置银行连接
3. 为每个银行账户设置导入配置
4. 如有需要，配置自动导入计划

有关详细设置文档，请参阅：https://github.com/bnw/firefly-iii-fints-importer

### 选项

| 选项 | 类型 | 描述 |
|------|------|------|
| `Updates` | 列表 | 自动导入计划（每小时，每天2次，每天4次，每天6次，每天8次，每天10次，每天12次，每周） |
| `silent` | 布尔 | 抑制调试消息 |

### 示例配置

```yaml
Updates: ["daily6"]  # 每天6点运行
silent: false
```

### 自动导入计划

`Updates` 选项允许你安排自动导入：

- `hourly`: 每小时
- `daily2`: 每天凌晨2:00
- `daily4`: 每天凌晨4:00
- `daily6`: 每天凌晨6:00
- `daily8`: 每天早上8:00
- `daily10`: 每天早上10:00
- `daily12`: 每天中午12:00
- `weekly`: 每周（周日凌晨2:00）

### 配置存储

银行配置和导入设置存储在：
`/config/addons_config/fireflyiii_fints_importer/`

有关配置文件格式，请参阅：https://github.com/bnw/firefly-iii-fints-importer#storing-configurations

### FinTS 支持

这个导入器支持使用 FinTS（金融服务交易服务）协议的德国银行。大多数主要的德国银行支持 FinTS 进行自动交易检索。

## 安装

这个插件的安装非常简单，与安装任何其他插件没有区别。

1. 将我的插件仓库添加到你的 Home Assistant 实例（在 Supervisor 插件商店的右上角，或点击下面的按钮如果你已经配置了我的 HA）
   [![打开你的 Home Assistant 实例并显示带有特定仓库 URL 预填的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
1. 安装这个插件。
1. 点击 `保存` 按钮来保存你的配置。
1. 设置插件的选项以符合你的偏好。
1. 启动插件。
1. 检查插件的日志以查看一切是否正常。
1. 打开 WebUI 并调整软件选项

## 支持

在 github 上创建问题

## 插图

[repository]: https://github.com/alexbelgium/hassio-addons