#!/usr/bin/env bash
# Runs a GoReleaser snapshot build from a copy of the bind mounted source
# (/src), so files rewritten by `go generate` (docs/) never touch the host
# working tree. Artifacts are copied back to /src/dist.
set -euo pipefail

rsync -a --delete --exclude dist --exclude coverage.txt /src/ /work/
cd /work

# Publishing (GitHub release, fury.io, and the vendorbuild publisher, which
# needs Docker and signing keys) is skipped
goreleaser release --snapshot --clean --skip=publish "$@"

mkdir -p /src/dist
rsync -a --delete /work/dist/ /src/dist/
cp -f /work/pathvector-*-release.pdf /src/dist/ 2>/dev/null || true
echo "Artifacts copied to ./dist"
