# NtbAndroidDev — Portfolio & Links

Personal site of Nguyễn Thanh Bình, served by GitHub Pages:

- **Portfolio** — https://ntbandroiddev.github.io/profile-ntb/
- **Links page** — https://ntbandroiddev.github.io/profile-ntb/links/

Plain HTML, CSS and JavaScript. No build step, no framework. Pushing to `main` deploys via
`.github/workflows/deploy.yml`.

## Layout

| Path | What it is |
| --- | --- |
| `data.js` | **Shared content** for both pages: profile, projects (EN/VI summaries, highlights, media), archive, GitHub snapshot, helpers. Edit projects here once. |
| `index.html`, `styles.css`, `script.js` | Portfolio: hero with an interactive macOS desk, selected work, approach, build log, repository index, contact. |
| `links/` | Link-in-bio page (`index.html`, `links.css`, `links.js`) — vCard, QR code, share, copy email. |
| `assets/` | Avatar, app icons and `shots/` (screenshots taken from each project's own repo). |
| `404.html`, `robots.txt`, `sitemap.xml`, `manifest.webmanifest` | Not-found page (uses absolute `/profile-ntb/` paths, since Pages serves it at any depth) and search/PWA metadata. |
| `assets/og.png`, `assets/og-links.png`, `assets/touch-icon.png` | Social share cards (1200×630) and the home-screen icon. Regenerate by rendering an HTML card at that size and screenshotting it. |

## Things worth knowing

- **Live GitHub data.** Both pages fetch `api.github.com/users/NtbAndroidDev/repos` (cached 30 min in
  `sessionStorage`) for stars, languages and update times. If the API is unreachable or rate-limited
  they fall back to the snapshot in `data.js`. New repos appear automatically in the portfolio index
  and under "Fresh on GitHub" on the links page.
- **The desk** (`#desk` in `index.html`, section 5 of `script.js`) rebuilds Mectrics, DeviceBar and
  Lingo as small menu-bar mocks. Visitors can click them; **Start demo** runs a scripted cursor through
  the same click handlers. A real click cancels the autopilot.
- **The guide** (section 6 of `script.js`) is the "sample user" cursor that walks the page as you
  scroll. Any element with `data-guide="…"` becomes a stop; its caption comes from the `say*` strings.
  It is hidden on touch screens, narrow viewports and with `prefers-reduced-motion`.
- **Language & theme.** EN/VI and light/dark are shared between both pages via `localStorage`
  (`ntb-lang`, `ntb-theme`); the default follows the browser.

## Adding a project

1. Add an entry to `projects` in `data.js` (copy an existing one; `media.type` is one of
   `shot`, `phones`, `stickers`, `code`, `pipeline`).
2. Put images in `assets/` or `assets/shots/`.
3. List its key in `CASE_ORDER` (and optionally `DOCK`) in `script.js`, and in a group in `links/links.js`.
