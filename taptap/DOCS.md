# Li Tin O`ve Weedle Assistant Add-on: TapTap - Tigo CCA to MQTT

This addon is based on the [taptap](https://github.com/litinoveweedle/taptap) project, which reverse engineered protocol between Tigo TAP and CCA components. I was able to create a [MQTT bridge](https://github.com/litinoveweedle/taptap-mqtt) and package it as a Home Assistant addon called TapTap. The addon allows you to get detailed information from the Tigo photovoltaic optimizer modules completely locally - without Tigo cloud and with a refresh time of 10s. The addon uses Home Assistant MQTT auto discovery feature so it will setup all provided sensors automatically in the HA. :wink:


## Installation prerequisites

  - MQTT broker like for example [Mosquitto addon](https://www.home-assistant.io/integrations/mqtt/#setting-up-a-broker)
  - Home Assistant [MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
  - Modbus RS485 to Serial/Ethernet converter like for example [WaveShare models](https://www.waveshare.com/product/iot-communication/wired-comm-converter/ethernet-to-uart-rs232-rs485.htm)


## Modbus to Ethernet/Serial connection to Tigo CCA

### Modbus to Ethernet/Serial converter has to be connected to the [Tigo CCA gateway](https://cs.tigoenergy.com/product/cloud-connect-advanced):
  1. connect converter to connector named Gateway on Tigo CCA gateway
  2. there will be already wires in this connector from the connected Tigo TAP on your roof
  3. connect converter wires together (in parallel) with existing wires from Tigo TAP
  4. use 3 wires - `A`, `B` and `-`/`⏚`: connect `A` to `A`, `B` to `B`, `-`/`⏚` to `-`/`⏚`
  5. wires shall be as short as possible - mount your converter close to the Tigo CCA gateway

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
### Modbus to Ethernet converter needs some additional configuration:
  1. connect converter to your LAN network so it will be reachable from Home Assistant
  2. assign IP address to the converter (automatically using DHCP or manually static one)
  3. set Modbus communication to 38400b, data bits 8, stop bits 1, Flow control None
  4. set converter work mode to Modbus TCP Server
  5. set protocol to Modbus TCP (not Modbus TCP to RTU), for Waveshare converter this is on the web configuration page under the 'Multi-Host Settings' as 'Protocol' set to 'None'
  6. remember IP address and TCP port of converter to set in the addon configuration later

Every Modbus to Ethernet converter has different setting, if you do not see any data collected from your installation there is VERY high chance, that you have some problem in the converter connection or configuration! Please refer to the [note here](#warning)!

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
taptap_port: 502
taptap_modules_serials:
  - A01:X-AAAAAA
  - A02:X-AAAAAAB
  - A03:X-AAAAAAC
  - .....
taptap_topic_name: tigo
taptap_topic_prefix: taptap
taptap_update: 10
taptap_timeout: 180
ha_entity_availability: true
ha_discovery_prefix: homeassistant
ha_birth_topic: homeassistant/status
taptap_address: 192.168.1.50

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

### Option: `taptap_modules_serials`

Tuple of modules friendly names as defined by user and modules serial numbers in the format `NAME1:SERIAL1, NAME2:SERIAL2,...` Tigo modules serial numbers can be found on the modules barcode stickers or in the Tigo cloud. Serials have `X-XXXXXX` format. Program will log any unknown serial number so you can use it to discover serials if you do not know them. Be aware that messages with serial numbers are emitted rarely, very often only during night time! Wait as lest 24hrs for the complete discovery! To allow for monitoring to start as soon as possible (before receiving all serials), addon will temporarily assign Tigo modules to the user names randomly at the first run. Once serials are received, addon will enumerate all sensors to match user defined names. Once detected serial numbers and mapping to user names are stored in the addon persistent storage in HA and stored information will be reused for any future addon runs.

### Option: `taptap_topic_name`

Name to be used as device name in the Home Assistant, default is `tigo`. This will be also used as MQTT topic (together with topic prefix) to post messages on MQTT to Home Assistant.

### Option: `taptap_topic_prefix`

MQTT topic prefix used on the MQTT to post messages so Home Assistant can read those, default is `taptap`. There is typically there is no need to change this setting.

### Option: `taptap_update`

How often Home Assistant entities are updated in seconds, default is `10`.

### Option: `taptap_timeout`

If no message is received within last X seconds from the node and `Entities unavailable if node is offline` is set to true then corresponding entities are set to `Unavailable` state. If your entities have flapping 'Unavailable' status during the day increase this number. Default is `120` seconds.

### Option: `ha_entity_availability`

If set to true, then if no message from any given module is received in the time specified by `Availability timeout` corresponding entities are set to `Unavailable` state.

### Option: `ha_discovery_prefix`

MQTT prefix Home Assistant is subscribed for auto discovery of the new devices and entities. Please refer to HA MQTT documentation, default is: `homeassistant`. There is typically no need to change this setting.

### Option: `ha_birth_topic`

MQTT prefix Home Assistant announces when gets online. Please refer to HA MQTT documentation, default is: `homeassistant/status`. There is typically no need to change this setting.


## Changelog & Releases

Releases are based on [Semantic Versioning][semver], and use the format
of `MAJOR.MINOR.PATCH`. In a nutshell, the version will be incremented
based on the following:

- `MAJOR`: Incompatible or major changes.
- `MINOR`: Backwards-compatible new features and enhancements.
- `PATCH`: Backwards-compatible bugfixes and package updates.


## Support

### Got questions?

You have several options to get them answered:

- The Home Assistant [Community Forum][forum].
- You could also [open a GitHub issue][issue].

### WARNING:
If you in the `debug` log level mode do not see any received messages (like the one bellow) **DO NOT open issue** - the problem is 100% at you side. If you do open issue anyway it will be immediately closed as invalid! You can ask for help community at the forum link bellow instead.

```
DEBUG: Received taptap data
DEBUG: b'{"gateway":{"id":4609},"node":{"id":14},"timestamp":"2025-04-14T15:26:06.494986044+02:00","voltage_in":39.15,"voltage_out":38.8,"current":3.38,"dc_dc_duty_cycle":1.0,"temperature":42.0,"rssi":195}\n'

```

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
