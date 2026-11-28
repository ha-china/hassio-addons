# 蓝牙存在监测器

[![GitHub Release][release-shield]][release]
![项目阶段][project-stage-shield]
![项目维护](https://img.shields.io/badge/maintainer-Andrey%20Khrolenok%20%40Limych-blue.svg)

[![GitHub pull requests](https://img.shields.io/github/issues-pr/Limych/addon-presence-monitor?style=popout)](https://github.com/Limych/addon-presence-monitor/pulls)
[![Bugs](https://img.shields.io/github/issues/Limych/addon-presence-monitor/bug.svg?colorB=red&label=bugs&style=popout)](https://github.com/Limych/addon-presence-monitor/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

对信标、手机和其他蓝牙设备的被动蓝牙存在检测。

## 关于

这个插件实际上是一个方便的使用外壳，用于在同一台机器上启动 [Andrew J Freyer 的监控脚本](https://github.com/andrewjfreyer/monitor)，而该机器也是 Home Assistant 运行的地方。
这个脚本对于基于 MQTT 的家庭自动化非常有用，尤其是在脚本在多个设备上运行，分布在整个房产中的时候。

你可以以任何组合方式结合这个插件和这个存在监测脚本的常见版本。

[点击此处查看完整文档][docs]


[docs]: https://github.com/Limych/addon-presence-monitor/blob/v1.0.0/README.md
[project-stage-shield]: https://img.shields.io/badge/project%20stage-beta-yellow.svg
<!-- [project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg -->
[release-shield]: https://img.shields.io/badge/version-v1.0.0-blue.svg
[release]: https://github.com/Limych/addon-presence-monitor/tree/v1.0.0