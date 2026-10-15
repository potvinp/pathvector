#!/usr/bin/env bash
# Container entrypoint for tests/docker/Dockerfile: sets up what
# `make test-setup` does on a host (dummy interface, PeeringDB test API),
# then runs the given command (default: make test).
set -euo pipefail

# Needs --cap-add NET_ADMIN; the ping sysctl is passed with --sysctl
ip link add dev dummy0 type dummy
ip addr add dev dummy0 192.0.2.1/24
ip addr add dev dummy0 2001:db8::1/64
ip link set dev dummy0 up

python3 tests/peeringdb/peeringdb-test-api.py >/tmp/peeringdb.log 2>&1 &
for _ in $(seq 1 50); do
  python3 -c 'import urllib.request; urllib.request.urlopen("http://127.0.0.1:5000/api/net?asn=34553", timeout=1)' 2>/dev/null && break
  sleep 0.2
done

# Some tests talk to a running BIRD on the default socket (the bird2 package
# starts it as a service on a host)
[ -s /etc/bird/bird.conf ] || echo 'router id 192.0.2.1;' >/etc/bird/bird.conf
bird -c /etc/bird/bird.conf -s /run/bird/bird.ctl

exec "$@"
