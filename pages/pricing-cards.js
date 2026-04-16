(function () {
  var grid = document.getElementById('pricing-card-grid');
  if (!grid) return;

  var cards = [
    {
      category: 'Claude',
      categoryClass: 'px-2.5 py-0.5 bg-custom-green/10 text-custom-green text-xs font-bold rounded-full',
      title: 'Claude Max',
      ratio: '1:1.5',
      rate: '0.67$/元',
      description: '官方Max20x账号，效果最好',
      dotClass: 'bg-custom-green',
      models: ['claude-opus-4-6(1M)', 'claude-opus-4-5', 'claude-sonnet-4-6', 'claude-sonnet-4-5', 'claude-haiku-4-5'],
      perks: ['支持高级thinking', '200k上下文', '支持1M上下文', '支持WebSearch', '仅支持claude code cli'],
      perkClass: 'text-custom-green text-xs font-medium'
    },
    {
      category: 'Claude',
      categoryClass: 'px-2.5 py-0.5 bg-custom-green/10 text-custom-green text-xs font-bold rounded-full',
      title: 'CC-反重力逆向',
      ratio: '1:0.6',
      rate: '1.67$/元',
      description: '性能与价格均衡，稳定性较好',
      dotClass: 'bg-custom-green',
      models: ['claude-opus-4-6(1M)', 'claude-sonnet-4-6(1M)', 'claude-opus-4-5', 'claude-haiku-4-5'],
      perks: ['支持thinking', '200k上下文', '支持WebSearch'],
      perkClass: 'text-custom-green text-xs font-medium'
    },
    {
      category: 'Claude',
      categoryClass: 'px-2.5 py-0.5 bg-custom-green/10 text-custom-green text-xs font-bold rounded-full',
      title: 'Kiro标准版',
      ratio: '1:0.55',
      rate: '1.82$/元',
      description: '只能用sonnet和haiku，稳定性强',
      dotClass: 'bg-custom-green',
      models: ['claude-sonnet-4-6', 'claude-sonnet-4-5', 'claude-haiku-4-5'],
      perks: ['支持内置thinking', '支持WebSearch', '200k上下文', 'OpenClaw首选'],
      perkClass: 'text-custom-green text-xs font-medium'
    },
    {
      category: 'Codex',
      categoryClass: 'px-2.5 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full',
      title: 'Codex(GPT FREE)',
      ratio: '1:0.1',
      rate: '10.00$/元',
      description: '免费级别接入，倍率最低',
      dotClass: 'bg-blue-500',
      models: ['gpt-5.4', 'gpt-5.3-codex', 'gpt-5.3等'],
      perks: ['xhigh等全部支持'],
      perkClass: 'text-custom-green dark:text-green-400 text-xs font-medium'
    },
    {
      category: 'Codex',
      categoryClass: 'px-2.5 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full',
      title: 'Codex(GPT PLUS)',
      ratio: '1:0.15',
      rate: '6.67$/元',
      description: 'Plus 会员级别，性价比极高',
      dotClass: 'bg-blue-500',
      models: ['gpt-5.4', 'gpt-5.3-codex', 'gpt-5.3等'],
      perks: ['xhigh等全部支持'],
      perkClass: 'text-custom-green dark:text-green-400 text-xs font-medium'
    },
    {
      category: 'Codex',
      categoryClass: 'px-2.5 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full',
      title: 'Codex(GPT PRO)',
      ratio: '1:0.3',
      rate: '1.67$/元',
      description: '支持codex所有模型，包含gpt-5.3-codex，稳定性强',
      dotClass: 'bg-blue-500',
      models: ['gpt-5.4', 'gpt-5.3-codex', 'gpt-5.3等'],
      perks: ['xhigh等全部支持'],
      perkClass: 'text-custom-green text-xs font-medium'
    },
    {
      category: 'Gemini',
      categoryClass: 'px-2.5 py-0.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full',
      title: 'Gemini逆向',
      ratio: '1:0.45',
      rate: '2.22$/元',
      description: '支持图片生成模型',
      dotClass: 'bg-blue-500',
      models: ['gemini-3-pro-preview', 'gemini-3-flash-preview', 'gemini-2.5-flash', 'gemini-2.5-pro'],
      perks: ['支持thinking', '支持WebSearch'],
      perkClass: 'text-custom-green text-xs font-medium'
    }
  ];

  function renderModel(model, dotClass) {
    return '<span class="inline-flex items-center gap-1 px-2 py-0.5 bg-white/30 dark:bg-white/5 text-on-surface-variant dark:text-gray-300 text-[11px] rounded-full backdrop-blur-sm">' +
      '<span class="w-1.5 h-1.5 rounded-full ' + dotClass + '"></span>' + model +
    '</span>';
  }

  function renderPerk(perk, perkClass) {
    return '<span class="' + perkClass + '">' + perk + '</span>';
  }

  function renderCard(card) {
    var modelsHtml = card.models.map(function (model) {
      return renderModel(model, card.dotClass);
    }).join('');

    var perksHtml = card.perks.map(function (perk) {
      return renderPerk(perk, card.perkClass);
    }).join('');

    return '<div class="feature-card rounded-xl p-6 flex flex-col">' +
      '<div class="flex items-center gap-3 mb-4">' +
        '<span class="' + card.categoryClass + '">' + card.category + '</span>' +
        '<span class="text-custom-navy dark:text-white font-bold text-base">' + card.title + '</span>' +
      '</div>' +
      '<div class="mb-4">' +
        '<span class="text-custom-gold text-3xl font-bold font-body">' + card.ratio + '</span>' +
        '<span class="text-on-surface-variant dark:text-gray-500 text-sm ml-2">' + card.rate + '</span>' +
      '</div>' +
      '<p class="text-on-surface-variant dark:text-gray-400 text-sm mb-4">' + card.description + '</p>' +
      '<div class="flex flex-wrap gap-1.5 mb-4">' + modelsHtml + '</div>' +
      '<div class="flex flex-wrap gap-2 mb-6 flex-grow">' + perksHtml + '</div>' +
      '<div data-partial="partials/recharge-button.html">' +
        '<button onclick="openRechargeModal()" class="btn-shine w-full py-3 bg-custom-green text-white font-semibold rounded-lg hover:brightness-110 active:scale-[0.98] transition-all">立即充值</button>' +
      '</div>' +
    '</div>';
  }

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

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  grid.innerHTML = cards.map(renderCard).join('');

  if (window.PigcoderPartials && typeof window.PigcoderPartials.hydrateWithin === 'function') {
    window.PigcoderPartials.hydrateWithin(grid);
  }

  animateCards(Array.prototype.slice.call(grid.querySelectorAll('.feature-card')));
})();
