document.addEventListener('DOMContentLoaded', () => {
    // 1. Clock Logic
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        const timeStr = `${hours}:${minutes}`;
        document.getElementById('status-time').textContent = timeStr;
        document.getElementById('lock-time-large').textContent = timeStr;

        const options = { weekday: 'short', month: 'short', day: 'numeric' };
        document.getElementById('lock-date').textContent = now.toLocaleDateString('en-US', options);
    }
    
    updateClock();
    setInterval(updateClock, 1000 * 60);

    // 2. Audio Effects
    const unlockSound = document.getElementById('unlock-sound');
    const clickSound = document.getElementById('click-sound');

    function playClick() {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => {}); 
    }

    // 3. Unlock Logic
    const lockScreen = document.getElementById('lock-screen');
    const unlockBtn = document.getElementById('unlock-btn');

    unlockBtn.addEventListener('click', () => {
        unlockSound.currentTime = 0;
        unlockSound.play().catch(e => {});

        lockScreen.classList.add('slide-up');
        setTimeout(() => {
            lockScreen.classList.remove('active');
        }, 500); 
    });

    // 4. App Navigation Logic
    const appIcons = document.querySelectorAll('.app-icon:not(.fake-app):not(.repo-app)');
    const repoApps = document.querySelectorAll('.repo-app');
    const fakeApps = document.querySelectorAll('.fake-app');
    const homeIndicator = document.getElementById('btn-home');
    const headerBackBtns = document.querySelectorAll('.header-back-btn');

    let currentApp = null;

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
            alert("App is not installed! Try 'About', 'Projects', 'Tech Stack' or 'Contact'.");
        });
    });

    function goHome() {
        if(lockScreen.classList.contains('active')) return;
        playClick();
        document.querySelectorAll('.app-window').forEach(w => {
            w.classList.remove('active');
        });
        currentApp = null;
    }

    homeIndicator.addEventListener('click', goHome);
    
    // Bind all Header Back buttons
    headerBackBtns.forEach(btn => {
        btn.addEventListener('click', goHome);
    });

    // Populate and open dynamic repo window
    const repoTemplate = document.getElementById('app-repo-template');
    repoApps.forEach(icon => {
        icon.addEventListener('click', () => {
            playClick();
            
            // Extract data
            const repoId = icon.getAttribute('data-repo');
            const name = icon.getAttribute('data-name');
            const desc = icon.getAttribute('data-desc');
            const lang = icon.getAttribute('data-lang');
            const iconClass = icon.getAttribute('data-icon');
            const color = icon.getAttribute('data-color');

            // Populate Template
            document.getElementById('repo-header-title').textContent = name;
            document.getElementById('repo-title').textContent = name;
            document.getElementById('repo-desc').textContent = desc;
            document.getElementById('repo-lang').innerHTML = `<i class='bx bxl-${lang.toLowerCase()}'></i> ${lang}`;
            document.getElementById('repo-github-btn').href = `https://github.com/NtbAndroidDev/${repoId}`;
            
            const bigIcon = document.getElementById('repo-big-icon');
            bigIcon.innerHTML = `<i class='bx ${iconClass}'></i>`;
            bigIcon.style.background = color;
            bigIcon.style.color = color.includes('#fff') ? '#000' : '#fff'; // Adjust icon color if background is white

            // Open Window
            repoTemplate.classList.add('active');
            currentApp = repoTemplate;
        });
    });

});
