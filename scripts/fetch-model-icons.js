/**
 * 拉取模型厂商 logo 到 pages/model-icons/{vendor}.svg
 *
 * 数据源：cch-plus.com/model-icons（AGPL 开源项目，图标为各厂商品牌 logo，用于标识厂商）
 * 优先级：已知名映射 → {vendor}.svg → {vendor}-color.svg
 * 拉取失败的厂商在页面上自动 fallback 为首字母圆圈（models-catalog.js 的 onerror 处理）
 *
 * 用法：node scripts/fetch-model-icons.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'pages', 'models-data.json');
const OUT_DIR = path.join(ROOT, 'pages', 'model-icons');
const BASE = 'https://cch-plus.com/model-icons/';

// vendor 名 → cch 文件名（已知的不规则映射；其余按 {vendor} / {vendor}-color 规则探测）
const NAME_MAP = {
  alibaba: 'alibaba-color',
  anthropic: 'anthropic',
  amazon: 'aws-color',
  baidu: 'baidu-color',
  bfl: 'bfl',
  bytedance: 'bytedance-color',
  cohere: 'cohere-color',
  deepseek: 'deepseek-color',
  google: 'google-color',
  meta: 'meta-color',
  microsoft: 'microsoft-color',
  minimax: 'minimax-color',
  mistral: 'mistral-color',
  moonshotai: 'moonshot',
  nvidia: 'nvidia-color',
  openai: 'openai',
  perplexity: 'perplexity-color',
  stepfun: 'stepfun-color',
  xai: 'xai',
  zhipuai: 'zhipu-color'
};

function loadVendors() {
  const raw = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  const arr = Array.isArray(raw) ? raw : (raw.models || raw.data || []);
  const items = Array.isArray(arr) ? arr : [];
  const set = new Set();
  items.forEach(function (m) { if (m && m.vendor) set.add(m.vendor); });
  return Array.from(set);
}

async function tryFetch(name) {
  const res = await fetch(BASE + name + '.svg', {
    headers: { 'User-Agent': 'web-pigcoder/icon-fetch' },
    redirect: 'follow'
  });
  if (!res.ok) return null;
  const txt = await res.text();
  if (!txt || txt.indexOf('<svg') === -1) return null;
  return txt;
}

(async function () {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const vendors = loadVendors().sort();
  console.log('厂商总数:', vendors.length);

  let ok = 0, miss = 0, skip = 0;
  const missing = [];
  // 小并发，避免给源站压力
  const CONCURRENCY = 6;
  let cursor = 0;

  async function worker() {
    while (cursor < vendors.length) {
      const v = vendors[cursor++];
      if (v === 'other') { skip++; continue; }
      const candidates = NAME_MAP[v] ? [NAME_MAP[v]] : [v, v + '-color'];
      let saved = false;
      for (const c of candidates) {
        try {
          const txt = await tryFetch(c);
          if (txt) {
            fs.writeFileSync(path.join(OUT_DIR, v + '.svg'), txt);
            saved = true; ok++;
            console.log('  ✓', v, '←', c);
            break;
          }
        } catch (e) { /* 继续下一个候选 */ }
      }
      if (!saved) { miss++; missing.push(v); console.log('  ✗', v); }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.log('\n完成：成功', ok, '缺失', miss, '跳过', skip);
  if (missing.length) console.log('缺失厂商:', missing.join(', '));
})();
