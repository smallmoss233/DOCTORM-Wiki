// ============================================================
// DOCTOR M Wiki
// ============================================================

const WIKI_ROOT = 'content/';

let wikiData = null;
let renderer = null;

// ---------- 初始化 ----------
document.addEventListener('DOMContentLoaded', async () => {
    renderer = new marked.Marked({ breaks: true, gfm: true });

    try {
        const res = await fetch(WIKI_ROOT + 'index.json');
        if (!res.ok) throw new Error('无法加载内容清单');
        wikiData = await res.json();

        renderNav();
        window.addEventListener('hashchange', loadFromHash);
        loadFromHash();
    } catch (e) {
        console.error(e);
        document.getElementById('wiki-content').innerHTML =
            `<div class="wiki-error">Wiki 加载失败：${e.message}</div>`;
    }
});

// ---------- 渲染左侧导航 ----------
function renderNav() {
    const nav = document.getElementById('wiki-nav');

    nav.innerHTML = wikiData.categories.map(cat => `
        <div class="wiki-cat">
            <div class="wiki-cat-title">
                <span class="wiki-cat-icon">${cat.icon || '◆'}</span>
                <span>${cat.title}</span>
            </div>
            <div class="wiki-cat-pages">
                ${cat.pages.length === 0
                    ? '<div class="wiki-empty">暂无</div>'
                    : cat.pages.map(p => `
                        <a class="wiki-page-link"
                           href="#${cat.id}/${p.id}"
                           data-page-id="${p.id}">
                            ${p.title}
                        </a>
                    `).join('')
                }
            </div>
        </div>
    `).join('');
}

