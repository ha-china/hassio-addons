# Home Assistant Omada Add-On

这个插件将 Omada 控制器直接集成到在 ARM、x64 或 x86 处理器上运行的 Home Assistant 中。

Omada Stable 是从 Omada Beta 创建的（两者都在这个仓库中），
一旦 Beta 插件更新到最新的上游稳定版本。

## 贡献

这个插件是 Matt Bentley 的
[docker-omada-controller](https://github.com/mbentley/docker-omada-controller)
的分支，如果没有他们出色的工作，jkunczik 的
[home-assistant-omada](https://github.com/jkunczik/home-assistant-omada)
将不可能实现。
除了原始的 docker Omada 控制器之外，
这个插件将所有持久数据存储在 /data 目录中，
以便与 Home Assistant 兼容。
没有其他人的努力，这个插件将不可能实现。
我们始终欢迎对版本更新或新功能的 Pull requests。
特别感谢 DraTrav 推动了这个插件的发展！