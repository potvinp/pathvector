# Unit test image: everything `make test-sequence` needs on a host (bird2,
# bgpq4, PeeringDB test API dependencies, a dummy interface) without touching
# the host. The source is bind mounted at run time, not copied, so the image
# only rebuilds when these dependencies change.
#
#   make docker-test
ARG GO_VERSION=1.22
FROM golang:${GO_VERSION}-bookworm
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
      bird2 bgpq4 python3 python3-pip python3-flask iproute2 iputils-ping ca-certificates git \
 && rm -rf /var/lib/apt/lists/* \
 && pip install --no-cache-dir --break-system-packages pyang \
 && mkdir -p /run/bird /etc/bird
WORKDIR /src
ENTRYPOINT ["/src/tests/docker/entrypoint.sh"]
CMD ["make", "test"]
