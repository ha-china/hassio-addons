ARG BUILD_FROM=ghcr.nju.edu.cn/linuxserver/syslog-ng:4.11.0

FROM ${BUILD_FROM} AS final

RUN apk add --no-cache gomplate \
    && grep -rl "/config" /etc/s6-overlay/s6-rc.d | xargs sed -i 's/\/config/\/data/g' \
    && usermod -d /data abc

COPY rootfs /

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: syslog-ng" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/syslog-ng/README.md"
