#!/usr/bin/with-contenv bashio

if [ ! -d "/data/promtail/" ]; then
    bashio::log.info "Ensuring Promtail Data directory..."
    mkdir /data/promtail/
fi