(function() {
  const html = document.documentElement;
  let toggle = null;

  function applyTheme(dark) {
    if (dark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }

    if (toggle) {
      toggle.textContent = dark ? 'light_mode' : 'dark_mode';
    }
  }

  function bindThemeToggle() {
    toggle = document.getElementById('theme-toggle');
    if (!toggle || toggle.dataset.bound === 'true') {
      return;
    }

    toggle.dataset.bound = 'true';
    applyTheme(localStorage.getItem('pigcoder-theme') === 'dark');

    toggle.addEventListener('click', function() {
      var isDark = html.classList.contains('dark');
      applyTheme(!isDark);
      localStorage.setItem('pigcoder-theme', isDark ? 'light' : 'dark');
    });
  }

  applyTheme(localStorage.getItem('pigcoder-theme') === 'dark');
  bindThemeToggle();
  document.addEventListener('pigcoder:header-ready', bindThemeToggle);
})();
