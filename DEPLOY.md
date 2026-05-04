# Deploy to cPanel (Static + PHP Dynamic Admin)

This project runs on regular cPanel hosting without a Node.js app. The frontend is static, and admin changes are published through PHP endpoints into JSON files on the server.

## 1. Build static files locally

```bash
npm install
npm run build
```

This generates the static site in `out/`.

## 2. Create upload zip (from `out/`)

```bash
cd out
zip -r ../celebrity-glow-static.zip .
cd ..
```

## 3. Upload to cPanel

1. Open cPanel File Manager
2. Go to `public_html/` (or your target subfolder)
3. Remove old site files (keep backups if needed)
4. Upload `celebrity-glow-static.zip`
5. Extract it directly into `public_html/`

## 4. Make sure PHP is enabled

- Your hosting must support PHP in `public_html`
- The uploaded `api/*.php` files must execute on the server
- The `data/` folder must be writable by PHP so admin saves can publish live content

Recommended permissions:
- `data/` directory: `755` or `775`
- JSON files inside `data/` after first save: `644` or `664`

## 5. Verify routes

After upload, check these URLs:
- `/`
- `/admin/login/`
- `/admin/`
- `/treatments/details/?slug=hydra-facial`

## Admin panel behavior in static mode

- Admin login is client-side.
- Admin saves also publish to server-side JSON through PHP.
- Live pages fetch those JSON files through PHP-backed endpoints.
- Changes can now reflect across devices and browsers on the live site.
- Open pages will pick up server changes on refresh, focus, or the periodic client sync.

## Important notes

- No `npm install` or Node process is needed on cPanel.
- Do not upload `node_modules`.
- Upload the contents of `out/` only.
- Keep the `api/` and `data/` folders from `out/` intact after extraction.
- First admin save will create `data/site-content.json` and `data/treatments.json` on the server.

## Quick refresh rule after new changes

Any time you change code/content defaults:
1. `npm run build`
2. Re-zip `out/`
3. Re-upload and extract on cPanel
