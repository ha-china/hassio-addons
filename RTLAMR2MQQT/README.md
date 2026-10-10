# RTLAMR 到 MQTT 网桥 hass.io 插件
一个 hass.io 插件，用于软件定义无线电，调谐以监听 433MHz RF 传输，并通过 MQTT 重新发布数据。

这个 hassio 插件基于 biochemguy 的（非 docker）设置：https://community.home-assistant.io/t/get-your-smart-electric-water-and-gas-meter-scm-readings-into-home-assistant-with-a-rtl-sdr
这个 hass.io 插件基于 James Fry 的项目：https://github.com/james-fry/hassio-addons/tree/master/rtl4332mqtt
该项目基于 Chris Kacerguis 的项目：https://github.com/chriskacerguis/honeywell2mqtt，
而 Chris Kacerguis 的项目又基于 Marco Verleun 的 rtl2mqtt 镜像：https://github.com/roflmao/rtl2mqtt

尝试我的其他插件：https://github.com/jdeath/homeassistant-addons
目前有 MeTube（YouTube 下载器），speedtest，emulatorjs（基于网页的复古游戏控制台播放器）

_感谢所有为我的仓库点星的人！要点星，请点击下面的图像，然后它将出现在右上角。谢谢！_

[![Stargazers repo roster for @jdeath/RTLAMR2MQQT](https://reporoster.com/stars/jdeath/RTLAMR2MQQT)](https://github.com/jdeath/RTLAMR2MQQT/stargazers)

## 使用方法

1) 安装插件。可以通过以下任一方式进行：
 - 下载此存储库并在 /addons/ 下添加文件夹（例如：/addons/rtlamr2mqtt）
 - 将此存储库添加到附加组件商店

2) 使用插件配置进行配置：
- mqtt_host（使用数字 IP 地址，不要使用 hassio.local、localhost、127.0.0.1 等）。这里也不要添加端口号
- mqtt_port
- mqtt_user
- mqtt_password
- msgType
- ids

3) 将 rtl2mqtt.sh 复制到您的 hass.io 配置目录中的一个名为 rtlamr2mqtt 的子目录中。
即：
.../config/rtlamr2mqtt/rtl2mqtt.sh
这允许您在需要进行任何更改时编辑启动脚本。

如果您使用的是 64 位版本的 hassio，请在 rtl2mqtt.sh 中添加以下行：
```
export LD_LIBRARY_PATH=/usr/local/lib64
```

如果这占用了过多的处理器，向 rtl2mqtt.sh 脚本添加 -duration=60s（或者您想要的任何秒数）标签。事实证明，rtlamr 占用了相当多的处理器：
```
/go/bin/rtlamr -format json -msgtype=$MQTT_MSGTYPE -filterid=$MQTT_IDS -duration=60s | while read line
```
同时增加等待再次扫描的睡眠时间到您想要的秒数。我使用的是 60 秒的处理时间，然后是 5 分钟（300 秒）的睡眠时间。

注意，有些人报告在使用 samba 复制脚本时遇到问题。由于某种原因，它在插件启动时没有被复制到容器中。如果您看到此问题，请使用 scp 将脚本复制到您的 hassio 配置文件夹，或通过 ssh 进入并使用 vi/nano 本地编辑文件。

4) 启动插件


## MQTT 数据

发送到 MQTT 服务器的数据基于 biochemguy 的设置：readings/$DEVICEID/meter_reading

## 硬件

这已经在以下硬件上进行了测试和使用（您可以在亚马逊上购买）：

- NooElec NESDR Nano 2+ Tiny Black RTL-SDR USB
- RTL-SDR Blog R820T2 RTL2832U 1PPM TCXO SMA 软件定义无线电


## 故障排除

如果您看到此错误：

> 内核驱动程序处于活动状态，或设备被 librtlsdr 的第二个实例占用。
> 在第一种情况下，请断开或将内核模块（dvb_usb_rtl28xxu）列入黑名单，
> 或在编译时启用自动分离。

然后在主机上运行以下命令

```bash
sudo rmmod dvb_usb_rtl28xxu rtl2832