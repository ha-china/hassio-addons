ARG BUILD_FROM=ghcr.nju.edu.cn/hassio-addons/debian-base:9.5.1

FROM grafana/promtail:3.6.11 AS promtail-base
FROM mikefarah/yq:4.54.1 AS yq-base
FROM ${BUILD_FROM} AS final


RUN set -eux; \
    apt-get update; \
    apt-get install -qy --no-install-recommends libsystemd-dev; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*;

COPY rootfs /
COPY --from=promtail-base /usr/bin/promtail /usr/bin/promtail
COPY --from=yq-base /usr/bin/yq /usr/bin/yq

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: grafana-promtail" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/grafana-promtail/README.md"
