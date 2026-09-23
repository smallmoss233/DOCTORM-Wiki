// ============================================================
// DOCTOR M Wiki - 单文件多语言版
// ============================================================

const WIKI_ROOT = 'content/';
const LANGS = ['zh-CN', 'en'];
const LANG_LABELS = { 'zh-CN': '中文', 'en': 'EN' };
const DEFAULT_LANG = 'zh-CN';
const LANG_STORAGE_KEY = 'doctor_m_wiki_lang';

const UI_STRINGS = {
  'zh-CN': {
    siteTagline: '一款AIT扩展模组！',
    backToSite: '← 返回主站',
    tocTitle: '本页目录',
    menuOpen: '打开菜单',
    menuClose: '关闭菜单',
    loading: '加载中…',
    noToc: '无目录',
    noPages: '暂无',
    loadFailed: 'Wiki 加载失败：',
    pageLoadFailed: '页面加载失败：',
    homeLoadFailed: '首页加载失败：',
    catNotFound: '分类不存在',
    pageNotFound: '页面不存在',
    changelogTitle: '更新日志',
    changelogSource: '数据来自 [Modrinth](https://modrinth.com/mod/doctorm/changelog)，自动同步。',
    fetchingChangelog: '正在拉取更新日志…',
    changelogFailed: '更新日志加载失败：'
  },
  'en': {
    siteTagline: 'An AIT expansion mod!',
    backToSite: '← Back to home',
    tocTitle: 'On this page',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    loading: 'Loading…',
    noToc: 'No headings',
    noPages: 'None',
    loadFailed: 'Wiki load failed: ',
    pageLoadFailed: 'Page load failed: ',
    homeLoadFailed: 'Home load failed: ',
    catNotFound: 'Category not found',
    pageNotFound: 'Page not found',
    changelogTitle: 'Changelog',
    changelogSource: 'Data from [Modrinth](https://modrinth.com/mod/doctorm/changelog), auto-synced.',
    fetchingChangelog: 'Fetching changelog…',
    changelogFailed: 'Changelog load failed: '
  }
};

let currentLang = DEFAULT_LANG;
let wikiData = null;
let renderer = null;

// ---------- i18n 工具 ----------
function t(key) {
  return (UI_STRINGS[currentLang] && UI_STRINGS[currentLang][key])
      || UI_STRINGS[DEFAULT_LANG][key] || key;
}

// 从 { "zh-CN": "...", "en": "..." } 里挑当前语言（带两级回退）
function pickI18n(obj) {
  if (obj == null) return '';
  if (typeof obj === 'string') return obj;
  return obj[currentLang]
      ?? obj[DEFAULT_LANG]
      ?? Object.values(obj)[0]
      ?? '';
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
  document.documentElement.lang = currentLang;
}

// ---------- 语言检测 ----------
function detectLanguage() {
  const parts = window.location.hash.slice(1).split('/').filter(Boolean);
  if (parts.length && LANGS.includes(parts[0])) return parts[0];
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  const n = (navigator.language || '').toLowerCase();
  if (n.startsWith('en')) return 'en';
  if (n.startsWith('zh')) return 'zh-CN';
  return DEFAULT_LANG;
}

function getHashWithoutLang() {
  const parts = window.location.hash.slice(1).split('/').filter(Boolean);
  if (parts.length && LANGS.includes(parts[0])) parts.shift();
  return parts.join('/');
}

// ---------- 语言切换按钮 ----------
function renderLangSwitch() {
  const el = document.getElementById('wiki-lang-switch');
  if (!el) return;
  el.innerHTML = LANGS.map(lang => `
    <button class="wiki-lang-btn ${lang === currentLang ? 'active' : ''}"
            data-lang="${lang}">${LANG_LABELS[lang] || lang}</button>
  `).join('');
  el.querySelectorAll('.wiki-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
  });
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  const rest = getHashWithoutLang();
  localStorage.setItem(LANG_STORAGE_KEY, lang);
  window.location.hash = '#' + lang + (rest ? '/' + rest : '');
}

