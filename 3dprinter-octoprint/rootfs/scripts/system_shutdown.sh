#!/usr/bin/with-contenv bashio

bashio::log.warning "Shutdown addon."

bashio::addon.stop
