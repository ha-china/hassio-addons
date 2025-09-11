FROM docker.1ms.run/probezy/cpolar:3.3.18

RUN apt-get update && apt-get install -y \
    jq \
    && rm -rf /var/lib/apt/lists/*

COPY run.sh /
RUN chmod a+x /run.sh


WORKDIR /data

EXPOSE 9200

CMD [ "/run.sh" ]
