# Home Assistant Community Add-on: Bash Script Executer
![支持 aarch64 架构][aarch64-shield] ![支持 amd64 架构][amd64-shield] ![支持 armhf 架构][armhf-shield] ![支持 armv7 架构][armv7-shield] ![支持 i386 架构][i386-shield]
![项目维护状态][maintenance-shield]

为 Homeassistant OS 设计的 Bash 脚本执行器

## 关于

这是一个用于执行个人脚本的简单 Docker 镜像。我需要这个的原因是，Home Assistant OS 安装的特性有限（例如没有 curl、sed 等），而这个插件可以解决这个问题。<br />
您可以使用这个插件运行最多三个不同的脚本。<br />
这个 Docker 镜像包含：busybox-extras curl grep coreutils sed xmlstarlet

## 安装

[![FaserF Homeassistant Add-ons](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2FFaserF%2Fhassio-addons)
<br />
这个插件的安装非常简单，与安装任何其他自定义 Home Assistant 插件没有区别。<br />
只需点击上面的链接或在我的 repo 中添加 Homeassistant 添加件仓库： <https://github.com/FaserF/hassio-addons>

将您的脚本放在 /share/ 文件夹的某个位置。其他文件夹对这个插件不可见。<br />
示例文件位置：/share/scripts/script.sh

## 配置

**建议禁用此插件在 Home Assistant 中的“启动时启动”和“看门狗”选项！**<br />

**注意**：_在更改配置时，请重启插件。_

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

**注意**：_这只是一个示例，不要复制粘贴！创建您自己的！_

### 选项：`script_path`

这个选项是必需的。根据您的脚本位置更改它，或者将其设置为“false”以留空。

### 选项：`scriptX_argumentX`

这个选项是可选的。您可以使用这个选项向您的脚本提交最多三个参数。

### 选项：`script_path2`

这个选项是必需的。根据您的脚本位置更改它，或者将其设置为“false”以留空。

### 选项：`script_path3`

这个选项是必需的。根据您的脚本位置更改它，或者将其设置为“false”以留空。

## Cron 支持 - 按时间运行脚本

我还没有在这个插件中实现 Cron，因为您可以通过 Homeassistant 自动化周期性地运行您的脚本。
示例自动化：<br />

```yaml
  - alias: "使用 Bash Script Executer 插件运行 Bash 脚本"
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

## 支持

有问题或问题？

您可以在这里 [打开 GitHub 问题][issue]。
请注意，这个软件只在 armv7 架构的 Raspberry Pi 4 上进行了测试。而且我制作这个插件是为了我的个人脚本。

## 作者和贡献者

hassio 插件由 [FaserF] 提供。

## 许可证

MIT 许可证

版权所有（c）2025 FaserF

特此免费授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分中。

软件按“原样”提供，不提供任何形式的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害或其他责任承担责任，无论是合同行为、侵权行为还是其他行为，均源于、来自或与软件的使用或其他交易有关。

[maintenance-shield]: https://img.shields.io/maintenance/yes/2025.svg
[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[FaserF]: https://github.com/FaserF/
[issue]: https://github.com/FaserF/hassio-addons/issues
**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**



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
