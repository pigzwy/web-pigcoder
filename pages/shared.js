(function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function applyTheme(dark) {
    if (dark) {
      html.classList.add('dark');
      html.classList.remove('light');
      if (toggle) toggle.textContent = 'light_mode';
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
      if (toggle) toggle.textContent = 'dark_mode';
    }
  }

  var saved = localStorage.getItem('pigcoder-theme');
  applyTheme(saved === 'dark');

  if (toggle) {
    toggle.addEventListener('click', function() {
      var isDark = html.classList.contains('dark');
      applyTheme(!isDark);
      localStorage.setItem('pigcoder-theme', isDark ? 'light' : 'dark');
    });
  }
})();
