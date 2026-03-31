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
    const appIcons = document.querySelectorAll('.app-icon:not(.fake-app)');
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

    // 5. Fetch Github Data for "Google Play / Projects"
    const reposContainer = document.getElementById('repos-container');
    const username = 'NtbAndroidDev';

    // Highlighted projects with specific icons
    const repoIcons = {
        'compose-media-picker': 'bx-image-add',
        'uitvic-caption': 'bx-brain',
        'chatapp_flutter': 'bx-message-square-dots',
        'job_app': 'bx-briefcase',
        'food_mvvm': 'bx-restaurant'
    };

    reposContainer.innerHTML = `<div style="text-align:center; padding: 20px;"><i class='bx bx-loader bx-spin' style="font-size:2rem; color:var(--blue)"></i></div>`;

    fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=10`)
        .then(response => response.json())
        .then(data => {
            reposContainer.innerHTML = '';
            
            if(data.message) {
                reposContainer.innerHTML = `<p style="text-align:center; padding:20px;">Cannot connect to GitHub Servers.</p>`;
                return;
            }

            data.forEach(repo => {
                if (repo.fork) return; 
                
                const storeCard = document.createElement('div');
                storeCard.className = 'store-card';
                
                // Assign mapped icon or generic
                const iconClass = repoIcons[repo.name] || 'bx-code';
                
                // Truncate desc
                const desc = repo.description || 'No description available for this repository.';
                const shortDesc = desc.length > 70 ? desc.substring(0, 70) + '...' : desc;

                storeCard.innerHTML = `
                    <div class="store-icon"><i class='bx ${iconClass}'></i></div>
                    <div class="store-info">
                        <h3>${repo.name}</h3>
                        <p>${shortDesc}</p>
                        ${repo.language ? `<span class="skill-item" style="display:inline-block; font-size:0.75rem; padding: 3px 8px; margin-bottom:10px;"><i class='bx bxl-${repo.language.toLowerCase()}'></i> ${repo.language}</span>` : ''}
                        <br>
                        <a href="${repo.html_url}" target="_blank" class="install-btn">OPEN APP</a>
                    </div>
                `;
                reposContainer.appendChild(storeCard);
            });
        })
        .catch(err => {
            reposContainer.innerHTML = `<p style="text-align:center;">Failed to load Play Store. Please check internet connection.</p>`;
        });
});
