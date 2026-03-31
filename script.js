gsap.registerPlugin(ScrollTrigger);

// 1. Initial Timeline Setup
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#smooth-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5 // Smooth scrubbing parameter
    }
});

/**
 * GSAP SCROLL LOGIC
 * The scrub traverses the timeline based on scroll percentage.
 */

// Scene 0 -> 1: Phone reveals its RIGHT side & Text 2 fades in
tl.to("#text-1", { opacity: 0, y: -50, scale: 0.95, duration: 0.5 }, 0)
  .to("#the-phone", { 
      rotateY: 25, // Tilt phone slightly left,
      rotateX: 5,
      x: window.innerWidth > 768 ? -window.innerWidth * 0.25 : 0,  // Move phone to the left
      boxShadow: "30px 30px 60px rgba(0,0,0,0.8)",
      duration: 1 
  }, 0)
  // Text 2 appears on the right
  .to("#text-2", { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 0.5)
  // Crossfade screen inside phone to Tech Stack
  .to("#screen-1", { opacity: 0, duration: 0.2 }, 0.4)
  .to("#screen-2", { opacity: 1, duration: 0.2 }, 0.6);

// Scene 1 -> 2: Phone spins 180 to show the BACK (Camera Bump) and moves RIGHT
tl.to("#text-2", { opacity: 0, y: -50, scale: 0.95, duration: 0.5 }, 1.5)
  .to("#the-phone", { 
      rotateY: 180 - 25, // Spin completely backwards facing slightly right
      x: window.innerWidth > 768 ? window.innerWidth * 0.25 : 0, // Move phone to the right
      boxShadow: "-30px 30px 60px rgba(0,0,0,0.8)",
      duration: 1.5 
  }, 1.5)
  // Text 3 appears on the left
  .to("#text-3", { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 2)
  // Behind the scenes, change screen content while phone is facing away
  .to("#screen-2", { opacity: 0, duration: 0.1 }, 2)
  .to("#screen-3", { opacity: 1, duration: 0.1 }, 2.1);

// Scene 2 -> 3: Phone spins back around 360, centers, and SCALES UP to fill screen
tl.to("#text-3", { opacity: 0, y: -50, scale: 0.95, duration: 0.5 }, 3.5)
  .to("#the-phone", { 
      rotateY: 360, 
      rotateX: 0,
      x: 0, 
      y: 0, // Keep it perfectly centered
      scale: window.innerWidth > 768 ? 1.5 : 1.1, // Scale up
      boxShadow: "0 50px 100px rgba(0,0,0,0.9)",
      duration: 1.5 
  }, 3.5)
  .to("#screen-3", { opacity: 0, duration: 0.2 }, 3.8)
  .to("#screen-4", { opacity: 1, duration: 0.2 }, 4.0);

// Let the 3D phone timeline end. Note: Gallery scrolling is mapped below!
// -------------------------------------------------------------

// 2. Static Portfolio Data (Avoid GitHub API Rate Limits)
const reposContainer = document.getElementById('projects-list-scrollable');

const myProjects = [
    {
        name: 'Food App MVVM',
        desc: 'A modern food delivery application natively built to showcase clean MVVM architecture workflows.',
        url: 'https://github.com/NtbAndroidDev/food_mvvm',
        color: 'linear-gradient(135deg, #FF9D6C, #BB4E75)',
        icon: 'bx-restaurant',
        lang: 'Kotlin'
    },
    {
        name: 'Job Finder UX',
        desc: 'Sleek job seeking application heavily focused on ultra-modern UI/UX and seamless navigation paradigms.',
        url: 'https://github.com/NtbAndroidDev/job_app',
        color: 'linear-gradient(135deg, #5EFCE8, #736EFE)',
        icon: 'bx-briefcase',
        lang: 'Dart'
    },
    {
        name: 'Chatty Flutter',
        desc: 'A real-time lightweight chat application powered instantly by Firebase real-time database.',
        url: 'https://github.com/NtbAndroidDev/chatapp_flutter',
        color: 'linear-gradient(135deg, #11998e, #38ef7d)',
        icon: 'bx-message-rounded-dots',
        lang: 'Flutter'
    },
    {
        name: 'ViT5 Caption',
        desc: 'Deep Learning pipeline for generating highly-accurate, context-aware image captions using ViT5 models.',
        url: 'https://github.com/NtbAndroidDev/uitvic-caption',
        color: 'linear-gradient(135deg, #8A2387, #E94057, #F27121)',
        icon: 'bx-brain',
        lang: 'Python'
    },
    {
        name: 'Compose Picker',
        desc: 'A beautifully crafted, high-performance local media picker built exclusively for Jetpack Compose.',
        url: 'https://github.com/NtbAndroidDev/compose-media-picker',
        color: 'linear-gradient(135deg, #FFB75E, #ED8F03)',
        icon: 'bx-images',
        lang: 'Compose'
    }
];

let htmlContent = '';
myProjects.forEach(repo => {
    htmlContent += `
        <div class="project-card" style="background: ${repo.color}">
            <div class="card-overlay">
                <div class="card-header-flex">
                    <div class="card-icon"><i class='bx ${repo.icon}'></i></div>
                    <span class="card-lang">${repo.lang}</span>
                </div>
                <h3>${repo.name}</h3>
                <p>${repo.desc}</p>
                <div class="card-actions">
                    <a href="${repo.url}" target="_blank" class="btn-get">GET</a>
                </div>
            </div>
        </div>
    `;
});
reposContainer.innerHTML = htmlContent;

// Scene 4: NATIVE GSAP GALLERY SCROLLING!
// Once the phone is fully scaled and gallery is visible, the next 200vh of body scrolling will physically slide the projects up!
tl.to("#projects-list-scrollable", {
    y: function() {
        const list = document.getElementById('projects-list-scrollable');
        const screenHeight = document.getElementById('screen-4').clientHeight;
        const totalScroll = list.scrollHeight - screenHeight + 150; // 150px padding slack
        return -Math.max(totalScroll, 0); // Slide up exactly how tall the content is
    },
    duration: 3, 
    ease: "power1.inOut"
}, 5.0);

// Init layout: phone on the right, text 1 on the left
gsap.set("#the-phone", { x: window.innerWidth > 768 ? window.innerWidth * 0.25 : 0 });
gsap.set("#text-1", { opacity: 1, y: 0, scale: 1 });
gsap.set("#text-2", { y: 50, scale: 0.95 });
gsap.set("#text-3", { y: 50, scale: 0.95 });
