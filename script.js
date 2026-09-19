/* ============================================================
   Portfolio. Project content lives in data.js (window.NTB);
   this file holds page copy, the interactive desk and the guide.
============================================================= */
(() => {
'use strict';

const NTB = window.NTB;
const { profile, projects, esc, rich, gh } = NTB;

/* ============================================================
   1. Copy
============================================================= */
const STRINGS = {
    en: {
        skip: 'Skip to work',
        status: 'Open to Android & mobile roles',
        heroTitle: 'Native software, <em>quietly</em> well made.',
        heroLead: 'I\'m Nguyễn Thanh Bình — a mobile engineer in Vietnam building Android apps, macOS menu-bar tools and on-device AI. Private by default, fast by design.',
        ctaWork: 'See selected work',
        ctaContact: 'Get in touch',
        deskTry: 'But why tell you — try them right here.',
        deskHint: 'or click the menu bar yourself',
        demoStart: 'Start demo',
        demoAgain: 'Replay demo',
        pmNormal: 'All systems normal',
        pmAwake: 'Keep Awake',
        pmOff: 'Off',
        pmOn: 'On',
        pdBooted: 'Booted',
        pdBootedOne: 'Booted',
        pdDark: 'Dark mode',
        pdGps: 'GPS · Hà Nội',
        pdShot: 'Screenshot',
        pdBoot: 'Boot',
        pdBooting: 'Booting…',
        pdToastDark: 'Appearance switched to Dark',
        pdToastFace: 'FaceID: Match sent',
        pdToastGps: 'Location set to Hà Nội',
        pdToastShot: 'Screenshot saved to Desktop',
        metaBased: 'Based in',
        location: 'Vietnam',
        metaFocus: 'Focus',
        metaFocusValue: 'Android · macOS · On-device AI',
        metaRepos: 'Public repositories',
        metaNow: 'Now',
        metaNowValue: 'Taking Moodroll to Google Play',
        navWork: 'Work',
        navApproach: 'Approach',
        navLog: 'Log',
        navIndex: 'Index',
        navContact: 'Contact',
        navLinks: 'Links',
        workLabel: 'Selected work',
        workTitle: 'Things I\'ve built, <em>up close</em>.',
        workIntro: 'Three macOS utilities, two privacy-first Android apps, an open-source Compose library and a research pipeline — each explained by what it does and how it\'s built.',
        approachLabel: 'Approach',
        approachTitle: 'Four habits behind <em>every</em> build.',
        seenIn: 'Seen in',
        logLabel: 'Build log',
        logTitle: 'From Java chat apps to <em>native Mac tools</em>.',
        indexLabel: 'Index',
        indexTitle: 'Every public <em>repository</em>.',
        filterAll: 'All',
        syncStatic: 'Snapshot of GitHub · Sep 2026',
        syncLive: 'Live from GitHub',
        contactLabel: 'Contact',
        contactTitle: 'Let\'s make something <em>calm</em> and fast.',
        copyEmail: 'Copy email address',
        allLinks: 'All links',
        coffee: 'Buy me a coffee',
        factBased: 'Based',
        factBasedValue: 'Vietnam · GMT+7',
        factFocus: 'Focus',
        factFocusValue: 'Native Android, macOS utilities, on-device AI',
        factOpen: 'Open to',
        factOpenValue: 'Android & mobile roles, freelance builds',
        footerNote: 'Hand-built with HTML, CSS & a little JavaScript.',
        copied: 'Email copied',
        copyFailed: 'Could not copy — select it instead',
        website: 'Website',
        privacy: 'Privacy',
        source: 'Source',
        support: 'Support',
        jitpack: 'JitPack',
        dataset: 'Dataset',
        updated: 'Updated',
        guideName: 'Guest',
        sayHero: 'Let\'s look around',
        sayDemo: 'Starting the demo',
        sayCase: 'Checking out {name}',
        sayPrinciple: 'Why private?',
        sayLog: 'Back to the start',
        sayIndex: 'Browsing by language',
        sayContact: 'Saying hi 👋'
    },
    vi: {
        skip: 'Tới phần dự án',
        status: 'Sẵn sàng cho vị trí Android & Mobile',
        heroTitle: 'Phần mềm native, <em>chỉn chu</em> từng chi tiết.',
        heroLead: 'Mình là Nguyễn Thanh Bình — kỹ sư mobile ở Việt Nam, làm ứng dụng Android, công cụ trên menu bar macOS và AI chạy ngay trên thiết bị. Riêng tư là mặc định, nhanh là thiết kế.',
        ctaWork: 'Xem dự án tiêu biểu',
        ctaContact: 'Liên hệ',
        deskTry: 'Nói suông làm gì — thử ngay tại đây.',
        deskHint: 'hoặc tự bấm lên menu bar',
        demoStart: 'Chạy demo',
        demoAgain: 'Xem lại demo',
        pmNormal: 'Mọi thứ bình thường',
        pmAwake: 'Giữ máy thức',
        pmOff: 'Tắt',
        pmOn: 'Bật',
        pdBooted: 'Đang chạy',
        pdBootedOne: 'Đang chạy',
        pdDark: 'Chế độ tối',
        pdGps: 'GPS · Hà Nội',
        pdShot: 'Chụp màn hình',
        pdBoot: 'Khởi động',
        pdBooting: 'Đang khởi động…',
        pdToastDark: 'Đã chuyển giao diện sang tối',
        pdToastFace: 'FaceID: đã gửi Match',
        pdToastGps: 'Đã đặt vị trí Hà Nội',
        pdToastShot: 'Đã lưu ảnh ra Desktop',
        metaBased: 'Nơi ở',
        location: 'Việt Nam',
        metaFocus: 'Tập trung',
        metaFocusValue: 'Android · macOS · AI trên thiết bị',
        metaRepos: 'Repository công khai',
        metaNow: 'Hiện tại',
        metaNowValue: 'Đưa Moodroll lên Google Play',
        navWork: 'Dự án',
        navApproach: 'Cách làm',
        navLog: 'Nhật ký',
        navIndex: 'Danh mục',
        navContact: 'Liên hệ',
        navLinks: 'Links',
        workLabel: 'Dự án tiêu biểu',
        workTitle: 'Những thứ mình làm, <em>nhìn gần</em>.',
        workIntro: 'Ba tiện ích macOS, hai ứng dụng Android đặt quyền riêng tư lên đầu, một thư viện Compose mã nguồn mở và một pipeline nghiên cứu — mỗi dự án kể bằng việc nó làm và cách nó được xây.',
        approachLabel: 'Cách làm',
        approachTitle: 'Bốn thói quen sau <em>mọi</em> sản phẩm.',
        seenIn: 'Thấy ở',
        logLabel: 'Nhật ký build',
        logTitle: 'Từ app chat Java đến <em>công cụ Mac native</em>.',
        indexLabel: 'Danh mục',
        indexTitle: 'Mọi <em>repository</em> công khai.',
        filterAll: 'Tất cả',
        syncStatic: 'Ảnh chụp GitHub · 09/2026',
        syncLive: 'Đồng bộ trực tiếp từ GitHub',
        contactLabel: 'Liên hệ',
        contactTitle: 'Cùng làm điều gì đó <em>tinh tế</em> và nhanh.',
        copyEmail: 'Sao chép email',
        allLinks: 'Tất cả liên kết',
        coffee: 'Mời mình ly cà phê',
        factBased: 'Nơi ở',
        factBasedValue: 'Việt Nam · GMT+7',
        factFocus: 'Tập trung',
        factFocusValue: 'Android native, tiện ích macOS, AI trên thiết bị',
        factOpen: 'Sẵn sàng cho',
        factOpenValue: 'Vị trí Android & Mobile, dự án freelance',
        footerNote: 'Tự tay dựng bằng HTML, CSS & một chút JavaScript.',
        copied: 'Đã sao chép email',
        copyFailed: 'Không sao chép được — hãy tự chọn',
        website: 'Website',
        privacy: 'Quyền riêng tư',
        source: 'Mã nguồn',
        support: 'Ủng hộ',
        jitpack: 'JitPack',
        dataset: 'Dataset',
        updated: 'Cập nhật',
        guideName: 'Khách',
        sayHero: 'Đi một vòng nhé',
        sayDemo: 'Bấm chạy demo',
        sayCase: 'Xem thử {name}',
        sayPrinciple: 'Sao lại riêng tư?',
        sayLog: 'Quay về lúc bắt đầu',
        sayIndex: 'Lọc theo ngôn ngữ',
        sayContact: 'Gửi lời chào 👋'
    }
};

/* ============================================================
   2. Page content (portfolio-only)
============================================================= */
const CASE_ORDER = ['mectrics', 'devicebar', 'lingo', 'moodroll', 'packmoji', 'picker', 'uitvic'];
const DOCK = ['mectrics', 'devicebar', 'lingo', null, 'moodroll', 'packmoji', 'picker'];
const TINT = {
    mectrics: '#ff6b6b', devicebar: '#3aa0ff', lingo: '#8b7bff', moodroll: '#f5a524',
    packmoji: '#7c5cff', picker: '#3aa872', uitvic: '#c2578f'
};

const PRINCIPLES = [
    {
        title: { en: 'Private by default', vi: 'Riêng tư là mặc định' },
        text: {
            en: 'Zero telemetry in Mectrics, local Ollama and a secret filter in Lingo, no account and no server behind Moodroll or Packmoji. Data stays where it was made.',
            vi: 'Mectrics không gửi telemetry, Lingo chạy được với Ollama cục bộ và có bộ lọc bí mật, Moodroll và Packmoji không cần tài khoản hay máy chủ. Dữ liệu ở lại nơi nó được tạo ra.'
        },
        seen: 'Mectrics · Lingo · Moodroll · Packmoji'
    },
    {
        title: { en: 'Native first', vi: 'Ưu tiên native' },
        text: {
            en: 'Swift 6 with SwiftUI and AppKit, Kotlin with Jetpack Compose. Platform APIs — IOKit, AppleSMC, Vision, adb, simctl — before wrappers.',
            vi: 'Swift 6 với SwiftUI và AppKit, Kotlin với Jetpack Compose. Dùng API của nền tảng — IOKit, AppleSMC, Vision, adb, simctl — trước khi nghĩ tới lớp bọc.'
        },
        seen: 'Mectrics · DeviceBar · compose-media-picker'
    },
    {
        title: { en: 'Remove the friction', vi: 'Gỡ bỏ ma sát' },
        text: {
            en: 'Tools that turn ten terminal commands into one click, and libraries that ship as a single composable with no manifest edits.',
            vi: 'Công cụ biến mười lệnh terminal thành một cú bấm, và thư viện gói gọn trong một composable, không cần sửa manifest.'
        },
        seen: 'DeviceBar · compose-media-picker · mectrics CLI'
    },
    {
        title: { en: 'Details that hold up', vi: 'Chi tiết bền vững' },
        text: {
            en: 'Zero layout shift, 160 ms hover dismissal, numbered selection badges, six-language UIs. The small things are the product.',
            vi: 'Không xê dịch bố cục, đóng popover trong 160 ms, huy hiệu chọn có đánh số, giao diện sáu ngôn ngữ. Những thứ nhỏ chính là sản phẩm.'
        },
        seen: 'Mectrics · compose-media-picker · DeviceBar'
    }
];

const TOOLKIT = [
    { title: { en: 'Android', vi: 'Android' }, items: ['Kotlin', 'Java', 'Jetpack Compose', 'XML Views', 'MVVM', 'Coroutines & Flow', 'Room · Retrofit', 'Coil'] },
    { title: { en: 'Apple platforms', vi: 'Nền tảng Apple' }, items: ['Swift 6', 'SwiftUI', 'AppKit', 'IOKit · AppleSMC', 'Vision', 'AVFoundation', 'Swift Package Manager'] },
    { title: { en: 'Cross-platform & backend', vi: 'Đa nền tảng & backend' }, items: ['Flutter · Dart', 'Firebase', 'Rive', 'REST APIs', 'JavaScript', 'Python'] },
    { title: { en: 'AI & ML', vi: 'AI & ML' }, items: ['PyTorch', 'BLIP', 'ViT5 · T5', 'Apple Vision OCR', 'Ollama', 'OpenAI-compatible APIs'] }
];

const LOG = [
    {
        date: { en: 'Sep 2026', vi: '09/2026' },
        title: { en: 'Three Mac utilities, open-sourced', vi: 'Ba tiện ích Mac, mở mã nguồn' },
        text: {
            en: 'Mectrics, DeviceBar and Lingo go public under MIT — with six languages in DeviceBar and a Buy Me a Coffee page to keep them going.',
            vi: 'Mectrics, DeviceBar và Lingo công khai theo giấy phép MIT — DeviceBar có sáu ngôn ngữ, kèm trang Buy Me a Coffee để tiếp tục phát triển.'
        },
        stack: ['Swift 6', 'SwiftUI']
    },
    {
        date: { en: 'Sep 2026', vi: '09/2026' },
        title: { en: 'Moodroll gets its home', vi: 'Moodroll có trang riêng' },
        text: {
            en: 'A landing page generated from the app itself — mood palette and camera catalogue included — plus the privacy policy for Google Play.',
            vi: 'Landing page được sinh ra từ chính ứng dụng — gồm bảng màu cảm xúc và danh mục máy ảnh — cùng chính sách quyền riêng tư cho Google Play.'
        },
        stack: ['Android', 'Python']
    },
    {
        date: { en: 'Aug 2026', vi: '08/2026' },
        title: { en: 'Packmoji published', vi: 'Ra mắt Packmoji' },
        text: {
            en: 'Site and privacy policy for the on-device AI sticker maker, ahead of early access.',
            vi: 'Website và chính sách quyền riêng tư cho ứng dụng làm sticker bằng AI trên thiết bị, chuẩn bị cho early access.'
        },
        stack: ['Android', 'On-device AI']
    },
    {
        date: { en: 'Apr – Jun 2026', vi: '04 – 06/2026' },
        title: { en: 'Vietnamese captioning research', vi: 'Nghiên cứu chú thích ảnh tiếng Việt' },
        text: {
            en: 'A two-stage BLIP → ViT5 pipeline on UIT-ViIC, with a Jaccard-vs-random pairing ablation.',
            vi: 'Pipeline hai tầng BLIP → ViT5 trên UIT-ViIC, kèm ablation so sánh ghép theo Jaccard và ngẫu nhiên.'
        },
        stack: ['PyTorch', 'BLIP', 'ViT5']
    },
    {
        date: { en: 'May 2026', vi: '05/2026' },
        title: { en: 'Employer API for QC', vi: 'Employer API cho QC' },
        text: {
            en: 'Saramin employer endpoints and a CRUD demo built for the QC team to test against.',
            vi: 'Các endpoint employer của Saramin và demo CRUD để đội QC kiểm thử.'
        },
        stack: ['Python', 'REST']
    },
    {
        date: { en: 'Mar 2026', vi: '03/2026' },
        title: { en: 'compose-media-picker grows up', vi: 'compose-media-picker trưởng thành' },
        text: {
            en: 'An image cropper with draggable handles, a `rememberMediaPicker` API and a helper for View-based apps — shipped on JitPack.',
            vi: 'Thêm cropper có tay nắm kéo, API `rememberMediaPicker` và helper cho app dùng View — phát hành qua JitPack.'
        },
        stack: ['Kotlin', 'Compose']
    },
    {
        date: { en: '2023', vi: '2023' },
        title: { en: 'The Flutter season', vi: 'Mùa Flutter' },
        text: {
            en: 'Real-time chat on Firebase, JobHub with its own REST backend, a Rive-animated course UI, study and video apps — and a Kotlin MVVM food app.',
            vi: 'Chat thời gian thực với Firebase, JobHub cùng REST backend riêng, giao diện khoá học animation Rive, app học tập và video — và một app đồ ăn Kotlin MVVM.'
        },
        stack: ['Flutter', 'Firebase', 'Kotlin']
    },
    {
        date: { en: 'Jun 2023', vi: '06/2023' },
        title: { en: 'First commits', vi: 'Những commit đầu tiên' },
        text: {
            en: 'Two Android chat apps in Java — where the habit of shipping things started.',
            vi: 'Hai ứng dụng chat Android bằng Java — nơi thói quen làm ra sản phẩm bắt đầu.'
        },
        stack: ['Java', 'Android']
    }
];

const LINGO_OUT = {
    standard: 'Apple Vision nhận diện văn bản ngay trên thiết bị trong khoảng 0,2 giây.',
    technical: 'Apple Vision thực hiện OCR on-device với độ trễ khoảng 0,2 giây.',
    casual: 'Apple Vision đọc chữ ngay trên máy, chừng 0,2 giây là xong.'
};

/* ============================================================
   3. Helpers & state
============================================================= */
let lang = NTB.initialLang();
let REPOS = NTB.snapshot;
let filter = 'all';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const t = (key) => STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
const pick = (obj) => (obj && typeof obj === 'object' && !Array.isArray(obj) ? obj[lang] ?? obj.en : obj);
const repoInfo = (name) => REPOS.find((r) => r.name === name);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const monthYear = (iso) => new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', { month: 'short', year: 'numeric' }).format(new Date(iso));

const ICON = {
    arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
};

function iconHtml(p, cls) {
    if (p.icon) return `<span class="${cls}${p.mac ? ' is-mac' : ''}"><img src="${p.icon}" alt="" loading="lazy" decoding="async"></span>`;
    return `<span class="${cls} mono-tile" style="--tile:${p.tile}" aria-hidden="true">${esc(p.mono)}</span>`;
}

/* ============================================================
   4. Render
============================================================= */
function renderDock() {
    $('#dock').innerHTML = DOCK.map((key) => {
        if (!key) return '<span class="dock-sep" aria-hidden="true"></span>';
        const p = projects[key];
        return `<a class="dock-item${p.mac ? ' is-mac' : ''}" href="#case-${key}" title="${esc(p.name)}" aria-label="${esc(p.name)}">${
            p.icon ? `<img src="${p.icon}" alt="" width="50" height="50">` : `<span class="dock-mono mono-tile" style="--tile:${p.tile}">${esc(p.mono)}</span>`
        }</a>`;
    }).join('');
}

function mediaHtml(key, p) {
    const m = p.media || {};
    switch (m.type) {
    case 'shot':
        if (m.orient === 'portrait') {
            return `<figure class="case-media media-portrait"><div class="shot"><img src="${m.src}" alt="${esc(m.alt)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async"></div></figure>`;
        }
        return `<figure class="case-media media-landscape">
            <div class="shot"><img src="${m.src}" alt="${esc(m.alt)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async"></div>
            ${m.src2 ? `<div class="shot shot-2"><img src="${m.src2}" alt="${esc(m.alt2)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async"></div>` : ''}
        </figure>`;
    case 'phones':
        return `<figure class="case-media media-phones">
            <div class="phone"><img src="${m.src}" alt="${esc(m.alt)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async"></div>
            <div class="phone"><img src="${m.src2}" alt="${esc(m.alt2)}" width="${m.w}" height="${m.h}" loading="lazy" decoding="async"></div>
        </figure>`;
    case 'stickers':
        return `<figure class="case-media media-stickers" aria-label="Packmoji">
            <div class="sticker-hero"><img src="${p.icon}" alt="" width="168" height="168" loading="lazy"></div>
            ${m.words.map((w) => `<span class="sticker" aria-hidden="true">${esc(w)}</span>`).join('')}
        </figure>`;
    case 'code':
        return `<figure class="case-media media-code"><div class="editor">
            <div class="editor-bar"><i></i><i></i><i></i><strong>PickerScreen.kt</strong></div>
<pre><code><span class="c">// One composable. One config object.</span>
<span class="f">PhotoPickerEntryPoint</span>(
    config = <span class="f">PickerConfig</span>(
        launchMode        = <span class="n">LaunchMode</span>.Combined,
        selectionMode     = <span class="n">SelectionMode</span>.MULTIPLE,
        initialFilter     = <span class="n">MediaFilter</span>.ALL,
        maxSelectionCount = <span class="s">10</span>,
        allowFilterChange = <span class="k">true</span>
    ),
    onResult = { result <span class="k">-&gt;</span>
        <span class="k">when</span> (result) {
            <span class="k">is</span> <span class="n">PickerResult</span>.Selected <span class="k">-&gt;</span> upload(result.uris)
            <span class="n">PickerResult</span>.Cancelled <span class="k">-&gt;</span> <span class="c">/* nothing to do */</span>
        }
    }
)</code></pre>
        </div></figure>`;
    case 'pipeline': {
        const stages = [
            { name: 'UIT-ViIC', text: { en: 'Photo in, from the Vietnamese captioning set', vi: 'Ảnh đầu vào từ bộ dữ liệu chú thích tiếng Việt' }, tag: 'input' },
            { name: 'BLIP', text: { en: 'Stage 1 — fine-tuned to draft a caption', vi: 'Tầng 1 — fine-tune để tạo bản nháp chú thích' }, tag: 'vision-language', key: true },
            { name: 'ViT5', text: { en: 'Stage 2 — refines the draft in Vietnamese', vi: 'Tầng 2 — tinh chỉnh bản nháp bằng tiếng Việt' }, tag: 'T5', key: true },
            { name: { en: 'Caption', vi: 'Chú thích' }, text: { en: 'Scored against human references', vi: 'Chấm điểm so với chú thích của người' }, tag: 'output', metrics: true }
        ];
        return `<figure class="case-media media-pipeline"><ol class="pipeline">${stages.map((s, i) => `
            <li class="stage${s.key ? ' is-key' : ''}">
                <span class="stage-num">0${i + 1}</span>
                <div><strong>${esc(pick(s.name))}</strong><small>${esc(pick(s.text))}</small>
                ${s.metrics ? '<div class="metrics">' + ['BLEU', 'METEOR', 'ROUGE-L', 'CIDEr'].map((x) => `<span class="tag">${x}</span>`).join('') + '</div>' : ''}</div>
                <span class="tag">${esc(s.tag)}</span>
            </li>`).join('')}</ol></figure>`;
    }
    default:
        return '';
    }
}

function caseHtml(key, i) {
    const p = projects[key];
    const info = repoInfo(p.repo);
    const links = p.links || [];
    const meta = [];
    if (info && info.stars > 0) meta.push(`<span>${ICON.star}${info.stars}</span>`);
    if (info && info.pushed) meta.push(`<span>${ICON.clock}${esc(t('updated'))} ${esc(NTB.relTime(info.pushed, lang))}</span>`);

    return `
    <article class="case${i % 2 ? ' is-flipped' : ''} reveal" id="case-${key}" style="--tint:${TINT[key]}">
        <div class="case-text">
            <div class="case-id">
                ${iconHtml(p, 'case-icon')}
                <div class="case-kicker">
                    <span class="label"><span class="label-num">${String(i + 1).padStart(2, '0')}</span><span>${esc(p.platform)}</span></span>
                    <span>${esc(p.kicker)}</span>
                </div>
            </div>
            <h3 class="case-name${p.name.length > 14 ? ' is-long' : ''}">${esc(p.name)}</h3>
            <p class="case-tagline">${esc(pick(p.tagline))}</p>
            <p class="case-summary">${esc(pick(p.summary))}</p>
            <ul class="case-points">${(pick(p.highlights) || []).map((h) => `<li><span>${rich(h)}</span></li>`).join('')}</ul>
            <ul class="case-tags">${p.tags.map((tag) => `<li class="tag">${esc(tag)}</li>`).join('')}</ul>
            <div class="case-foot">
                <div class="case-links">${links.map((l, j) => `
                    <a class="pill${j === 0 ? ' is-primary' : ''}" href="${l.href}" target="_blank" rel="noopener"${j === 0 ? ` data-guide="case" data-name="${esc(p.name)}"` : ''}>${esc(t(l.key))}${ICON.arrow}</a>`).join('')}
                </div>
                <div class="case-meta">${meta.join('')}</div>
            </div>
        </div>
        ${mediaHtml(key, p)}
    </article>`;
}

function renderCases() {
    $('#cases').innerHTML = CASE_ORDER.map(caseHtml).join('');
}

function renderPrinciples() {
    $('#principles').innerHTML = PRINCIPLES.map((p, i) => `
        <li class="principle reveal" style="--d:${i * 80}ms"${i === 0 ? ' data-guide="principle"' : ''}>
            <span class="principle-num">0${i + 1}</span>
            <h3>${esc(pick(p.title))}</h3>
            <p>${esc(pick(p.text))}</p>
            <p class="principle-seen">${esc(t('seenIn'))} <b>${esc(p.seen)}</b></p>
        </li>`).join('');
    $('#toolkit').innerHTML = TOOLKIT.map((g) => `
        <div><h3>${esc(pick(g.title))}</h3><ul>${g.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('');
}

function renderLog() {
    $('#timeline').innerHTML = LOG.map((item, i) => `
        <li class="log-item reveal"${i === LOG.length - 1 ? ' data-guide="log"' : ''}>
            <span class="log-date">${esc(pick(item.date))}</span>
            <div class="log-body"><h3>${esc(pick(item.title))}</h3><p>${rich(pick(item.text))}</p></div>
            <ul class="log-stack">${item.stack.map((s) => `<li class="tag">${esc(s)}</li>`).join('')}</ul>
        </li>`).join('');
}

function languages() {
    const counts = {};
    REPOS.forEach((r) => { if (r.lang) counts[r.lang] = (counts[r.lang] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function renderFilters() {
    const langs = languages();
    if (filter !== 'all' && !langs.some(([l]) => l === filter)) filter = 'all';
    $('#filters').innerHTML = [['all', REPOS.length], ...langs].map(([l, n]) => `
        <button class="filter" type="button" data-filter="${esc(l)}" aria-pressed="${filter === l}"${l === 'Swift' ? ' data-guide="index"' : ''}>
            ${l === 'all' ? '' : `<span class="lang-dot" style="background:${NTB.langColor(l)}"></span>`}${esc(l === 'all' ? t('filterAll') : l)} <b>${n}</b>
        </button>`).join('');
}

function renderIndex() {
    const rows = [...REPOS].sort((a, b) => new Date(b.pushed) - new Date(a.pushed));
    $('#repo-index').innerHTML = rows.map((r) => {
        const d = NTB.describe(r.name);
        const name = d ? d.name : r.name;
        const desc = d ? pick(d.desc) : (r.desc || '—');
        return `
        <li class="repo-row" data-lang="${esc(r.lang || '')}"${filter !== 'all' && r.lang !== filter ? ' hidden' : ''}>
            <a href="${gh(r.name)}" target="_blank" rel="noopener">
                <span class="repo-name">${esc(name)}${r.stars > 0 ? `<span class="repo-star">${ICON.star}${r.stars}</span>` : ''}${name !== r.name ? `<code>${esc(r.name)}</code>` : ''}</span>
                <span class="repo-desc">${esc(desc)}</span>
                <span class="repo-lang">${r.lang ? `<span class="lang-dot" style="background:${NTB.langColor(r.lang)}"></span>${esc(r.lang)}` : ''}</span>
                <span class="repo-when">${r.pushed ? esc(monthYear(r.pushed)) : ''}</span>
                ${ICON.arrow.replace('<svg', '<svg class="arrow"')}
            </a>
        </li>`;
    }).join('');
    $('#hero-repos').textContent = REPOS.length;
}

function applyFilter(next) {
    filter = next;
    $$('.filter').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
    $$('.repo-row').forEach((row) => { row.hidden = filter !== 'all' && row.dataset.lang !== filter; });
}

function applyStrings() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-html]').forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$('[data-i18n-label]').forEach((el) => {
        el.setAttribute('aria-label', t(el.dataset.i18nLabel));
        el.title = t(el.dataset.i18nLabel);
    });
    $$('[data-lang-opt]').forEach((el) => el.classList.toggle('is-active', el.dataset.langOpt === lang));
    $('#lang-toggle').setAttribute('aria-label', lang === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English');
    const sync = $('#sync-note');
    sync.textContent = t(sync.classList.contains('is-live') ? 'syncLive' : 'syncStatic');
    $('#guide-name').textContent = t('guideName');
    if (desk.played) $('#demo-btn span').textContent = t('demoAgain');
    desk.syncLabels();
}

function tickClock() {
    const time = NTB.localTime(lang);
    const el = $('#local-time');
    el.textContent = time;
    el.dateTime = new Date().toISOString();
    const d = new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: profile.timeZone }).format(new Date());
    $('#mb-clock').textContent = `${d}  ${time}`;
}

function renderAll() {
    applyStrings();
    renderCases();
    renderPrinciples();
    renderLog();
    renderFilters();
    renderIndex();
    tickClock();
    observeReveals();
    guide.measure();
}

/* ============================================================
   5. Desk — rebuilt Mectrics, DeviceBar and Lingo
============================================================= */
const desk = (() => {
    const root = $('#desk');
    const body = $('#desk-body');
    const cursor = $('#desk-cursor');
    root.appendChild(cursor); // cursor travels over the menu bar too

    const state = { open: null, awake: false, pixel: 'off', tone: 'standard', cpu: 28, ram: 45, spark: [], token: 0, busy: false, played: false };
    for (let i = 0; i < 40; i++) state.spark.push(22 + Math.random() * 18);

    const pops = { mectrics: $('#pop-mectrics'), devicebar: $('#pop-devicebar'), lingo: $('#pop-lingo') };
    const items = Object.fromEntries($$('.mb-item', root).map((b) => [b.dataset.app, b]));

    /* --- Mectrics --- */
    const cores = $('#pm-cores');
    cores.innerHTML = Array.from({ length: 12 }, (_, i) => `<i class="${i >= 4 ? 'p' : ''}"></i>`).join('');
    const coreBars = $$('i', cores);

    function metrics() {
        return [
            ['CPU', state.cpu, `${Math.round(state.cpu)}%`],
            ['Memory', state.ram, `${Math.round(state.ram)}%`],
            ['Network', null, `${(0.4 + Math.random() * 1.6).toFixed(1)} MB/s`],
            ['Disk', 69, '69%'],
            ['Battery', 88, '88%'],
            ['Temperature', 40 + state.cpu / 3, `${Math.round(40 + state.cpu / 3)}°C`]
        ];
    }

    function drawMectrics() {
        $('#mb-cpu').textContent = `${Math.round(state.cpu)}%`;
        $('#mb-ram').textContent = `${Math.round(state.ram)}%`;
        if (pops.mectrics.hidden) return;
        const w = 240, h = 48, n = state.spark.length;
        const pts = state.spark.map((v, i) => `${((i / (n - 1)) * w).toFixed(1)},${(h - (v / 100) * h).toFixed(1)}`);
        $('#pm-spark').setAttribute('d', `M${pts.join(' L')}`);
        $('#pm-spark-fill').setAttribute('d', `M0,${h} L${pts.join(' L')} L${w},${h} Z`);
        coreBars.forEach((bar, i) => {
            const base = i >= 4 ? state.cpu * 1.2 : state.cpu * 0.6;
            bar.style.height = `${Math.max(8, Math.min(100, base + (Math.random() - 0.5) * 40))}%`;
        });
        $('#pm-rows').innerHTML = metrics().map(([name, pct, label]) => `
            <li><span>${name}</span><span class="pm-bar">${pct === null ? '' : `<span style="width:${Math.min(100, pct)}%"></span>`}</span><b>${label}</b></li>`).join('');
    }

    function tick() {
        state.cpu = Math.max(8, Math.min(92, state.cpu + (Math.random() - 0.5) * 14));
        state.ram = Math.max(38, Math.min(70, state.ram + (Math.random() - 0.5) * 3));
        state.spark.push(state.cpu);
        state.spark.shift();
        drawMectrics();
    }

    /* --- DeviceBar --- */
    const toastEl = $('#pd-toast');
    let toastTimer;
    function pdToast(msg) {
        toastEl.textContent = msg;
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { toastEl.textContent = ''; }, 1800);
    }

    function syncDevice() {
        const booted = state.pixel === 'on' ? 2 : 1;
        $('#db-count').textContent = booted;
        $('#db-booted').textContent = booted;
        const row = $('#pd-pixel');
        const btn = $('#pd-boot');
        row.classList.toggle('is-on', state.pixel === 'on');
        if (state.pixel === 'on') {
            btn.outerHTML = `<span class="pd-state" id="pd-boot">${esc(t('pdBootedOne'))}</span>`;
        } else if (btn.tagName === 'BUTTON') {
            btn.textContent = t(state.pixel === 'booting' ? 'pdBooting' : 'pdBoot');
            btn.classList.toggle('is-busy', state.pixel === 'booting');
        } else {
            btn.outerHTML = `<button class="pd-boot" type="button" id="pd-boot">${esc(t('pdBoot'))}</button>`;
        }
    }

    async function bootPixel() {
        if (state.pixel !== 'off') return;
        state.pixel = 'booting';
        syncDevice();
        await wait(1400);
        state.pixel = 'on';
        syncDevice();
    }

    /* --- Lingo --- */
    let typeToken = 0;
    async function typeOut(text) {
        const me = ++typeToken;
        const out = $('#pl-out');
        out.textContent = '';
        out.classList.add('is-typing');
        for (let i = 1; i <= text.length; i++) {
            if (me !== typeToken) return;
            out.textContent = text.slice(0, i);
            await wait(reduceMotion ? 0 : 22);
        }
        out.classList.remove('is-typing');
    }

    function setTone(tone) {
        state.tone = tone;
        $$('.pl-tones button', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tone === tone)));
        typeOut(LINGO_OUT[tone]);
    }

    /* --- Open / close --- */
    function open(app) {
        if (state.open === app) { close(); return; }
        close();
        state.open = app;
        pops[app].hidden = false;
        position(app);
        items[app].setAttribute('aria-expanded', 'true');
        if (app === 'mectrics') drawMectrics();
        if (app === 'lingo') typeOut(LINGO_OUT[state.tone]);
    }

    // hang each popover under its own menu-bar item (small screens use the CSS inset)
    function position(app) {
        const pop = pops[app];
        if (innerWidth <= 640) { pop.style.right = ''; return; }
        const d = root.getBoundingClientRect();
        const r = items[app].getBoundingClientRect();
        pop.style.right = `${Math.max(8, d.right - r.right - 4)}px`;
    }

    function close() {
        if (!state.open) return;
        pops[state.open].hidden = true;
        items[state.open].setAttribute('aria-expanded', 'false');
        state.open = null;
        typeToken++;
    }

    function reset() {
        close();
        state.awake = false;
        state.pixel = 'off';
        state.tone = 'standard';
        $$('.pl-tones button', root).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.tone === 'standard')));
        syncLabels();
        syncDevice();
    }

    function syncLabels() {
        const awake = $('#pm-awake');
        awake.classList.toggle('is-on', state.awake);
        awake.querySelector('b').textContent = t(state.awake ? 'pmOn' : 'pmOff');
        if (state.pixel !== 'on') syncDevice();
        else $('#pd-boot').textContent = t('pdBootedOne');
    }

    /* --- Autopilot --- */
    function point(el) {
        const r = el.getBoundingClientRect();
        const d = root.getBoundingClientRect();
        return { x: r.left - d.left + r.width * 0.55, y: r.top - d.top + r.height * 0.6 };
    }

    let cx = 0, cy = 0;
    function place(x, y) {
        cx = x; cy = y;
        cursor.style.setProperty('--cx', `${x}px`);
        cursor.style.setProperty('--cy', `${y}px`);
    }

    async function moveTo(el, me) {
        if (me !== state.token) throw new Error('cancelled');
        const p = point(el);
        const dist = Math.hypot(p.x - cx, p.y - cy);
        const ms = reduceMotion ? 0 : Math.min(900, 280 + dist * 0.9);
        cursor.style.transition = `transform ${ms}ms cubic-bezier(.45,.05,.2,1), opacity .3s ease`;
        place(p.x, p.y);
        await wait(ms + 60);
        if (me !== state.token) throw new Error('cancelled');
    }

    async function tap(el, me) {
        cursor.classList.add('is-click');
        el.classList.add('is-pressed');
        await wait(140);
        cursor.classList.remove('is-click');
        el.classList.remove('is-pressed');
        if (me !== state.token) throw new Error('cancelled');
        el.click();
    }

    async function run() {
        const me = ++state.token;
        state.busy = true;
        root.classList.add('is-busy');
        guide.rest(true);
        reset();
        const start = point($('#demo-btn'));
        cursor.style.transition = 'none';
        place(start.x, start.y);
        try {
            await wait(300);
            await moveTo(items.mectrics, me); await tap(items.mectrics, me); await wait(1900);
            await moveTo($('#pm-awake'), me); await tap($('#pm-awake'), me); await wait(1000);
            await moveTo(items.devicebar, me); await tap(items.devicebar, me); await wait(900);
            const shot = $('[data-quick="shot"]', root);
            await moveTo(shot, me); await tap(shot, me); await wait(1000);
            await moveTo($('#pd-boot'), me); await tap($('#pd-boot'), me); await wait(2100);
            await moveTo(items.lingo, me); await tap(items.lingo, me); await wait(2600);
            const casual = $('[data-tone="casual"]', root);
            await moveTo(casual, me); await tap(casual, me); await wait(2400);
            await moveTo($('#desk-center'), me); close(); await wait(400);
        } catch (e) {
            /* cancelled by the visitor */
        }
        if (me === state.token) finish();
    }

    function finish() {
        state.busy = false;
        state.played = true;
        root.classList.remove('is-busy');
        $('#demo-btn span').textContent = t('demoAgain');
        guide.rest(false);
    }

    function cancel() {
        if (!state.busy) return;
        state.token++;
        finish();
    }

    /* --- Events --- */
    Object.entries(items).forEach(([app, btn]) => btn.addEventListener('click', () => open(app)));
    $('#pm-awake').addEventListener('click', () => { state.awake = !state.awake; syncLabels(); });
    $('#pop-devicebar').addEventListener('click', (e) => {
        const q = e.target.closest('[data-quick]');
        if (q) pdToast(t({ dark: 'pdToastDark', faceid: 'pdToastFace', gps: 'pdToastGps', shot: 'pdToastShot' }[q.dataset.quick]));
        if (e.target.closest('button#pd-boot')) bootPixel();
    });
    $$('.pl-tones button', root).forEach((b) => b.addEventListener('click', () => setTone(b.dataset.tone)));
    $('#demo-btn').addEventListener('click', (e) => { e.stopPropagation(); run(); });
    body.addEventListener('click', (e) => {
        if (e.target === body || e.target.id === 'desk-center' || e.target.classList.contains('desk-hint')) close();
    });
    // a real visitor taking the mouse stops the autopilot
    root.addEventListener('pointerdown', (e) => { if (e.isTrusted) cancel(); }, true);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    setInterval(tick, 1100);
    drawMectrics();

    return {
        run, syncLabels,
        get played() { return state.played; },
        get busy() { return state.busy; }
    };
})();

/* ============================================================
   6. Guide — a sample user who walks the page as you scroll
============================================================= */
const guide = (() => {
    const el = $('#guide');
    const say = $('#guide-say');
    let pts = [];
    let cur = null;
    let target = { x: 0, y: 0 };
    let active = null;
    let resting = false;
    let raf = 0;
    let demoTriggered = false;
    const enabled = () => !reduceMotion && matchMedia('(min-width: 761px) and (hover: hover)').matches;

    function measure() {
        if (!enabled()) { el.classList.remove('is-on'); return; }
        pts = $$('[data-guide]')
            .filter((node) => node.offsetParent !== null)
            .map((node) => {
                const r = node.getBoundingClientRect();
                // point at the element's right edge so the tag sits beside it, not on it
                const x = Math.min(r.left + r.width - 10, r.left + 280, document.documentElement.clientWidth - 250);
                return { node, kind: node.dataset.guide, x: x + scrollX, y: r.top + scrollY + r.height * 0.55 };
            })
            .sort((a, b) => a.y - b.y);
        update();
    }

    function sayFor(p) {
        if (!p) return '';
        const key = { hero: 'sayHero', demo: 'sayDemo', case: 'sayCase', principle: 'sayPrinciple', log: 'sayLog', index: 'sayIndex', contact: 'sayContact' }[p.kind];
        return t(key).replace('{name}', p.node.dataset.name || '');
    }

    function setActive(p) {
        if (p === active) return;
        if (active) active.node.classList.remove('is-guided');
        active = p;
        say.textContent = sayFor(p);
        if (!p) return;
        p.node.classList.add('is-guided');
        el.classList.remove('is-click');
        void el.offsetWidth; // restart the ripple
        el.classList.add('is-click');
        setTimeout(() => el.classList.remove('is-click'), 700);
        if (p.kind === 'demo' && !demoTriggered && !desk.played) {
            demoTriggered = true;
            setTimeout(() => { if (active === p) desk.run(); }, 500);
        }
    }

    const smooth = (x) => x * x * (3 - 2 * x);

    function update() {
        if (!pts.length) return;
        const focus = scrollY + innerHeight * 0.5;
        const next = pts.findIndex((p) => p.y > focus);
        let x, y, dwell = null;
        if (next === 0) { ({ x, y } = pts[0]); dwell = pts[0]; }
        else if (next === -1) { ({ x, y } = pts[pts.length - 1]); dwell = pts[pts.length - 1]; }
        else {
            const a = pts[next - 1], b = pts[next];
            const raw = (focus - a.y) / (b.y - a.y);
            const e = smooth(Math.min(1, Math.max(0, (raw - 0.3) / 0.42)));
            x = a.x + (b.x - a.x) * e + Math.sin(Math.PI * e) * 70 * (b.x >= a.x ? -1 : 1);
            y = a.y + (b.y - a.y) * e;
            // stay on screen while travelling across long sections
            y = Math.min(scrollY + innerHeight - 110, Math.max(scrollY + 90, y));
            if (e === 0) dwell = a;
            else if (e === 1) dwell = b;
        }
        target = { x, y };
        setActive(dwell);
        if (!cur) cur = { ...target };
        el.classList.toggle('is-on', !resting);
        if (!raf) raf = requestAnimationFrame(frame);
    }

    function frame() {
        cur.x += (target.x - cur.x) * 0.16;
        cur.y += (target.y - cur.y) * 0.16;
        el.style.transform = `translate3d(${cur.x.toFixed(1)}px, ${cur.y.toFixed(1)}px, 0)`;
        raf = Math.hypot(target.x - cur.x, target.y - cur.y) > 0.4 ? requestAnimationFrame(frame) : 0;
    }

    function rest(on) {
        resting = on;
        el.classList.toggle('is-resting', on);
    }

    addEventListener('scroll', update, { passive: true });
    addEventListener('resize', measure);
    addEventListener('load', measure);
    if ('ResizeObserver' in window) new ResizeObserver(() => measure()).observe(document.body);

    return { measure, rest };
})();

/* ============================================================
   7. Page chrome
============================================================= */
function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('is-visible'), 2200);
}

let revealObserver = null;
function observeReveals() {
    const nodes = $$('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window) || reduceMotion) { nodes.forEach((n) => n.classList.add('is-in')); return; }
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-in');
                revealObserver.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -8% 0px' });
    }
    nodes.forEach((n) => revealObserver.observe(n));
}

function setupNav() {
    const nav = $('#nav');
    const links = $$('.nav-links a');
    const onScroll = () => {
        nav.classList.toggle('is-scrolled', scrollY > 12);
        if (scrollY < innerHeight * 0.6) links.forEach((l) => l.classList.remove('is-active'));
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (!('IntersectionObserver' in window)) return;
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach((s) => spy.observe(s));
}

/* ============================================================
   8. Boot
============================================================= */
$('#year').textContent = new Date().getFullYear();
$('#copy-email').dataset.guide = 'contact';
renderDock();
renderAll();
setupNav();
setInterval(tickClock, 15000);

$('#lang-toggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'vi' : 'en';
    NTB.saveLang(lang);
    renderAll();
});
$('#theme-toggle').addEventListener('click', NTB.toggleTheme);
$('#copy-email').addEventListener('click', async () => {
    toast((await NTB.copyText(profile.email)) ? t('copied') : t('copyFailed'));
});
$('#filters').addEventListener('click', (e) => {
    const b = e.target.closest('[data-filter]');
    if (b) applyFilter(b.dataset.filter);
});

NTB.loadRepos().then((data) => {
    if (!data) return;
    REPOS = data;
    $('#sync-note').classList.add('is-live');
    renderAll();
});
})();
