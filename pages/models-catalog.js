(function () {
  var grid = document.getElementById('model-card-grid');
  if (!grid) return;

  var PAGE_SIZE = 30;

  /* 类型分组（参考 cch 侧栏），标签随 locale 切换 */
  var TYPE_GROUPS = [
    { key: 'multimodal', types: ['omni'] },
    { key: 'text', types: ['text_generation', 'deep_thinking', 'text_understanding'] },
    { key: 'vision', types: ['vision_understanding', 'image_generation', 'video_generation'] },
    { key: 'speech', types: ['speech_recognition', 'speech_synthesis', 'music_generation'] },
    { key: 'embedding', types: ['multimodal_embedding', 'text_embedding', 'text_rerank'] },
    { key: 'realtime', types: ['realtime_omni', 'realtime_speech_recognition', 'realtime_speech_translation', 'realtime_speech_synthesis'] },
    { key: 'safety', types: ['safety_detection'] }
  ];

  var LABELS = {
    'zh-CN': {
      groups: { multimodal: '多模态', text: '文本', vision: '视觉', speech: '语音', embedding: '向量', realtime: '实时', safety: '安全' },
      types: {
        text_generation: '文本生成', deep_thinking: '深度思考', text_understanding: '文本理解',
        vision_understanding: '视觉理解', image_generation: '图片生成', video_generation: '视频生成',
        speech_recognition: '语音识别', speech_synthesis: '语音合成', music_generation: '音乐生成',
        multimodal_embedding: '多模态向量', text_embedding: '文本向量', text_rerank: '重排序',
        omni: '全模态', realtime_omni: '实时全模态', realtime_speech_recognition: '实时语音识别',
        realtime_speech_translation: '实时语音翻译', realtime_speech_synthesis: '实时语音合成',
        safety_detection: '安全检测'
      },
      caps: {
        function_calling: 'Function Calling', vision: '视觉输入', reasoning: '推理', pdf_input: 'PDF 输入',
        prompt_caching: '提示词缓存', structured_output: '结构化输出', open_weights: '开放权重',
        stream: '流式输出', image_output: '图片输出', video_input: '视频输入', web_search: 'WebSearch',
        parallel_function_calling: '并行调用', audio_input: '音频输入', assistant_prefill: '回复预填',
        audio_output: '音频输出', computer_use: 'Computer Use'
      },
      ctx: { any: '不限', c128: '128K+', c200: '200K+', c1m: '1M+' }
    },
    'en-US': {
      groups: { multimodal: 'Multimodal', text: 'Text', vision: 'Vision', speech: 'Speech', embedding: 'Embedding', realtime: 'Realtime', safety: 'Safety' },
      types: {
        text_generation: 'Text generation', deep_thinking: 'Deep thinking', text_understanding: 'Text understanding',
        vision_understanding: 'Vision understanding', image_generation: 'Image generation', video_generation: 'Video generation',
        speech_recognition: 'Speech recognition', speech_synthesis: 'Speech synthesis', music_generation: 'Music generation',
        multimodal_embedding: 'Multimodal embedding', text_embedding: 'Text embedding', text_rerank: 'Reranking',
        omni: 'Omni', realtime_omni: 'Realtime omni', realtime_speech_recognition: 'Realtime speech recognition',
        realtime_speech_translation: 'Realtime speech translation', realtime_speech_synthesis: 'Realtime speech synthesis',
        safety_detection: 'Safety detection'
      },
      caps: {
        function_calling: 'Function calling', vision: 'Vision', reasoning: 'Reasoning', pdf_input: 'PDF input',
        prompt_caching: 'Prompt caching', structured_output: 'Structured output', open_weights: 'Open weights',
        stream: 'Streaming', image_output: 'Image output', video_input: 'Video input', web_search: 'Web search',
        parallel_function_calling: 'Parallel calls', audio_input: 'Audio input', assistant_prefill: 'Assistant prefill',
        audio_output: 'Audio output', computer_use: 'Computer use'
      },
      ctx: { any: 'Any', c128: '128K+', c200: '200K+', c1m: '1M+' }
    }
  };

  /* 能力小图标（lucide 风格线性 SVG，随文字色） */
  var SVG_PATHS = {
    reasoning: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>',
    vision: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    function_calling: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    structured_output: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
    pdf_input: '<path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
    prompt_caching: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    open_weights: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    stream: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    image_output: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
    video_input: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    web_search: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z"/>',
    parallel_function_calling: '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    audio_input: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>',
    audio_output: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>',
    assistant_prefill: '<path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    computer_use: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
  };

  function capIcon(cap) {
    var p = SVG_PATHS[cap];
    if (!p) return '';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="model-cap-icon" aria-hidden="true">' + p + '</svg>';
  }

  /* 类型图标（lucide 线性，与能力图标同风格） */
  var TYPE_SVG = {
    text_generation: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    deep_thinking: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>',
    text_understanding: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
    vision_understanding: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    image_generation: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.5-3.5L9 20"/>',
    video_generation: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    speech_recognition: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/>',
    speech_synthesis: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
    music_generation: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    text_embedding: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    multimodal_embedding: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
    text_rerank: '<line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4"/><path d="M4 10h2"/><path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/>',
    omni: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/>',
    realtime_omni: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    realtime_speech_recognition: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/>',
    realtime_speech_translation: '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    realtime_speech_synthesis: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
    safety_detection: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>'
  };

  function typeIcon(tp) {
    var p = TYPE_SVG[tp];
    if (!p) return '';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="model-cap-icon" aria-hidden="true">' + p + '</svg>';
  }

  function logoHtml(vendor, small) {
    return '<span class="model-logo' + (small ? ' model-logo-sm' : '') + '" data-letter="' + esc(vendor.charAt(0).toUpperCase()) + '" aria-hidden="true">' +
      '<img src="model-icons/' + encodeURIComponent(vendor) + '.svg" alt="" loading="lazy" onerror="this.remove()" />' +
      '</span>';
  }

  var FILTER_CAPS = ['function_calling', 'vision', 'reasoning', 'structured_output', 'web_search', 'prompt_caching', 'open_weights', 'image_output', 'audio_input', 'video_input'];
  var CTX_OPTIONS = [{ key: 'any', min: 0 }, { key: 'c128', min: 128000 }, { key: 'c200', min: 200000 }, { key: 'c1m', min: 1000000 }];

  var DATA = null;
  var COUNTS = null;
  /* 与页面 script 标签同版本，避免版本升级后 JSON 命中旧缓存 */
  var ASSET_QUERY = (function () {
    var src = document.currentScript && document.currentScript.src;
    var idx = src ? src.indexOf('?') : -1;
    return idx === -1 ? '' : src.slice(idx);
  })();
  var state = { search: '', vendorSearch: '', types: {}, vendors: {}, caps: {}, ctx: 'any', hideDep: true, sort: 'newest', limit: PAGE_SIZE };

  function computeCounts() {
    var types = {};
    var vendors = {};
    var caps = {};
    DATA.models.forEach(function (m) {
      types[m.type] = (types[m.type] || 0) + 1;
      vendors[m.vendor] = (vendors[m.vendor] || 0) + 1;
      (m.caps || []).forEach(function (c) { caps[c] = (caps[c] || 0) + 1; });
    });
    var vendorOrder = Object.keys(vendors).sort(function (a, b) { return vendors[b] - vendors[a]; });
    COUNTS = { types: types, vendors: vendors, caps: caps, vendorOrder: vendorOrder };
  }

  function getLocale() {
    if (window.PigcodeI18n && typeof window.PigcodeI18n.getLocale === 'function') {
      return window.PigcodeI18n.getLocale();
    }
    return document.documentElement.lang === 'en' ? 'en-US' : 'zh-CN';
  }

  function labels() {
    return LABELS[getLocale()] || LABELS['zh-CN'];
  }

  function t(key, fallback) {
    if (window.PigcodeI18n && typeof window.PigcodeI18n.t === 'function') {
      var v = window.PigcodeI18n.t(key);
      if (v && v !== key) return v;
    }
    return fallback;
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function formatCtx(n) {
    if (!n) return '';
    if (n >= 1000000) return (n % 1000000 === 0 ? n / 1000000 : (n / 1000000).toFixed(1)) + 'M';
    if (n >= 1000) return Math.round(n / 1000) + 'K';
    return String(n);
  }

  function activeSet(obj) {
    return Object.keys(obj).filter(function (k) { return obj[k]; });
  }

  function dedupeById(models) {
    var positions = {};
    var result = [];
    models.forEach(function (m) {
      if (!m.id || positions[m.id] === undefined) {
        if (m.id) positions[m.id] = result.length;
        result.push(m);
      } else if (result[positions[m.id]].dep && !m.dep) {
        result[positions[m.id]] = m;
      }
    });
    return result;
  }

  function filtered() {
    if (!DATA) return [];
    var types = activeSet(state.types);
    var vendors = activeSet(state.vendors);
    var caps = activeSet(state.caps);
    var minCtx = 0;
    CTX_OPTIONS.forEach(function (o) { if (o.key === state.ctx) minCtx = o.min; });
    var q = state.search.trim().toLowerCase();
    var list = DATA.models.filter(function (m) {
      if (state.hideDep && m.dep) return false;
      if (types.length && types.indexOf(m.type) === -1) return false;
      if (vendors.length && vendors.indexOf(m.vendor) === -1) return false;
      if (minCtx && (!m.ctx || m.ctx < minCtx)) return false;
      var mcaps = m.caps || [];
      for (var i = 0; i < caps.length; i++) {
        if (mcaps.indexOf(caps[i]) === -1) return false;
      }
      if (q) {
        var hay = (m.name + ' ' + m.id + ' ' + m.slug + ' ' + (m.alias || []).join(' ')).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    list = dedupeById(list);
    if (state.sort === 'newest') {
      list = list.slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    } else if (state.sort === 'context') {
      list = list.slice().sort(function (a, b) { return (b.ctx || 0) - (a.ctx || 0); });
    } else if (state.sort === 'name') {
      list = list.slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    }
    return list;
  }

  function footHtml(m) {
    var cells = [];
    if (m.price) {
      var label = m.price.o ? t('models.card.official', '官方') : t('models.card.reference', '参考');
      var title = m.price.o ? '' : (m.price.p ? ' title="' + esc(t('models.card.priceSource', '价格来源') + ': ' + m.price.p) + '"' : '');
      if (m.price['in'] != null) cells.push('<span' + title + '>' + t('models.card.priceIn', 'In') + ' <strong>$' + esc(m.price['in']) + '</strong>/M</span>');
      if (m.price.out != null) cells.push('<span' + title + '>' + t('models.card.priceOut', 'Out') + ' <strong>$' + esc(m.price.out) + '</strong>/M</span>');
      if (cells.length) cells[0] = '<span class="model-foot-label">' + label + '</span>' + cells[0];
    }
    if (m.ctx) cells.push('<span>Ctx <strong>' + formatCtx(m.ctx) + '</strong></span>');
    if (!cells.length && !m.date) return '';
    return '<div class="model-card-foot">' +
      '<div class="model-foot-cells">' + cells.join('') + '</div>' +
      (m.date ? '<span class="model-foot-date">' + esc(m.date) + '</span>' : '') +
      '</div>';
  }

  function cardHtml(m) {
    var L = labels();
    var isZh = getLocale() === 'zh-CN';
    var intro = m.intro ? (isZh ? (m.intro.zh || m.intro.en) : (m.intro.en || m.intro.zh)) : '';
    var caps = (m.caps || []).slice(0, 4).map(function (c) {
      return '<span class="model-tag">' + capIcon(c) + esc(L.caps[c] || c.replace(/_/g, ' ')) + '</span>';
    }).join('');
    var extra = (m.caps || []).length > 4 ? '<span class="model-tag">+' + ((m.caps || []).length - 4) + '</span>' : '';
    var thinking = ((m.caps || []).indexOf('reasoning') !== -1 || m.type === 'deep_thinking')
      ? '<span class="model-thinking">' + capIcon('reasoning') + 'Thinking</span>'
      : '';
    return '<article class="pricing-card model-card rounded-xl p-5 flex flex-col">' +
      '<div class="model-card-head">' +
      logoHtml(m.vendor, false) +
      '<div class="min-w-0">' +
      '<h3 class="text-base font-semibold font-headline text-custom-ink dark:text-white break-words">' + esc(m.name) +
      (m.dep ? ' <span class="model-dep-badge">' + t('models.card.deprecated', '已弃用') + '</span>' : '') +
      '</h3>' +
      '<button type="button" class="model-id-chip mt-1" data-copy="' + esc(m.id) + '" aria-label="' + t('models.card.copy', '复制模型 ID') + ' ' + esc(m.id) + '">' +
      '<code>' + esc(m.id) + '</code>' +
      '<span class="material-symbols-outlined text-sm" data-copy-icon aria-hidden="true">content_copy</span>' +
      '</button>' +
      '<p class="model-vendor-line">' + esc(m.vendor) + thinking + '</p>' +
      '</div>' +
      '</div>' +
      (intro ? '<p class="mt-3 text-sm leading-6 text-custom-muted dark:text-slate-400 model-intro">' + esc(intro) + '</p>' : '') +
      '<div class="mt-auto pt-3 flex flex-wrap items-center gap-1.5">' +
      '<span class="model-type-badge">' + esc(L.types[m.type] || m.type) + '</span>' + caps + extra +
      '</div>' +
      footHtml(m) +
      '</article>';
  }

  function optionHtml(kind, value, label, count, checked, iconHtml, showCheck) {
    var bare = showCheck === false;
    var inputClass = bare
      ? 'sr-only'
      : 'rounded border-custom-line dark:border-white/20 text-custom-gold focus:ring-custom-gold/40';
    return '<label class="model-filter-option' + (bare ? ' is-bare' : '') + '">' +
      '<input type="checkbox" data-filter="' + kind + '" value="' + esc(value) + '"' + (checked ? ' checked' : '') +
      ' class="' + inputClass + '" />' +
      (iconHtml || '') +
      '<span>' + esc(label) + '</span><em>' + count + '</em></label>';
  }

  function renderVendors() {
    var vendorBox = document.getElementById('filter-vendors');
    if (!vendorBox || !COUNTS) return;
    var vq = state.vendorSearch.trim().toLowerCase();
    /* 已勾选的厂商始终置顶展示，避免搜索过滤后勾选项不可见 */
    var checked = COUNTS.vendorOrder.filter(function (v) { return state.vendors[v]; });
    var rest = COUNTS.vendorOrder.filter(function (v) {
      if (state.vendors[v]) return false;
      return !vq || v.toLowerCase().indexOf(vq) !== -1;
    });
    var list = checked.concat(rest);
    vendorBox.innerHTML = list.map(function (v) {
      return optionHtml('vendor', v, v, COUNTS.vendors[v], state.vendors[v], logoHtml(v, true));
    }).join('') || '<p class="px-2 py-1 text-xs text-custom-muted dark:text-slate-500">' + t('models.filters.noVendor', '没有匹配的厂商') + '</p>';
  }

  function renderFilters() {
    if (!COUNTS) return;
    var L = labels();

    var typeBox = document.getElementById('filter-types');
    if (typeBox) {
      typeBox.innerHTML = TYPE_GROUPS.map(function (g) {
        var rows = g.types.filter(function (tp) { return COUNTS.types[tp]; }).map(function (tp) {
          return optionHtml('type', tp, L.types[tp] || tp, COUNTS.types[tp], state.types[tp], typeIcon(tp), false);
        }).join('');
        if (!rows) return '';
        return '<p class="model-filter-subhead">' + esc(L.groups[g.key]) + '</p>' + rows;
      }).join('');
    }

    renderVendors();

    var capBox = document.getElementById('filter-caps');
    if (capBox) {
      capBox.innerHTML = FILTER_CAPS.map(function (c) {
        return optionHtml('cap', c, L.caps[c] || c, COUNTS.caps[c] || 0, state.caps[c], capIcon(c));
      }).join('');
    }

    var ctxBox = document.getElementById('filter-ctx');
    if (ctxBox) {
      ctxBox.innerHTML = CTX_OPTIONS.map(function (o) {
        return '<label class="model-filter-option">' +
          '<input type="radio" name="ctx-filter" data-filter="ctx" value="' + o.key + '"' + (state.ctx === o.key ? ' checked' : '') +
          ' class="border-custom-line dark:border-white/20 text-custom-gold focus:ring-custom-gold/40" />' +
          '<span>' + esc(L.ctx[o.key]) + '</span></label>';
      }).join('');
    }
  }

  function renderCards(appendFrom) {
    var list = filtered();
    var count = document.getElementById('model-count');
    var empty = document.getElementById('model-empty');
    var more = document.getElementById('model-more');
    if (count) {
      count.textContent = t('models.toolbar.count', '{n} 个模型').replace('{n}', list.length.toLocaleString());
    }
    if (appendFrom) {
      grid.insertAdjacentHTML('beforeend', list.slice(appendFrom, state.limit).map(cardHtml).join(''));
    } else {
      grid.innerHTML = list.slice(0, state.limit).map(cardHtml).join('');
    }
    if (empty) empty.classList.toggle('hidden', list.length > 0);
    if (more) more.classList.toggle('hidden', list.length <= state.limit);
  }

  function renderStats() {
    if (!DATA || !COUNTS) return;
    var el;
    if ((el = document.getElementById('stat-models'))) el.textContent = DATA.models.length.toLocaleString();
    if ((el = document.getElementById('stat-vendors'))) el.textContent = COUNTS.vendorOrder.length;
    if ((el = document.getElementById('stat-types'))) el.textContent = Object.keys(COUNTS.types).length;
    if ((el = document.getElementById('data-updated'))) {
      el.textContent = t('models.updated', '数据更新于') + ' ' + String(DATA.refreshed_at || '').slice(0, 10);
    }
  }

  function resetLimitAndRender() {
    state.limit = PAGE_SIZE;
    renderCards();
  }

  function bind() {
    var search = document.getElementById('model-search');
    if (search) {
      search.addEventListener('input', function () {
        state.search = search.value;
        resetLimitAndRender();
      });
    }
    var vendorSearch = document.getElementById('vendor-search');
    if (vendorSearch) {
      vendorSearch.addEventListener('input', function () {
        state.vendorSearch = vendorSearch.value;
        renderVendors();
      });
    }
    var sort = document.getElementById('model-sort');
    if (sort) {
      sort.addEventListener('change', function () {
        state.sort = sort.value;
        resetLimitAndRender();
      });
    }
    var dep = document.getElementById('filter-dep');
    if (dep) {
      dep.addEventListener('change', function () {
        state.hideDep = dep.checked;
        resetLimitAndRender();
      });
    }
    var more = document.getElementById('model-more');
    if (more) {
      more.addEventListener('click', function () {
        var prev = state.limit;
        state.limit += PAGE_SIZE;
        renderCards(prev);
      });
    }
    document.addEventListener('change', function (e) {
      var input = e.target;
      if (!input || !input.matches || !input.matches('input[data-filter]')) return;
      var kind = input.getAttribute('data-filter');
      if (kind === 'type') state.types[input.value] = input.checked;
      else if (kind === 'vendor') state.vendors[input.value] = input.checked;
      else if (kind === 'cap') state.caps[input.value] = input.checked;
      else if (kind === 'ctx') state.ctx = input.value;
      resetLimitAndRender();
    });
    var reset = document.getElementById('filter-reset');
    if (reset) {
      reset.addEventListener('click', function () {
        state.search = '';
        state.vendorSearch = '';
        state.types = {};
        state.vendors = {};
        state.caps = {};
        state.ctx = 'any';
        state.hideDep = true;
        state.sort = 'newest';
        state.limit = PAGE_SIZE;
        if (search) search.value = '';
        if (vendorSearch) vendorSearch.value = '';
        if (dep) dep.checked = true;
        var sortEl = document.getElementById('model-sort');
        if (sortEl) sortEl.value = 'newest';
        renderFilters();
        renderCards();
      });
    }
    // 复制模型 ID 由 shared.js 的 [data-copy] 全局委托处理
    // 桌面端筛选栏始终展开，移动端恢复折叠
    var details = document.getElementById('model-filters');
    if (details && window.matchMedia) {
      var mq = window.matchMedia('(min-width: 1024px)');
      var syncDetails = function () { details.open = mq.matches; };
      syncDetails();
      if (mq.addEventListener) mq.addEventListener('change', syncDetails);
    }
  }

  function renderAll() {
    renderStats();
    renderFilters();
    renderCards();
  }

  bind();
  fetch('models-data.json' + ASSET_QUERY)
    .then(function (res) { return res.json(); })
    .then(function (json) {
      DATA = json;
      computeCounts();
      renderAll();
    })
    .catch(function () {
      grid.innerHTML = '<p class="text-sm text-custom-muted dark:text-slate-400">' + t('models.loadError', '目录数据加载失败，请刷新重试。') + '</p>';
    });
  document.addEventListener('pigcoder:locale-changed', function () {
    if (DATA) renderAll();
  });
})();
