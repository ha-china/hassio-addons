ARG BUILD_FROM=ghcr.nju.edu.cn/home-assistant/base:3.24

FROM webhippie/terrastate:2.11.0 AS terrastate-base
FROM ${BUILD_FROM} AS final

ARG USERNAME=terrastate

COPY rootfs /
COPY --from=terrastate-base /usr/bin/terrastate /usr/local/bin/terrastate

RUN apk add --no-cache gomplate \
    && addgroup "${USERNAME}" \
    && adduser -S -G "${USERNAME}" "${USERNAME}"

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: terrastate" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/terrastate/README.md"
