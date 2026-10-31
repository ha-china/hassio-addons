ARG BUILD_FROM=ghcr.nju.edu.cn/home-assistant/base:3.24

FROM traefik:v2.11.60 AS traefik-base
FROM ${BUILD_FROM} AS final

COPY rootfs /
COPY --from=traefik-base /usr/local/bin/traefik /usr/local/bin/traefik
RUN apk add --no-cache nginx gomplate

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: traefik" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/traefik/README.md"
