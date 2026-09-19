/* ============================================================
   Shared content for the portfolio (/) and the links page (/links/).
   Edit here once; both pages read window.NTB.
   Asset paths are relative to the site root — pages prefix them.
============================================================= */
window.NTB = (() => {
'use strict';

const USER = 'NtbAndroidDev';
const gh = (repo) => `https://github.com/${USER}/${repo}`;

const profile = {
    name: 'Nguyễn Thanh Bình',
    first: 'Nguyễn',
    last: 'Thanh Bình',
    handle: USER,
    email: 'thanhbinhntn2018@gmail.com',
    github: `https://github.com/${USER}`,
    linkedin: 'https://www.linkedin.com/in/nguy%E1%BB%85n-thanh-b%C3%ACnh-8b7aa1264/',
    coffee: 'https://buymeacoffee.com/ntb1nh',
    site: 'https://ntbandroiddev.github.io/profile-ntb/',
    links: 'https://ntbandroiddev.github.io/profile-ntb/links/',
    timeZone: 'Asia/Ho_Chi_Minh'
};

/* ---------- Projects ----------
   summary    one or two sentences (links page, index)
   highlights three concrete points (portfolio case study)
   media      what the portfolio shows beside the text
*/
const projects = {
    mectrics: {
        name: 'Mectrics',
        repo: 'mectrics',
        icon: 'assets/mectrics.png',
        mac: true,
        platform: 'macOS',
        kicker: 'macOS 14+ · Swift 6',
        tagline: { en: 'A system monitor that lives in the menu bar — and never phones home.', vi: 'Trình giám sát hệ thống sống trên menu bar — và không bao giờ gửi dữ liệu ra ngoài.' },
        summary: {
            en: 'An ultra-light, privacy-first system monitor for Apple Silicon and Intel Macs — per-core P/E equalizer, battery firmware diagnostics, safe drive eject and a headless CLI. Zero network requests.',
            vi: 'Trình giám sát hệ thống siêu nhẹ, ưu tiên quyền riêng tư cho Mac Apple Silicon & Intel — biểu đồ từng lõi P/E, chẩn đoán pin từ firmware, eject ổ đĩa an toàn và CLI headless. Không một request mạng.'
        },
        highlights: {
            en: [
                'Per-core P/E topology via sysctl, battery cycles and mAh via IORegistry, fan RPM and thermal state via AppleSMC',
                'Four menu-bar layouts with hover-to-inspect in ~50 ms, click-to-pin and zero layout shift',
                'Headless `mectrics` CLI — health-check exit codes and JSON snapshots for scripts, tmux and CI'
            ],
            vi: [
                'Nhận diện lõi P/E qua sysctl, số chu kỳ và dung lượng pin qua IORegistry, tốc độ quạt và nhiệt độ qua AppleSMC',
                'Bốn kiểu hiển thị trên menu bar, rê chuột xem chi tiết trong ~50 ms, bấm để ghim, không xê dịch bố cục',
                'CLI `mectrics` headless — mã thoát health-check và snapshot JSON cho script, tmux và CI'
            ]
        },
        tags: ['Swift 6', 'SwiftUI', 'AppKit', 'IOKit', 'CLI'],
        links: [{ key: 'source', href: gh('mectrics') }, { key: 'support', href: profile.coffee }],
        media: { type: 'shot', src: 'assets/shots/mectrics-dashboard.jpg', w: 598, h: 984, orient: 'portrait', alt: 'Mectrics dashboard popover showing CPU, memory, network, disk, battery and temperature' }
    },
    devicebar: {
        name: 'DeviceBar',
        repo: 'device-bar',
        mono: 'D',
        tile: 'linear-gradient(145deg, #3aa0ff, #2a2b86)',
        platform: 'macOS',
        kicker: 'macOS 13+ · v1.2.0',
        tagline: { en: 'Every simulator, emulator and device a mobile developer touches — one click away.', vi: 'Mọi simulator, emulator và thiết bị mà dev mobile cần — cách một cú bấm.' },
        summary: {
            en: 'A menu-bar companion for mobile developers: iOS Simulators and Android AVDs, scrcpy mirroring, a network inspector with cURL export, crash analysis and one-click cache cleaning — in six languages.',
            vi: 'Trợ thủ trên thanh menu cho lập trình viên mobile: iOS Simulator & Android AVD, mirror bằng scrcpy, network inspector xuất cURL, phân tích crash và dọn cache một chạm — hỗ trợ sáu ngôn ngữ.'
        },
        highlights: {
            en: [
                'iOS Simulators and Android AVDs side by side — FaceID, GPS mocking, deep links, push payloads, cold boot',
                'Network inspector for OkHttp, Retrofit, Dio, URLSession and Axios, with cURL and Markdown export',
                'Crash Detective, scrcpy mirroring, wireless ADB and a cleaner for DerivedData, Gradle and SPM caches'
            ],
            vi: [
                'iOS Simulator và Android AVD chung một chỗ — FaceID, giả lập GPS, deep link, push payload, cold boot',
                'Network inspector cho OkHttp, Retrofit, Dio, URLSession và Axios, xuất cURL và Markdown',
                'Crash Detective, mirror bằng scrcpy, ADB không dây và dọn cache DerivedData, Gradle, SPM'
            ]
        },
        tags: ['SwiftUI', 'AppKit', 'adb', 'simctl', 'scrcpy'],
        links: [{ key: 'source', href: gh('device-bar') }, { key: 'support', href: profile.coffee }],
        media: { type: 'shot', src: 'assets/shots/devicebar.jpg', w: 1376, h: 768, orient: 'landscape', alt: 'DeviceBar popover managing a booted iPhone simulator', src2: 'assets/shots/devicebar-network.jpg', alt2: 'DeviceBar network and API inspector with a cURL request' }
    },
    lingo: {
        name: 'Lingo',
        repo: 'lingo',
        icon: 'assets/lingo.png',
        mac: true,
        platform: 'macOS',
        kicker: 'macOS 14+ · Swift 6',
        tagline: { en: 'Translation that meets you where the text already is.', vi: 'Dịch thuật xuất hiện ngay nơi con chữ đang nằm.' },
        summary: {
            en: 'A native translation assistant: a floating HUD beside your cursor, inline translate-and-replace, and on-device OCR with Apple Vision — powered by Ollama, DeepSeek or OpenAI.',
            vi: 'Trợ lý dịch thuật native: HUD nổi cạnh con trỏ, dịch & thay thế tại chỗ, OCR trên thiết bị bằng Apple Vision — chạy với Ollama, DeepSeek hoặc OpenAI.'
        },
        highlights: {
            en: [
                'Floating HUD beside the cursor, and inline translate-and-replace in any app via the Accessibility API',
                'On-device screenshot OCR with Apple Vision (~0.2 s) plus the offline macOS dictionary with IPA',
                'Ollama, DeepSeek or OpenAI with five tones — and a secret filter that warns before keys leave your Mac'
            ],
            vi: [
                'HUD nổi cạnh con trỏ, dịch & thay thế tại chỗ trong mọi ứng dụng qua Accessibility API',
                'OCR ảnh chụp màn hình trên thiết bị bằng Apple Vision (~0,2 giây) cùng từ điển macOS offline có IPA',
                'Ollama, DeepSeek hoặc OpenAI với năm tông dịch — kèm bộ lọc cảnh báo trước khi khoá bí mật rời khỏi máy'
            ]
        },
        tags: ['Swift 6', 'SwiftUI', 'Vision', 'LLM', 'Clean Architecture'],
        links: [{ key: 'source', href: gh('lingo') }, { key: 'support', href: profile.coffee }],
        media: { type: 'shot', src: 'assets/shots/lingo.jpg', w: 1376, h: 768, orient: 'landscape', alt: 'Lingo translating an English sentence into Vietnamese on the macOS desktop' }
    },
    moodroll: {
        name: 'Moodroll',
        repo: 'moodroll-site',
        icon: 'assets/moodroll.png',
        platform: 'Android',
        kicker: 'Android · Coming to Google Play',
        href: 'https://ntbandroiddev.github.io/moodroll-site/',
        tagline: { en: 'A mood journal made of photographs.', vi: 'Cuốn nhật ký cảm xúc làm từ những bức ảnh.' },
        summary: {
            en: 'A mood journal made of photographs. Give the day a colour, shoot it on one of 24 cameras — and nothing you write or shoot leaves your phone.',
            vi: 'Nhật ký cảm xúc bằng ảnh. Tô màu cho một ngày, chụp nó bằng một trong 24 máy ảnh — và không gì bạn viết hay chụp rời khỏi điện thoại.'
        },
        highlights: {
            en: [
                'Two taps and the day is kept: one of seven colours, a note or tag if you want one',
                '24 cameras, not 24 filters — grain, halation and vignette are built per shot, at capture',
                'No account, no server, no cloud sync; the month becomes a grid you can read at a glance'
            ],
            vi: [
                'Hai chạm là lưu xong một ngày: một trong bảy màu, thêm ghi chú hay thẻ nếu muốn',
                '24 máy ảnh chứ không phải 24 filter — grain, halation, vignette được dựng cho từng khung hình ngay khi chụp',
                'Không tài khoản, không máy chủ, không đồng bộ đám mây; cả tháng hiện thành một lưới đọc được trong nháy mắt'
            ]
        },
        tags: ['Android', 'Camera', 'On-device'],
        links: [{ key: 'website', href: 'https://ntbandroiddev.github.io/moodroll-site/' }, { key: 'privacy', href: 'https://ntbandroiddev.github.io/moodroll-site/privacy/' }],
        media: { type: 'phones', src: 'assets/shots/moodroll-diary.jpg', src2: 'assets/shots/moodroll-filmroom.jpg', w: 560, h: 1247, alt: 'Moodroll month grid of photographed days', alt2: 'Moodroll film room with camera rolls on a shelf' }
    },
    packmoji: {
        name: 'Packmoji',
        repo: 'stickerforge-site',
        icon: 'assets/packmoji.png',
        platform: 'Android',
        kicker: 'Android · Early access',
        href: 'https://ntbandroiddev.github.io/stickerforge-site/',
        tagline: { en: 'Your face. Every reaction.', vi: 'Gương mặt bạn. Mọi biểu cảm.' },
        summary: {
            en: 'An on-device AI sticker maker: turn one photo into a share-ready reaction pack — without uploading your photos.',
            vi: 'Ứng dụng làm sticker bằng AI trên thiết bị: biến một tấm ảnh thành bộ sticker biểu cảm sẵn sàng chia sẻ — không tải ảnh của bạn lên đâu cả.'
        },
        highlights: {
            en: [
                'Background removal, captions and sticker rendering all happen on the device',
                'One photo becomes a full reaction pack; a four-shot photobooth strip becomes more',
                'Transparent PNG and WEBP exports, printable PDF sheets, straight to WhatsApp'
            ],
            vi: [
                'Tách nền, thêm chữ và dựng sticker đều diễn ra ngay trên thiết bị',
                'Một tấm ảnh thành cả bộ biểu cảm; dải photobooth bốn khung còn cho nhiều hơn',
                'Xuất PNG và WEBP nền trong, tờ sticker PDF để in, gửi thẳng lên WhatsApp'
            ]
        },
        tags: ['Android', 'On-device AI', 'Stickers'],
        links: [{ key: 'website', href: 'https://ntbandroiddev.github.io/stickerforge-site/' }, { key: 'privacy', href: 'https://ntbandroiddev.github.io/stickerforge-site/privacy-policy.html' }],
        media: { type: 'stickers', words: ['BRB', 'NO WAY!', 'LITERALLY ME', 'ONE SEC'] }
    },
    picker: {
        name: 'compose-media-picker',
        repo: 'compose-media-picker',
        mono: 'C',
        tile: 'linear-gradient(145deg, #3aa872, #103b28)',
        platform: 'Library',
        kicker: 'Android library · JitPack 1.0.11',
        tagline: { en: 'Camera, gallery and cropper behind a single composable.', vi: 'Camera, thư viện ảnh và cropper gói trong một composable.' },
        summary: {
            en: 'A Jetpack Compose media picker — camera capture, gallery filters, numbered multi-select and an image cropper, with a helper for View-based apps.',
            vi: 'Thư viện chọn media cho Jetpack Compose — chụp/quay, lọc thư viện, chọn nhiều có đánh số và cắt ảnh, kèm helper cho app dùng View.'
        },
        highlights: {
            en: [
                '`rememberMediaPicker` for Compose, `MediaPickerHelper` for XML Activities and Fragments',
                'Image cropper with draggable corner and edge handles under a single gesture handler',
                'No manifest edits — permissions and FileProvider merge in from the library module'
            ],
            vi: [
                '`rememberMediaPicker` cho Compose, `MediaPickerHelper` cho Activity/Fragment dùng XML',
                'Cropper có tay nắm kéo ở góc và cạnh, dùng một gesture handler duy nhất',
                'Không cần sửa manifest — quyền và FileProvider được merge sẵn từ module thư viện'
            ]
        },
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Coil'],
        links: [{ key: 'source', href: gh('compose-media-picker') }, { key: 'jitpack', href: 'https://jitpack.io/#NtbAndroidDev/compose-media-picker' }],
        media: { type: 'code' }
    },
    uitvic: {
        name: 'uitvic-caption',
        repo: 'uitvic-caption',
        mono: 'V',
        tile: 'linear-gradient(145deg, #c2578f, #3d1631)',
        platform: 'Research',
        kicker: 'Vision-language · PyTorch',
        tagline: { en: 'Teaching a model to describe photos in Vietnamese.', vi: 'Dạy mô hình mô tả ảnh bằng tiếng Việt.' },
        summary: {
            en: 'Two-stage Vietnamese image captioning on UIT-ViIC: BLIP drafts, ViT5 refines — with ablations and BLEU, METEOR, ROUGE-L and CIDEr evaluation.',
            vi: 'Chú thích ảnh tiếng Việt hai tầng trên UIT-ViIC: BLIP tạo bản nháp, ViT5 tinh chỉnh — kèm ablation và đánh giá BLEU, METEOR, ROUGE-L, CIDEr.'
        },
        highlights: {
            en: [
                'Stage one fine-tunes BLIP on UIT-ViIC; stage two trains ViT5 to refine its drafts',
                'Ablation comparing Jaccard-based and random caption pairing for stage two',
                'Reproducible pipeline — configs, training, evaluation and qualitative samples'
            ],
            vi: [
                'Tầng một fine-tune BLIP trên UIT-ViIC; tầng hai huấn luyện ViT5 để tinh chỉnh bản nháp',
                'Ablation so sánh cách ghép caption theo Jaccard với ghép ngẫu nhiên ở tầng hai',
                'Pipeline tái lập được — config, huấn luyện, đánh giá và mẫu định tính'
            ]
        },
        tags: ['Python', 'PyTorch', 'BLIP', 'ViT5'],
        links: [{ key: 'source', href: gh('uitvic-caption') }, { key: 'dataset', href: 'https://www.kaggle.com/datasets/leo040802/uitvic-dataset' }],
        media: { type: 'pipeline' }
    },
    saramin: {
        name: 'saramin-employer-api-demo',
        repo: 'saramin-employer-api-demo',
        mono: 'S',
        tile: 'linear-gradient(145deg, #4a82c0, #152840)',
        platform: 'Backend',
        kicker: 'Python · API integration',
        summary: {
            en: 'Employer API endpoints and a CRUD demo, built for QC testing against the Saramin platform.',
            vi: 'Các endpoint Employer API và demo CRUD, xây dựng để QC kiểm thử với nền tảng Saramin.'
        },
        tags: ['Python', 'REST', 'QC'],
        links: [{ key: 'source', href: gh('saramin-employer-api-demo') }]
    }
};

/* Older work, newest first */
const archive = [
    { repo: 'food_mvvm', name: 'Food App', year: 2023, desc: { en: 'Food-ordering app built to showcase MVVM on Android.', vi: 'Ứng dụng đặt đồ ăn minh hoạ kiến trúc MVVM trên Android.' } },
    { repo: 'job_app', name: 'JobHub', year: 2023, desc: { en: 'Flutter job-seeking app focused on motion and navigation.', vi: 'Ứng dụng tìm việc bằng Flutter, chú trọng chuyển động và điều hướng.' } },
    { repo: 'jobhub_rest', name: 'JobHub REST', year: 2023, desc: { en: 'REST API backend for the JobHub app.', vi: 'REST API backend cho ứng dụng JobHub.' } },
    { repo: 'course_app', name: 'Course App', year: 2023, desc: { en: 'Course UI animated with Rive.', vi: 'Giao diện khoá học với animation Rive.' } },
    { repo: 'study_app', name: 'Study App', year: 2023, desc: { en: 'Study companion built in Flutter.', vi: 'Ứng dụng học tập viết bằng Flutter.' } },
    { repo: 'chatapp_flutter', name: 'Chatty', year: 2023, desc: { en: 'Real-time chat backed by Firebase.', vi: 'Ứng dụng chat thời gian thực với Firebase.' } },
    { repo: 'video_player', name: 'Video Player', year: 2023, desc: { en: 'Video player built in Flutter.', vi: 'Trình phát video viết bằng Flutter.' } },
    { repo: 'chathitu', name: 'Chathitu', year: 2023, desc: { en: 'Native Android chat app in Java.', vi: 'Ứng dụng chat Android native bằng Java.' } },
    { repo: 'chatapp', name: 'ChatApp', year: 2023, desc: { en: 'First Android chat project, in Java.', vi: 'Dự án chat Android đầu tay, viết bằng Java.' } }
];

/* Repos that belong to something shown elsewhere */
const siteRepos = {
    'profile-ntb': { name: 'profile-ntb', desc: { en: 'This portfolio and links page.', vi: 'Chính portfolio và trang links này.' } }
};

/* GitHub snapshot (2026-09-19) — replaced by live data when the API is reachable */
const snapshot = [
    ['lingo', 'Swift', 0, '2026-09-19T15:30:00Z'], ['device-bar', 'Swift', 0, '2026-09-19T15:18:00Z'], ['mectrics', 'Swift', 0, '2026-09-19T15:18:00Z'],
    ['profile-ntb', 'CSS', 0, '2026-09-19T11:00:00Z'], ['moodroll-site', 'HTML', 0, '2026-09-12T10:22:00Z'], ['stickerforge-site', 'CSS', 0, '2026-08-01T06:39:00Z'],
    ['uitvic-caption', 'Python', 0, '2026-06-17T04:09:00Z'], ['saramin-employer-api-demo', 'Python', 0, '2026-05-17T10:22:00Z'],
    ['compose-media-picker', 'Kotlin', 4, '2026-03-27T07:46:00Z'], ['job_app', 'Dart', 1, '2023-10-23T03:41:00Z'], ['food_mvvm', 'Kotlin', 1, '2023-10-05T09:13:00Z'],
    ['jobhub_rest', 'JavaScript', 1, '2023-09-26T08:26:00Z'], ['course_app', 'Dart', 0, '2023-09-25T15:15:00Z'], ['study_app', 'Dart', 1, '2023-09-09T03:25:00Z'],
    ['video_player', 'Dart', 0, '2023-08-30T15:55:00Z'], ['chatapp_flutter', 'Dart', 2, '2023-08-30T13:08:00Z'], ['chathitu', 'Java', 1, '2023-08-16T08:05:00Z'],
    ['chatapp', 'Java', 0, '2023-06-09T06:05:00Z']
].map(([name, lang, stars, pushed]) => ({ name, lang, stars, pushed, desc: null }));

const langColors = {
    Swift: '#f05138', Kotlin: '#a97bff', Dart: '#00b4ab', Python: '#4b8bbe', Java: '#c0823a',
    JavaScript: '#e3c94a', TypeScript: '#3178c6', HTML: '#e3602f', CSS: '#8a6ad6', Shell: '#89e051'
};

/* Curated description for any repo name, used by index tables */
function describe(repo) {
    const p = Object.values(projects).find((x) => x.repo === repo);
    if (p) return { name: p.name, desc: p.summary, project: p };
    const a = archive.find((x) => x.repo === repo);
    if (a) return { name: a.name, desc: a.desc };
    if (siteRepos[repo]) return siteRepos[repo];
    return null;
}

/* ---------- Live GitHub data (shared cache for both pages) ---------- */
async function loadRepos() {
    const KEY = 'ntb-gh-v2';
    const TTL = 30 * 60 * 1000;
    try {
        const cached = JSON.parse(sessionStorage.getItem(KEY) || 'null');
        if (cached && Date.now() - cached.t < TTL && Array.isArray(cached.data) && cached.data.length) return cached.data;
    } catch (e) { /* storage unavailable */ }

    try {
        const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`, {
            headers: { Accept: 'application/vnd.github+json' }
        });
        if (!res.ok) return null;
        const json = await res.json();
        if (!Array.isArray(json)) return null;
        const data = json.filter((r) => !r.fork && !r.archived).map((r) => ({
            name: r.name, lang: r.language, stars: r.stargazers_count, pushed: r.pushed_at, desc: r.description
        }));
        try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), data })); } catch (e) { /* ignore */ }
        return data.length ? data : null;
    } catch (e) {
        return null; // offline or rate-limited: pages keep the snapshot
    }
}

/* ---------- Small shared helpers ---------- */
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
/* escape, then render `code` spans */
const rich = (s) => esc(s).replace(/`([^`]+)`/g, '<code>$1</code>');

function relTime(iso, lang) {
    const diff = (new Date(iso).getTime() - Date.now()) / 1000;
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });
    const units = [['year', 31536000], ['month', 2592000], ['week', 604800], ['day', 86400], ['hour', 3600], ['minute', 60]];
    for (const [unit, s] of units) {
        if (Math.abs(diff) >= s || unit === 'minute') return rtf.format(Math.round(diff / s), unit);
    }
    return '';
}

function initialLang() {
    try {
        const saved = localStorage.getItem('ntb-lang');
        if (saved === 'vi' || saved === 'en') return saved;
    } catch (e) { /* ignore */ }
    return (navigator.language || '').toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

function saveLang(lang) {
    try { localStorage.setItem('ntb-lang', lang); } catch (e) { /* ignore */ }
}

function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('ntb-theme', next); } catch (e) { /* ignore */ }
}

function localTime(lang) {
    return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-GB', {
        hour: '2-digit', minute: '2-digit', hour12: false, timeZone: profile.timeZone
    }).format(new Date());
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (e) {
        return false;
    }
}

return {
    USER, gh, profile, projects, archive, snapshot, langColors, describe, loadRepos,
    esc, rich, relTime, initialLang, saveLang, toggleTheme, localTime, copyText,
    langColor: (l) => langColors[l] || '#8c8a85'
};
})();
