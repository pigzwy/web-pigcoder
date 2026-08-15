(function () {
  var grid = document.getElementById('pricing-card-grid');
  if (!grid) return;

  var catalogs = {
    'zh-CN': [
      {
        category: 'Claude',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Claude Max',
        ratio: '1:1.5',
        rate: '0.67$/元',
        description: 'Claude 高配渠道，适合长上下文与复杂代码任务',
        models: ['claude-opus-4-8', 'claude-sonnet-4-6', 'claude-haiku-4-5'],
        perks: ['支持高级 thinking', '200k 上下文', '支持 1M 上下文', '支持 WebSearch', '仅支持 Claude Code CLI'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Claude',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'CC-反重力逆向',
        ratio: '1:0.6',
        rate: '1.67$/元',
        description: 'Claude 逆向渠道，倍率与能力均衡',
        models: ['claude-opus-4-8', 'claude-sonnet-4-6', 'claude-haiku-4-5'],
        perks: ['支持 thinking', '200k 上下文', '支持 WebSearch'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Claude',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Kiro',
        ratio: '1:0.5',
        rate: '2.00$/元',
        description: 'Sonnet / Haiku 渠道，适合日常代码代理',
        models: ['claude-sonnet-4-6', 'claude-haiku-4-5'],
        perks: ['支持内置 thinking', '支持 WebSearch', '200k 上下文', 'OpenClaw 首选'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Codex',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Codex (GPT FREE)',
        ratio: '1:0.1',
        rate: '10.00$/元',
        description: 'Codex 免费级渠道，倍率最低，适合轻量任务',
        models: ['gpt-5.5', 'gpt-5.4'],
        perks: ['xhigh 等全部支持'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Codex',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Codex (GPT PLUS)',
        ratio: '1:0.15',
        rate: '6.67$/元',
        description: 'Codex Plus 级渠道，适合高频开发调用',
        models: ['gpt-5.5', 'gpt-5.4'],
        perks: ['xhigh 等全部支持'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Codex',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Codex (GPT PRO)',
        ratio: '1:0.3',
        rate: '3.33$/元',
        description: 'Codex Pro 级渠道，覆盖最新 Codex 模型',
        models: ['gpt-5.5', 'gpt-5.4'],
        perks: ['xhigh 等全部支持'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Gemini',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Gemini 逆向',
        ratio: '1:0.45',
        rate: '2.22$/元',
        description: 'Gemini 渠道，覆盖多模态与图片生成能力',
        models: ['gemini-3-pro-preview', 'gemini-3-flash-preview', 'gemini-2.5-flash', 'gemini-2.5-pro'],
        perks: ['支持 thinking', '支持 WebSearch'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      }
    ],
    'en-US': [
      {
        category: 'Claude',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Claude Max',
        ratio: '1:1.5',
        rate: '$0.67 / CNY',
        description: 'Claude high-capability channel for long-context coding tasks',
        models: ['claude-opus-4-8', 'claude-sonnet-4-6', 'claude-haiku-4-5'],
        perks: ['Advanced thinking', '200k context', '1M context', 'WebSearch support', 'Claude Code CLI only'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Claude',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'CC Anti-Gravity',
        ratio: '1:0.6',
        rate: '$1.67 / CNY',
        description: 'Claude reverse channel with balanced ratio and capabilities',
        models: ['claude-opus-4-8', 'claude-sonnet-4-6', 'claude-haiku-4-5'],
        perks: ['Thinking support', '200k context', 'WebSearch support'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Claude',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Kiro',
        ratio: '1:0.5',
        rate: '$2.00 / CNY',
        description: 'Sonnet / Haiku channel for everyday coding agents',
        models: ['claude-sonnet-4-6', 'claude-haiku-4-5'],
        perks: ['Built-in thinking', 'WebSearch support', '200k context', 'Great for OpenClaw'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Codex',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Codex (GPT FREE)',
        ratio: '1:0.1',
        rate: '$10.00 / CNY',
        description: 'Codex free-tier channel with the lowest ratio for lightweight tasks',
        models: ['gpt-5.5', 'gpt-5.4'],
        perks: ['All xhigh tiers supported'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Codex',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Codex (GPT PLUS)',
        ratio: '1:0.15',
        rate: '$6.67 / CNY',
        description: 'Codex Plus channel for frequent developer calls',
        models: ['gpt-5.5', 'gpt-5.4'],
        perks: ['All xhigh tiers supported'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Codex',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Codex (GPT PRO)',
        ratio: '1:0.3',
        rate: '$3.33 / CNY',
        description: 'Codex Pro channel with latest Codex model coverage',
        models: ['gpt-5.5', 'gpt-5.4'],
        perks: ['All xhigh tiers supported'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      },
      {
        category: 'Gemini',
        categoryClass: 'px-2.5 py-1 bg-custom-wash dark:bg-white/5 text-custom-navy dark:text-slate-200 text-xs font-semibold rounded-full',
        title: 'Gemini Reverse',
        ratio: '1:0.45',
        rate: '$2.22 / CNY',
        description: 'Gemini channel with multimodal and image-generation capabilities',
        models: ['gemini-3-pro-preview', 'gemini-3-flash-preview', 'gemini-2.5-flash', 'gemini-2.5-pro'],
        perks: ['Thinking support', 'WebSearch support'],
        perkClass: 'text-green-700 dark:text-green-400 text-xs font-semibold'
      }
    ]
  };

  function getLocale() {
    if (window.PigcodeI18n && typeof window.PigcodeI18n.getLocale === 'function') {
      return window.PigcodeI18n.getLocale();
    }
    return 'zh-CN';
  }

  function getCards() {
    var locale = getLocale();
    return catalogs[locale] || catalogs['zh-CN'];
  }

  /* 模型 ID 统一走 .model-chip（等宽药丸），与首页"常用模型"一致 */
  function renderModel(model) {
    return '<span class="model-chip">' + model + '</span>';
  }

  /* 能力标签统一走 .model-tag 中性药丸——绿色文字清单退役（绿仅语义） */
  function renderPerk(perk) {
    return '<span class="model-tag">' + perk + '</span>';
  }

  function getLabels() {
    return window.PigcodeI18n ? {
      ratio: window.PigcodeI18n.t('pricing.card.ratio'),
      models: window.PigcodeI18n.t('pricing.card.models'),
      capabilities: window.PigcodeI18n.t('pricing.card.capabilities'),
      action: window.PigcodeI18n.t('common.cta.console')
    } : {
      ratio: '倍率',
      models: '模型',
      capabilities: '能力',
      action: '立即前往控制台'
    };
  }

  function renderCard(card, labels) {
    var modelsHtml = card.models.map(function (model) {
      return renderModel(model);
    }).join('');

    var perksHtml = card.perks.map(function (perk) {
      return renderPerk(perk);
    }).join('');

    return '<div class="pricing-card channel-card rounded-2xl p-6 flex flex-col">' +
      '<div class="channel-card-head mb-4">' +
        '<h3 class="min-w-0 truncate text-custom-ink dark:text-white font-semibold text-base">' + card.title + '</h3>' +
        '<div class="channel-ratio">' +
          '<span class="channel-ratio-label">' + labels.ratio + '</span>' +
          '<strong>' + card.ratio + '</strong>' +
          '<span>' + card.rate + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="text-custom-muted dark:text-slate-400 text-sm mb-4 leading-6">' + card.description + '</p>' +
      '<div class="mb-4">' +
        '<span class="channel-label">' + labels.models + '</span>' +
        '<div class="mt-2 flex flex-wrap gap-1.5">' + modelsHtml + '</div>' +
      '</div>' +
      '<div class="mb-5 flex-grow">' +
        '<span class="channel-label">' + labels.capabilities + '</span>' +
        '<div class="mt-2 flex flex-wrap gap-2">' + perksHtml + '</div>' +
      '</div>' +
      '<div data-partial="partials/recharge-button.html" data-label="' + labels.action + '" data-label-i18n="common.cta.console">' +
        '<a href="https://pigcode.ai/login" target="_top" class="btn-ghost w-full px-5 py-2.5 text-sm border border-custom-line dark:border-white/10">' + labels.action + '</a>' +
      '</div>' +
    '</div>';
  }

  // 按 Provider 分组渲染：分组标题 + 组内网格，替代 7 卡平铺
  function render() {
    var labels = getLabels();
    var cards = getCards();
    var order = [];
    var groups = {};

    cards.forEach(function (card) {
      if (!groups[card.category]) {
        groups[card.category] = [];
        order.push(card.category);
      }
      groups[card.category].push(card);
    });

    grid.innerHTML = order.map(function (category) {
      var cardsHtml = groups[category].map(function (card) {
        return renderCard(card, labels);
      }).join('');
      return '<section>' +
        '<h3 class="mb-4 flex items-center gap-3 text-lg font-semibold font-headline text-custom-ink dark:text-white">' +
          category +
          '<span class="h-px flex-1 bg-custom-line dark:bg-white/10" aria-hidden="true"></span>' +
        '</h3>' +
        '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">' + cardsHtml + '</div>' +
      '</section>';
    }).join('');

    if (window.PigcodePartials && typeof window.PigcodePartials.hydrateWithin === 'function') {
      window.PigcodePartials.hydrateWithin(grid);
    }

    animateCards(Array.prototype.slice.call(grid.querySelectorAll('.pricing-card')));
  }

  // 滚动进场：渲染完成后为价格卡挂淡入动画
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
  document.addEventListener('pigcoder:locale-changed', render);
})();
