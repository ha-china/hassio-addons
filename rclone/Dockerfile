ARG BUILD_FROM

FROM rclone/rclone:1.75.2 as rclone-base
FROM ${BUILD_FROM} AS final

COPY rootfs /
COPY --from=rclone-base /usr/local/bin/rclone /usr/local/bin/rclone
