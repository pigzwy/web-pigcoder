#!/usr/bin/env bash
# 源站部署：把 pages/ 同步到静态根目录（默认 /srv/www/pigcode-home）
# 用法：
#   scripts/deploy-origin.sh              # 拉最新 main 并同步
#   scripts/deploy-origin.sh /其他/目录    # 指定其他目标目录
#
# 全部逻辑包在 main() 里：git pull 会更新本文件自身，
# 函数体先解析后执行，避免脚本被自己改写导致的执行错乱。
set -euo pipefail

main() {
  local REPO_DIR DEST
  REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
  DEST="${1:-/srv/www/pigcode-home}"

  if [ ! -d "$DEST" ]; then
    echo "错误：目标目录不存在：$DEST" >&2
    exit 1
  fi

  git -C "$REPO_DIR" pull --ff-only

  if [ ! -f "$REPO_DIR/pages/index.html" ]; then
    echo "错误：$REPO_DIR/pages/index.html 不存在，仓库状态异常，中止部署" >&2
    exit 1
  fi

  if command -v rsync >/dev/null 2>&1; then
    # --delete 清理线上已废弃的旧文件
    rsync -a --delete --exclude='.git' "$REPO_DIR/pages/" "$DEST/"
  else
    # 无 rsync 的降级路径：清空后整目录复制（DEST 是纯部署产物目录，可安全重建）
    echo "提示：未安装 rsync，使用清空+复制降级方案（建议 apt install -y rsync）"
    find "$DEST" -mindepth 1 -delete
    cp -a "$REPO_DIR/pages/." "$DEST/"
  fi

  echo "✅ 已部署 $(git -C "$REPO_DIR" rev-parse --short HEAD)（$(git -C "$REPO_DIR" branch --show-current)）→ $DEST"
}

main "$@"
