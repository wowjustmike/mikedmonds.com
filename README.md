# mikedmonds.com — Field Notes

Professional site for Mike Edmonds. Plain HTML/CSS/JS, no build step. Netlify deploys on every push to `main`.

## Run locally
```
npx serve .
```
Then open http://localhost:3000 in Chrome. (Scroll animations need Chrome, Edge or Safari 26+.)

## Layout
- `index.html`, `about.html`, `work.html`, `thanks.html`, `404.html`
- `log/index.html` — the log; `log/<slug>.html` — one file per entry
- `styles.css` — everything, including the scroll animations at the bottom
- `main.js` — post toggle + log filter

## Adding a log entry
1. Copy an existing file in `log/`, rename it, edit the text.
2. Add a row for it in `log/index.html` (and on `index.html` if it should be in "Latest").
3. Add it to `sitemap.xml`.

## Contact form
Uses Netlify Forms. Turn on email notifications in Netlify: Site configuration → Forms → Form notifications.

## TODO before switching the domain
- Copy `privacy.html` over from the old site repo — the Google OAuth app ("Marvin") lists https://www.mikedmonds.com/privacy.html.
