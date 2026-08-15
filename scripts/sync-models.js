#!/usr/bin/env node
/**
 * 同步完整模型目录：拉取 CCH 开放数据集 → 转换为本站精简 schema → 写入 pages/models-data.json
 *
 * 用法：
 *   node scripts/sync-models.js                    # 从线上拉取
 *   node scripts/sync-models.js --file /tmp/x.json # 用本地文件
 *
 * 精简原则：只保留目录页渲染所需字段，5000+ 模型控制在 ~2MB 内。
 */
const fs = require('fs');
const path = require('path');

const SOURCE_URL = 'https://cch-plus.com/pricing/v1/models.json';
const OUT_PATH = path.join(__dirname, '..', 'pages', 'models-data.json');

/* 能力展示优先级：卡片只露前 4 个，把最有信息量的排前面 */
const CAP_ORDER = [
  'function_calling', 'vision', 'reasoning', 'structured_output', 'web_search',
  'prompt_caching', 'stream', 'open_weights', 'image_output', 'audio_input',
  'audio_output', 'video_input', 'pdf_input', 'parallel_function_calling',
  'assistant_prefill', 'computer_use'
];

function trimIntro(s) {
  if (!s) return undefined;
  s = String(s).trim();
  return s.length > 160 ? s.slice(0, 157) + '…' : s;
}

function num(s) {
  const n = Number(s);
  return isFinite(n) ? parseFloat(n.toFixed(4)) : null;
}

function convert(src, prevIntros) {
  const models = src.models.map((m) => {
    const caps = new Set(Object.keys(m.capabilities || {}).filter((k) => m.capabilities[k]));
    const inMods = (m.modalities && m.modalities.input) || [];
    const outMods = (m.modalities && m.modalities.output) || [];
    if (inMods.includes('image')) caps.add('vision');
    if (inMods.includes('audio')) caps.add('audio_input');
    if (inMods.includes('video')) caps.add('video_input');
    if (outMods.includes('image')) caps.add('image_output');
    if (outMods.includes('audio')) caps.add('audio_output');
    const capList = CAP_ORDER.filter((c) => caps.has(c));

    /* 定价：优先官方价，否则取第一条聚合价 */
    const p = (m.pricing || []).find((x) => x.official) || (m.pricing || [])[0];
    let price;
    if (p && p.charges) {
      const pin = p.charges.prompt && num(p.charges.prompt.price);
      const pout = p.charges.completion && num(p.charges.completion.price);
      if (pin != null || pout != null) {
        price = { o: !!p.official, p: p.provider_name || p.provider || '' };
        if (pin != null) price.in = pin;
        if (pout != null) price.out = pout;
      }
    }

    const zh = m.intro_i18n && (m.intro_i18n.zh || m.intro_i18n['zh-CN']);
    const en = (m.intro_i18n && (m.intro_i18n.en || m.intro_i18n['en-US'])) || m.intro;
    const prev = prevIntros[m.model_name];
    let intro;
    if (zh || en || prev) {
      intro = {};
      if (zh) intro.zh = trimIntro(zh);
      else if (prev && prev.zh) intro.zh = prev.zh;
      if (en) intro.en = trimIntro(en);
      else if (prev && prev.en) intro.en = prev.en;
      if (!intro.zh && !intro.en) intro = undefined;
    }

    const out = {
      id: m.model_name,
      name: m.display_name || m.model_name,
      slug: m.slug,
      vendor: m.vendor,
      type: m.model_type,
      caps: capList
    };
    if (Array.isArray(m.aliases) && m.aliases.length) out.alias = m.aliases.slice(0, 4);
    if (m.max_input_tokens) out.ctx = m.max_input_tokens;
    if (m.released_at) out.date = m.released_at;
    if (m.deprecated || m.status === 'deprecated') out.dep = true;
    if (price) out.price = price;
    if (intro) out.intro = intro;
    return out;
  });

  return {
    refreshed_at: src.refreshed_at || new Date().toISOString().slice(0, 10),
    source: 'open-model-directory',
    models
  };
}

async function main() {
  const fileArg = process.argv.indexOf('--file');
  let raw;
  if (fileArg !== -1 && process.argv[fileArg + 1]) {
    raw = fs.readFileSync(process.argv[fileArg + 1], 'utf8');
  } else {
    const res = await fetch(SOURCE_URL);
    if (!res.ok) throw new Error('fetch failed: ' + res.status);
    raw = await res.text();
  }
  const src = JSON.parse(raw);

  /* 保留手工维护过的中文简介（新数据没有对应中文时兜底） */
  let prevIntros = {};
  try {
    const prev = JSON.parse(fs.readFileSync(OUT_PATH, 'utf8'));
    prev.models.forEach((m) => { if (m.intro) prevIntros[m.id] = m.intro; });
  } catch (e) { /* 首次运行无旧文件 */ }

  const out = convert(src, prevIntros);
  fs.writeFileSync(OUT_PATH, JSON.stringify(out));
  const size = (fs.statSync(OUT_PATH).size / 1024 / 1024).toFixed(2);
  const vendors = new Set(out.models.map((m) => m.vendor)).size;
  const types = new Set(out.models.map((m) => m.type)).size;
  console.log('models:', out.models.length, '| vendors:', vendors, '| types:', types, '| size:', size + 'MB', '| refreshed:', out.refreshed_at);
}

main().catch((e) => { console.error(e); process.exit(1); });
