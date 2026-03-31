document.addEventListener('DOMContentLoaded', () => {
    // Current Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Data mapped from GitHub API
    const repositories = [
        {
            name: "compose-media-picker",
            description: "A modern media picker for Jetpack Compose.",
            language: "Kotlin",
            url: "https://github.com/NtbAndroidDev/compose-media-picker"
        },
        {
            name: "uitvic-caption",
            description: "Deep Learning project for generating image captions using ViT5 and Python.",
            language: "Python",
            url: "https://github.com/NtbAndroidDev/uitvic-caption"
        },
        {
            name: "chatapp_flutter",
            description: "A real-time chat application built with flutter.",
            language: "Dart",
            url: "https://github.com/NtbAndroidDev/chatapp_flutter"
        },
        {
            name: "job_app",
            description: "Job seeking application focused on modern UI/UX.",
            language: "Dart",
            url: "https://github.com/NtbAndroidDev/job_app"
        },
        {
            name: "course_app",
            description: "Educational application built by ntbinh.",
            language: "Dart",
            url: "https://github.com/NtbAndroidDev/course_app"
        },
        {
            name: "food_mvvm",
            description: "Food delivery application showcasing MVVM architecture in Android.",
            language: "Kotlin",
            url: "https://github.com/NtbAndroidDev/food_mvvm"
        }
    ];

    const grid = document.getElementById('repos-grid');

    repositories.forEach((repo, index) => {
        const desc = repo.description || 'Awesome project by NtbAndroidDev';
        
        const card = document.createElement('a');
        card.href = repo.url;
        card.target = "_blank";
        card.className = "card";
        
        // Staggered animation delay
        card.style.transitionDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="card-header">
                <i class='bx bx-book-bookmark'></i>
                <span class="card-title">${repo.name}</span>
            </div>
            <p class="card-desc">${desc}</p>
            <div class="card-footer">
                <div class="language">
                    <span class="lang-dot lang-${repo.language}"></span>
                    <span>${repo.language}</span>
                </div>
                <div class="stats">
                    <i class='bx bx-star'></i>
                    <span>Star</span>
                </div>
            </div>
        `;
        
        grid.appendChild(card);

        // Trigger animation after brief timeout for staggered effect
        setTimeout(() => {
            card.classList.add('visible');
        }, 100);
    });
});
