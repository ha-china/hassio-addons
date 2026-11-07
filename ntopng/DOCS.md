# Li Tin O`ve Weedle Assistant Add-on: ntopng

This is an ntopng add-on for Home Assistant.
It includes opensource community version of ntopng
and opensource netflow collector implementation netflow2ng


## Installation

Install ntopng addon in your Home Assistant

1. Click the Home Assistant My button below to open the add-on on your Home
   Assistant instance.

   [![Open this add-on in your Home Assistant instance.][addon-badge]][addon]

2. Click the "Install" button to install the add-on.
2. Configure addon - see bellow section configuration
3. Start the add-on.
4. Check the logs of the add-on to see it in action.
5. Configure your Netflow exporter device (i.e. router) to publish to the Hassio IP ntopng addon port 2055


## Configuration

ntopng add-on configuration:

```yaml
log_level: info
ssl: true
certfile: certfile.pem
keyfile: keyfile.pem
leave_front_door_open: false
ntop_auth: false
zmq_loc_port: 5556
ntopng_loc_port: 3000
netflow2ng_loc_port: 8080
redis_loc_port: 6379
custom_scripts: false
dns_mode: 1
local_net:
  - 192.168.1.0/24=LAN
  - 192.168.30.0/22=MGMT
dump_flows: mysql;127.0.0.1;ntopng;user;secret_password
geoip_account_id: 123456
geoip_license_key: "Kdsalhdsl_lshahc_hskljd_as"
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

### Option: `ssl`
If to enable HTTPS encryption, not used when using Hassio Ingress

### Option: `certfile`
SSL/HTTPS private, not used when using Hassio Ingress

### Option: `keyfile`
SSL/HTTPS private key, not used when using Hassio Ingress

### Option: `leave_front_door_open`
If to open ntopng http/s ports from outside (i.e. do not use Hassio Ingress)

### Option: `ntop_auth`
To switch on/off ntopng user authentication - can be set to false when using Hassio Ingress, as basic level of the authentication (all HA users will get ntopng admin access) will be provide by Hassio.

### Option: `zmq_loc_port`
Internal localhost only port for communication from ntopng to NetFlow2NG. Default is `5556` change only in the case of the collision with other addons.

### Option: `ntopng_loc_port`
Internal localhost only port for ntopng user web interface (accessible by ingress). Default is `3000` change only in the case of the collision with other addons.

### Option: `netflow2ng_loc_port`
Internal localhost only port for NetFlow2NG statistic web interface (accessible by ingress). Default is `8080` change only in the case of the collision with other addons.

### Option: `redis_loc_port`
Internal localhost only port for communication from ntopng to Redis. Default is `6379` change only in the case of the collision with other addons.

### Option: `custom_scripts`
Default ntopng script are copied during the start to the addon persistent data storage, new custom script can be added.

### Option: `dns_mode`
DNS address resolution mode, see [ntopng cli -n options](https://www.ntop.org/guides/ntopng/cli_options/cli_options.html)
- 0 - Decode DNS responses and resolve local numeric IPs only (default)
- 1 - Decode DNS responses and resolve all numeric IPs
- 2 - Decode DNS responses but don't resolve numeric IPs
- 3 - Don't decode DNS/MDNS/HTTP/TLS responses and don't resolve numeric IPs (all hosts)
- 4 - Don't decode DNS/MDNS/HTTP/TLS responses and don't resolve numeric IPs (localhost only)

### Option: `local_net`
List of local networks, can be followed by [=NAME] for network description.

### Option: `dump_flows`
See Dump Flows [ntopng cli -F options](https://www.ntop.org/guides/ntopng/cli_options/cli_options.html) and [Flows Dumps](https://www.ntop.org/guides/ntopng/flow_dump/index.html) documentation.

### Option: `geoip_account_id`
Account id for the [MaxMind](https://www.maxmind.com/en/locate-my-ip-address) GeoIP database account.

### Option: `geoip_license_key`
Password for the [MaxMind](https://www.maxmind.com/en/locate-my-ip-address) GeoIP database account.

## Changelog & Releases

This repository keeps a change log using [GitHub's releases][releases]
functionality.

Releases are based on [Semantic Versioning][semver], and use the format
of `MAJOR.MINOR.PATCH`. In a nutshell, the version will be incremented
based on the following:

- `MAJOR`: Incompatible or major changes.
- `MINOR`: Backwards-compatible new features and enhancements.
- `PATCH`: Backwards-compatible bugfixes and package updates.


## Support

Got questions?

You have several options to get them answered:

- The Home Assistant [Community Forum][forum].
- You could also [open an issue here][issue] GitHub.

You could also [open an issue here][issue] GitHub.


## Authors & contributors

The original setup of this repository is by [Li Tin O`ve Weedle][litin].


## License

Apache 2.0

Copyright (c) 2025 Dominik Strnad

[addon-badge]: https://my.home-assistant.io/badges/supervisor_addon.svg
[addon]: https://my.home-assistant.io/redirect/supervisor_addon/?addon=ntopng&repository_url=https%3A%2F%2Fgithub.com%2Flitinoveweedle%2Fhassio-addons
[contributors]: https://github.com/litinoveweedle/hassio-addons/graphs/contributors
[forum]: https://community.home-assistant.io/t/foss-ntopng-with-netflow-collector-hassio-addon/603491
[litin]: https://github.com/litinoveweedle
[issue]: https://github.com/litinoveweedle/hassio-addons-dev/issues
[semver]: http://semver.org/spec/v2.0.0.html
