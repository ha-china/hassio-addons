# Home Assistant Community Add-on: Bash Script Executer
![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield] ![Supports armhf Architecture][armhf-shield] ![Supports armv7 Architecture][armv7-shield] ![Supports i386 Architecture][i386-shield]
![Project Maintenance][maintenance-shield]

Bash Script Executer for Homeassistant OS

## About

这是一个用于执行个人脚本的简单 Docker 镜像。我需要这个的原因是，Home Assistant OS 安装的特性有限（例如没有 curl、sed 等），而这个插件解决了这个问题。<br />
您可以使用这个插件运行多达三个不同的脚本。<br />
这个 Docker 镜像包含：busybox-extras curl grep coreutils sed xmlstarlet

## Installation

[![FaserF Homeassistant Addons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与安装其他任何自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或向 hassio 插件仓库添加我的仓库：<https://github.com/FaserF/hassio-addons>

将您的脚本放在 /share/ 文件夹中的某个位置。其他文件夹对这个插件不可见。<br />
您的脚本可能所在的示例文件：/share/scripts/script.sh

## Configuration

**我建议禁用这个插件的 "启动时启动" 和 HA 的 Watchdog 选项！**<br />

**注意**：_当配置更改时，请重启插件。_

示例插件配置：

```yaml
script_path: /share/scripts/script.sh
script_argument1: myFirstArgument
script_argument2: AnotherVariable
script_argument3: AnotherVariable
script_path2: false
script2_argument1:
script2_argument2:
script2_argument3:
script_path3: false
script3_argument2:
script3_argument2:
script3_argument3:
```

**注意**：_这只是个示例，不要复制粘贴！请创建自己的配置。_

### 选项：`script_path`

这个选项是必需的。根据您的脚本位置更改它，或者将其更改为 "false" 以留空。

### 选项：`scriptX_argumentX`

这个选项是可选的。您可以使用这个选项向您的脚本提交最多三个参数。

### 选项：`script_path2`

这个选项是必需的。根据您的脚本位置更改它，或者将其更改为 "false" 以留空。

### 选项：`script_path3`

这个选项是必需的。根据您的脚本位置更改它，或者将其更改为 "false" 以留空。

## Cron Support - running scripts by time

我还没有在这个插件中实现 Cron，因为您可以通过 Homeassistant 自动化定期运行您的脚本。
示例自动化：<br />

```yaml
  - alias: "Run Bash Script with Addon Bash Script Executer"
    trigger:
      - platform: time
        at: '00:02:00'
      - platform: time_pattern
        minutes: '/90'
        seconds: 0
    action:
      - service: hassio.addon_start
        data:
          addon: 605cee21_bashscriptexecuter
```

## Support

有问题或问题？

您可以在 GitHub 上 [打开一个 issue][issue]。
请注意，这个软件只在 armv7 上运行于 Raspberry Pi 4 上测试过。而且我制作这个插件是为了我的个人脚本。

## Authors & contributors

hassio 插件由 [FaserF] 提供。

## License

MIT License

Copyright (c) 2025 FaserF

允许免费复制此软件和关联的文档文件（“软件”），并在没有任何限制的情况下处理该软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许向提供软件的人员这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，无论是明示的还是暗示的，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任负责，无论是合同行为、侵权行为还是其他行为，均由软件或软件的使用或其他交易引起。
## 📱 关注我

扫描下面二维码，关注我。有需要可以随时给我留言：

<img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/WeChat_QRCode.png" width="50%" /> 📲

## ☕ 赞助支持

如果您觉得我花费大量时间维护这个库对您有帮助，欢迎请我喝杯奶茶，您的支持将是我持续改进的动力！

<div style="display: flex; justify-content: space-between;">
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/Ali_Pay.jpg" height="350px" />
  <img src="https://gitee.com/desmond_GT/hassio-addons/raw/main/1_readme/WeChat_Pay.jpg" height="350px" />
</div> 💖

感谢您的支持与鼓励！
