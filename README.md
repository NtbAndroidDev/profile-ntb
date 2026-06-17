# NtbAndroidDev Profile Website

Welcome to your personal portfolio website! This repository contains a beautiful, responsive, and modern profile page built with HTML, CSS, and JavaScript. It's designed to showcase your skills, experience, and latest projects.

## 🚀 Getting Started with GitHub Pages

To host this website for free on GitHub, follow these simple steps:

### 1. Create a New Repository
1. Go to your GitHub account and click **New Repository**.
2. Name the repository exactly: `NtbAndroidDev.github.io`
   *(This tells GitHub to automatically host the site).*
3. **Do not** initialize it with a README, .gitignore, or license (leave them unchecked).
4. Click **Create repository**.

### 2. Push Your Code to GitHub
Open your terminal, navigate to this project folder, and run the following commands (replace the URL with your new repository's URL if different):

```bash
git remote add origin https://github.com/NtbAndroidDev/NtbAndroidDev.github.io.git
git branch -M main
git push -u origin main
```

### 3. See it Live!
Once pushed, GitHub will automatically deploy your site. 
Wait a minute or two, then visit: **https://NtbAndroidDev.github.io**

## 🛠 Setup & Customization
- **index.html**: Page structure. The `#hero-experience` block holds the scroll-driven 3D phone animation; the `#content` block holds the standard About / Skills / Experience / Contact sections.
- **styles.css**: Colors, fonts and the glassmorphism dark theme. Fully responsive (mobile breakpoints at 900/768/480px) and respects `prefers-reduced-motion` — when motion is reduced, all content is shown statically instead of being scroll-driven.
- **script.js**: All content is data-driven. Edit the arrays at the top to update your portfolio:
  - `myProjects` — the App Store style gallery cards inside the phone.
  - `skills` — the toolkit grid.
  - `experience` — the timeline entries.
  - `contacts` — the contact buttons (update the `mailto:` and social links!).

The hero animation is built with GSAP `matchMedia`, so it automatically rebuilds on resize / orientation change and disables itself for reduced-motion users.

Enjoy your new profile!
