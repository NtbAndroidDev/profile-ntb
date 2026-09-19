/* ============================================================
   Links page. Content lives in ../data.js (window.NTB);
   this file only arranges and renders it.
============================================================= */
(() => {
'use strict';

const NTB = window.NTB;
const { profile, projects, esc, gh } = NTB;
const ROOT = '../';

/* ---------- 1. Copy ---------- */
const STRINGS = {
    en: {
        skip: 'Skip to work',
        location: 'Vietnam',
        bio: 'Mobile software engineer crafting native Android apps, quiet macOS utilities and on-device AI — with clean architecture and an eye for detail.',
        status: 'Open to Android & mobile roles',
        email: 'Email me',
        saveContact: 'Save contact',
        qr: 'Show QR code',
        share: 'Share this page',
        elsewhere: 'Elsewhere',
        portfolio: 'Portfolio',
        portfolioSub: 'Selected work, approach & build log',
        publicRepos: 'public repositories',
        linkedinSub: 'Experience & recommendations',
        coffee: 'Buy me a coffee',
        coffeeSub: 'Keeps the open-source tools going',
        copyEmail: 'Copy email address',
        atAGlance: 'At a glance',
        repos: 'Repositories',
        languages: 'Languages',
        stars: 'Stars earned',
        platforms: 'Platforms',
        archive: 'Archive · 2023',
        archiveTitle: 'Where it started — Flutter, Java & Kotlin',
        syncStatic: 'Snapshot of GitHub · Sep 2026',
        syncLive: 'Live from GitHub',
        scanTitle: 'Scan to connect',
        close: 'Close',
        website: 'Website',
        privacy: 'Privacy',
        source: 'Source',
        support: 'Support',
        jitpack: 'JitPack',
        dataset: 'Dataset',
        updated: 'Updated',
        copied: 'Email copied',
        linkCopied: 'Link copied',
        contactSaved: 'Contact card downloaded',
        copyFailed: 'Could not copy — long-press to select',
        qrFailed: 'QR code unavailable offline',
        newOnGitHub: 'Fresh on GitHub',
        newTitle: 'Just <em>pushed</em>',
        noDesc: 'No description yet.'
    },
    vi: {
        skip: 'Tới phần dự án',
        location: 'Việt Nam',
        bio: 'Kỹ sư phần mềm di động — xây dựng ứng dụng Android native, tiện ích macOS tinh gọn và AI chạy trên thiết bị, với kiến trúc sạch và sự chỉn chu trong từng chi tiết.',
        status: 'Sẵn sàng cho vị trí Android & Mobile',
        email: 'Gửi email',
        saveContact: 'Lưu danh bạ',
        qr: 'Hiện mã QR',
        share: 'Chia sẻ trang này',
        elsewhere: 'Kết nối',
        portfolio: 'Portfolio',
        portfolioSub: 'Dự án tiêu biểu, cách làm & nhật ký',
        publicRepos: 'repository công khai',
        linkedinSub: 'Kinh nghiệm & giới thiệu',
        coffee: 'Mời mình một ly cà phê',
        coffeeSub: 'Tiếp sức cho các công cụ mã nguồn mở',
        copyEmail: 'Sao chép email',
        atAGlance: 'Tổng quan',
        repos: 'Repository',
        languages: 'Ngôn ngữ',
        stars: 'Lượt sao',
        platforms: 'Nền tảng',
        archive: 'Lưu trữ · 2023',
        archiveTitle: 'Nơi bắt đầu — Flutter, Java & Kotlin',
        syncStatic: 'Ảnh chụp GitHub · 09/2026',
        syncLive: 'Đồng bộ trực tiếp từ GitHub',
        scanTitle: 'Quét để kết nối',
        close: 'Đóng',
        website: 'Website',
        privacy: 'Quyền riêng tư',
        source: 'Mã nguồn',
        support: 'Ủng hộ',
        jitpack: 'JitPack',
        dataset: 'Dataset',
        updated: 'Cập nhật',
        copied: 'Đã sao chép email',
        linkCopied: 'Đã sao chép liên kết',
        contactSaved: 'Đã tải danh thiếp',
        copyFailed: 'Không sao chép được — hãy nhấn giữ để chọn',
        qrFailed: 'Không tải được mã QR khi offline',
        newOnGitHub: 'Mới trên GitHub',
        newTitle: 'Vừa <em>đẩy lên</em>',
        noDesc: 'Chưa có mô tả.'
    }
};

/* ---------- 2. Arrangement ---------- */
const GROUPS = [
    {
        id: 'android',
        label: { en: 'Android', vi: 'Android' },
        title: { en: 'Android apps, <em>private by design</em>', vi: 'Ứng dụng Android, <em>riêng tư từ thiết kế</em>' },
        layout: 'cols-2',
        items: ['moodroll', 'packmoji']
    },
    {
        id: 'macos',
        label: { en: 'macOS · Swift 6', vi: 'macOS · Swift 6' },
        title: { en: 'Native tools for the <em>menu bar</em>', vi: 'Công cụ native cho <em>thanh menu</em>' },
        layout: 'cols-2',
        items: ['mectrics', 'devicebar', 'lingo'],
        wide: 'mectrics'
    },
    {
        id: 'oss',
        label: { en: 'Open source', vi: 'Mã nguồn mở' },
        title: { en: 'Libraries &amp; <em>research</em>', vi: 'Thư viện &amp; <em>nghiên cứu</em>' },
        layout: 'rows',
        items: ['picker', 'uitvic', 'saramin']
    }
];

const KNOWN = new Set([
    'profile-ntb',
    ...Object.values(projects).map((p) => p.repo),
    ...NTB.archive.map((a) => a.repo)
]);

let REPOS = NTB.snapshot;
let lang = NTB.initialLang();

/* ---------- 3. Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const t = (key) => STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
const pick = (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.en : obj);
const repoInfo = (name) => REPOS.find((r) => r.name === name);

const ICON = {
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
    cup: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>'
};
const SUBLINK_ICON = { privacy: ICON.shield, source: ICON.code, support: ICON.cup };

/* ---------- 4. Render ---------- */
function iconHtml(item) {
    if (item.icon) {
        return `<span class="app-icon${item.mac ? ' is-mac' : ''}"><img src="${ROOT}${item.icon}" alt="" width="56" height="56" loading="lazy" decoding="async"></span>`;
    }
    return `<span class="app-icon mono" style="--tile:${item.tile}" aria-hidden="true">${esc(item.mono)}</span>`;
}

function metaHtml(item, layout) {
    const info = repoInfo(item.repo);
    if (!info) return '';
    const parts = [];
    if (info.lang && layout === 'rows') {
        parts.push(`<span class="meta"><span class="lang-dot" style="background:${NTB.langColor(info.lang)}"></span>${esc(info.lang)}</span>`);
    }
    if (info.stars > 0) parts.push(`<span class="meta">${ICON.star}${info.stars}</span>`);
    if (info.pushed) parts.push(`<span class="meta meta-faint" title="${esc(new Date(info.pushed).toLocaleDateString(lang))}">${esc(t('updated'))} ${esc(NTB.relTime(info.pushed, lang))}</span>`);
    return parts.join('');
}

function cardHtml(item, layout, wide) {
    const href = item.href || gh(item.repo);
    const primaryLabel = item.href ? t('website') : 'GitHub';

    if (layout === 'rows') {
        return `
        <article class="card">
            ${iconHtml(item)}
            <div class="card-heading">
                <h3 class="card-title"><a href="${href}" target="_blank" rel="noopener">${esc(item.name)}</a></h3>
                <p class="card-desc">${esc(pick(item.summary))}</p>
            </div>
            <div class="card-side">${metaHtml(item, layout)}</div>
            ${ICON.arrow.replace('<svg', '<svg class="card-arrow"')}
        </article>`;
    }

    // the primary link (website or repo) is the card itself; show the rest as sublinks
    const sublinks = (item.links || [])
        .filter((l) => l.href !== href)
        .map((l) => `<a class="sublink" href="${l.href}" target="_blank" rel="noopener">${SUBLINK_ICON[l.key] || ICON.arrow}${esc(t(l.key))}</a>`)
        .join('');

    return `
    <article class="card${wide ? ' is-wide' : ''}">
        <div class="card-top">
            ${iconHtml(item)}
            <div class="card-heading">
                <h3 class="card-title"><a href="${href}" target="_blank" rel="noopener" aria-label="${esc(item.name)} — ${esc(primaryLabel)}">${esc(item.name)}</a></h3>
                <p class="card-kicker">${esc(item.kicker)}</p>
            </div>
            ${ICON.arrow.replace('<svg', '<svg class="card-arrow"')}
        </div>
        <p class="card-desc">${esc(pick(item.summary))}</p>
        ${item.tags ? `<ul class="tags">${item.tags.map((tag) => `<li class="tag">${esc(tag)}</li>`).join('')}</ul>` : ''}
        <div class="card-foot">
            ${metaHtml(item, layout)}
            ${sublinks ? `<span class="sublinks">${sublinks}</span>` : ''}
        </div>
    </article>`;
}

function groupHtml(group, index, animate) {
    const num = String(index + 1).padStart(2, '0');
    const items = group.items.map((key) => (typeof key === 'string' ? projects[key] : key));
    return `
    <section class="group${animate ? ' reveal' : ''}" style="--i:${5 + index}" aria-labelledby="g-${group.id}">
        <div class="group-head">
            <p class="label"><span class="label-num">${num}</span><span>${esc(pick(group.label))}</span></p>
            <h2 class="group-title" id="g-${group.id}">${pick(group.title)}</h2>
        </div>
        <div class="cards ${group.layout}">
            ${items.map((item, i) => cardHtml(item, group.layout, group.wide && group.items[i] === group.wide)).join('')}
        </div>
    </section>`;
}

function freshGroup() {
    const fresh = REPOS.filter((r) => !KNOWN.has(r.name)).slice(0, 4);
    if (!fresh.length) return null;
    return {
        id: 'fresh',
        label: t('newOnGitHub'),
        title: t('newTitle'),
        layout: 'rows',
        items: fresh.map((r) => ({
            name: r.name,
            repo: r.name,
            mono: r.name.charAt(0).toUpperCase(),
            tile: `linear-gradient(145deg, ${NTB.langColor(r.lang)}, #1a1a1c)`,
            summary: r.desc || t('noDesc')
        }))
    };
}

let firstRender = true;

function renderGroups() {
    const groups = [...GROUPS];
    const fresh = freshGroup();
    if (fresh) groups.unshift(fresh);
    $('#groups').innerHTML = groups.map((g, i) => groupHtml(g, i, firstRender)).join('');
    $('#archive .label-num').textContent = String(groups.length + 1).padStart(2, '0');
}

function renderArchive() {
    $('#archive-list').innerHTML = NTB.archive.map((a) => {
        const info = repoInfo(a.repo) || {};
        return `
        <li class="archive-item">
            <a href="${gh(a.repo)}" target="_blank" rel="noopener">
                <span class="archive-name">${esc(a.name)}<code>${esc(a.repo)}</code></span>
                <span class="archive-desc">${esc(pick(a.desc))}</span>
                <span class="archive-meta">
                    ${info.lang ? `<span class="meta meta-lang"><span class="lang-dot" style="background:${NTB.langColor(info.lang)}"></span>${esc(info.lang)}</span>` : ''}
                    ${info.stars > 0 ? `<span class="meta">${ICON.star}${info.stars}</span>` : ''}
                    <span class="meta meta-faint">${a.year}</span>
                    ${ICON.arrow.replace('<svg', '<svg class="arrow"')}
                </span>
            </a>
        </li>`;
    }).join('');
}

function renderGlance() {
    const counts = {};
    REPOS.forEach((r) => { if (r.lang) counts[r.lang] = (counts[r.lang] || 0) + 1; });
    const langs = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const total = langs.reduce((s, [, n]) => s + n, 0) || 1;

    $('#stat-repos').textContent = REPOS.length;
    $('#repo-count').textContent = REPOS.length;
    $('#stat-langs').textContent = langs.length;
    $('#stat-stars').textContent = REPOS.reduce((s, r) => s + (r.stars || 0), 0);

    const bar = $('#footprint');
    bar.innerHTML = langs.map(([l, n], i) =>
        `<span style="flex:${n};background:${NTB.langColor(l)};--i:${i}"></span>`).join('');
    bar.setAttribute('aria-label', langs.map(([l, n]) => `${l} ${Math.round((n / total) * 100)}%`).join(', '));
    $('#footprint-legend').innerHTML = langs.map(([l, n]) =>
        `<li><span class="lang-dot" style="background:${NTB.langColor(l)}"></span>${esc(l)} <b>${n}</b></li>`).join('');
}

function applyStrings() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-label]').forEach((el) => {
        el.setAttribute('aria-label', t(el.dataset.i18nLabel));
        el.title = t(el.dataset.i18nLabel);
    });
    document.querySelectorAll('[data-lang-opt]').forEach((el) => el.classList.toggle('is-active', el.dataset.langOpt === lang));
    $('#lang-toggle').setAttribute('aria-label', lang === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English');
    const sync = $('#sync-note');
    sync.textContent = t(sync.classList.contains('is-live') ? 'syncLive' : 'syncStatic');
}

