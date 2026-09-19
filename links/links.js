/* ============================================================
   Links page — data-driven. Edit the arrays below to update.
============================================================= */
(() => {
'use strict';

const GITHUB_USER = 'NtbAndroidDev';
const PAGE_URL = 'https://ntbandroiddev.github.io/profile-ntb/links/';
const EMAIL = 'thanhbinhntn2018@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/nguy%E1%BB%85n-thanh-b%C3%ACnh-8b7aa1264/';
const gh = (repo) => `https://github.com/${GITHUB_USER}/${repo}`;

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
        portfolioSub: 'Architecture, case studies & journey',
        publicRepos: 'public repositories',
        linkedinSub: 'Experience & recommendations',
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
        portfolioSub: 'Kiến trúc, case study & hành trình',
        publicRepos: 'repository công khai',
        linkedinSub: 'Kinh nghiệm & giới thiệu',
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

/* ---------- 2. Work ---------- */
const GROUPS = [
    {
        id: 'android',
        label: { en: 'Android', vi: 'Android' },
        title: { en: 'Android apps, <em>private by design</em>', vi: 'Ứng dụng Android, <em>riêng tư từ thiết kế</em>' },
        layout: 'cols-2',
        items: [
            {
                name: 'Moodroll',
                repo: 'moodroll-site',
                icon: 'assets/moodroll.png',
                kicker: 'Android · Photo journal',
                href: 'https://ntbandroiddev.github.io/moodroll-site/',
                desc: {
                    en: 'A mood journal made of photographs. Photos, moods and notes stay on your phone — no account, no server holding your diary.',
                    vi: 'Nhật ký cảm xúc bằng ảnh. Ảnh, cảm xúc và ghi chú nằm trên điện thoại của bạn — không tài khoản, không máy chủ nào giữ nhật ký.'
                },
                tags: ['On-device', 'Film looks'],
                links: [{ key: 'privacy', href: 'https://ntbandroiddev.github.io/moodroll-site/privacy/' }]
            },
            {
                name: 'Packmoji',
                repo: 'stickerforge-site',
                icon: 'assets/packmoji.png',
                kicker: 'Android · Sticker maker',
                href: 'https://ntbandroiddev.github.io/stickerforge-site/',
                desc: {
                    en: 'Turns one photo into a private, share-ready reaction sticker pack — made entirely on your device.',
                    vi: 'Biến một tấm ảnh thành bộ sticker biểu cảm sẵn sàng chia sẻ — xử lý hoàn toàn trên thiết bị, riêng tư.'
                },
                tags: ['On-device', 'Stickers'],
                links: [{ key: 'privacy', href: 'https://ntbandroiddev.github.io/stickerforge-site/privacy-policy.html' }]
            }
        ]
    },
    {
        id: 'macos',
        label: { en: 'macOS · Swift 6', vi: 'macOS · Swift 6' },
        title: { en: 'Native tools for the <em>menu bar</em>', vi: 'Công cụ native cho <em>thanh menu</em>' },
        layout: 'cols-2',
        items: [
            {
                name: 'Mectrics',
                repo: 'mectrics',
                icon: 'assets/mectrics.png',
                mac: true,
                wide: true,
                kicker: 'macOS 14+ · SwiftUI + AppKit',
                desc: {
                    en: 'An ultra-light, privacy-first system monitor for Apple Silicon and Intel Macs — per-core P/E equalizer, battery diagnostics, fast drive eject and a headless CLI. Zero network requests.',
                    vi: 'Trình giám sát hệ thống siêu nhẹ, ưu tiên quyền riêng tư cho Mac Apple Silicon & Intel — biểu đồ từng lõi P/E, chẩn đoán pin, eject ổ đĩa nhanh và CLI headless. Không một request mạng.'
                },
                tags: ['SwiftUI', 'AppKit', 'CLI', 'Zero telemetry']
            },
            {
                name: 'DeviceBar',
                repo: 'device-bar',
                mono: 'D',
                tile: 'linear-gradient(145deg, #7a6cff, #2a2b66)',
                kicker: 'macOS 13+ · Swift',
                desc: {
                    en: 'A menu-bar companion for mobile developers: iOS Simulators and Android AVDs, scrcpy mirroring, a network inspector with cURL export, crash analysis and one-click cache cleaning.',
                    vi: 'Trợ thủ trên thanh menu cho lập trình viên mobile: quản lý iOS Simulator & Android AVD, mirror bằng scrcpy, network inspector xuất cURL, phân tích crash và dọn cache một chạm.'
                },
                tags: ['iOS', 'Android', 'scrcpy']
            },
            {
                name: 'Lingo',
                repo: 'lingo',
                icon: 'assets/lingo.png',
                mac: true,
                kicker: 'macOS 14+ · Swift 6',
                desc: {
                    en: 'A native translation assistant: a floating HUD beside your cursor, inline translate-and-replace, and on-device OCR with Apple Vision — powered by Ollama, DeepSeek or OpenAI.',
                    vi: 'Trợ lý dịch thuật native: HUD nổi cạnh con trỏ, dịch & thay thế tại chỗ, OCR trên thiết bị bằng Apple Vision — chạy với Ollama, DeepSeek hoặc OpenAI.'
                },
                tags: ['Vision OCR', 'LLM']
            }
        ]
    },
    {
        id: 'oss',
        label: { en: 'Open source', vi: 'Mã nguồn mở' },
        title: { en: 'Libraries &amp; <em>research</em>', vi: 'Thư viện &amp; <em>nghiên cứu</em>' },
        layout: 'rows',
        items: [
            {
                name: 'compose-media-picker',
                repo: 'compose-media-picker',
                mono: 'C',
                tile: 'linear-gradient(145deg, #3aa872, #103b28)',
                kicker: 'Android library · JitPack',
                desc: {
                    en: 'Jetpack Compose media picker — camera capture, gallery filters and numbered multi-select behind a single composable.',
                    vi: 'Thư viện chọn media cho Jetpack Compose — chụp/quay, lọc thư viện và chọn nhiều có đánh số, gói trong một composable.'
                }
            },
            {
                name: 'uitvic-caption',
                repo: 'uitvic-caption',
                mono: 'V',
                tile: 'linear-gradient(145deg, #c2578f, #3d1631)',
                kicker: 'Vision-language · PyTorch',
                desc: {
                    en: 'Fine-tuning BLIP for Vietnamese image captioning on UIT-ViIC, scored with BLEU, METEOR, ROUGE-L and CIDEr.',
                    vi: 'Fine-tune BLIP cho bài toán chú thích ảnh tiếng Việt trên UIT-ViIC, đánh giá bằng BLEU, METEOR, ROUGE-L và CIDEr.'
                }
            },
            {
                name: 'saramin-employer-api-demo',
                repo: 'saramin-employer-api-demo',
                mono: 'S',
                tile: 'linear-gradient(145deg, #4a82c0, #152840)',
                kicker: 'Python · API integration',
                desc: {
                    en: 'A Python demo integrating the Saramin employer API.',
                    vi: 'Demo Python tích hợp Saramin Employer API.'
                }
            }
        ]
    }
];

const ARCHIVE = [
    { repo: 'food_mvvm', name: 'Food App', desc: { en: 'Food-ordering app built to showcase MVVM on Android.', vi: 'Ứng dụng đặt đồ ăn minh hoạ kiến trúc MVVM trên Android.' } },
    { repo: 'chatapp_flutter', name: 'Chatty', desc: { en: 'Real-time chat backed by Firebase.', vi: 'Ứng dụng chat thời gian thực với Firebase.' } },
    { repo: 'job_app', name: 'Job Finder', desc: { en: 'Job-seeking app focused on motion and navigation.', vi: 'Ứng dụng tìm việc, chú trọng chuyển động và điều hướng.' } },
    { repo: 'jobhub_rest', name: 'JobHub REST', desc: { en: 'REST API backend for the job app.', vi: 'REST API backend cho ứng dụng tìm việc.' } },
    { repo: 'course_app', name: 'Course App', desc: { en: 'Course UI animated with Rive.', vi: 'Giao diện khoá học với animation Rive.' } },
    { repo: 'study_app', name: 'Study App', desc: { en: 'Study companion built in Flutter.', vi: 'Ứng dụng học tập viết bằng Flutter.' } },
    { repo: 'video_player', name: 'Video Player', desc: { en: 'Video player built in Flutter.', vi: 'Trình phát video viết bằng Flutter.' } },
    { repo: 'chathitu', name: 'Chathitu', desc: { en: 'Native Android chat app.', vi: 'Ứng dụng chat Android native.' } },
    { repo: 'chatapp', name: 'ChatApp', desc: { en: 'Early Android chat project.', vi: 'Dự án chat Android đầu tay.' } }
];

/* Repos shown elsewhere on the page (not "new") */
const KNOWN = new Set(['profile-ntb', ...GROUPS.flatMap((g) => g.items.map((i) => i.repo)), ...ARCHIVE.map((a) => a.repo)]);

/* Snapshot from the GitHub API (2026-09-19) — replaced by live data when reachable */
let REPOS = [
    ['mectrics', 'Swift', 0, '2026-09-19'], ['device-bar', 'Swift', 0, '2026-09-19'], ['lingo', 'Swift', 0, '2026-09-18'],
    ['moodroll-site', 'HTML', 0, '2026-09-12'], ['stickerforge-site', 'CSS', 0, '2026-08-01'], ['profile-ntb', 'CSS', 0, '2026-06-17'],
    ['uitvic-caption', 'Python', 0, '2026-06-17'], ['saramin-employer-api-demo', 'Python', 0, '2026-05-17'],
    ['compose-media-picker', 'Kotlin', 4, '2026-03-27'], ['job_app', 'Dart', 1, '2023-10-23'], ['food_mvvm', 'Kotlin', 1, '2023-10-05'],
    ['jobhub_rest', 'JavaScript', 1, '2023-09-26'], ['course_app', 'Dart', 0, '2023-09-25'], ['study_app', 'Dart', 1, '2023-09-09'],
    ['chatapp_flutter', 'Dart', 2, '2023-08-30'], ['video_player', 'Dart', 0, '2023-08-30'], ['chathitu', 'Java', 1, '2023-08-16'],
    ['chatapp', 'Java', 0, '2023-06-09']
].map(([name, lang, stars, pushed]) => ({ name, lang, stars, pushed, desc: null }));

const LANG_COLORS = {
    Swift: '#f05138', Kotlin: '#a97bff', Dart: '#00b4ab', Python: '#4b8bbe', Java: '#c0823a',
    JavaScript: '#e3c94a', TypeScript: '#3178c6', HTML: '#e3602f', CSS: '#8a6ad6', Shell: '#89e051'
};
const langColor = (l) => LANG_COLORS[l] || '#8c8a85';

/* ---------- 3. Helpers ---------- */
const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const repoInfo = (name) => REPOS.find((r) => r.name === name);

const ICON = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>'
};

let lang = 'en';
const t = (key) => STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
const pick = (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.en : obj);

function relTime(iso) {
    const diff = (new Date(iso).getTime() - Date.now()) / 1000;
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
    const units = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (const [unit, s] of units) {
        if (Math.abs(diff) >= s || unit === 'minute') return rtf.format(Math.round(diff / s), unit);
    }
    return '';
}

/* ---------- 4. Render ---------- */
function iconHtml(item) {
    if (item.icon) {
        return `<span class="app-icon${item.mac ? ' is-mac' : ''}"><img src="${item.icon}" alt="" width="56" height="56" loading="lazy" decoding="async"></span>`;
    }
    return `<span class="app-icon mono" style="--tile:${item.tile}" aria-hidden="true">${esc(item.mono)}</span>`;
}

function metaHtml(item, layout) {
    const info = repoInfo(item.repo);
    if (!info) return '';
    const parts = [];
    if (info.lang && layout === 'rows') {
        parts.push(`<span class="meta"><span class="lang-dot" style="background:${langColor(info.lang)}"></span>${esc(info.lang)}</span>`);
    }
    if (info.stars > 0) parts.push(`<span class="meta">${ICON.star}${info.stars}</span>`);
    if (info.pushed) parts.push(`<span class="meta meta-faint" title="${esc(new Date(info.pushed).toLocaleDateString(lang))}">${esc(t('updated'))} ${esc(relTime(info.pushed))}</span>`);
    return parts.join('');
}

function cardHtml(item, layout) {
    const href = item.href || gh(item.repo);
    const external = /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
    const primaryLabel = item.href ? t('website') : 'GitHub';

    if (layout === 'rows') {
        return `
        <article class="card">
            ${iconHtml(item)}
            <div class="card-heading">
                <h3 class="card-title"><a href="${href}"${external}>${esc(item.name)}</a></h3>
                <p class="card-desc">${esc(pick(item.desc))}</p>
            </div>
            <div class="card-side">${metaHtml(item, layout)}</div>
            <svg class="card-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </article>`;
    }

    const sublinks = [
        ...(item.links || []).map((l) => `<a class="sublink" href="${l.href}" target="_blank" rel="noopener">${ICON.shield}${esc(t(l.key))}</a>`),
        item.href ? '' : `<a class="sublink" href="${gh(item.repo)}" target="_blank" rel="noopener">${ICON.code}${esc(t('source'))}</a>`
    ].join('');

    return `
    <article class="card${item.wide ? ' is-wide' : ''}">
        <div class="card-top">
            ${iconHtml(item)}
            <div class="card-heading">
                <h3 class="card-title"><a href="${href}"${external} aria-label="${esc(item.name)} — ${esc(primaryLabel)}">${esc(item.name)}</a></h3>
                <p class="card-kicker">${esc(item.kicker)}</p>
            </div>
            <svg class="card-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>
        </div>
        <p class="card-desc">${esc(pick(item.desc))}</p>
        ${item.tags ? `<ul class="tags">${item.tags.map((tag) => `<li class="tag">${esc(tag)}</li>`).join('')}</ul>` : ''}
        <div class="card-foot">
            ${metaHtml(item, layout)}
            ${sublinks ? `<span class="sublinks">${sublinks}</span>` : ''}
        </div>
    </article>`;
}

function groupHtml(group, index, animate) {
    const num = String(index + 1).padStart(2, '0');
    return `
    <section class="group${animate ? ' reveal' : ''}" style="--i:${5 + index}" aria-labelledby="g-${group.id}">
        <div class="group-head">
            <p class="label"><span class="label-num">${num}</span><span>${esc(pick(group.label))}</span></p>
            <h2 class="group-title" id="g-${group.id}">${pick(group.title)}</h2>
        </div>
        <div class="cards ${group.layout}">
            ${group.items.map((item) => cardHtml(item, group.layout)).join('')}
        </div>
    </section>`;
}

function freshGroup() {
    const fresh = REPOS.filter((r) => !KNOWN.has(r.name)).slice(0, 4);
    if (!fresh.length) return null;
    return {
        id: 'fresh',
        label: { en: t('newOnGitHub'), vi: t('newOnGitHub') },
        title: { en: t('newTitle'), vi: t('newTitle') },
        layout: 'rows',
        items: fresh.map((r) => ({
            name: r.name,
            repo: r.name,
            mono: r.name.charAt(0).toUpperCase(),
            tile: `linear-gradient(145deg, ${langColor(r.lang)}, #1a1a1c)`,
            desc: r.desc || t('noDesc')
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
    $('#archive-list').innerHTML = ARCHIVE.map((a) => {
        const info = repoInfo(a.repo) || {};
        const year = info.pushed ? new Date(info.pushed).getFullYear() : '';
        return `
        <li class="archive-item">
            <a href="${gh(a.repo)}" target="_blank" rel="noopener">
                <span class="archive-name">${esc(a.name)}<code>${esc(a.repo)}</code></span>
                <span class="archive-desc">${esc(pick(a.desc))}</span>
                <span class="archive-meta">
                    ${info.lang ? `<span class="meta meta-lang"><span class="lang-dot" style="background:${langColor(info.lang)}"></span>${esc(info.lang)}</span>` : ''}
                    ${info.stars > 0 ? `<span class="meta">${ICON.star}${info.stars}</span>` : ''}
                    <span class="meta meta-faint">${year}</span>
                    <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>
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
        `<span style="flex:${n};background:${langColor(l)};--i:${i}"></span>`).join('');
    bar.setAttribute('aria-label', langs.map(([l, n]) => `${l} ${Math.round((n / total) * 100)}%`).join(', '));
    $('#footprint-legend').innerHTML = langs.map(([l, n]) =>
        `<li><span class="lang-dot" style="background:${langColor(l)}"></span>${esc(l)} <b>${n}</b></li>`).join('');
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

function renderAll() {
    applyStrings();
    renderGlance();
    renderGroups();
    renderArchive();
    tickClock();
    firstRender = false;
}

/* ---------- 5. Live GitHub sync ---------- */
async function syncGitHub() {
    const KEY = 'links-gh-v1';
    const TTL = 30 * 60 * 1000;
    let data = null;

    try {
        const cached = JSON.parse(sessionStorage.getItem(KEY) || 'null');
        if (cached && Date.now() - cached.t < TTL) data = cached.data;
    } catch (e) { /* storage unavailable */ }

    if (!data) {
        try {
            const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
                headers: { Accept: 'application/vnd.github+json' }
            });
            if (!res.ok) return;
            const json = await res.json();
            if (!Array.isArray(json)) return;
            data = json.filter((r) => !r.fork && !r.archived).map((r) => ({
                name: r.name, lang: r.language, stars: r.stargazers_count, pushed: r.pushed_at, desc: r.description
            }));
            try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), data })); } catch (e) { /* ignore */ }
        } catch (e) {
            return; // offline or rate-limited: keep the snapshot
        }
    }

    if (!data.length) return;
    REPOS = data;
    $('#sync-note').classList.add('is-live');
    renderAll();
}

/* ---------- 6. Interactions ---------- */
function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('is-visible'), 2200);
}

async function copyText(text, okMsg) {
    try {
        await navigator.clipboard.writeText(text);
        toast(okMsg);
    } catch (e) {
        toast(t('copyFailed'));
    }
}

function tickClock() {
    const time = new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', {
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Ho_Chi_Minh'
    }).format(new Date());
    const el = $('#local-time');
    el.textContent = time;
    el.dateTime = new Date().toISOString();
}

function downloadVCard() {
    const vcf = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'N:Nguyễn;Thanh Bình;;;',
        'FN:Nguyễn Thanh Bình',
        'NICKNAME:NtbAndroidDev',
        'TITLE:Mobile Software Engineer',
        `EMAIL;TYPE=INTERNET,PREF:${EMAIL}`,
        `URL:${PAGE_URL}`,
        `X-SOCIALPROFILE;TYPE=github:https://github.com/${GITHUB_USER}`,
        `X-SOCIALPROFILE;TYPE=linkedin:${LINKEDIN}`,
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
                text: PAGE_URL, width: 368, height: 368,
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
    const data = { title: 'Nguyễn Thanh Bình — Links', text: t('bio'), url: PAGE_URL };
    if (navigator.share) {
        try { await navigator.share(data); } catch (e) { /* dismissed */ }
        return;
    }
    copyText(PAGE_URL, t('linkCopied'));
}

function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('links-theme', next); } catch (e) { /* ignore */ }
}

function toggleLang() {
    lang = lang === 'en' ? 'vi' : 'en';
    try { localStorage.setItem('links-lang', lang); } catch (e) { /* ignore */ }
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

/* ---------- 7. Boot ---------- */
try {
    const saved = localStorage.getItem('links-lang');
    lang = saved === 'vi' || saved === 'en' ? saved : ((navigator.language || '').toLowerCase().startsWith('vi') ? 'vi' : 'en');
} catch (e) {
    lang = (navigator.language || '').toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

$('#year').textContent = new Date().getFullYear();
renderAll();
setInterval(tickClock, 15000);

$('#copy-email').addEventListener('click', () => copyText(EMAIL, t('copied')));
$('#save-contact').addEventListener('click', downloadVCard);
$('#show-qr').addEventListener('click', showQR);
$('#share').addEventListener('click', sharePage);
$('#theme-toggle').addEventListener('click', toggleTheme);
$('#lang-toggle').addEventListener('click', toggleLang);
$('#work').addEventListener('pointermove', trackSpotlight, { passive: true });
$('#qr-dialog').addEventListener('click', (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); });

syncGitHub();
})();
