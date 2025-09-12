# Home Assistant Add-on: Terminal & SSH

## 安装

按照以下步骤在您的系统上安装此插件：

1. 此插件仅对“高级模式”用户可见。要启用高级模式，请转到 **个人资料** -> 并打开 **高级模式**。
2. 在 Home Assistant 前端导航到 **设置** -> **插件** -> **插件商店**。
3. 找到“终端 & SSH”插件并点击它。
4. 点击“安装”按钮。

## 如何使用

此插件为您的 Home Assistant 安装添加了两个主要功能：

- 一个您可以通过浏览器使用的网页终端，以及
- 启用使用 SSH 客户端连接到您的系统。

无论您如何连接（使用网页终端或使用 SSH 客户端），您最终都会进入此插件的容器。Home Assistant 配置目录位于路径 `/config`。

此插件捆绑了 [The Home Assistant CLI](https://www.home-assistant.io/common-tasks/os#home-assistant-via-the-command-line)。尝试使用：

```bash
ha help
```

### 网页终端

您可以通过点击此插件信息选项卡上的“打开网页界面”按钮来访问网页终端。如果您将“在侧边栏中显示”设置（位于同一信息选项卡上）设置为“开启”，则会向侧边栏添加一个快捷方式，以便您快速访问网页终端。

要从 Web UI 复制文本：
1. 按住 SHIFT 键。
2. 使用鼠标选择您要复制的文本。
3. 在释放鼠标左键时，文本将被复制到您的系统剪贴板。

要将文本粘贴到 Web UI：
1. 按 SHIFT + INSERT。

### SSH 服务器连接

默认情况下，从网络进行远程 SSH 访问是禁用的（见下文网络部分）。要使用 SSH 客户端（如 PuTTY 或 Linux 终端）连接，您需要为此插件提供额外的配置。要启用 SSH 连接性，您需要：

- 提供身份验证凭据 - 密码或 SSH 密钥
- 指定在 Home Assistant 主机上绑定到的 TCP 端口

然后，您可以使用用户名 `root` 连接到指定的端口。请注意，启用 SSH 服务器可能会使您的 Home Assistant 系统的安全性降低，因为它可能会使互联网上的任何人尝试访问您的系统。您的系统的安全性还取决于您的网络设置、路由器设置、防火墙的使用等。通常建议，除非您了解其影响，否则不要激活此插件的部分功能。

如果您启用使用 SSH 客户端连接到 SSH 服务器，强烈建议您使用私钥/公钥登录。只要您保护好您的密钥的私钥部分，这会使您的系统更难被入侵。因此，通常认为使用密码是一种不太安全的机制。要生成私钥/公钥 SSH 密钥，请遵循 [Windows 的说明][keygen-windows] 和 [这些其他平台的说明][keygen]。

**注意**：在遵循上述说明时，选择 ECDSA 作为 `要生成的密钥类型` 而不是 RSA。RSA 现在不再受支持。

启用密码登录将禁用基于密钥的登录。您不能同时运行这两个变体。

## 配置

插件配置：

```yaml
authorized_keys:
  - "ssh-rsa AKDJD3839...== my-key"
password: ''
apks: []
server:
  tcp_forwarding: false
```

### 选项：`apks`

在插件容器中安装的附加软件包。

### 选项：`authorized_keys`

您希望接受的用于登录的**公钥**。您可以通过向列表中添加多个公钥来授权多个密钥。

如果您在添加密钥时遇到错误，很可能是您试图添加的公钥中包含干扰 YAML 语法字符。尝试将密钥用双引号括起来以避免此问题。

### 选项：`password`

设置登录密码。**我们不推荐此变体**。

### 选项组 `server`

一些 SSH 服务器选项。

#### 选项 `tcp_forwarding`

指定是否允许 TCP 端口转发（-L -R 等）。

**注意**：_启用此选项会降低 SSH 服务器的安全性！尽管如此，此警告存在争议。_

## 网络

只有当您希望使用 SSH 客户端（如 PuTTY 或 Linux 终端）连接到 Home Assistant 时，本节才适用。要启用网络上的 SSH 远程访问，请在网络配置输入框中指定所需的 SSH TCP 服务器端口。您输入的数字将用于将该端口从主机映射到正在运行的“终端 & SSH”插件。SSH 协议的标准端口是 `22`。  

您可以通过清除输入框、保存配置并重新启动插件来再次禁用远程 SSH 访问。

## 已知问题和限制

- 此插件不会让您能够安装软件包或以 root 身份执行任何操作。
  这与 Home Assistant 不兼容。

## 支持

有问题？

您有几个选项来获得答案：

- [Home Assistant Discord 聊天服务器][discord]。
- Home Assistant [社区论坛][forum]。
- 加入 [Reddit 子版块][reddit] 在 [/r/homeassistant][reddit]

如果您发现了一个错误，请 [在我们的 GitHub 上打开一个问题][issue]。

[discord]: https://discord.gg/c5DvZ4e
[forum]: https://community.home-assistant.io
[issue]: https://github.com/home-assistant/addons/issues
[keygen-windows]: https://www.digitalocean.com/community/tutorials/how-to-create-ssh-keys-with-putty-to-connect-to-a-vps
[keygen]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[reddit]: https://reddit.com/r/homeassistant