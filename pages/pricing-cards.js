(function () {
  var grid = document.getElementById('pricing-card-grid');
  if (!grid) return;

  /* 平台元信息：分组标题图标（真实厂牌，来自 model-icons/） */
  var PLATFORM_META = {
    OpenAI: { icon: 'openai' },
    Anthropic: { icon: 'anthropic' },
    Gemini: { icon: 'google' },
    Grok: { icon: 'xai' }
  };
  var PLATFORM_ORDER = ['OpenAI', 'Anthropic', 'Grok', 'Gemini'];

  /* 平台级模型与能力：只在分组标题下展示一次，卡片保持精简 */
  var PLATFORM_DEFAULTS = {
    OpenAI: {
      models: ['gpt-5.5', 'gpt-5-codex', 'gpt-5.4'],
      perks: { 'zh-CN': ['xhigh 全推理档', '流式输出'], 'en-US': ['All xhigh tiers', 'Streaming'] }
    },
    Anthropic: {
      models: ['claude-opus-4-8', 'claude-sonnet-4-6', 'claude-haiku-4-5'],
      perks: { 'zh-CN': ['支持 thinking', '200k / 1M 上下文', '联网搜索'], 'en-US': ['Thinking support', '200k / 1M context', 'Web search'] }
    },
    Grok: {
      models: ['grok-4', 'grok-4-fast'],
      perks: { 'zh-CN': ['Pro / Heavy 双档', '推理模式'], 'en-US': ['Pro / Heavy tiers', 'Reasoning'] }
    },
    Gemini: {
      models: ['gemini-3-pro-preview', 'gemini-3-flash-preview', 'gemini-2.5-pro'],
      perks: { 'zh-CN': ['支持 thinking', '联网搜索', '图像生成'], 'en-US': ['Thinking support', 'Web search', 'Image generation'] }
    }
  };

  /* 静态快照：与 sub2api 控制台分组一致（实时接口不可达时的兜底展示） */
  var catalogs = {
    'zh-CN': [
      { platform: 'OpenAI', title: '专线 Codex | Plus / Team', ratio: '0.12x', billing: '标准（余额）', description: '专线接入，日常开发主力' },
      { platform: 'OpenAI', title: '专线 Codex | Pro', ratio: '0.2x', billing: '标准（余额）', description: '专线接入，覆盖最新 Codex 模型' },
      { platform: 'OpenAI', title: '企业 Codex | Plus / Team', ratio: '0.08x', billing: '标准（余额）', description: '企业渠道，全场最低倍率' },
      { platform: 'OpenAI', title: '企业 Codex | Pro', ratio: '0.15x', billing: '标准（余额）', description: '企业渠道，高频调用性价比之选' },
      { platform: 'OpenAI', title: '官渠 | Azure GPT', ratio: '2x', billing: '标准（余额）', description: 'Azure 官方渠道，企业级稳定性' },
      { platform: 'OpenAI', title: '官渠 | GPT 官 Key 直连', ratio: '3.5x', billing: '标准（余额）', description: 'OpenAI 官方 Key 直连' },
      { platform: 'Anthropic', title: '企业 CC-MAX | 限制客户端', ratio: '0.8x', billing: '标准（余额）', description: '仅限 Claude Code 客户端' },
      { platform: 'Anthropic', title: '企业 CC-MAX | 可外接', ratio: '1x', billing: '标准（余额）', description: '可外接任意客户端' },
      { platform: 'Anthropic', title: '官渠 | AWS Bedrock', ratio: '3x', billing: '标准（余额）', description: 'AWS Bedrock 官方渠道' },
      { platform: 'Anthropic', title: '官渠 | Anthropic 官 Key 直连', ratio: '4.5x', billing: '标准（余额）', description: 'Anthropic 官方 Key 直连' },
      { platform: 'Grok', title: '企业 Grok | Pro / Heavy', ratio: '0.35x', billing: '标准（余额）', description: 'Pro 与 Heavy 双档' },
      { platform: 'Gemini', title: '企业 | Gemini', ratio: '1x', billing: '标准（余额）', description: '多模态与图像生成' }
    ],
    'en-US': [
      { platform: 'OpenAI', title: 'Dedicated Codex | Plus / Team', ratio: '0.12x', billing: 'Standard (balance)', description: 'Dedicated line for everyday coding' },
      { platform: 'OpenAI', title: 'Dedicated Codex | Pro', ratio: '0.2x', billing: 'Standard (balance)', description: 'Dedicated line, latest Codex models' },
      { platform: 'OpenAI', title: 'Enterprise Codex | Plus / Team', ratio: '0.08x', billing: 'Standard (balance)', description: 'Enterprise channel, lowest ratio overall' },
      { platform: 'OpenAI', title: 'Enterprise Codex | Pro', ratio: '0.15x', billing: 'Standard (balance)', description: 'Enterprise channel, best value at volume' },
      { platform: 'OpenAI', title: 'Official | Azure GPT', ratio: '2x', billing: 'Standard (balance)', description: 'Official Azure channel, enterprise stability' },
      { platform: 'OpenAI', title: 'Official | GPT key direct', ratio: '3.5x', billing: 'Standard (balance)', description: 'Direct OpenAI official-key channel' },
      { platform: 'Anthropic', title: 'Enterprise CC-MAX | Restricted client', ratio: '0.8x', billing: 'Standard (balance)', description: 'Claude Code client only' },
      { platform: 'Anthropic', title: 'Enterprise CC-MAX | BYO client', ratio: '1x', billing: 'Standard (balance)', description: 'Works with any client' },
      { platform: 'Anthropic', title: 'Official | AWS Bedrock', ratio: '3x', billing: 'Standard (balance)', description: 'Official AWS Bedrock channel' },
      { platform: 'Anthropic', title: 'Official | Anthropic key direct', ratio: '4.5x', billing: 'Standard (balance)', description: 'Direct Anthropic official-key channel' },
      { platform: 'Grok', title: 'Enterprise Grok | Pro / Heavy', ratio: '0.35x', billing: 'Standard (balance)', description: 'Pro and Heavy tiers' },
      { platform: 'Gemini', title: 'Enterprise | Gemini', ratio: '1x', billing: 'Standard (balance)', description: 'Multimodal with image generation' }
    ]
  };

  /* 实时数据：生产环境与 sub2api 同域，运行时尝试拉取分组倍率；
     预览/跨域/接口变动时静默回退到上面的静态快照 */
  var LIVE_ENDPOINTS = ['/api/pricing', '/api/groups'];
  var liveGroups = null;

  function normalizePlatform(p) {
    var s = String(p || '').toLowerCase();
    if (s.indexOf('openai') !== -1 || s.indexOf('azure') !== -1 || s.indexOf('gpt') !== -1 || s.indexOf('codex') !== -1) return 'OpenAI';
    if (s.indexOf('anthropic') !== -1 || s.indexOf('claude') !== -1 || s.indexOf('cc-max') !== -1) return 'Anthropic';
    if (s.indexOf('grok') !== -1 || s.indexOf('xai') !== -1) return 'Grok';
    if (s.indexOf('gemini') !== -1 || s.indexOf('google') !== -1) return 'Gemini';
    return null;
  }

  function formatRatio(v) {
    var n = Number(v);
    if (!isFinite(n) || n <= 0) return null;
    return (n % 1 === 0 ? String(n) : String(parseFloat(n.toFixed(3)))) + 'x';
  }

  function ratioValue(r) {
    var n = parseFloat(String(r).replace(/x$/i, ''));
    return isFinite(n) ? n : Infinity;
  }

  function adaptLive(json) {
    var arr = null;
    if (Array.isArray(json)) arr = json;
    else if (json && Array.isArray(json.data)) arr = json.data;
    else if (json && Array.isArray(json.groups)) arr = json.groups;
    if (!arr || !arr.length) return null;
    var out = [];
    arr.forEach(function (item) {
      if (!item || typeof item !== 'object') return;
      var name = item.name || item['名称'] || item.group_name || item.display_name;
      var platform = normalizePlatform(item.platform || item['平台'] || item.channel_type || item.provider || name);
      var ratio = formatRatio(item.rate_multiplier != null ? item.rate_multiplier : (item.ratio != null ? item.ratio : (item['费率倍数'] != null ? item['费率倍数'] : item.group_ratio)));
      if (!name || !platform || !ratio) return;
      out.push({
        platform: platform,
        title: String(name),
        ratio: ratio,
        billing: item.billing_type || item['计费类型'] || null,
        description: item.description || item['描述'] || ''
      });
    });
    return out.length ? out : null;
  }

  function tryLive() {
    if (!window.fetch || !window.Promise) return Promise.resolve(null);
    var chain = Promise.resolve(null);
    LIVE_ENDPOINTS.forEach(function (ep) {
      chain = chain.then(function (found) {
        if (found) return found;
        return fetch(ep, { headers: { Accept: 'application/json' } })
          .then(function (res) {
            if (!res.ok) return null;
            var ct = res.headers.get('content-type') || '';
            if (ct.indexOf('json') === -1) return null;
            return res.json().then(adaptLive);
          })
          .catch(function () { return null; });
      });
    });
    return chain;
  }

  function getLocale() {
    if (window.PigcodeI18n && typeof window.PigcodeI18n.getLocale === 'function') {
      return window.PigcodeI18n.getLocale();
    }
    return 'zh-CN';
  }

  function isZh() {
    return getLocale() === 'zh-CN';
  }

  function getCards() {
    if (liveGroups) {
      return liveGroups.map(function (g) {
        return {
          platform: g.platform,
          title: g.title,
          ratio: g.ratio,
          billing: g.billing || (isZh() ? '标准（余额）' : 'Standard (balance)'),
          description: g.description || ''
        };
      });
    }
    return catalogs[getLocale()] || catalogs['zh-CN'];
  }

  function getLabels() {
    return {
      ratioNote: isZh() ? '相对官方价' : 'vs official',
      best: isZh() ? '最低倍率' : 'Best rate',
      live: isZh() ? '实时数据' : 'Live data',
      action: window.PigcodeI18n ? window.PigcodeI18n.t('common.cta.console') : '立即前往控制台'
    };
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function platformIcon(platform) {
    var meta = PLATFORM_META[platform];
    if (!meta) return '';
    return '<img src="model-icons/' + meta.icon + '.svg" alt="" loading="lazy" class="h-5 w-5 shrink-0" />';
  }

  /* 精简卡：名称 + 一句话 | 大号等宽倍率；最低倍率卡金色点亮 */
  function renderCard(card, labels, isBest) {
    return '<div class="pricing-card channel-card rounded-2xl p-5' + (isBest ? ' is-best' : '') + '">' +
      '<div class="flex items-start justify-between gap-4">' +
        '<div class="min-w-0">' +
          '<h3 class="text-[0.95rem] font-semibold leading-snug text-custom-ink dark:text-white">' + esc(card.title) + '</h3>' +
          (card.description ? '<p class="mt-1 text-[0.8rem] leading-5 text-custom-muted dark:text-slate-400">' + esc(card.description) + '</p>' : '') +
        '</div>' +
        '<div class="channel-ratio-slim shrink-0 text-right">' +
          '<strong>' + esc(card.ratio) + '</strong>' +
          '<span>' + esc(labels.ratioNote) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="mt-3 flex flex-wrap items-center gap-1.5">' +
        (card.billing ? '<span class="model-tag">' + esc(card.billing) + '</span>' : '') +
        (isBest ? '<span class="model-thinking">' + esc(labels.best) + '</span>' : '') +
      '</div>' +
    '</div>';
  }

  /* 平台分组：厂牌图标 + 平台名 + 该平台的模型/能力一次性展示，卡片只谈倍率 */
  function render() {
    var labels = getLabels();
    var cards = getCards();
    var groups = {};

    cards.forEach(function (card) {
      (groups[card.platform] = groups[card.platform] || []).push(card);
    });

    var order = PLATFORM_ORDER.filter(function (p) { return groups[p]; });
    Object.keys(groups).forEach(function (p) {
      if (order.indexOf(p) === -1) order.push(p);
    });

    grid.innerHTML = order.map(function (platform) {
      var defaults = PLATFORM_DEFAULTS[platform] || { models: [], perks: {} };
      var perks = defaults.perks[getLocale()] || defaults.perks['zh-CN'] || [];
      var best = Math.min.apply(null, groups[platform].map(function (c) { return ratioValue(c.ratio); }));
      var cardsHtml = groups[platform].map(function (card) {
        var isBest = groups[platform].length > 1 && ratioValue(card.ratio) === best;
        return renderCard(card, labels, isBest);
      }).join('');
      return '<section>' +
        '<h3 class="mb-2 flex items-center gap-2.5 text-lg font-semibold font-headline text-custom-ink dark:text-white">' +
          platformIcon(platform) +
          '<span>' + esc(platform) + '</span>' +
          (liveGroups ? '<span class="model-thinking">' + esc(labels.live) + '</span>' : '') +
          '<span class="h-px flex-1 bg-custom-line dark:bg-white/10" aria-hidden="true"></span>' +
        '</h3>' +
        '<div class="mb-5 flex flex-wrap items-center gap-1.5">' +
          defaults.models.map(function (m) { return '<span class="model-chip">' + esc(m) + '</span>'; }).join('') +
          '<span class="mx-1 h-3 w-px bg-custom-line dark:bg-white/15" aria-hidden="true"></span>' +
          perks.map(function (pk) { return '<span class="model-tag">' + esc(pk) + '</span>'; }).join('') +
        '</div>' +
        '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">' + cardsHtml + '</div>' +
      '</section>';
    }).join('') +
    '<div class="pt-2 text-center">' +
      '<a href="https://pigcode.ai/login" target="_top" class="btn-primary inline-flex px-8 py-3 text-sm" data-i18n="common.cta.console">' + esc(labels.action) + '</a>' +
    '</div>';

    animateCards(Array.prototype.slice.call(grid.querySelectorAll('.pricing-card')));
  }

  /* 滚动进场：渲染完成后为价格卡挂淡入动画 */
  function animateCards(elements) {
    elements.forEach(function (el) {
      el.classList.add('fade-up');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    function revealByPosition() {
      var vh = window.innerHeight;
      var allVisible = true;
      elements.forEach(function (el) {
        if (!el.classList.contains('visible')) {
          if (el.getBoundingClientRect().top < vh - 40) el.classList.add('visible');
          else allVisible = false;
        }
      });
      if (allVisible) window.removeEventListener('scroll', revealByPosition);
    }
    window.addEventListener('scroll', revealByPosition, { passive: true });
    revealByPosition();

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  render();
  tryLive().then(function (groups) {
    if (groups) {
      liveGroups = groups;
      render();
    }
  });
  document.addEventListener('pigcoder:locale-changed', render);
})();
