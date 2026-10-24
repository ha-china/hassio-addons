# Li Tin O`ve Weedle Assistant Add-on: TapTap - Tigo CCA to MQTT

This addon is based on the [fork](https://github.com/litinoveweedle/taptap) of the original [taptap](https://github.com/willglynn/taptap) project, which reverse engineered protocol between Tigo TAP and CCA components. I was able to create a [MQTT bridge](https://github.com/litinoveweedle/taptap-mqtt) and package it as a Home Assistant Hassio addon called TapTap. The addon allows you to get detailed information from the Tigo photovoltaic optimizer modules completely locally - without Tigo cloud and with a refresh time of 10s. The addon uses Home Assistant MQTT auto discovery feature so it will setup all provided sensors automatically in the HA. :wink:


## Installation prerequisites

  - MQTT broker like for example [Mosquitto addon](https://www.home-assistant.io/integrations/mqtt/#setting-up-a-broker)
  - Home Assistant [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
  - Modbus RS485 to Serial/Ethernet converter like for example [WaveShare models](https://www.waveshare.com/product/iot-communication/wired-comm-converter/ethernet-to-uart-rs232-rs485.htm)


### Modbus to Ethernet/Serial converter connection to the Tigo CCA
Modbus to Ethernet/Serial converter has to be connected to the [Tigo CCA gateway](https://cs.tigoenergy.com/product/cloud-connect-advanced):
  1. If necessary update Tigo CCA Gateway firmware using the Tigo mobile app - known working firmware versions are `3.9.0-ct`, `4.0.1-ct`, `4.0.3-ct`.
  2. Connect Modbus converter to connector named Gateway on the Tigo CCA gateway.
  3. There are already wires in this connector from the Tigo TAP located on your roof.
  4. Connect wires from Modbus converter together (in parallel) with existing wires from Tigo TAP.
  5. Use 3 wires - `A`, `B` and `-`/`⏚`: connect `A` to `A`, `B` to `B`, `-`/`⏚` to `-`/`⏚`.
  6. Wires shall be as short as possible - mount your converter close to the Tigo CCA gateway.

```text
  ┌─────────────────────────────────────┐      ┌────────────────────────────┐
  │              Tigo CCA               │      │         Tigo TAP           │
  │                                     │      │                            │
  │ AUX  RS485-1  GATEWAY  RS485-2 POWER│      │                    ┌~┐     │
  │┌─┬─┐ ┌─┬─┬─┐ ┌─┬─┬─┬─┐ ┌─┬─┬─┐ ┌─┬─┐│      │   ┌─┬─┬─┬─┐   ┌─┬─┬│┬│┐    │
  ││/│_│ │-│B│A│ │-│+│B│A│ │-│B│A│ │-│+││      │   │-│+│B│A│   │-│+│B│A│    │
  │└─┴─┘ └─┴─┴─┘ └┃┴│┴┃┴┃┘ └─┴─┴─┘ └─┴─┘│      │   └│┴│┴│┴│┘   └─┴─┴─┴─┘    │
  └───────────────┃─│─┃─┃───────────────┘      └────│─│─│─│─────────────────┘
                  ┃ │ ┃ ┃                           │ │ │ │
                  ┃ │ ┃ ┃───────────────────────────│─│─│─┘
                  ┃ │ ┃─┃───────────────────────────│─│─┘
                  ┃ └─┃─┃───────────────────────────│─┘
                  ┃───┃─┃───────────────────────────┘
                  ┗━┓ ┃ ┃
                ┌───┃─┃─┃───┐
                │  ┌┃┬┃┬┃┐  │
                │  │-│B│A│  │
                │  └─┴─┴─┘  │
                │ Converter │
                └───────────┘
```
### Modbus to Ethernet converter additional configuration:
  1. Connect converter to your LAN network so it will be reachable from Home Assistant.
  2. Assign IP address to the converter (automatically using DHCP reservation or manually static one).
  3. Set Modbus communication to 38400b, data bits 8, stop bits 1, Flow control None.
  4. Set converter work mode to Modbus TCP Server.
  5. Set protocol to Modbus TCP (not Modbus TCP to RTU), for Waveshare converter .this is on the web configuration page under the 'Multi-Host Settings' as 'Protocol' set to 'None'.
  6. Remember IP address and TCP port of converter to set in the addon configuration later.

Every Modbus to Ethernet converter has different setting, if you do not see any data collected from your installation there is VERY high chance, that you have some problem in the converter connection or configuration! Please refer to the [Troubleshooting guide](#troubleshooting-guide)!

## Addon Installation

Install TapTap addon in your Home Assistant

1. Click the Home Assistant My button below to open the add-on on your Home
   Assistant instance.

   [![Open this add-on in your Home Assistant instance.][addon-badge]][addon]

2. Click the "Install" button to install the "taptap" add-on.
3. Configure "taptap" add-on on the "Configuration" tab, see configuration examples in the "Documentation" tab.
4. Start "taptap" addon, check that it is running in the "Log" tab.
5. Check the new created HA MQTT sensors of the "taptap" add-on to see it in action.
6. For Tigo nodes serials detection please wait one day (i.e 24hrs)


## Configuration

TapTap add-on example configuration:

```yaml
log_level: warning
mqtt_server: 192.168.1.2
mqtt_port: 1883
mqtt_qos: 1
mqtt_timeout: 5
mqtt_user: mqttuser
mqtt_pass: mqttpass
taptap_address: 192.168.1.50
taptap_port: 502
taptap_modules:
  - "A:01:X-AAAAAAA"
  - "A:02:X-AAAAAAB"
  - "B:01:X-AAAAAAC"
  - .....
taptap_topic_name: tigo
taptap_topic_prefix: taptap
taptap_update: 10
taptap_timeout: 180
ha_discovery_prefix: homeassistant
ha_birth_topic: homeassistant/status
ha_nodes_availability_online: true
ha_nodes_availability_identified: false
ha_strings_availability_online: false
ha_strings_availability_identified: false
ha_stats_availability_online: false
ha_stats_availability_identified: false
ha_strings_sensors_recorder:
  - energy_daily
ha_stats_sensors_recorder: 
  - energy_daily
```

### Option: `log_level`

The `log_level` option controls the level of log output by the add-on and can
be changed to be more or less verbose, which might be useful when you are
dealing with an unknown issue. Possible values are:

- `trace`: Show every detail, like all called internal functions.
- `debug`: Shows detailed debug information.
- `info`: Normal (usually) interesting events.
- `warning`: Exceptional occurrences that are not errors.
- `error`: Runtime errors that do not require immediate action.
- `fatal`: Something went terribly wrong. Add-on becomes unusable.

Please note that each level automatically includes log messages from a
more severe level, e.g., `debug` also shows `info` messages. By default,
the `log_level` is set to `info`, which is the recommended setting unless
you are troubleshooting.

### Option: `mqtt_server`

IP address or FQDN of the MQTT broker. If you are running Mosquitto addon it will be IP address of your HomeAssistant.

### Option: `mqtt_port`

MQTT broker TCP port, default is `1883`.

### Option: `mqtt_qos`

MQTT QoS configuration - refer to Home Assistant MQTT documentation, default `1`.

### Option: `mqtt_timeout`

MQTT broker connection timeout - refer to Home Assistant MQTT documentation, default `5`

### Option: `mqtt_user`

MQTT broker username to connect to server.

### Option: `mqtt_pass`

MQTT broker password to connect to server.

### Option: `taptap_serial`

If you have Modbus to USB/Serial converter connected to Home Assistant server, this will be it device file (probably `/dev/ttyUSB0` or `/dev/ttyACM0`). If you use a Modbus to Ethernet converter, this must not be filled in!

### Option: `taptap_address`

If you use a Modbus to Ethernet converter connected to Home Assistant server this will be its IP address. If you use Modbus to Serial/USB converter this must not be filled in!

### Option: `taptap_port`

If you use Modbus to Ethernet converter connected to Home assistant server this will be its TCP port, default is `502`.

### Option: `taptap_modules`

Tigo modules strings name, modules names and serial numbers as triplets of:
  - module `STRING` name as defined by user (optional), can have [a-z, A-Z, 0-9, _] characters
  - module `NAME` as defined by user, can have [a-z, A-Z, 0-9, _] characters
  - module `SERIAL` number as found on the modules barcode stickers or in the Tigo cloud (optional),in the X-XXXXXX format.

with resulting format `STRING1:NAME1:SERIAL1, STRING1:NAME2:SERIAL2, STRING2:NAME3:SERIAL3, ...`

- If STRING is not defined/exists all modules will be considered in tha same string; in this case use format `:NAME1:SERIAL1, :NAME2:SERIAL2, ...`
- If SERIAL is not defined/known discovered module will be assigned to randomly picked defined module NAME; in this case use format `STRING1:NAME1:, STRING1:NAME2:, STRING2:NAME3:, ...`
- If both STRING and SERIAL names are not defined/known use following format: `:NAME1:, :NAME2:, :NAME3:, ...`

Program will log any unknown serial number so you can use it to discover serials if you do not know them.
Be aware that messages with serial numbers are emitted by the Tigo GW rarely, very often only during night time! Wait as lest 24hrs for the complete discovery!

### Option: `taptap_topic_name`

Name to be used as device name in the Home Assistant, default is `tigo`. This will be also used as MQTT topic (together with topic prefix) to post messages on MQTT to Home Assistant.

### Option: `taptap_topic_prefix`

MQTT topic prefix used on the MQTT to post messages so Home Assistant can read those, default is `taptap`. There is typically there is no need to change this setting.

### Option: `taptap_update`

How often Home Assistant entities are updated in seconds, default is `10`.

### Option: `taptap_timeout`

If no message is received within last X seconds from the node and `Entities unavailable if node is offline` is set to true then corresponding entities are set to `Unavailable` state. If your entities have flapping 'Unavailable' status during the day increase this number. Default is `120` seconds.

### Option: `ha_discovery_prefix`

MQTT prefix Home Assistant is subscribed for auto discovery of the new devices and entities. Please refer to HA MQTT documentation, default is: `homeassistant`. There is typically no need to change this setting.

### Option: `ha_birth_topic`

MQTT prefix Home Assistant announces when gets online. Please refer to HA MQTT documentation, default is: `homeassistant/status`. There is typically no need to change this setting.

### Option: `ha_nodes_availability_online`

To render Home Assistant node entities 'UNAVAILABLE' if no message received within TIMEOUT, set to `true` or `false`. Default is `true`.

### Option: `ha_nodes_availability_identified`

Render Home Assistant node entities 'UNAVAILABLE' if node serial is not yet known, set to `true` or `false`. Default is `false`.

### Option: `ha_strings_availability_online`

Render Home Assistant string statistical entities 'UNAVAILABLE' if there are not any nodes online, set to `true` or `false`.

### Option: `ha_strings_availability_identified`

Render Home Assistant string statistical entities 'UNAVAILABLE' if not all node serials are yet known, set to `true` or `false`. Default is `false`.

### Option: `ha_stats_availability_online`

Render Home Assistant total statistical entities 'UNAVAILABLE' if there are not any node online, set to `true` or `false`.

### Option: `ha_stats_availability_identified`

Render Home Assistant total statistical entities 'UNAVAILABLE' if not all node serials are yet known, set to `true` or `false`. Default is `false`.

### Option: `ha_nodes_sensors_recorder`

List of the node sensors entities which shall have Home Assistant statistic recorder enabled.

### Option: `ha_strings_sensors_recorder`

List of the string statistic sensors entities which shall have Home Assistant statistic recorder enabled.

### Option: `ha_stats_sensors_recorder`

List of the total statistic sensors entities which shall have Home Assistant statistic recorder enabled.


## Changelog & Releases

Releases are based on [Semantic Versioning][semver], and use the format
of `MAJOR.MINOR.PATCH`. In a nutshell, the version will be incremented
based on the following:

- `MAJOR`: Incompatible or major changes.
- `MINOR`: Backwards-compatible new features and enhancements.
- `PATCH`: Backwards-compatible bugfixes and package updates.


## Provided HA sensors

### Sensors provided for each Tigo optimizer
(per node sensors)
| sensor | state_class | device_class | unit | comment |
|---|---|---|---|---|
| voltage_in | measurement | voltage | V | as reported by Tigo node |
| voltage_out | measurement | voltage | V | as reported by Tigo node |
| current_in | measurement | current | A | as reported by Tigo node |
| current_out | measurement | current | A | current out is calculated as `( voltage_in * current_in ) / voltage_out`, disregarding any power loss |
| power | measurement | power | W | power for given Tigo node calculated as `current_in * current_out` |
| temperature | measurement | temperature | °C | as reported by Tigo node |
| duty_cycle | measurement | power_factor | % | as reported by Tigo node , it is technically not technically correct to report as power factor... |
| rssi | measurement | signal_strength | dB | RSSI as reported by Tigo Gateway for Tigo node |
| energy_daily | total_increasing | energy | kWh | energy generated byt Tigo node calculated as integral of the power, resets daily |
| timestamp | measurement | timestamp | None | time node was last reporting to the Gateway |
| node_serial | measurement | - | - | Tigo optimizer serial number / barcode |
| gateway_address | measurement | - | - | Tigo gateway address to which Tigo optimizer is reporting |


### Statistical sensors provided for single string or when strings are not configured
(Total statistic for all Tigo optimizers)
| sensor | state_class | device_class | unit | comment |
|---|---|---|---|---|
| voltage_in_max | measurement | voltage | V | |
| voltage_in_min | measurement | voltage | V | |
| voltage_in_avg | measurement | voltage | V | |
| voltage_in_sum | measurement | voltage | V | |
| voltage_out_min | measurement | voltage | V | |
| voltage_out_max | measurement | voltage | V | |
| voltage_out_avg | measurement | voltage | V | |
| voltage_out_sum | measurement | voltage | V | |
| current_in_min | measurement | current | A | |
| current_in_max | measurement | current | A | |
| current_in_avg | measurement | current | A | |
| current_out_min | measurement | current | A | |
| current_out_max | measurement | current | A | |
| current_out_avg | measurement | current | A | |
| power_max | measurement | power | W | |
| power_min | measurement | power | W | |
| power_avg | measurement | power | W | |
| power_sum | measurement | power | W | |
| temperature_min | measurement | temperature | °C | |
| temperature_max | measurement | temperature | °C | |
| temperature_avg | measurement | temperature | °C | |
| duty_cycle_min | measurement | power_factor | % |  |
| duty_cycle_max | measurement | power_factor | % | |
| duty_cycle_avg | measurement | power_factor | % | |
| rssi_min | measurement | signal_strength | dB | |
| rssi_max | measurement | signal_strength | dB | |
| rssi_avg | measurement | signal_strength | dB | |
| energy_daily | total_increasing | energy | kWh | |
| nodes_total | measurement | - | - | total number of defined Tigo nodes |
| nodes_online | measurement | - | - | total number of onlie/reporting Tigo nodes |
| nodes_identified | measurement | - | - | total number of Tigo nodes identified by serial numbers |

### String sensors provided for each configured string
(Per string statistic for Tigo optimizers in given string)
| sensor | state_class | device_class | unit | comment |
|---|---|---|---|---|
| voltage_in_max | measurement | voltage | V | |
| voltage_in_min | measurement | voltage | V | |
| voltage_in_avg | measurement | voltage | V | |
| voltage_in_sum | measurement | voltage | V | |
| voltage_out_min | measurement | voltage | V | |
| voltage_out_max | measurement | voltage | V | |
| voltage_out_avg | measurement | voltage | V | |
| voltage_out_sum | measurement | voltage | V | |
| current_in_min | measurement | current | A | |
| current_in_max | measurement | current | A | |
| current_in_avg | measurement | current | A | |
| current_out_min | measurement | current | A | |
| current_out_max | measurement | current | A | |
| current_out_avg | measurement | current | A | |
| power_max | measurement | power | W | |
| power_min | measurement | power | W | |
| power_sum | measurement | power | W | |
| temperature_min | measurement | temperature | °C | |
| temperature_max | measurement | temperature | °C | |
| temperature_avg | measurement | temperature | °C | |
| duty_cycle_min | measurement | power_factor | % | |
| duty_cycle_max | measurement | power_factor | % | |
| duty_cycle_avg | measurement | power_factor | % | |
| energy_daily | total_increasing | energy | kWh | |
| nodes_total | measurement | - | - | number of defined Tigo nodes in string |
| nodes_online | measurement | - | - | number of onlie/reporting Tigo nodes in string |
| nodes_identified | measurement | - | - | number of Tigo nodes identified by serial numbers in string |

### Statistical Sensors provided when multiple string are configured
(Total statistic for all Tigo optimizers in all strings)
| sensor | state_class | device_class | unit | comment |
|---|---|---|---|---|
| power_sum | measurement | power | W | |
| rssi_min | measurement | signal_strength | dB | |
| rssi_max | measurement | signal_strength | dB | |
| rssi_avg | measurement | signal_strength | dB | |
| energy_daily | total_increasing | energy | kWh | |
| nodes_total | measurement | - | - | total number of defined Tigo nodes |
| nodes_online | measurement | - | - | total number of onlie/reporting Tigo nodes |
| nodes_identified | measurement | - | - | total number of Tigo nodes identified by serial numbers |


## Support

### Got questions?

You have several options to get them answered:

- The Home Assistant [Community Forum][forum].
- You could also [open a GitHub issue][issue].

  - Always report:
  - version of the taptap addon used
  - configuration (remove sensitive data like MQTT user/pass and Tigo Nodes serials)
  - attach log in the debug log level

### Troubleshooting guide:
1. If in the HA addon debug log level mode you do not see any received taptap power reports messages during the day (like the one bellow):

```
[2025-12-25 14:03:54.354564] DEBUG: {'event_type': 'power_report', 'timestamp': '2025-12-25T14:03:52.064869+01:00', 'voltage_in': 45.55, 'voltage_out': 10.6, 'dc_dc_duty_cycle': 0.25098039215686274, 'temperature': 2.5, 'rssi': 192, 'gateway_id': '4609', 'node_id': '14', 'duty_cycle': 25.098039215686274, 'tmstp': 1766667832.064869, 'current_out': 0.815, 'power': 8.639, 'current_in': 0.1896597145993414}
```

  - get running [taptap binary](https://github.com/litinoveweedle/taptap/) and try to intercept messages in the `peek-bytes`, `peek-frames` and/or `peek-activity` mode. If you do not see any taptap output there is high change your Ethernet converter is not properly connected or configured.

2. If you can get taptap binary to output in the `peek-bytes`, `peek-frames` and/or `peek-activity` but unable to get during day power report events in the `observe` mode:

  - check your Tigo CCA firmware using Tigo mobile app. The know versions of the Tigo CCA/GW firmware compatible with the taptap are 3.9.0-ct, 4.0.1-ct, 4.0.3-ct. Update your firmware using Tigo application if you are on the older version.

3. If you are on the newer Tigo CCA firmware level and not getting any meaningful output from the taptap binary in the `observe` mode:

- You can report [taptap binary issue](https://github.com/willglynn/taptap/issues) together with the taptap binary output (`peek-bytes`, `peek-frames`, `peek-activity`, `observe`) Please do not report ANY OTHER HA addon related issues to this repository! Use HA Addon repository [instead][issue]!

### Warning
This is multiple layer SW (taptap binary, MQTT wrapper, Hasssio Addon) from different authors and potential issue report shall be created in the correct repository. If unsure where to report your issue ask in the forum first before creating meaningless issues in the incorrect repo! This unfortunately happens more than often. ;-o Also provide as much as information as possible as I am still trying to get my crystal ball fully working.


## Authors & contributors

The original setup of this repository is by [Li Tin O`ve Weedle][litin].


## License

Apache 2.0

Copyright (c) 2025 Dominik Strnad

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=taptap&repository_url=https%3A%2F%2Fgithub.com%2Flitinoveweedle%2Fhassio-addons
[contributors]: https://github.com/litinoveweedle/hassio-addons/graphs/contributors
[forum]: https://community.home-assistant.io/t/tigo-optimizer-local-monitoring-without-cloud-now-possible/869754
[litin]: https://github.com/litinoveweedle
[issue]: https://github.com/litinoveweedle/hassio-addons-dev/issues
[semver]: http://semver.org/spec/v2.0.0.html
