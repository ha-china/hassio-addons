# Home assistant add-on: Fireflyiii fints importer

[![Donate][donation-badge]](https://www.buymeacoffee.com/alexbelgium)
[![Donate][paypal-badge]](https://www.paypal.com/donate/?hosted_button_id=DZFULJZTP3UQA)

![Version](https://img.shields.io/badge/dynamic/json?label=版本&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.json)
![Ingress](https://img.shields.io/badge/dynamic/json?label=入口&query=%24.ingress&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.json)
![Arch](https://img.shields.io/badge/dynamic/json?color=success&label=架构&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Falexbelgium%2Fhassio-addons%2Fmaster%2Ffireflyiii_fints_importer%2Fconfig.json)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9c6cf10bdbba45ecb202d7f579b5be0e)](https://www.codacy.com/gh/alexbelgium/hassio-addons/dashboard?utm_source=github.com&utm_medium=referral&utm_content=alexbelgium/hassio-addons&utm_campaign=Badge_Grade)
[![GitHub Super-Linter](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/weekly-supelinter.yaml?label=Lint%20代码%20库)](https://github.com/alexbelgium/hassio-addons/actions/workflows/weekly-supelinter.yaml)
[![Builder](https://img.shields.io/github/actions/workflow/status/alexbelgium/hassio-addons/onpush_builder.yaml?label=构建者)](https://github.com/alexbelgium/hassio-addons/actions/workflows/onpush_builder.yaml)

[donation-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20(no%20paypal)-%23d32f2f?logo=buy-me-a-coffee&style=flat&logoColor=white
[paypal-badge]: https://img.shields.io/badge/Buy%20me%20a%20coffee%20with%20Paypal-0070BA?logo=paypal&style=flat&logoColor=white

_感谢所有给我仓库点赞的人！点击下面的图片给仓库点赞，它就会出现在右上角。谢谢！_

[![Stargazers repo roster for @alexbelgium/hassio-addons](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/.github/stars2.svg)](https://github.com/alexbelgium/hassio-addons/stargazers)

![下载趋势](https://raw.githubusercontent.com/alexbelgium/hassio-addons/master/fireflyiii_fints_importer/stats.png)

## 关于

["Firefly III"](https://www.firefly-iii.org) 是一个（自托管）的个人财务管理工具。它可以帮助您跟踪支出和收入，以便您少花钱多储蓄。这个工具允许您将来自支持 FinTS 协议的银行的交易导入 Firefly III。它附带一个 Web GUI，引导您完成整个过程。

这个插件基于以下 Docker 镜像：https://hub.docker.com/r/benkl/firefly-iii-fints-importer

## 配置

Web UI 可以在 <http://homeassistant:3476> 找到。

这个工具允许您将来自支持 FinTS 协议的银行（主要是德国银行）的交易导入 Firefly III。

### 配置步骤

1. 确保您有一个运行的 Firefly III 实例
2. 访问 Web 界面以配置银行连接
3. 为每个银行账户设置导入配置
4. 如有需要，配置自动导入计划

有关详细配置文档，请参阅：https://github.com/bnw/firefly-iii-fints-importer

### 选项

| 选项 | 类型 | 描述 |
|------|------|------|
| `Updates` | 列表 | 自动导入计划（每小时、每日2次、每日4次、每日6次、每日8次、每日10次、每日12次、每周） |
| `silent` | 布尔 | 抑制调试消息 |

### 示例配置

```yaml
Updates: ["daily6"]  # 每天早上6点运行
silent: false
```

### 自动导入计划

`Updates` 选项允许您安排自动导入：

- `hourly`: 每小时
- `daily2`: 每天早上2点
- `daily4`: 每天早上4点
- `daily6`: 每天早上6点
- `daily8`: 每天早上8点
- `daily10`: 每天早上10点
- `daily12`: 每天中午12点
- `weekly`: 每周（星期天早上2点）

### 配置存储

银行配置和导入设置存储在：
`/config/addons_config/fireflyiii_fints_importer/`

有关配置文件格式，请参阅：https://github.com/bnw/firefly-iii-fints-importer#storing-configurations

### FinTS 支持

这个导入器支持使用 FinTS（金融交易服务）协议的德国银行。大多数德国主要银行支持 FinTS 进行自动交易检索。

## 安装

这个插件的安装非常简单，与其他插件的安装方式类似。

1. 将我的插件仓库添加到您的 Home Assistant 实例中（在 Supervisor 插件商店的右上角，或点击下面的按钮如果您已经配置了我的 HA）
   [![打开您的 Home Assistant 实例并显示带有特定仓库 URL 预填充的添加插件仓库对话框。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Falexbelgium%2Fhassio-addons)
2. 安装这个插件。
3. 点击 `保存` 按钮以存储您的配置。
4. 根据您的喜好设置插件选项。
5. 启动插件。
6. 检查插件的日志以查看是否一切正常。
7. 打开 Web UI 并调整软件选项。

## 支持

在 github 上创建问题

## 插图

[repository]: https://github.com/alexbelgium/hassio-addons