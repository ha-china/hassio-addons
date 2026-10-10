ARG BUILD_FROM
FROM ghcr.nju.edu.cn/rdiger-36/haspelsync:1.3.4

# Add script and default config
COPY run.sh /run.sh

RUN chmod +x /run.sh

ENTRYPOINT ["/run.sh"]
