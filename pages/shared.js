(function() {
  const html = document.documentElement;
  let toggle = null;
  let toggleIcon = null;

  function getStoredTheme() {
    try {
      return localStorage.getItem('pigcoder-theme');
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem('pigcoder-theme', theme);
    } catch (error) {
      // 第三方 iframe 中本地存储可能不可用。
    }
  }

  function isDarkPreferred() {
    var storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme === 'dark';
    }

    return true;
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
      var label = window.PigcodeI18n ? window.PigcodeI18n.t(labelKey) : (dark ? '切换到浅色模式' : '切换到深色模式');
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
      storeTheme(isDark ? 'light' : 'dark');
    });
  }

  applyTheme(isDarkPreferred());
  bindThemeToggle();
  document.addEventListener('pigcoder:header-ready', bindThemeToggle);
  document.addEventListener('pigcoder:locale-changed', function () {
    applyTheme(html.classList.contains('dark'));
  });

  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var copied = false;
    try { copied = document.execCommand('copy'); } catch (error) {}
    document.body.removeChild(ta);
    return copied;
  }

  function copyText(text) {
    var fallback = function () {
      return legacyCopy(text) ? Promise.resolve() : Promise.reject(new Error('Copy failed'));
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(fallback);
    }
    return fallback();
  }

  // 一键复制：全站统一的 [data-copy] 委托，动态渲染的按钮（如模型卡）无需单独绑定
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-copy]') : null;
    if (!el) return;
    var text = el.getAttribute('data-copy');
    var icon = el.querySelector('[data-copy-icon]');
    var i18n = window.PigcodeI18n;
    var originalLabel = el.getAttribute('aria-label');
    var done = function () {
      if (icon) { icon.textContent = 'check'; }
      el.classList.add('is-copied');
      if (i18n) { el.setAttribute('aria-label', i18n.t('common.copied')); }
      setTimeout(function () {
        if (icon) { icon.textContent = 'content_copy'; }
        el.classList.remove('is-copied');
        if (originalLabel) { el.setAttribute('aria-label', originalLabel); }
      }, 1400);
    };
    var failed = function () {
      if (icon) { icon.textContent = 'error'; }
      el.classList.add('is-copy-failed');
      var label = i18n ? i18n.t('common.copyFailed') : '复制失败，请手动复制';
      el.setAttribute('aria-label', label);
      setTimeout(function () {
        if (icon) { icon.textContent = 'content_copy'; }
        el.classList.remove('is-copy-failed');
        if (originalLabel) { el.setAttribute('aria-label', originalLabel); }
      }, 1800);
    };
    copyText(text).then(done).catch(failed);
  });

  // 鼠标跟随柔光 + 星轨视差：只作用于 hero（卡片级光斑已随改版退役）。
  // 柔光：--spot-x/--spot-y 供 hero-modern::after 径向渐变定位；
  // 视差：--par-x/--par-y 写入 .hero-constellation，元素按 --d 深度系数跟随（参考 cch）。
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var activeConstellation = null;
  document.addEventListener('pointermove', function (e) {
    var hero = e.target && e.target.closest ? e.target.closest('.hero-modern') : null;
    if (!hero) {
      // 离开 hero：星轨缓动归位
      if (activeConstellation) {
        activeConstellation.style.setProperty('--par-x', '0px');
        activeConstellation.style.setProperty('--par-y', '0px');
        activeConstellation = null;
      }
      return;
    }
    var rect = hero.getBoundingClientRect();
    hero.style.setProperty('--spot-x', (e.clientX - rect.left) + 'px');
    hero.style.setProperty('--spot-y', (e.clientY - rect.top) + 'px');
    if (reduceMotion) return;
    var cons = hero.querySelector('.hero-constellation');
    if (cons) {
      var nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      var ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      cons.style.setProperty('--par-x', (nx * 12).toFixed(1) + 'px');
      cons.style.setProperty('--par-y', (ny * 9).toFixed(1) + 'px');
      activeConstellation = cons;
    }
  }, { passive: true });
})();
