# AI Creator Bundle: build and deploy

Static site: HTML, CSS and vanilla JavaScript. No framework, no server code, no database.
The GitHub repository is the source of truth. Everything needed to rebuild and publish the site is here.

- Repository: https://github.com/sergiimariukhnyk-cpu/ai-creator-bundle-site (branch `main`)
- Preview (auto-deployed from `main` by Netlify): https://voluble-biscotti-57f8b9.netlify.app
- Production hosting (FTPS): https://aicreationlab.top

The site is in **preview mode**: `noindex` on every page and no payment link yet. See `launch-checklist.md` for what blocks sales.

## Requirements
- Python 3.9 or newer
- One Python package, `rjsmin`, which minifies the JavaScript:

```bash
python3 -m pip install rjsmin
```

No Node.js is needed. (Alternative minifier if you prefer: `npx terser config.js -c -m -o config.min.js` and the same for `app.js`.)

## Restore from GitHub
```bash
git clone https://github.com/sergiimariukhnyk-cpu/ai-creator-bundle-site.git
cd ai-creator-bundle-site
python3 -m pip install rjsmin
python3 scripts/build.py
```

## Build command
After editing `config.js` or `app.js` you must rebuild the minified files that the pages load:

```bash
python3 scripts/build.py
```

This writes `config.min.js` and `app.min.js` next to the sources. Never edit the `.min.js` files by hand, and commit them together with the sources.

At launch only, to write the production `robots.txt` and `sitemap.xml` for the final domain:

```bash
python3 scripts/build.py --domain https://aicreationlab.top
```

(That switches `robots.txt` to allow indexing. Do not run it while the site is in preview mode. Also set `environment: "production"`, `domain` and `paymentUrl` in `config.js` first.)

## Run locally
```bash
python3 -m http.server 8137
```

Open http://localhost:8137/index.html. Use HTTP; opening `index.html` by double-click will not work.

## Where things are edited
All texts, prices, media paths and toggles are in `config.js`: course prices (`products[].price`), bundle price (`product.currentPrice`), hero text, gallery, FAQ, the hero accordion (`heroInfo`), the daily timer (`sale`), the optional `realLesson` block, the support email, company data and the payment URL. The comparison price, saving and percentage are computed from the course prices.

## Publish
GitHub and Netlify: push to `main`. Netlify deploys automatically. `_headers` (adds `noindex`) and `_redirects` (hides the service files below) are Netlify files.

Production on aicreationlab.top (explicit FTPS, port 21, certificate verified, the FTP root is the site folder):

1. **Back up** the server files you are about to replace (download them first).
2. **Upload only the public files:**
   - `index.html`, `thank-you.html`, `styles.css`
   - `app.min.js`, `config.min.js`
   - `robots.txt`, `sitemap.xml`
   - the whole `legal/` and `assets/` folders
3. **Do not upload service files:** `app.js`, `config.js`, `scripts/`, `DEPLOY.md`, `launch-checklist.md`, `_headers`, `_redirects`, `.gitignore`, `.git`. The pages load only the `.min.js` files.
4. **Permissions:** files 644, folders 755 (images once ended up as 600 on another host and stopped loading).
5. **Check the live site:** every page returns 200, images load, no console errors, both timers show the same time, `noindex` is still present while in preview mode.

Keep the FTP password out of the repository and out of chat. Store it in the macOS Keychain, for example:

```bash
security add-generic-password -U -a "<ftp-user>" -s "<service-name>" -w
```

and have your upload tool read it from there.

## When the domain changes
Link-preview bots do not run JavaScript, so write the absolute URLs into the HTML itself: `og:image`, `twitter:image`, canonical and `og:url` in `index.html`. Then update `domain` in `config.js`, rebuild, and fix `robots.txt` and `sitemap.xml`.

## Before sales start
Replace every `[TODO_*]` value in `config.js`, in `legal/*.html` and in `thank-you.html` (search the project for `[TODO_`). Open items are listed in `launch-checklist.md`.
