# Unofficial Home Assistant Add-ons: Promtail

Promtail bundled as an Home Assistant add-on.

## Default Setup

By default this addon version of Promtail will tail logs from the systemd
journal. This will include all logs from all addons, supervisor, home assistant,
docker, and the host system itself. It will then ship them to the Loki add-on in
this same repository if you have it installed. No additional configuration is
required if this is the setup you want.

If you adjusted the configuration of the Loki add-on, have a separate Loki
add-on or have other log files you want Promtail to monitor then see below for
the configuration options.

## Configuration

### Option: `additional_pipeline_stages`

The absolute path to a YAML file with a list of additional pipeline stages to
apply to the [default journal scrape config][addon-default-config]. The primary
use of this is to apply additional processing to logs from particular add-ons
you use if they are noisy or difficult to read.

This file must contain only a YAML list of pipeline stages. They will be added
to the end of the ones already listed. If you don't like the ones listed, use
`skip_default_scrape_config` and `additional_scrape_configs` to write your own
instead. Here's an example of the contents of this file:

```yaml
- match:
    selector: '{container_name="addon_cebe7a76_hassio_google_drive_backup"}'
    stages:
      - multiline:
          firstline: '^\x{001b}'
```

This particular example applies to the [google drive backup
addon][addon-google-drive-backup]. It uses the same log format as Home Assistant
and outputs the escape character at the start of each log line for color-coding
in terminals. Looking for that in a multiline stage makes it so tracebacks are
included in the same log entry as the error that caused them for easier
readability.

See the [promtail documentation][promtail-doc-stages] for more information on
how to configure pipeline stages.

**Note**: This addon has access to `/ssl`, `/share` and `/config/promtail`.
Place the file in one of these locations, others will not work.

### Option: `skip_default_scrape_config`

Promtail will scrape the `systemd journal` using a pre-defined config you can
find [here][addon-default-config]. If you only want it to look at specific log
files you specify or you don't like the default config and want to adjust it,
set this to `true`. Then the only scrape configs used will be the ones you
specify in the `additional_scrape_configs` file.

**Note**: This addon has access to `/ssl`, `/share` and `/config/promtail`.
Place the file in one of these locations, others will not work.

### Option: `additional_scrape_configs`

The absolute path to a YAML file with a list of additional scrape configs for
Promtail to use. The primary use of this is to point Promtail at additional log
files created by add-ons which don't use `stdout` for all logging. You an also
change the system journal is scraped by using this in conjunction with
`skip_default_scrape_config`. **Note**: If `skip_default_scrape_config` is
`true` then this field becomes required (otherwise there would be no scrape
configs)

The file must contain only a YAML list of scrape configs. Here's an example of
the contents of this file:

```yaml
- job_name: zigbee2mqtt_messages
  pipeline_stages:
  static_configs:
    - targets:
        - localhost
      labels:
        job: zigbee2mqtt_messages
        __path__: /share/zigbee2mqtt/log/**.txt
```

This particular example would cause Promtail to scrape up the logs MQTT that the
[Zigbee2MQTT add-on][addon-z2m] makes by default.

Promtail provides a lot of options for configuring scrape configs. See the
documentation on [scrape_configs][promtail-doc-scrape-configs] for more info on
the options available and how to configure them. The documentation also provides
[other examples][promtail-doc-examples] you can use.

I would also recommend reading the [Loki best
practices][loki-doc-best-practices] guide before making custom scrape configs.
Pipelines are pretty powerful but avoid making too many labels, it does more
harm then good. Instead look into what you can do with [LogQL][logql] can do at
the other end.

**Note**: This addon has access to `/ssl`, `/share` and `/config/promtail`.
Place the file in one of these locations, others will not work.

### Port: `9080/tcp`

Promtail expose an [API][api] on this port. This is primarily used for
healthchecks by the supervisor watchdog which does not require exposing it on
the host. Most users should leave this option disabled unless you have an
external application doing healthchecks.

For advanced users creating custom scrape configs the other purpose of this API
is to expose metrics created by the [metrics][promtail-doc-metrics] pipeline
stage. Exposing this port would then allow you to read those metrics from
another system on your network.

### Option: `log_level`

The `log_level` option controls the level of log output by the addon and can be
changed to be more or less verbose, which might be useful when you are dealing
with an unknown issue. Possible values are:

- `debug`: Shows detailed debug information.
- `info`: Normal (usually) interesting events.
- `warning`: Exceptional occurrences that are not errors.
- `error`: Runtime errors that do not require immediate action.

Please note that each level automatically includes log messages from a more
severe level, e.g., `debug` also shows `info` messages. By default, the
`log_level` is set to `info`, which is the recommended setting unless you are
troubleshooting.

## PLG Stack (Promtail, Loki and Grafana)

Promtail isn't a standalone application, it's job is to find logs, process them
and ship them to Loki. Most likely you want the full PLG stack:

- Promtail to process and ship logs
- Loki to aggregate and index them
- Grafana to visualize and monitor them

[addon-default-config]: https://github.com/mdegat01/addon-promtail/blob/main/promtail/rootfs/etc/promtail/default-scrape-config.yaml
[addon-google-drive-backup]: https://github.com/sabeechen/hassio-google-drive-backup
[addon-z2m]: https://github.com/zigbee2mqtt/hassio-zigbee2mqtt
[api]: https://grafana.com/docs/loki/latest/clients/promtail/#api
[logql]: https://grafana.com/docs/loki/latest/logql/
[loki-doc-best-practices]: https://grafana.com/docs/loki/latest/best-practices/
[promtail-doc-examples]: https://grafana.com/docs/loki/latest/clients/promtail/configuration/#example-static-config
[promtail-doc-metrics]: https://grafana.com/docs/loki/latest/clients/promtail/configuration/#metrics
[promtail-doc-scrape-configs]: https://grafana.com/docs/loki/latest/clients/promtail/configuration/#scrape_configs
[promtail-doc-stages]: https://grafana.com/docs/loki/latest/clients/promtail/stages/
