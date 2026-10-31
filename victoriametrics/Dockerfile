ARG BUILD_FROM=ghcr.nju.edu.cn/home-assistant/base:3.24

FROM victoriametrics/victoria-metrics:v1.155.0 AS victoriametrics-server
FROM victoriametrics/vmagent:v1.155.0 AS victoriametrics-agent
FROM ${BUILD_FROM} AS final

COPY rootfs /
COPY --from=victoriametrics-server /victoria-metrics-prod /usr/local/bin/victoria-metrics-prod
COPY --from=victoriametrics-agent /vmagent-prod /usr/local/bin/vmagent-prod

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: victoriametrics" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/victoriametrics/README.md"
