gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   1. DATA
============================================================= */
const myProjects = [
    { name: 'Food App MVVM', desc: 'A modern food delivery application natively built to showcase clean MVVM architecture workflows.', details: 'A native Android food-delivery app demonstrating a production-grade MVVM stack: reactive UI driven by ViewModels and StateFlow, a Repository layer abstracting Retrofit + Room, and dependency injection for testable, decoupled modules.', url: 'https://github.com/NtbAndroidDev/food_mvvm', color: 'linear-gradient(135deg, #FF9D6C, #BB4E75)', icon: 'bx-restaurant', lang: 'Kotlin', tags: ['Kotlin', 'MVVM', 'Retrofit', 'Room', 'Coroutines'] },
    { name: 'Job Finder UX', desc: 'Sleek job seeking application heavily focused on ultra-modern UI/UX and seamless navigation paradigms.', details: 'A cross-platform job-seeking app built in Flutter with a strong emphasis on motion design, fluid hero transitions, and an intuitive navigation flow that keeps candidates one tap from their next opportunity.', url: 'https://github.com/NtbAndroidDev/job_app', color: 'linear-gradient(135deg, #5EFCE8, #736EFE)', icon: 'bx-briefcase', lang: 'Dart', tags: ['Flutter', 'Dart', 'UI/UX', 'Animations'] },
    { name: 'Chatty Flutter', desc: 'A real-time lightweight chat application powered instantly by Firebase real-time database.', details: 'A lightweight real-time messenger backed by Firebase: instant message sync, presence and typing indicators, and authentication — all wired through a clean stream-based architecture.', url: 'https://github.com/NtbAndroidDev/chatapp_flutter', color: 'linear-gradient(135deg, #11998e, #38ef7d)', icon: 'bx-message-rounded-dots', lang: 'Flutter', tags: ['Flutter', 'Firebase', 'Realtime DB', 'Auth'] },
    { name: 'ViT5 Caption', desc: 'Deep Learning pipeline for generating highly-accurate, context-aware image captions using ViT5 models.', details: 'A deep-learning pipeline that fine-tunes ViT5 to generate context-aware Vietnamese image captions — covering data preprocessing, transformer training, and inference packaged for mobile-friendly deployment.', url: 'https://github.com/NtbAndroidDev/uitvic-caption', color: 'linear-gradient(135deg, #8A2387, #E94057, #F27121)', icon: 'bx-brain', lang: 'Python', tags: ['Python', 'ViT5', 'Transformers', 'Deep Learning'] },
    { name: 'Compose Picker', desc: 'A beautifully crafted, high-performance local media picker built exclusively for Jetpack Compose.', details: 'A high-performance media picker built natively for Jetpack Compose: lazy grid loading, smooth selection animations, and a clean composable API designed to drop into any modern Android project.', url: 'https://github.com/NtbAndroidDev/compose-media-picker', color: 'linear-gradient(135deg, #FFB75E, #ED8F03)', icon: 'bx-images', lang: 'Compose', tags: ['Kotlin', 'Jetpack Compose', 'Coil', 'Performance'] }
];

const skills = [
    { name: 'Kotlin',          meta: 'Native Android',     icon: 'bxl-kotlin',      color: '#a97bff' },
    { name: 'Jetpack Compose', meta: 'Declarative UI',     icon: 'bx-layout',       color: '#4285F4' },
    { name: 'Java',            meta: 'JVM foundation',     icon: 'bxl-java',        color: '#f89820' },
    { name: 'Flutter / Dart',  meta: 'Cross-platform',     icon: 'bxl-flutter',     color: '#54C5F8' },
    { name: 'MVVM / Clean',    meta: 'Architecture',       icon: 'bx-sitemap',      color: '#34d399' },
    { name: 'Firebase',        meta: 'Realtime backend',   icon: 'bx-data',         color: '#FFCA28' },
    { name: 'Coroutines',      meta: 'Async / Flow',       icon: 'bx-loader-circle',color: '#7f5af0' },
    { name: 'Python / ML',     meta: 'ViT5 · Deep Learning',icon: 'bxl-python',     color: '#facc15' }
];

const experience = [
    { period: '2023 — Present', role: 'Mobile Software Engineer', desc: 'Building production Android apps with Kotlin & Jetpack Compose, driving clean MVVM architecture and integrating on-device intelligence.' },
    { period: '2022 — 2023',    role: 'Flutter Developer',        desc: 'Delivered cross-platform applications focused on polished UI/UX, real-time features, and Firebase-backed data flows.' },
    { period: '2021 — 2022',    role: 'AI / ML Explorer',         desc: 'Researched deep-learning pipelines including ViT5 models for context-aware image captioning and mobile inference.' }
];

