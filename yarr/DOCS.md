# Home Assistant 插件：yarr

又一个 RSS 阅读器！

## 安装

将此存储库添加到您的 [Hass.io](https://home-assistant.io/hassio/) 实例中：

`https://github.com/einschmidt/hassio-addons`

如果您遇到问题，可以查看 [官方文档](https://home-assistant.io/hassio/installing_third_party_addons/)。

然后安装 "yarr!" 插件。

## 配置

**注意**：_记得在配置更改时重新启动插件。_

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以
修改为更详细或更简洁，这在处理未知问题时可能会很有用。可能的值包括：

- `trace`: 显示每一个细节，比如所有调用的内部函数。
- `debug`: 显示详细的调试信息。
- `info`: 正常（通常）有趣的事件。
- `warning`: 不是错误的异常情况。
- `error`: 运行时错误，不需要立即处理。
- `fatal`: 发生了严重错误。插件变得不可用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐的设置，除非您在进行故障排除。

### 选项：`login.username`

设置 yarr 的登录用户名。不能为空。

### 选项：`login.password`

设置 yarr 的登录密码。不能为空。

### 选项：`ssl`

启用/禁用 yarr 的网络界面的 SSL（HTTPS）！
设置为 `true` 以启用，设置为 `false` 以禁用。

### 选项：`certfile`

用于 SSL 的证书文件。

**注意**：_文件必须存储在 `/ssl/` 目录中，这是默认位置_

### 选项：`keyfile`

用于 SSL 的私钥文件。

**注意**：_文件必须存储在 `/ssl/` 目录中，这是默认位置_

### 选项：`db_path`

此选项允许您覆盖默认的数据库文件存储路径。例如，使用不同的配置，如 `/share/yarr/yarr.db` 而不是 `/data/yarr.db`。

未配置时，插件将自动使用默认路径：`/data/yarr.db`