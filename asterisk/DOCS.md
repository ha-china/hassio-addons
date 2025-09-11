# 配置

```yaml
config_files:
  - /config/asterisk/sip.conf
```

### `config_files`

一个指向您 asterisk 配置文件的路径列表。
每个列出的文件将在每次插件启动时覆盖 `/etc/asterisk` 的模板配置文件。
配置文件可以位于 `/config` 或 `/share`。

有关示例文件，请查看 [官方 asterisk 仓库](https://github.com/asterisk/asterisk/blob/main/configs/samples)。

## 测试

默认情况下，有一个测试 SIP 电话设置。使用用户 `1001` 和密码 `1234`，可以拨打号码 `100`。
应该有声音确认工作状态。