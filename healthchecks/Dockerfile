ARG BUILD_FROM

FROM ${BUILD_FROM} AS final

RUN grep -rl "/config" /etc/s6-overlay/s6-rc.d | xargs sed -i 's/\/config/\/data/g' \
    && sed -i "3i #sorrrry \nfor row in \$(cat /data/options.json | jq -r '.env_vars[] | .'); do export \$row; done\n" /etc/s6-overlay/s6-rc.d/init-healthchecks-config/run \
    && usermod -d /data abc

COPY rootfs /