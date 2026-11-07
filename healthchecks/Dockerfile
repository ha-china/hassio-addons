ARG BUILD_FROM=ghcr.nju.edu.cn/linuxserver/healthchecks:5.0.20261020

FROM ${BUILD_FROM} AS final

RUN grep -rl "/config" /etc/s6-overlay/s6-rc.d | xargs sed -i 's/\/config/\/data/g' \
    && sed -i "3i #sorrrry \nfor row in \$(cat /data/options.json | jq -r '.env_vars[] | .'); do export \$row; done\n" /etc/s6-overlay/s6-rc.d/init-healthchecks-config/run \
    && usermod -d /data abc

COPY rootfs /

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: healthchecks" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/healthchecks/README.md"