const contacts = [
    { label: 'Email me',   href: 'mailto:contact@ntbandroiddev.dev', icon: 'bx-envelope',  cls: 'primary' },
    { label: 'GitHub',     href: 'https://github.com/NtbAndroidDev',  icon: 'bxl-github',   cls: 'ghost' },
    { label: 'LinkedIn',   href: 'https://www.linkedin.com/',         icon: 'bxl-linkedin', cls: 'ghost' }
];

/* ============================================================
   2. RENDER
============================================================= */
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

document.getElementById('projects-list-scrollable').innerHTML = myProjects.map((repo, i) => `
    <div class="project-card" style="background: ${repo.color}" data-index="${i}" role="button" tabindex="0" aria-label="View details for ${esc(repo.name)}">
        <div class="card-overlay">
            <div class="card-header-flex">
                <div class="card-icon"><i class='bx ${repo.icon}'></i></div>
                <span class="card-lang">${esc(repo.lang)}</span>
            </div>
            <h3>${esc(repo.name)}</h3>
            <p>${esc(repo.desc)}</p>
            <div class="card-actions">
                <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="btn-get">GET</a>
            </div>
        </div>
    </div>`).join('');

document.getElementById('skills-grid').innerHTML = skills.map((s) => `
    <div class="skill-card">
        <i class='bx ${s.icon}' style="color:${s.color}"></i>
        <span><span class="skill-name">${esc(s.name)}</span><span class="skill-meta">${esc(s.meta)}</span></span>
    </div>`).join('');

document.getElementById('timeline').innerHTML = experience.map((e) => `
    <li>
        <span class="tl-period">${esc(e.period)}</span>
        <h3 class="tl-role">${esc(e.role)}</h3>
        <p class="tl-desc">${esc(e.desc)}</p>
    </li>`).join('');

document.getElementById('contact-actions').innerHTML = contacts.map((c) => {
    const external = c.href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${c.href}" class="contact-btn ${c.cls}"${external}><i class='bx ${c.icon}'></i>${esc(c.label)}</a>`;
}).join('');

document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   3. REVEAL-ON-SCROLL for content sections
============================================================= */
const revealTargets = document.querySelectorAll(
    '#content .section-title, #content .lead, #content .stats-grid, #content .skills-grid, #content .timeline, #content .contact-actions'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealTargets.forEach((el) => io.observe(el));
} else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
}

/* ============================================================
   4. FLOATING NAV — reveal after the first viewport, brand to top
============================================================= */
const nav = document.getElementById('site-nav');
const onScrollNav = () => {
    if (window.scrollY > window.innerHeight * 0.6) nav.classList.add('visible');
    else nav.classList.remove('visible');
};
window.addEventListener('scroll', onScrollNav, { passive: true });
onScrollNav();

document.getElementById('nav-brand').addEventListener('click', (e) => {
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
});

// Scroll-spy: highlight the nav link of the section currently in view
const navLinkFor = {};
document.querySelectorAll('.nav-links a').forEach((a) => { navLinkFor[a.getAttribute('href').slice(1)] = a; });
const spySections = document.querySelectorAll('#content .section');
if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const link = navLinkFor[entry.target.id];
            if (!link) return;
            Object.values(navLinkFor).forEach((a) => a.classList.remove('active'));
            link.classList.add('active');
        });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    spySections.forEach((s) => spy.observe(s));
}

/* ============================================================
   5. PROJECT MODAL
============================================================= */
const modal = document.getElementById('project-modal');
const modalHead = document.getElementById('modal-head');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
let lastFocused = null;

function openModal(repo) {
    lastFocused = document.activeElement;
    modalHead.style.background = repo.color;
    modalHead.innerHTML = `
        <div class="modal-icon"><i class='bx ${repo.icon}'></i></div>
        <h3 id="modal-title">${esc(repo.name)}</h3>
        <span class="modal-lang">${esc(repo.lang)}</span>`;
    modalBody.innerHTML = `
        <p>${esc(repo.details || repo.desc)}</p>
        <div class="modal-tags">${(repo.tags || []).map((t) => `<span>${esc(t)}</span>`).join('')}</div>
        <a class="modal-link" href="${repo.url}" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i>View on GitHub</a>`;
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('open'));
    modalClose.focus();
}

