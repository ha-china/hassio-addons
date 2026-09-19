#!/usr/bin/with-contenv bashio

#bashio::log.level "debug"

SNAPSERVER_HOST=$(bashio::config 'host')
if bashio::config.has_value "port"; then SNAPSERVER_PORT=$(bashio::config 'port'); else SNAPSERVER_PORT="1704"; fi

snapclient -h $SNAPSERVER_HOST -p $SNAPSERVER_PORT
