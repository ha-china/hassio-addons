ARG BUILD_FROM

FROM ghcr.nju.edu.cn/openbao/openbao:2.6.2 AS openbao-base
FROM ${BUILD_FROM} AS final

ARG USERNAME=openbao

COPY rootfs /
COPY --from=openbao-base /usr/bin/bao /usr/local/bin/bao

RUN apk add --no-cache curl gomplate jq logrotate \
    && addgroup "${USERNAME}" \
    && adduser -S -G "${USERNAME}" "${USERNAME}"
