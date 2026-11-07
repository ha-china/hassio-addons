ARG BUILD_FROM=ghcr.nju.edu.cn/home-assistant/base:3.24

FROM ghcr.nju.edu.cn/openbao/openbao:2.7.2 AS openbao-base
FROM ${BUILD_FROM} AS final

ARG USERNAME=openbao

COPY rootfs /
COPY --from=openbao-base /usr/bin/bao /usr/local/bin/bao

RUN apk add --no-cache curl gomplate jq logrotate \
    && addgroup "${USERNAME}" \
    && adduser -S -G "${USERNAME}" "${USERNAME}"

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: openbao" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/openbao/README.md"
