# 蓝牙存在监测器

[![GitHub 发布][release-shield]][release]
![项目阶段][project-stage-shield]
![项目维护](https://img.shields.io/badge/maintainer-Andrey%20Khrolenok%20%40Limych-blue.svg)

[![GitHub 拉取请求](https://img.shields.io/github/issues-pr/Limych/addon-presence-monitor?style=popout)](https://github.com/Limych/addon-presence-monitor/pulls)
[![错误](https://img.shields.io/github/issues/Limych/addon-presence-monitor/bug.svg?colorB=red&label=errors&style=popout)](https://github.com/Limych/addon-presence-monitor/issues?q=is%3Aopen+is%3Aissue+label%3Abug)

被动蓝牙设备（如信标、手机等）的存在检测。

## 注意！这是一个边缘版本！

边缘版本的插件基于最新的开发版本。

- 可能完全无法工作。
- 可能随时停止工作。
- 可能会对您的系统产生负面影响。

此版本创建的目的是：

- 任何愿意测试的人。
- 任何对尝试新插件或插件功能感兴趣的人。
- 开发者。

对于常规用途，请安装插件的稳定版本。

## 关于

这个插件实际上是一个方便的使用外壳，用于在Home Assistant运行的同一台机器上启动[Andrew J Freyer的监控脚本](https://github.com/andrewjfreyer/monitor)。
此脚本对于基于MQTT的家庭自动化非常有用，尤其是在脚本在多个设备上运行，并分布在整个房产中时。

## 功能

* 方便地启动室内存在检测。
* 您可以在插件配置中使用Home Assistant配置密钥。
* 所有必要的软件都由插件自行安装，并定期更新到最新版本。
* 脚本几乎配置完成——只需输入剩余的一两个设置。
* 完全自由地根据您的需要进行脚本重新配置。
* 您可以以任何组合方式使用插件和此存在监测脚本的常见版本。

<p align="center">* * *</p>
我为这个仓库和组件的可用性和更新投入了大量工作，以激励和帮助他人！我将很高兴收到您的感谢——这将给我新的力量和热情：
<p align="center"><br>
<a href="https://www.patreon.com/join/limych?" target="_blank"><img src="http://khrolenok.ru/support_patreon.png" alt="Patreon" width="250" height="48"></a>
<br>或&nbsp;通过比特币或以太坊支持：<br>
<a href="https://sochain.com/a/mjz640g" target="_blank"><img src="http://khrolenok.ru/support_bitcoin.png" alt="Bitcoin" width="150"><br>
16yfCfz9dZ8y8yuSwBFVfiAa3CNYdMh7Ts</a>
</p>

[:books: 阅读完整的插件文档][docs]


[docs]: https://github.com/Limych/addon-presence-monitor/blob/5e75061/presence-monitor/DOCS.md
[project-stage-shield]: https://img.shields.io/badge/project%20stage-production%20ready-brightgreen.svg
[release-shield]: https://img.shields.io/badge/version-5e75061-blue.svg
[release]: https://github.com/Limych/addon-presence-monitor/tree/5e75061