/* 阻塞首屏：在 CSS 生效前对齐 localStorage 的主题/语言，避免浅色中文闪一下再跳到深色英文 */
(function () {
  var html = document.documentElement;
  try {
    var theme = localStorage.getItem('pigcoder-theme');
    var dark = theme ? theme === 'dark' : true;
    html.classList.toggle('dark', dark);
    html.classList.toggle('light', !dark);

    var versionKey = 'pigcoder-locale-default-version';
    var version = '2026-06-09-en-default';
    var loc = localStorage.getItem('pigcoder-locale');
    if (localStorage.getItem(versionKey) !== version || !loc) {
      loc = 'en-US';
    } else if (String(loc).toLowerCase().indexOf('en') === 0) {
      loc = 'en-US';
    } else {
      loc = 'zh-CN';
    }
    html.lang = loc;
  } catch (error) {
    html.classList.add('dark');
    html.classList.remove('light');
    html.lang = 'en-US';
  }
})();
