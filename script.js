document.addEventListener('DOMContentLoaded', () => {
    // 1. Clock Logic
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        // Format to HH:MM (e.g. 09:05)
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        const timeStr = `${hours}:${minutes}`;
        document.getElementById('status-time').textContent = timeStr;
        document.getElementById('lock-time-large').textContent = timeStr;

        // Date formatting
        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        document.getElementById('lock-date').textContent = now.toLocaleDateString('en-US', options);
    }
    
    // Update clock immediately and then every minute
    updateClock();
    setInterval(updateClock, 1000 * 60);

    // 2. Audio Effects (Optional immersion)
    const unlockSound = document.getElementById('unlock-sound');
    const clickSound = document.getElementById('click-sound');

    function playClick() {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => {}); // catch auto-play blocks
    }

    // 3. Unlock Logic
    const lockScreen = document.getElementById('lock-screen');
    const unlockBtn = document.getElementById('unlock-btn');

    unlockBtn.addEventListener('click', () => {
        // Play sound
        unlockSound.currentTime = 0;
        unlockSound.play().catch(e => {});

        lockScreen.classList.add('slide-up');
        
        // Remove class after animation to hide it completely (optional but clean)
        setTimeout(() => {
            lockScreen.classList.remove('active');
        }, 500); 
    });

    // 4. App Navigation Logic
    const homeScreen = document.getElementById('home-screen');
    const appIcons = document.querySelectorAll('.app-icon:not(.fake-app)');
    const fakeApps = document.querySelectorAll('.fake-app');
    const allViews = document.querySelectorAll('.view');
    const backBtn = document.getElementById('btn-back');
    const homeBtn = document.getElementById('btn-home');
    const recentBtn = document.getElementById('btn-recent');

    let currentApp = null;

    // Open an App
    appIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            playClick();
            const appId = icon.getAttribute('data-app');
            const targetApp = document.getElementById(appId);
            
            if (targetApp) {
                targetApp.classList.add('active');
                currentApp = targetApp;
            }
        });
    });

    fakeApps.forEach(icon => {
        icon.addEventListener('click', () => {
            playClick();
            alert("App is not installed. Please try 'About', 'Projects', 'Tech Stack' or 'Contact' instead!");
        });
    });

    // Go Home
    function goHome() {
        if(lockScreen.classList.contains('active')) return; // Dont go home if locked
        playClick();
        // Hide all app windows
        document.querySelectorAll('.app-window').forEach(w => {
            w.classList.remove('active');
        });
        currentApp = null;
    }

    homeBtn.addEventListener('click', goHome);
    
    backBtn.addEventListener('click', () => {
        // Simple back logic: if an app is open, close it (go home)
        if (currentApp) {
            goHome();
        }
    });

    recentBtn.addEventListener('click', () => {
        playClick();
        alert("No recent apps. To clear cache, enjoy the smoothness of this fake OS!");
    });


    // 5. Populate Projects Data
    const repositories = [
        {
            name: "compose-media-picker",
            description: "A modern media picker for Jetpack Compose.",
            language: "Kotlin",
            url: "https://github.com/NtbAndroidDev/compose-media-picker",
            icon: "bx-image-add"
        },
        {
            name: "uitvic-caption",
            description: "Deep Learning project for generating image captions using ViT5 and Python.",
            language: "Python",
            url: "https://github.com/NtbAndroidDev/uitvic-caption",
            icon: "bx-brain"
        },
        {
            name: "chatapp_flutter",
            description: "A real-time chat application built with flutter.",
            language: "Dart",
            url: "https://github.com/NtbAndroidDev/chatapp_flutter",
            icon: "bx-message-square-dots"
        },
        {
            name: "job_app",
            description: "Job seeking application focused on modern UI/UX.",
            language: "Dart",
            url: "https://github.com/NtbAndroidDev/job_app",
            icon: "bx-briefcase"
        },
        {
            name: "food_mvvm",
            description: "Food delivery application showcasing MVVM architecture in Android.",
            language: "Kotlin",
            url: "https://github.com/NtbAndroidDev/food_mvvm",
            icon: "bx-restaurant"
        }
    ];

    const reposContainer = document.getElementById('repos-container');

    repositories.forEach(repo => {
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        
        storeCard.innerHTML = `
            <div class="store-icon"><i class='bx ${repo.icon}'></i></div>
            <div class="store-info">
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <span class="skill-item" style="display:inline-block; font-size:0.75rem; padding: 3px 8px; margin-bottom:10px;">${repo.language}</span>
                <br>
                <a href="${repo.url}" target="_blank" class="install-btn">OPEN IN GITHUB</a>
            </div>
        `;
        reposContainer.appendChild(storeCard);
    });

});
