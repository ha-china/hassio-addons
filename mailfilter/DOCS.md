# Home Assistant Add-on: Mailfilter

基于Rspamd和ClamAV的Mailfilter。

![支持aarch64架构][aarch64-shield] ![支持amd64架构][amd64-shield]
![支持armv7架构][armv7-shield]

## 关于

重要提示：此插件需要Mailserver插件已安装并运行！

此插件是实验性的，为您的Mailserver插件提供邮件过滤功能。
它只能过滤Mailserver插件的邮件。

## 安装

按照以下步骤在您的系统上安装插件：

添加仓库 `https://github.com/erik73/hassio-addons`。
找到“Mailfilter”插件并点击它。
点击“安装”按钮。

## 使用方法

### 启动插件

安装后，您将获得默认配置。

调整插件配置以匹配您的需求。
通过点击“保存”按钮保存插件配置。
启动插件。

## 配置

示例配置：

```yaml
enable_antivirus: false
enable_dkim_signing: false
```

请注意：防病毒选项将消耗大量内存。
绝对最小要求是主机安装了4GB的RAM。
根据安装的其他插件，6GB可能也不够。

### 选项：`enable_antivirus`（可选）

启用此选项将启用ClamAV病毒扫描器。
有关内存考虑的详细信息，请参阅上文。

### 选项：`enable_gtube_tests`（可选）

启用此选项将使Rspamd能够识别特定于Rspamd的GTUBE样式的测试模式。不建议在生产环境中启用此选项，因为它可能会被用来绕过垃圾邮件检查。仅在测试您的设置时使用它！

### 选项：`enable_dkim_signing`（可选）

为发出的邮件启用DKIM签名。
启用此选项后，第一次启动将生成DKIM密钥。
如果您关闭此选项，您的密钥将被删除。
再次启用它将生成新密钥。
密钥将显示在日志输出中。以下是插件生成密钥的方式：

```
rspamadm dkim_keygen -b 2048 -s mail -k /ssl/dkim/mail.key
```

选择器是'mail'，生成2048位RSA密钥。
mail.key和mail.pub文件保存在Home Assistant的/ssl/dkim目录中。以下是插件日志中的示例输出：

```
mail._domainkey IN TXT ( "v=DKIM1; k=rsa; "
	"p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqdBRCqYzshc4LmmkxUkCH/rcIpSe/QdNIVmBrgqZmZ5zzWQi7ShdFOH7V32/VM1VRk2pkjDV7tmfbwslsymsfxgGhVHbU0R3803uRfxAiT2mYu1hCc9351YpZF4WnrdoA3BT5juS3YUo5LsDxvZCxISnep8VqVSAZOmt8wFsZKBXiIjWuoI6XnWrzsAfoaeGaVuUZBmi4ZTg0O4yl"
	"nVlIz11McdZTRe1FlONOzO7ZkQFb7O6ogFepWLsM9tYJ38TFPteqyO3XBjxHzp1AT0UvsPcauDoeHUXgqbxU7udG1t05f6ab5h/Kih+jisgHHF4ZFK3qRtawhWlA9DtS35DlwIDAQAB"
) ;
```

如果您正在运行自己的Bind DNS服务器，只需将记录直接复制粘贴到您的域区域文件中。
如果您使用DNS网页界面，您需要创建一个新的TXT记录，将mail.\_domainkey作为名称，而值/内容则需要删除引号并将所有三行连接在一起。
在这种情况下，TXT记录的值/内容应如下所示：

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqdBRCqYzshc4LmmkxUkCH/rcIpSe/QdNIVmBrgqZmZ5zzWQi7ShdFOH7V32/VM1VRk2pkjDV7tmfbwslsymsfxgGhVHbU0R3803uRfxAiT2mYu1hCc9351YpZF4WnrdoA3BT5juS3YUo5LsDxvZCxISnep8VqVSAZOmt8wFsZKBXiIjWuoI6XnWrzsAfoaeGaVuUZBmi4ZTg0O4ylnVlIz11McdZTRe1FlONOzO7ZkQFb7O6ogFepWLsM9tYJ38TFPteqyO3XBjxHzp1AT0UvsPcauDoeHUXgqbxU7udG1t05f6ab5h/Kih+jisgHHF4ZFK3qRtawhWlA9DtS35DlwIDAQAB
```

当DKIM选项关闭时，/ssl/dkim中的密钥文件将被删除。
如果您再次启用该选项，将创建新密钥。

## 支持

有问题？

您可以在GitHub上[打开一个问题][issue]。

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg
[i386-shield]: https://img.shields.io/badge/i386-yes-green.svg
[issue]: https://github.com/erik73/addon-mailfilter/issues
[repository]: https://github.com/erik73/hassio-addons