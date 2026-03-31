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

// Scene 0 -> 1: Phone reveals its left side & Text 2 fades in
tl.to("#text-1", { opacity: 0, y: -50, duration: 0.5 }, 0)
  .to("#the-phone", { 
      rotateY: -35, // Tilt phone to face slightly right, exposing left back
      rotateX: 5,
      x: window.innerWidth > 768 ? window.innerWidth * 0.25 : 0, 
      boxShadow: "-30px 30px 60px rgba(0,0,0,0.8)",
      duration: 1 
  }, 0)
  // Text 2 appears on the left
  .to("#text-2", { opacity: 1, y: 0, duration: 0.5 }, 0.5)
  // Crossfade screen inside phone to Tech Stack
  .to("#screen-1", { opacity: 0, duration: 0.2 }, 0.4)
  .to("#screen-2", { opacity: 1, duration: 0.2 }, 0.6);

// Scene 1 -> 2: Phone spins 180 to show the BACK (Camera Bump) and moves left
tl.to("#text-2", { opacity: 0, y: -50, duration: 0.5 }, 1.5)
  .to("#the-phone", { 
      rotateY: 180 + 35, // Spin completely backwards facing slightly left
      x: window.innerWidth > 768 ? -window.innerWidth * 0.25 : 0,
      boxShadow: "30px 30px 60px rgba(0,0,0,0.8)",
      duration: 1.5 
  }, 1.5)
  // Text 3 appears on the right
  .to("#text-3", { opacity: 1, y: 0, duration: 0.5 }, 2)
  // Behind the scenes, change screen content while phone is facing away
  .to("#screen-2", { opacity: 0, duration: 0.1 }, 2)
  .to("#screen-3", { opacity: 1, duration: 0.1 }, 2.1);

// Scene 2 -> 3: Phone spins back around 360, centers, and SCALES UP to fill screen
tl.to("#text-3", { opacity: 0, y: -50, duration: 0.5 }, 3.5)
  .to("#text-4", { opacity: 1, y: 0, duration: 0.5 }, 4)
  .to("#the-phone", { 
      rotateY: 360, 
      rotateX: 0,
      x: 0, 
      y: window.innerWidth > 768 ? 100 : 50,
      scale: window.innerWidth > 768 ? 1.5 : 1.2, // Pop out slightly
      boxShadow: "0 50px 100px rgba(0,0,0,0.9)",
      duration: 1.5 
  }, 3.5)
  .to("#screen-3", { opacity: 0, duration: 0.2 }, 3.8)
  .to("#screen-4", { opacity: 1, duration: 0.2 }, 4.0);

// Let the user scroll inside the phone!
// At the end of the timeline, enable pointer events on the container.
tl.eventCallback("onComplete", () => {
    document.querySelector('.fixed-viewport').style.pointerEvents = 'auto';
});
tl.eventCallback("onReverseComplete", () => {
    document.querySelector('.fixed-viewport').style.pointerEvents = 'none';
});


// 2. Static Portfolio Data (Avoid GitHub API Rate Limits)
const reposContainer = document.getElementById('projects-list-scrollable');

const myProjects = [
    {
        name: 'food_mvvm',
        desc: 'Food delivery application showcasing MVVM architecture in Android natively. Built with Kotlin.',
        url: 'https://github.com/NtbAndroidDev/food_mvvm'
    },
    {
        name: 'job_app',
        desc: 'Job seeking application focused on modern UI/UX and seamless navigation. Built with Flutter/Dart.',
        url: 'https://github.com/NtbAndroidDev/job_app'
    },
    {
        name: 'chatapp_flutter',
        desc: 'A real-time chat application built with Flutter & Firebase. Built with Dart.',
        url: 'https://github.com/NtbAndroidDev/chatapp_flutter'
    },
    {
        name: 'uitvic-caption',
        desc: 'Deep Learning project for generating image captions using ViT5 and Python.',
        url: 'https://github.com/NtbAndroidDev/uitvic-caption'
    },
    {
        name: 'compose-media-picker',
        desc: 'A modern, high-performance media picker for Jetpack Compose. Built with Kotlin.',
        url: 'https://github.com/NtbAndroidDev/compose-media-picker'
    }
];

let htmlContent = '';
myProjects.forEach(repo => {
    htmlContent += `
        <div class="project-card">
            <h3>${repo.name}</h3>
            <p>${repo.desc}</p>
            <a href="${repo.url}" target="_blank" class="btn-open">View on GitHub</a>
        </div>
    `;
});
reposContainer.innerHTML = htmlContent;

// Init layout
gsap.set("#text-1", { opacity: 1, y: 0 });
