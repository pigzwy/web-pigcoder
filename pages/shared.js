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
})();
