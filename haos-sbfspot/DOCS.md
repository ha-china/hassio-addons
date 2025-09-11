---

# SBFspot 插件 for HAOS

![版本](https://img.shields.io/badge/dynamic/yaml?label=Version&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhabuild%2Fhassio-addons%2Fmain%2Fhaos-sbfspot%2Fconfig.yaml)
![项目阶段](https://img.shields.io/badge/dynamic/yaml?color=blueviolet&label=Project%20Stage&query=%24.stage&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhabuild%2Fhassio-addons%2Fmain%2Fhaos-sbfspot%2Fconfig.yaml)
![架构](https://img.shields.io/badge/dynamic/yaml?color=success&label=Arch&query=%24.arch&url=https%3A%2F%2Fraw.githubusercontent.com%2Fhabuild%2Fhassio-addons%2Fmain%2Fhaos-sbfspot%2Fconfig.yaml)
![项目维护][maintenance-shield] [![CI](https://github.com/habuild/hassio-addons/actions/workflows/addon-ci.yaml/badge.svg)](https://github.com/habuild/hassio-addons/actions/workflows/addon-ci.yaml)

[project-stage-shield]: https://img.shields.io/badge/project%20stage-experimental-yellow.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2024.svg

[![打开你的 Home Assistant 实例并展示添加插件库对话框，特定仓库 URL 已预填。](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fhabuild%2Fhassio-addons)

这个 [home assistant](https://www.home-assistant.io/getting-started/) 插件提供了 **Bluetooth** 版本的 [![SBFspot](https://img.shields.io/badge/dynamic/json?color=blue&label=SBFspot&query=tag_name&suffix=%20latest&url=https%3A%2F%2Fgithub.com%2FSBFspot%2FSBFspot%2Freleases%2Flatest)](https://github.com/SBFspot/SBFspot/releases/latest)

这个插件在白天每 5 分钟运行一次 SBFspot 和 SPFspotUploader 的定时任务。

使用上传功能需要 [PVoutput](https://pvoutput.org/) 账号和 API。

需要 [Mariadb 插件](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mariadb) 或类似 SQL 数据库来存储上传到 PVOutput 的数据。

[phpMyAdmin](https://my.home-assistant.io/redirect/supervisor_addon/?addon=a0d7b954_phpmyadmin&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Faddon-phpmyadmin) 是必需的，以创建数据库结构。

需要 [MQTT 代理](https://my.home-assistant.io/redirect/supervisor_addon/?addon=core_mosquitto) 将 MQTT 消息发送到 Home Assistant。

## 安装

---

### 选项和秘密

如果您想使用秘密模板化您的选项，可以使用以下模板。

这些名称会自动默认，因此您在安装时不需要确认（保存）任何选项。

一切在启动插件时都会默认为是。

```
##secrets.yaml 的模板
## 保存秘密文件后可能需要重启

BTAddress: ""          ## 逆变器 BT mac
SBFpassword: ""        ## 逆变器密码
LocalBTAddress: ""     # 主机 BT mac - 可以为空
SBFplantname: ""

mariadb_pw: ""
mqtt_user: ""
mqtt_pass: ""

home_lat: ""
home_long: ""
Timezone: ""
                             ### 如果您想跳过 PVoutput
pvoSID: "0123456789:12345"   ### 如果留空，将默认为假
pvoAPIkey: "fake9364fake4545afke834fake"   ### 如果留空，将默认为假
```

上述选项是如果您希望手动填写选项时唯一必需的选项。

### 其余选项默认为标准 HAOS 服务器地址和 SBFspot 默认值。

<details><summary> 选项图像 </summary>
<p>

![截图](https://raw.githubusercontent.com/habuild/hassio-addons/main/.images/UIoptions.PNG)

</p>
</details>

<br></br>

### PVoutput SIDs

PVoutput SIDs 是逆变器序列号和 PVoutput 账户 ID 的组合。

PVoutput SIDs 可以是用逆变器序列和单独 PVO 账户 ID 逗号分隔的条目。

```
逆变器序列:AccID

例如：Inverter1:acc1,Inverter2:acc2

0123456789:12345,2222222222:54321
```

### MIS_Enabled Bluetooth 多逆变器支持。

<b>此选项仅适用于蓝牙多逆变器系统。</b>

每个逆变器首先需要通过传感器创建设置来启用 MQTT 传感器。
每个逆变器需要使用其 BTAddress 运行。
（您可能需要稍微调整 plantname 和主题）

一旦创建传感器，将传感器创建选项设置回 NO（禁用传感器创建设置）。

您现在可以在 GUI 或 yaml 选项配置中启用 MIS。

```
MIS_Enabled: 1
```

NET ID 需要在所有逆变器上大于 1。

PVoutput SIDs 可以是用逆变器序列和单独 PVO 账户 ID 逗号分隔的条目。

```
例如：Inverter1:acc1,Inverter2:acc2

0123456789:12345,2222222222:54321
```

有关更多信息，请参阅 [Issue 42](https://github.com/habuild/hassio-addons/issues/42)。

<br></br>

## MQTT

### 在您拥有有效的 MQTT 连接之前，请将此选项设置为 NO。

#### 将 MQTT 用户和密码添加到选项。

如果为空，其他选项会自动默认为值。
如果需要更改代理地址，您仍然可以使用选项。

#### HA 传感器生成

<details><summary>MQTT 传感器列表</summary>
<p>

描述见 SBFspot 配置文件。

[MASTER SBFspot CFG](https://raw.githubusercontent.com/SBFspot/SBFspot/master/SBFspot/SBFspot.cfg)

- MQTT_Data 的默认传感器列表

```
PrgVersion,Plantname,Timestamp,SunRise,SunSet,InvSerial,InvName,InvTime,InvStatus,InvSwVer,InvClass,InvType,InvTemperature,EToday,ETotal,GridFreq,PACTot,PAC1,UAC1,IAC1,OperTm,FeedTm,PDCTot,UDC1,UDC2,IDC1,IDC2,PDC1,PDC2,BTSignal
```

- 当前可用的传感器列表

```
PrgVersion,Plantname,Timestamp,SunRise,SunSet,InvSerial,InvName,InvTime,InvStatus,InvSwVer,InvClass,InvType,InvTemperature,InvGridRelay,EToday,ETotal,GridFreq,PACTot,PAC1,PAC2,PAC3,UAC1,UAC2,UAC3,IAC1,IAC2,IAC3,OperTm,FeedTm,PDCTot,PDC1,PDC2,PDC,UDC1,UDC2,UDC,IDC1,IDC2,IDC,BTSignal,BatTmpVal,BatVol,BatAmp,BatChaStt,InvWakeupTm,InvSleepTm,MeteringWOut,MeteringWIn,MeteringWTot
```

</p>
</details>

<details><summary>MQTT 图像</summary>
<p>

![截图](https://raw.githubusercontent.com/habuild/hassio-addons/main/.images/mqttcap.PNG)

</p>
</details>

建议**备份和/或禁用现有 yaml 传感器**以避免命名冲突。

#### 自动生成传感器 - No、Create、Purge 选项

<details><summary><b>No</b> 传感器. HAOS-SBFspot 将在不生成传感器的情况下运行。它将使用 yaml 或 mqtt 传感器。 </summary>
<p>

- 如果您希望在能源仪表板上保留现有的 yaml 能源传感器，请使用此选项。

  您可以创建新传感器。您无法将新传感器转换为保留旧能源仪表值。

</p>
</details>

<details><summary><b>Create</b> 传感器. HAOS-SBFspot 将自动在 MQTT 集成中创建传感器。 </summary>
<p>

[MQTT 集成](https://www.home-assistant.io/integrations/mqtt)

建议**备份和/或禁用现有 yaml 传感器**以避免命名冲突。

在 HA 中，将新能源传感器更新为跟随旧能源传感器在能源仪表板上是不可能的。

    - 此选项将使用您的 plantname 和逆变器序列号创建主题

       - homeassistant/sensor/sbfspot_{*您的 plantname*}/sbf_spot{*您的逆变器序列*}{*传感器类型*}/config

       - homeassistant/sbfspot_{您的 plantname}/sbf_spot{您的逆变器序列} 是状态主题

</p>
</details>

<details><summary><b>Purge</b> 传感器. HAOS-SBFspot 将向您的代理地址发送空主题以清除保留主题。 </summary>
<p>

- 如果在创建和清除传感器之间更改主题，这将失败。
- 如果发生这种情况，您可以使用 MQTT explorer 或类似工具手动删除主题。

</p>
</details>

<details><summary> 早期版本和 yaml mqtt 传感器 </summary>
<p>

### 在 2022.9.1 之前

[haos-sbfspot_sensors.yaml](https://github.com/habuild/hassio-addons/blob/main/.images/sbfspot_sensors.yaml) 我使用软件包来包含这些 yaml 传感器。您需要更改为与您在插件配置选项中设置的 plant name 和 serial 相匹配。

**MQTT 选项参数** [配置选项](https://github.com/habuild/hassio-addons/blob/main/.images/Example_Config.yaml) MQTT 用户名和密码需要被硬编码到 **MQTT_PublisherArgs:**  **{host}**  **{topic}** 和 **{{message}}** 将从选项中获取。

**MQTT_PublisherArgs:** **'-h {host} -u Your_MQTT_Username -P Your_MQTT_password -t {topic} -m "{{message}}" -d -r'**

<i>发布者参数已被移除，以允许传感器的使用</i>

**-d** 是用于 MQTT 日志调试。这对于确认 MQTT 消息确实被发送是非常有帮助的。

**-r** 是用于保留消息。建议不要使用保留标志。

</p>
</details>
<br></br>

## MariaDB

### 初始数据库创建。

下载并导入 [No Drop DB create](https://github.com/habuild/hassio-addons/blob/main/.images/CreateMySQLDB_no_drop.sql) **或** [Create My SQL.sql](https://github.com/SBFspot/SBFspot/blob/master/SBFspot/CreateMySQLDB.sql) 到 [phpMyAdmin](https://github.com/hassio-addons/addon-phpmyadmin) 以创建数据库。**如果**您还没有之前创建数据库，请使用 NO Drop 版本。您还需要为 MariaDB 添加数据库和用户/密码，并分配端口。

![截图](https://raw.githubusercontent.com/habuild/hassio-addons/main/.images/MariaDB%20setup.PNG)

<br></br>

## 容器数据路径

在 HAOS（Home Assistant 操作系统）中，/data/ 路径到达 `/mnt/data/supervisor/addons/data/{slug_haos-sbfspot}` 在主机上。

在 docker/supervisor 中，/data/ 路径到达 `/usr/share/hassio/addons/data/{slug_haos-sbfspot}` 在主机上。

## **链接到官方 SBFspot 文档**

请参阅 [SBFspot Wiki](https://github.com/sbfspot/sbfspot/wiki) 获取有关 SBFspot 的文档和常见问题解答。

### **特别感谢：**

- sbfspot 团队为 SPFspot 提供支持。

![支持 aarch64 架构][aarch64-shield]
![支持 armhf 架构][armhf-shield]
![支持 armv7 架构][armv7-shield]

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[armhf-shield]: https://img.shields.io/badge/armhf-yes-green.svg
[armv7-shield]: https://img.shields.io/badge/armv7-yes-green.svg