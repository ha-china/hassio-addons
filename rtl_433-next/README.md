# rtl_433 Home Assistant 插件（下一个版本）

## 关于

这是 rtl_433 插件的“下一个”版本，适用于 Home Assistant。它包括
插件本身未发布的更改，以及在构建时可用的最新
rtl_433 主分支代码。

在启动时，rtl_433 将显示版本信息，例如：

```
[rtl_433] rtl_433 版本 22.11-89-g416d6c4f 主分支于 202302071819 输入文件 rtl_tcp RTL-SDR
```

要找到 rtl_433 构建的上游 git 提交，请去掉前面的 `g`。在上述示例中，rtl_433 是在 22.11 版本发布后进行 89 次提交构建的，git 提交为 `416d6c4f`，可以在 https://github.com/merbanan/rtl_433/commit/416d6c4f9768f22e7b4cfdd684c58df17c946dbc 找到。

为了在正常和下一个版本的插件之间切换时保持 MQTT 中的相同主题，请将每个配置文件中的 `output` 行更改为：

```
output mqtt://${host}:${port},user=${username},pass=${password},retain=${retain},devices=rtl_433/9b13b3f4-rtl433/devices[/type][/model][/subtype][/channel][/id],events=rtl_433/9b13b3f4-rtl433/events,states=rtl_433/9b13b3f4-rtl433/states
```

要将 rtl_433 更新到最新版本，请卸载并重新安装插件。