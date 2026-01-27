# Unofficial Home Assistant Add-ons: VictoriaMetrics

VictoriaMetrics bundled as an Home Assistant add-on.

## HomeAssistant

To send data from Home Assistant to VictoriaMetrics, you can use either the
[InfluxDB][integration-influxdb] or
[Prometheus][integration-prometheus]
integration.

You can configure it to your liking as you wish. Make sure to include/exclude
the entities/domains as you wish.

### InfluxDB Specialites

Be aware of two things:

1. VictoriaMetrics only saves integer and date values. It does not save
   string values.
1. What you choose as value for `measurement_attr`. This decides how you
   create your series, if you want an own series for each entity you are best
   with `entity_id`. For a series based on the `domain` or the `measurement`
   you should choose the respective values.
   Please refer to the [official Integration Documentation][integration-influxdb-measurement].

To avoid having lot's of empty metrics it is important to tune
`ignore_attributes` to exclude what you are not interested in. Here is an
example of lots of exception. You can make these global or for each entity.

```yaml
influxdb:
  api_version: 1
  host: <<<PLease use the hostname from the Addon Info Page>>>
  port: 8428
  max_retries: 3

  measurement_attr: entity_id

  tags_attributes:
    - friendly_name
    - unit_of_measurement

  ignore_attributes:
    - app_id
    - app_name
    - access_token
    - assumed_state
    - attribution
    - auto_update
    - color
    - device_class
    - device_file
    - device_trackers
    - editable
    - effect
    - effect_list
    - entity_id
    - entity_picture
    - event
    - forecast
    - friendly_name
    - frontend_stream_type
    - has_date
    - has_time
    - hs_color
    - id
    - icon
    - last_triggered
    - level_config
    - marker_type
    - max
    - max_color_temp_kelvin
    - max_mireds
    - media_content_type
    - media_title
    - media_artist
    - media_album_name
    - media_duration
    - media_position
    - media_position_updated_at
    - min
    - min_color_temp_kelvin
    - min_mireds
    - mode
    - next_dawn
    - next_duska
    - next_midnight
    - next_noon
    - next_rising
    - next_setting
    - on_level
    - options
    - pattern
    - power_on_behavior
    - precipitation_unit
    - preset_modes
    - pressure_unit
    - release_summary
    - release_url
    - rgb_color
    - skipped_version
    - source_list
    - state_class
    - state_closed
    - state_open
    - stateExtra
    - step
    - source
    - sound_mode
    - sound_mode_list
    - sound_mode_raw
    - supported_color_modes
    - supported_features
    - temperature_unit
    - unit_of_measurement
    - unitOfMeasure
    - user_id
    - visibility_unit
    - wind_speed_unit
    - writable
    - xy_color
```

## Configuration

### Retention

Here you can specify how long VictoriaMetrics should keep it's data. You can set
it to any string VictoriaMetrics Supports ([see documentation][documentation-metrics]).
Default value is for the retention is `5y`.

### Custom Start Arguments

You pass any commandline arguments the Server or the Agent supports via this
text field. Go easy or wild. It's your choice.

### Custom Configuration Files

If you want to scrape the Prometheus endpoint from HomeAssistant or from any
other service you can simply create a `prometheus.yaml` file in the specified
configuration folder and it will be automatically imported:

```yaml
global:
  scrape_interval: 1m
  scrape_timeout: 15s

scrape_configs:
  - job_name: "home-assistant"
    scrape_interval: "5s"
    scrape_timeout: "4s"
    metrics_path: /api/prometheus
    authorization:
      credentials: "<<Your Token>>"
    scheme: http
    static_configs:
      - targets: ["http://homeassistant:8123/api/prometheus"]
```

If you need special configuration for VMAgent or the Server because of reasons:
You can specify any files inside your HomeAssistant configuration path on the
additional commandline parameters.

[documentation-metrics]: https://github.com/VictoriaMetrics/VictoriaMetrics#retention
[integration-influxdb]: https://www.home-assistant.io/integrations/influxdb/
[integration-prometheus]: https://www.home-assistant.io/integrations/prometheus/
[integration-influxdb-measurement]: https://www.home-assistant.io/integrations/influxdb/#measurement_attr
