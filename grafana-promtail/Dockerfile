ARG BUILD_FROM

FROM grafana/promtail:3.6.10 as promtail-base
FROM mikefarah/yq:4.52.5 as yq-base
FROM ${BUILD_FROM} AS final


RUN set -eux; \
    apt-get update; \
    apt-get install -qy --no-install-recommends libsystemd-dev; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*;

COPY rootfs /
COPY --from=promtail-base /usr/bin/promtail /usr/bin/promtail
COPY --from=yq-base /usr/bin/yq /usr/bin/yq
