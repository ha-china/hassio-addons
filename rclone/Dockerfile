ARG BUILD_FROM=ghcr.nju.edu.cn/home-assistant/base:3.24

FROM rclone/rclone:1.75.2 AS rclone-base
FROM ${BUILD_FROM} AS final

COPY rootfs /
COPY --from=rclone-base /usr/local/bin/rclone /usr/local/bin/rclone

LABEL \
    maintainer="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.authors="bluemaex <homeassistant@blmx.de>" \
    org.opencontainers.image.licenses="MIT License" \
    org.opencontainers.image.title="Home Assistant Unofficial Add-on: rclone" \
    org.opencontainers.image.url="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons" \
    org.opencontainers.image.documentation="https://gh-proxy.org/github.com/bluemaex/home-assistant-addons/rclone/README.md"
