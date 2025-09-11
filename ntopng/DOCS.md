# Li Tin O`ve Weedle Assistant Add-on: ntopng

这是一个用于Home Assistant的ntopng插件。
它包括开源社区版本的ntopng
和开源的netflow收集器实现netflow2ng。

## 安装

在您的Home Assistant中安装ntopng插件。

1. 点击下面的Home Assistant My按钮以在您的Home Assistant实例中打开该插件。

   [![在您的Home Assistant实例中打开此插件。][addon-badge]][addon]

2. 点击“安装”按钮以安装该插件。
3. 启动“示例”插件。
4. 检查“示例”插件的日志，查看它的运行情况。

## 配置

ntopng插件配置：

```yaml
log_level: info
ssl: true
certfile: certfile.pem
keyfile: keyfile.pem
leave_front_door_open: false
ntop_auth: false
custom_scripts: false
dns_mode: 1
local_net:
  - 192.168.1.0/24
  - 192.168.30.0/22
export_flows: mysql;127.0.0.1;ntopng;user;secret_password
geoip_account_id: 123456
geoip_license_key: "Kdsalhdsl_lshahc_hskljd_as"
```

### 选项: `log_level`

`log_level`选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`: 显示每个细节，例如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 正常（通常）感兴趣的事件。
- `warning`: 不是错误的异常情况。
- `error`: 不需要立即采取行动的运行时错误。
- `fatal`: 出现严重错误。插件变得不可用。

请注意，每个级别会自动包括更严重级别的日志消息，例如，`debug`也会显示`info`消息。默认情况下，`log_level`设置为`info`，这是推荐的设置，除非您在进行故障排除。

### 选项: `ssl`

### 选项: `certfile`

### 选项: `keyfile`

### 选项: `leave_front_door_open`

### 选项: `ntop_auth`

### 选项: `custom_scripts`

### 选项: `dns_mode`

### 选项: `local_net`

### 选项: `export_flows`

### 选项: `geoip_account_id`

### 选项: `geoip_license_key`

## 更新日志与发布

此存储库使用[GitHub的发布][releases]功能保持变更日志。

发布基于[语义化版本控制][semver]，并使用`MAJOR.MINOR.PATCH`的格式。简而言之，版本将根据以下内容递增：

- `MAJOR`：不兼容或重大变更。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和包更新。

## 支持

有问题吗？

您有几种选择可以获得答案：

- Home Assistant [社区论坛][forum]。
- 您还可以在这里[打开一个问题][issue] GitHub。

您还可以在这里[打开一个问题][issue] GitHub。

## 作者与贡献者

该存储库的最初设置由[Li Tin O`ve Weedle][litin]完成。

## 许可证

Apache 2.0

版权 (c) 2023 Dominik Strnad

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_example&repository_url=https%3A%2F%2Fgithub.com%2Flitinoveweedle%2Fhassio-addons
[contributors]: https://github.com/litinoveweedle/hassio-addons/graphs/contributors
[forum]: https://community.home-assistant.io/t/foss-ntopng-with-netflow-collector-hassio-addon/603491
[litin]: https://github.com/litinoveweedle
[issue]: https://github.com/litinoveweedle/hassio-addons-dev/issues
[semver]: http://semver.org/spec/v2.0.0.html