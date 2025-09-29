# Home Assistant Add-on: FreshRSS

一个免费、可自托管的聚合器。

## 安装

将此存储库添加到您的 [Hass.io](https://home-assistant.io/hassio/) 实例：

`https://github.com/einschmidt/hassio-addons`

如果您遇到问题，可以参考 [官方文档](https://home-assistant.io/hassio/installing_third_party_addons/)。

然后安装 "FreshRSS" add-on。

## 配置

**注意**: _更改配置时，请记得重启 add-on。_

示例 add-on 配置：

```yaml
log_level: info
base_url: example.domain.com
ssl: false
certfile: fullchain.pem
keyfile: privkey.pem
```

### 选项: `log_level`

`log_level` 选项控制 add-on 的日志输出级别，可以设置为更详细或更简洁，这在处理未知问题时可能很有用。可能的值有：

- `trace`: 显示所有细节，例如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 通常（正常）有趣的事件。
- `warning`: 非常规的异常情况，但不是错误。
- `error`: 运行时错误，不需要立即采取行动。
- `fatal`: 发生了严重错误。Add-on 变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在排错。

### 选项: `base_url`

FreshRSS 实例可访问的地址。

### 选项: `ssl`

在 Web 界面上启用/禁用 SSL (HTTPS)！设置为 `true` 以启用，否则设置为 `false`。

### 选项: `certfile`

用于 SSL 的证书文件。

**注意**: _文件必须存储在 `/ssl/`，这是默认设置_。

### 选项: `keyfile`

用于 SSL 的私钥文件。

**注意**: _文件必须存储在 `/ssl/`，这是默认设置_。

## 第三方扩展

此 add-on 允许您使用 **addon_config** 文件夹存储和管理 FreshRSS 扩展。

- 此文件夹在 add-on 内部映射自 **Home Assistant addon_config 目录**。
- 如果从 GitHub 存储库安装，则存储在：

```
/addon_configs/{REPO}_freshrss/extensions