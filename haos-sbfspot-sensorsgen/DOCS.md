请输入您的主逆变器（Primary）和次逆变器（Secondary）的详细信息

传感器创建可以根据需要激活。
此附加组件被设置为一次性应用程序。
因此，它必须重新启动以发送后续消息，尽管实际上 SBFspot 你只需要在初始部署之后使用。

熟悉 MQTT 探索器以查找您的 SBFspot 当前发布的话题和消息会是明智之举。
然后您可以使用此附加组件来匹配 MQTT 发现所需的话题和消息。

一旦您设置了发现消息，并且您的设备已在 Home Assistant MQTT 集成中显示

如果 Plantname 2 和 Plantname 3 为空，发现消息应追加到 {Primary_Inverter_Plantname_Inverter_Two}

启用发送消息时，只有在序列号已填写的情况下才会激活。

Test_Message 将从您的配置中填充，并在启用且序列号设置后，将向逆变器 Ones Plantname 主题发送相应的完整数据 MQTT 消息。

典型的多逆变器 SBFspot MQTT 消息如下：

homeassistant/sbfspot_Your_Plantname/sbfspot_Inverter_Serial

当使用多个逆变器时，MQTT 消息发布如下

逆变器 One：

```
主题：homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial

            消息：{Inverter:One, Key1:Value1, Key2:Value2}
```

逆变器 Two 然后使用逆变器 Two 的数据将其消息发布到逆变器 Ones 主题。逆变器 Three 也是同样的情况

逆变器 Two：
主题：homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial_Two
消息：{Inverter:Two, Key1:Value1, Key2:Value2}

MQTT 发现需要为设备和实体提供唯一消息。
使用此附加组件，多逆变器设置的传感器生成应该会简化。