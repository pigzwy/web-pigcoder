(function () {
  // 识别当前页面
  var path = window.location.pathname;
  var page = '';
  if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/pages')) page = 'index';
  else if (path.includes('docs.html')) page = 'docs';
  else if (path.includes('pricing.html')) page = 'pricing';

  // ========== Header ==========
  var headerEl = document.getElementById('site-header');
  if (headerEl) {
    var navItems = [
      { href: 'index.html', label: '首页', key: 'index' },
      { href: 'docs.html', label: '文档', key: 'docs' },
      { href: 'pricing.html', label: '价格', key: 'pricing' }
    ];
    var navHtml = navItems.map(function (item) {
      if (item.key === page) {
        return '<a class="text-custom-navy dark:text-white border-b-2 border-custom-gold pb-1 font-medium" href="' + item.href + '">' + item.label + '</a>';
      }
      return '<a class="text-on-surface-variant dark:text-gray-400 font-medium hover:text-custom-gold transition-colors" href="' + item.href + '">' + item.label + '</a>';
    }).join('\n        ');

    headerEl.innerHTML =
      '<header class="w-full sticky top-0 z-50 bg-white/80 dark:bg-[#0D1B2A]/90 backdrop-blur-xl shadow-sm dark:shadow-none dark:border-b dark:border-white/10 transition-colors duration-300">' +
      '<nav class="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">' +
        '<div class="flex items-center gap-2">' +
          '<img src="logo.jpg" alt="Pigcoder" class="w-8 h-8 rounded-full object-cover"/>' +
          '<span class="text-[#1B3A6B] dark:text-white" style="font-weight:700;font-size:1.1rem;letter-spacing:-0.01em;">pigcoder</span>' +
        '</div>' +
        '<div class="hidden md:flex items-center gap-8">' +
          navHtml +
        '</div>' +
        '<div class="flex items-center gap-4">' +
          '<span class="material-symbols-outlined text-custom-navy dark:text-white cursor-pointer hover:text-custom-gold transition-colors">language</span>' +
          '<span id="theme-toggle" class="material-symbols-outlined text-custom-navy dark:text-white cursor-pointer hover:text-custom-gold transition-colors">dark_mode</span>' +
          '<a href="https://sub2.pigcoder.com/login" class="bg-custom-navy text-white px-6 py-2 rounded font-semibold active:scale-95 transition-all">控制台</a>' +
        '</div>' +
      '</nav>' +
      '</header>';
  }

  // ========== Footer ==========
  var footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML =
      '<footer class="w-full border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1628] py-12">' +
      '<div class="max-w-7xl mx-auto px-6">' +
        '<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">' +
          '<div class="col-span-2 md:col-span-1">' +
            '<div class="flex items-center gap-2 mb-6">' +
              '<img src="logo.jpg" alt="Pigcoder" class="w-8 h-8 rounded-full object-cover"/>' +
              '<span class="text-[#1B3A6B] dark:text-white" style="font-weight:700;font-size:1.1rem;letter-spacing:-0.01em;">pigcoder</span>' +
            '</div>' +
            '<p class="text-on-surface-variant dark:text-gray-400 text-sm mb-6">稳定、高速、安全的 AI 模型中转枢纽，为全球开发者赋能。</p>' +
            '<div class="flex gap-4">' +
              '<span class="material-symbols-outlined text-custom-navy dark:text-white cursor-pointer hover:text-custom-gold transition-colors">hub</span>' +
              '<span class="material-symbols-outlined text-custom-navy dark:text-white cursor-pointer hover:text-custom-gold transition-colors">terminal</span>' +
              '<span class="material-symbols-outlined text-custom-navy dark:text-white cursor-pointer hover:text-custom-gold transition-colors">mail</span>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-bold text-custom-navy dark:text-white mb-6">产品与服务</h4>' +
            '<ul class="space-y-4">' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="index.html">产品介绍</a></li>' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="#">模型列表</a></li>' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="pricing.html">价格体系</a></li>' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="#">企业版</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-bold text-custom-navy dark:text-white mb-6">技术支持</h4>' +
            '<ul class="space-y-4">' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="docs.html">开发者文档</a></li>' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="#">API 参考</a></li>' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="#">状态监控</a></li>' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="#">联系我们</a></li>' +
            '</ul>' +
          '</div>' +
          '<div>' +
            '<h4 class="font-bold text-custom-navy dark:text-white mb-6">关于我们</h4>' +
            '<ul class="space-y-4">' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="#">隐私政策</a></li>' +
              '<li><a class="text-on-surface-variant dark:text-gray-400 hover:text-custom-navy text-sm transition-colors" href="#">服务条款</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">' +
          '<p class="text-on-surface-variant dark:text-gray-500 text-sm">&copy; 2024 Pigcoder Tech. All rights reserved.</p>' +
        '</div>' +
      '</div>' +
      '</footer>';
  }
})();
