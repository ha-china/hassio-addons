# 配置
HassOS SSH 端口 22222 配置器需要配置。将您的公钥以单行格式复制到配置器中，如下所示

```
SSHKey: "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDGTlRAfhm9BIV6l6sOubRgeCY0wRhYQVfB3QBWFl2ELpeAnTHwRYY+4pSP1Nu7FuZqAzDyZkssmFkbXHJGqi6EAnAkRLsKhzvDKo5WSXfEQdl2kSN5bgU/e37GfwqG4ChEfY56gwu+tdHtt4eIrzKpmUKqFZWJaGoeI9sHptQR9QNitEsm0krkOcK0VLFLTeau+HOO1A4plcLjBB9Y43SFjth/Ouke+DVGaBO2LYNc8U0S4EiHT6KdRXS4iIwYjXMw6SEsT7eP9IWQObQ4ZgyG0cHO/6ArxJ0fyOcAI29sLzM9466ID0mTaJWHriTRf6Lxhpdd/S30VTG0JMTdo/Fj  root@HLAB-A17"
```

（请注意！在最近版本的 Home Assistant 中，您不需要添加 `SSHKey:` YAML 键，除非您从 `配置` 三点菜单中选择 `以 YAML 编辑`。换句话说，只需将您的双引号 SSH 公钥直接粘贴到提供的字段中。您可能想要选择 `以 YAML 编辑` 来验证最终传递给附加组件的 YAML 是否如预期。）

保存后，Home Assistant 可能会将您的输入更改为如下所示
![image](https://raw.githubusercontent.com/adamoutler/HassOSConfigurator/main/gitResources/configuration.png)

# 支持
如果遇到问题，请在论坛中召集所有 "Karen"，并确保表现出态度，因为开发人员喜欢这样。或者，您可以提供日志并告诉我们问题、您所做的事情、设备型号，以及与您预期的不同之处。

支持在 Home Assistant 社区论坛提供 [这里](https://community.home-assistant.io/t/add-on-hassos-ssh-port-22222-configurator/264109)

# 操作
点击启动按钮并观察日志。在运行此操作后执行 2 次拔掉电源重启。当它告诉您可以找到 I2C 时，您可以卸载该附加组件。