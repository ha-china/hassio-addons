ARG BUILD_FROM

FROM ghcr.1ms.run/openbao/openbao:2.5.1 AS openbao-base
FROM ${BUILD_FROM} AS final

ARG USERNAME=openbao

COPY rootfs /
COPY --from=openbao-base /bin/bao /usr/local/bin/bao

RUN apk add --no-cache curl gomplate jq \
    && addgroup "${USERNAME}" \
    && adduser -S -G "${USERNAME}" "${USERNAME}"
