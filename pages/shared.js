(function() {
  const html = document.documentElement;
  let toggle = null;

  function isDarkPreferred() {
    var storedTheme = localStorage.getItem('pigcoder-theme');
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
})();
