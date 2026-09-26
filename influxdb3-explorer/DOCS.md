# Home Assistant App: InfluxDB3 Explorer

InfluxDB3 Explorer app for Home Assistant

![Supports aarch64 Architecture][aarch64-shield] ![Supports amd64 Architecture][amd64-shield]

## About

Management web interface for InfluxDB3: InfluxDB3 Explorer

You reach the InfluxDB3 Explorerer interface by clicking the Web UI button in the app
page to use WebUI feature.
You can also reach the app directly by pointing your browser to
http://{homeassistant IP or hostname}:8888.
The port can be changed in the network section in the app settings.

## Installation

Follow these steps to get the app installed on your system:

Add the repository `https://github.com/erik73/hassio-addons`.
Find the "InfluxDB3 Explorer" app and click it.
Click on the "INSTALL" button.

## How to use

### Starting the app

After installation you are presented with a port assignment of 8888.
This can be changed in the network section.

Start the app and click the "Open Web UI" button or point your browser
directly to the app as per the intructions above. For example:
http://{homeassistant IP or hostname}:8888

## Configuration

Once you reach the InfluxDB3 Explorer you have to fill in the correct
IP address and credentials to connect to your InfluxDB3 server instance.

## Known issues and limitations

- No SSL support yet
- No ingress support. Only Web UI.

## Support

Got questions?

You could [open an issue here][issue] GitHub.

[aarch64-shield]: https://img.shields.io/badge/aarch64-yes-green.svg
[amd64-shield]: https://img.shields.io/badge/amd64-yes-green.svg
[issue]: https://github.com/erik73/app-influxdb3-explorer/issues
[repository]: https://github.com/erik73/hassio-addons
