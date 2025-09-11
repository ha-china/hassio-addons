# Home Assistant 插件：远程关机

## 安装

按照以下步骤在您的系统上安装插件：

1. 在您的 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
2. 找到“远程关机”插件并点击它。
3. 点击“安装”按钮。

## 如何使用

在配置部分，定义别名、地址和凭据并保存配置。

1. 启动插件。
2. 检查插件日志输出以查看结果。

## 配置

插件配置：

```yaml
computers:
  - alias: test-pc-1
    address: 192.168.0.1
    credentials: user%password
    delay: 0
    message: Home Assistant 正在关闭这台电脑。此操作无法取消。请保存您的工作！
  - alias: test-pc-2
    address: 192.168.0.2
    credentials: user%password
    delay: 0
    message: Home Assistant 正在关闭这台电脑。此操作无法取消。请保存您的工作！
```

### 选项：`computers`（必需）

一个计算机对象的列表，能够从 Home Assistant 进行关机。

### 选项：`computers.alias`（必需）

为此记录设置一个别名，作为输入的名称。

### 选项：`computers.address`（必需）

能够关闭的计算机的 IP 地址或 NetBIOS 名称。

### 选项：`computers.credentials`（必需）

登录计算机的凭据。
使用 `%` 作为用户名和密码的分隔符。

### 选项：`computers.delay`（可选）

关闭计算机前的延迟（以秒为单位）。这给正在使用该计算机的用户留出时间保存他们的工作。

### 选项：`computers.message`（可选）

在将要关闭的计算机屏幕上显示自定义消息。

## Home Assistant 配置

在 Home Assistant 服务调用中使用以下内容：

```yaml
service: hassio.addon_stdin
data:
  addon: core_rpc_shutdown
  input: test-pc
```

每行解释：

`service: hassio.addon_stdin`: 使用 hassio.addon_stdin 服务通过 STDIN 向插件发送数据。  
`data.addon: core_rpc_shutdown`: 告诉服务将命令发送到此插件。  
`data.input: test-pc`: 在插件配置中为计算机创建的别名，将其关闭。

## 支持

有问题吗？

您有几种选择可以得到答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [/r/homeassistant][reddit] 的 [Reddit 子版块][reddit]。

如果您发现了一个错误，请 [在我们的 GitHub 上提交问题][issue]。

[forum]: https://community.home-assistant.io  
[issue]: https://github.com/home-assistant/addons/issues  
[reddit]: https://reddit.com/r/homeassistant  
[discord]: https://www.home-assistant.io/join-chat  