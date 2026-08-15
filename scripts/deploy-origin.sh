#!/usr/bin/env bash
# 源站部署：把 pages/ 同步到静态根目录（默认 /srv/www/pigcode-home）
# 用法：
#   scripts/deploy-origin.sh              # 拉最新 main 并同步
#   scripts/deploy-origin.sh /其他/目录    # 指定其他目标目录
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DEST="${1:-/srv/www/pigcode-home}"

if [ ! -d "$DEST" ]; then
  echo "错误：目标目录不存在：$DEST" >&2
  exit 1
fi

git -C "$REPO_DIR" pull --ff-only

# --delete 会清理线上已废弃的旧文件；--exclude 防止误带仓库元数据
rsync -a --delete --exclude='.git' "$REPO_DIR/pages/" "$DEST/"

echo "✅ 已部署 $(git -C "$REPO_DIR" rev-parse --short HEAD)（$(git -C "$REPO_DIR" branch --show-current)）→ $DEST"
