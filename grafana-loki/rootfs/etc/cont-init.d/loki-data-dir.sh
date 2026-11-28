#!/usr/bin/with-contenv bashio

if [ ! -d "/data/loki/" ]; then
    bashio::log.info "Ensuring Loki Data directory..."
    mkdir /data/loki/
    chown loki:loki /data/loki
fi