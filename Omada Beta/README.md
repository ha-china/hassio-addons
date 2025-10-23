# Home Assistant Omada Add-On Beta

这个插件将 Omada 控制器直接引入到运行在 64 位 ARM 或 x64 处理器上的 Home Assistant。

Omada Beta 包含了 [docker-omada-controller](https://github.com/mbentley/docker-omada-controller) 的最新移植版本。
如果你需要更新的版本，请打开一个问题，或者更好的是提交一个拉取请求。

从 v5 升级到 v6，请阅读 [docker-omada-controller](https://github.com/mbentley/docker-omada-controller) 上的说明。

## 贡献

这个插件是 Matt Bentley 的 [docker-omada-controller](https://github.com/mbentley/docker-omada-controller) 的分支，
没有他们的出色工作，jkunczik 的 [home-assistant-omada](https://github.com/jkunczik/home-assistant-omada) 将不可能实现。
除了原始的 docker omada 控制器外，这个插件将所有持久数据存储在 /data 目录中，
以便与 Home Assistant 兼容。
没有其他人的努力，这个插件将不可能实现。
对于版本更新或新功能的拉取请求总是非常受欢迎。
特别感谢 DraTrav 推动这个插件向前发展！