// ---------- 初始化 ----------
document.addEventListener('DOMContentLoaded', async () => {
  renderer = new marked.Marked({ breaks: true, gfm: true });
  currentLang = detectLanguage();

  const parts = window.location.hash.slice(1).split('/').filter(Boolean);
  if (!parts.length || !LANGS.includes(parts[0])) {
    const rest = parts.join('/');
    history.replaceState(null, '', '#' + currentLang + (rest ? '/' + rest : ''));
  }

  applyI18n();
  renderLangSwitch();

  try {
    await loadIndex();
    window.addEventListener('hashchange', loadFromHash);
    loadFromHash();
  } catch (e) {
    console.error(e);
  }
});

async function loadIndex() {
  const res = await fetch(WIKI_ROOT + 'index.json');
  if (!res.ok) throw new Error(t('loadFailed') + `HTTP ${res.status}`);
  wikiData = await res.json();
  renderNav();
}

// ---------- 导航 ----------
function renderNav() {
  const nav = document.getElementById('wiki-nav');
  nav.innerHTML = wikiData.categories.map(cat => `
    <div class="wiki-cat">
      <div class="wiki-cat-title">
        <span class="wiki-cat-icon">${cat.icon || '◆'}</span>
        <span>${pickI18n(cat.title)}</span>
      </div>
      <div class="wiki-cat-pages">
        ${cat.pages.length === 0
          ? `<div class="wiki-empty">${t('noPages')}</div>`
          : cat.pages.map(p => `
              <a class="wiki-page-link"
                 href="#${currentLang}/${cat.id}/${p.id}"
                 data-page-id="${p.id}">${pickI18n(p.title)}</a>
            `).join('')
        }
      </div>
    </div>
  `).join('');
}

function highlightNav(pageId) {
  document.querySelectorAll('.wiki-page-link').forEach(el => {
    el.classList.toggle('active', el.dataset.pageId === pageId);
  });
}

// ============================================================
// ★ 核心：解析带 <!-- lang:xx --> 标记的 md
// ============================================================
function parseLangSections(md) {
  const regex = /<!--\s*lang:([\w-]+)\s*-->/g;
  const parts = [];
  let lastIndex = 0;
  let lastLang = null;
  let match;

  while ((match = regex.exec(md)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ lang: lastLang, content: md.slice(lastIndex, match.index) });
    }
    lastLang = match[1];
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < md.length) {
    parts.push({ lang: lastLang, content: md.slice(lastIndex) });
  }
  return parts.filter(p => p.content && p.content.trim());
}

// 把 md 渲染成带语言分区的 DOM
function renderMultilangMd(md, container) {
  const parts = parseLangSections(md);

  // 没有语言标记 → 当作纯内容，直接渲染
  if (parts.length === 0 || parts.every(p => p.lang === null)) {
    container.innerHTML = renderer.parse(md);
    return;
  }

  container.innerHTML = '';
  parts.forEach(part => {
    const wrapper = document.createElement('div');
    if (part.lang) {
      wrapper.className = 'wiki-lang-section';
      wrapper.dataset.lang = part.lang;
    } else {
      wrapper.className = 'wiki-lang-section common';
    }
    wrapper.innerHTML = renderer.parse(part.content);
    container.appendChild(wrapper);
  });
}

// 加载后滚动到当前语言的小节
function scrollToCurrentLang(container) {
  // 默认语言停在顶部
  if (currentLang === DEFAULT_LANG) return;

  const target = container.querySelector(
    `.wiki-lang-section[data-lang="${currentLang}"]`
  );
  if (!target) return;

  requestAnimationFrame(() => {
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'auto' });
  });
}

