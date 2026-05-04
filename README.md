<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/5c748f9b-54a6-4455-be9f-49a2405ee206

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Dynamic Admin Editing

You can edit most website content directly from the admin page:

1. Open `/admin`
2. Use the Treatments section for categories/treatments CRUD
3. Use **Dynamic Site Content Editor** to update:
   - Hero and homepage copy
   - About page content
   - Specialists list
   - Blog/Stories cards
   - Instagram links/feed data
   - Contact details, footer details, and map embed URL

Notes:
- Admin changes update the browser immediately.
- On cPanel with PHP enabled, admin saves are also published to server-side JSON so the live site can reflect them across devices.

## cPanel Deployment

- Build locally with `npm run build` to generate the static `out/` directory.
- Zip the contents of `out/` and upload to cPanel `public_html`.
- No Node.js app setup is required.
- No `npm install` is required on cPanel for static hosting.
- PHP must be enabled on cPanel for live admin publishing.
- Keep the uploaded `api/` and `data/` folders intact.

See [DEPLOY.md](DEPLOY.md) for the full cPanel deployment steps.
