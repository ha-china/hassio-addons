FROM ghcr.nju.edu.cn/donkie/spoolman:0.26.1

USER root
RUN apt-get update && apt-get install -y --no-install-recommends curl nginx && rm -rf /var/lib/apt/lists/*

EXPOSE 7912

COPY nginx.conf.template /nginx.conf.template
COPY run.sh /run.sh

RUN chmod +x /run.sh
ENTRYPOINT ["/run.sh"]
