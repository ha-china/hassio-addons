# Bash脚本来创建SBFspot的Home Assistant MQTT Discovery传感器

## MQTT日期完整列表

```
PrgVersion,Plantname,Timestamp,SunRise,SunSet,InvSerial,InvName,InvTime,InvStatus,InvSwVer,InvClass,InvType,InvTemperature,InvGridRelay,EToday,ETotal,GridFreq,PACTot,PAC1,PAC2,PAC3,UAC1,UAC2,UAC3,IAC1,IAC2,IAC3,OperTm,FeedTm,PDCTot,PDC1,PDC2,PDC,UDC1,UDC2,UDC,IDC1,IDC2,IDC,BTSignal,BatTmpVal,BatVol,BatAmp,BatChaStt,InvWakeupTm,InvSleepTm,MeteringWOut,MeteringWIn,MeteringWTot
```

## MQTT数据典型列表

```
PrgVersion,Plantname,Timestamp,SunRise,SunSet,InvSerial,InvName,InvTime,InvStatus,InvSwVer,InvClass,InvType,InvTemperature,InvGridRelay,EToday,ETotal,GridFreq,PACTot,PAC1,UAC1,IAC1,OperTm,FeedTm,PDCTot,UDC1,UDC2,IDC1,IDC2,PDC1,PDC2,BTSignal,InvWakeupTm,InvSleepTm
```

### 典型多逆变器SBFspot MQTT消息：

```
homeassistant/sbfspot_Your_Plantname/sbfspot_Inverter_Serial
```

当使用多个逆变器时，MQTT消息将按照以下方式发布

逆变器一：

```
主题：homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial

            消息：{Inverter:One, Key1:Value1, Key2:Value2}
```

逆变器二，然后将其消息发布到逆变器一的主题，使用逆变器二的数据。对于逆变器三也是如此

逆变器二：

```
主题：homeassistant/sbfspot_Plantname_Inverter_One/sbfspot_InvSerial_Two

            消息：{Inverter:Two, Key1:Value1, Key2:Value2}
```

### MQTT发现要求为设备和实体提供独特的消息。

使用此插件，多逆变器设置中的传感器生成应该会简化。

祝您使用愉快
---

**⚠️ This resource is intended to help Chinese Home Assistant users more easily install excellent add-ons. If you are not a Chinese user, please read repository readme first**

**⚠️ 这个资源用来帮助中国Home Assistant用户更容易地安装优秀的插件。如果您不是中国用户，请先阅读仓库的README，以下为收集者（汉化，加速）信息，非原作者信息**

---

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
