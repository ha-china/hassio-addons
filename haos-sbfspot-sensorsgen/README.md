# 用于创建 Home Assistant MQTT 发现传感器的 Bash 脚本 for SBFspot。

## MQTT_Date 完整列表

```
PrgVersion,Plantname,Timestamp,SunRise,SunSet,InvSerial,InvName,InvTime,InvStatus,InvSwVer,InvClass,InvType,InvTemperature,InvGridRelay,EToday,ETotal,GridFreq,PACTot,PAC1,PAC2,PAC3,UAC1,UAC2,UAC3,IAC1,IAC2,IAC3,OperTm,FeedTm,PDCTot,PDC1,PDC2,PDC,UDC1,UDC2,UDC,IDC1,IDC2,IDC,BTSignal,BatTmpVal,BatVol,BatAmp,BatChaStt,InvWakeupTm,InvSleepTm,MeteringWOut,MeteringWIn,MeteringWTot
```

## MQTT_Data 典型列表

```
PrgVersion,Plantname,Timestamp,SunRise,SunSet,InvSerial,InvName,InvTime,InvStatus,InvSwVer,InvClass,InvType,InvTemperature,InvGridRelay,EToday,ETotal,GridFreq,PACTot,PAC1,UAC1,IAC1,OperTm,FeedTm,PDCTot,UDC1,UDC2,IDC1,IDC2,PDC1,PDC2,BTSignal,InvWakeupTm,InvSleepTm
```

### 典型的多逆变器 SBFspot MQTT 消息：

```
homeassistant/sbfspot_Your_Plantname/sbfspot_Inverter_Serial
```

当使用多个逆变器时，MQTT 消息发布如下：

逆变器一：

```
主题：homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial

            消息：{Inverter:One, Key1:Value1, Key2:Value2}
```

逆变器二，然后使用逆变器二的数据将其消息发布到逆变器一的主题上。逆变器三也是同样的情况。

逆变器二：

```
主题：homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial_Two

            消息：{Inverter:Two, Key1:Value1, Key2:Value2}
```

### MQTT 发现需要为设备和实体提供唯一的消息。

使用此插件，对于多逆变器设置，传感器生成应该会简化。

享受