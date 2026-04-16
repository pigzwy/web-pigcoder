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
      if (link.getAttribute('data-nav-key') === page) {
        link.className = activeNavClass;
      } else {
        link.className = inactiveNavClass;
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
    document.dispatchEvent(new CustomEvent('pigcoder:header-ready'));
  });

  loadPartial('site-footer', 'partials/footer.html');
  hydrateInlinePartials();
})();
