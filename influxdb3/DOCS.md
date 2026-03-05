# Home Assistant Community App: InfluxDB3

InfluxDB is a time series database optimized for high-write-volume.
It's useful for recording metrics, sensor data, events,
and performing analytics. It exposes an HTTP API for client interaction and is
often used in combination with Grafana to visualize the data.

This app runs the InfluxDB3.x Enterprise build channel.

## Free license required

Important: This app requires a free license from InfluxData.
It is required that you provide your email address in the app configuration,
and once the app it started, you will get an email where you can activate
your license. It is free as long as it is for home use.

![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield]

## Installation

Follow these steps to get the app installed on your system:

Add the repository `https://github.com/erik73/hassio-addons`.
Find the "InfluxDB3" app and click it.
Click on the "INSTALL" button.

## First Run

Make sure that the required port `8181` is not in use by another app.
It is also possible to alter it to another port in the configuration.

Please read above regarding the requirement for a license.
When the app is started fore the first time, it will generate an
automated license request to InfluxData, and the app will wait for you
to activate it via the activation link you recieve on your provided email
account. Once you click the activaton link, InfluxDB3 will start.
The email will say "trial license", but it is an at-home license.
If the app does not start automatically when you click the activation link
in the email, a restart of the app will doenload the license.

Please save the `Token` and the `HTTP Requests Header` since you will
need them later in your homeassistant configuration, and for data migration.

## Administrative Access

There is no GUI provided with InfluxDB3. To manage the app, you need to
install InfluxDB 3 Explorer. I used docker desktop on my Windows desktop
computer and installed it with the following command line input:

```yaml
docker run --detach --name influxdb3-explorer --publish 8888:80 influxdata/influxdb3-ui:latest --mode=admin
```

Folow this link for more information: https://docs.influxdata.com/influxdb3/explorer/

Start the influxdb3-explorer container.
Point your broser to `http://localhost:8888/` to connect to the admin interface.
You will need your token to connect, and point the Explorer to
<your_influxdb2_ip_address>:8181

## HomeAssistant Configuration

Add the API token to your `secrets.yaml` in the HomeAssistant config directory.
That will make it possible to use a pointer in the configuration below.

```yaml
influx_token: <your Token>
```

Adding the following snippet to your `configuration.yaml` and alter it
to your needs.
Especially ignore_attributes and entities. After that,
please restart Homeassistant to take affect of your changes

```yaml
#InfluxDB3
influxdb:
  host: 32b8266a-influxdb3
  port: 8181
  api_version: 2
  max_retries: 3
  default_measurement: state
  token: !secret influx_token
  # Required, but not validated
  organization: d1c92e4eef98a5b6
  # The database will be created automatically
  bucket: <Your database name, for example HomeAssistant>
  ssl: false
  verify_ssl: false
  ignore_attributes:
    - device_class
    - device_type
    - icon
    - source
    - state_class
    - status
    - child_lock
    - linkquality
    - update_str
    - update_available
    - indicator_mode
    - voltage
    - power
    - power_outage_memory
    - latest_version
    - installed_version
    - update
    - power_outage_memory
    - energy
    - current
    - battery
    - humidity
    - temperature
  include:
    entities:
      - sensor.rf433_temp_garten
      - sensor.RF433_temp_pool
      - sensor.stromzaehler_powerconsumption
```

### Options

- log_level : setting up a general loglevel for the plugin
- influxd_log_level : you can set up a separate loglevel for the influxd service.
  thats because the service supports less options as log_level and they are named
  different
- show_api_keys : If enabled, the Token/key will be shown in the app log when started.
- ENVVARS : Here you can add any environment variable. The InfluxDB3 server will accept
  almost all configuration option as a variable. For example, I used the following variables
  during my import of data (The variable has to start with INFLUXDB3):
  ```yaml
  INFLUXDB3_ENTERPRISE_COMPACTION_MAX_NUM_FILES_PER_PLAN = 1000
  INFLUXDB3_WAL_SNAPSHOT_SIZE = 100
  ```
  See the following page for more info: https://docs.influxdata.com/influxdb3/enterprise/reference/config-options/

## Known issues and limitations

SSL support is not enabled at the moment.

## Changelog & Releases

Please see the changelog

## InfluxDB -> InfluxDB3 Migration

### Install plugin to migate data from InfluxDB1.x or Influxdb2.x

1. Create a database called import (used by the plugin to store jobs etc).
2. Use the InfluxDB 3 Explorer and go to "Plugin Library".
3. Install the "InfluDB Import"-plugin. Enter the following information:

```yaml
Database: Choose the database created in step 1 above
Trigger Name: import_trigger
Trigger Type: HTTP Endpoint
Api Endpoint: import
```

### Using the plugin

The InfluxDB Import-plugin is manged via api calls. It is beyond the
scope of this documentation to describe exatly how it works, but here
are some hints at least:

You have to call the API endpoint and send some json data to start a migration.
It can be called from any computer on your network. I used curl to send the data.

Create a file to describe what you want to import. Here is an example that imports
data from an InfluxDB2 instance to InfluxDB3:

```json
{
  "source_url": "http://<your_influxdb2_ip_address>:8086",
  "source_token": "<your influxdb2 token>",
  "influxdb_version": 2,
  "source_database": "HomeAssistant",
  "dest_database": "HomeAssistant",
  "table_filter": "°C.%",
  "query_interval_ms": 100,
  "target_batch_size": 500,
  "start_timestamp": "2026-01-01T00:00:00Z",
  "end_timestamp": "2026-02-28T23:59:59Z"
}
```

The import config above will import the °C and % measurements.
Save the file, for example call it data.json
Call the API via curl:

```bash
curl -X POST -H "Content-Type: application/json" -d @data.json \
    http://<your_influxdb3_ip_address>:8181/api/v3/engine/import?action=start \
    --header "Authorization: Bearer <your influxdb3_api_token>"
```

Important: Do not try to import an entire database. The importer/InfluxDB3 will
crash. At least it did om my 8GB RPI5. Take on or two measurements at a time,
and limit to a few months as above.

Read the docs for the plugin here: https://github.com/influxdata/influxdb3_plugins/tree/main/influxdata/import

## Support

Got questions?

You could [open an issue here][issue] GitHub.

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[issue]: https://github.com/erik73/app-influxdb3/issues
[repository]: https://github.com/erik73/hassio-addons