// ---------- 加载页面 ----------
async function loadFromHash() {
    const hash = window.location.hash.slice(1);
    const contentEl = document.getElementById('wiki-content');

    // 每次切换页面时，先清掉 changelog 专用 class
    contentEl.classList.remove('wiki-changelog');

    if (!hash) {
        await showWelcome(contentEl);
        highlightNav(null);
        return;
    }

    const [catId, pageId] = hash.split('/');
    const cat = wikiData.categories.find(c => c.id === catId);
    if (!cat) return showError(contentEl, '分类不存在');

    // 更新日志：从 Modrinth 拉取
    if (pageId === 'changelog') {
        highlightNav(pageId);
        document.title = '更新日志 | MOD WIKI';
        await renderModrinthChangelog(contentEl);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const page = cat.pages.find(p => p.id === pageId);
    if (!page) return showError(contentEl, '页面不存在');

    highlightNav(pageId);

    contentEl.innerHTML = '<div class="wiki-loading">加载中…</div>';
    try {
        const res = await fetch(WIKI_ROOT + 'pages/' + page.file);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const md = await res.text();

        contentEl.innerHTML = renderer.parse(md);
        addAnchors(contentEl);
        buildToc(contentEl);   // ★ 生成 TOC
        document.title = `${page.title} | MOD WIKI`;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
        showError(contentEl, `页面加载失败：${e.message}`);
    }
}

// ---------- 高亮左侧导航 ----------
function highlightNav(pageId) {
    document.querySelectorAll('.wiki-page-link').forEach(el => {
        el.classList.toggle('active', el.dataset.pageId === pageId);
    });
}

// ---------- 加标题锚点 ----------
function addAnchors(container) {
    container.querySelectorAll('h2, h3').forEach(h => {
        if (h.classList.contains('version-title')) return;

        const id = h.textContent.trim()
            .toLowerCase()
            .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
            .replace(/^-|-$/g, '');
        if (!id) return;
        h.id = id;

        const a = document.createElement('a');
        a.className = 'heading-anchor';
        a.href = '#' + window.location.hash.slice(1).split('/')[0] + '/' + id;
        a.textContent = '#';
        h.prepend(a);
    });
}

// ---------- 默认首页 ----------
async function showWelcome(el) {
    el.innerHTML = '<div class="wiki-loading">加载中…</div>';
    try {
        const res = await fetch(WIKI_ROOT + 'pages/intro-overview.md');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const md = await res.text();

        el.innerHTML = renderer.parse(md);
        addAnchors(el);
        buildToc(el);   // ★ 生成 TOC
        document.title = '模组简介 | MOD WIKI';
        highlightNav('overview');
    } catch (e) {
        el.innerHTML = `<div class="wiki-error">首页加载失败：${e.message}</div>`;
    }
}

function showError(el, msg) {
    el.innerHTML = `<div class="wiki-error">${msg}</div>`;
}

// ============================================================
// 右侧目录 (TOC)
// ============================================================
let tocScrollListener = null;

function buildToc(container) {
    const tocNav = document.getElementById('wiki-toc-nav');
    if (!tocNav) return;

    // 清理旧监听
    if (tocScrollListener) {
        window.removeEventListener('scroll', tocScrollListener);
        tocScrollListener = null;
    }

    // 收集 h2/h3（跳过版本标题）
    const headings = [...container.querySelectorAll('h2, h3')]
        .filter(h => h.id && !h.classList.contains('version-title'));

    if (headings.length === 0) {
        tocNav.innerHTML = '<div class="wiki-toc-empty">无目录</div>';
        return;
    }

    // 生成目录链接
    tocNav.innerHTML = '';
    headings.forEach(h => {
        const link = document.createElement('a');
        link.className = 'wiki-toc-link';
        if (h.tagName === 'H3') link.classList.add('toc-level-3');
        link.href = 'javascript:void(0)';
        link.dataset.targetId = h.id;
        link.textContent = h.textContent.trim().replace(/^#\s*/, '');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            h.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        tocNav.appendChild(link);
    });

    // 滚动高亮
    tocScrollListener = () => {
        const scrollTop = window.scrollY;
        const offset = 120;

        let currentId = null;
        for (const h of headings) {
            if (h.offsetTop - offset <= scrollTop) {
                currentId = h.id;
            } else {
                break;
            }
        }

        tocNav.querySelectorAll('.wiki-toc-link').forEach(link => {
            link.classList.toggle('active', link.dataset.targetId === currentId);
        });
    };

    window.addEventListener('scroll', tocScrollListener, { passive: true });
    tocScrollListener();
}

// ============================================================
// 从 Modrinth 拉取更新日志
// ============================================================
const MODRINTH_CACHE_KEY = 'doctor_m_changelog_cache';
const MODRINTH_CACHE_TTL = 30 * 60 * 1000; // 30 分钟

async function renderModrinthChangelog(container) {
    container.classList.add('wiki-changelog');
    container.innerHTML = '<div class="wiki-loading">正在拉取更新日志…</div>';

    // 1. 检查缓存
    try {
        const cached = JSON.parse(localStorage.getItem(MODRINTH_CACHE_KEY) || 'null');
        if (cached && (Date.now() - cached.time < MODRINTH_CACHE_TTL)) {
            container.innerHTML = renderer.parse(cached.markdown);
            addAnchors(container);
            buildToc(container);   // ★
            return;
        }
    } catch (e) {}

    // 2. 从 Modrinth API 获取数据
    try {
        const res = await fetch(
            'https://api.modrinth.com/v2/project/doctorm/version?include_changelog=true',
            { headers: { 'Accept': 'application/json' } }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const versions = await res.json();

        // 3. 按发布时间从新到旧排序
        versions.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));

        // 4. 拼接所有版本的 changelog
        let markdown = `# 更新日志\n\n`;
        markdown += `> 数据来自 [Modrinth](https://modrinth.com/mod/doctorm/changelog)，自动同步。\n\n`;

        versions.forEach(v => {
            if (!v.changelog) return;
            const date = v.date_published
                ? new Date(v.date_published).toLocaleDateString('zh-CN')
                : '未知日期';
            markdown += `<h2 class="version-title">${v.version_number} — ${date}</h2>\n\n`;
            markdown += v.changelog.trim() + '\n\n<div class="version-divider"></div>\n\n';
        });

        // 5. 渲染并缓存
        container.innerHTML = renderer.parse(markdown);
        addAnchors(container);
        buildToc(container);   // ★

        try {
            localStorage.setItem(MODRINTH_CACHE_KEY, JSON.stringify({
                time: Date.now(),
                markdown
            }));
        } catch (e) {}

    } catch (e) {
        console.error('更新日志拉取失败:', e);
        container.innerHTML = `<div class="wiki-error">更新日志加载失败：${e.message}</div>`;
    }
}