// ---------- 加载页面 ----------
async function loadFromHash() {
  const parts = window.location.hash.slice(1).split('/').filter(Boolean);

  let lang = currentLang;
  if (parts.length && LANGS.includes(parts[0])) lang = parts.shift();
  if (lang !== currentLang) {
    currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    try { await loadIndex(); } catch (e) { return; }
    renderLangSwitch();
    applyI18n();
  }

  const contentEl = document.getElementById('wiki-content');
  contentEl.classList.remove('wiki-changelog');

  if (!parts.length) {
    await showWelcome(contentEl);
    highlightNav(null);
    return;
  }

  const [catId, pageId] = parts;
  const cat = wikiData.categories.find(c => c.id === catId);
  if (!cat) return showError(contentEl, t('catNotFound'));

  if (pageId === 'changelog') {
    highlightNav(pageId);
    document.title = `${t('changelogTitle')} | MOD WIKI`;
    await renderModrinthChangelog(contentEl);
    return;
  }

  const page = cat.pages.find(p => p.id === pageId);
  if (!page) return showError(contentEl, t('pageNotFound'));

  highlightNav(pageId);
  contentEl.innerHTML = `<div class="wiki-loading">${t('loading')}</div>`;

  try {
    const res = await fetch(`${WIKI_ROOT}pages/${page.file}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();

    renderMultilangMd(md, contentEl);
    addAnchors(contentEl);
    buildToc(contentEl);
    scrollToCurrentLang(contentEl);

    document.title = `${pickI18n(page.title)} | MOD WIKI`;
  } catch (e) {
    showError(contentEl, `${t('pageLoadFailed')}${e.message}`);
  }
}

// ---------- 锚点（只给当前语言 + 公共部分加） ----------
function addAnchors(container) {
  const sections = container.querySelectorAll('.wiki-lang-section');
  const targets = [];

  if (sections.length === 0) {
    container.querySelectorAll('h2, h3').forEach(h => targets.push(h));
  } else {
    sections.forEach(sec => {
      if (sec.classList.contains('common') || sec.dataset.lang === currentLang) {
        sec.querySelectorAll('h2, h3').forEach(h => targets.push(h));
      }
    });
  }

  targets.forEach(h => {
    if (h.classList.contains('version-title')) return;
    const id = h.textContent.trim()
      .toLowerCase()
      .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
      .replace(/^-|-$/g, '');
    if (!id) return;
    h.id = id;

    const a = document.createElement('a');
    a.className = 'heading-anchor';
    a.href = 'javascript:void(0)';
    a.textContent = '#';
    a.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    h.prepend(a);
  });
}

// ---------- 首页 ----------
async function showWelcome(el) {
  el.innerHTML = `<div class="wiki-loading">${t('loading')}</div>`;
  try {
    const res = await fetch(`${WIKI_ROOT}pages/intro-overview.md`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const md = await res.text();

    renderMultilangMd(md, el);
    addAnchors(el);
    buildToc(el);
    scrollToCurrentLang(el);

    document.title = 'MOD WIKI | DOCTOR M';
    highlightNav('overview');
  } catch (e) {
    el.innerHTML = `<div class="wiki-error">${t('homeLoadFailed')}${e.message}</div>`;
  }
}

function showError(el, msg) {
  el.innerHTML = `<div class="wiki-error">${msg}</div>`;
}

// ============================================================
// 右侧目录（只列当前语言 + 公共部分）
// ============================================================
let tocScrollListener = null;

function getVisibleHeadings(container) {
  const sections = container.querySelectorAll('.wiki-lang-section');
  const list = [];

  if (sections.length === 0) {
    container.querySelectorAll('h2, h3').forEach(h => list.push(h));
  } else {
    sections.forEach(sec => {
      if (sec.classList.contains('common') || sec.dataset.lang === currentLang) {
        sec.querySelectorAll('h2, h3').forEach(h => list.push(h));
      }
    });
  }

  return list.filter(h => h.id && !h.classList.contains('version-title'));
}

function buildToc(container) {
  const tocNav = document.getElementById('wiki-toc-nav');
  if (!tocNav) return;

  if (tocScrollListener) {
    window.removeEventListener('scroll', tocScrollListener);
    tocScrollListener = null;
  }

  const headings = getVisibleHeadings(container);

  if (headings.length === 0) {
    tocNav.innerHTML = `<div class="wiki-toc-empty">${t('noToc')}</div>`;
    return;
  }

  tocNav.innerHTML = '';
  headings.forEach(h => {
    const link = document.createElement('a');
    link.className = 'wiki-toc-link';
    if (h.tagName === 'H3') link.classList.add('toc-level-3');
    link.href = 'javascript:void(0)';
    link.dataset.targetId = h.id;
    link.textContent = h.textContent.trim().replace(/^#\s*/, '');
    link.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tocNav.appendChild(link);
  });

  tocScrollListener = () => {
    const scrollTop = window.scrollY;
    const offset = 120;
    let currentId = null;
    for (const h of headings) {
      if (h.offsetTop - offset <= scrollTop) currentId = h.id;
      else break;
    }
    tocNav.querySelectorAll('.wiki-toc-link').forEach(link => {
      link.classList.toggle('active', link.dataset.targetId === currentId);
    });
  };
  window.addEventListener('scroll', tocScrollListener, { passive: true });
  tocScrollListener();
}

// ============================================================
// Modrinth 更新日志
// ============================================================
const MODRINTH_CACHE_KEY = 'doctor_m_changelog_cache';
const MODRINTH_CACHE_TTL = 30 * 60 * 1000;

async function renderModrinthChangelog(container) {
  container.classList.add('wiki-changelog');
  container.innerHTML = `<div class="wiki-loading">${t('fetchingChangelog')}</div>`;

  try {
    const cached = JSON.parse(localStorage.getItem(MODRINTH_CACHE_KEY) || 'null');
    if (cached && cached.lang === currentLang
        && Date.now() - cached.time < MODRINTH_CACHE_TTL) {
      container.innerHTML = renderer.parse(cached.markdown);
      addAnchors(container);
      buildToc(container);
      return;
    }
  } catch (e) {}

  try {
    const res = await fetch(
      'https://api.modrinth.com/v2/project/doctorm/version?include_changelog=true',
      { headers: { 'Accept': 'application/json' } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const versions = await res.json();
    versions.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));

    let markdown = `# ${t('changelogTitle')}\n\n> ${t('changelogSource')}\n\n`;

    versions.forEach(v => {
      if (!v.changelog) return;
      const date = v.date_published
        ? new Date(v.date_published).toLocaleDateString(
            currentLang === 'en' ? 'en-US' : 'zh-CN')
        : '?';
      markdown += `<h2 class="version-title">${v.version_number} — ${date}</h2>\n\n`;
      markdown += v.changelog.trim() + '\n\n<div class="version-divider"></div>\n\n';
    });

    container.innerHTML = renderer.parse(markdown);
    addAnchors(container);
    buildToc(container);

    try {
      localStorage.setItem(MODRINTH_CACHE_KEY, JSON.stringify({
        time: Date.now(), lang: currentLang, markdown
      }));
    } catch (e) {}
  } catch (e) {
    console.error(e);
    container.innerHTML = `<div class="wiki-error">${t('changelogFailed')}${e.message}</div>`;
  }
}

// ============================================================
// 移动端抽屉（不变）
// ============================================================
(function () {
  const sidebar = document.getElementById('wiki-sidebar');
  const mask = document.getElementById('wiki-mobile-mask');
  const toggle = document.querySelector('.wiki-mobile-toggle');
  const closeBtn = document.querySelector('.wiki-sidebar-close');
  if (!sidebar) return;

  function openDrawer() {
    sidebar.classList.add('open');
    mask?.classList.add('show');
    document.body.classList.add('wiki-drawer-open');
  }
  function closeDrawer() {
    sidebar.classList.remove('open');
    mask?.classList.remove('show');
    document.body.classList.remove('wiki-drawer-open');
  }
  toggle?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  mask?.addEventListener('click', closeDrawer);
  document.getElementById('wiki-nav')?.addEventListener('click', e => {
    if (e.target.closest('.wiki-page-link')) closeDrawer();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) closeDrawer();
  });
})();