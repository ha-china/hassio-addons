## 在启动时运行.d
这个 Home Assistant 插件允许你在每个容器的上下文中执行启动脚本。诸如挂载文件夹、ping REST API、启动服务器以及其他类似任务可以通过脚本自动执行。

**警告**- 请自行承担风险。你的脚本将以 root 身份运行，并且有能力破坏你的机器。

# 支持
支持通过 Home Assistant 社区论坛提供， [在这里](https://community.home-assistant.io/t/run-on-startup-d/271008)

# 操作
点击启动按钮并观察日志。在启动后执行拔掉插头重启以确保生效。完成后你可以卸载插件。