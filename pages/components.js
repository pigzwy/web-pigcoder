(function () {
  // 识别当前页面
  var path = window.location.pathname;
  var page = '';
  if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/pages')) page = 'index';
  else if (path.includes('docs.html')) page = 'docs';
  else if (path.includes('pricing.html')) page = 'pricing';
  else if (path.includes('models.html')) page = 'models';

  var activeNavClass = 'rounded-full px-4 py-2 text-sm font-semibold text-custom-navy dark:text-white bg-slate-100 dark:bg-white/10';
  var inactiveNavClass = 'rounded-full px-4 py-2 text-sm font-medium text-custom-muted dark:text-slate-300 hover:text-custom-navy hover:bg-slate-100 dark:hover:text-white dark:hover:bg-white/10 transition-colors';
  var templateCache = {};
  var ASSET_VERSION = '20260811-domain-migration';

  function withAssetVersion(path) {
    if (!path || path.indexOf('data:') === 0 || path.indexOf('blob:') === 0) {
      return path;
    }

    return path + (path.indexOf('?') === -1 ? '?v=' : '&v=') + ASSET_VERSION;
  }

  function markActiveNav(root) {
    root.querySelectorAll('[data-nav-key]').forEach(function (link) {
      var activeClass = link.dataset.navActiveClass || activeNavClass;
      var inactiveClass = link.dataset.navInactiveClass || inactiveNavClass;
      if (link.getAttribute('data-nav-key') === page) {
        link.className = activeClass;
      } else {
        link.className = inactiveClass;
      }
    });
  }

  function bindMobileNav(root) {
    var toggle = root.querySelector('#mobile-nav-toggle');
    var panel = root.querySelector('#mobile-nav-panel');
    var icon = root.querySelector('#mobile-nav-toggle-icon');

    if (!toggle || !panel || toggle.dataset.bound === 'true') {
      return;
    }

    function getHeaderLabel(key, fallback) {
      if (window.PigcodeI18n && typeof window.PigcodeI18n.t === 'function') {
        return window.PigcodeI18n.t(key);
      }
      return fallback;
    }

    function setOpen(open) {
      panel.classList.toggle('hidden', !open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var label = open
        ? getHeaderLabel('common.header.closeMenu', '关闭导航菜单')
        : getHeaderLabel('common.header.openMenu', '打开导航菜单');
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
      if (icon) {
        icon.textContent = open ? 'close' : 'menu';
      }
    }

    toggle.dataset.bound = 'true';
    setOpen(false);

    toggle.addEventListener('click', function () {
      setOpen(panel.classList.contains('hidden'));
    });

    panel.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });

    document.addEventListener('click', function (event) {
      if (!root.contains(event.target)) {
        setOpen(false);
      }
    });

    document.addEventListener('pigcoder:locale-changed', function () {
      setOpen(!panel.classList.contains('hidden'));
    });
  }

  function fetchTemplate(partialPath) {
    if (templateCache[partialPath]) {
      return Promise.resolve(templateCache[partialPath]);
    }

    return fetch(withAssetVersion(partialPath))
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Failed to load partial: ' + partialPath);
        }
        return response.text();
      })
      .then(function (html) {
        templateCache[partialPath] = html;
        return html;
      });
  }

  function renderTemplate(template, data) {
    return template.replace(/\{\{(\w+)\}\}/g, function (_, key) {
      return data[key] || '';
    });
  }

  function loadIntoElement(el, partialPath, options) {
    var settings = options || {};
    var fallbackHtml = settings.fallbackHtml;
    var data = settings.data || {};
    var useLoadingState = settings.useLoadingState === true;

    if (useLoadingState) {
      el.classList.add('partial-loading');
      el.setAttribute('aria-busy', 'true');
    }

    fetchTemplate(partialPath)
      .then(function (template) {
        el.innerHTML = renderTemplate(template, data);
        if (settings.afterLoad) settings.afterLoad(el);
        document.dispatchEvent(new CustomEvent('pigcoder:partial-loaded', {
          detail: {
            root: el,
            partialPath: partialPath
          }
        }));
      })
      .catch(function (error) {
        console.error(error);
        if (typeof fallbackHtml === 'string') {
          el.innerHTML = fallbackHtml;
        }
      })
      .finally(function () {
        if (useLoadingState) {
          el.classList.remove('partial-loading');
          el.removeAttribute('aria-busy');
        }
      });
  }

  function loadPartial(targetId, partialPath, afterLoad) {
    var el = document.getElementById(targetId);
    if (!el) return;

    var fallbackHtml = '<div class="mx-auto max-w-7xl px-6 py-3 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg">组件加载失败，请刷新页面后重试。</div>';
    loadIntoElement(el, partialPath, {
      fallbackHtml: fallbackHtml,
      afterLoad: afterLoad,
      useLoadingState: true
    });
  }

  function hydrateInlinePartials(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-partial]').forEach(function (host) {
      if (host.dataset.partialHydrated === 'true') {
        return;
      }

      var fallbackHtml = host.innerHTML;
      var data = {};

      Object.keys(host.dataset).forEach(function (key) {
        if (key !== 'partial' && key !== 'partialHydrated') {
          data[key] = host.dataset[key];
        }
      });

      loadIntoElement(host, host.dataset.partial, {
        fallbackHtml: fallbackHtml,
        data: data,
        afterLoad: function () {
          host.dataset.partialHydrated = 'true';
        }
      });
    });
  }

  window.PigcodePartials = {
    hydrateInlinePartials: hydrateInlinePartials,
    hydrateWithin: hydrateInlinePartials
  };

  loadPartial('site-header', 'partials/header.html', function (headerRoot) {
    markActiveNav(headerRoot);
    bindMobileNav(headerRoot);
    // 顶部透明、滚动后浮出毛玻璃底（配合 common.css 的 .is-scrolled 规则）
    var host = document.getElementById('site-header');
    if (host) {
      var syncHeaderSurface = function () {
        host.classList.toggle('is-scrolled', window.scrollY > 8);
      };
      window.addEventListener('scroll', syncHeaderSurface, { passive: true });
      syncHeaderSurface();
    }
    document.dispatchEvent(new CustomEvent('pigcoder:header-ready'));
  });

  loadPartial('site-footer', 'partials/footer.html', function () {
    document.dispatchEvent(new CustomEvent('pigcoder:footer-ready'));
  });
  hydrateInlinePartials();
})();
