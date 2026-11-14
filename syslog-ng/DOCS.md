# Unofficial Home Assistant Add-on: syslog-ng

syslog-ng bundled as a Home Assistant add-on.

## Configuration

### Option: `config_path` (optional)

Path to a custom syslog-ng configuration file (e.g., `/config/syslog-ng.conf`).
When set, this file is used instead of the auto-generated default config.
If the file is not found, the addon falls back to the default config 
and logs a warning.

### Option: `promtail_host`

Hostname of a Promtail instance to forward logs to. When set, 
all received logs are forwarded to Promtail instead of being written
to local files.

### Option: `promtail_port`

Port of the Promtail syslog receiver. Default: `1514`.
