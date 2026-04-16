(function () {
  // 识别当前页面
  var path = window.location.pathname;
  var page = '';
  if (path.includes('index.html') || path.endsWith('/') || path.endsWith('/pages')) page = 'index';
  else if (path.includes('docs.html')) page = 'docs';
  else if (path.includes('pricing.html')) page = 'pricing';

  var activeNavClass = 'text-custom-navy dark:text-white border-b-2 border-custom-gold pb-1 font-medium';
  var inactiveNavClass = 'text-on-surface-variant dark:text-gray-400 font-medium hover:text-custom-gold transition-colors';
  var templateCache = {};

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

    function setOpen(open) {
      panel.classList.toggle('hidden', !open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
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
  }

  function fetchTemplate(partialPath) {
    if (templateCache[partialPath]) {
      return Promise.resolve(templateCache[partialPath]);
    }

    return fetch(partialPath)
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

  window.PigcoderPartials = {
    hydrateInlinePartials: hydrateInlinePartials,
    hydrateWithin: hydrateInlinePartials
  };

  loadPartial('site-header', 'partials/header.html', function (headerRoot) {
    markActiveNav(headerRoot);
    bindMobileNav(headerRoot);
    document.dispatchEvent(new CustomEvent('pigcoder:header-ready'));
  });

  loadPartial('site-footer', 'partials/footer.html', function () {
    document.dispatchEvent(new CustomEvent('pigcoder:footer-ready'));
  });
  hydrateInlinePartials();
})();
