(function() {
  const html = document.documentElement;
  let toggle = null;
  let toggleIcon = null;

  function isDarkPreferred() {
    var storedTheme = localStorage.getItem('pigcoder-theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }

    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  }

  function applyTheme(dark) {
    if (dark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }

    if (toggleIcon) {
      toggleIcon.textContent = dark ? 'light_mode' : 'dark_mode';
    }

    if (toggle) {
      var labelKey = dark ? 'common.header.switchToLight' : 'common.header.switchToDark';
      var label = window.PigcoderI18n ? window.PigcoderI18n.t(labelKey) : (dark ? '切换到浅色模式' : '切换到深色模式');
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    }
  }

  function bindThemeToggle() {
    toggle = document.getElementById('theme-toggle');
    toggleIcon = document.getElementById('theme-toggle-icon');
    if (!toggle || toggle.dataset.bound === 'true') {
      return;
    }

    toggle.dataset.bound = 'true';
    applyTheme(isDarkPreferred());

    toggle.addEventListener('click', function() {
      var isDark = html.classList.contains('dark');
      applyTheme(!isDark);
      localStorage.setItem('pigcoder-theme', isDark ? 'light' : 'dark');
    });
  }

  applyTheme(isDarkPreferred());
  bindThemeToggle();
  document.addEventListener('pigcoder:header-ready', bindThemeToggle);
  document.addEventListener('pigcoder:locale-changed', function () {
    applyTheme(html.classList.contains('dark'));
  });

  // 一键复制：全站统一的 [data-copy] 委托，动态渲染的按钮（如模型卡）无需单独绑定
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-copy]') : null;
    if (!el) return;
    var text = el.getAttribute('data-copy');
    var icon = el.querySelector('[data-copy-icon]');
    var i18n = window.PigcoderI18n;
    var done = function () {
      if (icon) { icon.textContent = 'check'; }
      el.classList.add('is-copied');
      if (i18n) { el.setAttribute('aria-label', i18n.t('common.copied')); }
      setTimeout(function () {
        if (icon) { icon.textContent = 'content_copy'; }
        el.classList.remove('is-copied');
        if (i18n) { el.setAttribute('aria-label', i18n.t('common.copy')); }
      }, 1400);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(function () {});
    } else {
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (err) {}
      document.body.removeChild(ta);
    }
  });

  // 鼠标跟随高亮：把光标在卡片内的坐标写入 --spot-x/--spot-y，供 CSS 径向渐变定位。
  // 用事件委托，动态渲染的价格卡也能生效；触屏设备无 hover，样式自然不触发。
  var SPOT_SELECTOR = '.endpoint-chip, .channel-compare, .surface-card, .doc-metric-card, ' +
    '.pricing-card, .pricing-hero-row, .api-cta-panel, .diagram-card, ' +
    '.stat-item, .flow-step-item, .hero-terminal-card, .hero-modern';
  document.addEventListener('pointermove', function (e) {
    var card = e.target && e.target.closest ? e.target.closest(SPOT_SELECTOR) : null;
    if (!card) return;
    var rect = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
  }, { passive: true });
})();
