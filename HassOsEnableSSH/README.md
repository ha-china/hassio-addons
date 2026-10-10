## HassOS SSH 端口 22222 配置工具
在启动时将 authorized_keys 文件放置在 HassOS 所需的位置，以启用 SSH 端口 22222。运行一次，然后将其删除。您不需要再次运行它。

您可以连接一个SD卡和最多两个硬盘或USB驱动器，它们被识别为 sda 或 sdb，并且它们都将启用 HassOS SSH 端口 22222。

# 支持
支持在 Home Assistant Community 论坛提供，[点击这里](https://community.home-assistant.io/t/add-on-hassos-ssh-port-22222-configurator/264109)

# 操作
**重要提示** 当请求重启时，选择 Supervisor->Reboot Host，或从机器上拔掉电源插头并重新启动。

点击开始按钮并观察日志。在运行此操作后执行 2 次拔掉电源重启。当它告诉您找到了 I2C 时，您可以卸载该插件。