function closeModal() {
    modal.classList.remove('open');
    const finish = () => { modal.hidden = true; modal.removeEventListener('transitionend', finish); };
    modal.addEventListener('transitionend', finish);
    if (lastFocused) lastFocused.focus();
}

// Open from a card (but let the GET button do its own thing)
const projectsList = document.getElementById('projects-list-scrollable');
const cardToProject = (target) => {
    const card = target.closest('.project-card');
    if (!card || target.closest('.btn-get')) return null;
    return myProjects[Number(card.dataset.index)];
};
projectsList.addEventListener('click', (e) => {
    const repo = cardToProject(e.target);
    if (repo) openModal(repo);
});
projectsList.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const repo = cardToProject(e.target);
    if (repo) { e.preventDefault(); openModal(repo); }
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

/* ============================================================
   6. HERO SCROLL TIMELINE (responsive via matchMedia)
   - Triggered on #hero-experience so content below is NOT
     stretched into the scrub range.
   - matchMedia auto-reverts + rebuilds on breakpoint/resize,
     and skips entirely under prefers-reduced-motion.
============================================================= */
const mm = gsap.matchMedia();

mm.add(
    {
        isDesktop: '(min-width: 769px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
    },
    (ctx) => {
        const { isDesktop, reduceMotion } = ctx.conditions;

        // Reduced motion: CSS already reveals all content statically. Do nothing.
        if (reduceMotion) return;

        const shift = isDesktop ? window.innerWidth * 0.25 : 0;

        // Initial layout
        gsap.set('#the-phone', { x: shift });
        gsap.set('#text-1', { autoAlpha: 1, y: 0, scale: 1 });
        gsap.set('#screen-1', { autoAlpha: 1 });
        gsap.set('#text-2', { y: 50, scale: 0.95 });
        gsap.set('#text-3', { y: 50, scale: 0.95 });
        gsap.set('#fixed-viewport', { autoAlpha: 1 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero-experience',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5
            }
        });

        // Scene 0 -> 1: phone tilts left, Tech Stack screen
        tl.to('#text-1', { autoAlpha: 0, y: -50, scale: 0.95, duration: 0.5 }, 0)
          .to('#the-phone', { rotateY: 25, rotateX: 5, x: -shift, boxShadow: '30px 30px 60px rgba(0,0,0,0.8)', duration: 1 }, 0)
          .to('#text-2', { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, 0.5)
          .to('#screen-1', { autoAlpha: 0, duration: 0.2 }, 0.4)
          .to('#screen-2', { autoAlpha: 1, duration: 0.2 }, 0.6);

        // Scene 1 -> 2: spin to back, move right, AI screen
        tl.to('#text-2', { autoAlpha: 0, y: -50, scale: 0.95, duration: 0.5 }, 1.5)
          .to('#the-phone', { rotateY: 180 - 25, x: shift, boxShadow: '-30px 30px 60px rgba(0,0,0,0.8)', duration: 1.5 }, 1.5)
          .to('#text-3', { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, 2)
          .to('#screen-2', { autoAlpha: 0, duration: 0.1 }, 2)
          .to('#screen-3', { autoAlpha: 1, duration: 0.1 }, 2.1);

        // Scene 2 -> 3: spin back, center, scale up, Gallery
        tl.to('#text-3', { autoAlpha: 0, y: -50, scale: 0.95, duration: 0.5 }, 3.5)
          .to('#the-phone', { rotateY: 360, rotateX: 0, x: 0, y: 0, scale: isDesktop ? 1.5 : 1.1, boxShadow: '0 50px 100px rgba(0,0,0,0.9)', duration: 1.5 }, 3.5)
          .to('#screen-3', { autoAlpha: 0, duration: 0.2 }, 3.8)
          .to('#screen-4', { autoAlpha: 1, duration: 0.2 }, 4.0);

        // Scene 4: native gallery scroll inside the phone
        tl.to('#projects-list-scrollable', {
            y: () => {
                const list = document.getElementById('projects-list-scrollable');
                const screenHeight = document.getElementById('screen-4').clientHeight;
                const totalScroll = list.scrollHeight - screenHeight + 150;
                return -Math.max(totalScroll, 0);
            },
            duration: 3,
            ease: 'power1.inOut'
        }, 5.0);

        // Fade the whole hero out so the content sections take over cleanly
        tl.to('#fixed-viewport', { autoAlpha: 0, duration: 0.5 }, 8.0);
    }
);
