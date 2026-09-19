FROM ghcr.nju.edu.cn/wg-easy/wg-easy:15.4.0

RUN apk add --no-cache nginx jq

COPY run.sh /run.sh
RUN chmod a+x /run.sh

CMD ["/run.sh"]
