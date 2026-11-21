# Unofficial Home Assistant Add-ons: Rclone

Rclone bundled as an Home Assistant add-on.

## Installation

Follow these steps to get the add-on installed on your system:

1. Navigate in your Home Assistant frontend to **Supervisor -> Add-on Store**
1. Add this new repository by URL (`https://github.com/bluemaex/home-assistant-addons`)
1. Find the "Rclone" add-on and click it.
1. Click on the "INSTALL" button

## How to use

After installation you will need to generate a rclone configuration file. This
can be done in several ways:

### Generate rclone config locally

1. Download the [latest release](https://rclone.org/downloads/) for your
   platform and extract the rclone binary
1. Run `rclone config`
1. Set up your remote
1. Copy the generated Rclone config to your Hass.io host

### Generate rclone config through a Docker container

1. Run `docker run --rm -it --entrypoint /bin/sh rclone/rclone`
1. Run `rclone --config /data/rclone.conf config`
1. Set up your remote
1. Run `cat /data/rclone.conf` and copy over the contents to your Hass.io host

> **Note** For more information regarding Rclone config, please read the
> [Rclone documentation](https://rclone.org/docs/).

### Example Rclone configuration

```conf
[myremote]
type = owncloud
url = https://some.owncloudhost.com/remote.php/webdav/
vendor = owncloud
user = homeassistant
pass = *** ENCRYPTED PASS ***
```

## Configuration

```yaml
configuration_path: /share/rclone/rclone.conf
local_retention_days: 45
remotes:
  - name: my-webdav
    path: /backups/
    retention_days: 30
  - name: my-gdrive
    path: /
    retention_days: 14
```

### Option `configuration_path` (required)

Path to the Rclone configuration file. You can use the `/share/` or `/config/`
directories for storing this file.

### Option `local_retention_days` (required)

The number of days the local files are kept. Files older than this date are
pruned by this application. If for example the set value is 15, local files
older than 15 days will be deleted.

> **Note** This value should be higher than `remote_retention_days`.

### Option `remotes.name` (required)

Name of the remote to copy the Hass.io snapshots to.

### Option `remotes.path` (required)

Path on the remote where the copied files should be stored.

### Option `remotes.retention_days` (required)

The number of days the remote files are kept. Files older than this date are
pruned by this application. If for example the set value is 15, remote files
older than 15 days will be deleted.

### Option `remotes.start_url` (optional)

An URL that is pinged before we start rclone for this remote. Ideal for
monitoring the progress with e.g. `healthchecks.io`

### Option `remotes.end_url` (optional)

An URL that we POST the resulting log to after the rclone run for this remote.
Ideal for monitoring the progress with e.g. `healthchecks.io`

## Automations

This add-on can easily be used with an automation. For instance:

```yaml
- id: home_assistant_run_backup
  alias: Home Assistant backup
  trigger:
    platform: time
    at: "07:30"
  action:
    service: hassio.addon_start
    data_template:
      addon: 32de6d38_rclone
```

Which will prune local files and run Rclone copy at 07:30 in the morning.
