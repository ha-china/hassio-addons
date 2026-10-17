# 配置

```yaml
language: de
```

### `language`

语言之一 `de`、`en`、`fr`、`it`、`in`、`tu` 和 `lu`。这应该与您在 Home Assistant 中配置的相同。
语音是按需下载的。

### `voice`（可选）

这指定了一个自定义语音包的 URL。确保它是一个 zip 文件，并且包含 lib 文件夹中的 voice.jar。

# UI

MaryTTS 的演示 UI 可以通过 `http://<hassio-address>:59125` 访问。