# Home Assistant Community Add-on: motionEye

motionEye 是一个流行的用于 camera 软件 motion 的前端。这个插件提供了两者，允许您将您的 camera 添加到您的 Hass.io 设置中。

motionEye 是一个开源的 CCTV 和 NVR，既美观又非常易于使用。它可以作为一个 Baby Monitor、Construction Site Montage Viewer、Store Camera DVR、Garden Security，以及更多用途。

motionEye 的一些酷炫功能：

- 支持大量的 camera，包括 IP camera。
- 通过将多个 motionEye 实例连接在一起来添加多个 camera。例如，在您的网络中使用 MotionEyeOS 在一个 Pi Zero + Pi camera 上。
- 支持将录制上传到 Google Drive 和 Dropbox。
- motion 检测，包括电子邮件通知和计划。
- 可以连续录制、motion 或 timelapse，并具有保留设置。
- 支持在配置中实现 "[action buttons][motioneye-wiki-action-buttons]"。

## 安装

这个插件的安装非常简单，与安装任何其他 Home Assistant 插件没有区别。

1. 点击下面的 Home Assistant My 按钮，在您的 Home Assistant 实例上打开插件。

   [![在您的 Home Assistant 实例上打开此插件。][addon-badge]][addon]

1. 点击 "Install" 按钮来安装插件。
1. 启动 "motionEye" 插件
1. 检查 "motionEye" 插件的日志，看看是否一切正常。
1. 点击 "OPEN WEB UI" 按钮来打开 Web 界面
1. 使用用户名 "admin"，无需密码登录。
1. 使用一个安全的密码编辑您的管理员帐户！

默认情况下，Home Assistant 配备了 Community Add-ons store。但是，如果它丢失了（出于任何原因），您可以通过点击下面的按钮来添加它。

[![将存储库添加到您的 Home Assitant 实例。][repository-badge]][repository]

## 配置

**注意**：_在配置更改时，请重新启动插件。_

示例插件配置：

```yaml
log_level: info
ssl: true
certfile: mycertfile.pem
keyfile: mykeyfile.pem
```

**注意**：_这只是一个示例，不要复制粘贴！创建您自己的！_

### 选项：`log_level`

`log_level` 选项控制插件的日志输出级别，可以更改为更详细或更简洁，这在处理未知问题时可能很有用。可能的值是：

- `trace`：显示每个细节，例如所有调用的内部函数。
- `debug`：显示详细的调试信息。
- `info`：正常（通常）有趣的事件。
- `warning`：非异常的异常情况。
- `error`：运行时错误，不需要立即采取行动。
- `fatal`：出了严重的问题。插件变得无法使用。

请注意，每个级别自动包含更严重级别的日志消息，例如，`debug` 也显示 `info` 消息。默认情况下，`log_level` 设置为 `info`，这是推荐设置，除非您正在解决问题。

### 选项：`motion_webcontrol`

启用在端口 `7999` 上运行的 motion webcontrol 端点。

:warning: MotionEye HTTP webcontrol **不**支持身份验证，**不**支持 SSL！仅在您知道自己在做什么时启用它！**永远，永远**不要将此端口暴露给外部世界！

### 选项：`ssl`

在 motionEye 的 Web 界面上启用/禁用 SSL (HTTPS)。设置为 `true` 以启用它，`false` 否则。

### 选项：`certfile`

用于 SSL 的证书文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认的_

### 选项：`keyfile`

用于 SSL 的私钥文件。

**注意**：_文件必须存储在 `/ssl/`，这是默认的_

### 选项：`action_buttons`

如果配置，将创建一个脚本来实现 [action button][motioneye-wiki-action-buttons]。

示例 action buttons 配置：

```yaml
action_buttons:
  - type: light_on
    camera: 1
    command: "curl -s 192.168.1.1/index.html?light=ON > /dev/null"
  - type: light_off
    camera: 1
    command: "curl -s 192.168.1.1/index.html?light=OFF > /dev/null"
```

#### 子选项：`action_buttons.type`

动作按钮的类型。接受的类型是：

- `lock` 和 `unlock`。
- `light_on` 和 `light_off`。
- `alarm_on` 和 `alarm_off`。
- `up`、`right`、`down` 和 `left`。
- `zoom_in` 和 `zoom_out`。
- `preset1` 到 `preset9`。

#### 子选项：`action_buttons.camera`

camera 的识别编号。对应于在 motionEye UI 中设置的 camera 编号。

#### 子选项：`action_buttons.command`

按钮被按下时要执行的 bash shell 命令。

## 更改日志与发布

此存储库使用 [GitHub 的发布][releases] 功能来维护更改日志。

发布基于 [语义版本控制][semver]，并使用 `MAJOR.MINOR.PATCH` 的格式。简而言之，版本将根据以下情况增加：

- `MAJOR`：不兼容或主要更改。
- `MINOR`：向后兼容的新功能和增强。
- `PATCH`：向后兼容的错误修复和软件包更新。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Community Add-ons Discord chat server][discord] 用于插件支持和功能请求。
- [Home Assistant Discord chat server][discord-ha] 用于一般 Home Assistant 讨论和问题。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

您也可以在 GitHub 上 [打开一个问题][issue]。

## 作者与贡献者

此存储库的原始设置由 [Franck Nijhof][frenck] 完成。

有关所有作者和贡献者的完整列表，请查看 [贡献者页面][contributors]。

## 许可证

MIT 许可证

版权所有 (c) 2018-2025 Franck Nijhof

特此授予任何获得此软件及其相关文档文件（“软件”）副本的人，在不受限制的情况下处理软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件副本的权利，并允许提供软件的人这样做，但须遵守以下条件：

上述版权声明和本许可声明应包含在软件的所有副本或重要部分的软件中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于对适销性、特定用途适用性和非侵权性的保证。在任何情况下，作者或版权持有人均不对任何索赔、损害赔偿或其他责任承担责任，无论是由合同、侵权或其他行为引起的，均由软件或软件的使用或其他交易引起。