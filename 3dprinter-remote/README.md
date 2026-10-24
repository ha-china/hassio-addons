# 3DPrinter-Remote

允许您将3D打印机连接到一台设备，并从运行OctoPrint的另一台设备连接到它。
附加组件运行ser2net，可以通过例如socat连接。

*注意：性能将非常依赖网络。*

## 使用方法

在连接到打印机的机器上（`远程机器`）：
* 设置附加组件。至少需要指定`printer_path`并验证`baud_rate`是否正确。

在运行OctoPrint的机器上（`主机机器`）：
* 转到设置 --> 串行连接，部分 __其他串行端口__。添加：`socket://<远程机器>:9999`。例如，使用`远程机器`的IP。
* 安装插件 [OctoPrint-Network-Printing](https://github.com/hellerbarde/OctoPrint-Network-Printing)