function tickClock() {
    const el = $('#local-time');
    el.textContent = NTB.localTime(lang);
    el.dateTime = new Date().toISOString();
}

function renderAll() {
    applyStrings();
    renderGlance();
    renderGroups();
    renderArchive();
    tickClock();
    firstRender = false;
}

/* ---------- 5. Interactions ---------- */
function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('is-visible'), 2200);
}

async function copyWithToast(text, okMsg) {
    toast((await NTB.copyText(text)) ? okMsg : t('copyFailed'));
}

function downloadVCard() {
    const vcf = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${profile.first};${profile.last};;;`,
        `FN:${profile.name}`,
        `NICKNAME:${profile.handle}`,
        'TITLE:Mobile Software Engineer',
        `EMAIL;TYPE=INTERNET,PREF:${profile.email}`,
        `URL:${profile.links}`,
        `X-SOCIALPROFILE;TYPE=github:${profile.github}`,
        `X-SOCIALPROFILE;TYPE=linkedin:${profile.linkedin}`,
        'ADR;TYPE=HOME:;;;;;;Vietnam',
        'END:VCARD'
    ].join('\r\n');
    const url = URL.createObjectURL(new Blob([vcf], { type: 'text/vcard;charset=utf-8' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'nguyen-thanh-binh.vcf' });
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast(t('contactSaved'));
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = Object.assign(document.createElement('script'), { src, async: true, onload: resolve, onerror: reject });
        document.head.appendChild(s);
    });
}

async function showQR() {
    const dialog = $('#qr-dialog');
    const box = $('#qr-code');
    if (!box.dataset.ready) {
        try {
            if (!window.QRCode) await loadScript('https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js');
            new window.QRCode(box, {
                text: profile.links, width: 368, height: 368,
                colorDark: '#16150f', colorLight: '#fbfaf7',
                correctLevel: window.QRCode.CorrectLevel.M
            });
            box.dataset.ready = '1';
        } catch (e) {
            toast(t('qrFailed'));
            return;
        }
    }
    if (typeof dialog.showModal === 'function') dialog.showModal();
}

async function sharePage() {
    const data = { title: `${profile.name} — Links`, text: t('bio'), url: profile.links };
    if (navigator.share) {
        try { await navigator.share(data); } catch (e) { /* dismissed */ }
        return;
    }
    copyWithToast(profile.links, t('linkCopied'));
}

function toggleLang() {
    lang = lang === 'en' ? 'vi' : 'en';
    NTB.saveLang(lang);
    renderAll();
}

/* Cursor spotlight on cards */
function trackSpotlight(e) {
    const card = e.target.closest('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
}

/* ---------- 6. Boot ---------- */
$('#year').textContent = new Date().getFullYear();
renderAll();
setInterval(tickClock, 15000);

$('#copy-email').addEventListener('click', () => copyWithToast(profile.email, t('copied')));
$('#save-contact').addEventListener('click', downloadVCard);
$('#show-qr').addEventListener('click', showQR);
$('#share').addEventListener('click', sharePage);
$('#theme-toggle').addEventListener('click', NTB.toggleTheme);
$('#lang-toggle').addEventListener('click', toggleLang);
$('#work').addEventListener('pointermove', trackSpotlight, { passive: true });
$('#qr-dialog').addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });

NTB.loadRepos().then((data) => {
    if (!data) return;
    REPOS = data;
    $('#sync-note').classList.add('is-live');
    renderAll();
});
})();
