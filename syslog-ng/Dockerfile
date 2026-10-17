ARG BUILD_FROM

FROM ${BUILD_FROM} AS final

RUN apk add --no-cache gomplate \
    && grep -rl "/config" /etc/s6-overlay/s6-rc.d | xargs sed -i 's/\/config/\/data/g' \
    && usermod -d /data abc

COPY rootfs /