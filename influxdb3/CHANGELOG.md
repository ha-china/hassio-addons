## What’s changed

* Add the possibility to use a custom data directory (in the share directory) by using the ENVVARS in the app settings.
* Set INFLUXDB3_EXEC_MEM_POOL_SIZE=512mb and INFLUXDB3_FILE_CACHE_SIZE=384mb by default. These values can be changed by using the ENVVARS in the app settings.

## 🚨 Breaking changes

- Limit resource usage @erik73 ([#78](https://github.com/erik73/app-influxdb3/pull/78))

## 🐛 Bug fixes

- Update run script to handle env variables @erik73 ([#76](https://github.com/erik73/app-influxdb3/pull/76))
- Improve handling of custom data directory @erik73 ([#77](https://github.com/erik73/app-influxdb3/pull/77))

## 🚀 Enhancements

- Set data directory as a variable @erik73 ([#74](https://github.com/erik73/app-influxdb3/pull/74))

## 📚 Documentation

- Document environment variable precedence @prvashisht ([#75](https://github.com/erik73/app-influxdb3/pull/75))
