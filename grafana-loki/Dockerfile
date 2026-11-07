ARG BUILD_FROM=ghcr.nju.edu.cn/home-assistant/base:3.24

FROM grafana/loki:3.7.9 AS loki-base
FROM ${BUILD_FROM} AS final

COPY rootfs /
COPY --from=loki-base /usr/bin/loki /usr/bin/loki

RUN apk add --no-cache gomplate

RUN adduser -g "loki" --home /data/loki --disabled-password loki

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: grafana-loki" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/grafana-loki/README.md"
